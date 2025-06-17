import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, Home, BarChart, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultTab?: string;
  animationType?: 'slide' | 'fade' | 'scale';
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
  onTabChange?: (tabId: string) => void;
}

const iconMap = {
  'home': Home,
  'bar-chart': BarChart,
  'settings': Settings,
  'user': User,
};

export const TabSwitcher = ({
  tabs,
  defaultTab,
  animationType = 'slide',
  orientation = 'horizontal',
  className = '',
  tabClassName = '',
  contentClassName = '',
  onTabChange
}: TabSwitcherProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isMobile, setIsMobile] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeIndex = tabs.findIndex(tab => tab.id === activeTab);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && scrollContainerRef.current && tabsRef.current) {
      const activeTabElement = tabsRef.current.children[activeIndex] as HTMLElement;
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeTab, activeIndex, isMobile]);

  useEffect(() => {
    if (indicatorRef.current && tabsRef.current) {
      const activeTabElement = tabsRef.current.children[activeIndex] as HTMLElement;
      if (activeTabElement) {
        const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = activeTabElement;
        
        if (orientation === 'horizontal') {
          indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
          indicatorRef.current.style.width = `${offsetWidth}px`;
        } else {
          indicatorRef.current.style.transform = `translateY(${offsetTop}px)`;
          indicatorRef.current.style.height = `${offsetHeight}px`;
        }
      }
    }
  }, [activeTab, activeIndex, orientation, isMobile]);

  const handleTabChange = (newTabId: string) => {
    if (newTabId === activeTab || isAnimating) return;
    
    const newIndex = tabs.findIndex(tab => tab.id === newTabId);
    setDirection(newIndex > activeIndex ? 'right' : 'left');
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveTab(newTabId);
      onTabChange?.(newTabId);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  };

  const handleKeyDown = (e: KeyboardEvent, tabId: string) => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    let newIndex = currentIndex;

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        newIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        handleTabChange(tabId);
        return;
    }

    if (newIndex !== currentIndex) {
      handleTabChange(tabs[newIndex].id);
      setTimeout(() => {
        const newTabElement = tabsRef.current?.children[newIndex] as HTMLElement;
        newTabElement?.focus();
      }, 200);
    }
  };

  const getContentClasses = () => {
    const baseClasses = 'transition-all duration-300 ease-out';
    
    if (isAnimating) {
      switch (animationType) {
        case 'fade':
          return `${baseClasses} opacity-0`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'slide':
        default:
          return `${baseClasses} opacity-0 ${direction === 'right' ? 'translate-x-4' : '-translate-x-4'}`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-x-0 scale-100`;
  };

  return (
    <div className={cn(
      'w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-lg',
      orientation === 'vertical' && !isMobile ? 'flex' : '',
      className
    )}>
      <div className={cn(
        'relative',
        orientation === 'horizontal' || isMobile
          ? 'flex border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm'
          : 'flex flex-col w-72 xl:w-80 border-r border-gray-200 dark:border-gray-700 bg-gradient-to-b from-gray-50/80 to-gray-100/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm min-h-[500px]'
      )}>
        <div 
          ref={scrollContainerRef}
          className={cn(
            'relative z-10 w-full',
            isMobile && orientation === 'horizontal' ? 'overflow-x-auto scrollbar-hide' : 'overflow-visible'
          )}
        >
          <div
            ref={indicatorRef}
            className={cn(
              'absolute transition-all duration-300 ease-out rounded-lg z-10',
              orientation === 'horizontal' || isMobile
                ? 'bottom-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg'
                : 'left-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg'
            )}
          />
          
          <div 
            ref={tabsRef}
            className={cn(
              'flex relative z-20',
              orientation === 'horizontal' || isMobile 
                ? isMobile ? 'flex-row min-w-max px-2' : 'flex-row' 
                : 'flex-col w-full'
            )}
            role="tablist"
            aria-orientation={orientation}
          >
            {tabs.map((tab, index) => {
              const IconComponent = tab.icon ? iconMap[tab.icon as keyof typeof iconMap] : null;
              const isActive = tab.id === activeTab;
              
              return (
                <button
                  key={tab.id}
                  role="tab"
                  tabIndex={isActive ? 0 : -1}
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  className={cn(
                    'group relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background',
                    orientation === 'horizontal' || isMobile 
                      ? isMobile 
                        ? 'px-4 py-3 text-center min-w-[120px] mx-1 rounded-lg my-2' 
                        : 'flex-1 px-6 py-4 text-center' 
                      : 'text-left justify-start px-6 py-4 mx-2 my-1 rounded-xl',
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium',
                    tabClassName
                  )}
                  onClick={() => handleTabChange(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, tab.id)}
                >
                  <div className={cn(
                    'flex items-center transition-all duration-300',
                    orientation === 'horizontal' || isMobile 
                      ? 'justify-center space-x-2' 
                      : 'space-x-3'
                  )}>
                    {IconComponent && (
                      <IconComponent 
                        className={cn(
                          'transition-all duration-300',
                          isActive 
                            ? 'w-5 h-5 text-blue-600 dark:text-blue-400' 
                            : 'w-4 h-4 group-hover:w-5 group-hover:h-5 group-hover:text-blue-500 dark:group-hover:text-blue-400'
                        )} 
                      />
                    )}
                    <span className={cn(
                      'transition-all duration-300 whitespace-nowrap',
                      isMobile ? 'text-sm' : 'text-sm md:text-base',
                      isActive ? 'font-bold' : 'group-hover:font-semibold'
                    )}>
                      {tab.label}
                    </span>
                  </div>
                  
                  <div className={cn(
                    'absolute inset-0 rounded-lg transition-all duration-300',
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-100 shadow-sm' 
                      : 'bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100'
                  )} />
                  
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={cn(
        'relative flex-1 bg-white dark:bg-gray-900',
        orientation === 'horizontal' || isMobile ? 'w-full' : 'flex-1'
      )}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            id={`tabpanel-${tab.id}`}
            role="tabpanel"
            tabIndex={0}
            aria-labelledby={`tab-${tab.id}`}
            className={cn(
              'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset',
              tab.id === activeTab ? 'block' : 'hidden',
              getContentClasses(),
              'p-4 sm:p-6 lg:p-8',
              contentClassName
            )}
          >
            <div className="animate-fade-in">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

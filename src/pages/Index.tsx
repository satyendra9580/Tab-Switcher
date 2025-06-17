import { useState } from "react";
import { TabSwitcher } from "@/components/TabSwitcher";
import { Moon, Sun, Palette, Zap, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [animationType, setAnimationType] = useState<'slide' | 'fade' | 'scale'>('slide');

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const tabData = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'home',
      content: (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 sm:p-6 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 text-sm sm:text-base">Total Users</h3>
              <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-300">12,543</p>
              <p className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 mt-1">+5.2% from last month</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 p-4 sm:p-6 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 group">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 text-sm sm:text-base">Revenue</h3>  
              <p className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform duration-300">$48,567</p>
              <p className="text-xs sm:text-sm text-green-600 dark:text-green-400 mt-1">+12.8% from last month</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 p-4 sm:p-6 rounded-lg border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2 text-sm sm:text-base">Conversion</h3>
              <p className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform duration-300">3.24%</p>
              <p className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 mt-1">+0.8% from last month</p>
            </div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Recent Activity</h3>
            <div className="space-y-3">
              {['New user registered', 'Payment processed', 'Report generated', 'System backup completed'].map((activity, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-all duration-200 group">
                  <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                  <span className="text-xs sm:text-sm flex-1">{activity}</span>
                  <span className="text-xs text-gray-500">{i + 1} min ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'bar-chart',
      content: (
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-4 sm:p-8 rounded-lg border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Performance Metrics</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { label: 'Page Views', value: '125.4K', change: '+8.2%' },
                { label: 'Sessions', value: '32.1K', change: '+15.3%' },
                { label: 'Bounce Rate', value: '28.4%', change: '-2.1%' },
                { label: 'Avg. Duration', value: '3m 42s', change: '+0.8%' }
              ].map((metric, i) => (
                <div key={i} className="text-center p-3 sm:p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 group">
                  <p className="text-lg sm:text-2xl font-bold text-orange-600 dark:text-orange-400 group-hover:scale-105 transition-transform duration-300">{metric.value}</p>
                  <p className="text-xs sm:text-sm font-medium">{metric.label}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">{metric.change}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Traffic Sources</h3>
            <div className="space-y-4">
              {[
                { source: 'Organic Search', percentage: 45, color: 'bg-blue-500' },
                { source: 'Direct', percentage: 30, color: 'bg-green-500' },
                { source: 'Social Media', percentage: 15, color: 'bg-purple-500' },
                { source: 'Referral', percentage: 10, color: 'bg-orange-500' }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <span className="w-20 sm:w-24 text-xs sm:text-sm font-medium">{item.source}</span>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div 
                      className={`${item.color} h-full rounded-full transition-all duration-1000 ease-out group-hover:brightness-110`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm font-medium w-8 sm:w-10 text-right">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      content: (
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">General Settings</h3>
            <div className="space-y-4">
              {[
                { label: 'Enable Notifications', description: 'Receive email notifications for important updates' },
                { label: 'Auto-save Changes', description: 'Automatically save your work every 30 seconds' },
                { label: 'Show Advanced Options', description: 'Display advanced configuration options' },
                { label: 'Enable Dark Mode', description: 'Use dark theme across the application' }
              ].map((setting, i) => (
                <div key={i} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-all duration-300 group">
                  <div className="flex-1 pr-4">
                    <p className="font-medium text-xs sm:text-sm">{setting.label}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{setting.description}</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors duration-200 group-hover:scale-105">
                    <div className="w-5 h-5 bg-white dark:bg-gray-200 rounded-full absolute top-0.5 left-0.5 transition-transform duration-200 transform translate-x-0 shadow-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 p-4 sm:p-6 rounded-lg border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-all duration-300">
            <h3 className="font-semibold text-pink-900 dark:text-pink-100 mb-4 text-sm sm:text-base">Appearance</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {['Light', 'Dark', 'Auto'].map((theme, i) => (
                <button
                  key={i}
                  className="p-2 sm:p-3 rounded-lg border-2 border-pink-200 dark:border-pink-700 hover:border-pink-400 dark:hover:border-pink-500 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`w-full h-6 sm:h-8 rounded mb-2 transition-all duration-300 group-hover:shadow-md ${i === 0 ? 'bg-white' : i === 1 ? 'bg-gray-800' : 'bg-gradient-to-r from-white to-gray-800'}`}></div>
                  <span className="text-xs sm:text-sm font-medium">{theme}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: 'user',
      content: (
        <div className="space-y-4 sm:space-y-6">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 sm:p-6 rounded-lg border border-cyan-200 dark:border-cyan-800 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
                JD
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-900 dark:text-cyan-100">John Doe</h3>
                <p className="text-cyan-700 dark:text-cyan-300 text-sm sm:text-base">john.doe@example.com</p>
                <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 mt-1">Member since March 2023</p>
              </div>
            </div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Account Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Full Name', value: 'John Doe' },
                { label: 'Email', value: 'john.doe@example.com' },
                { label: 'Phone', value: '+1 (555) 123-4567' },
                { label: 'Location', value: 'San Francisco, CA' },
                { label: 'Timezone', value: 'Pacific Standard Time' },
                { label: 'Language', value: 'English (US)' }
              ].map((field, i) => (
                <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-all duration-300 group">
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300">{field.label}</p>
                  <p className="mt-1 text-xs sm:text-sm font-medium">{field.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
            <h3 className="font-semibold mb-4 text-sm sm:text-base">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'Updated profile picture', date: '2 hours ago' },
                { action: 'Changed email preferences', date: '1 day ago' },
                { action: 'Logged in from new device', date: '3 days ago' },
                { action: 'Updated security settings', date: '1 week ago' }
              ].map((activity, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-all duration-300 group">
                  <span className="text-xs sm:text-sm flex-1 pr-2">{activity.action}</span>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{activity.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      <div className="container mx-auto px-4 py-4 sm:py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Interactive Tab Switcher
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
              Showcase of smooth animations and modern UI design
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto">
            <div className="flex items-center space-x-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 flex-1 sm:flex-none">
              <Palette className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <select 
                value={animationType} 
                onChange={(e) => setAnimationType(e.target.value as 'slide' | 'fade' | 'scale')}
                className="bg-transparent border-none outline-none text-xs sm:text-sm font-medium flex-1 sm:flex-none"
              >
                <option value="slide">Slide</option>
                <option value="fade">Fade</option>
                <option value="scale">Scale</option>
              </select>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleTheme}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Tab Switcher */}
        <TabSwitcher 
          tabs={tabData} 
          defaultTab="dashboard"
          animationType={animationType}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
        />
        
        {/* Footer */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-medium">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-xs">
            Fully accessible and responsive • Optimized for all devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

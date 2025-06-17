
# Interactive Tab Switcher

A visually stunning and highly interactive tab switch component built with React, TypeScript, and Tailwind CSS. Features smooth animations, full accessibility support, and extensive customization options.

## ✨ Features

### Core Features
- **Multiple Tabs**: 4 distinct tabs with unique, rich content
- **Custom Animations**: Three animation types (slide, fade, scale) with smooth transitions
- **Active Tab Highlight**: Visual indicators with animated tab selection
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Accessible Navigation**: Full keyboard support and ARIA attributes
- **Reusable Component**: Modular design for easy integration

### Advanced Features
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Tab Icons**: Lucide React icons with dynamic sizing effects
- **Content Transitions**: Staggered animations for content areas
- **Multiple Orientations**: Horizontal and vertical tab layouts
- **Custom Animation Types**: User-selectable animation styles

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd interactive-tab-switcher

# Install dependencies
npm install

# Start development server
npm run dev
```

### Basic Usage

```tsx
import { TabSwitcher } from '@/components/TabSwitcher';

const tabs = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'home',
    content: <YourDashboardContent />
  },
  {
    id: 'analytics',
    label: 'Analytics', 
    icon: 'bar-chart',
    content: <YourAnalyticsContent />
  }
];

function App() {
  return (
    <TabSwitcher 
      tabs={tabs}
      defaultTab="dashboard"
      animationType="slide"
    />
  );
}
```

## 🎨 Customization

### Animation Types
```tsx
<TabSwitcher 
  animationType="slide" 
/>
```

### Orientation
```tsx
<TabSwitcher 
  orientation="vertical"  
/>
```

### Custom Styling
```tsx
<TabSwitcher 
  className="custom-wrapper"
  tabClassName="custom-tab"
  contentClassName="custom-content"
/>
```

### Theme Support
The component automatically adapts to dark mode using Tailwind's dark mode classes.

## ⚡ Performance Features

- **Smooth Animations**: Hardware-accelerated transitions using CSS transforms
- **Optimized Rendering**: Efficient re-renders with proper React patterns
- **Lazy Content**: Content is rendered but hidden for instant switching
- **Memory Efficient**: Minimal DOM manipulation and event listeners

### Keyboard Shortcuts
- `Arrow Keys`: Navigate between tabs
- `Home`: Go to first tab
- `End`: Go to last tab
- `Enter/Space`: Activate focused tab

## 🛠 Technical Details

### Built With
- **React 18** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and animations

## 📱 Responsive Design

The component is fully responsive with:
- Mobile-first approach
- Touch-friendly tap targets (44px minimum)
- Optimized animations for mobile devices

## 🔧 Development

### Project Structure
```
src/
├── components/
│   └── TabSwitcher.tsx    # Main component
├── pages/
│   └── Index.tsx          # Demo page
└── lib/
    └── utils.ts           # Utility functions


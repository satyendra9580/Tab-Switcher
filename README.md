
# Interactive Tab Switcher

A visually stunning and highly interactive tab switch component built with React, TypeScript, and Tailwind CSS. Features smooth animations, full accessibility support, and extensive customization options.

![Tab Switcher Demo](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center)

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
- **Glassmorphism Effects**: Modern backdrop blur and transparency

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

## ♿ Accessibility

- **ARIA Compliant**: Full ARIA tablist, tab, and tabpanel support
- **Keyboard Navigation**: Arrow keys, Home, End, Enter, and Space
- **Focus Management**: Proper focus handling and visual indicators
- **Screen Reader Support**: Semantic HTML and descriptive labels

### Keyboard Shortcuts
- `Arrow Keys`: Navigate between tabs
- `Home`: Go to first tab
- `End`: Go to last tab
- `Enter/Space`: Activate focused tab

## 🎯 Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🛠 Technical Details

### Built With
- **React 18** - Component library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and animations
- **Lucide React** - Icon library
- **Radix UI** - Accessibility primitives

### Architecture
- Functional components with hooks
- Custom animation state management  
- Flexible prop-based configuration
- CSS-in-JS with Tailwind utilities

## 📱 Responsive Design

The component is fully responsive with:
- Mobile-first approach
- Touch-friendly tap targets (44px minimum)
- Adaptive layouts for different screen sizes
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
```

### Key Dependencies
- `@radix-ui/*` - Accessibility primitives
- `lucide-react` - Icons
- `clsx` - Conditional classes
- `tailwind-merge` - Class merging

## 🚀 Deployment

The application is optimized for deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

Build for production:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - feel free to use in your projects!

---

**Note**: This component showcases modern React patterns, accessibility best practices, and smooth animations. It's designed to be both beautiful and functional, serving as a foundation for tab interfaces in modern web applications.

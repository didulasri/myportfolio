# 📦 Components Architecture Guide

This document explains each component in your portfolio and how they work together.

---

## 🏗️ Core Components

### 1. ThemeProvider.tsx
**Purpose**: Manages dark/light mode across the entire app

**Key Features**:
- Stores theme preference in localStorage
- Provides `useTheme()` hook for any component
- Automatically applies theme class to body

**Usage**:
```typescript
const { theme, toggleTheme } = useTheme();
```

---

### 2. Navigation.tsx
**Purpose**: Top navigation bar with responsive menu

**Features**:
- Smooth scroll to sections
- Mobile hamburger menu
- Theme toggle button
- Sticky header on scroll
- Animated mobile menu

**Customization**:
- Update `navLinks` array to add/remove sections
- Modify logo text (line 48)

---

### 3. Hero.tsx
**Purpose**: Landing section with introduction

**Features**:
- Typing animation effect
- Social media links
- Floating tech symbols in background
- Scroll indicator
- Responsive design

**Customization**:
- Line 12: Change typing text
- Lines 60-74: Update name and description
- Lines 87-122: Modify social links

---

### 4. About.tsx
**Purpose**: Personal summary and skills showcase

**Features**:
- Profile highlights grid
- Technical skills categorization
- Animated cards on scroll
- Two-column responsive layout

**Customization**:
- Lines 8-12: Update skills array
- Lines 14-39: Modify highlights
- Lines 70-84: Edit about text

---

### 5. Experience.tsx
**Purpose**: Work experience and education timeline

**Features**:
- Professional experience card
- Education grid
- Achievement highlights
- Technology tags

**Customization**:
- Lines 6-21: Update work experience
- Lines 23-31: Modify education
- Lines 33-37: Update school info

---

### 6. Projects.tsx
**Purpose**: Showcase featured projects

**Features**:
- Grid layout
- Project cards with animations
- Featured badge support
- Technology tags
- Repository links

**Customization**:
- Lines 6-69: Add/edit projects
- Set `featured: true` for important projects

---

### 7. ProjectCard.tsx
**Purpose**: Reusable project display component

**Props**:
- `title`: Project name
- `description`: Project details
- `technologies`: Array of tech used
- `type`: 'Individual' or 'Group'
- `role`: Your role (optional)
- `repository`: Single repo link
- `repositories`: Multiple repo links
- `featured`: Highlight as featured

---

### 8. Connect.tsx
**Purpose**: Contact information and message form

**Features**:
- Contact details display
- Social media links
- Contact form (opens email client)
- Responsive layout

**Customization**:
- Lines 11-28: Update contact info
- Lines 30-49: Update social links

---

### 9. Footer.tsx
**Purpose**: Bottom footer with copyright

**Features**:
- Copyright notice
- "Back to top" button
- Built with credits
- Theme-aware styling

---

## 🎨 Utility Components

### Button.tsx
**Purpose**: Reusable styled button component

**Variants**:
- `primary`: Filled button with glow
- `secondary`: Outlined button
- `ghost`: Transparent button

**Sizes**:
- `sm`: Small button
- `md`: Medium button (default)
- `lg`: Large button

**Usage**:
```typescript
<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

---

### SectionTitle.tsx
**Purpose**: Consistent section headers

**Props**:
- `title`: Main heading text
- `subtitle`: Optional description
- `align`: 'left', 'center', or 'right'

**Usage**:
```typescript
<SectionTitle
  title="My Projects"
  subtitle="Things I've built"
  align="center"
/>
```

---

## 🎯 Layout Structure

### app/layout.tsx
- Root layout component
- Defines metadata (SEO)
- Wraps app with ThemeProvider
- Sets up HTML structure

### app/page.tsx
- Main page component
- Composes all sections
- Defines page order

---

## 🎨 Styling Architecture

### Global Styles (app/globals.css)

**Custom Properties**:
```css
--font-display: Syne
--font-body: JetBrains Mono
--font-mono: Space Mono
```

**Custom Classes**:
- `.gradient-text`: Multi-color gradient text
- `.glow-effect`: Glowing border effect
- `.grid-pattern`: Subtle grid background
- `.tech-bg`: Technology symbol background

**Animations**:
- `fade-in`: Fade in element
- `slide-up`: Slide up from bottom
- `slide-in`: Slide in from left
- `glow`: Pulsing glow effect
- `float`: Floating animation

---

### Tailwind Configuration (tailwind.config.ts)

**Custom Colors**:
```typescript
primary: '#00ff88'        // Neon green
accent.cyan: '#00ffff'    // Cyan
accent.purple: '#a855f7'  // Purple
accent.pink: '#ec4899'    // Pink
dark.bg: '#0a0a0a'        // Dark background
```

**Custom Animations**:
All animations defined in keyframes section

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Usage Example:
```typescript
className="text-sm md:text-base lg:text-lg"
```

This means:
- Mobile: text-sm
- Tablet: text-base
- Desktop: text-lg

---

## 🔄 Data Flow

```
User Interaction
      ↓
Navigation (smooth scroll)
      ↓
Section Component
      ↓
Update UI / Theme
```

### Theme Flow:
```
ThemeProvider (localStorage)
      ↓
useTheme() hook
      ↓
All Components
      ↓
CSS classes applied
```

---

## 🎯 Best Practices Used

1. **Component Reusability**
   - Button, SectionTitle, ProjectCard are reusable
   - Consistent prop interfaces

2. **Separation of Concerns**
   - Each component handles one section
   - Clear file structure

3. **Type Safety**
   - TypeScript for all components
   - Proper interface definitions

4. **Performance**
   - Client components only where needed
   - Optimized animations
   - Minimal re-renders

5. **Accessibility**
   - Semantic HTML
   - Proper ARIA labels
   - Keyboard navigation support

6. **Maintainability**
   - Clear component names
   - Organized file structure
   - Commented code where needed

---

## 🔧 Adding New Components

### Step 1: Create Component
```typescript
// components/NewSection.tsx
'use client';
import { useTheme } from './ThemeProvider';

export default function NewSection() {
  const { theme } = useTheme();
  
  return (
    <section id="new-section">
      {/* Your content */}
    </section>
  );
}
```

### Step 2: Add to Page
```typescript
// app/page.tsx
import NewSection from '@/components/NewSection';

export default function Home() {
  return (
    <>
      {/* existing components */}
      <NewSection />
    </>
  );
}
```

### Step 3: Add Navigation Link
```typescript
// components/Navigation.tsx
const navLinks = [
  // existing links
  { name: 'New Section', href: '#new-section' },
];
```

---

## 💡 Tips for Customization

1. **Keep Components Small**
   - One component = one responsibility
   - Easy to understand and modify

2. **Use Theme Consistently**
   - Always check `theme` value
   - Apply conditional classes

3. **Follow Naming Conventions**
   - Components: PascalCase
   - Files: Same as component name
   - Props: camelCase

4. **Test Responsiveness**
   - Check all breakpoints
   - Test on real devices

5. **Maintain Consistency**
   - Use same spacing units
   - Follow color palette
   - Keep animation timing similar

---

## 🐛 Debugging Tips

### Component Not Showing?
1. Check import path
2. Verify it's in page.tsx
3. Check section ID for navigation

### Styling Not Working?
1. Verify Tailwind class names
2. Check theme conditional logic
3. Inspect element in browser

### Animation Issues?
1. Check animation delay values
2. Verify keyframes in config
3. Test without animations first

---

**This architecture provides a solid foundation for a professional, maintainable portfolio!**

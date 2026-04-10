# Portfolio Website Setup Guide

## 🎯 Quick Start

Follow these steps to get your portfolio website up and running:

### Step 1: Install Node.js

Make sure you have Node.js 18.x or later installed on your computer.

- Download from: https://nodejs.org/
- Verify installation: `node --version`

### Step 2: Install Dependencies

Open a terminal in the portfolio folder and run:

```bash
npm install
```

This will install all required packages (Next.js, React, Tailwind CSS, etc.)

### Step 3: Run Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

## 🎨 Customization Guide

### 1. Update Personal Information

#### Hero Section (`components/Hero.tsx`)
- Line 12: Change the typing animation text if desired
- Lines 60-64: Update your name and title
- Lines 70-74: Modify your introduction text

#### About Section (`components/About.tsx`)
- Lines 8-12: Update skills array with your technologies
- Lines 14-39: Modify highlights (education, experience, focus areas)
- Lines 70-84: Update your personal summary

#### Experience Section (`components/Experience.tsx`)
- Lines 6-21: Update your work experience details
- Lines 23-31: Modify education information
- Lines 33-37: Update school/previous education

#### Projects Section (`components/Projects.tsx`)
- Lines 6-69: Update project details, technologies, and repository links
- Add or remove projects as needed

#### Connect Section (`components/Connect.tsx`)
- Lines 11-28: Update contact information (email, phone, location)
- Lines 30-49: Update social media links

### 2. Change Color Scheme

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#00ff88',  // Change this for primary color
    dark: '#00cc6e',
  },
  accent: {
    cyan: '#00ffff',     // Change accent colors
    purple: '#a855f7',
    pink: '#ec4899',
  },
}
```

### 3. Modify Fonts

Current fonts (in `app/globals.css`):
- Display (headings): **Syne**
- Body (paragraphs): **JetBrains Mono**
- Monospace (code): **Space Mono**

To change fonts:
1. Update the Google Fonts import URL
2. Modify the CSS variables in `:root`

### 4. Add/Remove Sections

To add a new section:
1. Create a new component in `/components`
2. Import and add it to `app/page.tsx`
3. Add navigation link in `components/Navigation.tsx`

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

Your site will be live in minutes with a free `.vercel.app` domain!

### Option 2: Netlify (Free)

1. Push code to GitHub (see step 1 above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### Option 3: Custom Domain

After deploying to Vercel or Netlify:
1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. Add custom domain in your hosting platform settings
3. Update DNS records as instructed

## 📱 Testing on Mobile

1. Get your local IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`

2. Run development server:
   ```bash
   npm run dev
   ```

3. On your mobile device (connected to same WiFi):
   - Open browser
   - Go to: `http://YOUR_IP_ADDRESS:3000`

## 🔧 Build for Production

To create an optimized production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm start
```

## 🎯 Performance Optimization

Your portfolio is already optimized with:
- ✅ Next.js 15 with automatic code splitting
- ✅ Optimized images and fonts
- ✅ Minimal JavaScript bundle
- ✅ CSS optimization with Tailwind
- ✅ Fast page loads and smooth animations

## 🐛 Troubleshooting

### Port 3000 already in use

Run on a different port:
```bash
npm run dev -- -p 3001
```

### Build errors

Clear cache and reinstall:
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Theme not saving

Check browser localStorage is enabled and not blocked.

## 📚 Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Documentation**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs

## ❓ Common Questions

**Q: Can I add a blog section?**
A: Yes! Create a new component and add markdown support or integrate with a headless CMS.

**Q: How do I add Google Analytics?**
A: Install `@next/third-parties` and add the Google Analytics component to your layout.

**Q: Can I use this template commercially?**
A: Yes! It's open source (MIT License). Attribution appreciated but not required.

**Q: How do I update content after deployment?**
A: Make changes locally, commit to GitHub, and your hosting platform will auto-deploy.

## 💡 Tips for Success

1. **Keep it Updated**: Regularly add new projects and skills
2. **Test Thoroughly**: Check on different devices and browsers
3. **Optimize Images**: Use WebP format for better performance
4. **Monitor Analytics**: Track visitors and improve based on data
5. **Get Feedback**: Ask friends and mentors to review your portfolio

## 🆘 Need Help?

If you encounter any issues:
1. Check the README.md file
2. Review Next.js documentation
3. Search Stack Overflow
4. Create an issue on GitHub

---

**Good luck with your job search! 🚀**

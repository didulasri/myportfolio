# 🚀 Quick Start - 3 Steps to Launch

## Step 1: Install Dependencies
```bash
cd didula-portfolio
npm install
```

## Step 2: Run Development Server
```bash
npm run dev
```

## Step 3: Open Browser
```
http://localhost:3000
```

---

## 🎨 Key Features

✅ **Dark/Light Mode** - Toggle in top-right corner  
✅ **Fully Responsive** - Works on all devices  
✅ **Smooth Animations** - Professional transitions  
✅ **SEO Optimized** - Ready for search engines  
✅ **Production Ready** - Deploy immediately  

---

## 📝 Customize Your Content

### Update Contact Info
📍 `components/Connect.tsx` - Lines 11-49

### Update Projects
📁 `components/Projects.tsx` - Lines 6-69

### Update Experience
💼 `components/Experience.tsx` - Lines 6-37

### Update Skills
⚡ `components/About.tsx` - Lines 8-12

---

## 🌐 Deploy to Vercel (Free)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "My portfolio"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"
   
   **Done!** Your site is live in ~2 minutes 🎉

---

## 🎯 File Structure

```
didula-portfolio/
├── app/
│   ├── globals.css      ← Styles & animations
│   ├── layout.tsx       ← Meta tags & theme
│   └── page.tsx         ← Main page
├── components/
│   ├── Hero.tsx         ← Landing section
│   ├── About.tsx        ← About & skills
│   ├── Experience.tsx   ← Work & education
│   ├── Projects.tsx     ← Project showcase
│   ├── Connect.tsx      ← Contact form
│   └── ...              ← Other components
└── tailwind.config.ts   ← Colors & theme
```

---

## 🎨 Color Customization

Edit `tailwind.config.ts`:

```typescript
primary: '#00ff88',     // Main green
accent: {
  cyan: '#00ffff',      // Cyan highlights
  purple: '#a855f7',    // Purple accents
  pink: '#ec4899',      // Pink touches
}
```

---

## 📱 Test on Mobile

1. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Run: `npm run dev`
3. Mobile browser: `http://YOUR_IP:3000`

---

## 🔥 Production Build

```bash
npm run build
npm start
```

---

## 💡 Pro Tips

1. **Update regularly** - Add new projects and skills
2. **Test everywhere** - Check on different browsers/devices
3. **Optimize images** - Use WebP format when possible
4. **Add analytics** - Track visitors with Google Analytics
5. **Get feedback** - Ask mentors to review your portfolio

---

## 🆘 Common Issues

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
```

**Theme not working?**
- Check browser localStorage is enabled

---

## 📚 Learn More

- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- TypeScript: https://typescriptlang.org/docs

---

**Built with Next.js 15 + TypeScript + Tailwind CSS**

Good luck with your job search! 🚀

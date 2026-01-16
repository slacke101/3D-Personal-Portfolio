# Deployment Guide

## 🚀 Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (make sure sensitive files are in .gitignore)
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"

3. **Import your repository**
   - Select your portfolio repository
   - Vercel will auto-detect it's a React app

4. **Configure build settings** (usually auto-detected):
   - **Framework Preset:** Create React App
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

5. **Add Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add any required env vars

6. **Deploy!**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For production: `vercel --prod`

### Option 3: Connect GitHub Repository

1. **In Vercel Dashboard:**
   - Click "New Project"
   - Import from GitHub
   - Select your repository
   - Configure and deploy

---

## 📁 What Gets Deployed

### ✅ Included in Deployment:
- Source code (`src/` folder)
- Public assets (favicon, manifest, etc.)
- Build output (`build/` folder - generated during build)
- Configuration files (package.json, vercel.json)

### ❌ NOT Included (via .gitignore):
- `node_modules/` (installed during build)
- Videos (`public/videos/`)
- Images (`public/images/`)
- STL files (`public/models/`)
- Environment variables
- Build folder (generated fresh on Vercel)

---

## 🔒 Adding Media Files to Vercel

Since media files are in `.gitignore`, you have two options:

### Option 1: Add Media After Deployment
1. Deploy your code to Vercel
2. Use Vercel's file upload feature (if available)
3. Or use a CDN/service like:
   - Cloudinary (for images/videos)
   - AWS S3
   - GitHub Releases (for larger files)

### Option 2: Use External URLs
Update your project data to use external URLs:
```javascript
{
  video: 'https://your-cdn.com/videos/amie-demo.mp4',
  images: ['https://your-cdn.com/images/amie-1.png'],
  stlFiles: [{
    url: 'https://your-cdn.com/models/drone-frame.stl'
  }]
}
```

### Option 3: Temporary Allow Media (Not Recommended)
If you need to include media files temporarily:
1. Remove them from `.gitignore` temporarily
2. Commit and push
3. Add them back to `.gitignore`
4. **Note:** This will make files public in your repo

---

## 🔧 Vercel Configuration

Your `vercel.json` is already set up. It should look like:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "devCommand": "npm start",
  "installCommand": "npm install"
}
```

---

## 📝 Deployment Checklist

Before deploying:

- [ ] All sensitive files are in `.gitignore`
- [ ] No API keys or secrets in code
- [ ] Test build locally: `npm run build`
- [ ] Check that build folder is generated
- [ ] Verify no large files in repository
- [ ] Update project data with correct URLs (if using external hosting)

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Test build locally: `npm run build`
- Ensure all dependencies are in `package.json`

### Media Files Not Loading
- Check file paths (should start with `/` for public folder)
- Verify files are in `public/` folder
- Check browser console for 404 errors

### STL Files Not Loading
- Ensure STL files are accessible
- Check CORS settings if using external URLs
- Verify file paths in project data

---

## 🔄 Updating Your Site

After making changes:

1. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push origin main
   ```

2. **Vercel auto-deploys** (if connected to GitHub)
   - Or manually trigger: Vercel Dashboard → Deployments → Redeploy

---

## 📊 Recommended: Use CDN for Media

For better performance and to keep repo size small:

1. **Upload videos/images to:**
   - Cloudinary (free tier available)
   - AWS S3 + CloudFront
   - GitHub Releases (for larger files)

2. **Update project data:**
   ```javascript
   video: 'https://res.cloudinary.com/your-account/video/upload/amie-demo.mp4'
   ```

This keeps your repository clean and improves load times!

# How to Add Media Files to Your Portfolio

## 📹 Adding Videos (e.g., AMIE Project)

### Step 1: Place Your Video File
1. Put your video file in the `public/videos/` folder
2. Supported formats: `.mp4`, `.webm`, `.ogg`
3. Recommended: Use `.mp4` format for best browser compatibility
4. Example: `public/videos/amie-demo.mp4`

### Step 2: Update Project Data
Open `src/data/projects.js` and find your project (AMIE):

```javascript
{
  id: 'amie',
  // ... other fields ...
  video: '/videos/amie-demo.mp4', // Path from public folder
  mediaType: 'video', // Change from 'image' to 'video'
  // ... rest of project data
}
```

### Step 3: Video File Naming
- Use lowercase letters and hyphens: `amie-demo.mp4`
- Avoid spaces: use `-` or `_` instead
- Keep file names descriptive but short

### Step 4: Video Optimization Tips
- Compress large videos (use tools like HandBrake or online compressors)
- Recommended max file size: 10-20MB for web
- Resolution: 1080p or 720p is usually sufficient
- Format: H.264 codec in MP4 container

---

## 🎨 Adding STL Files (e.g., BenAI Drone)

### Step 1: Place Your STL Files
1. Put your STL files in the `public/models/` folder
2. Example: `public/models/drone-frame.stl`
3. You can add multiple STL files for different components

### Step 2: Update Project Data
Open `src/data/projects.js` and find the BenAI project:

```javascript
{
  id: 'benai-6',
  // ... other fields ...
  stlFiles: [
    {
      name: 'Drone Frame',           // Display name
      url: '/models/drone-frame.stl', // Path from public folder
      color: '#d73f09'                // Optional: custom color
    },
    {
      name: 'Gimbal Mount',
      url: '/models/gimbal-mount.stl',
      color: '#ff6b28'
    },
    // Add more STL files as needed
  ]
}
```

### Step 3: STL File Tips
- File size: Keep STL files under 5MB for best performance
- Naming: Use descriptive names like `drone-frame.stl`, `gimbal-mount.stl`
- Multiple files: You can add as many STL files as you want
- Colors: Each model can have its own color (hex code)

---

## 📁 Folder Structure

Your `public` folder should look like this:

```
public/
├── videos/
│   ├── amie-demo.mp4
│   └── (other videos)
├── models/
│   ├── drone-frame.stl
│   ├── gimbal-mount.stl
│   └── (other STL files)
├── favicon.ico
├── index.html
├── manifest.json
└── robots.txt
```

---

## ✅ Quick Checklist

### For Videos:
- [ ] Video file placed in `public/videos/`
- [ ] Video path updated in `src/data/projects.js`
- [ ] `mediaType` set to `'video'`
- [ ] Video file is optimized (compressed if needed)

### For STL Files:
- [ ] STL file(s) placed in `public/models/`
- [ ] `stlFiles` array updated in `src/data/projects.js`
- [ ] Each STL file has a `name`, `url`, and optional `color`
- [ ] File paths start with `/models/` (relative to public folder)

---

## 🚀 After Adding Files

1. **Restart your dev server** if it's running:
   ```bash
   npm start
   ```

2. **Test the files**:
   - For videos: Navigate to the project page and check if video plays
   - For STL files: Navigate to BenAI project page and check if 3D viewer loads

3. **If files don't load**:
   - Check browser console for errors
   - Verify file paths are correct
   - Make sure files are in the correct folders
   - Check file names match exactly (case-sensitive)

---

## 📝 Example: Complete AMIE Project with Video

```javascript
{
  id: 'amie',
  title: 'AMIE',
  // ... other fields ...
  video: '/videos/amie-demo.mp4',
  mediaType: 'video',
  images: ['/images/amie-1.png', '/images/amie-2.png'], // Optional screenshots
  // ... rest of project
}
```

## 📝 Example: Complete BenAI Project with STL Files

```javascript
{
  id: 'benai-6',
  title: 'Autonomous Drone Software - BenAI 6',
  // ... other fields ...
  stlFiles: [
    {
      name: 'Main Frame',
      url: '/models/drone-frame.stl',
      color: '#d73f09'
    },
    {
      name: 'Camera Gimbal',
      url: '/models/gimbal-mount.stl',
      color: '#ff6b28'
    },
    {
      name: 'Sensor Array',
      url: '/models/sensor-mount.stl',
      color: '#ffffff'
    }
  ],
  // ... rest of project
}
```

---

## 💡 Pro Tips

1. **Video Compression**: Use online tools like CloudConvert or HandBrake to compress videos
2. **STL Optimization**: Use MeshLab or Blender to reduce polygon count if STL files are too large
3. **File Organization**: Keep related files together (e.g., all AMIE videos in one folder)
4. **Naming Convention**: Use consistent naming: `project-name-media-type-number.ext`
5. **Testing**: Always test locally before deploying

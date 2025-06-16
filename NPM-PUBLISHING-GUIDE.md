# 📦 NPM Package Publishing Guide for Geeks UI

## 🎯 Pre-Publishing Checklist

### 1. **Setup Requirements**
- ✅ Node.js installed (v14+)
- ✅ NPM account created at [npmjs.com](https://npmjs.com)
- ✅ Git repository setup

### 2. **Account Setup**
```bash
# Login to NPM
npm login

# Verify login
npm whoami
```

## 🚀 Publishing Steps

### Step 1: Install Dependencies
```bash
cd GeeksUI
npm install
```

### Step 2: Build the Framework
```bash
# This will create dist/geeks-ui.css and dist/geeks-ui.min.css
npm run build
```

### Step 3: Test Locally
```bash
# Test the package locally
npm pack

# This creates a .tgz file you can test with:
# npm install ./geeksui-framework-1.0.0.tgz
```

### Step 4: Publish to NPM
```bash
# Publish to NPM registry
npm publish

# For scoped packages (recommended):
npm publish --access public
```

## 📋 Package Structure Created

```
GeeksUI/
├── package.json          # NPM configuration
├── README.md             # Package documentation
├── LICENSE               # MIT license
├── .npmignore           # Files to exclude from NPM
├── src/                 # Source files
│   ├── variables.css    # CSS custom properties
│   ├── alerts.css       # Alert components
│   ├── buttons.css      # Button components
│   ├── layout.css       # Container and layout
│   ├── navigation.css   # Header and navbar
│   ├── footer.css       # Footer component
│   └── geeks-ui.css     # Main entry file
└── dist/                # Built files (created by npm run build)
    ├── geeks-ui.css     # Development version
    └── geeks-ui.min.css # Production version
```

## 🎨 How Users Will Install & Use

### Installation
```bash
# Via NPM
npm install @geeksui/framework

# Via Yarn
yarn add @geeksui/framework
```

### Usage Examples

#### 1. **HTML Projects**
```html
<link rel="stylesheet" href="node_modules/@geeksui/framework/dist/geeks-ui.min.css">
```

#### 2. **React/Vue/Angular**
```js
import '@geeksui/framework/dist/geeks-ui.css';
```

#### 3. **Webpack/Vite Projects**
```css
@import '@geeksui/framework/dist/geeks-ui.css';
```

#### 4. **CDN (via unpkg)**
```html
<link rel="stylesheet" href="https://unpkg.com/@geeksui/framework@latest/dist/geeks-ui.min.css">
```

## 🔄 Version Updates

### Semantic Versioning
- **1.0.0** → **1.0.1** (patch: bug fixes)
- **1.0.0** → **1.1.0** (minor: new features)
- **1.0.0** → **2.0.0** (major: breaking changes)

### Update Commands
```bash
# Patch version (1.0.0 → 1.0.1)
npm version patch
npm publish

# Minor version (1.0.0 → 1.1.0)
npm version minor
npm publish

# Major version (1.0.0 → 2.0.0)
npm version major
npm publish
```

## 📊 NPM Package Benefits

### ✅ **For Users:**
- Easy installation with `npm install`
- Automatic dependency management
- Version control and updates
- CDN availability via unpkg
- Works with all build tools

### ✅ **For You:**
- Professional distribution
- Usage statistics
- Easy maintenance
- Version history
- Community adoption

## 🎯 Next Steps

1. **Test the build:**
   ```bash
   cd GeeksUI
   npm install
   npm run build
   ```

2. **Verify everything works:**
   - Check that `dist/` folder is created
   - Test with the provided test page

3. **Publish:**
   ```bash
   npm login
   npm publish --access public
   ```

4. **Celebrate! 🎉**
   Your package will be available at:
   - `npm install @geeksui/framework`
   - `https://npmjs.com/package/@geeksui/framework`

## 🚨 Important Notes

- Package name `@geeksui/framework` requires a scoped NPM account
- Alternative names: `geeks-ui-css`, `geeksui-framework`
- Make sure to test thoroughly before publishing
- Once published, you can't unpublish versions older than 24 hours

Your CSS framework will be as easy to install as Bootstrap or Tailwind! 🚀

# 🔄 Migration Guide - Geeks UI Framework

[![npm version](https://img.shields.io/npm/v/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)

This guide helps you migrate from older versions of Geeks UI to the latest version (v2.0.2).

## 📋 Table of Contents

1. [Migration Overview](#migration-overview)
2. [From v1.x to v2.0](#from-v1x-to-v20)
3. [Breaking Changes](#breaking-changes)
4. [New Features](#new-features)
5. [Step-by-Step Migration](#step-by-step-migration)
6. [Compatibility Mode](#compatibility-mode)
7. [Troubleshooting](#troubleshooting)

---

## 🎯 Migration Overview

### What's Changed in v2.0

- **🆕 9 New Components**: Forms, Cards, Modal, Badges, Progress, Tabs, Accordion, Dropdown, Tooltips
- **🎨 Enhanced CSS Variables**: More customization options
- **📱 Improved Responsive Design**: Better mobile experience
- **⚡ Performance Improvements**: Smaller bundle size, faster loading
- **🔧 Better Developer Experience**: Improved class naming consistency
- **📚 Comprehensive Documentation**: Complete guides and examples

### Compatibility

| Version | Status | Support |
|---------|--------|---------|
| v2.0.x | ✅ Current | Full support |
| v1.x | ⚠️ Legacy | Security fixes only |
| v0.x | ❌ Deprecated | No support |

---

## ⬆️ From v1.x to v2.0

### Installation Update

#### Old Way (v1.x)
```bash
npm install geeks-ui-framework@1.x
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@1.1.0/dist/geeks-ui.min.css">
```

#### New Way (v2.0+)
```bash
npm install geeks-ui-framework@2.0.2
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
```

### Package Name Consistency

✅ **Good News**: The package name remains the same: `geeks-ui-framework`

---

## 💥 Breaking Changes

### 1. Button Class Changes

#### Before (v1.x)
```html
<!-- Old button classes -->
<button class="btn btn-blue">Button</button>
<button class="btn btn-red">Button</button>
<button class="btn btn-green">Button</button>
```

#### After (v2.0+)
```html
<!-- New semantic button classes -->
<button class="btn btn-primary">Button</button>
<button class="btn btn-danger">Button</button>
<button class="btn btn-success">Button</button>
```

#### Migration Map
| v1.x Class | v2.0+ Class | Notes |
|------------|-------------|-------|
| `.btn-blue` | `.btn-primary` | Changed to semantic naming |
| `.btn-red` | `.btn-danger` | More descriptive |
| `.btn-green` | `.btn-success` | Semantic meaning |
| `.btn-yellow` | `.btn-warning` | Better accessibility |
| `.btn-gray` | `.btn-secondary` | Consistent with standards |

### 2. CSS Variable Changes

#### Before (v1.x)
```css
:root {
  --primary-color: #1e90ff;
  --secondary-color: #6c757d;
}
```

#### After (v2.0+)
```css
:root {
  --geeks-ui-primary: #1e90ff;
  --geeks-ui-secondary: #6c757d;
}
```

### 3. Container System Updates

#### Before (v1.x)
```html
<!-- Limited container options -->
<div class="container">Content</div>
```

#### After (v2.0+)
```html
<!-- Enhanced container system -->
<div class="container">Fixed width container</div>
<div class="container-fluid">Full width container</div>
```

---

## ✨ New Features in v2.0

### 1. Form Components
```html
<!-- New in v2.0 -->
<div class="form-group">
  <label class="form-label">Email</label>
  <input type="email" class="form-input" placeholder="Enter email">
</div>

<div class="form-group">
  <label class="form-check">
    <input type="checkbox" class="form-check-input">
    <span class="form-check-label">Subscribe to newsletter</span>
  </label>
</div>
```

### 2. Card Components
```html
<!-- New in v2.0 -->
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content goes here...</p>
  </div>
  <div class="card-footer">Footer</div>
</div>
```

### 3. Modal Components
```html
<!-- New in v2.0 -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modal Title</h5>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

### 4. Badge Components
```html
<!-- New in v2.0 -->
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success badge-pill">Success Pill</span>
<h4>Messages <span class="badge badge-danger">99+</span></h4>
```

### 5. Progress Bars
```html
<!-- New in v2.0 -->
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 75%"></div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-animated" style="width: 50%"></div>
</div>
```

### 6. Tab Components
```html
<!-- New in v2.0 -->
<div class="tabs">
  <ul class="tab-list">
    <li class="tab-item">
      <a class="tab-link active" href="#tab1">Tab 1</a>
    </li>
    <li class="tab-item">
      <a class="tab-link" href="#tab2">Tab 2</a>
    </li>
  </ul>
  <div class="tab-content">
    <div id="tab1" class="tab-pane active">Content 1</div>
    <div id="tab2" class="tab-pane">Content 2</div>
  </div>
</div>
```

---

## 🔧 Step-by-Step Migration

### Step 1: Update Dependencies

```bash
# Remove old version
npm uninstall geeks-ui-framework

# Install new version
npm install geeks-ui-framework@2.0.2
```

### Step 2: Update CDN Links

Replace in your HTML files:

```html
<!-- Replace this -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@1.1.0/dist/geeks-ui.min.css">

<!-- With this -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
```

### Step 3: Update Button Classes

Use this search and replace pattern:

```bash
# Find and replace in your editor
Find: btn-blue
Replace: btn-primary

Find: btn-red  
Replace: btn-danger

Find: btn-green
Replace: btn-success

Find: btn-yellow
Replace: btn-warning

Find: btn-gray
Replace: btn-secondary
```

### Step 4: Update CSS Variables

```css
/* Update your custom CSS */
/* Old */
.my-component {
  background: var(--primary-color);
}

/* New */
.my-component {
  background: var(--geeks-ui-primary);
}
```

### Step 5: Test Your Application

1. **Visual Check**: Ensure all components look correct
2. **Functionality Test**: Test all interactive elements
3. **Responsive Test**: Check mobile and tablet views
4. **Browser Test**: Test in different browsers

---

## 🤝 Compatibility Mode

For gradual migration, you can use both versions temporarily:

### Temporary Dual Loading (Not Recommended for Production)

```html
<!-- Load v2.0 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">

<!-- Custom compatibility CSS -->
<style>
/* Temporary compatibility for v1.x classes */
.btn-blue { @extend .btn-primary; }
.btn-red { @extend .btn-danger; }
.btn-green { @extend .btn-success; }
.btn-yellow { @extend .btn-warning; }
.btn-gray { @extend .btn-secondary; }
</style>
```

### Using CSS Custom Properties for Gradual Migration

```css
/* Create aliases for old variable names */
:root {
  --primary-color: var(--geeks-ui-primary);
  --secondary-color: var(--geeks-ui-secondary);
  --success-color: var(--geeks-ui-success);
  --danger-color: var(--geeks-ui-warning);
  --info-color: var(--geeks-ui-info);
}
```

---

## 🛠️ Troubleshooting

### Common Migration Issues

#### Issue 1: Buttons Look Different
**Problem**: Button colors or sizes changed after migration

**Solution**: Update button classes using the migration map above

```html
<!-- Before -->
<button class="btn btn-blue btn-large">Submit</button>

<!-- After -->
<button class="btn btn-primary btn-lg">Submit</button>
```

#### Issue 2: Custom CSS Not Working
**Problem**: Custom styles referencing old CSS variables

**Solution**: Update variable names
```css
/* Before */
.custom-element {
  background: var(--primary-color);
}

/* After */
.custom-element {
  background: var(--geeks-ui-primary);
}
```

#### Issue 3: Layout Issues
**Problem**: Container behavior changed

**Solution**: Use appropriate container class
```html
<!-- For fixed-width layouts -->
<div class="container">Content</div>

<!-- For full-width layouts -->
<div class="container-fluid">Content</div>
```

#### Issue 4: Missing Components
**Problem**: Getting errors about missing classes

**Solution**: Ensure you're using the latest version
```bash
# Check your version
npm list geeks-ui-framework

# Update if needed
npm install geeks-ui-framework@latest
```

### Migration Checklist

- [ ] Updated npm package to v2.0.2
- [ ] Updated CDN links to v2.0.2
- [ ] Replaced old button classes
- [ ] Updated CSS variable references
- [ ] Tested all components visually
- [ ] Tested responsive behavior
- [ ] Verified browser compatibility
- [ ] Updated documentation/comments
- [ ] Removed compatibility CSS (if used)

---

## 📚 Additional Resources

### Documentation
- **[Getting Started Guide](GETTING-STARTED.md)** - Complete setup instructions
- **[API Reference](API-REFERENCE.md)** - Detailed class documentation
- **[Quick Reference](QUICK-REFERENCE.md)** - Handy cheat sheet
- **[Interactive Examples](INTERACTIVE-EXAMPLES.html)** - Live playground

### Support
- **GitHub Issues**: [Report Migration Problems](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues)
- **NPM Package**: [geeks-ui-framework](https://www.npmjs.com/package/geeks-ui-framework)
- **Version History**: [Changelog](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/releases)

### Migration Tools

#### Automated Migration Script (Bash)
```bash
#!/bin/bash
# migrate-geeks-ui.sh
# Automated migration script for Geeks UI v1.x to v2.0

echo "Starting Geeks UI migration..."

# Update button classes
find . -name "*.html" -type f -exec sed -i 's/btn-blue/btn-primary/g' {} \;
find . -name "*.html" -type f -exec sed -i 's/btn-red/btn-danger/g' {} \;
find . -name "*.html" -type f -exec sed -i 's/btn-green/btn-success/g' {} \;
find . -name "*.html" -type f -exec sed -i 's/btn-yellow/btn-warning/g' {} \;
find . -name "*.html" -type f -exec sed -i 's/btn-gray/btn-secondary/g' {} \;

# Update CDN links
find . -name "*.html" -type f -exec sed -i 's|geeks-ui-framework@1\.[0-9]\+\.[0-9]\+|geeks-ui-framework@2.0.2|g' {} \;

echo "Migration completed! Please test your application."
```

#### PowerShell Migration Script (Windows)
```powershell
# migrate-geeks-ui.ps1
# Automated migration script for Geeks UI v1.x to v2.0

Write-Host "Starting Geeks UI migration..." -ForegroundColor Green

# Update button classes
Get-ChildItem -Recurse -Include *.html | ForEach-Object {
    (Get-Content $_) | 
    ForEach-Object { $_ -replace 'btn-blue', 'btn-primary' } |
    ForEach-Object { $_ -replace 'btn-red', 'btn-danger' } |
    ForEach-Object { $_ -replace 'btn-green', 'btn-success' } |
    ForEach-Object { $_ -replace 'btn-yellow', 'btn-warning' } |
    ForEach-Object { $_ -replace 'btn-gray', 'btn-secondary' } |
    Set-Content $_
}

# Update CDN links
Get-ChildItem -Recurse -Include *.html | ForEach-Object {
    (Get-Content $_) | 
    ForEach-Object { $_ -replace 'geeks-ui-framework@1\.\d+\.\d+', 'geeks-ui-framework@2.0.2' } |
    Set-Content $_
}

Write-Host "Migration completed! Please test your application." -ForegroundColor Green
```

---

## 🎉 Migration Complete!

Once you've completed the migration:

1. **Test thoroughly** in all browsers and devices
2. **Update your documentation** to reference v2.0 features
3. **Consider using new components** to enhance your UI
4. **Remove any compatibility CSS** you may have added
5. **Enjoy the new features!** 🚀

---

*Need help with migration? [Open an issue](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues) on GitHub.*

*Last updated: February 2025 | For Geeks UI v2.0.2*

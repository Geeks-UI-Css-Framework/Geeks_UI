<div align="center">
  <h1>🚀 Geeks UI</h1>
  <p><strong>A Modern, Lightweight CSS Framework for Developers</strong></p>
  
  [![NPM Version](https://img.shields.io/npm/v/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)
  [![NPM Downloads](https://img.shields.io/npm/dm/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![GitHub Stars](https://img.shields.io/github/stars/Geeks-UI-Css-Framework/Geeks_UI.svg)](https://github.com/Geeks-UI-Css-Framework/Geeks_UI)
  [![CSS Framework](https://img.shields.io/badge/CSS-Framework-blueviolet.svg)](https://geeks-ui-css-framework.github.io/Geeks_UI/)
  
  <p>Build beautiful, responsive interfaces with minimal effort using our carefully crafted component library.</p>
  
  [📦 NPM Package](https://www.npmjs.com/package/geeks-ui-framework) • [🎨 Live Demo](https://geeks-ui-css-framework.github.io/Geeks_UI/) • [📖 Documentation](#documentation) • [⚡ Get Started](#quick-start) • [🤝 Contributing](#contributing)
</div>

---

## ✨ Features

- 📦 **NPM Package** - Easy installation and version management
- 🎯 **Lightweight** - Only 5.2KB minified, 24.3KB unpacked
- 📱 **Responsive** - Mobile-first design approach
- 🎨 **Customizable** - CSS custom properties for easy theming
- ⚡ **Fast** - Optimized for performance and quick loading
- 🔧 **Developer-friendly** - Clean, semantic class names
- 🌐 **CDN Ready** - Multiple integration options
- 🎭 **Modern** - Built with current web standards
- ♿ **Accessible** - WCAG compliant components
- 🔄 **Zero Dependencies** - Pure CSS framework

## 🚀 Quick Start

### 📦 NPM Installation (Recommended)

Install via NPM for modern build workflows:

```bash
npm install geeks-ui-framework
```

Then import in your CSS:
```css
@import 'geeks-ui-framework/dist/geeks-ui.css';
```

Or import the minified version:
```css
@import 'geeks-ui-framework/dist/geeks-ui.min.css';
```

### 🌐 CDN Installation (Quick Start)

Add this line to your HTML `<head>` section:

```html
<link rel="stylesheet" href="https://unpkg.com/geeks-ui-framework@latest/dist/geeks-ui.min.css">
```

### 📥 Download

Download the latest release from our [GitHub repository](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/releases).

## 📖 Documentation

**🎯 [📚 Documentation Hub](DOCUMENTATION-HUB.md) - Your complete guide to all documentation resources!**

Comprehensive documentation and guides to help you get the most out of Geeks UI:

### 📚 User Guides
- **[📖 Complete Documentation](DOCUMENTATION.md)** - Full component reference with examples
- **[🚀 Getting Started Guide](GETTING-STARTED.md)** - Beginner-friendly setup instructions
- **[⚡ Quick Reference](QUICK-REFERENCE.md)** - Handy cheat sheet for developers
- **[🎮 Interactive Examples](INTERACTIVE-EXAMPLES.html)** - Live playground and demos

### 🔧 Developer Resources  
- **[� API Reference](API-REFERENCE.md)** - Detailed class documentation and CSS variables
- **[🔄 Migration Guide](MIGRATION-GUIDE.md)** - Upgrade from older versions
- **[🚀 Advanced Examples](ADVANCED-EXAMPLES.md)** - Real-world implementation patterns

### 🎯 Quick Examples

#### �🚨 Alert Components

Create attention-grabbing alerts with various styles:

```html
<div class="alert alert-primary">🎉 Welcome to Geeks UI!</div>
<div class="alert alert-success">✅ Changes saved successfully!</div>
<div class="alert alert-warning">⚠️ Please review your settings.</div>
<div class="alert alert-danger">❌ An error occurred.</div>
```

#### 🔘 Button Components

Versatile buttons for all your interaction needs:

```html
<!-- Primary Actions -->
<button class="btn btn-primary">Get Started</button>
<button class="btn btn-secondary">Learn More</button>

<!-- Status Buttons -->
<button class="btn btn-success">Save Changes</button>
<button class="btn btn-warning">Reset Form</button>
<button class="btn btn-danger">Delete Item</button>

<!-- Size Variants -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### 🧭 Navigation Components

Modern navigation bars and menus:

```html
<!-- Basic Navbar -->
<nav class="navbar">
  <div class="navbar-brand">
    <a href="#">Your Brand</a>
  </div>
  <div class="navbar-menu">
    <a href="#" class="navbar-item">Home</a>
    <a href="#" class="navbar-item">About</a>
    <a href="#" class="navbar-item">Contact</a>
  </div>
</nav>
```

### 📦 Container & Layout

Responsive containers and layout systems:

```html
<!-- Main Container -->
<div class="container">
  <h1>Your Content Here</h1>
  <p>Responsive content that adapts to screen size.</p>
</div>

<!-- Fluid Container -->
<div class="container-fluid">
  <h2>Full-width content</h2>
</div>
```

### 🦶 Footer Components

Professional footer layouts:

```html
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <h3>Your Company</h3>
      <p>Building amazing web experiences.</p>
    </div>
  </div>
</footer>
```

## 🎨 Customization

### CSS Custom Properties

Geeks UI uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --info-color: #3b82f6;
}
```

### Override Default Styles

```css
/* Custom button styling */
.btn-primary {
  --primary-color: #your-color;
  background: var(--primary-color);
}
```

## 🏗️ Build Process

If you're contributing or want to build from source:

```bash
# Clone the repository
git clone https://github.com/Geeks-UI-Css-Framework/Geeks_UI.git

# Navigate to the GeeksUI package directory
cd Geeks_UI/GeeksUI

# Install dependencies
npm install

# Build the CSS
npm run build

# Watch for changes
npm run dev
```

## 📊 Package Stats

- **Size**: 5.2KB (minified)
- **Unpacked Size**: 24.3KB
- **Files**: 13 total files
- **Dependencies**: 0 (zero dependencies!)
- **License**: MIT
- **Latest Version**: Check [NPM](https://www.npmjs.com/package/geeks-ui-framework)

## 🌐 Browser Support

Geeks UI supports all modern browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Reporting Bugs

1. Check [existing issues](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues)
2. Create a [new issue](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues/new) with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and version information

### 💡 Feature Requests

1. Check [existing issues](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues) for similar requests
2. Create a [new feature request](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues/new) with:
   - Clear description of the feature
   - Use case and benefits
   - Proposed implementation (if any)

### 🔧 Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests if applicable
5. Update documentation
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Contribution Guidelines

- 📝 Follow semantic commit messages
- 🧪 Test changes across browsers
- 📚 Update documentation when needed
- 🎨 Maintain consistent code style
- ♿ Ensure accessibility compliance
- 📦 Update package version if needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Joey Cadieux**
- 📧 Email: joey@tech-center.com
- 🐙 GitHub: [@joeycadieux](https://github.com/joeycadieux)
- 🌐 Website: [tech-center.com](https://tech-center.com)

## 🔗 Links

- 📦 **NPM Package**: [geeks-ui-framework](https://www.npmjs.com/package/geeks-ui-framework)
- 🌐 **Live Demo**: [GitHub Pages](https://geeks-ui-css-framework.github.io/Geeks_UI/)
- 📁 **GitHub Repository**: [Geeks_UI](https://github.com/Geeks-UI-Css-Framework/Geeks_UI)
- 🐛 **Issues**: [Report Issues](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues)
- 📋 **Releases**: [View Releases](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/releases)

## 🙏 Acknowledgments

- Inspired by modern CSS frameworks like Bootstrap and Tailwind
- Built with ❤️ for the developer community
- Special thanks to all contributors and users
- Designed for developers who value simplicity and performance

## 📈 Roadmap

- [ ] Additional components (forms, cards, modals)
- [ ] Dark theme support
- [ ] Advanced grid system
- [ ] Animation utilities
- [ ] React/Vue component wrappers
- [ ] Accessibility improvements
- [ ] Performance optimizations

---

<div align="center">
  <p>Made with ❤️ by developers, for developers</p>
  <p><strong>⭐ Star this repo if you find it helpful!</strong></p>
  <p>
    <a href="https://www.npmjs.com/package/geeks-ui-framework">📦 NPM</a> •
    <a href="https://geeks-ui-css-framework.github.io/Geeks_UI/">🌐 Demo</a> •
    <a href="https://github.com/Geeks-UI-Css-Framework/Geeks_UI">🐙 GitHub</a>
  </p>
</div>

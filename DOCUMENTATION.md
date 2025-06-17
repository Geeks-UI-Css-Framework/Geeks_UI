# 📚 Geeks UI Framework - Complete Documentation

![Geeks UI Banner](https://img.shields.io/badge/Geeks%20UI-v2.0.2-blue?style=for-the-badge)
[![npm version](https://img.shields.io/npm/v/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, lightweight CSS framework with **15+ beautiful components** designed for developers who want to build stunning interfaces quickly and efficiently.

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Quick Start Guide](#quick-start-guide)
4. [Components Documentation](#components-documentation)
5. [Customization](#customization)
6. [Best Practices](#best-practices)
7. [Browser Support](#browser-support)
8. [Troubleshooting](#troubleshooting)
9. [Contributing](#contributing)

---

## 🚀 Getting Started

### What is Geeks UI?

Geeks UI is a comprehensive CSS framework that provides:
- **15+ pre-built components** (buttons, forms, cards, modals, etc.)
- **Responsive design** out of the box
- **Modern CSS** using Grid, Flexbox, and custom properties
- **No JavaScript dependencies** - pure CSS
- **Lightweight** - only 34.4KB minified
- **Customizable** with CSS variables

### Why Choose Geeks UI?

✅ **Easy to Use** - Simple class names and intuitive structure  
✅ **Mobile First** - Responsive design for all devices  
✅ **Modern** - Built with latest CSS features  
✅ **Lightweight** - Fast loading times  
✅ **No Dependencies** - Pure CSS framework  
✅ **Well Documented** - Comprehensive guides and examples  

---

## 📦 Installation

### Option 1: NPM (Recommended)

```bash
# Install the latest version
npm install geeks-ui-framework

# Install specific version
npm install geeks-ui-framework@2.0.2
```

Then import in your CSS:
```css
@import 'geeks-ui-framework/dist/geeks-ui.css';
```

Or in your HTML:
```html
<link rel="stylesheet" href="node_modules/geeks-ui-framework/dist/geeks-ui.min.css">
```

### Option 2: CDN

```html
<!-- Latest version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@latest/dist/geeks-ui.min.css">

<!-- Specific version (recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
```

### Option 3: Direct Download

1. Download the latest release from [GitHub Releases](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/releases)
2. Extract the files
3. Link to the CSS file in your HTML:

```html
<link rel="stylesheet" href="path/to/geeks-ui.min.css">
```

---

## 🏁 Quick Start Guide

### Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My App with Geeks UI</title>
    <!-- Geeks UI CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
</head>
<body>
    <!-- Your content here -->
    <div class="container">
        <h1>Welcome to Geeks UI!</h1>
        <button class="btn btn-primary">Get Started</button>
    </div>
</body>
</html>
```

### Your First Component

```html
<!-- Simple Card Example -->
<div class="card">
    <div class="card-header">
        <h3>My First Card</h3>
    </div>
    <div class="card-body">
        <p>This is a simple card component using Geeks UI.</p>
        <button class="btn btn-primary">Action</button>
    </div>
</div>
```

---

## 🎨 Components Documentation

### 1. Buttons

Versatile button components with multiple styles and states.

#### Basic Usage

```html
<!-- Primary Button -->
<button class="btn btn-primary">Primary</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Secondary</button>

<!-- Success Button -->
<button class="btn btn-success">Success</button>

<!-- Danger Button -->
<button class="btn btn-danger">Danger</button>

<!-- Warning Button -->
<button class="btn btn-warning">Warning</button>

<!-- Info Button -->
<button class="btn btn-info">Info</button>
```

#### Button Sizes

```html
<!-- Large Button -->
<button class="btn btn-primary btn-lg">Large Button</button>

<!-- Normal Button -->
<button class="btn btn-primary">Normal Button</button>

<!-- Small Button -->
<button class="btn btn-primary btn-sm">Small Button</button>
```

#### Disabled State

```html
<button class="btn btn-primary" disabled>Disabled Button</button>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.btn` | Base button class (required) |
| `.btn-primary` | Primary button style |
| `.btn-secondary` | Secondary button style |
| `.btn-success` | Success button style |
| `.btn-danger` | Danger button style |
| `.btn-warning` | Warning button style |
| `.btn-info` | Info button style |
| `.btn-lg` | Large button size |
| `.btn-sm` | Small button size |

---

### 2. Cards

Flexible content containers with optional headers and footers.

#### Basic Card

```html
<div class="card">
    <div class="card-body">
        <h5 class="card-title">Card Title</h5>
        <p class="card-text">Some quick example text to build on the card title.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

#### Card with Header and Footer

```html
<div class="card">
    <div class="card-header">
        Featured
    </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer">
        2 days ago
    </div>
</div>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.card` | Main card container |
| `.card-header` | Card header section |
| `.card-body` | Main card content area |
| `.card-footer` | Card footer section |
| `.card-title` | Card title styling |
| `.card-text` | Card text content |

---

### 3. Forms

Styled form components with validation states.

#### Basic Form

```html
<form>
    <div class="form-group">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-input" id="email" placeholder="Enter email">
    </div>
    
    <div class="form-group">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-input" id="password" placeholder="Password">
    </div>
    
    <div class="form-group">
        <input type="checkbox" class="form-checkbox" id="remember">
        <label for="remember" class="form-label">Remember me</label>
    </div>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

#### Form Validation States

```html
<!-- Success State -->
<div class="form-group">
    <label for="email-success" class="form-label">Email (Success)</label>
    <input type="email" class="form-input is-valid" id="email-success">
    <div class="valid-feedback">Looks good!</div>
</div>

<!-- Error State -->
<div class="form-group">
    <label for="email-error" class="form-label">Email (Error)</label>
    <input type="email" class="form-input is-invalid" id="email-error">
    <div class="invalid-feedback">Please provide a valid email.</div>
</div>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.form-group` | Form field container |
| `.form-label` | Form field label |
| `.form-input` | Text input styling |
| `.form-textarea` | Textarea styling |
| `.form-select` | Select dropdown styling |
| `.form-checkbox` | Checkbox styling |
| `.form-radio` | Radio button styling |
| `.is-valid` | Success validation state |
| `.is-invalid` | Error validation state |
| `.valid-feedback` | Success message |
| `.invalid-feedback` | Error message |

---

### 4. Alerts

Contextual feedback messages for user actions.

#### Basic Alerts

```html
<!-- Success Alert -->
<div class="alert alert-success">
    <strong>Success!</strong> Your action was completed successfully.
</div>

<!-- Info Alert -->
<div class="alert alert-info">
    <strong>Info!</strong> Here's some important information.
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
    <strong>Warning!</strong> Please check your input.
</div>

<!-- Danger Alert -->
<div class="alert alert-danger">
    <strong>Error!</strong> Something went wrong.
</div>
```

#### Dismissible Alerts

```html
<div class="alert alert-success alert-dismissible">
    <strong>Success!</strong> Your message has been sent.
    <button type="button" class="alert-close" onclick="this.parentElement.style.display='none'">&times;</button>
</div>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.alert` | Base alert class |
| `.alert-success` | Success alert style |
| `.alert-info` | Info alert style |
| `.alert-warning` | Warning alert style |
| `.alert-danger` | Danger alert style |
| `.alert-dismissible` | Dismissible alert |
| `.alert-close` | Close button |

---

### 5. Modal

Modal dialogs for displaying content in an overlay.

#### Basic Modal

```html
<!-- Modal Trigger -->
<button class="btn btn-primary" onclick="openModal('myModal')">Open Modal</button>

<!-- Modal -->
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal Title</h5>
                <button type="button" class="modal-close" onclick="closeModal('myModal')">&times;</button>
            </div>
            <div class="modal-body">
                <p>Modal body content goes here...</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal('myModal')">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

<script>
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
</script>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.modal` | Modal container |
| `.modal-dialog` | Modal dialog wrapper |
| `.modal-content` | Modal content container |
| `.modal-header` | Modal header section |
| `.modal-body` | Modal body content |
| `.modal-footer` | Modal footer section |
| `.modal-title` | Modal title |
| `.modal-close` | Close button |

---

### 6. Badges

Small status indicators and labels.

#### Basic Badges

```html
<!-- Primary Badge -->
<span class="badge badge-primary">Primary</span>

<!-- Secondary Badge -->
<span class="badge badge-secondary">Secondary</span>

<!-- Success Badge -->
<span class="badge badge-success">Success</span>

<!-- Danger Badge -->
<span class="badge badge-danger">Danger</span>

<!-- Warning Badge -->
<span class="badge badge-warning">Warning</span>

<!-- Info Badge -->
<span class="badge badge-info">Info</span>
```

#### Badge with Text

```html
<h1>Example heading <span class="badge badge-secondary">New</span></h1>
<p>Notifications <span class="badge badge-primary">4</span></p>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.badge` | Base badge class |
| `.badge-primary` | Primary badge style |
| `.badge-secondary` | Secondary badge style |
| `.badge-success` | Success badge style |
| `.badge-danger` | Danger badge style |
| `.badge-warning` | Warning badge style |
| `.badge-info` | Info badge style |

---

### 7. Progress Bars

Visual indicators for showing progress or completion status.

#### Basic Progress Bar

```html
<div class="progress">
    <div class="progress-bar" style="width: 25%"></div>
</div>
```

#### Colored Progress Bars

```html
<!-- Success Progress -->
<div class="progress">
    <div class="progress-bar progress-bar-success" style="width: 50%"></div>
</div>

<!-- Warning Progress -->
<div class="progress">
    <div class="progress-bar progress-bar-warning" style="width: 75%"></div>
</div>

<!-- Danger Progress -->
<div class="progress">
    <div class="progress-bar progress-bar-danger" style="width: 100%"></div>
</div>
```

#### Progress with Label

```html
<div class="progress">
    <div class="progress-bar" style="width: 60%">60%</div>
</div>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.progress` | Progress container |
| `.progress-bar` | Progress bar element |
| `.progress-bar-success` | Success colored progress |
| `.progress-bar-warning` | Warning colored progress |
| `.progress-bar-danger` | Danger colored progress |

---

### 8. Navigation

Responsive navigation components.

#### Basic Navbar

```html
<nav class="navbar">
    <div class="navbar-brand">
        <a href="#">Brand</a>
    </div>
    <div class="navbar-nav">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Services</a>
        <a href="#" class="nav-link">Contact</a>
    </div>
</nav>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.navbar` | Navigation container |
| `.navbar-brand` | Brand/logo section |
| `.navbar-nav` | Navigation links container |
| `.nav-link` | Individual navigation link |
| `.active` | Active link state |

---

### 9. Tabs

Tabbed content navigation.

#### Basic Tabs

```html
<div class="tabs">
    <div class="tab-nav">
        <button class="tab-button active" onclick="openTab(event, 'tab1')">Tab 1</button>
        <button class="tab-button" onclick="openTab(event, 'tab2')">Tab 2</button>
        <button class="tab-button" onclick="openTab(event, 'tab3')">Tab 3</button>
    </div>
    
    <div class="tab-content">
        <div id="tab1" class="tab-pane active">
            <h3>Tab 1 Content</h3>
            <p>Content for the first tab.</p>
        </div>
        <div id="tab2" class="tab-pane">
            <h3>Tab 2 Content</h3>
            <p>Content for the second tab.</p>
        </div>
        <div id="tab3" class="tab-pane">
            <h3>Tab 3 Content</h3>
            <p>Content for the third tab.</p>
        </div>
    </div>
</div>

<script>
function openTab(evt, tabName) {
    var i, tabpanes, tabbuttons;
    
    // Hide all tab panes
    tabpanes = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabpanes.length; i++) {
        tabpanes[i].classList.remove("active");
    }
    
    // Remove active class from all buttons
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }
    
    // Show selected tab and mark button as active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
</script>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.tabs` | Tabs container |
| `.tab-nav` | Tab navigation container |
| `.tab-button` | Tab button |
| `.tab-content` | Tab content container |
| `.tab-pane` | Individual tab content |
| `.active` | Active tab state |

---

### 10. Accordion

Collapsible content sections.

#### Basic Accordion

```html
<div class="accordion">
    <div class="accordion-item">
        <div class="accordion-header">
            <button class="accordion-button" onclick="toggleAccordion(this)">
                Section 1
            </button>
        </div>
        <div class="accordion-content">
            <div class="accordion-body">
                Content for section 1. This can include any HTML content.
            </div>
        </div>
    </div>
    
    <div class="accordion-item">
        <div class="accordion-header">
            <button class="accordion-button" onclick="toggleAccordion(this)">
                Section 2
            </button>
        </div>
        <div class="accordion-content">
            <div class="accordion-body">
                Content for section 2. Each section can be independently collapsed.
            </div>
        </div>
    </div>
</div>

<script>
function toggleAccordion(button) {
    const content = button.closest('.accordion-item').querySelector('.accordion-content');
    const isOpen = content.style.display === 'block';
    
    // Close all accordion items
    document.querySelectorAll('.accordion-content').forEach(item => {
        item.style.display = 'none';
    });
    
    // Open clicked item if it was closed
    if (!isOpen) {
        content.style.display = 'block';
    }
}
</script>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.accordion` | Accordion container |
| `.accordion-item` | Individual accordion section |
| `.accordion-header` | Accordion header |
| `.accordion-button` | Accordion toggle button |
| `.accordion-content` | Accordion content container |
| `.accordion-body` | Accordion content body |

---

### 11. Dropdown

Dropdown menu components.

#### Basic Dropdown

```html
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" onclick="toggleDropdown(this)">
        Dropdown
    </button>
    <div class="dropdown-menu">
        <a href="#" class="dropdown-item">Action</a>
        <a href="#" class="dropdown-item">Another action</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">Something else here</a>
    </div>
</div>

<script>
function toggleDropdown(button) {
    const dropdown = button.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
        });
    }
});
</script>
```

#### CSS Classes

| Class | Description |
|-------|-------------|
| `.dropdown` | Dropdown container |
| `.dropdown-toggle` | Dropdown trigger button |
| `.dropdown-menu` | Dropdown menu container |
| `.dropdown-item` | Dropdown menu item |
| `.dropdown-divider` | Dropdown divider |

---

### 12. Tooltips

Hover-activated tooltips for additional information.

#### Basic Tooltip

```html
<button class="btn btn-primary" data-tooltip="This is a tooltip">
    Hover me
</button>

<p>This is a <span data-tooltip="Tooltip text here">tooltip example</span> in text.</p>
```

#### CSS Classes

| Class/Attribute | Description |
|-----------------|-------------|
| `data-tooltip` | Tooltip text attribute |

---

## 🎨 Customization

### CSS Variables

Geeks UI uses CSS custom properties for easy customization:

```css
:root {
    /* Primary Colors */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    
    /* Neutral Colors */
    --white: #ffffff;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
    --black: #000000;
    
    /* Typography */
    --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-size-base: 1rem;
    --line-height-base: 1.5;
    
    /* Spacing */
    --spacer: 1rem;
    --border-radius: 0.375rem;
    
    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
}
```

### Customizing Colors

Override the default colors by redefining the CSS variables:

```css
:root {
    --primary-color: #6f42c1;  /* Purple instead of blue */
    --success-color: #20c997;  /* Teal instead of green */
}
```

### Custom Button Style

```css
.btn-custom {
    background-color: #ff6b6b;
    border-color: #ff6b6b;
    color: white;
}

.btn-custom:hover {
    background-color: #ff5252;
    border-color: #ff5252;
}
```

### Dark Theme Example

```css
.dark-theme {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --success-color: #198754;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #0dcaf0;
    
    /* Dark backgrounds */
    --gray-100: #212529;
    --gray-200: #343a40;
    --gray-300: #495057;
    --gray-800: #f8f9fa;
    --gray-900: #ffffff;
    
    background-color: var(--gray-100);
    color: var(--gray-900);
}
```

---

## 💡 Best Practices

### 1. Mobile First Design

Always design for mobile first, then enhance for larger screens:

```css
/* Mobile styles first */
.my-component {
    padding: 1rem;
    font-size: 0.875rem;
}

/* Then enhance for larger screens */
@media (min-width: 768px) {
    .my-component {
        padding: 2rem;
        font-size: 1rem;
    }
}
```

### 2. Semantic HTML

Use semantic HTML elements for better accessibility:

```html
<!-- Good -->
<nav class="navbar">
    <ul class="navbar-nav">
        <li><a href="#" class="nav-link">Home</a></li>
    </ul>
</nav>

<!-- Instead of -->
<div class="navbar">
    <div class="navbar-nav">
        <div><a href="#" class="nav-link">Home</a></div>
    </div>
</div>
```

### 3. Proper Form Labels

Always associate labels with form controls:

```html
<!-- Good -->
<label for="email" class="form-label">Email</label>
<input type="email" id="email" class="form-input">

<!-- Or with implicit association -->
<label class="form-label">
    Email
    <input type="email" class="form-input">
</label>
```

### 4. Consistent Spacing

Use the framework's spacing utilities for consistency:

```html
<div class="card">
    <div class="card-body">
        <!-- Use consistent margins/padding -->
        <h5 class="card-title">Title</h5>
        <p class="card-text">Content with proper spacing.</p>
    </div>
</div>
```

### 5. Performance Optimization

- Use the minified CSS file in production
- Only include components you need if building custom
- Optimize images and use appropriate formats
- Consider loading CSS asynchronously for non-critical styles

---

## 🌐 Browser Support

Geeks UI supports all modern browsers:

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 60+ |
| Firefox | 55+ |
| Safari | 12+ |
| Edge | 79+ |
| iOS Safari | 12+ |
| Android Chrome | 60+ |

### Features Used

- CSS Grid (with fallbacks)
- Flexbox
- CSS Custom Properties
- Modern selectors

### IE11 Support

IE11 is not officially supported, but most components will work with polyfills for:
- CSS Custom Properties
- CSS Grid (with -ms- prefixes)

---

## 🛠️ Troubleshooting

### Common Issues

#### 1. Styles Not Applying

**Problem**: CSS classes don't seem to work.

**Solutions**:
- Check that the CSS file is properly linked
- Verify the class names are spelled correctly
- Ensure CSS is loading before your custom styles
- Check browser developer tools for CSS conflicts

```html
<!-- Make sure this is in your <head> -->
<link rel="stylesheet" href="path/to/geeks-ui.min.css">
```

#### 2. Components Look Broken on Mobile

**Problem**: Components don't display properly on mobile devices.

**Solutions**:
- Add the viewport meta tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- Test responsive behavior in browser dev tools
- Ensure you're not overriding responsive styles

#### 3. JavaScript Functionality Not Working

**Problem**: Modals, dropdowns, or tabs aren't functioning.

**Solutions**:
- Geeks UI is CSS-only; add the provided JavaScript snippets
- Check for JavaScript errors in browser console
- Ensure proper event handlers are attached

#### 4. Conflicting Styles

**Problem**: Other CSS frameworks conflict with Geeks UI.

**Solutions**:
- Load Geeks UI before other frameworks
- Use more specific selectors for custom styles
- Consider scoping Geeks UI to specific containers

```css
/* Scope to specific container */
.geeks-ui-container .btn {
    /* Geeks UI button styles only apply here */
}
```

#### 5. Custom Variables Not Working

**Problem**: CSS variable overrides aren't applied.

**Solutions**:
- Ensure custom variables are defined before Geeks UI CSS
- Check variable names for typos
- Verify browser support for CSS custom properties

```css
/* Define custom variables first */
:root {
    --primary-color: #your-color;
}

/* Then load Geeks UI */
@import 'geeks-ui-framework/dist/geeks-ui.css';
```

### Performance Issues

#### Large File Size

If the CSS file seems too large:
- Use the minified version (.min.css)
- Consider building a custom version with only needed components
- Enable gzip compression on your server

#### Slow Loading

If styles load slowly:
- Use CDN for faster delivery
- Consider inlining critical CSS
- Check network tab in browser dev tools

### Getting Help

If you're still having issues:

1. Check the [GitHub Issues](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues)
2. Search existing issues before creating a new one
3. Provide a minimal reproduction case
4. Include browser and version information

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Bugs

1. Search existing issues first
2. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and version info
   - Code example if possible

### Feature Requests

1. Check if the feature already exists
2. Create an issue describing:
   - The feature you'd like
   - Why it would be useful
   - How it should work

### Code Contributions

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Geeks-UI-Css-Framework/Geeks_UI.git

# Navigate to the project
cd Geeks_UI/GeeksUI

# Install dependencies
npm install

# Build the CSS
npm run build

# Watch for changes
npm run dev
```

---

## 📞 Support & Community

### Documentation

- **GitHub Repository**: https://github.com/Geeks-UI-Css-Framework/Geeks_UI
- **NPM Package**: https://www.npmjs.com/package/geeks-ui-framework
- **Live Demo**: [Component Showcase](https://your-demo-url.com)

### Community

- **GitHub Discussions**: Ask questions and share ideas
- **Issues**: Report bugs and request features
- **Twitter**: [@geeksforgeeks](https://twitter.com/geeksforgeeks) - Follow for updates

### Commercial Support

For commercial support, custom development, or consulting:
- Email: contribute@geeksforgeeks.org
- Website: https://www.geeksforgeeks.org

---

## 📄 License

Geeks UI is released under the [MIT License](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/blob/main/LICENSE).

You are free to:
- Use commercially
- Modify
- Distribute
- Private use

Just include the original copyright notice.

---

## 🙏 Acknowledgments

- Built with ❤️ by the GeeksforGeeks team
- Inspired by modern CSS frameworks and community feedback
- Thanks to all contributors and users who help improve Geeks UI

---

**Happy coding with Geeks UI! 🚀**

For the latest updates and news, follow us on [GitHub](https://github.com/Geeks-UI-Css-Framework/Geeks_UI) and [Twitter](https://twitter.com/geeksforgeeks).

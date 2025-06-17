# 📋 Geeks UI - API Reference

[![npm version](https://img.shields.io/npm/v/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Complete class reference and API documentation for Geeks UI Framework v2.0.2

## 📖 Table of Contents

1. [CSS Variables](#css-variables)
2. [Layout Classes](#layout-classes)
3. [Component Classes](#component-classes)
4. [Utility Classes](#utility-classes)
5. [Responsive Modifiers](#responsive-modifiers)
6. [Color System](#color-system)
7. [Customization Guide](#customization-guide)

---

## 🎨 CSS Variables

Geeks UI uses CSS custom properties for easy customization:

### Core Colors
```css
:root {
  /* Primary Colors */
  --geeks-ui-primary: #1e90ff;      /* Primary brand color */
  --geeks-ui-secondary: #6c757d;    /* Secondary gray */
  --geeks-ui-success: #28a745;      /* Success green */
  --geeks-ui-info: #17a2b8;         /* Info cyan */
  --geeks-ui-warning: #dc3545;      /* Warning red */
  --geeks-ui-base: #708090;         /* Base slate gray */

  /* Text Colors */
  --geeks-ui-text-primary: #212529;
  --geeks-ui-text-secondary: #6c757d;
  --geeks-ui-text-light: #ffffff;

  /* Spacing */
  --geeks-ui-padding: 0.75rem 1.5rem;
  --geeks-ui-margin-bottom: 1rem;

  /* Typography */
  --geeks-ui-font-size: 1rem;
  --geeks-ui-font-weight-normal: 400;
  --geeks-ui-font-weight-bold: 600;

  /* Border */
  --geeks-ui-border-radius: 0.375rem;
  --geeks-ui-border-width: 1px;

  /* Transitions */
  --geeks-ui-transition: all 0.3s ease;
}
```

### Usage Example
```css
/* Override primary color */
:root {
  --geeks-ui-primary: #ff6b35;
}

/* Or for specific elements */
.my-custom-button {
  background-color: var(--geeks-ui-primary);
}
```

---

## 📐 Layout Classes

### Container System

| Class | Description | Max Width |
|-------|-------------|-----------|
| `.container` | Responsive fixed-width container | 1140px |
| `.container-fluid` | Full-width container | 100% |

#### Breakpoints
```css
/* Small devices (≥576px) */
@media (min-width: 576px) { .container { max-width: 540px; } }

/* Medium devices (≥768px) */
@media (min-width: 768px) { .container { max-width: 720px; } }

/* Large devices (≥992px) */
@media (min-width: 992px) { .container { max-width: 960px; } }

/* Extra large devices (≥1200px) */
@media (min-width: 1200px) { .container { max-width: 1140px; } }
```

---

## 🧩 Component Classes

### Buttons

#### Base Classes
| Class | Description |
|-------|-------------|
| `.btn` | Base button class (required) |

#### Color Variants
| Class | Background | Use Case |
|-------|------------|----------|
| `.btn-primary` | Blue | Primary actions |
| `.btn-secondary` | Gray | Secondary actions |
| `.btn-success` | Green | Success states |
| `.btn-danger` | Red | Destructive actions |
| `.btn-warning` | Orange | Warning states |
| `.btn-info` | Cyan | Information |

#### Size Modifiers
| Class | Padding | Font Size |
|-------|---------|-----------|
| `.btn-lg` | 0.5rem 1rem | 1.125rem |
| Default | 0.375rem 0.75rem | 1rem |
| `.btn-sm` | 0.25rem 0.5rem | 0.875rem |

#### State Modifiers
| Class | Description |
|-------|-------------|
| `.btn-outline-{color}` | Outlined button variant |
| `:disabled` | Disabled state (use disabled attribute) |

#### Example
```html
<button class="btn btn-primary btn-lg">Large Primary Button</button>
<button class="btn btn-outline-secondary btn-sm">Small Outline Button</button>
```

### Forms

#### Input Classes
| Class | Element | Description |
|-------|---------|-------------|
| `.form-group` | `<div>` | Input group wrapper |
| `.form-label` | `<label>` | Form labels |
| `.form-input` | `<input>` | Text inputs |
| `.form-select` | `<select>` | Select dropdowns |
| `.form-textarea` | `<textarea>` | Text areas |
| `.form-check` | `<label>` | Checkbox/radio wrapper |
| `.form-check-input` | `<input>` | Checkbox/radio input |
| `.form-check-label` | `<span>` | Checkbox/radio label |

#### Validation States
| Class | Description |
|-------|-------------|
| `.form-input.is-valid` | Valid state (green border) |
| `.form-input.is-invalid` | Invalid state (red border) |

#### Example
```html
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

### Cards

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.card` | `<div>` | Card container |
| `.card-header` | `<div>` | Card header section |
| `.card-body` | `<div>` | Main card content |
| `.card-footer` | `<div>` | Card footer section |
| `.card-title` | `<h1-h6>` | Card title |
| `.card-text` | `<p>` | Card body text |

#### Example
```html
<div class="card">
  <div class="card-header">Header Content</div>
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card content goes here.</p>
  </div>
  <div class="card-footer">Footer Content</div>
</div>
```

### Modals

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.modal` | `<div>` | Modal overlay |
| `.modal-content` | `<div>` | Modal container |
| `.modal-header` | `<div>` | Modal header |
| `.modal-body` | `<div>` | Modal content |
| `.modal-footer` | `<div>` | Modal footer |
| `.modal-title` | `<h1-h6>` | Modal title |
| `.modal-close` | `<button>` | Close button |

#### JavaScript Integration
```javascript
// Show modal
function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Hide modal
function hideModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
```

#### Example
```html
<div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Modal Title</h5>
      <button class="modal-close" onclick="hideModal('myModal')">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content...</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="hideModal('myModal')">Close</button>
      <button class="btn btn-primary">Save</button>
    </div>
  </div>
</div>
```

### Badges

#### Base Classes
| Class | Element | Description |
|-------|---------|-------------|
| `.badge` | `<span>` | Base badge class |
| `.badge-pill` | Modifier | Pill-shaped badge |

#### Color Variants
| Class | Background |
|-------|------------|
| `.badge-primary` | Blue |
| `.badge-secondary` | Gray |
| `.badge-success` | Green |
| `.badge-danger` | Red |
| `.badge-warning` | Orange |
| `.badge-info` | Cyan |

#### Example
```html
<span class="badge badge-primary">12</span>
<span class="badge badge-danger badge-pill">99+</span>
<h4>Inbox <span class="badge badge-secondary">4</span></h4>
```

### Progress Bars

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.progress` | `<div>` | Progress container |
| `.progress-bar` | `<div>` | Progress bar fill |

#### Variants
| Class | Description |
|-------|-------------|
| `.progress-bar-success` | Green progress bar |
| `.progress-bar-warning` | Orange progress bar |
| `.progress-bar-danger` | Red progress bar |
| `.progress-bar-info` | Cyan progress bar |
| `.progress-bar-animated` | Animated progress bar |

#### Example
```html
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 75%"></div>
</div>

<div class="progress">
  <div class="progress-bar progress-bar-animated" style="width: 50%"></div>
</div>
```

### Alerts

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.alert` | `<div>` | Alert container |

#### Color Variants
| Class | Background | Use Case |
|-------|------------|----------|
| `.alert-primary` | Light blue | General information |
| `.alert-success` | Light green | Success messages |
| `.alert-warning` | Light orange | Warning messages |
| `.alert-danger` | Light red | Error messages |
| `.alert-info` | Light cyan | Additional information |

#### Example
```html
<div class="alert alert-success">
  <strong>Success!</strong> Your changes have been saved.
</div>

<div class="alert alert-danger">
  <strong>Error!</strong> Please fix the errors below.
</div>
```

### Navigation

#### Navbar Classes
| Class | Element | Description |
|-------|---------|-------------|
| `.navbar` | `<nav>` | Navigation container |
| `.navbar-brand` | `<a>` | Brand/logo link |
| `.navbar-nav` | `<ul>` | Navigation list |
| `.nav-item` | `<li>` | Navigation item |
| `.nav-link` | `<a>` | Navigation link |

#### Example
```html
<nav class="navbar">
  <a class="navbar-brand" href="#">Brand</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
  </ul>
</nav>
```

### Tabs

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.tabs` | `<div>` | Tab container |
| `.tab-list` | `<ul>` | Tab navigation |
| `.tab-item` | `<li>` | Tab item |
| `.tab-link` | `<a>` | Tab link |
| `.tab-content` | `<div>` | Tab content container |
| `.tab-pane` | `<div>` | Tab content panel |

#### State Classes
| Class | Description |
|-------|-------------|
| `.active` | Active tab/panel |

#### Example
```html
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
    <div id="tab1" class="tab-pane active">
      <p>Content for tab 1</p>
    </div>
    <div id="tab2" class="tab-pane">
      <p>Content for tab 2</p>
    </div>
  </div>
</div>
```

### Accordion

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.accordion` | `<div>` | Accordion container |
| `.accordion-item` | `<div>` | Accordion item |
| `.accordion-header` | `<button>` | Accordion header/trigger |
| `.accordion-content` | `<div>` | Accordion content panel |

#### State Classes
| Class | Description |
|-------|-------------|
| `.active` | Expanded accordion item |

#### Example
```html
<div class="accordion">
  <div class="accordion-item">
    <button class="accordion-header">Section 1</button>
    <div class="accordion-content">
      <p>Content for section 1</p>
    </div>
  </div>
  
  <div class="accordion-item active">
    <button class="accordion-header">Section 2</button>
    <div class="accordion-content">
      <p>Content for section 2</p>
    </div>
  </div>
</div>
```

### Dropdown

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.dropdown` | `<div>` | Dropdown container |
| `.dropdown-toggle` | `<button>` | Dropdown trigger |
| `.dropdown-menu` | `<ul>` | Dropdown menu |
| `.dropdown-item` | `<li>` | Dropdown item |

#### State Classes
| Class | Description |
|-------|-------------|
| `.show` | Visible dropdown menu |

#### Example
```html
<div class="dropdown">
  <button class="dropdown-toggle btn btn-secondary">
    Dropdown <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    <li class="dropdown-item">
      <a href="#">Action</a>
    </li>
    <li class="dropdown-item">
      <a href="#">Another action</a>
    </li>
  </ul>
</div>
```

### Tooltips

#### Base Structure
| Class | Element | Description |
|-------|---------|-------------|
| `.tooltip` | `<span>` | Tooltip container |
| `.tooltip-text` | `<span>` | Tooltip content |

#### Position Modifiers
| Class | Description |
|-------|-------------|
| `.tooltip-top` | Tooltip appears above |
| `.tooltip-bottom` | Tooltip appears below |
| `.tooltip-left` | Tooltip appears to the left |
| `.tooltip-right` | Tooltip appears to the right |

#### Example
```html
<span class="tooltip">
  Hover me
  <span class="tooltip-text tooltip-top">This is a tooltip!</span>
</span>
```

---

## 🎨 Color System

### Primary Palette
```css
/* Blue Shades */
--blue-50: #eff6ff;
--blue-500: #1e90ff;  /* Primary */
--blue-900: #1e3a8a;

/* Gray Shades */
--gray-50: #f9fafb;
--gray-500: #6c757d;  /* Secondary */
--gray-900: #111827;

/* Semantic Colors */
--success: #28a745;   /* Green */
--warning: #dc3545;   /* Red */
--info: #17a2b8;      /* Cyan */
```

### Usage in Custom Components
```css
.my-custom-element {
  background-color: var(--geeks-ui-primary);
  color: var(--geeks-ui-text-light);
  border: 1px solid var(--geeks-ui-secondary);
}
```

---

## 🛠️ Customization Guide

### Method 1: CSS Variables Override
```css
/* Override in your CSS */
:root {
  --geeks-ui-primary: #ff6b35;
  --geeks-ui-border-radius: 8px;
  --geeks-ui-font-size: 1.1rem;
}
```

### Method 2: Class Extension
```css
/* Extend existing classes */
.btn-custom {
  @extend .btn;
  @extend .btn-primary;
  border-radius: 20px;
  text-transform: uppercase;
}
```

### Method 3: Component Variants
```css
/* Create component variants */
.card-elevated {
  @extend .card;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transform: translateY(-2px);
}

.btn-gradient {
  @extend .btn;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
}
```

---

## 📱 Responsive Modifiers

### Breakpoint System
| Breakpoint | Screen Size | Prefix |
|------------|-------------|--------|
| `xs` | <576px | None |
| `sm` | ≥576px | `.sm-` |
| `md` | ≥768px | `.md-` |
| `lg` | ≥992px | `.lg-` |
| `xl` | ≥1200px | `.xl-` |

### Usage Examples
```html
<!-- Different button sizes at different breakpoints -->
<button class="btn btn-primary btn-sm md-btn-lg">Responsive Button</button>

<!-- Hide on mobile, show on desktop -->
<div class="hidden sm-block">Desktop only content</div>
```

---

## 🔧 Advanced Customization

### Creating Theme Variants
```css
/* Dark theme override */
[data-theme="dark"] {
  --geeks-ui-primary: #4a9eff;
  --geeks-ui-text-primary: #ffffff;
  --geeks-ui-text-secondary: #a0a0a0;
}

/* Apply theme */
<body data-theme="dark">
```

### Custom Build Process
```javascript
// If using a build process, you can customize the source
// GeeksUI/src/_variables.css

:root {
  /* Your custom variables */
  --geeks-ui-primary: #your-brand-color;
}
```

---

## 📚 Best Practices

### Performance Tips
1. **Load only what you need**: Import specific components if possible
2. **Use CSS variables**: For easy theme switching and customization
3. **Minimize nesting**: Keep HTML structure simple
4. **Use semantic HTML**: Proper tags improve accessibility

### Accessibility Guidelines
1. **Always include proper labels**: Use `<label>` for form inputs
2. **Provide alternative text**: For images and icons
3. **Ensure keyboard navigation**: Test tab order
4. **Maintain color contrast**: Follow WCAG guidelines

### Code Organization
```html
<!-- Good: Semantic structure -->
<main class="container">
  <section class="card">
    <header class="card-header">
      <h2 class="card-title">Section Title</h2>
    </header>
    <div class="card-body">
      <p class="card-text">Content...</p>
    </div>
  </section>
</main>
```

---

## 🆘 Troubleshooting

### Common Issues

#### Styles Not Applying
```html
<!-- ❌ Wrong: Missing base class -->
<button class="btn-primary">Button</button>

<!-- ✅ Correct: Include base class -->
<button class="btn btn-primary">Button</button>
```

#### Modal Not Showing
```html
<!-- ❌ Wrong: Missing JavaScript -->
<button onclick="showModal('myModal')">Open</button>

<!-- ✅ Correct: Include JavaScript function -->
<script>
function showModal(id) {
  document.getElementById(id).style.display = 'flex';
}
</script>
```

#### Responsive Issues
```html
<!-- ❌ Wrong: Missing viewport meta tag -->
<head>
  <title>My Site</title>
</head>

<!-- ✅ Correct: Include viewport meta tag -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Site</title>
</head>
```

---

## 📞 Support & Resources

- **Documentation**: [Getting Started Guide](GETTING-STARTED.md)
- **Quick Reference**: [Cheat Sheet](QUICK-REFERENCE.md)
- **Interactive Examples**: [Live Playground](INTERACTIVE-EXAMPLES.html)
- **GitHub Repository**: [Geeks UI Framework](https://github.com/Geeks-UI-Css-Framework/Geeks_UI)
- **NPM Package**: [geeks-ui-framework](https://www.npmjs.com/package/geeks-ui-framework)

---

*Last updated: February 2025 | Version 2.0.2*

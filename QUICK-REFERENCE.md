# 🚀 Geeks UI - Quick Reference

[![npm version](https://img.shields.io/npm/v/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)

## Installation

```bash
npm install geeks-ui-framework@2.0.2
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
```

## Components Cheat Sheet

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>

<!-- Sizes -->
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-sm">Small</button>
```

### Cards
```html
<div class="card">
    <div class="card-header">Header</div>
    <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Content</p>
    </div>
    <div class="card-footer">Footer</div>
</div>
```

### Forms
```html
<div class="form-group">
    <label class="form-label">Label</label>
    <input type="text" class="form-input" placeholder="Placeholder">
</div>

<!-- Validation -->
<input class="form-input is-valid">
<input class="form-input is-invalid">
```

### Alerts
```html
<div class="alert alert-success">Success message</div>
<div class="alert alert-info">Info message</div>
<div class="alert alert-warning">Warning message</div>
<div class="alert alert-danger">Error message</div>
```

### Badges
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
```

### Progress
```html
<div class="progress">
    <div class="progress-bar" style="width: 75%"></div>
</div>

<div class="progress">
    <div class="progress-bar progress-bar-success" style="width: 50%"></div>
</div>
```

### Navigation
```html
<nav class="navbar">
    <div class="navbar-brand">Brand</div>
    <div class="navbar-nav">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">About</a>
    </div>
</nav>
```

### Modal
```html
<div class="modal" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Title</h5>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">Content</div>
            <div class="modal-footer">
                <button class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
</div>
```

### Tabs
```html
<div class="tabs">
    <div class="tab-nav">
        <button class="tab-button active">Tab 1</button>
        <button class="tab-button">Tab 2</button>
    </div>
    <div class="tab-content">
        <div class="tab-pane active">Content 1</div>
        <div class="tab-pane">Content 2</div>
    </div>
</div>
```

### Accordion
```html
<div class="accordion">
    <div class="accordion-item">
        <div class="accordion-header">
            <button class="accordion-button">Section 1</button>
        </div>
        <div class="accordion-content">
            <div class="accordion-body">Content</div>
        </div>
    </div>
</div>
```

### Dropdown
```html
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle">Dropdown</button>
    <div class="dropdown-menu">
        <a href="#" class="dropdown-item">Action</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="dropdown-item">Another action</a>
    </div>
</div>
```

### Tooltips
```html
<button class="btn btn-primary" data-tooltip="Tooltip text">Hover me</button>
```

## CSS Variables

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
}
```

## JavaScript Helpers

### Modal Control
```javascript
function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
```

### Tab Control
```javascript
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-pane').forEach(pane => 
        pane.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => 
        btn.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}
```

### Dropdown Control
```javascript
function toggleDropdown(button) {
    const menu = button.nextElementSibling;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
```

## Responsive Breakpoints

- `sm`: 576px
- `md`: 768px  
- `lg`: 992px
- `xl`: 1200px

## File Sizes

- **Full CSS**: 49.3KB
- **Minified**: 34.4KB
- **Gzipped**: ~8KB

## Links

- [📚 Full Documentation](./DOCUMENTATION.md)
- [🌐 NPM Package](https://www.npmjs.com/package/geeks-ui-framework)
- [📁 GitHub Repo](https://github.com/Geeks-UI-Css-Framework/Geeks_UI)
- [🐛 Report Issues](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues)

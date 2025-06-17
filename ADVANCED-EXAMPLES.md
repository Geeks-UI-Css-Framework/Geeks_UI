# 🚀 Advanced Usage Examples - Geeks UI Framework

[![npm version](https://img.shields.io/npm/v/geeks-ui-framework.svg)](https://www.npmjs.com/package/geeks-ui-framework)

Real-world implementation patterns, advanced techniques, and best practices for building production-ready applications with Geeks UI.

## 📋 Table of Contents

1. [Dashboard Layout](#dashboard-layout)
2. [E-commerce Product Cards](#e-commerce-product-cards)
3. [Contact Form with Validation](#contact-form-with-validation)
4. [Data Tables](#data-tables)
5. [Navigation Patterns](#navigation-patterns)
6. [Modal Workflows](#modal-workflows)
7. [Theme Implementation](#theme-implementation)
8. [Performance Optimization](#performance-optimization)

---

## 📊 Dashboard Layout

A complete admin dashboard with sidebar navigation, stats cards, and data visualization.

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Geeks UI</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
    <link rel="stylesheet" href="dashboard.css">
</head>
<body class="dashboard-layout">
    <!-- Sidebar -->
    <nav class="sidebar">
        <div class="sidebar-header">
            <h4>Admin Panel</h4>
        </div>
        <ul class="sidebar-nav">
            <li class="nav-item active">
                <a href="#" class="nav-link">
                    <span class="icon">📊</span>
                    Dashboard
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <span class="icon">👥</span>
                    Users
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <span class="icon">📦</span>
                    Products
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <span class="icon">📈</span>
                    Analytics
                </a>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <span class="icon">⚙️</span>
                    Settings
                </a>
            </li>
        </ul>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Top Navigation -->
        <header class="top-nav">
            <div class="nav-left">
                <button class="btn btn-secondary btn-sm" id="sidebar-toggle">☰</button>
                <h2>Dashboard Overview</h2>
            </div>
            <div class="nav-right">
                <span class="badge badge-danger">5</span>
                <div class="dropdown">
                    <button class="dropdown-toggle btn btn-outline-secondary btn-sm">
                        John Doe <span class="caret">▼</span>
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><a href="#">Profile</a></li>
                        <li class="dropdown-item"><a href="#">Settings</a></li>
                        <li class="dropdown-item"><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>

        <!-- Dashboard Content -->
        <div class="dashboard-content">
            <!-- Stats Cards -->
            <div class="stats-grid">
                <div class="card stat-card">
                    <div class="card-body">
                        <div class="stat-content">
                            <div class="stat-number">2,543</div>
                            <div class="stat-label">Total Users</div>
                        </div>
                        <div class="stat-icon">👥</div>
                    </div>
                    <div class="card-footer">
                        <span class="badge badge-success">+12% from last month</span>
                    </div>
                </div>

                <div class="card stat-card">
                    <div class="card-body">
                        <div class="stat-content">
                            <div class="stat-number">$45,210</div>
                            <div class="stat-label">Revenue</div>
                        </div>
                        <div class="stat-icon">💰</div>
                    </div>
                    <div class="card-footer">
                        <span class="badge badge-success">+8% from last month</span>
                    </div>
                </div>

                <div class="card stat-card">
                    <div class="card-body">
                        <div class="stat-content">
                            <div class="stat-number">1,234</div>
                            <div class="stat-label">Orders</div>
                        </div>
                        <div class="stat-icon">📦</div>
                    </div>
                    <div class="card-footer">
                        <span class="badge badge-warning">-3% from last month</span>
                    </div>
                </div>

                <div class="card stat-card">
                    <div class="card-body">
                        <div class="stat-content">
                            <div class="stat-number">98.5%</div>
                            <div class="stat-label">Uptime</div>
                        </div>
                        <div class="stat-icon">⚡</div>
                    </div>
                    <div class="card-footer">
                        <span class="badge badge-info">Excellent</span>
                    </div>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="charts-section">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Sales Overview</h5>
                        <div class="card-actions">
                            <button class="btn btn-outline-primary btn-sm">Export</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="chart-placeholder">
                            📈 Chart would go here (integrate with your favorite chart library)
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Recent Activity</h5>
                    </div>
                    <div class="card-body">
                        <div class="activity-list">
                            <div class="activity-item">
                                <div class="activity-icon">👤</div>
                                <div class="activity-content">
                                    <div class="activity-title">New user registered</div>
                                    <div class="activity-time">2 minutes ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon">💳</div>
                                <div class="activity-content">
                                    <div class="activity-title">Payment received</div>
                                    <div class="activity-time">15 minutes ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon">📦</div>
                                <div class="activity-content">
                                    <div class="activity-title">Order shipped</div>
                                    <div class="activity-time">1 hour ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
```

### Custom CSS (dashboard.css)
```css
/* Dashboard Layout */
.dashboard-layout {
    display: flex;
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Sidebar */
.sidebar {
    width: 250px;
    background: #2c3e50;
    color: white;
    transition: transform 0.3s ease;
}

.sidebar-header {
    padding: 1.5rem;
    border-bottom: 1px solid #34495e;
}

.sidebar-header h4 {
    margin: 0;
    color: white;
}

.sidebar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
}

.sidebar-nav .nav-item {
    border-bottom: 1px solid #34495e;
}

.sidebar-nav .nav-link {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    color: #bdc3c7;
    text-decoration: none;
    transition: all 0.3s ease;
}

.sidebar-nav .nav-link:hover,
.sidebar-nav .nav-item.active .nav-link {
    background: #34495e;
    color: white;
}

.sidebar-nav .icon {
    margin-right: 0.75rem;
    font-size: 1.1rem;
}

/* Main Content */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #f8f9fa;
}

/* Top Navigation */
.top-nav {
    background: white;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-left {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nav-left h2 {
    margin: 0;
    color: #495057;
}

.nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

/* Dashboard Content */
.dashboard-content {
    padding: 1.5rem;
    flex: 1;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.stat-card .card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: bold;
    color: var(--geeks-ui-primary);
}

.stat-label {
    color: #6c757d;
    font-size: 0.9rem;
}

.stat-icon {
    font-size: 2.5rem;
    opacity: 0.7;
}

/* Charts Section */
.charts-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1.5rem;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chart-placeholder {
    height: 300px;
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #6c757d;
}

/* Activity List */
.activity-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.activity-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem;
    background: #f8f9fa;
    border-radius: 8px;
}

.activity-icon {
    font-size: 1.5rem;
}

.activity-title {
    font-weight: 500;
}

.activity-time {
    font-size: 0.8rem;
    color: #6c757d;
}

/* Responsive Design */
@media (max-width: 768px) {
    .dashboard-layout {
        flex-direction: column;
    }
    
    .sidebar {
        width: 100%;
        transform: translateX(-100%);
        position: fixed;
        height: 100vh;
        z-index: 1000;
    }
    
    .sidebar.open {
        transform: translateX(0);
    }
    
    .charts-section {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
```

### JavaScript Functionality
```javascript
// dashboard.js
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
    
    // Dropdown functionality
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdown = this.parentElement;
            const menu = dropdown.querySelector('.dropdown-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});
```

---

## 🛒 E-commerce Product Cards

Advanced product cards with hover effects, badges, and action buttons.

### HTML Structure
```html
<div class="products-grid">
    <div class="card product-card">
        <div class="product-image">
            <img src="https://via.placeholder.com/300x200" alt="Product 1">
            <div class="product-badges">
                <span class="badge badge-danger">Sale</span>
                <span class="badge badge-success">New</span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-sm" title="Quick View">👁️</button>
                <button class="btn btn-danger btn-sm" title="Add to Wishlist">❤️</button>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">Premium Wireless Headphones</h5>
            <p class="card-text">High-quality wireless headphones with noise cancellation and 30-hour battery life.</p>
            <div class="product-rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-count">(124 reviews)</span>
            </div>
            <div class="product-price">
                <span class="price-current">$299.99</span>
                <span class="price-original">$399.99</span>
                <span class="price-discount">25% off</span>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary btn-block">Add to Cart</button>
            <button class="btn btn-outline-secondary btn-sm">Compare</button>
        </div>
    </div>

    <div class="card product-card">
        <div class="product-image">
            <img src="https://via.placeholder.com/300x200" alt="Product 2">
            <div class="product-badges">
                <span class="badge badge-info">Best Seller</span>
            </div>
            <div class="product-actions">
                <button class="btn btn-primary btn-sm" title="Quick View">👁️</button>
                <button class="btn btn-danger btn-sm" title="Add to Wishlist">❤️</button>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">Smart Fitness Watch</h5>
            <p class="card-text">Track your fitness goals with this advanced smartwatch featuring GPS and heart rate monitoring.</p>
            <div class="product-rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-count">(89 reviews)</span>
            </div>
            <div class="product-price">
                <span class="price-current">$199.99</span>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn btn-primary btn-block">Add to Cart</button>
            <button class="btn btn-outline-secondary btn-sm">Compare</button>
        </div>
    </div>

    <div class="card product-card out-of-stock">
        <div class="product-image">
            <img src="https://via.placeholder.com/300x200" alt="Product 3">
            <div class="product-badges">
                <span class="badge badge-secondary">Out of Stock</span>
            </div>
            <div class="stock-overlay">
                <div class="stock-message">
                    <h6>Currently Unavailable</h6>
                    <p>We'll notify you when this item is back in stock</p>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">Professional Camera</h5>
            <p class="card-text">High-resolution camera perfect for professional photography and content creation.</p>
            <div class="product-rating">
                <span class="stars">⭐⭐⭐⭐⭐</span>
                <span class="rating-count">(156 reviews)</span>
            </div>
            <div class="product-price">
                <span class="price-current">$899.99</span>
            </div>
        </div>
        <div class="card-footer">
            <button class="btn btn-secondary btn-block" disabled>Notify When Available</button>
            <button class="btn btn-outline-secondary btn-sm">View Details</button>
        </div>
    </div>
</div>
```

### Product Cards CSS
```css
/* Products Grid */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
}

/* Product Card */
.product-card {
    transition: all 0.3s ease;
    border: 1px solid #e9ecef;
    overflow: hidden;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.product-card.out-of-stock {
    opacity: 0.7;
}

/* Product Image */
.product-image {
    position: relative;
    overflow: hidden;
    height: 200px;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

/* Product Badges */
.product-badges {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 2;
}

/* Product Actions */
.product-actions {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    opacity: 0;
    transform: translateX(10px);
    transition: all 0.3s ease;
    z-index: 2;
}

.product-card:hover .product-actions {
    opacity: 1;
    transform: translateX(0);
}

/* Stock Overlay */
.stock-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 3;
}

.stock-message h6 {
    margin: 0 0 0.5rem;
    color: #495057;
}

.stock-message p {
    margin: 0;
    font-size: 0.9rem;
    color: #6c757d;
}

/* Product Content */
.product-card .card-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
}

.product-card .card-text {
    font-size: 0.9rem;
    color: #6c757d;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Product Rating */
.product-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.stars {
    color: #ffc107;
    font-size: 0.9rem;
}

.rating-count {
    font-size: 0.8rem;
    color: #6c757d;
}

/* Product Price */
.product-price {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0;
    flex-wrap: wrap;
}

.price-current {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--geeks-ui-primary);
}

.price-original {
    font-size: 1rem;
    color: #6c757d;
    text-decoration: line-through;
}

.price-discount {
    font-size: 0.8rem;
    color: var(--geeks-ui-success);
    font-weight: 600;
}

/* Card Footer */
.product-card .card-footer {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.btn-block {
    flex: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
    .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }
    
    .product-actions {
        opacity: 1;
        transform: translateX(0);
    }
}
```

---

## 📝 Contact Form with Validation

A comprehensive contact form with real-time validation and enhanced UX.

### HTML Structure
```html
<div class="contact-section">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <div class="method-icon">📧</div>
                        <div class="method-content">
                            <h6>Email</h6>
                            <p>hello@example.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">📞</div>
                        <div class="method-content">
                            <h6>Phone</h6>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <div class="method-icon">📍</div>
                        <div class="method-content">
                            <h6>Address</h6>
                            <p>123 Business St, City, State 12345</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contact-form-wrapper">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Send us a Message</h5>
                    </div>
                    <div class="card-body">
                        <form id="contactForm" class="contact-form" novalidate>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">First Name *</label>
                                    <input type="text" class="form-input" id="firstName" name="firstName" required>
                                    <div class="form-feedback"></div>
                                </div>
                                
                                <div class="form-group">
                                    <label class="form-label">Last Name *</label>
                                    <input type="text" class="form-input" id="lastName" name="lastName" required>
                                    <div class="form-feedback"></div>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Email Address *</label>
                                <input type="email" class="form-input" id="email" name="email" required>
                                <div class="form-feedback"></div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Phone Number</label>
                                <input type="tel" class="form-input" id="phone" name="phone">
                                <div class="form-feedback"></div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Subject *</label>
                                <select class="form-select" id="subject" name="subject" required>
                                    <option value="">Choose a subject...</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="sales">Sales Question</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                                <div class="form-feedback"></div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-label">Message *</label>
                                <textarea class="form-textarea" id="message" name="message" rows="5" placeholder="Tell us how we can help you..." required></textarea>
                                <div class="form-feedback"></div>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-check">
                                    <input type="checkbox" class="form-check-input" id="newsletter" name="newsletter">
                                    <span class="form-check-label">Subscribe to our newsletter for updates and tips</span>
                                </label>
                            </div>
                            
                            <div class="form-group">
                                <label class="form-check">
                                    <input type="checkbox" class="form-check-input" id="terms" name="terms" required>
                                    <span class="form-check-label">I agree to the <a href="#" target="_blank">Terms of Service</a> and <a href="#" target="_blank">Privacy Policy</a> *</span>
                                </label>
                                <div class="form-feedback"></div>
                            </div>
                            
                            <div class="form-actions">
                                <button type="submit" class="btn btn-primary btn-lg">
                                    <span class="btn-text">Send Message</span>
                                    <span class="btn-loading" style="display: none;">Sending...</span>
                                </button>
                                <button type="reset" class="btn btn-outline-secondary">Reset Form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Success Modal -->
<div id="successModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Message Sent Successfully!</h5>
            <button class="modal-close" onclick="hideModal('successModal')">&times;</button>
        </div>
        <div class="modal-body">
            <div class="success-content">
                <div class="success-icon">✅</div>
                <p>Thank you for contacting us! We've received your message and will get back to you within 24 hours.</p>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" onclick="hideModal('successModal')">Close</button>
        </div>
    </div>
</div>
```

### Contact Form CSS
```css
/* Contact Section */
.contact-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    align-items: start;
}

/* Contact Info */
.contact-info h2 {
    color: #343a40;
    margin-bottom: 1rem;
}

.contact-info p {
    color: #6c757d;
    font-size: 1.1rem;
    margin-bottom: 2rem;
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-method {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.method-icon {
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--geeks-ui-primary);
    color: white;
    border-radius: 50%;
}

.method-content h6 {
    margin: 0 0 0.25rem;
    color: #343a40;
}

.method-content p {
    margin: 0;
    color: #6c757d;
}

/* Contact Form */
.contact-form-wrapper {
    position: sticky;
    top: 2rem;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    font-weight: 600;
    color: #343a40;
}

.form-feedback {
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: none;
}

.form-feedback.valid {
    color: var(--geeks-ui-success);
    display: block;
}

.form-feedback.invalid {
    color: var(--geeks-ui-warning);
    display: block;
}

.form-input.is-valid,
.form-select.is-valid,
.form-textarea.is-valid {
    border-color: var(--geeks-ui-success);
}

.form-input.is-invalid,
.form-select.is-invalid,
.form-textarea.is-invalid {
    border-color: var(--geeks-ui-warning);
}

.form-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-start;
}

.btn-loading {
    display: none;
}

.btn.loading .btn-text {
    display: none;
}

.btn.loading .btn-loading {
    display: inline;
}

/* Success Modal Content */
.success-content {
    text-align: center;
    padding: 1rem;
}

.success-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .form-actions {
        flex-direction: column;
        align-items: stretch;
    }
    
    .contact-form-wrapper {
        position: relative;
        top: 0;
    }
}
```

### Form Validation JavaScript
```javascript
// contact-form.js
class ContactFormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearValidation(input));
        });
    }
    
    validateField(field) {
        const value = field.value.trim();
        const name = field.name;
        let isValid = true;
        let message = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required.';
        }
        
        // Specific field validations
        if (value && isValid) {
            switch (name) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        isValid = false;
                        message = 'Please enter a valid email address.';
                    }
                    break;
                    
                case 'phone':
                    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
                    if (value && !phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                        isValid = false;
                        message = 'Please enter a valid phone number.';
                    }
                    break;
                    
                case 'firstName':
                case 'lastName':
                    if (value.length < 2) {
                        isValid = false;
                        message = 'Name must be at least 2 characters long.';
                    }
                    break;
                    
                case 'message':
                    if (value.length < 10) {
                        isValid = false;
                        message = 'Message must be at least 10 characters long.';
                    }
                    break;
            }
        }
        
        this.setFieldValidation(field, isValid, message);
        return isValid;
    }
    
    setFieldValidation(field, isValid, message) {
        const feedback = field.parentElement.querySelector('.form-feedback');
        
        // Remove existing classes
        field.classList.remove('is-valid', 'is-invalid');
        feedback.classList.remove('valid', 'invalid');
        
        if (isValid && field.value.trim()) {
            field.classList.add('is-valid');
            feedback.classList.add('valid');
            feedback.textContent = '✓ Looks good!';
        } else if (!isValid) {
            field.classList.add('is-invalid');
            feedback.classList.add('invalid');
            feedback.textContent = message;
        }
    }
    
    clearValidation(field) {
        const feedback = field.parentElement.querySelector('.form-feedback');
        field.classList.remove('is-valid', 'is-invalid');
        feedback.classList.remove('valid', 'invalid');
        feedback.style.display = 'none';
    }
    
    validateForm() {
        const fields = this.form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            this.showAlert('Please fix the errors below before submitting.', 'danger');
            return;
        }
        
        const submitBtn = this.form.querySelector('button[type="submit"]');
        this.setLoadingState(submitBtn, true);
        
        try {
            // Simulate API call
            await this.submitForm(new FormData(this.form));
            
            // Show success modal
            this.showSuccessModal();
            this.form.reset();
            this.clearAllValidations();
            
        } catch (error) {
            this.showAlert('There was an error sending your message. Please try again.', 'danger');
        } finally {
            this.setLoadingState(submitBtn, false);
        }
    }
    
    async submitForm(formData) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted:', Object.fromEntries(formData));
                resolve();
            }, 2000);
        });
    }
    
    setLoadingState(button, loading) {
        if (loading) {
            button.classList.add('loading');
            button.disabled = true;
        } else {
            button.classList.remove('loading');
            button.disabled = false;
        }
    }
    
    showAlert(message, type) {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.innerHTML = `<strong>Error!</strong> ${message}`;
        
        // Insert before form
        this.form.parentElement.insertBefore(alert, this.form);
        
        // Remove after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
    
    showSuccessModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'flex';
    }
    
    clearAllValidations() {
        const fields = this.form.querySelectorAll('input, select, textarea');
        fields.forEach(field => this.clearValidation(field));
    }
}

// Initialize form validator
document.addEventListener('DOMContentLoaded', function() {
    new ContactFormValidator('contactForm');
});

// Modal functions
function hideModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
```

---

This comprehensive documentation provides advanced, real-world examples that developers can use to build production-ready applications with Geeks UI. Each example includes:

1. **Complete HTML structure** with semantic markup
2. **Custom CSS** for enhanced styling and interactions
3. **JavaScript functionality** for dynamic behavior
4. **Responsive design** considerations
5. **Accessibility** best practices
6. **Performance** optimizations

The examples demonstrate:
- Complex layout patterns (dashboard)
- E-commerce functionality (product cards)
- Form handling with validation
- Interactive components
- Modern CSS techniques
- Progressive enhancement

Would you like me to add more advanced examples or expand on any particular section?

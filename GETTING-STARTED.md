# 🌟 Getting Started with Geeks UI - Beginner's Guide

Welcome to Geeks UI! This guide will help you get up and running with our CSS framework in just a few minutes.

## 🎯 What You'll Learn

By the end of this guide, you'll know how to:
- Install and set up Geeks UI
- Create your first component
- Build a simple webpage
- Customize the framework to match your style

## 📋 Prerequisites

You should have basic knowledge of:
- HTML
- CSS (helpful but not required)
- How to create and edit files

## 🚀 Step 1: Choose Your Installation Method

### Option A: CDN (Easiest - Recommended for Beginners)

Add this line to the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
```

### Option B: Download Files

1. Go to our [GitHub Releases page](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/releases)
2. Download the latest release
3. Extract the files
4. Copy `geeks-ui.min.css` to your project folder

## 🏗️ Step 2: Create Your First Page

Create a new file called `index.html` and copy this basic template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Geeks UI Page</title>
    <!-- Geeks UI CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Geeks UI!</h1>
        <p>This is your first page using Geeks UI framework.</p>
        
        <!-- Your first button -->
        <button class="btn btn-primary">Click Me!</button>
    </div>
</body>
</html>
```

Save this file and open it in your web browser. You should see a styled page with a blue button!

## 🎨 Step 3: Add Your First Components

Let's add some more components to make your page more interesting. Replace the content inside the `<div class="container">` with this:

```html
<div class="container">
    <!-- Header -->
    <h1>My Portfolio</h1>
    <p>Welcome to my personal website built with Geeks UI!</p>
    
    <!-- Buttons -->
    <div style="margin: 20px 0;">
        <button class="btn btn-primary">About Me</button>
        <button class="btn btn-success">My Projects</button>
        <button class="btn btn-info">Contact</button>
    </div>
    
    <!-- Alert -->
    <div class="alert alert-info">
        <strong>New!</strong> This website is built with Geeks UI framework.
    </div>
    
    <!-- Card -->
    <div class="card" style="margin: 20px 0; max-width: 500px;">
        <div class="card-header">
            <h3>About Me</h3>
        </div>
        <div class="card-body">
            <p>I'm a web developer learning to use CSS frameworks to build beautiful websites quickly.</p>
            <button class="btn btn-primary">Learn More</button>
        </div>
    </div>
    
    <!-- Form -->
    <div class="card" style="margin: 20px 0; max-width: 500px;">
        <div class="card-header">
            <h3>Contact Me</h3>
        </div>
        <div class="card-body">
            <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-input" placeholder="Enter your name">
            </div>
            <div class="form-group">
                <label class="form-label">Your Email</label>
                <input type="email" class="form-input" placeholder="Enter your email">
            </div>
            <div class="form-group">
                <label class="form-label">Message</label>
                <textarea class="form-input" rows="3" placeholder="Your message"></textarea>
            </div>
            <button class="btn btn-success">Send Message</button>
        </div>
    </div>
</div>
```

Save and refresh your browser. You now have a mini portfolio page!

## 🛠️ Step 4: Understanding the Classes

Let's break down what you just used:

### Container
```html
<div class="container">
```
- Centers your content and provides proper spacing

### Buttons
```html
<button class="btn btn-primary">Click Me</button>
```
- `.btn` = Basic button styling
- `.btn-primary` = Blue color (you can use `btn-success`, `btn-danger`, etc.)

### Cards
```html
<div class="card">
    <div class="card-header">Title</div>
    <div class="card-body">Content</div>
</div>
```
- Creates a nice container with shadow and rounded corners

### Forms
```html
<div class="form-group">
    <label class="form-label">Label</label>
    <input class="form-input" type="text">
</div>
```
- `form-group` = Proper spacing between form fields
- `form-label` = Styled labels
- `form-input` = Styled input fields

### Alerts
```html
<div class="alert alert-info">Message</div>
```
- Creates colored notification boxes

## 🎨 Step 5: Customize Colors

Want to change the colors? You can override them with custom CSS. Add this to your `<head>` section after the Geeks UI CSS:

```html
<style>
    :root {
        --primary-color: #ff6b6b;  /* Change primary to red */
        --success-color: #51cf66;  /* Change success to green */
    }
    
    /* Custom styles */
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    
    body {
        background-color: #f8f9fa;
    }
</style>
```

## 📱 Step 6: Make It Responsive

Your page is already responsive! Try resizing your browser window or viewing it on your phone. The components automatically adapt to different screen sizes.

## ✨ Step 7: Add Interactive Elements

Let's add a modal (popup window). Add this before the closing `</body>` tag:

```html
<!-- Modal trigger button -->
<button class="btn btn-warning" onclick="openModal('aboutModal')">
    Open Modal
</button>

<!-- Modal -->
<div class="modal" id="aboutModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">About This Project</h5>
                <button type="button" class="modal-close" onclick="closeModal('aboutModal')">&times;</button>
            </div>
            <div class="modal-body">
                <p>This is my first project using Geeks UI! It was really easy to get started.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeModal('aboutModal')">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>

<!-- JavaScript for modal -->
<script>
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
</script>
```

## 🎉 Complete Example

Here's your complete `index.html` file with everything we've covered:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Geeks UI Page</title>
    <!-- Geeks UI CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geeks-ui-framework@2.0.2/dist/geeks-ui.min.css">
    
    <!-- Custom styles -->
    <style>
        :root {
            --primary-color: #6f42c1;  /* Purple theme */
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        body {
            background-color: #f8f9fa;
        }
        
        .component-spacing {
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <h1>My Portfolio</h1>
        <p>Welcome to my personal website built with Geeks UI!</p>
        
        <!-- Navigation-style buttons -->
        <div class="component-spacing">
            <button class="btn btn-primary">About Me</button>
            <button class="btn btn-success">My Projects</button>
            <button class="btn btn-info">Contact</button>
            <button class="btn btn-warning" onclick="openModal('aboutModal')">Open Modal</button>
        </div>
        
        <!-- Alert -->
        <div class="alert alert-info component-spacing">
            <strong>New!</strong> This website is built with Geeks UI framework.
        </div>
        
        <!-- Progress bar -->
        <div class="component-spacing">
            <h4>Skills</h4>
            <p>HTML/CSS</p>
            <div class="progress">
                <div class="progress-bar progress-bar-success" style="width: 80%">80%</div>
            </div>
            <p style="margin-top: 10px;">JavaScript</p>
            <div class="progress">
                <div class="progress-bar" style="width: 60%">60%</div>
            </div>
        </div>
        
        <!-- About Card -->
        <div class="card component-spacing" style="max-width: 500px;">
            <div class="card-header">
                <h3>About Me</h3>
            </div>
            <div class="card-body">
                <p>I'm a web developer learning to use CSS frameworks to build beautiful websites quickly.</p>
                <span class="badge badge-primary">Web Developer</span>
                <span class="badge badge-success">CSS Enthusiast</span>
                <div style="margin-top: 15px;">
                    <button class="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
        
        <!-- Contact Form -->
        <div class="card component-spacing" style="max-width: 500px;">
            <div class="card-header">
                <h3>Contact Me</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label class="form-label">Your Name</label>
                    <input type="text" class="form-input" placeholder="Enter your name">
                </div>
                <div class="form-group">
                    <label class="form-label">Your Email</label>
                    <input type="email" class="form-input" placeholder="Enter your email">
                </div>
                <div class="form-group">
                    <label class="form-label">Message</label>
                    <textarea class="form-input" rows="3" placeholder="Your message"></textarea>
                </div>
                <button class="btn btn-success">Send Message</button>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal" id="aboutModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">About This Project</h5>
                    <button type="button" class="modal-close" onclick="closeModal('aboutModal')">&times;</button>
                </div>
                <div class="modal-body">
                    <p>This is my first project using Geeks UI! It was really easy to get started.</p>
                    <p>Features I used:</p>
                    <ul>
                        <li>Buttons with different colors</li>
                        <li>Cards for content organization</li>
                        <li>Forms with proper styling</li>
                        <li>Progress bars for skills</li>
                        <li>Badges for tags</li>
                        <li>This modal popup!</li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="closeModal('aboutModal')">Close</button>
                    <button type="button" class="btn btn-primary">Awesome!</button>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript -->
    <script>
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
    </script>
</body>
</html>
```

## 🎯 What's Next?

Congratulations! You've built your first webpage with Geeks UI. Here's what you can explore next:

### 📚 Learn More Components
- [Navigation bars](../DOCUMENTATION.md#navigation)
- [Tabs for organizing content](../DOCUMENTATION.md#tabs)
- [Accordion for FAQ sections](../DOCUMENTATION.md#accordion)
- [Dropdown menus](../DOCUMENTATION.md#dropdown)
- [Tooltips for extra info](../DOCUMENTATION.md#tooltips)

### 🎨 Customize Further
- Learn about [CSS variables](../DOCUMENTATION.md#css-variables)
- Create a [dark theme](../DOCUMENTATION.md#dark-theme-example)
- Add your own [custom components](../DOCUMENTATION.md#customization)

### 🚀 Build Real Projects
- Personal portfolio
- Business landing page
- Admin dashboard
- Blog template

## 💡 Tips for Success

1. **Start Simple**: Begin with basic components and gradually add complexity
2. **Use the Documentation**: Check the [full documentation](../DOCUMENTATION.md) for complete examples
3. **Inspect Elements**: Use browser dev tools to see how components work
4. **Experiment**: Try different color combinations and layouts
5. **Mobile First**: Always test on different screen sizes

## 🆘 Need Help?

- 📖 [Complete Documentation](../DOCUMENTATION.md)
- 🚀 [Quick Reference](../QUICK-REFERENCE.md)
- 🐛 [Report Issues](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/issues)
- 💬 [GitHub Discussions](https://github.com/Geeks-UI-Css-Framework/Geeks_UI/discussions)

## 🎉 You Did It!

You've successfully created your first webpage with Geeks UI! You now know how to:
- ✅ Install and set up the framework
- ✅ Use buttons, cards, forms, and modals
- ✅ Customize colors with CSS variables
- ✅ Make interactive components with JavaScript

Keep experimenting and building amazing things! 🚀

---

**Happy coding with Geeks UI!** 💙

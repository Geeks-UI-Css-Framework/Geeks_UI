const fs = require('fs');
const path = require('path');

// Build order for CSS files
const files = [
    'variables.css',
    'layout.css',
    'alerts.css',
    'buttons.css',
    'navigation.css',
    'footer.css'
];

// Header comment
const header = `/*!
 * Geeks UI v1.0.0
 * A modern, lightweight CSS framework for developers
 * https://geeks-ui-cdn.netlify.app
 * 
 * Copyright 2025 Joey Cadieux
 * Licensed under MIT
 */

`;

// Read and concatenate CSS files
let cssContent = header;

files.forEach(file => {
    const filePath = path.join(__dirname, 'src', file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        cssContent += content + '\n\n';
        console.log(`✅ Added ${file}`);
    } else {
        console.log(`⚠️  Warning: ${file} not found`);
    }
});

// Ensure dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Write the combined CSS file
const outputPath = path.join(distDir, 'geeks-ui.css');
fs.writeFileSync(outputPath, cssContent);

console.log(`🎉 Build complete! Generated ${outputPath}`);
console.log(`📦 Total size: ${(cssContent.length / 1024).toFixed(2)} KB`);

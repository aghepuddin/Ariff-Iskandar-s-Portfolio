# Ariff Iskandar's Professional Portfolio

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript featuring a professional design with interactive elements.

## 📋 Features

### Pages
1. **Home** - Introduction and about yourself with grid layout
2. **Education** - Academic background, certifications, and technical skills
3. **Projects** - Showcase of projects with descriptions, technologies, and links
4. **Contact** - Contact information and message form

### Key Features
- 🎯 **Hoverable Ribbon Menu** - Fixed side menu that pops out on hover
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Scroll animations and hover effects
- 🎨 **Modern Design** - Clean, professional color scheme
- ⚡ **Performance Optimized** - Lazy loading and smooth transitions
- 🔗 **Easy Navigation** - Intuitive menu system across all pages

## 📁 Project Structure

```
Ariff-Iskandar-s-Portfolio/
├── index.html          # Home page with introduction
├── education.html      # Education, certifications, and skills
├── projects.html       # Project showcase with project cards
├── contact.html        # Contact information and message form
├── styles.css          # Global styles and responsive design
├── script.js           # Interactive features and utilities
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor for modifications (VS Code, Sublime, etc.)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/aghepuddin/Ariff-Iskandar-s-Portfolio.git
```

2. Navigate to the project directory:
```bash
cd Ariff-Iskandar-s-Portfolio
```

3. Open `index.html` in your web browser or use a local server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎨 Customization

### Update Personal Information
1. **Home Page** (`index.html`):
   - Update your name in the `<h1>` tag
   - Modify the subtitle
   - Edit the "About Me" section in `div2`

2. **Education Page** (`education.html`):
   - Add your education history
   - Update certifications
   - List your technical skills

3. **Projects Page** (`projects.html`):
   - Replace project titles and descriptions
   - Update project dates
   - Add project links and GitHub repositories
   - Change project emoji/images

4. **Contact Page** (`contact.html`):
   - Update email address
   - Add phone number
   - Update location
   - Add social media links

### Customize Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #3498db;    /* Accent color */
    --accent-color: #e74c3c;       /* Highlight color */
    --light-bg: #ecf0f1;           /* Light background */
    --text-dark: #2c3e50;          /* Dark text */
    --text-light: #7f8c8d;         /* Light text */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: Full grid layout with side ribbon menu
- **Tablet** (≤768px): Adjusted grid and horizontal menu
- **Mobile** (≤480px): Optimized for small screens

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid layout, flexbox, animations
- **JavaScript (ES6)** - Interactive features
- **Responsive Design** - Mobile-first approach

## 🎯 CSS Grid Layout

The main page uses a 5x5 CSS Grid:
```css
.parent {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
}

.div1 {
    grid-column: span 5 / span 5;    /* Full width banner */
}

.div2 {
    grid-column: 2 / span 4;          /* 4 columns wide, starting at column 2 */
    grid-row: 2 / span 4;             /* 4 rows tall, starting at row 2 */
}
```

## 📄 File Descriptions

### index.html
- Hero section with your name and title
- About section with skills preview
- Uses the provided grid layout

### education.html
- Education timeline with school and graduation information
- Professional certifications section
- Technical skills categorized by type

### projects.html
- Project showcase in responsive grid
- Project cards with images, descriptions, and links
- Technology tags for each project
- Call-to-action for GitHub profile

### contact.html
- Contact information with email, phone, location
- Social media links
- Contact form with validation
- Responsive two-column layout

### styles.css
- Root variables for easy customization
- Mobile-first responsive design
- Ribbon menu styling
- Card and form elements
- Animation and transition effects

### script.js
- Active menu highlighting
- Smooth scrolling
- Scroll animations
- Scroll-to-top button
- Lazy image loading utility
- Analytics tracking support

## 🌐 Deployment

### GitHub Pages
1. Ensure your repository is public
2. Go to Settings → Pages
3. Select branch `main` and save
4. Your portfolio will be available at `https://yourusername.github.io/Ariff-Iskandar-s-Portfolio`

### Other Hosting Services
- Netlify
- Vercel
- Firebase Hosting
- AWS S3

## 💡 Tips for Best Results

1. **Images**: Add project screenshots to make projects more visual
2. **Links**: Ensure all social media and project links are correct
3. **Mobile Testing**: Test on various devices and screen sizes
4. **Performance**: Optimize images before uploading
5. **SEO**: Update meta tags and descriptions for better search visibility

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Last Updated**: July 2026  
**Version**: 1.0.0

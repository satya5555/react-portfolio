# React Portfolio Website

A personal portfolio website built using **React.js**, showcasing my projects, skills, and contact information.  
Hosted on **Netlify** with continuous deployment from GitHub.

🌐 **Live Demo:** [satya-portfolio-site.netlify.app](https://satya-portfolio-site.netlify.app/)

---

## 🚀 Features

- **Modular & Reusable Components:** Built with React.js for scalability and maintainability.
- **Smooth Navigation:** Implemented with React Router for seamless page transitions.
- **Dynamic Content Rendering:** Conditional rendering based on user interactions.
- **Interactive UI Elements:** Skill indicators, progress bars, and project previews.
- **Secure Contact Form:** Integrated EmailJS and DOMPurify for safe, backend-free messaging.
- **Continuous Deployment:** Auto-deploy to Netlify upon GitHub push.

---

## 🛠 Frameworks & Libraries

- **React.js** – Component-based UI development.
- **React Router** – Client-side routing.
- **EmailJS** – Send emails directly from the website.
- **DOMPurify** – Input sanitization for security.
- **CSS Modules** – Scoped and maintainable styling.
- **classNames** – Conditional class handling.

---

## 📂 Project Structure

### **Main File**
- `App.js` – Central hub integrating all sections using React Router.

### **Sections & Components**

#### **About**
- `About.js` – Main About section container.
- `Avatar.js` – Dynamic avatar rendering based on active page.
- `AboutMenu.js` – State management for subheadings and menu items.
- `AboutMenuItem.js` – Individual menu item component.
- `AboutSubheading.js` – Renders content for selected subheading.

#### **Skills**
- `SkillsMenu.js` – Categorized skill display (e.g., Web Development, Coursework).
- `SkillsData.js` – Data file storing skill categories and details.

#### **Projects**
- `ProjectsMenu.js` – Displays project list with dynamic detail view.
- `ProjectsData.js` – Stores project details.

#### **Contact**
- `ContactMenu.js` – Contact form with EmailJS integration and DOMPurify sanitization.

---

## 🎨 Styling & Assets

- **CSS Modules** – Scoped styles per component to prevent conflicts.
- **classNames** – Conditional styling based on state.
- **Custom Icons & Images** – Used across sections for visual enhancement.

---

## 📦 Deployment

### Hosting
- Hosted on **Netlify**.

### Process
1. Pushed code to GitHub repository.
2. Connected GitHub repo to Netlify.
3. Netlify auto-detected React app and configured build settings.
4. Automatic deployments triggered on every push to `main`.

---

## 🔒 Security

- **DOMPurify** ensures user inputs are sanitized to prevent XSS attacks.
- Validation on contact form before submission.

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/satya5555/react-portfolio.git

# Navigate to project directory
cd react-portfolio

# Install dependencies
npm install

# Start the development server
npm start

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 📇 Contacts React App

A clean and responsive **React-based Contacts Manager** that allows users to view, search, add, and delete contacts.  
Each contact includes a name, email, phone number (auto-formatted with `+91`), and an optional profile image.

---

## 🚀 Live Demo
🔗 **Deployed App:** [https://likhithjadhav.github.io/Contacts-React/](https://likhithjadhav.github.io/Contacts-React/)

---

## 🧩 Features

- 🔍 **Search Functionality:** Instantly filter contacts by name or email.  
- ➕ **Add New Contact:** Add contacts with validation for email and phone number formats.  
- 🇮🇳 **Auto Phone Formatting:** Automatically adds `+91` prefix and spaces after 5 digits.  
- 🧹 **Delete Contacts:** Remove any contact with a confirmation prompt.  
- 💾 **Image Support:** Add custom image URLs for contacts (uses placeholder initials if none).  
- 🎨 **Modern UI:** Styled with Tailwind CSS and clean iconography via Lucide React.  
- ⚡ **Client-Side Only:** Runs entirely in the browser — no backend needed.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)  
- **Styling:** Tailwind CSS  
- **Icons:** [Lucide React](https://lucide.dev)  
- **Deployment:** GitHub Pages

---

## 🧰 Setup & Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/LikhithJadhav/Contacts-React.git
cd Contacts-React

###2. Install Dependencies
npm install

###3. Run the App
npm run dev


Now open your browser and visit http://localhost:5173
 to view the browser.


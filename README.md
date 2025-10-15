# 🌐 Lordvic's Portfolio Website

A personal portfolio built using **Laravel**, **React**, **TailwindCSS**, and **MySQL**.  
This project showcases my web development work, coding projects, and personal background.

---

## 🚀 Tech Stack
- **Backend:** Laravel 10 (PHP 8+)
- **Frontend:** React 18 with Inertia.js
- **Styling:** TailwindCSS
- **Database:** MySQL
- **Build Tool:** Vite
- **Hosting:** (to be updated after deployment)

---

## 🎯 Features
- Modern, responsive portfolio layout
- Project gallery with image previews
- Contact form with backend validation
- Smooth page transitions powered by Inertia.js
- Fully mobile-friendly interface

---

## 🛠️ Installation & Setup
To run this project locally:

```bash
# Clone the repository
git clone https://github.com/LordGs/Lordvic.git

# Enter the project directory
cd <repo-name>

# Install dependencies
composer install
npm install

# Set up environment
cp .env.example .env
php artisan key:generate

# Configure database in .env then run:
php artisan migrate

# Start the development server
php artisan serve
npm run dev

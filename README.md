# Car Agency - Frontend 🚗

A React-based frontend application for a car agency platform, allowing users to explore, list, and manage cars for sale or purchase.

---

## 📌 Description

This is the frontend part of the Car Agency full-stack application. It connects with a backend server via RESTful APIs to provide a smooth user experience for buying and selling cars.

The project now includes user session management using React Context and a logout feature to improve security and usability.

---

## 🚀 Features

- Responsive UI built with React
- User authentication (Login, Register, Logout)
- Car listing and detailed view
- Add, edit, and delete car entries (for authorized users)
- Navigation bar with dynamic links based on user role
- State management using React Context API
- API integration using Axios
- Environment-based API configuration

---

## 🧰 Technologies Used

- **React.js** (with functional components and hooks)
- **React Router DOM**
- **Axios**
- **React Context API**
- **CSS Modules** *(or Tailwind CSS if applicable)*
- **.env** environment configuration

---

## 📂 Folder Structure

```bash
src/
├── components/
│   ├── Login/
│   ├── Register/
│   ├── Navbar/
│   └── signOut/
├── Context/
│   └── UserContext.jsx
├── App.jsx
├── main.jsx
└── index.css

# 📚 PH-Assignment-11 - Assignment Management System  

🚀 **New Live Link:** [PH Assignment Management System](https://ph-assignment-management-pro.surge.sh/)  
🔗 **Old Live Link:** [Previous Version](https://ph-assignment-management-system.surge.sh/)  

<div align="center">
  <img height="300" src="https://i.ibb.co.com/jfK1VPL/Ph-A-11-Assignment-Management.png" />
</div>

## 📖 Overview  

The **Assignment Management System** is a web-based platform that allows educators and students to create, manage, and track assignments efficiently. It integrates **JWT authentication, Firebase authentication, and MongoDB CRUD operations** to provide a secure and scalable solution.  

---

## 🎯 Key Features  

✅ **User Authentication** – Firebase-based authentication with JWT security.  
✅ **Assignment Management** – Users can create, update, delete, and track assignments.  
✅ **Three-Level Assignment System** – Organizes assignments into structured levels.  
✅ **Google Docs & PDF Support** – Users can submit assignments with external document links.  
✅ **Responsive UI** – Works seamlessly across desktop, tablet, and mobile devices.  

---

## 📂 Table of Contents  

- [Installation](#installation)  
- [Configuration](#configuration)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [API Environment Variables](#api-environment-variables)  
- [Troubleshooting](#troubleshooting)  
- [License](#license)  

---

## 🛠️ Installation  

### Prerequisites  
Ensure you have the following installed on your system:  

- **Node.js** (Latest LTS) → [Download](https://nodejs.org/)  
- **npm** (or **yarn**) → Installed with Node.js  
- **Git** → [Download](https://git-scm.com/)  

### Step 1: Clone the Repository  

```sh
git clone https://github.com/Rokon-Khan/ph-assignment-11.git
cd your-repo-folder
```

### Step 2: Install Dependencies  

Using **npm**:  

```sh
npm install
```

or using **yarn**:  

```sh
yarn install
```

---

## ⚙️ Configuration  

### 📄 Create a `.env.local` File  

Create a `.env.local` file in the **root** directory and add the following variables:  

```plaintext
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id
VITE_API_URL=your_backend_api_url
```

**🔒 Important:** Do **not** commit the `.env.local` file to Git. Add it to `.gitignore` to keep your credentials secure.  

---

## 🚀 Usage  

### Step 3: Start the Development Server  

```sh
npm run dev
```

The application will be available at **http://localhost:5173/**.  

### Step 4: Build the Project  

To build the project for production:  

```sh
npm run build
```

To preview the production build:  

```sh
npm run preview
```

---

## 📦 Dependencies  

This project uses the following **npm packages**:  

- **React** – Frontend framework  
- **React Router** – Navigation and routing  
- **Firebase** – Authentication and database integration  
- **React-Datepicker** – Date selection UI  
- **React Icons** – Icons for UI components  
- **Animate.css** – Smooth animations  
- **Hot Toast** – Notification system  
- **Swiper** – Modern slider component  

Install all dependencies with:  

```sh
npm install
```

---

## 🌍 API Environment Variables  

These are required for backend API communication and third-party integrations.  

| Variable Name               | Description                             |
|-----------------------------|-----------------------------------------|
| `VITE_apiKey`               | Firebase API Key                       |
| `VITE_authDomain`           | Firebase Auth Domain                   |
| `VITE_projectId`            | Firebase Project ID                    |
| `VITE_storageBucket`        | Firebase Storage Bucket                |
| `VITE_messagingSenderId`    | Firebase Messaging Sender ID           |
| `VITE_appId`                | Firebase App ID                        |
| `VITE_API_URL`              | Backend API Base URL                   |

---

## 🛠️ Troubleshooting  

### 1. **Port Already in Use Error**  

If you see `Error: Port 5173 is already in use`, stop the process using:  

```sh
npx kill-port 5173
```

Or specify another port in `package.json`:  

```json
"scripts": {
  "dev": "vite --port 3000"
}
```

### 2. **Backend Not Responding**  

Ensure the backend is running at the specified **`VITE_API_URL`**.  

```sh
cd backend
npm start
```

### 3. **Firebase Authentication Issues**  

- Verify **API keys** are correctly set in `.env.local`.  
- Check **Firebase console** for authentication setup.  
- Ensure **Google Sign-In and Email/Password authentication** are enabled.  

---

## 📜 License  

This project is licensed under the **MIT License**.  

---

This README provides everything needed to set up, run, and troubleshoot your **PH-Assignment-11 Client-Side** project. Let me know if you need any modifications! 🚀




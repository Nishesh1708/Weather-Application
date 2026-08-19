# 🌦️ Weather Application

A weather application built with **Node.js** that fetches and displays real-time weather data using external APIs.  
The project follows a clean **MVC architecture** and includes authentication middleware for protected routes.

---

## 🚀 Features

- 🌍 Search weather by city
- 🔄 Fetch real-time weather data via external API
- 🧠 Clean MVC project structure
- 🔐 authentication middleware for route protectio
- 🛡 Secure handling of API keys
- 📁 Organized backend routing and controllers

---

## 🛠 Tech Stack

**Backend:** Node.js, Express.js  
**Frontend:** EJS, HTML, CSS  
**Architecture:** MVC Pattern  
**API Integration:** RESTful Weather API  
**Version Control:** Git & GitHub  

---
## 📂 Project Structure

```
weather-application/
│
├── public/               
│
├── src/
│   ├── config/           
│   ├── models/           
│   ├── controllers/      
│   ├── routes/           
│   ├── middleware/       
│   ├── views/           
│   ├── utils/            
│   └── app.js         
│
├── .env                  
├── .gitignore
├── package.json
└── README.md
```


---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/weather-application.git
cd weather-application
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file

Create a `.env` file in the root directory and add:

```
JWT_KEY = your_jwt_key
WEATHER_KEY=your_weather_api_key
EXPRESS_SESSION_KEY=your_session_secret
MONGODB_URI = your_mongodb_uri
```

### 4️⃣ Run the application

```bash
npm run dev
```

The app will run on:

```
http://localhost:3000
```

---

## 📌 Future Enhancements

- 📊 5-day weather forecast
- 📍 Location-based weather detection
- 🗄 Database integration for saved searches

---

## 🎯 Learning Outcomes

This project demonstrates:

- Backend development fundamentals
- API integration
- User authentication and authorization
- Middleware implementation
- MVC architecture design
- Secure environment variable handling
- Version control best practices

---

## 📜 License

This project is built for educational and portfolio purposes.

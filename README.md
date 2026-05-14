# AI Travel Planner ✈️🤖

A full stack AI-powered travel planning application built using **React**, **Spring Boot**, and **MySQL**.

The application helps users organize trips, generate AI itineraries, manage travel timelines, save favorite places, transport notes, and travel checklists in one place.

---

# 🚀 Features

-  JWT Authentication (Login & Signup)
-  Create and Manage Trips
-  AI Itinerary Generation using Groq API
-  Daily Trip Timeline
-  Travel Checklist
-  Favorite Places
-  Transport Notes
-  Weather Information
-  Interactive Maps
-  Responsive Modern UI

---

# Tech Stack

## Frontend
- React.js
- React Router
- Tailwind CSS
- Lucide React
- React Markdown

## Backend
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- REST APIs

## Database
- MySQL

## APIs
- Groq AI API
- OpenWeather API
- OpenStreetMap

---

# Project Structure

```bash
ai-travel-planner/
│
├── frontend/
│
├── backend/
│
└── README.md


⚙️ Backend Setup
1️⃣ Navigate to backend
cd backend
2️⃣ Configure MySQL Database
Create a MySQL database:
CREATE DATABASE travelplanner;
3️⃣ Create application.properties
Inside:
src/main/resources/
4️⃣ Run Backend
mvn spring-boot:run
Backend runs on:
http://localhost:8080


💻 Frontend Setup
1️⃣ Navigate to frontend
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Run frontend
npm run dev

🤖 AI Itinerary Flow
User Input
   ↓
React Frontend
   ↓
Spring Boot API
   ↓
Groq AI API
   ↓
Generated Travel Itinerary

📸 Screenshots



Future Improvements
AI chat assistant
Expense tracking
PDF itinerary export
Email notifications


👨‍💻 Author
Shankar Namaji

📄 License
This project is for learning and portfolio purposes.
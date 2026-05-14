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
Login Page

<img width="767" height="813" alt="image" src="https://github.com/user-attachments/assets/b510fe85-157b-4bc2-a2d0-6e4268c8da4a" />

Dashboard

<img width="1664" height="746" alt="image" src="https://github.com/user-attachments/assets/73cfc2d6-fc49-4927-b380-b499061d9afe" />

AI Planner

<img width="1187" height="476" alt="image" src="https://github.com/user-attachments/assets/37641774-4bbb-4a40-ba15-efa3bd285595" />

<img width="712" height="618" alt="image" src="https://github.com/user-attachments/assets/44d8d57c-d13b-4050-8bfe-dff080257b82" />

Trip Details

<img width="801" height="661" alt="image" src="https://github.com/user-attachments/assets/49b91057-fc49-4e32-ba45-785e90d867f7" />


Future Improvements
AI chat assistant
Expense tracking
PDF itinerary export
Email notifications


👨‍💻 Author
Shankar Namaji

📄 License
This project is for learning and portfolio purposes.

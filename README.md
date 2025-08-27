# StreamConnect

StreamConnect is a **real-time chat and video calling web application** built with the **MERN stack** (MongoDB, Express, React, Node.js) and **WebRTC** for peer-to-peer media streaming. It allows users to register, login, chat one-to-one, and make real-time video/audio calls with low latency.  

---

## **Table of Contents**

1. [Project Objective](#project-objective)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Architecture](#architecture)  
5. [Working Flow](#working-flow)  
6. [Setup & Installation](#setup--installation)  
7. [Future Enhancements](#future-enhancements)  
8. [Security & Best Practices](#security--best-practices)  
9. [Contribution](#contribution)  
10. [License](#license)  

---

## **Project Objective**

StreamConnect aims to provide a **real-time communication platform** with:  

- **User authentication & management**  
- **Real-time chat**  
- **Peer-to-peer video/audio calls using WebRTC**  
- **Low-latency, event-driven communication**  

This project demonstrates a fullstack, real-time web application with scalable and secure architecture.

---

## **Features**

- User registration and login (passwords hashed with bcrypt)  
- JWT-based authentication  
- Real-time one-to-one chat using Socket.io  
- Video/audio calling using **WebRTC**  
- Event-driven architecture for low latency updates  
- MongoDB for user and chat storage  
- Responsive UI with React.js  

---

## **Tech Stack**

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React.js | UI, state management |
| Backend | Node.js + Express | REST APIs, business logic |
| Real-time | Socket.io | Real-time messaging & signaling server |
| Media | WebRTC | Peer-to-peer video/audio streaming |
| Database | MongoDB + Mongoose | Store users, messages |
| Security | Bcrypt, JWT, HTTPS | Authentication & password security |
| Environment | dotenv | Hide sensitive info like DB credentials |
 

---

## **Working Flow**

### **1. User Management**
- **Signup:** User registers → password hashed with bcrypt → stored in MongoDB  
- **Login:** Password verified → JWT issued → stored in frontend for subsequent requests  

### **2. Real-Time Chat**
- Users connect via **Socket.io**  
- Sending a message: `socket.emit("message", {text, toUserId})`  
- Server forwards message to recipient socket → updates UI in real-time  

### **3. Video/Audio Calls (WebRTC)**
- **Media Capture:** `getUserMedia()` captures local video/audio  
- **Signaling:** Socket.io server exchanges **SDP offers/answers**  
- **ICE Candidates:** Peers exchange candidates to establish direct P2P connection  
- **Media Streaming:** Audio/video flows **directly between peers** → low latency  

### **4. Security**
- Passwords hashed with **bcrypt**  
- **JWT** token authentication for APIs and socket connection  
- DB credentials hidden in `.env`  
- Optional HTTPS for secure signaling  

---

## **Setup & Installation**

###1. **Clone Repository**  
```bash
git clone https://github.com/Nandini-Khanna/StreamConnect.git
cd StreamConnect
###2. **Backend Setup**

cd server
npm install
cp .env.example .env
# Add your MongoDB URI and JWT secret in .env
npm run dev
### 3. **Frontend Setup**

cd client
npm install
npm start

###4.**Access Application**

Open http://localhost:3000 in browser


---
## **Architecture & Flow Diagram**
+----------------+         HTTP Requests        +----------------+
|   React Frontend|  ------------------------> | Express Backend|
|  (UI + Chat +  | <------------------------  | (Controllers  |
|  Video Capture)|         Responses           |  + Socket.io)  |
+----------------+                             +--------+-------+
                                                      |
                                                      | Socket.io Events
                                                      v
                                          +----------------------+
                                          | WebRTC Signaling     |
                                          |  (SDP, ICE exchange)|
                                          +----------------------+
                                                      |
                                                      v
                                            +-----------------+
                                            | WebRTC Peer P2P |
                                            |  Audio/Video    |
                                            +-----------------+
                                                      ^
                                                      |
                                          +----------------------+
                                          | MongoDB Database      |
                                          | Users / Messages      |
                                          +----------------------+

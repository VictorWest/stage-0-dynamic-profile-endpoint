# 🧠 Backend Wizards — Stage 0 Task  
**Dynamic Profile Endpoint (Node.js/Express)**  

This project implements a simple RESTful API endpoint `/me` that returns your profile information along with a random cat fact fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).  
It demonstrates basic API design, third-party API consumption, error handling, and timeout management.

---

## 🚀 Features
- Dynamic `/me` endpoint returning:
  - Your name, email, and backend stack
  - Current UTC timestamp in ISO 8601 format
  - Random cat fact fetched from an external API  
- Automatic timeout after 10 seconds using `AbortController`
- Graceful error handling and fallback messages
- Proper JSON response format (`Content-Type: application/json`)
- Clean and modular Express setup

---

## 🧩 Tech Stack
- **Node.js** — JavaScript runtime
- **Express.js** — Lightweight web framework
- **Fetch API (built-in)** — For calling the external Cat Facts API

---

## ⚙️ Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/backend-wizards-stage0.git
cd backend-wizards-stage0
```

### 2. Install Dependencies

Make sure you have Node.js v18+ installed (for native fetch support).

Then install dependencies:
```bash
npm install
```

### 3. Start the Server
```bash
npm start
```

By default, the app runs on https://stage-0-dynamic-profile-endpoint-production.up.railway.app

---

## 🧪 Test the Endpoint
Send a GET request to:

```bash
GET http://localhost:3000/me
```
Example Response:
```json
{
  "status": "success",
  "user": {
    "email": "victorwaribokowest@gmail.com",
    "name": "Victor Wariboko-West",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-15T15:04:07.392Z",
  "fact": "Cats sleep for 70% of their lives."
}
```
---

## 🧱 Dependencies
| Package | Purpose 
| :------ | :----: 
| express  | Web framework for building the server  
| cors (optional)   | Enables cross-origin requests (if needed for frontend)  

### Install manually
```bash
npm install express cors
```
---

## 🧰 Development Notes
- The /me endpoint uses middleware to fetch a random cat fact dynamically before responding.

- Timeout is set to 10 seconds for the external API call.

- If the Cat Facts API fails or times out, a fallback message is returned gracefully.

- Timestamps are generated dynamically per request using new Date().toISOString().
---

## 🧾 License
This project is open source under the MIT License.

## 👨‍💻 Author

### Victor Wariboko-West

- Email: victorwaribokowest@gmail.com
- [LinkedIn](http://linkedin.com/in/victor-wariboko-west-27787b233)
- [GitHub](https://github.com/VictorWest)


# Simple Car Rental App 🚗  

A basic car rental system built with:  
- **Frontend**: React + Tailwind CSS  
- **Backend**: Node.js + Express  
- **Database**: MongoDB  

## Features 
- User authentication (login/registration)
- Car listing with filters
- Car details page
- Booking system
- Responsive design with Tailwind CSS  

## 🔒 Setup Instructions  

### 1. Clone the repository  
```bash
git clone https://github.com/roshanx0/car-rental.git
cd car-rental
```

### 2. Backend Setup  
```bash
cd backend
npm install
```

Create `.env` file:  
```bash
touch .env
```  
Add these variables *(replace with your own values)*:  
```env
MONGO_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/car-rental
PORT=5000
JWT_SECRET=your_random_secret_key_here
```

Start server:  
```bash
npm start
```

### 3. Frontend Setup  
```bash
cd frontend/rentacar
npm install
npm run dev
```

## Screenshots  
*(Add some screenshots later)*  

## Folder Structure  
```
backend/       # API code
frontend/      # React app
  └─ rentacar/ # Main frontend
```


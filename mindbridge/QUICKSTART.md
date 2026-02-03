# Quick Start Guide for MINDBRIDGE

## 🚀 Fast Setup (5 minutes)

### Step 1: Install Dependencies
```bash
cd "Healthcare Management System/mindbridge"
npm run install-all
```

### Step 2: Create .env file
```bash
# Copy the example file
cp .env.example .env

# Or create manually with these contents:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mindbridge
JWT_SECRET=mindbridge_secret_key_2025
CLIENT_URL=http://localhost:3000
```

### Step 3: Start MongoDB
Make sure MongoDB is running on your system.

Windows:
```bash
net start MongoDB
```

Mac/Linux:
```bash
brew services start mongodb-community
```

### Step 4: Seed Database (Optional)
```bash
node server/seed.js
```

### Step 5: Run the App
```bash
npm run dev
```

### Step 6: Open Browser
Navigate to: **http://localhost:3000**

---

## 📱 Features Implemented

✅ Header with Navigation (Home, Features, Journeys, About Us, Sign In)  
✅ Hero Section with smooth scroll  
✅ Assistance Banner (Contact CTA)  
✅ Features Section (Journal, AI Companion, Community, Breathing)  
✅ About Us & Founder Section  
✅ Shared Journeys (Blog Posts)  
✅ Contact Form (Fully functional with backend)  
✅ Footer with links  
✅ Responsive Design  
✅ Color Palette Applied (Navy, Gold, Cream, etc.)  
✅ Typography (Playfair Display & Inter)  

---

## 🎨 Design System

**Colors:**
- Primary: Navy (#1B2B3A), Gold (#C9A961), Cream (#FAF8F3)
- Accents: Burgundy (#6B2C3E), Sage (#8A9A8E), Light Teal (#9BBAB8)

**Fonts:**
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

---

## 🔧 Tech Stack

- **Frontend:** React 18, React Router, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Styling:** Pure CSS with CSS Variables

---

**Need help?** See INSTALLATION.md for detailed guide.

# 🌉 MINDBRIDGE - Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)
- **Git** (optional) - [Download here](https://git-scm.com/)

---

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd "Healthcare Management System/mindbridge"
```

### 2. Install Dependencies

Install both backend and frontend dependencies:

```bash
npm run install-all
```

Or install manually:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mindbridge
JWT_SECRET=your_secret_key_here_make_it_long_and_secure
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:3000
```

### 4. Start MongoDB

#### Windows:
- Open MongoDB Compass (if installed)
- Or start MongoDB service:
  ```bash
  net start MongoDB
  ```

#### macOS/Linux:
```bash
sudo systemctl start mongod
# or
brew services start mongodb-community
```

### 5. Seed Database (Optional)

Populate the database with sample blog posts:

```bash
node server/seed.js
```

### 6. Run the Application

#### Development Mode (Both Backend & Frontend):

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend React app on `http://localhost:3000`

#### Or run separately:

**Backend only:**
```bash
npm run server
```

**Frontend only:**
```bash
npm run client
```

---

## 🎉 Access the Application

Once both servers are running:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api/health

---

## Project Structure

```
mindbridge/
├── client/                 # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Header/
│   │   │   ├── Hero/
│   │   │   ├── Features/
│   │   │   ├── About/
│   │   │   ├── Journeys/
│   │   │   ├── Contact/
│   │   │   └── Footer/
│   │   ├── pages/        # Page components
│   │   │   └── Home/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                # Express Backend
│   ├── models/           # MongoDB Models
│   │   ├── User.js
│   │   ├── Contact.js
│   │   └── Blog.js
│   ├── routes/           # API Routes
│   │   ├── auth.js
│   │   ├── contact.js
│   │   └── blogs.js
│   ├── index.js          # Server entry point
│   └── seed.js           # Database seeder
├── .env.example          # Environment template
├── .gitignore
├── package.json
└── README.md
```

---

## Available Scripts

### Root Directory

- `npm run dev` - Run both backend and frontend
- `npm run server` - Run backend only
- `npm run client` - Run frontend only
- `npm run install-all` - Install all dependencies
- `npm run build` - Build frontend for production

### Client Directory

- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Blogs
- `GET /api/blogs` - Get all blog posts
- `GET /api/blogs/:id` - Get single blog post
- `POST /api/blogs` - Create new blog post

### Health Check
- `GET /api/health` - Check API status

---

## Features

✅ **Responsive Design** - Works on all devices  
✅ **Smooth Scrolling** - Seamless navigation  
✅ **Contact Form** - Functional with backend integration  
✅ **Blog System** - Dynamic content loading  
✅ **Authentication Ready** - Sign in/Sign up structure  
✅ **Color Palette** - Following design specifications  
✅ **Typography** - Playfair Display & Inter fonts  
✅ **Mobile Menu** - Responsive navigation  

---

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in `.env`
- Verify MongoDB is installed correctly

### Port Already in Use
- Change PORT in `.env` to another port
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  
  # macOS/Linux
  lsof -ti:5000 | xargs kill -9
  ```

### Module Not Found
- Delete `node_modules` and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## Production Deployment

### Build Frontend
```bash
cd client
npm run build
```

### Environment Variables
Set all environment variables for production server.

### Deploy Options
- **Heroku** - Easy deployment with MongoDB Atlas
- **Vercel** - Frontend deployment
- **Railway** - Full-stack deployment
- **DigitalOcean** - VPS deployment

---

## Support

For issues, questions, or feedback:
- **Email:** support@mindbridge.com
- **Hotline:** 123-456-7890

---

## Developer

**Kayeen M. Campaña**  
Founder & Developer

---

*Mind Bridge - A bridge of hope, a reminder that you are never truly alone.*

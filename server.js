// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './backend/config/db.js';
// import cors from 'cors';
// app.use(cors());


// import memberRoutes from './routes/memberRoutes.js';

// dotenv.config();
// const app = express();

// connectDB();

// app.use(express.json());

// app.use('/api/members', memberRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
//server.js
import express from 'express';
import cors from 'cors'; // ✅ Correct import
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import memberRoutes from './routes/memberRoutes.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // ✅ Enable CORS
app.use(express.json());

// Routes
app.use('/api/members', memberRoutes);
app.use('/api/auth', authRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    console.log('MongoDB Connected');
  })
  .catch((err) => console.log(err));

const express = require('express');
const userRouter = require('./Routes/userRoute');

const app = express();

// Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/user', userRouter);

module.exports = app;

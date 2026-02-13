import express from 'express';

import authRoutes from './routes/authRoutes';
import bikeRoutes from './routes/bikeRoutes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/admin/auth', authRoutes);
app.use('/admin/bike', bikeRoutes);
app.use('/admin/bookings', bikeRoutes);
app.use('/admin/tours', bikeRoutes);
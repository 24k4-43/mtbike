import { Request, Response, NextFunction } from 'express';
import authService from '../services/authService';

class AuthController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, email, password, phone, role } = req.body;

      // Validate required fields
      if (!name || !email || !password || !phone) {
        res.status(400).json({
          status: 'error',
          message: 'Please provide name, email, password, and phone',
        });
        return;
      }

      const result = await authService.signup({ name, email, password, phone, role });

      res.status(201).json({
        status: 'success',
        data: {
          user: result.user,
          token: result.token,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          status: 'error',
          message: error.message,
        });
      } else {
        next(error);
      }
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      // Validate required fields
      if (!email || !password) {
        res.status(400).json({
          status: 'error',
          message: 'Please provide email and password',
        });
        return;
      }

      const result = await authService.login({ email, password });

      res.status(200).json({
        status: 'success',
        data: {
          user: result.user,
          token: result.token,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(401).json({
          status: 'error',
          message: error.message,
        });
      } else {
        next(error);
      }
    }
  }
  async logout(req: Request, res: Response): Promise<void> {
    try {
      // Invalidate the token on the client side (e.g., by clearing it from localStorage)
      res.status(200).json({
        status: 'success',
        message: 'Logged out successfully',
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: 'An error occurred while logging out',
      });
    }
  }
}

export default new AuthController();

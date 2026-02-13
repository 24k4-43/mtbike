import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/userModel';

interface SignupData {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: 'user' | 'admin';
}

interface LoginData {
  email: string;
  password: string;
}

class AuthService {
  async signup(userData: SignupData): Promise<{ user: Partial<IUser>; token: string }> {
    const { name, email, password, phone, role } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role: role || 'user',
    });

    // Generate JWT token
    const token = this.generateToken(user._id.toString());

    // Return user without password
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return { user: userResponse, token };
  }

  async login(credentials: LoginData): Promise<{ user: Partial<IUser>; token: string }> {
    const { email, password } = credentials;

    // Find user by email (including password field)
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Generate JWT token
    const token = this.generateToken(user._id.toString());

    // Return user without password
    const userResponse = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return { user: userResponse, token };
  }

  private generateToken(userId: string): string {
    const secret = process.env.JWT_SECRET || 'your-secret-key';
    
    return jwt.sign(
      { id: userId }, 
      secret, 
      { expiresIn: '7d' }
    );
  }
}

export default new AuthService();

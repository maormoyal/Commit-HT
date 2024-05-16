import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../db-models/user.schema';
import { CreateUserDto } from '../../dto/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUserData(): Promise<User[]> {
    return this.userModel.find().sort({ _id: -1 }).limit(1).exec();
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    try {
      const createdUser = new this.userModel({
        ...userData,
        password: hashedPassword,
      });

      return createdUser.save();
    } catch (error) {
      throw new Error(error);
    }
  }
}

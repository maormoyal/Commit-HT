import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  saveUserData(userData: CreateUserDto) {
    return { message: 'User data saved successfully!', userData };
  }
}

import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../../dto/user.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUserData() {
    return this.userService.getUserData();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  saveUserData(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }
}

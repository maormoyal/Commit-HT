import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  @Post('/user')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  saveUserData(@Body() userData: CreateUserDto) {
    return this.appService.saveUserData(userData);
  }
}

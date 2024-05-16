import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/check-db')
  async checkDbConnection() {
    const status = await this.appService.checkDbConnection();
    return { status };
  }
  // @Post('/user')
  // @UsePipes(new ValidationPipe({ whitelist: true }))
  // saveUserData(@Body() userData: CreateUserDto) {
  //   return this.appService.saveUserData(userData);
  // }
}

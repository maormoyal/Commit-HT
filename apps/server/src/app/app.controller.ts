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
}

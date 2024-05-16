import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async checkDbConnection(): Promise<string> {
    const state = this.connection.readyState;
    return state === 1 ? 'Connected' : 'Not Connected';
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser } from './dto/createUser.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('ms-communication') private communicationClient: ClientProxy,
    @Inject('ms-analytics') private analyticsClient: ClientProxy,
  ) {}

  private user: CreateUser[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUser(data: CreateUser) {
    this.user.push(data);
    this.analyticsClient.emit('createUser', data.email);
    this.communicationClient.emit('createUser', data.email);
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}

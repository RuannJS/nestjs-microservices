import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser } from './dto/createUser.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('ms-communication') private communicationClient: ClientProxy,
  ) {}

  private user: CreateUser[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUser(data: CreateUser) {
    this.user.push(data);
    this.communicationClient.emit('createUser', data.email);
    console.log(data.email);
  }
}

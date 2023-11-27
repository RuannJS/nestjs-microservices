import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleCreateUser(userEmail: string) {
    console.log(userEmail);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  handleUserCreated(userEmail: string) {
    console.log('ANALYTICS MICROSERVICE', userEmail);
    this.analytics.push({ userEmail });
  }

  getAnalytics() {
    return this.analytics;
  }
}

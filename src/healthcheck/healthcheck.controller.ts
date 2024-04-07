import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthcheckController {
  @Get()
  healthcheck() {
    return 'Payments Microservice is up and running!';
  }
}

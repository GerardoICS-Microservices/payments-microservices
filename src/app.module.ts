import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [PaymentsModule, HealthcheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

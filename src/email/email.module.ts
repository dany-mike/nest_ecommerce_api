import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { InvoiceModule } from 'src/invoice/invoice.module';
import { OrderModule } from 'src/order/order.module';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  controllers: [EmailController],
  imports: [InvoiceModule, AuthModule, OrderModule, PassportModule],
  providers: [EmailService],
})
export class EmailModule {}

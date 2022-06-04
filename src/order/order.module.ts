import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from 'src/address/address.module';
import { AuthModule } from 'src/auth/auth.module';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderRepository]),
    AuthModule,
    AddressModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}

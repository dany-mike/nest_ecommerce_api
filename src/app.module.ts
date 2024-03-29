import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { AddressModule } from './address/address.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';
import { InvoiceModule } from './invoice/invoice.module';
import { CartModule } from './cart/cart.module';
import { CmsModule } from './cms/cms.module';

@Module({
  imports: [
    ProductsModule,
    AuthModule,
    CategoryModule,
    WishlistModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        SENDGRID_API_KEY: Joi.string().required(),
        SECRET_KEY: Joi.string().required(),
        FRONT_END_BASE_URL: Joi.string().required(),
        CLOUD_NAME: Joi.string().required(),
        CLOUDINARY_API_KEY: Joi.string().required(),
        CLOUDINARY_API_SECRET: Joi.string().required(),
        NODE_ENV: Joi.string().required(),
        STRIPE_SECRET_KEY: Joi.string().required(),
        STRIPE_WEBHOOK_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: `${process.env.SENDGRID_API_KEY}`,
        },
      },
    }),
    DatabaseModule,
    AddressModule,
    OrderModule,
    PaymentModule,
    EmailModule,
    InvoiceModule,
    CartModule,
    CmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

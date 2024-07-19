import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { EmailModule } from './email/email.module';
import { GraphqlModule } from './graphql/graphql.module';
import { VideosModule } from './videos/videos.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    UsersModule,
    PrismaModule,
    EmailModule,
    GraphqlModule,
    VideosModule,
    ClienteModule,
  ],
})
export class AppModule {}

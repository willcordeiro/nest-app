import { Module } from '@nestjs/common';
import { PrismaNestModule } from 'src/prisma-nest/prisma-nest.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PrismaNestModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

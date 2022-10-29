import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma-nest.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaNestModule {}

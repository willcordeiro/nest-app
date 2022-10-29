import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaNestModule } from './prisma-nest/prisma-nest.module';
import { PrismaService } from './prisma-nest/prisma-nest.service';

@Module({
  imports: [AuthModule, UserModule, BookmarkModule, PrismaNestModule],
  providers: [PrismaService],
})
export class AppModule {}

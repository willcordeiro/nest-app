import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-nest/prisma-nest.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: 'i am signup' };
  }

  signin() {
    return { msg: 'i am signin' };
  }
}

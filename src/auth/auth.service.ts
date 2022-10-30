import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma-nest/prisma-nest.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    return { msg: 'i am signup' };
  }

  signin() {
    return { msg: 'i am signin' };
  }
}

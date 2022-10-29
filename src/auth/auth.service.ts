import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'i am signup' };
  }

  signin() {
    return { msg: 'i am signin' };
  }
}

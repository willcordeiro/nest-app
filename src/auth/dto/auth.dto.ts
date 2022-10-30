import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  firstName: string;
  @IsString()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

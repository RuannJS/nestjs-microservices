import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;
}

import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'User name is required' })
  @IsString()
  @MaxLength(32, { message: 'User name must be up to 32 characters' })
  userName: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @Matches(/^\d{10}$/, {
    message: 'Phone number must be exactly 10 digits',
  })
  phoneNumber: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be 6-12 characters' })
  @MaxLength(12, { message: 'Password must be 6-12 characters' })
  @Matches(/[A-Z]/, {
    message: 'Password must include an uppercase letter',
  })
  @Matches(/[!@#$&*]/, {
    message: 'Password must include a special character',
  })
  password: string;
}

import { IsNotEmpty } from 'class-validator';

export class CreateParsingDto {
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  typeOperation: string;
};


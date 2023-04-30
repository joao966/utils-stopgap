import { Injectable } from '@nestjs/common';
import { CreateParsingDto } from './dto/create-parsing.dto';
import { UpdateParsingDto } from './dto/update-parsing.dto';

@Injectable()
export class ParsingService {
  create(createParsingDto: CreateParsingDto) {
    return { text: 'text' };
  }

  findAll() {
    return `This action returns a findAll`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parsing`;
  }

  update(id: number, updateParsingDto: UpdateParsingDto) {
    return `This action updates a #${id} parsing`;
  }

  remove(id: number) {
    return `This action removes a #${id} parsing`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParsingService } from './parsing.service';
import { CreateParsingDto } from './dto/create-parsing.dto';
import { UpdateParsingDto } from './dto/update-parsing.dto';

@Controller('parsing')
export class ParsingController {
  constructor(private readonly parsingService: ParsingService) {}

  @Post()
  create(@Body() createParsingDto: CreateParsingDto) {
    return this.parsingService.create(createParsingDto);
  }

  @Get()
  findAll() {
    return this.parsingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parsingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParsingDto: UpdateParsingDto) {
    return this.parsingService.update(+id, updateParsingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parsingService.remove(+id);
  }
}

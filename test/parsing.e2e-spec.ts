import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus } from '@nestjs/common';
import * as request from 'supertest';
import { ParsingModule } from '../src/modules/parsing/parsing.module';

describe('ParsingController', () => {
  let app;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ParsingModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });


  describe('Retorna um JSON com o status da requisição e o texto parseado', () => {
    it('Testa se o retorna o status 200', async () => {
      const response = await request(app.getHttpServer()).post('/parsing');
      expect(response.status).toBe(HttpStatus.CREATED);
    });
    
    it('Testa se o retorna as propriedades STATUS e TEXT na response', async () => {
      const response = await request(app.getHttpServer()).post('/parsing');
      const parsedReturn = JSON.parse(response.text);
      const keys = Object.keys(parsedReturn);
      const propertyText = keys.find((current) => current === 'text');
      expect(propertyText).toBe('text');
    });
  });


  afterEach(async () => {
    await app.close();
  });
});

import { ParsingController } from './parsing.controller';

describe('ParsingController', () => {
  let controller: ParsingController;
  let conversionService: any;

  beforeEach(() => {
    conversionService = {
      create: jest.fn(),
    };
    controller = new ParsingController(conversionService); 
  });

  it('deve retornar um erro para um tipo de operação inválido', () => {
    conversionService.create.mockReturnValue({ status: 400, result: 'Tipo de operação inválido' })
    const req = { text: 'Olá Mundo', typeOperation: 'xablau' }; 
    expect(controller.create(req)).toEqual({ status: 400, result: 'Tipo de operação inválido' });
  });

  it('deve retornar um erro para um campo obrigatório ausente', () => {
    conversionService.create.mockReturnValue({ status: 422, result: 'Campo obrigatório ausente' })
    const req = { text: 'Olá Mundo', typeOperation: '' };
    expect(controller.create(req)).toEqual({ status: 422, result: 'Campo obrigatório ausente' });
  });

  it('deve retornar o resultado da conversão para um tipo de operação válido', () => {
    const req = { text: 'Olá Mundo', typeOperation: 'uppercase' };
    conversionService.create.mockReturnValue({ status: 200, result: 'OLÁ MUNDO' })
    const result = controller.create(req);
    expect(result).toEqual({ status: 200, result: 'OLÁ MUNDO' });
  });
});

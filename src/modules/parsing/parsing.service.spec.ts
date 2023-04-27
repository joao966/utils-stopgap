
describe('ParsingService', () => {
  let service: any;

  beforeEach(async () => {
    service = {
      create: jest.fn(),
    };
  });

  describe('formata número de telefone e celular', () => {
    it('retoran número de celular formatado',  () => {
      service.create.mockReturnValue('(18) 99706-4566')
      const mockPaylod = '18997064566';
      expect(service.create('cel', mockPaylod)).toEqual('(18) 99706-4566');
    });
  
    it('retoran número de telefone formatado',  () => {
      service.create.mockReturnValue('(18) 3371-4566')
      const mockPaylod = '1833714566';
      expect(service.create('tel', mockPaylod)).toEqual('(18) 3371-4566');
    });
  });

  describe('identificar palavra-chave', () => {
    it('retoran palavra chave informada',  () => {
      service.create.mockReturnValue('texto informado')
      const mockPaylod = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut o texto informado enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
      expect(service.create('search', mockPaylod)).toEqual('texto informado');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ClienteResolver } from './cliente.resolver';
import { ClienteService } from './cliente.service';

describe('ClienteResolver', () => {
  let resolver: ClienteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteResolver, ClienteService],
    }).compile();

    resolver = module.get<ClienteResolver>(ClienteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

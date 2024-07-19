import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Resolver(() => Cliente)
export class ClienteResolver {
  constructor(private readonly clienteService: ClienteService) {}


  @Mutation(() => Cliente, { name: 'createCliente', nullable: true })
  async create(@Args('data') data: CreateClienteInput) {
    return this.clienteService.create(data);
  }


  @Query(() => [Cliente], { name: 'findAllCliente', nullable: true })
  findAll() {
    return this.clienteService.findAll();
  }

  @Query(() => Cliente, { name: 'cliente', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clienteService.findOne(id);
  }

  @Mutation(() => Cliente, { name: 'updateCliente', nullable: true })
  update(@Args('updateClienteInput') updateClienteInput: UpdateClienteInput) {
    return this.clienteService.update(updateClienteInput.id, updateClienteInput);
  }

  @Mutation(() => Cliente, { name: 'deleteCliente', nullable: true})
  remove(@Args('id', { type: () => String }) id: string) {
    return this.clienteService.remove(id);
  }
}

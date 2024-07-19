import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Injectable()
export class ClienteService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateClienteInput) {
    const { name, email, tel1, tel2, tel3 } = data;

    const cliente = await this.prismaService.cliente.create({
      data: { name, email, tel1, tel2, tel3 },
    });

    return cliente;
  }

  async findAll() {
    return this.prismaService.cliente.findMany();
  }
  
  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteInput: UpdateClienteInput) {
    return `This action updates a #${id} cliente`;
  }

  async remove(id: string) {
    const clienteExists = await this.prismaService.cliente.findUnique({
      where: { id },
    });

    if (!clienteExists) {
      throw new HttpException('Cliente não existe', HttpStatus.NOT_FOUND);
    }
    await this.prismaService.cliente.delete({ where: { id } });
  }
}

import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly emailService: EmailService,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const userExists = await this.prismaService.user.findUnique({
      where: { email: createUserInput.email },
    });

    if (userExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const user = await this.prismaService.user.create({
      data: {
        email: createUserInput.email,
        name: createUserInput.name,
        passwordHash: createUserInput.password,
      },
    });

    await this.emailService.send(user);

    return user;
  }

  async findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });
    return user;
  }


  async update(data: UpdateUserInput) {
    const userExists = await this.prismaService.user.findUnique({
      where: { id: data.id },
    });

    if (!userExists) {
      throw new HttpException('User do not exists', HttpStatus.NOT_FOUND);
    }

    const user = await this.prismaService.user.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        passwordHash: data.password,
      },
    });

    return user;
  }

  async remove(id: string) {
    const userExists = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!userExists) {
      throw new HttpException('User do not exists', HttpStatus.NOT_FOUND);
    }

    await this.prismaService.user.delete({ where: { id } });
  }
}

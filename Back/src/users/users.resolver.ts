import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User, { name: 'createUser', nullable: true })
  async create(@Args('data') data: CreateUserInput) {
    return this.usersService.create(data);
  }

  @Query(() => [User], { name: 'findAllUsers', nullable: true })
  async findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'findOneUser', nullable: true })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User, { name: 'updateUser', nullable: true })
  async update(@Args('data') data: UpdateUserInput) {
    return this.usersService.update(data);
  }

  @Mutation(() => User, { name: 'deleteUser', nullable: true })
  async remove(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.remove(id);
  }
}

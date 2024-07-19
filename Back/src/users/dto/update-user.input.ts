import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInput } from './create-user.input';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Cliente as ClientePrisma } from '@prisma/client';

@ObjectType()
export class Cliente implements Cliente {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  tel1: string;

  @Field(() => String)
  tel2: string;

  @Field(() => String)
  tel3: string;

}

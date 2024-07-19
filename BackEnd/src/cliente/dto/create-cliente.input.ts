import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {
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

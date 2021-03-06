import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  productnumber: string;

  @Field(() => Int)
  discount: number;

  @Field(() => Date)
  productiondate: Date;
}

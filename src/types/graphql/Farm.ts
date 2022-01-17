import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Farm {
  @Field(_type => ID)
  // @ts-ignore
  id: string;

  @Field()
  // @ts-ignore
  tvl: string;

  @Field()
  // @ts-ignore
  apr: string;

  @Field()
  // @ts-ignore
  apy: string;

  @Field()
  // @ts-ignore
  staked_token_exchange_rate: string;

  @Field()
  // @ts-ignore
  reward_token_exchange_rate: string;
}

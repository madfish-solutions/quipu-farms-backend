import { Arg, Query, Resolver } from 'type-graphql';

import { Farm } from '../types/graphql';

@Resolver(Farm)
export class FarmResolver {
  @Query(_returns => Farm)
  async farm(@Arg('id') id: string) {
    if (id === '0') {
      const farm = new Farm();
      farm.apr = '0';
      farm.apy = '0';
      farm.id = '0';
      farm.reward_token_exchange_rate = '0';
      farm.staked_token_exchange_rate = '0';
      farm.tvl = '0';

      return farm;
    }
    throw new Error('No such farm exists');
  }

  @Query(_returns => [Farm])
  async farms() {
    return [];
  }
}

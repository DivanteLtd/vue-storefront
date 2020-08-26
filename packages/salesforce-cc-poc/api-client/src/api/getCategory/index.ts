import { Category } from '../../types';

import { ApolloQueryResult } from 'apollo-client';
import { apolloClient } from '../../index';
import defaultCategoriesQuery from './defaultCategoriesQuery';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCategory = async (searchParams: any): Promise<Category[]> => {
  if (!searchParams) {
    searchParams = { ids: 'root', levels: '1' };
  }
  // TODO: add support for product details
  const result: ApolloQueryResult<Category[]> = await apolloClient.query<any>({
    query: defaultCategoriesQuery,
    variables: {
      ids: searchParams.ids,
      levels: searchParams.levels
    },
    // temporary, seems like bug in apollo:
    // @link: https://github.com/apollographql/apollo-client/issues/3234
    fetchPolicy: 'no-cache'
  });

  return result.data;
};

export default getCategory;


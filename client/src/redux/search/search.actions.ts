export const UPDATE_QUERY = 'SEARCH/UPDATE_QUERY';

export function updateQuery(query: string) {
  return {
    type: UPDATE_QUERY,
    payload: query,
  };
}

export type SearchActions = ReturnType<typeof updateQuery>;

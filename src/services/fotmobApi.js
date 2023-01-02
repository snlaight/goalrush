import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { FOTMOB_BASE_URL } from '@/constants';

export const fotmobApi = createApi({
  reducerPath: 'fotmobApi',
  baseQuery: fetchBaseQuery({ baseUrl: FOTMOB_BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return undefined;
  },
  endpoints: (build) => ({
    getMatches: build.query({
      query: () => 'matches',
    }),
    getLeagueById: build.query({
      query: (id, tab = 'overview', type = 'league', timeZone = 'Europe/Berlin') => `leagues?id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`,
    }),
    getMatchesByDate: build.query({
      query: (date = new Date().toISOString().split('T')[0]) => `matches?date=${date}`,
    }),
    getTeamById: build.query({
      query: (id, tab = 'overview', type = 'team', timeZone = 'Europe/Berlin') => `teams?id=${id}&tab=${tab}&type=${type}&timeZone=${timeZone}`,
    }),
    getPlayerById: build.query({
      query: (id) => `playerData?id=${id}`,
    }),
    getMatchDetailsById: build.query({
      query: (matchId) => `matchDetails?matchId=${matchId}`,
    }),
  }),
});

export const {
  useGetMatchesQuery,
  useGetLeagueByIdQuery,
  useGetMatchesByDateQuery,
  useGetTeamByIdQuery,
  useGetPlayerByIdQuery,
  useGetMatchDetailsByIdQuery,
} = fotmobApi;

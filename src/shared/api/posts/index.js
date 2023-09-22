import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://jsonplaceholder.typicode.com/'
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({page, limit}) => `/posts?_page=${page}&_limit=${limit}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    getPost: build.query({
      query: (id) => `/posts/${id}`
    })
  })
});

export const {useGetPostsQuery, useGetPostQuery} = postsApi;
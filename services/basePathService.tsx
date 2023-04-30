// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const basePathApi = createApi({
  reducerPath:'basePathApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: () => ({}),
})
export const basePathReadMeApi = createApi({
  reducerPath: 'readMeBasePath',
  baseQuery: fetchBaseQuery({ baseUrl:`https://raw.githubusercontent.com/frontenders-community` }),
  endpoints: () => ({}),
})


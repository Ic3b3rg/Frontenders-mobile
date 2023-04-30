import { basePathReadMeApi } from "./basePathService";

export const readMeApi = basePathReadMeApi.injectEndpoints({
  endpoints: (builder) => ({
    getReadMeByName: builder.query<string, string|undefined>({
      query: (repoName = '') => `/${repoName}/master/README.md`,
      transformErrorResponse(baseQueryReturnValue, meta, arg) {
        return baseQueryReturnValue.data
      },
    }),

  }),
  overrideExisting: true,
});

export const { useGetReadMeByNameQuery } = readMeApi;

// Need to use the React-specific entry point to import createApi
import { RepositoryCardList } from "../types/tabs";
import { basePathApi } from "./basePathService";
import { RepositoryInterface, RepositoryList } from "../types/apiService";

// Define a service using a base URL and expected endpoints
export const reposApi = basePathApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRepos: builder.query<RepositoryCardList, void>({
      query: () => `users/frontenders-community/repos`,
      transformResponse(baseQueryReturnValue: RepositoryList) {
        return  baseQueryReturnValue
        .map((el) => ({
          url: el.url,
          id: el.id,
          name: el.name,
          created_at: el.updated_at,
        }))
        .sort((objA, objB) => Number(new Date(objB.created_at)) - Number(new Date(objA.created_at))) || [];
      },
    }),
    getReposByName: builder.query<RepositoryInterface, string|undefined>({
      query: (repoName = '') => `repos/frontenders-community/${repoName}`,
    }),
    getProgrammingLanguagesFromRepo: builder.query<Record<any, string | number>[], string|undefined>({
      query: (repoName = '') => `repos/frontenders-community/${repoName}/languages`,
      transformResponse(baseQueryReturnValue:Record<string, number>, meta, arg) {
        const keys = Object.keys(baseQueryReturnValue);
        const values = Object.values(baseQueryReturnValue);
        const sum = values.reduce((prev, curr)=>prev + curr, 0);
        return keys.map((language:string,index)=>{
          return {language, avg: ((values[index]*100)/ sum).toFixed(2)} 
        }).sort((a, b) => {
          // Ordina in base alla proprietà "language"
          return a.language.localeCompare(b.language);
        }) || []
      },
    }),
  }),
  overrideExisting: true,
});



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllReposQuery, useGetReposByNameQuery, useGetProgrammingLanguagesFromRepoQuery } = reposApi;

import axios from "axios";
import { RepositoryInterface, RepositoryList, UserProfile } from "../types/apiService";

axios.interceptors.request.use(function (config) {
    config.headers.Authorization = process.env.AUTH_TOKEN;
    return config;
}, function (error) {
    return Promise.reject(error);
});

export const apiService = {
    getUserProfile: async () => {
        const response = await axios.get<UserProfile>(`https://api.github.com/users/frontenders-community`,)
        return response.data;
    },
    getFrontendersRepo: async (repoName:string) => {
        const response = await axios.get<RepositoryInterface>(`https://api.github.com/repos/frontenders-community/${repoName}`,)
        return response.data;
    },

    getREADMERepo: async (repoName:string) => {
        /**
         * api per avere il readme della repo. Bisogna fare il replaceAll di tutti i \n in modo da avere un base64 pulito
         * capire come gestire la parte markdown nell'app
         */
        const response = await axios.get<string>(`https://raw.githubusercontent.com/frontenders-community/${repoName}/master/README.md`,)
        return response.data;
    },

}
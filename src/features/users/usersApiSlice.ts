import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const SERVER_API = 'https://main--neon-mermaid-10b20a.netlify.app';
const SERVER_API = process.env.REACT_APP_SERVER_URL_DEV;
// const SERVER_API = process.env.REACT_APP_SERVER_URL_PROD;

// const SERVER_API = 'http://localhost:3333';

interface userResponse {
    name: string
}

export const usersApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: SERVER_API,
        prepareHeaders(headers) {
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchUsers: builder.query<userResponse[], number | void>({
                query(limit = 5) {
                    // return ''
                    return '/users'
                }
            })
        }
    }
})

export const { useFetchUsersQuery } = usersApiSlice;
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const toDoSlice = createApi({
	// The cache reducer expects to be added at `state.api` (already default - this is optional)
	reducerPath: 'ToDoApi',
	// All of our requests will have URLs starting with '/baseURL'
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/',
	}),
	// The "endpoints" represent operations and requests for this server
	endpoints: (builder) => ({
		// The `getPosts` endpoint is a "query" operation that returns data
		getPosts: builder.query({
			query: () => '/posts',
		}),
		getPost: builder.query({
			query: (postID) => `/posts/${postID}`,
        }),
        
	}),
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetPostsQuery, useGetPostQuery } = toDoSlice

import { useGetPostsQuery, useGetPostQuery } from '../API/todosAPI'

function useGetPosts() {
	const {
		data: posts = [],
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetPostsQuery()

	return {
		posts,
		isLoading,
		isSuccess,
		isError,
		error,
	}
}

function useGetPost() {
	const {
		data: post = [],
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetPostsQuery()

	return {
		post,
		isLoading,
		isSuccess,
		isError,
		error,
	}
}

export { useGetPost, useGetPosts }

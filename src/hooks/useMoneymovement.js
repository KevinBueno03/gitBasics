import { useGetClientsQuery, useGetClientQuery } from '../API/moneyMovementAPI'

function useGetClients() {
	const {
		data: clients = [],
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetClientsQuery()

	return {
		clients,
		isLoading,
		isSuccess,
		isError,
		error,
	}
}

function useGetClient(clienteID) {
	const {
		data: client,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetClientQuery(clienteID)

	return {
		data: client,
		isLoading,
		isSuccess,
		isError,
		error,
	}
}

export { useGetClient, useGetClients }

import * as React from 'react';

import { useGetClients } from '../../../hooks/useMoneymovement';
import ClientCard from '../Ecosistems/cards/ClientCard';


const Clients = () => {
    let key = 0;
    const {
        clients,
        isLoading,
        isSuccess,
    } = useGetClients();
   	
    function render() {
        return (
            <>{
                
                clients?.map((client) => (
                    <ClientCard {...client} />
                ))
            }
            </>
        )
    }

    if (isLoading) return <><h1>Loading</h1></>
    if (isSuccess) return render();

}

export default Clients;
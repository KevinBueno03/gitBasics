import * as React from 'react';

import { useGetClients } from '../../../hooks/useMoneymovement';


const Clients = () => {

    const {
        clients,
        isLoading,
        isSuccess,
    } = useGetClients();
   	
    function render() {
        return (
            <>{
                clients?.map((client) => (
                    <div >
                        <h1>{client.primer_nombre}</h1>
                </div>
                ))
            }
            </>
        )
    }

    if (isLoading) return <><h1>Loading</h1></>
    if (isSuccess) return render();

}

export default Clients;
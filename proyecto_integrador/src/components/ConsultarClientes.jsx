import { useEffect, useState } from "react";
import getAll from "../services/clientes.services";
import TablaClientes from "./shared/TablaClientes";

export default function ConsultarClientes () {
    const [cli, setClientes] = useState([]);
    
    useEffect(()=> setClientes(getAll), [])

    return (
        <div className="row">
            <div className="col-12">
                <TablaClientes clientes={cli}></TablaClientes>
            </div>
        </div>
    );
}

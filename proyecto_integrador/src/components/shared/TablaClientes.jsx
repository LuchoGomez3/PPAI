export default function TablaClientes({ clientes }) {
    return (<>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">DNI</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Telefono</th>
                </tr>
            </thead>
            <tbody>
                {clientes && clientes.map((cliente, index) => {
                    return (<>

                        <tr key={index}>
                            <th scope="row">{cliente.dni}</th>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.nroCelular}</td>
                        </tr>
                    </>)
                })}
            </tbody>
        </table>
    </>)
}
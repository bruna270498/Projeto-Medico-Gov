import React, { useContext } from "react";
import { ContextApi } from "../../context/contextApi";

function History() {
    const { history } = useContext(ContextApi);
    return(
        <div>
            <h3>Histórico de Consultas</h3>
            {history.length === 0 ? (
            <p>Nenhum histórico de consulta.</p>
            ) : (
            <ul>
                {history.map((item, index) => (
                <li key={index}>
                    Data: {item.date}, Profissional: {item.professional}, Descrição: {item.description}
                </li>
                ))}
            </ul>
            )}
        </div>
    )
}
export default History;
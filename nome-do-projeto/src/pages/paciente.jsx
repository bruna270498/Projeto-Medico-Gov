import React from "react";
import Schedule from "../components/paciente/ schedule ";
import AppointmentsScheduled from "../components/paciente/appointmentsScheduled";
import History from "../components/paciente/history";

function PatientPage() {
    return(
        <div>
            <h2>Página Principal do Paciente</h2>
            <Schedule />
            <AppointmentsScheduled />
            <History />
            <button type="submit">Ir para o Perfil</button>
        </div>
    )
}
export default PatientPage;
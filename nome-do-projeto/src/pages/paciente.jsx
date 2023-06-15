import React from "react";
import Schedule from "../components/paciente/ schedule ";
import AppointmentsScheduled from "../components/paciente/appointmentsScheduled";

function PatientPage() {
    return(
        <div>
            <h2>Página Principal do Paciente</h2>
            <Schedule />
            <AppointmentsScheduled />
        </div>
    )
}
export default PatientPage;
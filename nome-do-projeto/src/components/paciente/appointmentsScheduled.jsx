import React, { useContext } from "react";
import { ContextApi } from "../../context/contextApi";

function AppointmentsScheduled() {
    const {appointments, setAppointments, setHistory, history} = useContext(ContextApi);
    const handleAppointmentCancel = (index) => {
        const updatedAppointments = [...appointments];
        updatedAppointments[index].status = 'cancelada';
        setAppointments(updatedAppointments);
    };
    
      const handleAppointmentHistory = (index) => {
        const appointment = appointments[index];
    
        const newHistory = {
          date: appointment.date,
          professional: appointment.professional,
          description: 'Descrição da consulta.',
        };
    
        setHistory([...history, newHistory]);
    };
    return(
        <div className="shules">
            <h3 className="title3">Consultas Agendadas</h3>
            {appointments.length === 0 ? (
            <p>Nenhuma consulta agendada.</p>
            ) : (
            <ul className="ul">
                {appointments.map((appointment, index) => (
                <li key={index}>
                    Data: {appointment.date}, Hora: {appointment.time}, Profissional: {appointment.professional}, Tipo: {appointment.type}, Status: {appointment.status}
                    {appointment.status !== 'cancelada' && (
                    <button className='is-success' onClick={() => handleAppointmentCancel(index)}>Cancelar</button>
                    )}
                    <button className='is-success' onClick={() => handleAppointmentHistory(index)}>Histórico</button>
                </li>
                ))}
            </ul>
            )}
        </div>
    )
}
export default AppointmentsScheduled;
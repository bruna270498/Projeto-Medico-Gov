import React, { useContext } from "react";
import { ContextApi } from "../../context/contextApi";

function Schedule() {
    const { scheduleDate, setScheduleDate, scheduleTime, setScheduleTime,
        setAppointmentType, setAppointments, setProfessional, appointmentType,
        appointments, professional
    } = useContext(ContextApi);
    const handleScheduleDateChange = (event) => {
        setScheduleDate(event.target.value);
    };
    
    const handleScheduleTimeChange = (event) => {
        setScheduleTime(event.target.value);
    };
    
    const handleProfessionalChange = (event) => {
        setProfessional(event.target.value);
    };
    
    const handleAppointmentTypeChange = (event) => {
        setAppointmentType(event.target.value);
    };
    
    const handleAppointmentSubmit = (event) => {
        event.preventDefault();
        const newAppointment = {
            date: scheduleDate,
            time: scheduleTime,
            professional,
            type: appointmentType,
            status: 'pendente',
        };
        setAppointments([...appointments, newAppointment]);
        setScheduleDate('');
        setScheduleTime('');
        setProfessional('');
        setAppointmentType('');
    };
    return(
    <div>
        <h3>Agendar Consulta</h3>
        <form onSubmit={handleAppointmentSubmit}>
            <div>
                <label htmlFor="scheduleDate">Data:</label>
                <input
                type="date"
                id="scheduleDate"
                value={scheduleDate}
                onChange={handleScheduleDateChange}
                required
                />
            </div>
            <div>
                <label htmlFor="scheduleTime">Hora:</label>
                <input
                type="time"
                id="scheduleTime"
                value={scheduleTime}
                onChange={handleScheduleTimeChange}
                required
                />
            </div>
            <div>
                <label htmlFor="professional">Profissional:</label>
                <input
                type="text"
                id="professional"
                value={professional}
                onChange={handleProfessionalChange}
                required
                />
            </div>
            <div>
               <label htmlFor="appointmentType">Tipo de Consulta:</label>
               <select
               id="appointmentType"
               value={appointmentType}
               onChange={handleAppointmentTypeChange}
               required
               >
                <option value="">Selecione</option>
                <option value="presencial">Presencial</option>
                <option value="remota">Remota</option>
              </select>
            </div>
            <button type="submit">Agendar</button>
        </form>
    </div>
    )
}
export default Schedule;
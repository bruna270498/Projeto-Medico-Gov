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
        <h3 className="title2">Agendar Consulta</h3>
        <form className="shedule" onSubmit={handleAppointmentSubmit}>
            <div>
                <label className="input" htmlFor="scheduleDate">Data:</label>
                <input
                type="date"
                id="scheduleDate"
                className="input"
                value={scheduleDate}
                onChange={handleScheduleDateChange}
                required
                />
            </div>
            <div>
                <label className="input"  htmlFor="scheduleTime">Hora:</label>
                <input
                type="time"
                id="scheduleTime"
                className="input"
                value={scheduleTime}
                onChange={handleScheduleTimeChange}
                required
                />
            </div>
            <div>
                <label className="input"  htmlFor="professional">Profissional:</label>
                <input
                type="text"
                id="professional"
                className="input2"
                value={professional}
                onChange={handleProfessionalChange}
                required
                />
            </div>
            <div>
               <label className="input"  htmlFor="appointmentType">Tipo de Consulta:</label>
               <select
               id="appointmentType"
               value={appointmentType}
               className="input"
               onChange={handleAppointmentTypeChange}
               required
               >
                <option className="selected" value="">Selecione</option>
                <option className="selected" value="presencial">Presencial</option>
                <option className="selected" value="remota">Remota</option>
              </select>
            </div>
            <button className="is-success" type="submit">Agendar</button>
        </form>
    </div>
    )
}
export default Schedule;
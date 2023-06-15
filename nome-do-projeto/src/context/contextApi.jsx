import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const ContextApi = createContext();
function ContextProvider({ children }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [cpf, setCPF] = useState('');
    const [rg, setRG] = useState('');
    const [age, setAge] = useState();
    const [gender, setGender] = useState('');
    const [userType, setUserType] = useState('');
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [cholesterol, setCholesterol] = useState();
    const [fullNameError, setFullNameError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [rgError, setRgError] = useState('');
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const [professional, setProfessional] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [history, setHistory] = useState([]);

   const [abdominalCircumference, setAbdominalCircumference] = useState();
    const values = useMemo(() => ({
        email, setEmail, fullNameError, setFullNameError,
        password, setPassword, scheduleDate, setScheduleDate,
        fullName, setFullName, cpfError, setCpfError,
        cpf, setCPF, rgError, setRgError, professional, setProfessional,
        rg, setRG, abdominalCircumference, setAbdominalCircumference,
        age, setAge, cholesterol, setCholesterol, scheduleTime, setScheduleTime,
        gender, setGender,height, setHeight, appointments, setAppointments,
        userType, setUserType,weight, setWeight, history, setHistory, appointmentType, setAppointmentType,
    }), [email, setEmail, password, setPassword, fullName, setFullName, cpf, setCPF,
        rg, setRG, age, setAge,gender, setGender, userType, setUserType, weight, setWeight,
        height, setHeight, cholesterol, setCholesterol, abdominalCircumference, setAbdominalCircumference,
        fullNameError, setFullNameError, rgError, setRgError, cpfError, setCpfError, scheduleDate, 
        setScheduleDate, history, setHistory, appointments, setAppointments, appointmentType, setAppointmentType,
        professional, setProfessional, scheduleTime, setScheduleTime])
    return (
    <ContextApi.Provider
      value={ values }
    >
      {children}
    </ContextApi.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.shape(),
}.isReqired;

export default ContextProvider;
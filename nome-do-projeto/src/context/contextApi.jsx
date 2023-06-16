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
    const [scheduleDate, setScheduleDate] = useState('');
    const [scheduleTime, setScheduleTime] = useState('');
    const [professional, setProfessional] = useState('');
    const [appointmentType, setAppointmentType] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [history, setHistory] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true)
    const [healthDataPaciente, setHealthDataPaciente] = useState({
      'name': '',
      'CPF': '',
      'RG': '',
      'Idade': '',
      'Email': '',
      'Passorwd': '',
      'Type': '',
      'Gênero': '',
      'healthData': {
        'Peso': '',
        'Altura': '',
        'Colesterol': '',
        'Abdominal': ''
      }
    });
    const [healthData, setHealthData] = useState({
      'name': '',
      'CPF': '',
      'RG': '',
      'Idade': '',
      'Email': '',
      'Passorwd': '',
      'Type': '',
      'Gênero': '',
    })

   const [abdominalCircumference, setAbdominalCircumference] = useState();
    const values = useMemo(() => ({
        email, setEmail,
        password, setPassword, scheduleDate, setScheduleDate,
        fullName, setFullName, healthDataPaciente, setHealthDataPaciente,
        cpf, setCPF, professional, setProfessional, isDisabled, setIsDisabled,
        rg, setRG, abdominalCircumference, setAbdominalCircumference,
        age, setAge, cholesterol, setCholesterol, scheduleTime, setScheduleTime,
        gender, setGender,height, setHeight, appointments, setAppointments, healthData, setHealthData,
        userType, setUserType,weight, setWeight, history, setHistory, appointmentType, setAppointmentType
    }), [email, setEmail, password, setPassword, fullName, setFullName, cpf, setCPF, isDisabled, setIsDisabled,
        rg, setRG, age, setAge, gender, setGender, userType, setUserType, weight, setWeight,
        height, setHeight, cholesterol, setCholesterol, abdominalCircumference, setAbdominalCircumference,
        , scheduleDate, setScheduleDate, history, setHistory, appointments, setAppointments, appointmentType,
        setAppointmentType, professional, setProfessional, scheduleTime, setScheduleTime, healthDataPaciente,
        setHealthDataPaciente, healthData, setHealthData])
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
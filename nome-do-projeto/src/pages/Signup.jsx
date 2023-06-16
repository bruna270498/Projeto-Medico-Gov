import React, { useContext } from 'react';
import { ContextApi } from '../context/contextApi';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { setAge, setCPF, setCholesterol, setFullName, setAbdominalCircumference,
        setGender, setHeight, setRG, setUserType, setWeight, age, cpf, cholesterol,
        fullName, abdominalCircumference, gender, height, rg, userType, weight,
        setEmail, email, password, setPassword, healthData, setHealthData, healthDataPaciente,
        setHealthDataPaciente, isDisabled, setIsDisabled,
    } = useContext(ContextApi);
    const navigate = useNavigate();
    const handleFullNameChange = (event) => {
        setFullName(event.target.value);
    };
    
    const handleCPFChange = (event) => {
        setCPF(event.target.value);
      };
    
      const handleRGChange = (event) => {
        setRG(event.target.value);
      };
    
      const handleAgeChange = (event) => {
        setAge(event.target.value);
      };
    
      const handleGenderChange = (event) => {
        setGender(event.target.value);
      };
    
      const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
      };
    
      const handleWeightChange = (event) => {
        setWeight(event.target.value);
      };
    
      const handleHeightChange = (event) => {
        setHeight(event.target.value);
      };
    
      const handleCholesterolChange = (event) => {
        setCholesterol(event.target.value);
      };
    
      const handleAbdominalCircumferenceChange = (event) => {
        setAbdominalCircumference(event.target.value);
      };
      const handleEmail = (event) => {
        return setEmail(event.target.value)
      };
      const handlePassordChange = (event) => {
        return setPassword(event.target.value)
      }
      const handleSubmit = (event) => {
        event.preventDefault();
        if(userType === "paciente") {
          navigate("/patient")
        }
        if(userType === "médico") {
          navigate("/medico")
        }
        if(userType === "enfermeiro") {
          navigate("/enfermeiro")
        }
      };
      const validate = () => {
        if(!age || !gender || !userType || fullName.length < 10
          || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) 
          || !/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)
          || !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf) 
          || !/^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(rg)
          ) {
          setIsDisabled(true)
        }
        else {
          setIsDisabled(false)
        }
      }
      validate()
      return (
        <div>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="email">Email:</label>
              <input
                // type="email"
                id="email"
                value={email}
                onChange={handleEmail}
                required
              />
               {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)&& <div className="error"><span>Email no formato invalido.</span></div>}
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                value={password}
                onChange={handlePassordChange}
                required
              />
               {!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password) && <div className="error">
                <span>Senha precisa ter no mínimo 8 caracteries, letra maiscula e um numero</span>
                </div>}
            </div>
            <div>
              <label htmlFor="fullName">Nome Completo:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
               {(fullName.length < 10) && <div className="error">
                <span>O nome deve ter no mínimo 10 caracteres.</span>
                </div>}
            </div>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={handleCPFChange}
                required
              />
            </div>
            { !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf)  && <div className="error">
              <span>O CPF deve estar escrito dessa forma 111.111.111-56.</span>
            </div>}
            <div>
              <label htmlFor="rg">RG:</label>
              <input
                type="text"
                id="rg"
                value={rg}
                onChange={handleRGChange}
                required
              />
            </div>
            {!/^\d{2}\.\d{3}\.\d{3}-\d{1}$/.test(rg) && <div className="error">
              <span>O RG deve estar escrito dessa forma 11.222.222-1.</span>
              </div>}
            <div>
              <label htmlFor="age">Idade:</label>
              <input
                type="number"
                id="age"
                value={age}
                onChange={handleAgeChange}
                required
              />
            </div>
            <div>
              <label htmlFor="gender">Gênero:</label>
              <select id="gender" value={gender} onChange={handleGenderChange} required>
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
            <div>
              <label htmlFor="userType">Tipo de Usuário:</label>
              <select id="userType" value={userType} onChange={handleUserTypeChange} required>
                <option value="">Selecione</option>
                <option value="paciente">Paciente</option>
                <option value="médico">Médico</option>
                <option value="enfermeiro">Enfermeiro</option>
              </select>
            </div>
            {userType === 'paciente' && (
              <div>
                <h3>Dados de Saúde</h3>
                <div>
                  <label htmlFor="weight">Peso:</label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={handleWeightChange}
                  />
                </div>
                <div>
                  <label htmlFor="height">Altura:</label>
                  <input
                   type="number"
                    id="height"
                    value={height}
                    onChange={handleHeightChange}
                  />
                </div>
                <div>
                  <label htmlFor="cholesterol">Colesterol:</label>
                  <input
                    type="number"
                    id="cholesterol"
                    value={cholesterol}
                    onChange={handleCholesterolChange}
                  />
                </div>
                <div>
                  <label htmlFor="abdominalCircumference">Circunferência Abdominal:</label>
                  <input
                    type="number"
                    id="abdominalCircumference"
                    value={abdominalCircumference}
                    onChange={handleAbdominalCircumferenceChange}
                  />
                </div>
              </div>
            )}
            <button 
            type="submit" 
            onClick={handleSubmit} 
            disabled={isDisabled}
            >Cadastrar</button>
          </form>
        </div>
      )
}
export default Signup;
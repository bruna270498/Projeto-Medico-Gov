import React, { useContext } from 'react';
import { ContextApi } from '../context/contextApi';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { setAge, setCPF, setCholesterol, setFullName, setAbdominalCircumference,
        setGender, setHeight, setRG, setUserType, setWeight, age, cpf, cholesterol,
        fullName, abdominalCircumference, gender, height, rg, userType, weight,
        cpfError, setCpfError, rgError, setRgError, fullNameError, setFullNameError
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
      const validateFullName = () => {
        return (fullName.length < 10) ? setFullNameError('O nome deve ter no mínimo 10 caracteres.') :
          setFullNameError('');
      };
    
      const validateCPF = () => {
        return (cpf.length < 11) ? setCpfError('O CPF deve ter no mínimo 11 caracteres.') :
          setCpfError('');
      };
    
      const validateRG = () => {
        return (rg.length < 9) ? setRgError('O RG deve ter no mínimo 9 caracteres.') :
          setRgError('')
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de envio do formulário
        if (!fullName || !cpf || !rg || !age || !gender || !userType) {
          alert('Por favor, preencha todos os campos obrigatórios.');
          return;
        }
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
      validateFullName();
      validateCPF();
      validateRG();  
      return (
        <div>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Nome Completo:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
              />
               {fullNameError && <div className="error">{fullNameError}</div>}
            </div>
            <div>
              <label htmlFor="cpf">CPF:</label>
              <input
                type="number"
                id="cpf"
                value={cpf}
                onChange={handleCPFChange}
                required
              />
            </div>
            {cpfError && <div className="error">{cpfError}</div>}
            <div>
              <label htmlFor="rg">RG:</label>
              <input
                type="number"
                id="rg"
                value={rg}
                onChange={handleRGChange}
                required
              />
            </div>
            {rgError && <div className="error">{rgError}</div>}
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
            <button type="submit" onClick={handleSubmit}>Cadastrar</button>
          </form>
        </div>
      )
}
export default Signup;
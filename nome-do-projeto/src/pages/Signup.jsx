import React, { useContext } from 'react';
import { ContextApi } from '../context/contextApi';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { setAge, setCPF, setCholesterol, setFullName, setAbdominalCircumference,
        setGender, setHeight, setRG, setUserType, setWeight, age, cpf, cholesterol,
        fullName, abdominalCircumference, gender, height, rg, userType, weight,
        setEmail, email, password, setPassword, setHealthData,
        setHealthDataPaciente, isDisabled, setIsDisabled,
    } = useContext(ContextApi);
    const navigate = useNavigate();
    const handleChange = ({target}) => {
        switch (target.id) {
          case 'rg':
            setRG(target.value);
            break;
          case 'cpf':
            setCPF(target.value)
            break;
          case 'age':
            setAge(target.value)
            break;
          case 'gender':
            setGender(target.value)
            break;
          case 'userType':
              setUserType(target.value)
              break;
          case 'weight': 
            setWeight(target.value)
            break;
          case 'height': 
            setHeight(target.value)
            break;
          case 'cholesterol':
            setCholesterol(target.value)
            break;
          case 'abdominalCircumference':
            setAbdominalCircumference(target.value)
            break;
          case 'senha':
            setPassword(target.value)
            break;
          case 'email':
            setEmail(target.value)
            break;
          case 'fullName':
            setFullName(target.value)
            break;
          default:
            break;
        }
    };
      const handleSubmit = (event) => {
        event.preventDefault();
        if(userType === "paciente") {
          navigate("/patient")
          setHealthDataPaciente({
            'name': fullName, 'CPF': cpf, 'RG': rg, 'Idade': age,
            'Email': email, 'Passorwd': password, 'Type': userType,
            'Gênero': gender,
            'healthData': {
              'Peso': weight, 'Altura': height, 'Colesterol': cholesterol, 
              'Abdominal': abdominalCircumference
            }
          })
        }
        if(userType === "médico") {
          navigate("/medico")
        }
        if(userType === "enfermeiro") {
          navigate("/enfermeiro")
        }
        setHealthData({
          'name': fullName,
          'CPF': cpf,
          'RG': rg,
          'Idade': age,
          'Email': email,
          'Passorwd': password,
          'Type': userType,
          'Gênero': gender,
        })
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="gender">Gênero:</label>
              <select id="gender" value={gender} onChange={handleChange} required>
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
              </select>
            </div>
            <div>
              <label htmlFor="userType">Tipo de Usuário:</label>
              <select id="userType" value={userType} onChange={handleChange} required>
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
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="height">Altura:</label>
                  <input
                   type="number"
                    id="height"
                    value={height}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="cholesterol">Colesterol:</label>
                  <input
                    type="number"
                    id="cholesterol"
                    value={cholesterol}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="abdominalCircumference">Circunferência Abdominal:</label>
                  <input
                    type="number"
                    id="abdominalCircumference"
                    value={abdominalCircumference}
                    onChange={handleChange}
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
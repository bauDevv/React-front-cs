import axios from "axios";
import StyleRegister from"./register.module.css";
import { Link } from "react-router-dom";

function Register() {
    const consumir_register = () => {
        var message = "";
        var postData = {
            username: document.getElementById("user").value,
            password: document.getElementById("pass").value,
            password2: document.getElementById("pass2").value,
            email: document.getElementById("email").value,
            first_name: document.getElementById("name").value,
            last_name: document.getElementById("last_name").value
        }
        axios
            .post("http://localhost:8000/api/v1/registro/crear_user/", postData, {
                Headers: { 'Content-Type': 'application/json', }
            })
            .then((response) => {
                console.log(response.data);
                message = "Registro exitoso"
                document.getElementById("message").textContent = message;
                window.location = "/";
            })
            .catch((error) => {
                console.log(error.response.data);
                message = "Error en el Registro"
                document.getElementById("message").textContent = message;
            })
        }

    return (
        <div className={StyleRegister.body}>
            <div className={StyleRegister.container}>
            <svg className={StyleRegister.onda} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#010820" d="M0,32L21.8,74.7C43.6,117,87,203,131,229.3C174.5,256,218,224,262,181.3C305.5,139,349,85,393,101.3C436.4,117,480,203,524,224C567.3,245,611,203,655,176C698.2,149,742,139,785,154.7C829.1,171,873,213,916,234.7C960,256,1004,256,1047,245.3C1090.9,235,1135,213,1178,213.3C1221.8,213,1265,235,1309,245.3C1352.7,256,1396,256,1418,256L1440,256L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"/>
            </svg>
                <div className={StyleRegister.formContainer}>
                    <h1>Registro</h1>
                    <div className={StyleRegister.formRegister}>
                        <div className={StyleRegister.group}>
                            <input type="text" id="user" required /> <span className={StyleRegister.borderBottom}></span>
                            <label>Nombre de usuario</label>
                        </div>
                        <div className={StyleRegister.group}>
                            <input type="email" id="email" required /> <span className={StyleRegister.borderBottom}></span>
                            <label>Correo</label>
                        </div>
                        <div className={StyleRegister.group}>
                            <input type="text" id="name" required /> <span className={StyleRegister.borderBottom}></span>
                            <label>Nombre</label>
                        </div>
                        <div className={StyleRegister.group}>
                            <input type="text" id="last_name" required /> <span className={StyleRegister.borderBottom}></span>
                            <label>Apellido</label>
                        </div>
                        <div className={StyleRegister.group}>
                            <input type="password" id="pass" required /> <span className={StyleRegister.borderBottom}></span>
                            <label>Contraseña</label>
                        </div>
                        <div className={StyleRegister.group}>
                            <input type="password" id="pass2" required /> <span className={StyleRegister.borderBottom}></span>
                            <label>Confirmar contraseña</label>
                        </div>
                        <p id="message"></p>
                        <button type="submit" onClick={consumir_register}> Enviar </button>
                    </div>
                    <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
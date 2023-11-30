import { useContext } from "react";
import useForm from "../hooks/useForm";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";




const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    return (
        <div className="col-md-12 ftco-animate d-flex justify-content-center align-items-center">

        <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group ">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name={LoginFormKyes.Email}
                    className="form-control"
                    placeholder="Въведи email"
                    onChange={onChange}
                    value={values[LoginFormKyes.Email]}
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="login-password">Парола:</label>
                <input
                    type="password"
                    id="login-password"
                    className="form-control"
                    name={LoginFormKyes.Password}
                    placeholder="Въведи парола"
                    onChange={onChange}
                    value={values[LoginFormKyes.Password]}
                />
            </div>
    
            <div className="form-group text-center">
                <input type="submit" value="Вход" className="btn btn-primary py-3 px-5" />
            </div>
        </form>
    
        <p className="text-center">
            <Link to="/register">Регистрация</Link>
        </p>
    </div>
    
    





     
    );
}
import React, { useContext, useState } from 'react';

import AuthContext from '../context/AuthContext';
import useForm from '../hooks/useForm';

const RegisterForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        user: '',
        email: '',
        pass: '',
        confPass: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confPassword) {
            setError(true)
            return
        }


        // console.log('User:', user);
        // console.log('Password:', password);
        // console.log('ConfPassword:', confPassword);
        // console.log('Email:', email);

    };

    return (

        <section id="create-page">
            <form id="create" onSubmit={onSubmit} className="container">
                <h1>Регистрирай се</h1>


                <div className="form-group">
                    <input
                        type="text"
                        name="user"
                        className="form-control"
                        placeholder="Потребителско име"
                        value={values.user}
                        onChange={onChange}
                    />
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={values.email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Парола"
                            value={values.password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="confPass"
                            className="form-control"
                            placeholder="Повторете парола"
                            value={values.confPassword}
                            onChange={onChange}
                        />
                        {error && (<span className='text-danger'>Паролите не съвпадат ! </span>)}
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Регистрация" className="btn btn-primary py-3 px-5" />
                </div>
            </form>
        </section>







    );
};

export default RegisterForm
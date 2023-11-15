import React, { useState } from 'react';

const RegisterForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfPasswordChange = (e) => {
        setConfPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confPassword) {
            console.log('Паролите не съвпадат!')
        }

        console.log('User:', user);
        console.log('Password:', password);
        console.log('ConfPassword:', confPassword);
        console.log('Email:', email);

    };

    return (
        <div className="col-md-12 ftco-animate d-flex justify-content-center align-items-center">

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Потребителско име"
                            value={user}
                            onChange={handleUserChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={user}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Парола"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Повторете парола"
                            value={confPassword}
                            onChange={handleConfPasswordChange}
                        />
                    </div>

                </div>
                <div className="form-group">
                    <input type="submit" value="Регистрация" className="btn btn-primary py-3 px-5" />
                </div>
            </form>
        </div>
    );
};

export default RegisterForm
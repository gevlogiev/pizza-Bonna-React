import React, { useState } from 'react';

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('User:', user);
        console.log('Password:', password);

    };

    return (
        <div className="col-md-12 ftco-animate d-flex justify-content-center align-items-center">

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Потребителско име"
                                value={user}
                                onChange={handleUserChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Парола"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Вход" className="btn btn-primary py-3 px-5" />
                </div>
            </form>
        </div>
    );
};

export default LoginForm
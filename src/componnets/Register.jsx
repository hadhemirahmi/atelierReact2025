function Register() {
    return ( 
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form className="card">
                            <h5 className="card-title fw-400 text-center">Register</h5>

                            <div className="card-body">
                                <div className="form-icon">
                                    <span><i className="icon icon-user"></i></span>
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control item" id="username" placeholder="Username" />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control item" id="password" placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control item" id="email" placeholder="Email" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number" />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control item" id="birth-date" placeholder="Birth Date" />
                                </div>

                                <div className="form-group">
                                    <button type="button" className="btn btn-block create-account">Create Account</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

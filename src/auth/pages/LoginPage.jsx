
import { Link } from 'react-router-dom';
import './LoginPage.css';

export const LoginPage = () => {
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group mb-2">
                            
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                            
                        </div>
                        <p className='p-text'>No tienes cuenta? <Link>Registrate</Link></p>
                    </form>
                   
                </div>
            </div>
            
        </div>
    )
}
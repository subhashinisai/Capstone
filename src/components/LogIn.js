import Login from '../images/login.jpg';
import Email from '../images/email.jpg';
import Pass from '../images/pass.png';
import {Link} from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
export const LogIn = () =>{
    const navigate = useNavigate();

    function Submit(event){
        event.preventDefault();
        navigate('/home');
    }
    
    return(
        <div>
           
        <div className="login">
         

        <section>
        <img className="picture" src={Login} alt="loginpic"></img>
        </section>

        <section>
        <h4 className="heading">LOG IN</h4>
        <div>
            <img className="email" src={Email} alt="email"></img>
            <input type="text" placeholder="            user name" className="name"></input>
        </div>
        <div>
            <img className="pass" src={Pass} alt="pass"></img>
            <input type="password" placeholder="            password" className="name"></input>
        </div>
        <div className="login-button">
        <button onClick={Submit}>
        LOG IN</button>
        </div>
        <p className="link">
            <Link to="/ForgotPassword">Forgot Password ?</Link> or <a href="/">Sign Up</a>
        </p>
        </section>
        </div>
      
        </div>
           
    )
}
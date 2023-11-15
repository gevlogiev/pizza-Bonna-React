import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"

const Login = () => {

    return (
<>

<LoginForm/>
<div>Нямате акаунт ?  <Link to='/register'>Регистрирайте се тук</Link></div>
  
</>
    )



}
export default Login
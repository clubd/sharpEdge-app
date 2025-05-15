import { Lock, Mail, Plus } from 'lucide-react';
import sharpEdgeLogo from '../../assets/logo/sharpEdge-logoTransparent.png'
import './Login.scss'


function Login() {
    return (
        <div className="login__page">
            <div className="login__container">
                <header className="login__header">
                    <div className="login__top-box">
                        <img src={sharpEdgeLogo} alt="Sharp Edge Logo" className="login__logo" />
                    </div>
                    <a href="/register" className="login__join">
                        <Plus size={16} /> Join
                    </a>
                </header>
                <main>
                    <form action="" className="login__form">
                        <div className="login__group">
                            <label htmlFor="email" className="visually__hidden">Email Address</label>
                            <input className="login__input" type="email" id="email" name="email" placeholder="Email address" required />
                        </div>
                        <div className="login__group">
                            <label htmlFor="password" className="visually__hidden">Password</label>
                            <input className="login__input" type="password" id="password" name="password" placeholder="Password" />
                        </div>
                        <div className="reset__wrapper">
                            <a href="#" className="login__reset">Forgot Password</a>
                        </div>
                        <button type="submit" className="login__btn">Login</button>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login
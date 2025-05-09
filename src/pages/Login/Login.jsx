import { Lock, Mail, Plus } from 'lucide-react';
import sharpEdgeLogo from '../../assets/logo/sharpEdge-logoTransparent.png'
import './Login.scss'


function Login() {
    return (
        <>
            <header className="login__header">
                <div className="login__top-box">
                    <img src={sharpEdgeLogo} alt="Sharp Edge Logo" className="login__logo" />
                </div>
                <a href="/register" className="login__join">
                    <Plus size={16} /> Join
                </a>
            </header>
        </>
    )
}

export default Login
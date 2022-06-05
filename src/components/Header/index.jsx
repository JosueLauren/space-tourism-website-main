
import './header.css'

import Logo from  './../../assets/shared/logo.svg'


const Header = () => {

    return (
        <header className='header'>
            <img  src={Logo} alt="logo" />
            <div className='linha'></div>
            <nav className='menu'>
                <a href="#"><span>00</span> HOME </a>
                <a href="#"><span>01</span> DESTINATION </a>
                <a href="#"><span>02</span> CREW </a>
                <a href="#"><span>03</span> TECHNOLOGY </a>
            </nav>
        </header>
    )
}

export default Header
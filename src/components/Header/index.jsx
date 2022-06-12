import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'
import './header.css'

import Logo from  './../../assets/shared/logo.svg'
import iconeHamburguer from './../../assets/shared/icon-hamburger.svg'

import HeaderMobile from './HeaderMobile'



const Header = () => {
  const [isShowMenu, setShowMenu] = useState(false)
  const [linkActive, setLink] = useState('/')

  useEffect(() => {
    let contentLink = linkActive.trim().split(' ')[1]

    const linksPage = document.querySelectorAll('.menu a')

    linksPage.forEach(link => {
      link.classList.remove('page-active')
    })

    if(contentLink === 'HOME'){
      linksPage[0].classList.add('page-active')
    } else if(contentLink === 'DESTINATION'){
      linksPage[1].classList.add('page-active')
    } else if(contentLink === 'CREW') {
      linksPage[2].classList.add('page-active')
    } else {
      linksPage[3].classList.add('page-active')
    }
  },[linkActive])
      
  
    return (

        <header className='header'>
            <img  src={Logo} alt="logo" />
            <div className='linha'></div>
              <nav className='menu'>
                  <Link className='page-active' onClick={(e) => setLink(e.target.textContent)} to="/"><span>00</span> HOME </Link>
                  <Link onClick={(e) => setLink(e.target.textContent)} to="/destination"><span>01</span> DESTINATION </Link>
                  <Link onClick={(e) => setLink(e.target.textContent)} to="/crew"><span>02</span> CREW </Link>
                  <Link onClick={(e) => setLink(e.target.textContent)} to="/technology"><span>03</span> TECHNOLOGY </Link>
              </nav>

              <button onClick={() => setShowMenu(true)} className='btn-abrir-menu'><img src={iconeHamburguer} alt="icon-hamgurger" /></button>
              <HeaderMobile isShowMenu={isShowMenu} closeMenu={() => setShowMenu(false)}/>
        </header>
        
    )
}

export default Header
import { Link  } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './header.css'

import iconeFechar from './../../assets/shared/icon-close.svg'

const HeaderMobile = ({isShowMenu, closeMenu}) => {
    const [linkActive, setLink] = useState('/')

    useEffect(() => {

        document.body.style.overflow = isShowMenu ? 'hidden' : 'initial'

        return () => document.body.style.overflow = 'initial'
        
      }, [isShowMenu])

      useEffect(() => {
        let contentLink = linkActive.trim().split(' ')[1]
        
        const linksPage = document.querySelectorAll('.menuMobile a')

        linksPage.forEach(link => {
          link.classList.remove('page-active')
        })
    
        if(linksPage.length > 0){

            if(contentLink === 'HOME'){
                linksPage[0].classList.add('page-active') 
              } else if(contentLink === 'DESTINATION'){
                linksPage[1].classList.add('page-active') 
              } else if(contentLink === 'CREW') {
                linksPage[2].classList.add('page-active') 
              } else {
                linksPage[3].classList.add('page-active')
              }
        }
        
      }, [linkActive])

        {
            if(isShowMenu){
                return (
                    <nav className='menuMobile'>
                    <button onClick={() => closeMenu()} className='btn-fechar-menu'><img src={iconeFechar} alt="icon-close" /></button>
                    <Link className='page-active' onClick={(e) => setLink(e.target.textContent)} to="/"><span>00</span> HOME </Link>
                    <Link onClick={(e) => setLink(e.target.textContent)} to="/destination"><span>01</span> DESTINATION </Link>
                    <Link onClick={(e) => setLink(e.target.textContent)} to="/crew"><span>02</span> CREW </Link>
                    <Link onClick={(e) => setLink(e.target.textContent)} to="/technology"><span>03</span> TECHNOLOGY </Link>
                  </nav>
                )
            } else {
                return ''
            }
        }
      
}

export default HeaderMobile
import Logo from '../assets/header/logo.svg'
import IconHamburger from '../assets/header/icon-hamburger.svg'
import IconClose from '../assets/header/icon-close.svg'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navBarElement = <>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
    </>

    const handleToggleOpen = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <header className='header'>
            <img src={Logo} alt="Easybank logo and text" />
            <img src={isOpen ? IconClose : IconHamburger} alt="Hamburger Menu Icon" onClick={handleToggleOpen} className='hamburger__menu' />

            {isOpen && <nav className='header__nav'>{navBarElement}</nav>}
            <nav className='header__nav--desktop'>{navBarElement}</nav>
            <button className='header__button'>Request Invite</button>
        </header>
    )
}

export default Header
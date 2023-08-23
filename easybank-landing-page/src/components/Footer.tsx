import Logo from '../assets/footer/icon-footer.svg'
import Facebook from '../assets/footer/icon-facebook.svg'
import Youtube from '../assets/footer/icon-youtube.svg'
import Twitter from '../assets/footer/icon-twitter.svg'
import Pinterest from '../assets/footer/icon-pinterest.svg'
import Instagram from '../assets/footer/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className='footer'>

            <div className='footer__column--one'>
                <img src={Logo} alt="Easybank Logo" />
                <div className='footer__social--media'>
                    <a href="https://www.facebook.com" target='_blank'><img src={Facebook} alt="Facebook Logo" /></a>
                    <a href="https://www.youtube.com" target='_blank'><img src={Youtube} alt="Youtube Logo" /></a>
                    <a href="https://www.twitter.com" target='_blank'><img src={Twitter} alt="Twitter Logo" /></a>
                    <a href="https://www.pinterest.com" target='_blank'><img src={Pinterest} alt="Pinterest Logo" /></a>
                    <a href="https://www.instagram.com" target='_blank'><img src={Instagram} alt="Instagram Logo" /></a>
                </div>
            </div>
            <div className='footer__link footer__column--two'>
                <p><a href="#">About Us</a></p>
                <p><a href="#">Contact</a></p>
                <p><a href="#">Blog</a></p>
                <p><a href="#">Careers</a></p>
                <p><a href="#">Support</a></p>
                <p><a href="#">Privacy Policy</a></p>
            </div>
            <div className='footer__column--three'>
                <button className='footer__button'>Request Invite</button>
                <p className='footer__copyright'>&#169; Easybank. All Rights Reserved</p>
            </div>


        </footer>
    )
}

export default Footer
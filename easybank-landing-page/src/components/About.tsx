import IconOnline from '../assets/about/icon-online.svg'
import IconBudget from '../assets/about/icon-budgeting.svg'
import IconOnboarding from '../assets/about/icon-onboarding.svg'
import IconApi from '../assets/about/icon-api.svg'

const About = () => {
    return (
        <section className='about'>
            <div>
                <h2 className='about__text--header'>Why choose Easybank?</h2>
                <p className='about__text--content'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
            <div className='about__grid'>
                <div>
                    <img src={IconOnline} alt="Online Banking" />
                    <h3 className='about__text--subheader'>Online Banking</h3>
                    <p className='about__text--content'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div>
                    <img src={IconBudget} alt="Simple Budgeting" />
                    <h3 className='about__text--subheader'>Simple Budgeting</h3>
                    <p className='about__text--content'>See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.</p>
                </div>
                <div>
                    <img src={IconOnboarding} alt="Fast Onboarding" />
                    <h3 className='about__text--subheader'>Fast Onboarding</h3>
                    <p className='about__text--content'>We dont' do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div>
                    <img src={IconApi} alt="Open API" />
                    <h3 className='about__text--subheader'>Open API</h3>
                    <p className='about__text--content'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </section>
    )
}

export default About
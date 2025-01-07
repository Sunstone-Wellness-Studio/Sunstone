import { HashLink } from "react-router-hash-link"
import '../../homePage/homePage.less';


export const WelcomeSection = () => {
    return (
        <section id='homeSection'>
            <div className='homeContent'>
                
                    <h1>HI, I'M GLAD YOU'RE HERE</h1>
  
                    <p >Welcome to With Grace Counseling, LLC.</p>

                    <p>Sometimes we don’t have it all together and that’s okay. Sometimes one needs an healing space- free of judgment, and full of acceptance. I want to support and guide you on your journey to find and embrace your potential as you heal, energize, and become aware of your inner strengths- doing it all With Grace</p>

                    <button><HashLink smooth to='/#consultation'>Book a free consultation</HashLink></button>
                
            </div>
        </section>
    )
}


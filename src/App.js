
import React, {Component} from 'react'
import Header from './comps/header/Header'
import Navbar from './comps/navbar/Navbar'
import About from './comps/about/About'
import CreateALogo from './comps/createALogo/CreateALogo'
import Logos from './comps/Logos/Logos'
import Faq from './comps/faq/Faq'
import Contact from './comps/contact/Contact'
import Footer from './comps/footer/Footer'
import Scroller from './comps/Scroller/Scroller'

class App extends Component
{
    render()
    {
        return(
            <>
                <Scroller />
                
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    <About />
                    <CreateALogo />
                    <Logos />
                    <Faq />
                    <Contact />
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;

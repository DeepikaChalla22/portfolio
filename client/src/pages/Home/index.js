import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Education'
import Projects from './Projects'
import AnA from './AnA'
import Contact from './Contact'
import Footer from './Footer'
import LeftSider from './LeftSider'
import { useSelector } from 'react-redux'
import Course from './Course'

function Home() {
    const { portfolioData } = useSelector((state) => state.root);
    return (
        <div >
            <Header />
            {portfolioData && (
                <div className='bg-primary px-40 sm:px-5'>
                    <Intro />
                    <About />
                    <Experiences />
                    <Projects />
                    <AnA />
                    <Course />
                    <Contact />
                    <Footer />
                    <LeftSider />
                </div>
            )}
        </div>
    )
}

export default Home

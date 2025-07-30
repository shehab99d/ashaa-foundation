import React from 'react';
import Navbar from './Navbar';
import About from './About';
import TestimonialSection from './Testimonial';
import Welcome from './WelcomePage';
import DonationForm from './DonationForm';
import Footer from './Footer';
import ImpactSection from './Impact';

const Home = () => {
    return (
        <div className='bg-gradient-to-br pb-5 from-[#0B1C2D] via-[#122B45] to-[#213E60]
 min-h-screen w-full'>
                <Welcome></Welcome>
            <div className=' mx-auto max-w-7xl'>
                <Navbar></Navbar>
                <About></About>
                <TestimonialSection></TestimonialSection>
                <DonationForm></DonationForm>
                <ImpactSection></ImpactSection>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
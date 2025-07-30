import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Amina Begum",
        role: "Beneficiary",
        message: "The support I received helped me restart my life after the flood. Forever grateful!",
        image: "https://i.pravatar.cc/100?img=1"
    },
    {
        name: "Rahim Uddin",
        role: "Donor",
        message: "This foundation ensures that every penny reaches the right hands. I’m proud to support them.",
        image: "https://i.pravatar.cc/100?img=2"
    },
    {
        name: "Nusrat Jahan",
        role: "Volunteer",
        message: "Working here has taught me the real meaning of humanity and service.",
        image: "https://i.pravatar.cc/100?img=3"
    },
    {
        name: "Jabed Ali",
        role: "Beneficiary",
        message: "Thanks to this NGO, my kids are back in school again!",
        image: "https://i.pravatar.cc/100?img=4"
    },
    {
        name: "Shabana Khatun",
        role: "Volunteer",
        message: "A truly life-changing experience to serve and connect with people.",
        image: "https://i.pravatar.cc/100?img=5"
    },
    {
        name: "Foysal Rahman",
        role: "Partner",
        message: "Professional, passionate, and powerful — this NGO delivers impact.",
        image: "https://i.pravatar.cc/100?img=6"
    },
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const getCardClass = (index) => {
        if (index === currentIndex) return "scale-100 opacity-100 z-20";
        if (
            index === (currentIndex + 1) % testimonials.length ||
            (currentIndex === testimonials.length - 1 && index === 0)
        )
            return "translate-x-1/3 scale-90 opacity-40 z-10";
        if (
            index === (currentIndex - 1 + testimonials.length) % testimonials.length
        )
            return "-translate-x-1/3 scale-90 opacity-40 z-10";
        return "hidden";
    };

    return (
        <section
            id="testimonial"
            className="lg:mt-28 rounded-2xl md:mt-28 mt-20 px-4 md:px-10 lg:px-20 relative bg-black text-white"
            style={{
                backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
            }}
        >
            <h2 className="text-3xl pt-6 md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Impact Stories
            </h2>

            <div className="relative flex items-center justify-center max-w-6xl mx-auto">
                {/* Left arrow */}
                <button
                    onClick={goToPrev}
                    className="absolute left-0 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 shadow-md"
                >
                    ❮
                </button>

                {/* Testimonial cards */}
                <div className="flex items-center justify-center space-x-6 overflow-hidden w-full h-[340px] md:h-[360px] relative">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 w-[85%] md:w-[420px] absolute transition-all duration-700 ease-in-out transform ${getCardClass(index)}`}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full border-2 border-white/30"
                                />
                                <div>
                                    <h3 className="font-semibold text-xl">{testimonial.name}</h3>
                                    <p className="text-sm opacity-70">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-md italic relative pl-6 text-white/90 leading-relaxed">
                                <FaQuoteLeft className="absolute top-1 left-0 text-yellow-400" />
                                {testimonial.message}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right arrow */}
                <button
                    onClick={goToNext}
                    className="absolute right-0 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 shadow-md"
                >
                    ❯
                </button>
            </div>
        </section>
    );
};

export default TestimonialSection;

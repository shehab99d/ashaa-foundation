import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    };

    const menuItems = ["home", "about", "donate", "testimonial"];

    return (
        <div className=" lg:pt-6 md:pt-4 pt-3 md:mx-2 lg:mx-3 mx-2 static scroll-smooth">
            <motion.header
                initial={{ opacity: 0, y: -230 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-black shadow-md rounded-b-2xl w-full max-w-7xl"
            >

                <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            className="w-10 mr-3 h-10 rounded-full"
                            src="https://i.ibb.co/jvjkz7YJ/Screenshot-418.png"
                            alt="Logo"
                        />
                        <h1 className="text-2xl font-bold text-yellow-400">Ashaa Foundation</h1>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-sm">
                        {menuItems.map((item) => (
                            <motion.li key={item} whileHover={{ scale: 1.1 }}>
                                <a
                                    href={`#${item}`}
                                    className="hover:text-yellow-400 transition capitalize"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-yellow-400">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:hidden flex flex-col items-center space-y-4 pb-6 text-sm"
                        >
                            {menuItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        className="hover:text-yellow-400 transition capitalize"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </motion.header>
        </div>
    );
};

export default Navbar;

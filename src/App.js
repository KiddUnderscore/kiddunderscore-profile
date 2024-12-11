import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
    const [loading, setLoading] = useState(false);

    // Particle configuration
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            shape: {
                type: 'circle',
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 0.3,
                },
            },
            links: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.5,
                width: 1,
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'random',
                out_mode: 'out',
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
            },
        },
        retina_detect: true,
    };

    const particlesLoaded = (container) => {
        // Handle when the particles are loaded, if needed
    };

    return (
        <div className="App">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        number: {
                            value: 50, // Number of particles
                        },
                        size: {
                            value: 3, // Particle size
                        },
                        move: {
                            enable: true, // Enable particle movement
                            speed: 1, // Speed of movement
                        },
                        color: {
                            value: "#ffffff", // White color for particles
                        },
                        links: {
                            enable: true,
                            color: "#ffffff", // White color for links
                            distance: 100, // Distance between particles to connect
                            width: 1, // Width of the links
                        },
                    },
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-700 to-red-800 shadow-md py-4 z-10">
                <div className="container mx-auto flex justify-center space-x-8">
                    <Link to="skills" smooth={true} duration={500} className="text-xl hover:text-yellow-300 cursor-pointer transition-all">Skills</Link>
                    <Link to="projects" smooth={true} duration={500} className="text-xl hover:text-yellow-300 cursor-pointer transition-all">Projects</Link>
                    <Link to="contact" smooth={true} duration={500} className="text-xl hover:text-yellow-300 cursor-pointer transition-all">Contact</Link>
                </div>
            </nav>

            {/* Header Section */}
            <motion.header
                className="App-header mt-40 text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl lg:text-8xl leading-tight">KiddUnderscore</h1>
                <p className="text-xl mt-6 italic sm:text-2xl md:text-3xl">Immersive Technologies Enthusiast & Developer</p>
            </motion.header>

            {/* Skills Section */}
            <motion.section
                id="skills"
                className="mt-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h2 className="text-4xl font-semibold text-center text-white">Skills</h2>
                <div className="mt-10 px-6 overflow-x-auto flex space-x-8 pb-6">
                    <div
                        className="skill-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">Immersive Technologies</h3>
                        <p className="mt-4">Virtual Reality, Augmented Reality, 3D Modelling, Interactive Systems</p>
                    </div>
                    <div
                        className="skill-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">Software Development</h3>
                        <p className="mt-4">Java, C#, Angular, JavaScript, React, Node.js</p>
                    </div>
                    <div
                        className="skill-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">Database Management</h3>
                        <p className="mt-4">SQL, MySQL, PostgreSQL, MongoDB NOSQL</p>
                    </div>
                    <div
                        className="skill-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">Cloud Computing</h3>
                        <p className="mt-4">AWS, Azure, Google Cloud</p>
                    </div>
                    <div
                        className="skill-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">DevOps</h3>
                        <p className="mt-4">Docker, Jenkins, Git, GitLab, GitHub, Jira, BitBucket, Bamboo, Gradle, Maven, Ansible</p>
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                className="mt-40 px-6"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 1}}
            >
                <h2 className="text-4xl font-semibold text-center text-white">Projects</h2>
                <div className="mt-12 overflow-x-auto flex space-x-8 pb-6">
                    <div className="project-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">Indoor Navigation System</h3>
                        <p className="mt-4">A VR/AR-based system that helps users navigate inside buildings using immersive technologies.</p>
                    </div>
                    <div className="project-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">Real-Time 3D Model Viewer</h3>
                        <p className="mt-4">An interactive tool that allows users to view and manipulate 3D models in real-time.</p>
                    </div>
                    <div className="project-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all min-w-[250px]">
                        <h3 className="text-2xl font-medium">AI-based Object Recognition</h3>
                        <p className="mt-4">A machine learning model to identify objects in real-time using computer vision techniques.</p>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="mt-40 px-6 contact-scrollable"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <h2 className="text-4xl font-semibold text-center text-white">Contact</h2>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Twitter Card */}
                    <div className="contact-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                        <h3 className="text-2xl font-medium">Twitter</h3>
                        <a href="https://x.com/KiddUnderscore" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all">Follow Me</a>
                    </div>
                    {/* YouTube Card */}
                    <div className="contact-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                        <h3 className="text-2xl font-medium">YouTube</h3>
                        <a href="https://www.youtube.com/@KiddUnderscore" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all">Subscribe</a>
                    </div>
                    {/* Email Card */}
                    <div className="contact-card p-8 border-4 border-white rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                        <h3 className="text-2xl font-medium">Email</h3>
                        <a href="mushabalomagada@gmail.com" className="mt-4 inline-block bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-all">Send Email</a>
                    </div>
                </div>
            </motion.section>

            {/* Loading Spinner */}
            {loading && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
                    <div className="animate-spin h-12 w-12 border-4 border-t-transparent border-red-500 rounded-full"></div>
                </div>
            )}
        </div>
    );
}

export default App;
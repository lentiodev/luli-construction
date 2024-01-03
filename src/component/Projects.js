import React, { useState } from "react";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { Link } from 'react-router-dom';

import Image1 from "../assets/images/portfolio/1.jpeg"; // Full Renovation
import Image2 from "../assets/images/portfolio/2.jpeg"; // Extension and Loft Conversion
import Image3 from "../assets/images/portfolio/3.jpeg"; // Plumbing Services
import Image4 from "../assets/images/portfolio/4.jpeg"; // Electrical Services
import Image5 from "../assets/images/portfolio/5.jpeg"; // Bathroom Renovations
import Image6 from "../assets/images/portfolio/6.webp"; // Kitchen Renovations
import Image7 from "../assets/images/portfolio/7.jpeg"; // Plastering and Rendering
import Image8 from "../assets/images/portfolio/8.webp"; // Bricklaying

import CTABackground from "../assets/images/bg/cta.png";

const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
];

/**
 * Portfolio section
 */
export default function Projects() {

    const [photoIndex, setActiveIndex] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const handleCLick = (index) => {
        setActiveIndex(index)
        setOpen(true);
    }

    const projectList = [
        {
            image: Image1,
            title: 'Full Renovation Projects',
            subtext: 'Complete Overhaul'
        },
        {
            image: Image2,
            title: 'Extension & Loft Conversion',
            subtext: 'Space Maximization'
        },
        {
            image: Image3,
            title: 'Plumbing Excellence',
            subtext: 'Functional & Reliable'
        },
        {
            image: Image4,
            title: 'Electrical Services',
            subtext: 'Safety & Efficiency'
        },
        {
            image: Image5,
            title: 'Bathroom Renovations',
            subtext: 'Modern Designs'
        },
        {
            image: Image6,
            title: 'Kitchen Makeovers',
            subtext: 'Elegant & Practical'
        },
        {
            image: Image7,
            title: 'Plastering and Rendering',
            subtext: 'Smooth Finishes'
        },
        {
            image: Image8,
            title: 'Professional Bricklaying',
            subtext: 'Quality Construction'
        }
    ];
    return (
        <>
            {/* Project Start  */}
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 active" id="portfolio">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Projects</h6>
                        <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Our Works &amp; Projects</h3>

                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Discover the excellence of LuliConstructionLtd through our diverse projects. From full renovations to bespoke extensions, and sophisticated kitchen and bathroom designs, each project highlights our dedication to quality and innovation. Experience our passion for craftsmanship in every detail.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
                        {projectList.map((item, index) => (
                            <div className="relative rounded-md shadow-sm overflow-hidden group" key={index}>
                                <img src={item.image} className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500" alt="workimage" />
                                <div className="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"></div>

                                <div className="content">
                                    <div className="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500">
                                        <Link to="#" onClick={() => handleCLick(index)} className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white btn-icon rounded-full lightbox">
                                            <i className="uil uil-camera"></i></Link>
                                    </div>
                                    <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500">
                                        <Link to="#" className="h6 text-md font-medium text-white hover:text-orange-600 transition duration-500">{item.title}</Link>
                                        <p className="text-slate-100 tag mb-0">{item.subtext}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setOpen({ isOpen: false })}
                            onMovePrevRequest={() =>
                                setActiveIndex((photoIndex + images.length - 1) % images.length,
                                )
                            }
                            onMoveNextRequest={() =>
                                setActiveIndex((photoIndex + 1) % images.length,
                                )
                            }
                        />
                    )}
                </div>
            </section>
            {/* Project End  */}
            <section
                style={{ backgroundImage: `url(${CTABackground})` }}
                className="py-24 w-full table relative bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6 md:text-3xl text-2xl text-white font-medium">Ready to Transform Your Space?</h3>

                        <p className="text-white opacity-50 max-w-xl mx-auto">Embark on your construction journey with us and experience our dedication to excellence in renovations, extensions, and bespoke building solutions. Your dream project starts here.</p>

                        <div className="relative mt-10">
                            <Link to="mailto:paulin_vera@hotmail.com" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Contact Us Now</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

import React from "react";
import { Link } from "react-router-dom";

import DesignBlueprintImage from "../assets/images/svg/design-thinking.svg";
import ConstructionSiteImage from "../assets/images/svg/coding.svg";
import BuildingProjectImage from "../assets/images/svg/office-desk.svg";

export default function Services() {
  const services = [
    {
      title: 'Full Renovation Services',
      icon: 'shopping',
      subtext: 'Comprehensive renovation solutions, transforming spaces into modern and functional environments.'
    },
    {
      title: 'Extensions and Loft Conversions',
      icon: 'expand-arrows-alt',
      subtext: 'Expertly designed extensions and loft conversions to maximize your living space.'
    },
    {
      title: 'Plumbing and Electrical Services',
      icon: 'plug',
      subtext: 'Reliable and efficient plumbing and electrical work, ensuring safety and functionality.'
    },
    {
      title: 'Bespoke Bathrooms and Kitchens',
      icon: 'bath',
      subtext: 'Custom-designed bathrooms and kitchens that blend style, comfort, and practicality.'
    },
    {
      title: 'Plastering and Rendering',
      icon: 'palette',
      subtext: 'High-quality plastering and rendering services for a flawless finish.'
    },
    {
      title: 'Professional Bricklaying',
      icon: 'bricks',
      subtext: 'Precision bricklaying work by skilled craftsmen, building strong and beautiful structures.'
    },
    {
      title: 'Expert Roof Work',
      icon: 'house',
      subtext: 'Specialized roof services ensuring durability and protection for your property.'
    },
    {
      title: 'Painting and Decoration',
      icon: 'paint',
      subtext: 'Top-notch painting and decoration services to bring elegance and character to your space.'
    }
  ]


  return (
    <>
      {/* Start */}
      <section className="relative md:py-24 py-16 active" id="features">
        <div className="container lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
            <div>
              <h6 className="text-orange-600 text-2xl font-medium uppercase mb-2">Our Services</h6>
              <h3 className="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">Building the Future, Restoring the Past</h3>
            </div>

            <div>
              <p className="text-slate-400 dark:text-slate-300 max-w-xl text-xl">Expert in every aspect of construction, we bring your vision to life with precision and care, right here in London.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {services.map((service, key) => (
              <div key={key} className={`features p-6 ${key % 2 === 0 ? "hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800" : "shadow-xl shadow-slate-100 dark:shadow-slate-800"} transition duration-500 rounded-3xl mt-8`}>
                <div className="w-20 h-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                  <i className={`uil uil-${service.icon}`}></i>
                </div>

                <div className="content mt-7">
                  <Link to="#" className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{service.title}</Link>
                  <p className="text-slate-400 mt-3">{service.subtext}</p>

                  <div className="mt-5">
                    <Link to="#" className="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Learn More <i className="uil uil-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-3xl font-medium uppercase mb-2">Our Process</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">A Solid Foundation for Every Project</h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">From the initial design to the final touches, our comprehensive approach ensures excellence at every stage of construction.</p>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={DesignBlueprintImage} className="h-64 w-64" alt="" />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Design & Planning</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">Our design team works closely with clients to bring their vision to life, ensuring every detail is perfect from the start.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Construction & Development</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">Utilizing the latest technology and techniques, our construction team ensures projects are completed to the highest standards.</p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <img src={ConstructionSiteImage} className="h-64 w-64" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <img src={BuildingProjectImage} className="h-64 w-64" alt="" />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">Project Completion</h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">Our commitment to excellence extends to project completion, ensuring every detail meets our rigorous standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

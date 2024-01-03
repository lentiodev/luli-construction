import React from "react";

import AboutImage from "../assets/images/about.png";

export default function About() {

  return (
    <>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img src={AboutImage} className="rounded-lg shadow-lg relative" alt="" />
              </div>
            </div>
            {/* end col */}

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Who We Are ?</h6>
                <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">We are a Construction Company Based in London</h3>

                <p className="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">We are a construction company based in London, specializing in high-quality building projects. With years of experience and a dedicated team of professionals, we deliver exceptional results that exceed our clients' expectations.</p>

                <div className="relative mt-10">
                  <a href="#portfolio" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">View Ours Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}

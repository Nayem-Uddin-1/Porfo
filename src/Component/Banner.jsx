import React from "react";

const Banner = () => {
  return (
    <section className="flex banner text-white items-center   p-10 rounded-2xl   max-w-7xl mx-auto mt-10">

      <div className="max-w-md text text-white">
        <h2 className="text-4xl font-bold   text-green-600">Hello, I'm Nayem</h2>
        <h1 className=" heading text-[60px] -tracking-2 font-bold   text-white">Web Developer</h1>
        <p className="mt-4 text-para text-white">
          I am a passionate developer specializing in modern web technologies.
          Crafting responsive, user-friendly interfaces is my expertise. Let's
          build something amazing together!
        </p>
      </div>

      <div className=" banner-image ml-[250px]">
        <img
          src="https://img.freepik.com/premium-photo/men-design-logo-avatar_665280-69427.jpg?ga=GA1.1.1882621636.1736264302&semt=ais_hybrid"
          alt="Portfolio Avatar"
          className="max-w-48 h-48 rounded-full object-cover shadow-md"
        />
      </div>
    </section>
  );
};

export default Banner;

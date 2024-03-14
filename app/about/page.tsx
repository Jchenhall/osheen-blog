import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full h-full overflow-y-hidden  grid lg:grid-cols-2 grid-cols-1">
      <div className="flex flex-col col-span-1 justify-center items-start w-full px-24 gap-2 text-wrap">
        <h2 className="relative font-bold text-xl text-start">
          Hello readers,
        </h2>
        <p>
          My name is Osheen Martolia, and I’m an environmentalist by profession,
          leaner by passion, and an advocate for evidence-based policy change.
        </p>
        <p>
          Curiosity always gets the best of me, and As I embark on my journey as
          a young professional, I want to share what I discover with the rest of
          you.
        </p>
        I may not be an expert yet, but I believe that keeping what I learn to
        myself defeats the whole purpose of growth (for both you and me) and the
        essence of science and advancement in life.
        <p>
          For in this life, we deserve and dream. I will be posting my take on a
          range of environmental topics and I hope they spark curiosity in you
          too.
        </p>
        <h2>Stay tuned!</h2>
      </div>
      <div className="col-span-1 relative flex justify-center items-center h-dvh">
        <div className="flex relative w-1/2 h-3/4  ">
          <Image
            src={"/about.jpg"}
            alt="about img"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

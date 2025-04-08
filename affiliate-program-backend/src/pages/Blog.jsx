import React from "react";

export default function Blog() {
  return (
    <div>
      <section className="text-center flex justify-center flex-col items-center md:mt-[5rem] lg:mb-[rem]">
        <div className="text-orange-400">From our Blog</div>
        <div>
          <div className="text-2xl md:text-5xl font-bold">
            Latest News & Events
          </div>
          <p className="text-red-600 mt-5 text-3xl">
            No News or Events yet....
          </p>
        </div>
      </section>
    </div>
  );
}

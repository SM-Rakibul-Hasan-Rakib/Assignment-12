import React from "react";

const SectionTwo = () => {
  return (
    <div className="flex">
      <section className="bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
          {/* Starts component */}
          <div
            className="grid grid-cols-1 gap-2 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-5xl mx-auto"
            role="list"
          >
            {/* 
            // Loop through the features array to render each feature dynamically.
            //
            // Apply dynamic background color using the bgColor property from the feature object. Also, make the background slightly transparent on hover to
            // reveal the background image more clearly.
            //
            // The title's color changes on hover, using the titleColor property from the feature object. This demonstrates how to dynamically apply Tailwind
            // CSS classes based on component state or properties.
            //
            //  {String(index + 1).padStart(2, "0") + "⏤"} Converts the current index (from iterating over the features array) to a string and adds 1 to it,
            // and adds a dash at the end of the number
            */}
            <article
              className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/736x/2b/74/7b/2b747b71b782a8833f2b3ad9b0e37cd1.jpg')",
              }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500">
                    01⏤ Experience
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    Crafting an effortless journey with user-first.
                  </p>
                </div>
              </div>
            </article>
            <article
              className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/3c/c2/6c/3cc26c0140c2f0dc70d8aa48416c41dc.jpg')",
              }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400">
                    02⏤ Interaction
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    Our platform is designed for simplicity and ease.
                  </p>
                </div>
              </div>
            </article>
            <article
              className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg')",
              }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-cyan-400">
                    03⏤ Design
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    Our design philosophy centers around the user.
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* Ends component */}
          {/* Starts links to tutorial */}
          {/* <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
            <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex w-0 flex-1 items-center p-4">
                <div className="w-full">
                  <p className="text-sm font-medium text-neutral-900">
                    Tutorial
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    How to create a dynamic feature grid with Astrojs and
                    Tailwind CSS
                  </p>
                  <p className="mt-2 text-xs text-orange-500 underline">
                    <a href="https://lexingtonthemes.com">
                      by © Lexington Themes
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-neutral-200">
                  <div className="flex h-0 flex-1">
                    <a
                      href="https://lexingtonthemes.com/tutorials/how-to-create-a-dynamic-feature-grid-with-astrojs-and-tailwind-css/"
                      type="button"
                      className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Tutorial
                    </a>
                  </div>
                  <div className="flex h-0 flex-1">
                    <a
                      href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/simplified-cards/index.astro"
                      className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Get the code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Ends links to tutorial */}
        </div>
      </section>
      {/* two */}
      <section className="bg-white">
        <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
          {/* Starts component */}
          <div
            className="grid grid-cols-1 gap-2 mt-12 list-none md:grid-cols-3 lg:mt-24 max-w-5xl mx-auto"
            role="list"
          >
            {/* 
            // Loop through the features array to render each feature dynamically.
            //
            // Apply dynamic background color using the bgColor property from the feature object. Also, make the background slightly transparent on hover to
            // reveal the background image more clearly.
            //
            // The title's color changes on hover, using the titleColor property from the feature object. This demonstrates how to dynamically apply Tailwind
            // CSS classes based on component state or properties.
            //
            //  {String(index + 1).padStart(2, "0") + "⏤"} Converts the current index (from iterating over the features array) to a string and adds 1 to it,
            // and adds a dash at the end of the number
            */}
            <article
              className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/736x/2b/74/7b/2b747b71b782a8833f2b3ad9b0e37cd1.jpg')",
              }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-orange-500">
                    01⏤ Experience
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    Crafting an effortless journey with user-first.
                  </p>
                </div>
              </div>
            </article>
            <article
              className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/3c/c2/6c/3cc26c0140c2f0dc70d8aa48416c41dc.jpg')",
              }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-indigo-400">
                    02⏤ Interaction
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    Our platform is designed for simplicity and ease.
                  </p>
                </div>
              </div>
            </article>
            <article
              className="mx-auto shadow-xl bg-cover bg-center min-h-150 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
              style={{
                backgroundImage:
                  "url('https://i.pinimg.com/564x/fa/4f/cf/fa4fcfd2db636f98eb0f2b5aecce0c28.jpg')",
              }}
            >
              <div className="bg-black relative h-full group-hover:bg-opacity-0 min-h-150 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300">
                <div className="bg-black p-8 h-full justify-end flex flex-col">
                  <h1 className="text-white mt-2 text-xl mb-5 transform translate-y-20 uppercase group-hover:translate-y-0 duration-300 group-hover:text-cyan-400">
                    03⏤ Design
                  </h1>
                  <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                    Our design philosophy centers around the user.
                  </p>
                </div>
              </div>
            </article>
          </div>
          {/* Ends component */}
          {/* Starts links to tutorial */}
          {/* <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
            <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex w-0 flex-1 items-center p-4">
                <div className="w-full">
                  <p className="text-sm font-medium text-neutral-900">
                    Tutorial
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    How to create a dynamic feature grid with Astrojs and
                    Tailwind CSS
                  </p>
                  <p className="mt-2 text-xs text-orange-500 underline">
                    <a href="https://lexingtonthemes.com">
                      by © Lexington Themes
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col divide-y divide-neutral-200">
                  <div className="flex h-0 flex-1">
                    <a
                      href="https://lexingtonthemes.com/tutorials/how-to-create-a-dynamic-feature-grid-with-astrojs-and-tailwind-css/"
                      type="button"
                      className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Tutorial
                    </a>
                  </div>
                  <div className="flex h-0 flex-1">
                    <a
                      href="https://github.com/Lexington-Themes/lexington-tutorials/blob/main/src/pages/simplified-cards/index.astro"
                      className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Get the code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Ends links to tutorial */}
        </div>
      </section>
    </div>
  );
};

export default SectionTwo;

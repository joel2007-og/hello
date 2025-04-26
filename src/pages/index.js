import Image from 'next/image';

export default function Home() {
  return (
    <div className="scroll-smooth font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className="bg-yellow-700 text-white p-4 sticky top-0 z-50 shadow flex flex-wrap gap-10 justify-right sm:gap-12">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 py-16">
        <Image
          src="/OG.jpg"
          alt="Profile Picture"
          width={1000}
          height={500}
          className="rounded-full border-4 border-gray-300"
        />
        <h1 className="text-blue text-3xl sm:text-4xl md:text-5xl font-bold mt-6"><i>Hi, I'm NKUNDIMANA Joel</i></h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl">
          Frontend Developer passionate about clean UI, performance, and great user experiences.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6"><u><b><i>About Me</i></b></u></h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-base sm:text-lg">
          I specialize in building responsive, accessible, and intuitive interfaces using technologies like React, Next.js, and Tailwind CSS. I enjoy learning and working on open-source projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-50 px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="bg-color-blue text-xl font-semibold">Portfolio Website</h3>
            <p className="mt-2 text-gray-600">My personal portfolio built with Next.js and Tailwind CSS.</p>
            <a href="#" className="text-blue-600 mt-3 inline-block">View Project</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">Todo App</h3>
            <p className="mt-2 text-gray-600">A simple productivity app with React Hooks and local storage.</p>
            <a href="#" className="text-blue-600 mt-3 inline-block">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Contact</h2>
        <p className="text-center text-gray-700 text-base sm:text-lg">
          Visit then, I help you. My email is: <a href="mailto:janedoe@example.com" className="text-blue-600 underline"><b><i>nkundimanajoel7@gmail.com</i></b></a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center text-sm p-4">
        &copy; {new Date().getFullYear()} Jane Doe. All rights reserved.
      </footer>
    </div>
  );
}

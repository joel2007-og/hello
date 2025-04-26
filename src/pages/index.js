import Image from 'next/image';

export default function Home() {
  return (
    <div className="scroll-smooth font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <nav className="bg-yellow-500 text-white p-4 sticky top-0 z-50 shadow flex flex-wrap gap-10 justify-right sm:gap-12">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <section id="home" className="">
        <h1><b>Welcome to my portfolio</b></h1>
        </section>

      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4 py-16">
        <Image
          src="/joel.jpg"
          alt="Profile Picture"
          width={400}
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
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6"><u><b>About Me</b></u></h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-base sm:text-lg">
          I specialize in building responsive, accessible, and intuitive interfaces using technologies like React, Next.js, and Tailwind CSS. I enjoy learning and working on open-source projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-50 px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8"><b>Projects</b></h2>
        <div className="bg-color-blue grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-red p-6 rounded-lg shadow hover:shadow-md transition w-full bg-blue-400 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition">
            <h3 className="bg-color-blue text-xl  font-semibold">Portfolio Website</h3>
            <p className="mt-2 text-gray-600">My personal portfolio built with Next.js and Tailwind CSS.</p>
            <a href="#" className="text-red-600 mt-3 inline-block hover:bg-blue-400 transition">View Project</a>
          </div>
          <div className="bg-red p-6 rounded-lg shadow hover:shadow-md transition w-full bg-blue-400 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition">
            <h3 className="text-xl font-semibold">Todo App</h3>
            <p className="mt-2 text-gray-600">A simple productivity app with React Hooks and local storage.</p>
            <a href="#" className="text-red-600 mt-3 inline-block hover:bg-blue-400">View Project</a>
          </div>
        </div>
      </section>

      <section className="mt-16 flex flex-col items-center justify-center text-center px-4">
  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
  <form
    action="https://formspree.io/f/your-form-id"
    method="POST"
    className="space-y-4 w-full max-w-md  shadow-md rounded-lg p-6"
  >
    Name:
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    Email:
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    Message:
    <textarea
      name="message"
      placeholder="Your Message"
      required
      rows={5}
      className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</section>

<section id="contact" class="bg-gray-100 py-12 px-6 md:px-10 lg:px-20 text-center rounded-lg shadow-md max-w-3xl mx-auto">
  <h2 class="text-3xl font-bold text-gray-800 mb-4">Contact Me</h2>
  <p class="text-gray-600 text-lg mb-8">I'm always open to new opportunities or collaborations. Let's connect!</p>
  
  <ul class="space-y-4 text-gray-700 text-base">
    <li>
      <strong>Email:</strong>
      <a href="mailto:yourname@example.com" class="text-blue-600 hover:underline">nkundimanajoel7@gmail.com</a>
    </li>
    <li>
      <strong>LinkedIn:</strong>
      <a href="https://linkedin.com/in/yourprofile" target="_blank" class="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a>
    </li>
    <li>
      <strong>GitHub:</strong>
      <a href="https://github.com/yourusername" target="_blank" class="text-blue-600 hover:underline">joel2007-og</a>
    </li>
    <li>
      <strong>Phone number:</strong>
      <a href="https://github.com/yourusername" target="_blank" class="text-blue-600 hover:underline">+250 727540705</a>
    </li>
  </ul>
</section>




      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-white px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Contact</h2>
        <p className="text-center text-gray-700 text-base sm:text-lg">
          Visit then, I help you. My email is: <a href="mailto:janedoe@example.com" className="text-blue-600 underline"><b><i>nkundimanajoel7@gmail.com</i></b></a>
        </p>
      </section>

      
<button type="button" class="text-white bg-[#3b5998] hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
<path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
</svg>
Sign in with Facebook
</button>
<button type="button" class="text-white bg-[#1da1f2] hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
<path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
</svg>
Sign in with Twitter
</button>
<button type="button" class="text-white bg-[#24292F] hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
</svg>
Sign in with Github
</button>
<button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
<svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>
Sign in with Google
</button>
<button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
<svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
Sign in with Apple
</button>


      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center text-sm p-4">
        &copy; {new Date().getFullYear()} Jane Doe. All rights reserved.
      </footer>
    </div>
  );
}

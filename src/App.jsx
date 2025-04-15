import React, { useState } from 'react';
import Modal from './assets/components/Modal';
import logo from './assets/Logo.svg';
import heroimg from './assets/Illustration.svg';
import logo1 from './assets/Logo (1).svg';
import logo2 from './assets/Logo-1.svg';
import logo3 from './assets/Logo-2.svg';
import logo4 from './assets/Logo-3.svg';
import logo5 from './assets/Logo-4.svg';
import logo6 from './assets/Logo-5.svg';
import logo7 from './assets/Logo-6.svg';
import rafiki from './assets/rafiki.svg';
import icon1 from './assets/icon.svg';
import icon2 from './assets/icon (1).svg';
import icon3 from './assets/icon (2).svg';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {/* HEADER */}
      <header className="my-[20px]">
        <div className="container max-w-[80rem] w-full mx-auto px-5">
          <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <a href="./index.html">
              <img className="scale-200 sm:scale-130 pr-0" src={logo} alt="Logo" />
            </a>

            <ul className="flex flex-wrap items-center gap-4 justify-center sm:justify-end">
              <li><a href="#" className="text-gray-400 hover:text-black hover:font-bold transition-all duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black hover:font-bold transition-all duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black hover:font-bold transition-all duration-300">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black hover:font-bold transition-all duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black hover:font-bold transition-all duration-300">Pricing</a></li>
            </ul>

            <button
              onClick={openModal}
              className="w-[200px] px-1.5 py-2.5 bg-[#4CAF4F] text-white flex gap-1 justify-center items-center rounded-sm mt-3 sm:mt-0"
            >
              Register Now
              <i className="fa-solid fa-arrow-right text-white"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* MODAL */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Register to our platform</h2>
        <p className="text-gray-600 mb-4">Fill in your details and get started today!</p>
        <input type="text" placeholder="Your name" className="w-full border p-2 mb-3 rounded" />
        <input type="email" placeholder="Your email" className="w-full border p-2 mb-3 rounded" />
        <button
    className="w-full bg-[#4CAF4F] text-white py-2 rounded hover:bg-[#3e9e41]"
    onClick={closeModal}
  >
    Submit
  </button>
      </Modal>

      <main>
        {/* HERO */}
        <section className="hero bg-[#F5F7FA] py-5">
          <div className="container max-w-[80rem] w-full mx-auto px-5">
            <div className="sm:flex-row flex flex-col justify-between items-center">
              <div className="left max-w-[319px] flex flex-col gap-8">
                <h1 className="text-[30px] leading-[30px]">
                  Lessons and insights <span className="text-green-500">from 8 years</span>
                </h1>
                <button
                  onClick={openModal}
                  className="w-[200px] px-1.5 py-2.5 bg-[#4CAF4F] text-white flex gap-1 justify-center items-center rounded-sm mt-3 sm:mt-0"
                >
                  Register
                </button>
              </div>
              <div className="rigth">
                <img className="max-w-[480px] w-full mt-10 scale-100" src={heroimg} alt="Hero Image" />
              </div>
            </div>
          </div>
        </section>

        {/* OUR CLIENTS */}
        <section className="ourclients mt-5">
          <div className="container max-w-[80rem] w-full mx-auto px-5">
            <div className="flex flex-col justify-center text-center gap-1">
              <h1 className="text-[70px] leading-[65px] text-center">Our clients</h1>
              <p className="text-[#717171]">We have been working with some Fortune 500+ clients</p>
            </div>
            <ul className="flex flex-wrap items-center md:justify-around justify-center gap-10 mt-[30px]">
              {[logo1, logo2, logo3, logo4, logo5, logo6, logo7].map((logo, i) => (
                <img key={i} className="max-w-[120px] w-full" src={logo} alt={`client ${i + 1}`} />
              ))}
            </ul>
          </div>
        </section>

        {/* 3 KARTOCHKALI SECTION */}
        <section className="bg-white py-20">
          <div className="container max-w-[80rem] w-full mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-14">
              Manage your entire community <br /> in a single system
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[icon1, icon2, icon3].map((icon, i) => (
                <div key={i} className="shadow-md p-8 rounded-lg hover:shadow-xl transition">
                  <img src={icon} alt={`Icon ${i + 1}`} className="mx-auto mb-10 scale-350 max-w-[80px]" />
                  <h3 className="text-xl font-bold mb-2">
                    {["Membership Organisations", "National Associations", "Clubs And Groups"][i]}
                  </h3>
                  <p className="text-gray-500">
                    Our membership management software provides full automation of
                    membership renewals and payments
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RAFIKI SECTION */}
        <section className="py-20">
          <div className="container max-w-[80rem] w-full mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
            <img src={rafiki} alt="Pixelgrade Illustration" className="w-full md:w-1/2 max-w-[480px]" />
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The unseen of spending three years at Pixelgrade
              </h3>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
                accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed
                porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
              <button onClick={openModal} className="px-6 py-3 bg-[#4CAF4F] text-white rounded-md hover:bg-[#3e9e41] transition">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

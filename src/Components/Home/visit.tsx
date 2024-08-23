import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Visit = () => {
  const [email, setEmail] = useState("example@example.com");
  const [address, setAddress] = useState("123 Main St, Anytown, USA");
  const [phone, setPhone] = useState("123-456-7890");

  return (
    <>
      <div className="bg-background-image2 min-h-screen flex flex-col justify-center items-center-gradient">
        <div className="flex flex-col lg:flex-row items-center px-4 lg:px-64 min-h-screen">
          <div className="w-96 lg:w-1/2 max-w-4xl bg-custom-gradient2 rounded-3xl">
            <iframe
              className="w-96 h-96 rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2372690094465!2d85.31416737437454!3d27.70639328176625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1901b77b4d23%3A0x6274c9ed38b6e542!2sHimalayan%20White%20House%20International%20College!5e0!3m2!1sen!2snp!4v1655089444441!5m2!1sen!2snp"
              loading="lazy"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/2 max-w-md p-4 lg:p-2 bg-custom-gradient3 rounded-tr-3xl text-gray opacity-85">
            <p className="mb-2">
              <span className="font-bold text-white">Address:</span> {address}
            </p>
            <p className="mb-2">
              <span className="font-bold text-red-500">Email:</span> {email}
            </p>
            <p className="mb-4">
              <span className="font-bold text-red-500">Contact Number:</span> {phone}
            </p>
            <p className="mb-2 font-bold text-white">OUR SOCIALS:</p>
            <div className="flex">
              <a
                href="https://www.instagram.com/"
                className="text-white hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="px-96 py-20" id="register-now">
          <div className="w-full max-w-md p-8 space-y-6 bg-custom-gradient3 rounded-3xl shadow-lg opacity-85">
            <h2 className="text-white text-2xl font-bold text-center">REGISTER</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 w-full p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 w-full p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 w-full p-2 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-800 text-white font-bold rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="w-full py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visit;

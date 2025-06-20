import React from 'react'
import { useState } from 'react';

export default function Contact() {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [tel, setTel] = useState('');


const handleSubmit = async (e) => {

    e.preventDefault();

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("tel", tel);

  try {
    const response = await fetch("http://localhost/reactBackend/submit.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (response.ok) {
      alert("Form submitted successfully");
    } else {
      alert("Error submitting form");
    }
  } catch (error) {
    // console.error("Error:", error);
    alert("Error submitting form");
  }
};


    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-[#0A151F] sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto  sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 h-[620px] md:grid-cols-2">
                        <div className="p-6 mr-2 flex flex-col justify-center items-center bg-gradient-to-b  from-sky-600 to-sky-400 rounded-tl-2xl rounded-bl-2xl">
                            <h1 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg text-white sm:text-xl font-medium mt-2">
                                We'd love to hear from you. <br />
                                Let's start a conversation !
                            </p>

                            <div className="flex items-center mt-8 text-white">
                                <svg
                                    fill="none" 
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md  tracking-wide font-semibold w-40">
                                    Acme Inc, Street, State, Postal Code
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600 ">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                   strokeLinecap="round"
                                    strokeLinejoin="round"
                                   strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 "
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide text-white font-semibold w-40">
                                    +44 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide text-white font-semibold w-40">
                                    info@acme.org
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 flex flex-col justify-center">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    placeholder="Full Name"
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="text"
                                    name="tel"
                                    id="tel"
                                    value={tel}
                                    placeholder="Telephone Number"
                                    onChange={(e) => setTel(e.target.value)}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
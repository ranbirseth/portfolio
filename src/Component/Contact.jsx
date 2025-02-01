import React, { useState } from 'react';
import Social from './Social';

const Contact = () => {
   
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setFormStatus('Submitting...');
            setTimeout(() => {
                setFormStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, 2000);
        } catch (error) {
            setFormStatus('Oops! Something went wrong.');
        }
    };

    return (
        <>
            <section className='flex md:flex-row flex-col  justify-around md:mt-52 mt-[3rem]'>

                <div className="  md:w-1/2 shadow-lg rounded-xl p-4">
                    <h2 className="text-3xl font-semibold text-center text-white ">Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-white"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-white"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg font-medium text-white ">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-white"
                            />
                        </div>
                        <button type="submit" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Submit</button>
                        {/* <button
                            type="submit"
                            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Send Message
                        </button> */}
                        
                    </form>

                    {formStatus && <p className="mt-6 text-center text-lg text-green-500">{formStatus}</p>}
                </div>
                <div className='text-white md:w-1/3 md:mt-20 -mt-5 md:text-xl md:font-thin text-xs md:p-0 p-10'>
                Whether you want to discuss a project, ask a question, or just say hello, feel free to drop a message! 
                Id love to connect and explore how we can collaborate.
                <Social />
                </div>
              
            </section>
        </>
    );
};

export default Contact;

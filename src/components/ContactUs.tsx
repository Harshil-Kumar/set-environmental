import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="w-full bg-pink-50 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8 mx-auto p-8 rounded-lg shadow-md max-w-screen-lg">
        <div className="md:w-1/2">
          <p className="mb-4">
            We look forward to hearing from you. Our contact details are as follows:
          </p>
          <p className="mb-2">
            <strong>SET Environmental</strong>
          </p>
          <p className="mb-2">
            James Zampetti, Managing Director of Automation Design
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> 1-833-7GETSET (743-8738)
          </p>
          <p className="mb-2">
            <strong>Fax:</strong> 1-201-501-8061
          </p>
          <p className="mb-2">
            <strong>E-mail:</strong> <a href="mailto:jimz@set-environmental.com" className="text-blue-500">jimz@set-environmental.com</a>
          </p>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4">
            <div>
              <label className="block font-medium text-gray-700 text-xl">Name</label>
              <input type="text" className="mt-1 block w-full border-gray-300 rounded-md " />
            </div>
            <div>
              <label className="block font-medium text-gray-700 text-xl">Email</label>
              <input type="email" className="mt-1 block w-full border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700">Message</label>
              <textarea className="mt-1 block w-full border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

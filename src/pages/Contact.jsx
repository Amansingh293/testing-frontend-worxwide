
import ContactForm from "../components/contact/ContactForm";
import Reachout from "../components/contact/Reachout";
import FAQ from "../components/common/Faq";
import Section from "../components/common/Section";
import Footer from "../components/common/Footer";

const Contact = () =>{
    return (
    //     <div className="bg-white py-16 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-center justify-between">
    //   {/* Left Side */}
    //   <div className="text-center md:text-left md:w-1/2">
    //     <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
    //       Let’s Transform Your <br /> Sales <span className="text-blue-600">Together</span>
    //     </h2>
    //     <p className="text-gray-600 mt-4">
    //       Have questions or ready to get started? Reach out to our team—we’re here to help you every step of the way.
    //     </p>
    //     <div className="bg-blue-50 mt-8 p-6 rounded-lg shadow-md">
    //       <div className="flex items-center space-x-4">
    //         <img
    //           className="w-12 h-12 rounded-full"
    //           src="https://via.placeholder.com/48" // Replace with your image URL
    //           alt="Anita Desai"
    //         />
    //         <div>
    //           <h3 className="text-sm font-bold text-gray-800">Anita Desai</h3>
    //           <p className="text-sm text-gray-500">
    //             Regional Sales Manager, Leading Beverage Brand
    //           </p>
    //         </div>
    //       </div>
    //       <p className="text-sm text-gray-600 mt-4">
    //         Salesworx streamlined our entire sales process, helping us close
    //         deals 25% faster. The automation tools are a game-changer!
    //       </p>
    //       <div className="flex items-center mt-4">
    //         <div className="text-yellow-500 flex space-x-1">
    //           {Array(5)
    //             .fill()
    //             .map((_, index) => (
    //               <span key={index}>&#9733;</span>
    //             ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Right Side */}
    //   <div className="mt-12 md:mt-0 md:w-1/2">
    //     <form className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Name
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Your name"
    //           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           placeholder="you@company.com"
    //           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           Phone number
    //         </label>
    //         <div className="flex">
    //           <select
    //             className="border-r-0 rounded-l-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
    //           >
    //             <option>US</option>
    //             <option>IN</option>
    //             <option>UK</option>
    //           </select>
    //           <input
    //             type="tel"
    //             placeholder="+1 (555) 000-0000"
    //             className="flex-1 block w-full border-gray-300 rounded-r-md focus:ring-blue-500 focus:border-blue-500"
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700">
    //           How can we help?
    //         </label>
    //         <textarea
    //           placeholder="Tell us a little about the project..."
    //           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    //         ></textarea>
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
    //       >
    //         Send Message →
    //       </button>
    //     </form>
    //   </div>
    // </div>
<div className=" space-y-16 md:space-y-24 lg:space-y-32">
  
    <ContactForm />
    <Reachout />
    <FAQ />
    <Section text={"Want to see Salesworx in action?"} text2={"Schedule a demo today and discover the future of sales automation!"} buttonText={true} />
    <Footer />
    {/* <CallToAction /> */}
</div>
    )
}

export default Contact;
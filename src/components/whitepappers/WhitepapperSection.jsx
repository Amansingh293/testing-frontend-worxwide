import React from "react";
import { Link } from "react-router-dom";
// import timer from "../../assets/timer.gif"
import  Frame1 from "../../assets/Frame1.png"
import  Frame2 from "../../assets/Frame2.png"
import  Frame3 from "../../assets/Frame3.png"
import  Frame4 from "../../assets/Frame4.png"
import  Frame5 from "../../assets/Frame5.png"
import  Frame6 from "../../assets/Frame6.png"

import Footer from "@/components/common/Footer";
import Section from "@/components/common/Section";



const WhitepapperSection = () => {
  const blogs = [
    {
      title: "5 Strategies to Generate High-Quality B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
      link: "/blog/1",
      image: Frame1, // Replace with actual image
    },
    {
      title: "5 Key Strategies for Attracting Premium B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
      link: "/blog/2",
      image: Frame2, // Replace with actual image
    },
    {
      title: "5 Strategies to Generate High-Quality B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
      link: "/blog/1",
      image: Frame3, // Replace with actual image
    },
    {
      title: "5 Strategies to Generate High-Quality B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
      link: "/blog/1",
      image: Frame4, // Replace with actual image
    },
    {
      title: "5 Strategies to Generate High-Quality B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
      link: "/blog/1",
      image: Frame5, // Replace with actual image
    },
    {
      title: "5 Key Strategies for Attracting Premium B2B Leads",
      author: "Phoenix Baker",
      date: "19 Jan 2022",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin fringilla tempus morbi nisi in sapien at.",
      link: "/blog/2",
      image: Frame6, // Replace with actual image
    },
  ];

  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337/api/blogs") // Adjust the endpoint to match your API
  //     .then((response) => {
  //       setBlogs(response.data.data); // Extract the blogs array
  //       console.log(response.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching blogs:", error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!blogs.length) {
  //   return <div>No blogs available</div>;
  // }

  return (
    <>
    <section className="py-12 px-6 lg:px-20 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-800">
        Unlock Insights That Transform Your Business
        </h2>
        <p className="text-gray-600 mt-4">
        Explore our in-depth whitepaper to uncover cutting-edge strategies and actionable insights tailored for your success.
        </p>
      </div>
      <div className="">
      <div className="mb-8  space-x-4 flex-wrap">
      <h2 className="px-4 py-2 mb-4 font-bold">Whitepapers</h2>
        {/* Blog Filter Buttons */}
        {["All", "Recents", "Sales Automation", "Lead Generation", "Email Campaigns", "Account-Based Selling"].map(
          (filter, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full border ${
                filter === "All"
                  ? "bg-[#207C97] text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              } transition duration-300`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {blogs.map((blog, index) => (
          <Link to="/whitepaperdetail"><div
            key={index}
            className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-58 object-cover p-2"
            />
            <div className="mt-2 p-6">
              <p className="text-brand font-inter text-base font-medium leading-6">
                {blog.author} • {blog.date}
              </p>
              
              <p className="mt-[12px] text-[#535862] font-inter text-base font-normal leading-6">{blog.description}</p>
              {/* className="text-[#535862] text-md font-normal leading-6" */}

              <p className="mt-[20px]">
              <a 
                href={blog.link}
                className="mt-[20px] text-brand font-inter text-base font-medium leading-6"
              >
                Explore our blog →
              </a>
              </p>
            </div>
          </div></Link>
        ))}
      </div>
      </div>
    </section>
    <div className="space-y-[148px]">
    <Section text={"Start Your Free Trial Today!"} text2={"Transform your sales process with AI-powered automation and insights."}/>
              <Footer />
             </div>
             </>
  );
};

export default WhitepapperSection;

import { useEffect, useState } from "react";
import twitter from "@/assets/twitter.png";
import linkedin2 from "@/assets/linkedin2.png";

const BlogAside = ({ sidebarTitles, setSelectedId }) => {
  const [activeItem, setActiveItem] = useState();

  const handleClick = (id) => {
    setActiveItem(id);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      console.log("Scrolling to element with ID:", id);
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    } else {
      console.error("Target element not found:", id);
    }
  };

  useEffect(() => {
    setActiveItem(sidebarTitles?.[0]?.id);
  }, [sidebarTitles]);

  useEffect(() => {
    setSelectedId(activeItem);
  }, [activeItem]);

  return (
    <aside className="flex flex-col self-start w-1/3">
      <div className=" h-fit w-full rounded-[10px] bg-[#E9EAEB] inline-flex flex-col items-start gap-2 p-4 mb-[40px]">
        <p class="text-[#252B37] text-base font-medium leading-6">
          Share with your community!
        </p>
        <div className="flex gap-2">
          <img src={twitter} alt="rocket" className="w-4 h-4" />
          <img src={linkedin2} alt="linkedin" className="w-4 h-4" />
        </div>
      </div>

      {/* In this article */}
      <div className="flex flex-col gap-5">
        <h4 className="text-[20px] font-bold mb-4">In this article</h4>
        <ul className="space-y-3 text-gray-600">
          {sidebarTitles.map((val) => (
            <li
              key={val.id}
              className={`cursor-pointer border-l-[3px] text-h3-text pl-4 transition-colors ${
                activeItem === val.id
                  ? "border-[#207C97] text-[#207C97] text-h3-text-subtitle font-bold"
                  : "border-transparent text-gray-700"
              }`}
              onClick={() => handleClick(val.id)}
            >
              {val.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogAside;

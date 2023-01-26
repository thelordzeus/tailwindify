import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbLayoutNavbar } from "react-icons/tb";
import { RxCardStack, RxDropdownMenu } from "react-icons/rx";
import { BiCarousel } from "react-icons/bi";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { RiFootprintFill, RiSideBarFill } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "Home Page", link: "/", icon: AiOutlineHome },
    { name: "Navbar", link: "/", icon: TbLayoutNavbar },
    { name: "Cards", link: "/", icon: RxCardStack },
    { name: "Carousal", link: "/", icon: BiCarousel, margin: true },
    { name: "Accordian", link: "/", icon: TfiLayoutAccordionMerged },
    { name: "Dropdown", link: "/", icon: RxDropdownMenu },
    { name: "Footer", link: "/", icon: RiFootprintFill, margin: true },
    { name: "SideBar", link: "/", icon: RiSideBarFill },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-slate-800 min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-500 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-white font-semibold">Tailwindiify</div>
    </section>
  );
};

export default Home;

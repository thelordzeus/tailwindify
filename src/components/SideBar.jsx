import React from "react";
import { TbLayoutNavbar } from "react-icons/tb";
import { RxCardStack, RxDropdownMenu } from "react-icons/rx";
import { BiCarousel } from "react-icons/bi";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { RiFootprintFill, RiSideBarFill } from "react-icons/ri";

export const SideBar = () => {
  return (
    <>
      <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 fixed">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">
          Tailwindify
        </h2>

        {/* search bar  */}

        <div class="relative mt-6">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>

        <div class="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <a
              class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
              href="#"
            >
              <TbLayoutNavbar className="w-5 h-5" />

              <span class="mx-4 font-medium">Navbar</span>
            </a>

            <a
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <RxCardStack className="w-5 h-5" />

              <span class="mx-4 font-medium">Cards</span>
            </a>

            <a
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <BiCarousel className="w-5 h-5" />

              <span class="mx-4 font-medium">Carousal</span>
            </a>

            <a
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <TfiLayoutAccordionMerged className="w-5 h-4" />

              <span class="mx-4 font-medium">Accordion</span>
            </a>

            <a
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <RxDropdownMenu className="w-5 h-4" />

              <span class="mx-4 font-medium">Dropdown</span>
            </a>

            <a
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <RiFootprintFill className="w-5 h-4" />

              <span class="mx-4 font-medium">Footer</span>
            </a>

            <a
              class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <RiSideBarFill className="w-5 h-4" />

              <span class="mx-4 font-medium">Sidebar</span>
            </a>
          </nav>

          <a href="https://thelordzeus.vercel.app/" target="_blank" class="flex items-center px-4 -mx-2">
            <img
              class="object-cover mx-2 rounded-full h-9 w-9"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">
              Lord Zeus 
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

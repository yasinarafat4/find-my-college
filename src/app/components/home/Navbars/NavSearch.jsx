/* eslint-disable no-unused-vars */
"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { IoSearch, IoWallet } from 'react-icons/io5';
import { MdDashboard, MdOutlineContactSupport } from 'react-icons/md';
import { RiLogoutCircleLine, RiLogoutCircleRLine } from 'react-icons/ri';
import { TbMessageDots, TbShoppingCartDollar } from "react-icons/tb";

export default function NavSearch() {
  const router = useRouter();
  const [navMenuToggle, setNavMenuToggle] = useState(false);
  const [search, setSearch] = useState('');

  function onSearchProduct() {
    router.push(`/search?search=${search}`);
  }

  function handleClick() {
    setNavMenuToggle(!navMenuToggle);
  }

  return (
    <header className="bg-white dark:bg-boxdark shadow-md font-sans min-h-[50px] tracking-wide">
      {/* Navbar */}
      <div className="flex flex-wrap justify-between items-center max-lg:gap-y-6 max-sm:gap-x-4 lg:max-w-[980px] xl:max-w-7xl px-[10px] lg:px-0 py-3 lg:py-2 mx-auto">
        {/* Logo */}
        <a aria-label="Logo" href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            height={50}
            width={150}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h8KAAAAABJRU5ErkJggg=="
            priority
          />
        </a>

        {/* Collapse menu for small devices */}
        <div
          id="collapseMenu"
          className={`fixed top-0 left-0 h-full max-lg:w-3/5 max-lg:min-w-[300px] max-lg:bg-white dark:max-lg:bg-boxdark max-lg:shadow-md z-50 transition-transform duration-500 ease-in-out`}
          style={{
            transform: navMenuToggle ? 'translateX(0)' : 'translateX(-100%)',
          }}
        >
          <div>
            <button
              onClick={() => handleClick()}
              id="toggleClose"
              className="lg:hidden absolute top-3 right-3 z-[100] rounded-full bg-white p-2 border"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-black"
                width="12px"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>
            <ul>
              <li className="px-5 py-3 md:px-10">
                <a href="#">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={150}
                    height={50}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h8KAAAAABJRU5ErkJggg=="
                    loading="lazy"
                  />
                </a>
              </li>
              <div className="py-4 px-5 md:px-10 ">
                <div>
                  <div className="group flex items-center gap-2">
                    <div className="cursor-pointer group-hover:shadow-xl duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="group-hover:fill-[#007bff]"
                        width="20px"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                    <a href="/signin">
                      <span className="hover:text-[#007bff] text-sm">Signin</span>
                    </a>
                    |
                    <a href="/register">
                      <span className="hover:text-[#007bff] text-sm">
                        Register
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="px-5 md:px-10 py-5 space-y-3">
                <li className="max-lg:py-3">
                  <a
                    href="/"
                    className="text-[15px] py-2 px-3"
                  >
                    Home
                  </a>
                </li>
                <li className="max-lg:py-3">
                  <a
                    href="/about"
                    className="text-[15px] py-2 px-3"
                  >
                    About
                  </a>
                </li>
                <li className="max-lg:py-3">
                  <a
                    href="/contact"
                    className="text-[15px] py-2 px-3"
                  >
                    Contact
                  </a>
                </li>
              </div>
              <hr />
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 px-5 md:px-10 py-5">
                <div className="group flex items-center gap-2">
                  <div className="cursor-pointer group-hover:shadow-xl duration-300">
                    <FaHouseUser className="text-slate-600 dark:text-slate-300 text-xl" />
                  </div>
                  <a
                    href="/seller/register"
                    className="tracking-[1px] text-[12px] md:text-sm"
                  >
                    Become A Seller
                  </a>
                  |
                  <a
                    href="/seller/signin"
                    className="tracking-[1px] text-[12px] md:text-sm"
                  >
                    Login As Seller
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* Search Input for Large Devices */}
        <div className="hidden lg:flex px-6 rounded-full lg:w-6/12 mx-auto">
          <input
            aria-label="Search"
            // onChange={(e) => setSearch(e.target.value)}
            // value={search}
            type="text"
            placeholder="Search"
            className="input input-bordered dark:border-slate-400 input-sm py-4 rounded-s-full rounded-e-none focus:outline-none focus:border-2 focus:border_secondary w-full bg-white dark:bg-boxdark text-slate-600 dark:text-slate-300"
          />
          <button
            aria-label="Search"
            // onClick={(e) => onSearchProduct(e)}
            className="w-[50px] px-3 py-2 m-0 border-y-2 border-r-2 border-primary dark:border-slate-400 rounded-e-full bg-primary dark:bg-black hover:bg-blue-700"
          >
            <IoSearch className="text-white text-xl" />
          </button>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:flex items-center space-x-6">
            {/* Notification Icon */}
            <div className="relative dropdown dropdown-end cursor-pointer">
              <span tabIndex={0} className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  className="cursor-pointer fill-[#000] dark:fill-[#CBD5E1] hover:fill-[#007bff] inline-block"
                  viewBox="0 0 371.263 371.263"
                >
                  <path
                    d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                    data-original="#000000"
                  ></path>
                </svg>
                <span className="absolute left-auto -ml-2 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                  0
                </span>
              </span>
            </div>
          </div>

          {/* Toggle Button for Small Devices */}
          <button
            onClick={() => handleClick()}
            id="toggleOpen"
            className="lg:hidden p-0"
          >
            <svg
              fill="#000"
              className="cursor-pointer fill-[#000] dark:fill-[#CBD5E1] hover:fill-[#007bff] inline-block"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Search Input for Small Devices */}
      <div className="lg:hidden flex items-center mx-auto px-[10px] lg:px-0 pb-3 lg:pb-2">
        <input
          aria-label="Search"
          // onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder={'Search'}
          className="input input-bordered dark:border-slate-400 input-sm py-4 rounded-s-full rounded-e-none focus:outline-none focus:border-2 focus:border_secondary w-full bg-white dark:bg-boxdark text-slate-600 dark:text-slate-300"
        />
        <button
          aria-label="Search"
          // onClick={(e) => onSearchProduct(e)}
          className="w-[50px] px-3 py-2 m-0 border-y-2 border-r-2 border-primary dark:border-slate-400 rounded-e-full bg-primary dark:bg-black hover:bg-blue-700"
        >
          <IoSearch className="text-white text-xl" />
        </button>
      </div>
    </header>
  );
}
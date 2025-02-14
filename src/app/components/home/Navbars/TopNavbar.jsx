/* eslint-disable no-unused-vars */
"use client";

import { useRouter } from "next/navigation";
import { FaHouseUser } from "react-icons/fa";
import { GrWorkshop } from 'react-icons/gr';
import { IoMdCall } from 'react-icons/io';

export default function TopNavbar() {
  const location = useRouter();

  return (
    <div>
      {/* Topbar */}
      <section className="bg-[#F5F5F5] dark:bg-black text-white text-right">
        <div className="flex items-center justify-between lg:max-w-[980px] xl:max-w-7xl mx-auto px-[10px] lg:px-0">
          <div className="flex items-center gap-2">
            {/* Change Language */}
            <select
              aria-label="Change Language"
              className="select max-w-xs select-sm bg-[#F5F5F5] dark:bg-black text-slate-600 dark:text-slate-300 focus:border-none focus:outline-none focus:ring-0"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>

            <select
              aria-label="Change Currency"
              className="select max-w-xs select-sm bg-[#F5F5F5] dark:bg-black text-slate-600 dark:text-slate-300 focus:border-none focus:outline-none focus:ring-0"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
          <div className="lg:hidden">
            <a
              className="text-slate-600 dark:text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
              href="tel:+1234567890"
            >
              <IoMdCall className="text-sm" />
              <span className="text-sm">+1234567890</span>
            </a>
          </div>
          <div className="hidden lg:flex gap-7 items-center text-sm">
            <a
              className="text-slate-600 dark:text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
              href="tel:+1234567890"
            >
              <IoMdCall className="text-base" />
              <span>Call: +1234567890</span>
            </a>
            <a
              href="/seller/register"
              className="text-slate-600 dark:text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
            >
              <GrWorkshop className="" />
              <span>Become A Seller</span>
            </a>
            <a
              href="/seller/signin"
              className="text-slate-600 dark:text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
            >
              <FaHouseUser className="" />
              <span>Login As Seller</span>
            </a>
          </div>
        </div>
      </section>
      <div>
        <div className="hidden lg:flex">
          <div className="menu menu-horizontal px-1 space-x-5">
            <a href="/" className="text-[15px] border-animation my-2 px-3">
              {"Home"}
            </a>
            <a href="/about" className="text-[15px] border-animation my-2 px-3">
              {"About"}
            </a>
            <a
              href="/services"
              className="text-[15px] border-animation my-2 px-3"
            >
              {"Services"}
            </a>
            <a
              href="/contact"
              className="text-[15px] border-animation my-2 px-3"
            >
              {"Contact"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

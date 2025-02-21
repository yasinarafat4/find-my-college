/* eslint-disable no-unused-vars */
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHouseUser } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { IoMdCall } from "react-icons/io";

export default function TopNavbar() {
  const location = useRouter();

  return (
    <div>
      {/* Topbar */}
      <section className="bg-[#EC2F2F] text-right px-10 py-2">
        <div className="flex items-center justify-between lg:max-w-[980px] xl:max-w-7xl mx-auto px-[10px] lg:px-0">
          <div className="lg:hidden">
            <a
              className="text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
              href="tel:+1234567890"
            >
              <IoMdCall className="text-sm" />
              <span className="text-sm">+1234567890</span>
            </a>
          </div>
          <div className="hidden lg:flex gap-7 items-center text-sm">
            <a
              className="text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
              href="tel:+1234567890"
            >
              <IoMdCall className="text-base" />
              <span>Call: +1234567890</span>
            </a>
          </div>
        </div>
      </section>
      <div className="px-10">
        <div className="hidden lg:flex justify-between ">
          <a aria-label="Logo" href="/" className="flex items-center">
            <Image
              src="/assets/fmc.png"
              alt="Logo"
              height={50}
              width={150}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/1h8KAAAAABJRU5ErkJggg=="
              priority
            />
          </a>
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
          <div className="flex items-center gap-2">
            <a
              href="/seller/register"
              className="text-slate-600 dark:text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
            >
              <GrWorkshop className="" />
              <span>Register</span>
            </a>
            <a
              href="/seller/signin"
              className="text-slate-600 dark:text-slate-300 hover:text_secondary duration-500 flex items-center gap-1"
            >
              <FaHouseUser className="" />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

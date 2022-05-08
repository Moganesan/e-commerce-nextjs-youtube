import Image from "next/image";
import Logo from "../public/logo.svg";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

const Categories = [
  {
    name: "Plain T-Shirts",
    description:
      "Elit anim Lorem est velit sit est non fugiat aute ipsum minim reprehenderit.",
    href: "##",
    icon: "/fasion-product-1.jpg",
  },
  {
    name: "Hoodies",
    description:
      "Aute eiusmod irure est reprehenderit sit ullamco officia proident in voluptate eu ex veniam ex.",
    href: "##",
    icon: "hoodies-product-1.jpg",
  },
  {
    name: "Coffe Mugs",
    description: "Reprehenderit nisi qui nostrud do eiusmod nulla.",
    href: "##",
    icon: "mugs-product-1.jpg",
  },
];
const Header = () => (
  <nav className="w-full h-20 px-10 flex items-center justify-around shadow-md text-gray-900">
    <Link href={"/"}>
      <div className="w-14 h-14">
        <Image src={Logo} />
      </div>
    </Link>
    <div className="flex items-center">
      <input
        className="w-72 bg-gray-100 py-2 px-5 rounded-sm outline-none mr-40"
        placeholder="Search product"
      />
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md hover:bg-gray-200 px-3 py-2 text-base font-medium text-gray-900 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Categories</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-gray-900 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {Categories.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <img src={item.icon} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          All Categories
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        View All
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <ShoppingCartIcon className="w-7 h-7 mx-10" />

      <button className="font-bold mx-10">Signin</button>
      <button className="bg-purple-600 mx-10 text-white font-bold px-4 py-2 rounded-md hover:bg-white border-2 hover:text-gray-900 border-purple-600">
        Signup
      </button>
    </div>
  </nav>
);

export default Header;

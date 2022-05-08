import Image from "next/image";
import Logo from "../public/logo.svg";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CollectionIcon,
  UserIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import { ShoppingCartIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { Popover, Transition, Dialog, Disclosure } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import { useState } from "react";

const Categories = [
  {
    name: "Plain T-Shirts",
    description:
      "Elit anim Lorem est velit sit est non fugiat aute ipsum minim reprehenderit.",
    href: "##",
    icon: "/fashion-product-1.jpg",
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
const Header = () => {
  let [mobileMenu, openMobileMenu] = useState(false);

  return (
    <nav className="w-full h-20 md:px-4 smb:px-3 lg:px-32 flex items-center justify-between shadow-md text-gray-900">
      <Link href={"/"}>
        <div className="w-14 h-14">
          <Image src={Logo} />
        </div>
      </Link>
      <div className="flex items-center">
        <input
          className="w-72 smb:hidden sm:hidden md:block bg-gray-100 py-2 px-5 rounded-sm outline-none md:mr-0 lg:mr-40"
          placeholder="Search product"
        />
        <Popover className="relative smb:hidden sm:block">
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
                      <Link href="/products">
                        <div className="cursor-pointer flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                          <span className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              All Categories
                            </span>
                          </span>
                          <span className="block text-sm text-gray-500">
                            View All
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <button className="smb:hidden sm:block">
          <ShoppingCartIcon className="w-7 h-7 lg:mx-10 md:mx-0" />
        </button>
        <div className="smb:hidden sm:block">
          <Link href={"/signin"}>
            <button className="font-bold md:mx-4 lg:mx-10">Signin</button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-purple-600 md:mx-4 mx-10 text-white font-bold px-4 py-2 rounded-md hover:bg-white border-2 hover:text-gray-900 border-purple-600">
              Signup
            </button>
          </Link>
        </div>
        <button onClick={() => openMobileMenu(!mobileMenu)}>
          <MenuAlt1Icon className="w-10 h-10 sm:hidden" />
        </button>
      </div>

      <Transition appear show={mobileMenu} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => openMobileMenu(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ul className="grid gap-5">
                    <li>
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-purple-100 px-4 py-5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                              <CollectionIcon className="w-7 h7-" />
                              <span className="font-bold">Categories</span>
                              <ChevronUpIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-purple-500`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                              <ul className="grid gap-5">
                                <li className="px-5 py-3 hover:bg-white hover:border-purple-400 border-gray-100 border-2 rounded-md bg-gray-100 font-bold">
                                  Plain T-Shirts
                                </li>
                                <li className="px-5 py-3 hover:bg-white hover:border-purple-400 border-gray-100 border-2 rounded-md bg-gray-100 font-bold">
                                  Hoodies
                                </li>
                                <li className="px-5 py-3 hover:bg-white hover:border-purple-400 border-gray-100 border-2 rounded-md bg-gray-100 font-bold">
                                  Coffe Mugs
                                </li>
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </li>
                    <li className="flex w-full justify-between items-center rounded-lg px-4 py-5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 border-2 border-purple-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <UserIcon className="w-7 h-7" />
                      <Link href={"/signin"}>
                        <button className="font-bold">Signin</button>
                      </Link>
                      <div></div>
                    </li>

                    <li className="flex w-full justify-between items-center rounded-lg px-4 py-5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 border-2 border-purple-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <UserAddIcon className="w-7 h-7" />
                      <Link href={"/signup"}>
                        <button className="font-bold">Signup</button>
                      </Link>
                      <div></div>
                    </li>
                    <li className="flex w-full justify-between items-center rounded-lg px-4 py-5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 border-2 border-purple-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <ShoppingCartIcon className="w-7 h-7" />
                      <Link href={"/cart"}>
                        <button className="font-bold">Cart</button>
                      </Link>
                      <div></div>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => openMobileMenu(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default Header;

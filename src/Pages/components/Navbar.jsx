import React from "react";
import { navItems } from "../Data/navItems";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="relative z-10 bg-white text-gray-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="https://omega-elevators.com/" className="logo-link">
            <img
              width="100"
              height="75"
              src="https://omega-elevators.com/sukookee/2023/04/Omega-Logo-200X150.png"
              alt="Omega"
              className="object-contain"
            />
          </a>
        </div>

        {/* Main Menu */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex  items-center">
            {navItems.map((item) => (
              <li className="group relative px-5 " key={item.id}>
                <div className="relative">
                  <Link
                    to={item.path}
                    className="block border-b-2 border-transparent hover:border-current   py-5 ">
                    {item.title}
                  </Link>

                  {/* First-level dropdown */}
                  {item.subTopics && (
                    <ul className="absolute   hidden bg-black w-[15vw] rounded-lg shadow-md group-hover:block p-3  transition-all duration-1000 ease-in-out text-white tryParent ">
                      {item.subTopics.map((subTopicItem, index) => (
                        <li key={index} className="group relative  ">
                          <a href="#" className="block p-1 hover:text-red-500 ">
                            {subTopicItem.subTitle}
                            {subTopicItem.subSubTopics && (
                              <span className=" absolute right-2"> <MdKeyboardArrowRight /> </span>
                            )}
                          </a>

                          {/* Second-level dropdown for subSubTopics */}
                          {subTopicItem.subSubTopics && (
                            <ul className="absolute  w-[15vw] rounded-lg ml-2.5 bg-black shadow-md   left-full top-0  tryChild   group-hover:block transition-all duration-500 delay-500 ">
                              {subTopicItem.subSubTopics.map(
                                (subSubItem, subSubIndex) => (
                                  <li
                                    key={subSubIndex}
                                    className="tryParentParent">
                                    <a
                                      href="#"
                                      className="block  px-0 m-5  hover:text-red-800 ">
                                      {subSubItem.subSubTitle}
                                      {subSubItem.subSubSubTopics && (
                              <span className="absolute right-2"> <MdKeyboardArrowRight /> </span>
                            )}
                                    </a>

                                    {subSubItem.subSubSubTopics && (
                                      <ul className="absolute  w-[15vw] rounded-lg   bg-black shadow-md p-3  left-full top-4 tryChildChild   group-hover:block transition-all duration-500 delay-500">
                                        {subSubItem.subSubSubTopics.map(
                                          (subSubSubItem, subSubSubIndex) => (
                                            <li
                                              key={subSubSubIndex}
                                              className="hover:text-red-600">
                                              <a
                                                href="#"
                                                className="block p-1 ">
                                                {subSubSubItem.subSubSubTitle}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
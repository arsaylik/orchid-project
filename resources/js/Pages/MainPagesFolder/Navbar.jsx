import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Nav() {
    const { t, i18n } = useTranslation();

    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav class="bg-white shadow dark:bg-gray-900 ">
            <div class="container flex items-center justify-between p-6 mx-auto text-gray-800 capitalize dark:text-gray-300">
                <div class="flex">
                <button onClick={toggleMenu} className="md:hidden">
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 4a1 1 0 100-2h14a1 1 0 100 2H3zm0 6a1 1 0 100-2h14a1 1 0 100 2H3zm0 6a1 1 0 100-2h14a1 1 0 100 2H3z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                </button>
                {window.innerWidth > 640 && (
                    <a
                        href="/"
                        class=" border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        {t("Home")}
                    </a>)}
                    {window.innerWidth > 640 && (
                    <a
                        href="/Works"
                        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        {t("Works")}
                    </a>)}
                    {window.innerWidth > 640 && (
                    <a
                        href="Blog"
                        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Blog
                    </a>)}
                    {window.innerWidth > 640 && (
                    <a
                        href="Contact"
                        class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        {t("Contact")}
                    </a>)}

                </div>
                {window.innerWidth > 640 && (

                <div className="flex items-center space-x-2">
                    <button onClick={() => clickHandle("tr")}>Turkce</button>
                    <span>|</span>
                    <button onClick={() => clickHandle("en")}>English</button>
                </div>)}
            </div>
            {menuOpen && (
                <div class="text-gray-100 fixed inset-y-0 right-0 w-2/5 bg-white dark:bg-gray-900 shadow z-20 p-6 opacity-80 ">
                    <a href="/" class="block p-2">. {t("Home")}</a>
                    <a href="/Works" class="block p-2">. {t("Works")}</a>
                    <a href="Blog" class="block p-2">. {t("Blog")}</a>
                    <a href="Contact" class="block p-2">. {t("Contact")}</a>
                    <div className="pt-3 flex items-center space-x-2">
                    <button onClick={() => clickHandle("tr")}>Turkce</button>
                    <span>|</span>
                    <button onClick={() => clickHandle("en")}>English</button>
                    </div>
                    <button onClick={closeMenu} className="pl-20 pt-10 self-end">
                        {t("Back")}
                    </button>
                </div>

            )}
        </nav>
    );
}

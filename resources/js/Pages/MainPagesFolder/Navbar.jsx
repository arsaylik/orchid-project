import { Link, usePage } from "@inertiajs/react";

export default function Nav() {
    const { component, url } = usePage();

    return (
        <>
            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <Link
                        href="/"
                        className={
                            component === "MainPagesFolder/Home"
                                ? "border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6 text-blue-500 border-blue-500"
                                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        }
                    >
                        Home
                    </Link>

                    <Link
                        href="/Works"
                        className={
                            url === "/Works"
                                ? "border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6 text-blue-500 border-blue-500"
                                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        }
                    >
                        Works
                    </Link>

                    <Link
                        href="Blog"
                        className={
                            url === "/Blog"
                                ? "border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6 text-blue-500 border-blue-500"
                                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        }
                    >
                        Blog
                    </Link>

                    <Link
                        href="Contact"
                        className={
                            url === "/Contact"
                                ? "border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6 text-blue-500 border-blue-500"
                                : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                        }
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
}

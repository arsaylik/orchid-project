import Layout from "@/Layouts/Layout";
// import "C:/Users/hp/OneDrive/Masaüstü/orchid/orchid-project/resources/css/home.css";

export default function Home() {
    return (
        <>
            <Layout>
                <section>
                    <div
                        class="relative overflow-hidden bg-cover bg-no-repeat"
                        style={{
                            backgroundPosition: "50%",
                            backgroundImage:
                                "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
                            height: "500px",
                        }}
                    >
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                            <div class="flex h-full items-center justify-center">
                                <div class="px-6 text-center text-white md:px-12">
                                    <h1 class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                        Welcome to <span>my website</span>
                                    </h1>
                                    <a
                                        href="/Works"
                                        class="rounded border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="mx-auto py-5 bg-slate-950">
                    <div class="w-5/6  shadow-2xl subpixel-antialiased rounded h-96 bg-black border-black mx-auto">
                        <div
                            class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
                            id="headerTerminal"
                        >
                            <div
                                class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3 animate-pulse"
                                id="closebtn"
                            ></div>
                            <div
                                class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3 animate-pulse"
                                id="minbtn"
                            ></div>
                            <div
                                class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3 animate-pulse"
                                id="maxbtn"
                            ></div>
                            <div class="mx-auto pr-16" id="terminaltitle">
                                <p class="text-center text-lg">Terminal</p>
                            </div>
                        </div>
                        <div
                            class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
                            id="console"
                        >
                            <p class="pb-1 text-2xl animate-pulse">
                                Hello, world !
                            </p>
                        </div>
                    </div>
                </div>

                <div class="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
                    <div class="container relative flex px-6 py-16 mx-auto">
                        <div class="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
                            <span class="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
                            <h1 class="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                                Be on
                                <span class="text-5xl sm:text-7xl">Time</span>
                            </h1>
                            <p class="text-sm text-gray-700 sm:text-base dark:text-white">
                                Dimension of reality that makes change possible
                                and understandable. An indefinite and
                                homogeneous environment in which natural events
                                and human existence take place.
                            </p>
                            <div class="flex mt-8">
                                <a
                                    href="/Blog"
                                    class="px-4 py-2 mr-4 text-white uppercase bg-pink-500 border-2 border-transparent rounded-lg text-md hover:bg-pink-400"
                                >
                                    Get started
                                </a>
                                <a
                                    href="/Blog"
                                    class="px-4 py-2 text-pink-500 uppercase bg-transparent border-2 border-pink-500 rounded-lg dark:text-white hover:bg-pink-500 hover:text-white text-md"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                        <div class="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                            <img
                                src="\images\10.png"
                                class="max-w-xs m-auto md:max-w-sm"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

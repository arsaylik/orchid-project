
import "C:/Users/hp/OneDrive/Masaüstü/orchid/orchid-project/resources/css/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Footer() {
    return (
        <>
            <div class="w-full  max-h-screen flex items-center justify-center bg-slate-950">
        <div class="md:w-2/3 w-full px-4 mt-20 text-white flex flex-col">
            <div class="w-full text-7xl font-bold">
                <h1 class="w-full md:w-2/3">You can contact me !</h1>
            </div>
            <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <p class="w-full md:w-2/3 text-gray-400">You can contact me for the issues you want to get information about.</p>
                <div class="w-44 pt-6 md:pt-0">
                    <a href="/Contact" class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">Contact US</a>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex mt-24 mb-12 flex-row justify-between">
                    <div>
                    <a class="navbar-brand" href="#">𝓐𝓡𝓢</a>
                    </div>
                    <a href="/" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Home</a>
                    <a href="/Works" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Works</a>
                    <a href="/Blog" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Blog</a>
                    <a href="/Contact" class="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Contact</a>
                    <div class="flex flex-row space-x-8 items-center justify-between">

                    <a class="glassIco" href="https://www.instagram.com/rasitt.official/"><i class="fab fa-instagram"></i></a>
                    <a class="glassIco" href="https://www.linkedin.com/in/ahmet-ra%C5%9Fit-saylik-1aab821b6/"><i class="fab fa-linkedin-in"></i></a>
                    <a class="glassIco" href="https://github.com/arsaylik"><i class="fab fa-github"></i></a>

                    </div>
                </div>
                <hr class="border-gray-600"/>
                <p class="w-full text-center mt-10 text-gray-600">Copyright © 2023 𝓐𝓡𝓢  </p>
            </div>
        </div>
    </div>



        </>
    );
}

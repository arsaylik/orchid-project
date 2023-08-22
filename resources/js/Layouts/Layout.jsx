import Footer from "@/Pages/MainPagesFolder/Footer"
import Nav from "@/Pages/MainPagesFolder/Navbar"

export default function Layout({children}){
    return(
        <div>
        {children}
        <Footer/>

        </div>
    )

}

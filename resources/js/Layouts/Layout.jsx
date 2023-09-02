import Footer from "@/Pages/MainPagesFolder/Footer";
import Nav from "@/Pages/MainPagesFolder/Navbar";
import "@/../css/footer.css";
import "@/../css/home.css";

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
}

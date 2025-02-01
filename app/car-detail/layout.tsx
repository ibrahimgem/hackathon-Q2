import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SideNavBar from "../components/side-navbar";

export default function CarDetailLayout ({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div>
    <Navbar />
    <div className="flex">
    <SideNavBar />
    {children}
    </div>
    <Footer />
    </div>
  )
}
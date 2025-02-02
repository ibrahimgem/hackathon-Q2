import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SideNavBar from "../components/side-navbar";

export default function CarDetailLayout ({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="max-w-[360rem]">
    <Navbar />
    <div>
    <SideNavBar />
    {children}
    </div>
    <Footer />
    </div>
  )
}
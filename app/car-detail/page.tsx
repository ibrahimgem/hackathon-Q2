import Catalogue from "../components/catalogue";
import { PickAndDrop } from "../components/pickanddrop";
import SideNavBar from "../components/side-navbar";

export default function CarDetail () {
    return (
        <div className="bg-[#F6F7F9] max-w-[1440px] m-auto">
        <PickAndDrop />
        <Catalogue />
        </div>
    )
}
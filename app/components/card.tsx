import Image from "next/image";
import Shadow from "@/public/shadow.svg";
import FuelCapSVG from "@/public/icons/fuelCapacity.svg";
import TransmissionSVG from "@/public/icons/transmission.svg";
import SeatSVG from "@/public/icons/seatingCapacity.svg";
import { StaticImageData } from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";



type Car = {
    name: string;
    brand: string;
    type: string;
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    originalPrice: string;
    tags: [];
    image: StaticImageData;
}

const Card: React.FC<Car> = ({ name, brand, type, fuelCapacity, transmission, seatingCapacity, pricePerDay, originalPrice, tags, image }) => {
    return (
        <div className="w-80 h-96 bg-white rounded-xl">
            <div className="px-6 pt-6 flex justify-between">
                <div className="text-xl font-bold">
                    {name}
                </div>
                {/* <Image
                    src={like}
                    width={24}
                    height={24}
                    alt="fav"
                /> */}
            </div>
            <div className="text-gray-400 px-6 font-bold pt-1">{type}</div>
            <div className="flex justify-center my-14 relative">
                {/* <Image
                    src={image}
                    width={232}
                    height={72}
                    alt="car"

                /> */}
                    <img src={urlFor(image).width(250).height(84).url()}
                    alt="Sanity image"/>


                <Image
                    src={Shadow}
                    width={304}
                    height={68}
                    alt="shadown"
                    className="absolute top-10"
                />
            </div>
            <div className="flex justify-between mx-6">
                <div className="flex items-center">
                <Image
                    src={FuelCapSVG}
                    width={24}
                    height={24}
                    alt="Fuel Capacity"
                    />
                    <span className="px-1 text-gray-400">{fuelCapacity}</span>
                </div>
                <div className="flex items-center">
                <Image
                    src={TransmissionSVG}
                    width={24}
                    height={24}
                    alt="Transmission"
                    />
                    
                    <span className="px-1 text-gray-400">{transmission}</span>
                </div>
                <div className="flex items-center">
                    
                <Image
                    src={SeatSVG}
                    width={24}
                    height={24}
                    alt="Seat"
                    />

                    <span className="px-1 text-gray-400">{seatingCapacity}</span>
                </div>

            </div>
            <div className="flex justify-between items-center mr-5">
                <div className="text-sm text-gray-400 font-bold m-6">
                    <span className="text-xl text-black">{pricePerDay} </span>
                </div>
                <button className="w-28 h-10 bg-[#3563E9] text-white rounded-md">Rent Now</button>
            </div>
        </div>
    )
}

export default Card;
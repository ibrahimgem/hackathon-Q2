import { client } from "@/sanity/lib/client";
import { carData } from "../data/cars";
import CarCard from "./card";
import { StaticImageData } from "next/image";
import { Key } from "react";
import { urlFor } from "@/sanity/lib/image";



export default async function Catalogue() {


    const popularCarQuery = `*[_type == "car" && "popular" in tags]`;
    const recommendedCarQuery = `*[_type == "car" && "recommended" in tags]`;

    const popularCar = await client.fetch(popularCarQuery);
    const recommendedCar = await client.fetch(recommendedCarQuery);
    return (
        <div>
            <div className="flex justify-between mx-14 sm:mx-20 mt-10">
                <div className="font-medium text-gray-400">
                    Popular Car
                </div>
                <div className="text-[#3563E9] font-medium">
                    View All
                </div>
            </div>
            <div className="flex justify-center py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
                    {popularCar.map((car: any) => (
                        <CarCard
                            key={car.id}
                            name={car.name}
                            type={car.type}
                            image={car.image}
                            pricePerDay={car.pricePerDay}
                            fuelCapacity={car.fuelCapacity}
                            transmission={car.transmission}
                            seatingCapacity={car.seatingCapacity}
                            brand={car.brand}
                            originalPrice={car.orignalPrice}
                            tags={[]}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-between mx-20 mt-10">
                <div className="font-medium text-gray-400">
                    Recommended Car
                </div>
            </div>
            <div className="flex justify-center py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
                    {recommendedCar.map((car: any) => (
                        <CarCard
                            key={car.id}
                            name={car.name}
                            type={car.type}
                            image={car.image}
                            pricePerDay={car.pricePerDay}
                            fuelCapacity={car.fuelCapacity}
                            transmission={car.transmission}
                            seatingCapacity={car.seatingCapacity}
                            brand={car.brand}
                            originalPrice={car.orignalPrice}
                            tags={[]}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

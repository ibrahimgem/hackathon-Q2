import { client } from "@/sanity/lib/client";
import { carData } from "../data/cars";
import CarCard from "./card";
import { StaticImageData } from "next/image";
import { Key } from "react";
import { urlFor } from "@/sanity/lib/image";



export default async function Catalogue() {
    

    const query = `*[_type == "car"]`; // Adjust your query
    const data = await client.fetch(query);
    return (
        <div className="mx-8 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {data.map((car: {
                seatingCapacity: string;
                fuelCapacity: string;
                pricePerDay: string;
                orignalPrice: string;
                brand: string; 
                id: Key | null | undefined; 
                name: string; 
                type: string; 
                image: StaticImageData; transmission: string; 
}) => (
                <CarCard
                    key={car.id}
                    name={car.name}
                    type={car.type}
                    image={(car.image)}
                    pricePerDay={car.pricePerDay}
                    fuelCapacity={car.fuelCapacity}
                    transmission={car.transmission}
                    seatingCapacity={car.seatingCapacity} 
                    brand={car.brand}
                    originalPrice={car.orignalPrice} 
                    tags={[]}                     />
            ))}
        </div>
    )
}

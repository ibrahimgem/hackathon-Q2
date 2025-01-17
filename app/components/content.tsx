import React from "react";
import { carData } from "../data/cars";
import CarCard from "./card";
import Hero from "./hero";

export default function Content() {
    return (
        <div className="mx-8 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {carData.map((car) => (
                <CarCard
                    key={car.id}
                    name={car.name}
                    image={car.image}
                    price={car.price}
                    fuelTank={car.fuelTank}
                    transmission={car.transmission}
                    capacity={car.capacity} />
            ))}
        </div>
    )
}
import { carData } from "../data/cars";
import CarCard from "./card";

export default function Catalogue() {
    return (
        <div className="mx-8 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {carData.map((car) => (
                <CarCard
                    key={car.id}
                    name={car.name}
                    type={car.type}
                    image={car.image}
                    price={car.price}
                    fuelTank={car.fuelTank}
                    transmission={car.transmission}
                    capacity={car.capacity} 
                    like={car.like} />
            ))}
        </div>
    )
}
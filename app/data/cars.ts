import KoenigseggSVG from "@/public/cars/Koenigsegg.svg"
import NissanGTRSVG from "@/public/cars/nissanGTR.svg"
import RollsRoyceSVG from "@/public/cars/rollsRoyce.svg"

export const carData = [
    {
        id: 1,
        name: "Koenigsegg",
        type: "Sport",
        image: KoenigseggSVG,
        price: 99.00,
        fuelTank: 90,
        transmission: "Manual",
        capacity: "2 People",

    },
    {
        id: 2,
        name: "NissanGT-R",
        type: "Sport",
        image: NissanGTRSVG,
        price: 80.00,
        fuelTank: 80,
        transmission: "Manual",
        capacity: "2 People",

    },
    {
        id: 3,
        name: "Rolls-Royce",
        type: "Sedan",
        image: RollsRoyceSVG,
        price: 96.00,
        fuelTank: 70,
        transmission: "Manual",
        capacity: "4 People"

    },
    {
        id: 4,
        name: "NissanGT-R",
        type: "Sport",
        image: NissanGTRSVG,
        price: 80.00,
        fuelTank: 80,
        transmission: "Manual",
        capacity: "2 People"

    },
]
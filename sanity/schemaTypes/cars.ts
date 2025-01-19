import { defineField, defineType } from "sanity";

export const cars = defineType({
  name: "cars",
  title: "Cars",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Car Name",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Car Type",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Car Image",
      type: "image",
    }),
    defineField({
      name: "price",
      title: "Rental Price",
      type: "string",
    }),
    defineField({
      name: "fuelCapacity",
      title: "Fuel Capacity",
      type: "number",
    }),
    defineField({
      name: "transmission",
      title: "Transmission",
      type: "string",
    }),
    defineField({
      name: "capacity",
      title: "Car Capacity",
      type: "string",
    }),
  ],
});

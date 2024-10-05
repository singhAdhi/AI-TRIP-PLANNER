import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApiData } from "@/redux/data/dataSlice";
import { themeChange } from "../redux/data/dataSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const ShowTrip = () => {
  const dispatch = useDispatch();

  // Load trip data from localStorage if available
  useEffect(() => {
    const storedData = localStorage.getItem("aiResponse");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(addApiData(parsedData)); // Restore to Redux
    }

    console.log("useEffect runs");
  }, [dispatch]);

  // Get the trip data from the Redux store
  const tripData = useSelector((state) => state.dataReducer?.data);
  const theme = useSelector((state) => state.dataReducer?.theme);

  // Add a check to ensure tripData and hotels exist before rendering
  if (!tripData || !tripData.hotels) {
    return (
      <p className="text-center text-lg text-gray-500">
        No hotel data available
      </p>
    ); // Fallback UI
  }

  return (
    <div
      className={`${
        theme === "light" ? "bg-black" : "bg-white"
      } flex items-center p-5 gap-5 flex-wrap justify-center`}
    >
      <button onClick={() => dispatch(themeChange())}>{theme}</button>
      {tripData.hotels.map((hotel, index) => {
        // Determine which image to use: the hotel's image or the default image
        const imageUrl =
          "https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg";

        return (
          <Card
            key={index}
            className="max-w-sm w-full border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="relative">
              <CardDescription>
                <img
                  src={imageUrl}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {hotel.name}
              </h3>
              <p className="text-gray-600 mt-1">{hotel.description}</p>
              <p className="mt-2 text-gray-500">Rating: {hotel.rating}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ShowTrip;

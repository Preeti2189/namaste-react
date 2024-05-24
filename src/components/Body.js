import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  //Local State Variable
  const [listOfRestaurant, setListOfRestaurant] = useState([
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334475",
        name: "KFC",
        cuisines: ["Burger", "Biryani", "American", "Snacks"],
        avgRating: "3.8",
        costForTwo: "44000",
        deliveryTime: 36,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334576",
        name: "Pizza Live",
        cuisines: ["Burger", "Biryani", "American", "Snacks"],
        avgRating: "4.2",
        costForTwo: "44000",
        deliveryTime: 20,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334677",
        name: "Burger KIng",
        cuisines: ["Burger", "Biryani", "American", "Snacks"],
        avgRating: "3.8",
        costForTwo: "54000",
        deliveryTime: 39,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334778",
        name: "PizzaWallah",
        cuisines: ["Burger", "Biryani", "American", "Snacks"],
        avgRating: "4.1",
        costForTwo: "44000",
        deliveryTime: 26,
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant();
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

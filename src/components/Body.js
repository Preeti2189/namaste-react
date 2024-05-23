import RestaurantCard from "./RestaurantCard";
const resList = [
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
      avgRating: "4.8",
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
      avgRating: "3.8",
      costForTwo: "44000",
      deliveryTime: 36,
    },
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "334879",
      name: "Pizza HUt",
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
      id: "334575",
      name: "Mc Donalds",
      cuisines: ["Burger", "Biryani", "American", "Snacks"],
      avgRating: "3.8",
      costForTwo: "44000",
      deliveryTime: 36,
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

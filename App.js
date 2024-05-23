import React from "react";
import ReactDOM from "react-dom/client";
/*
Header
-logo
-navigational items
Body
-Search bar
-Restaurant card container
      -Restaurant card
          Image ,Name, star rating, time of delivery
Footer
  -copyrights
  -Address
  -contact links
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//styleCard is javaScript object,used in jsx for giving css properties.
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://imgmedia.lbb.in/media/2019/10/5db2cf92b491735ea2787058_1571999634625.jpg "
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo / 100} For Two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

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
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

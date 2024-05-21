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
const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://imgmedia.lbb.in/media/2019/10/5db2cf92b491735ea2787058_1571999634625.jpg "
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
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

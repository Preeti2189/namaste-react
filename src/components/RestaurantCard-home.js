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

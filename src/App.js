import React from "react";
import PropTypes from "prop-types"

const foodILike = [
  {
    id: 1, 
    name: "kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi-150x150.jpg",
    rating: 5
  },
  {
    id: 2, 
    name: "bab",
    image: "http://www.bibigo.com/img/kr/img_bap1.jpg",
    rating: 4.3
  },
]

function Food({name, picture, rating}){
  return (
  <div>
    <h1>I like {name}</h1>
    <h2>{rating}/5.0</h2>
    <img src={picture} alt={name}/>
  </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
  <div>
    {foodILike.map(dish => (
      <Food 
      key={dish.id} 
      name={dish.name}
      picture={dish.image} 
      rating={dish.rating} />
    ))}
  </div>
  );
}

export default App;

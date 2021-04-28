import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Chicken",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.lLYnf87IJXPZqFVYyyCZDgHaDt%26pid%3DApi&f=1",
    rating: 3.4,
  },
  {
    id: 2,
    name: "beef",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.8SryKbw2Tuwe_9c6duQMMAHaFj%26pid%3DApi&f=1",
    rating: 4.5,
  },
  {
    id: 3,
    name: "pork",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gTnpc75ixoT-dvcurE_YsQHaD-%26pid%3DApi&f=1",
    rating: 4.0,
  },
  {
    id: 4,
    name: "rice",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7KY5PG2_E9mlPN2OcxcmGgHaE7%26pid%3DApi&f=1",
    rating: 3.2,
  },
  {
    id: 5,
    name: "salad",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.zbWkvlZszy3IHNiWljljuAHaKt%26pid%3DApi&f=1",
    rating: 5.0,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;

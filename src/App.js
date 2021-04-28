function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="chicken" />
      <Food fav="ramen" />
      <Food fav="pork" />
      <Food fav="beef" />
    </div>
  );
}

export default App;

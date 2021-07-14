import img from "../images/personalpic.gif";

function Home(props) {
  return (
    <div class="home">
      <h1>Home</h1>
      <img src={img} alt="Personal-Photo" class="App-logo" />
      <h2>Welcome!</h2>
      <p>This is a portfolio site to showcase my skills and projects.</p>
    </div>
  );
}

export default Home;

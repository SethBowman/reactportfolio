import List from "../components/List";

function About(props) {
  const skills = ["C#", "SQL", "HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <h1>About</h1>
      <List listTitle="Checkout out my skills:" content={skills} />
    </div>
  );
}

export default About;

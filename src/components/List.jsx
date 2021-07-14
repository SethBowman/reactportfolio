function List(props) {
  return (
    <>
      <p>{props.listTitle}</p>
      <ul>
       {props.content.map((item) => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default List;
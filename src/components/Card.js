const Card = (props) => {
  const handleClick = () => {
    props.handlePick(props.card.title);
  };

  return (
    <div>
      <button className="card" onClick={handleClick}>
        <img src={props.card.src} alt="" />
        <p className="caption">{props.card.title}</p>
      </button>
    </div>
  );
};

export default Card;

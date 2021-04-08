const Card = (props) => {
  const handleClick = () => {
    props.handlePick(props.card.title);
    props.shuffle();
  };

  return (
    <div>
      <button className="card" onClick={handleClick}>
        <div className="inner-card">
          <div className="img-container">
            <img src={props.card.src} alt="" />
          </div>
          <p className="caption">{props.card.title}</p>
        </div>
      </button>
    </div>
  );
};

export default Card;

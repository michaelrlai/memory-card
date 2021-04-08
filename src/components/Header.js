const Header = (props) => {
  return (
    <div className="header">
      <div>Score: {props.score}</div>
      <div>High score: {props.highScore}</div>
    </div>
  );
};

export default Header;

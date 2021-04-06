import bulbasaur from "../images/bulbasaur.png";
import caterpie from "../images/caterpie.png";
import clefairy from "../images/clefairy.png";
import ekans from "../images/ekans.png";
import jigglypuff from "../images/jigglypuff.png";
import nidoran from "../images/nidoran.png";
import nidorana from "../images/nidorana.png";
import pidgey from "../images/pidgey.png";
import pikachu from "../images/pikachu.png";
import rattata from "../images/rattata.png";
import sandshrew from "../images/sandshrew.png";
import spearow from "../images/spearow.png";
import squirtle from "../images/squirtle.png";
import vulpix from "../images/vulpix.png";
import weedle from "../images/weedle.png";

const Board = () => {
  return (
    <div className="board">
      <div className="card-container">
        <div className="card">
          <img src={bulbasaur} alt="" />
        </div>
        <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card</div>
        <div className="card">card</div>
      </div>
    </div>
  );
};

export default Board;

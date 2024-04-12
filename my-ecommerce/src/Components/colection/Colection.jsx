import "./Colection.css";
import ColectionCard from "./ColectionCard";
const Colection = () => {
  return (
    <div className="colectionContainer">
      <h1>Comprar produto</h1>
      <div className="cardsColections">
        <ColectionCard />
      </div>
    </div>
  );
};

export default Colection;

import { data } from "../../helpers/data"; //? farkli sekilde export edildigi icin { } suslu parantez icine aldik.
import Card from "./Card";
import "./Main.scss";
console.log(data);
const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Main;

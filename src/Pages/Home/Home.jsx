import About from "../../Commponents/About";
import Badge from "../../Commponents/Badge";
import Carasoultwo from "../../Commponents/Carasoultwo";
import Review from "../../Commponents/Review";
import Banner from "../Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="order-1 ">
        <Badge></Badge>
        <Carasoultwo></Carasoultwo>
        <About></About>
        <Review></Review>
      </div>
    </div>
  );
};

export default Home;

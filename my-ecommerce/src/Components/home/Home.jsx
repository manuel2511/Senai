import FooterLineName from '../Footer/FooterLineName';
import CarouselItensHome from './CarouselItensHome';
import CarouselHome from './CarouselHome';
import ConditionHome from './ConditionHome';
import './Home.css'
const Home = () => {
  return (
    <div className="containerBody">
      <CarouselHome/>
      <ConditionHome/>
      <FooterLineName name=" Novidades"/>
      <CarouselItensHome/>
    </div>
  )
}

export default Home

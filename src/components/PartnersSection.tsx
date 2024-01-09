import Fade from 'react-reveal/Fade';
import Partner1 from '../assets/images/partner1.png';
const PartnersSection = () => {
  return (
    <div className="flex flex-col items-center my-24">
      <Fade>
        <h1
          className="text-[75px] md:text-[80px] lg:text-[120px] text-[#DCBFA6]"
          style={{fontFamily: 'Damion'}}>
          Partners
        </h1>
        <a href="https://www.glynt.com/">
          <img src={Partner1} className="my-5" />
        </a>
      </Fade>
    </div>
  );
};

export default PartnersSection;

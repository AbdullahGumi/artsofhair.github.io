import Fade from 'react-reveal/Fade';

import SalonImage1 from '../assets/images/salon-1.jpg';
import SalonImage2 from '../assets/images/salon-2.jpg';
import SalonImage3 from '../assets/images/salon-3.jpg';
import {SvgIcon} from '../assets';

const SalonSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 relative">
      <Fade>
        <h1
          className="text-[75px] md:text-[80px] lg:text-[120px] text-[#DBB06F]"
          style={{fontFamily: 'Damion'}}>
          Salon
        </h1>
        <span
          className="text-center text-[18px] max-w-2xl"
          style={{fontFamily: 'Poppins'}}>
          Willkommen in unserem neuen Friseursalon! Wir sind bestrebt, jedem
          Kunden hier eine wundervolle und besondere Zeit zu bereiten. Unser
          Fokus liegt darauf, Ihr Haar zu verstehen, über qualifiziertes
          Personal zu verfügen und erstklassige Beratung zu bieten, um
          sicherzustellen, dass Ihr Haar die beste Pflege und den besten Stil
          erhält. Wir verfügen über ein Team erfahrener Friseure, die nicht nur
          Experten auf ihrem Gebiet sind, sondern auch lieben, was sie tun. Sie
          nehmen sich die Zeit, Sie gut zu verstehen und Ihre Haare gründlich zu
          untersuchen. Mit diesen Informationen erstellen sie individuelle
          Pläne, um Ihrem Haar genau das zu geben, was es braucht.
        </span>
      </Fade>
      <div className="grid grid-cols-3 gap-6 items-center mt-20">
        <Fade>
          <img className="rounded sm:max-w-[200px]" src={SalonImage1} />
          <img className="rounded sm:max-w-[200px]" src={SalonImage2} />
          <img className="rounded sm:max-w-[200px]" src={SalonImage3} />
        </Fade>
      </div>
      <div className="absolute left-0">
        <SvgIcon />
      </div>
      <div className="absolute right-0 bottom-[50%]">
        <SvgIcon />
      </div>
    </div>
  );
};

export default SalonSection;

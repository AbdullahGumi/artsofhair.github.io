import Fade from 'react-reveal/Fade';
import Inas from '../assets/images/inas.jpg';
const TeamSection = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <Fade>
        <h1
          className="text-[75px] md:text-[80px] lg:text-[120px] text-[#DCBFA6]"
          style={{fontFamily: 'Damion'}}>
          Team
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0 gap-x-12 ">
          <div className="flex flex-col items-center gap-y-4">
            <img
              src={Inas}
              className="rounded-full w-[150px] h-[150px] bg-red-300 object-cover"
            />
            <span style={{fontFamily: 'Damion', fontSize: 24}}>Inas</span>
          </div>
          <span className="max-w-[550px] text-center">
            Für mich war es im frühen Alter schon klar, dass Haare meine
            Leidenschaft sind. Unser Ziel ist es bei jedem Kunden das Beste
            „Ich“ zu erreichen daher wird auch dementsprechend individuell
            beraten. Von klassischen Stylings bis zu topaktuellen Farb- und
            Schnitttechniken verfügt unser Team nicht nur über handwerkliches
            Können, sondern stehen Ihnen auch mit Kreativität und Spaß bei der
            Wahl Ihres neuen Looks zur Seite.
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default TeamSection;

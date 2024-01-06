import Fade from 'react-reveal/Fade';

const TeamSection = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <Fade>
        <h1
          className="text-[75px] md:text-[80px] lg:text-[120px] text-[#DBB06F]"
          style={{fontFamily: 'Damion'}}>
          Team
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-4 sm:gap-y-0">
          <div className="flex flex-col items-center gap-y-4">
            <img src="" className="rounded-full w-[90px] h-[90px] bg-red-300" />
            <span style={{fontFamily: 'Damion', fontSize: 24}}>Inas</span>
          </div>
          <span className="max-w-3xl text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est
            voluptates quasi dolore ut ratione expedita beatae fugit accusamus?
            Ipsum, in adipisci! Accusamus, sed iusto dolor repellendus tempore
            ullam! Tempora!
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default TeamSection;

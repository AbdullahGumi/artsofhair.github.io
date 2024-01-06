import Logo from '../assets/images/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#DBB06F]">
      <div className="container mx-auto  flex items-center sm:items-start justify-between flex-col gap-y-4 sm:gap-y-0 sm:flex-row p-12 sm:p-24">
        <img src={Logo} className="max-w-[100px] sm:max-w-[150px] invert" />

        <div
          className="flex flex-col items-center text-white gap-y-4"
          style={{fontFamily: 'Poppins'}}>
          <span className="text-center font-bold">
            ART OF HAIR <br /> BY INAS
          </span>
          <span className="text-center">
            201 Kirchhörder Str. <br /> Dortmund, North Rhine-Westphalia
          </span>
          <span className="text-center underline">Auf der Karte ansehen</span>
          <button className="bg-white text-[#DBB06F] hover:opacity-[90%] p-3 rounded">
            JETZT ANRUFEN
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

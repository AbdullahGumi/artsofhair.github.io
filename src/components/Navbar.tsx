import {useState} from 'react';
import {Link} from 'react-scroll';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap sm:px-6 sm:py-0 px-6 py-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} className="max-w-[100px] sm:max-w-[150px]" alt="Logo" />
      </div>
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:opacity-[50%]">
          <svg
            className="h-3 w-3"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 100 2h12a1 1 0 100-2H3zm2 5a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } w-full flex justify-center flex-grow sm:items-center sm:flex sm:w-auto`}>
        <ul className="text-sm sm:flex-grow sm:flex sm:justify-end text-center gap-x-4">
          <NavItem onClick={() => setIsOpen(false)} to="salon" text="Salon" />
          <NavItem
            onClick={() => setIsOpen(false)}
            to="services"
            text="Services"
          />
          <NavItem onClick={() => setIsOpen(false)} to="team" text="Team" />
          <NavItem
            onClick={() => setIsOpen(false)}
            to="partners"
            text="Partners"
          />
          <NavItem
            onClick={() => setIsOpen(false)}
            to="kontakt"
            text="Kontakt"
          />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({
  to,
  text,
  onClick,
}: {
  to: string;
  text: string;
  onClick: () => void;
}) => (
  <li
    className="mb-3 sm:mb-0 cursor-pointer"
    style={{fontFamily: 'Damion', fontSize: 18}}>
    <Link
      onClick={onClick}
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className="block mt-4 sm:inline-block sm:mt-0 hover:text-gray-500 mr-4">
      {text}
    </Link>
  </li>
);

export default Navbar;

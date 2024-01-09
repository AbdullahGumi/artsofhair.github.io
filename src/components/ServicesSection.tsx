import Zoom from 'react-reveal/Zoom';
import {SvgIcon} from '../assets';

const categories = [
  {
    name: 'Dame Coloration',
    items: [
      {
        subCategory: '',
        services: [
          {
            service: 'Gloss',
            price: 'ab 35€',
          },
          {
            service: 'Ansatz Coloration',
            price: 'ab 49€',
          },
          {
            service: 'Strähnen Oberkopf',
            price: 'ab 55€',
          },
          {
            service: 'Strähnen ganzer Kopf',
            price: 'ab 75€',
          },

          {
            service: 'Balayage ohne Ansatzfarbe ',
            price: 'ab 190€',
          },
          {
            service: 'Balayage mit Ansatzfarbe ',
            price: 'ab 220€',
          },
        ],
      },
    ],
  },
  {
    name: 'Dame  Schneiden',
    items: [
      {
        subCategory: 'Waschen, Scheiden & Styling:',
        services: [
          {
            service: 'Dame Kurz',
            price: 'ab 45€',
          },
          {
            service: 'Dame Mittel',
            price: 'ab 55€',
          },
          {
            service: 'Dame Lang',
            price: 'ab 65€',
          },
          {
            service: 'Cut&Go',
            price: 'ab 37€',
          },

          {
            service: 'Waschen, Legen, föhnen ',
            price: 'ab 35€',
          },
        ],
      },
      {
        subCategory: 'Pflege:',
        services: [
          {
            service: 'Conditioner',
            price: 'ab 9€',
          },
          {
            service: 'Intensive Haarkur',
            price: 'ab 16€',
          },
        ],
      },
      {
        subCategory: 'Treatment:',
        services: [
          {
            service: 'Haaraufbau Treatment',
            price: 'ab 40€',
          },
        ],
      },
    ],
  },
  {
    name: 'Herren',
    items: [
      {
        subCategory: 'Waschen, Scheiden & Styling:',
        services: [
          {
            service: 'Schnitt',
            price: 'ab 30€',
          },
          {
            service: 'Farbe',
            price: 'ab 38€',
          },
        ],
      },
    ],
  },
  {
    name: 'Kinder',
    items: [
      {
        subCategory: '',
        services: [
          {
            service: 'Schneiden bis 10J.',
            price: '16€',
          },
          {
            service: 'Schneiden ab 10J.',
            price: 'ab 25€',
          },
        ],
      },
    ],
  },
  {
    name: 'Hochstecken',
    items: [
      {
        subCategory: 'Mit vorheriger Absparache:',
        services: [
          {
            service: 'Mittellange Haare',
            price: 'ab 70€',
          },
          {
            service: 'Lange Haare',
            price: 'ab 110€',
          },
          {
            service: 'Tages make up',
            price: 'ab 45€',
          },
          {
            service: 'Abend make up',
            price: 'ab 65€',
          },
        ],
      },
    ],
  },
  {
    name: 'Kosmetik',
    items: [
      {
        subCategory: '',
        services: [
          {
            service: 'Augenbrauen zupfen',
            price: 'ab 9€',
          },
          {
            service: 'Augenbrauen färben',
            price: 'ab 11€',
          },
          {
            service: 'Wimpern färben',
            price: 'ab 15€',
          },
        ],
      },
    ],
  },
];

const ServicesSection = () => {
  return (
    <div className="flex flex-col items-center mt-10 relative">
      <h1
        className="text-[75px] md:text-[80px] lg:text-[120px] text-[#DCBFA6]"
        style={{fontFamily: 'Damion'}}>
        Our Services
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
        {categories.map(category => (
          <Zoom>
            <div className="flex flex-col">
              <h2
                className="text-[24px]"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}>
                {category.name}
              </h2>
              {category.items.map(item => (
                <div className="flex flex-col gap-y-4">
                  {item.subCategory ? (
                    <span className="text-[16px] font-semibold mt-5">
                      {item.subCategory}
                    </span>
                  ) : (
                    <span className="text-[16px] font-semibold mt-5 text-white">
                      -
                    </span>
                  )}
                  {item.services.map(service => (
                    <div className="flex items-center justify-between gap-x-4">
                      <span className="text-[16px] font-medium">
                        {service.service}
                      </span>
                      <span className="text-[16px] font-medium">
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Zoom>
        ))}
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

export default ServicesSection;

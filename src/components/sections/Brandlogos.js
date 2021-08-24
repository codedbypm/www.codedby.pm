import React from "react";

const brandlogoData = [
  {
    id: 1,
    image: "images/clients/pvh.svg",
    name: "PVH Europe",
    url: "https://www.pvh.com"
  },
  {
    id: 2,
    image: "images/clients/backbase.svg",
    name: "Backbase",
    url: "https://www.backbase.com"
  },
  {
    id: 3,
    image: "images/clients/funda.svg",
    name: "Funda",
    url: "https://www.funda.nl"
  },
  {
    id: 4,
    image: "images/clients/dott.svg",
    name: "Dott",
    url: "https://www.ridedott.com"
  },
  {
    id: 5,
    image: "images/clients/ing.svg",
    name: "ING Bank",
    url: "https://www.ing.nl"
  },
  {
    id: 6,
    image: "images/clients/yolt.svg",
    name: "Yolt",
    url: "https://www.yolt.com"
  },
  {
    id: 7,
    image: "images/clients/payconiq.svg",
    name: "Payconiq",
    url: "https://www.payconiq.com"
  },
  {
    id: 8,
    image: "images/clients/ebuddy.svg",
    name: "eBuddy Messenger",
    url: "https://www.ebuddy.com"
  },
  {
    id: 9,
    image: "images/clients/allianz.svg",
    name: "Allianz",
    url: "https://www.allianz.com"
  },
  {
    id: 10,
    image: "images/clients/knab.svg",
    name: "Knab",
    url: "https://www.knab.nl"
  },
  {
    id: 11,
    image: "images/clients/hymn.svg",
    name: "HYMN",
    url: "https://www.hymn.com"
  },
];

function BrandlogosDark() {
  return (
    <div id="brandlogos">
      <div className="container">
        <div className="row justify-content-center">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-2 col-4" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <a href={brandlogo.url} target="_blank" rel="noopener noreferrer">
                    <img src={brandlogo.image} alt={brandlogo.name} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandlogosDark;

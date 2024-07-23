import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Heading";
import data from "./assets/Datasets/Data.json";
import NavBar from "./NavBar";
import AdvertiseContent from "./AdvertiseContent";
import SectionDeclaration from "./SectionDeclaration";

import {
  Macbooks,
  AvailableProducts,
  IPhones,
  Ipads,
  ITvs,
  Airpods,
  IWatches,
  AirTags,
  Accessories,
  Footers,
  images,
  contents,
  contactinfo,
} from "./assets/Datasets/Dataset";
import FooterPortion from "./FooterPortion";
import ContactUsPage from "./ContactUsPage";
function App() {
  const imges = data.find((item) => item.id === "1");
  const ur = imges ? imges.url : "";
  return (
    <>
      <Heading name={"Apple E-Store"} />
      <NavBar url={ur} />
      <AdvertiseContent images={images} id={"homepage"} />
      <SectionDeclaration
        name={"Available Products"}
        elements={AvailableProducts}
        showDetails={"false"}
      />
      <SectionDeclaration
        name={"Macbook"}
        elements={Macbooks}
        showDetails={"true"}
        id={"scrolltomac"}
      />
      <SectionDeclaration
        name={"iPads"}
        elements={Ipads}
        showDetails={"true"}
        id={"scrolltoipads"}
      />
      <SectionDeclaration
        name={"iPhone"}
        elements={IPhones}
        showDetails={"true"}
        id={"scrolltoiphones"}
      />
      <SectionDeclaration
        name={"iTVs"}
        elements={ITvs}
        showDetails={"true"}
        id={"scrolltotvs"}
      />
      <SectionDeclaration
        name={"Pods"}
        elements={Airpods}
        showDetails={"true"}
        id={"scrolltopods"}
      />
      <SectionDeclaration
        name={"iWatches"}
        elements={IWatches}
        showDetails={"true"}
        id={"scrolltowatches"}
      />
      <SectionDeclaration
        name={"AirTags"}
        elements={AirTags}
        showDetails={"true"}
        id={"scrolltotags"}
      />
      <SectionDeclaration
        name={"Accessories"}
        elements={Accessories}
        showDetails={"false"}
        id={"scrolltoaccessories"}
      />

      <FooterPortion images={Footers} contents={contents} />
      <ContactUsPage
        msgs={"Made By Biswarup with ❤ © Copyright 2024 | All rights reserved"}
        links={contactinfo}
      />
    </>
  );
}

export default App;

import BusinessPageHero from "../components/BusinessPageHero";
import HeroSection from "../components/HeroSection";
import BusinessPageUsp from "../components/BusinessPageUsp";
import dashboardImage from "../Assets/images/dashboard_img.svg";
import apiImage from "../Assets/images/api_image.svg";
import heroStar from "../Assets/images/hero_star.svg";

const BusinessHomepage = () => {
  return (
    <>
      <BusinessPageHero
        showbinder
        className="max-w-[530px] w-[100%]"
        text1="Expand the giftcard industry,"
        bluetext="one card"
        text3="at a time!"
        heroStar={heroStar}
        description="Digift helps businesses connect with customers by letting them offer
        their business gift cards to a large number of people."
        signupbtns
        gridimage={dashboardImage}
      />
      <HeroSection
        header="Why do fast-growing merchant and vendor choose us?"
        text="Whether you’re a business looking to sell your own gift cards, a company looking for bulk gift card solution, digift is for you."
      />
      <BusinessPageUsp />
      <BusinessPageHero
        className="max-w-[492px] w-[100%]"
        text1="Our API is built to be as"
        bluetext="lightweight"
        text3="and efficient as possible."
        description="We offer client and server libraries in everything from our API"
        signupbtns
        gridimage={apiImage}
      />
    </>
  );
};

export default BusinessHomepage;

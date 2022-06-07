import herovectorleft from "../../Assets/images/hero_vector_left.svg";
import herovectorright from "../../Assets/images/hero_vector_right.svg";
import leftcard from "../../Assets/images/left_card.svg";
import rightcard from "../../Assets/images/right_card.svg";
import Button from "../Button";
import uspStar from "../../Assets/images/usp_star.svg"

const HeroSection = ({ homepage, header, text, businesspage }) => {
  return (
    <div className="mt-[80px] py-16">
      <div className="bg-herobg mix-blend-soft-light rounded-[32px] text-white pt-40">
        <div className="relative">
          {homepage ? (<><img src={leftcard} alt="" className="absolute mob_img left-0 bottom-[20px]" />
            <img src={rightcard} className="absolute mob_img right-0 bottom-[20px]" alt="" /> </>) : null}
          <div className="relative m-auto w-[80%] md:w-[690px]">
            <> {homepage ? <><img src={herovectorleft} alt="" className="absolute mob_img top-0 md:top-[30px]" />
              <img src={herovectorright} className="absolute mob_img right-0 top-0 md:top-[30px]" alt="" /></> : <div className="flex flex-row gap-x-2 justify-center mb-8"><img src={uspStar} alt="" /><p>Digift helps businesses</p></div>}</>
            <h1 className="text-center font-bold text-[24px] md:text-[64px]">
              {header}
            </h1>
            <p className={`${homepage ? 'max-w-[350px]' : 'max-w-[430px]'} text-center m-auto my-8 text-xs md:text-sm font-semibold`}>
              {text}
            </p>
            <div className="flex flex-row items-center text-sm justify-center">{homepage ? <Button className="bg-white mb-40 px-10 py-4 text-herobg font-semibold rounded m-auto shadow-md" text="Start Shopping" /> : <a href="#" className="text-white font-semibold underline underline-offset-1 mb-[133px]">Create an account today</a>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import amazonlogo from "../../Assets/images/amazon_logo.svg";
import cardinfologo from "../../Assets/images/card_info_logo.svg";
import customer from "../../Assets/images/customer.svg";
import Button from "../Button";
import whiteArrow from "../../Assets/images/white_arrow.svg";
import ashArrow from "../../Assets/images/ash_arrow.svg";
import invoice from "../../Assets/images/invoice.svg";
import rightarrow from "../../Assets/images/arrow_right.svg"
const Card = ({
  testimonials,
  cardName,
  cardDescription,
  cardFee,
  itemIndex,
  statement,
  name,
  position,
  businessPageCard, businessfeatures, text1, bluetext, text3, heroStar, description, signupbtns, className, descriptionClass
}) => {
  return !businessPageCard ? (
    <div
      className={`${testimonials
          ? "max-w-[411px] h-[410px] px-10 py-[49px] bg-white border-2 border-solid	border-[#EBEFF5] rounded-lg"
          : "p-4 max-w-[339px] bg-arrivalbg"
        } ${itemIndex < 3 ? "rounded-t-xl" : ""} ${itemIndex > -4 ? "rounded-b-xl" : ""
        }`}
    >
      {!testimonials && (
        <div className="bg-white px-[22px] py-[19px] rounded-lg">
          <div className="bg-arrivalbg rounded-[999px] max-w-[84px] text-giftcolor text-sm font-semibold mb-[23.61px]">
            Giftcard
          </div>
          <div className="flex flex-row items-center gap-x-[10.39px] mb-[15.79px]">
            <img src={amazonlogo} alt="" />
            <h3 className="text-arrivalheader text-sm font-semibold">
              {cardName}
            </h3>
          </div>
          <p className="text-arrivalfilters text-xs mb-[33.65px] text-left">
            {cardDescription}
          </p>
          <div className="flex flex-row gap-x-2 mb-6">
            <img src={cardinfologo} alt="" />
            <span className="text-xs">{cardFee}</span>
          </div>
          <Button
            className="text-sm bg-herobg rounded text-white min-w-[100%] py-[11.5px] justify-center gap-x-4"
            text="Purchase card" icon={rightarrow}
          />
        </div>
      )}
      {testimonials && (
        <div className="flex flex-col justify-between h-[100%]">
          <p className="text-left text-navcolor">{statement}</p>

          <div className="flex flex-row gap-x-4">
            <img src={customer} alt="" />{" "}
            <div className="flex flex-col justify-center">
              <h4 className="font-bold text-arrivalheader">{name}</h4>
              <p className="text-sm text-positioncolor">{position}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className={`${className}`}>
      <h1 className="font-bold text-[18px] md:text-[56px] text-arrivalheader leading-[57.6px]">
        <span className="pr-4">{text1}</span>{" "} <span className="text-btnblue">{bluetext}</span><span>{" "} {text3} </span>
        {heroStar ? <span> <img src={heroStar} alt="" className="inline" /></span> : null}
      </h1>{" "}
      {description ? <p className={`${signupbtns ? 'text-arrivalfilters' : 'text-arrivalheader'} ${descriptionClass} font-semibold text-sm mt-6`}>
        {description}
      </p> : null}
      {signupbtns ? <div className="flex flex-col md:flex-row gap-6 text-sm mt-6">
        <Button className="bg-btnblue gap-x-4 px-6 py-3.5 text-white font-semibold" text="Get started" icon={whiteArrow} /> <Button className="bg-white gap-x-4 px-6 py-3.5 text-navcolor border-solid border-[1px] border-plainbtn font-semibold	" text="Sign In" icon={ashArrow} />
      </div> : null}
      {businessfeatures ? <div className="absolute bottom-0"><img src={invoice} alt="" /></div> : null}
    </div>
  );
};

export default Card;

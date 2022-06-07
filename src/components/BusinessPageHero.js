import Card from "./Card"
import dashboardBind from "../Assets/images/dashboard_bind.svg"

const BusinessPageHero = ({ text1, bluetext, text3, heroStar, description, signupbtns, gridimage, showbinder, className }) => {
    return (
        <div className={`mt-[100px] flex flex-col md:flex-row gap-20 justify-center md:justify-between ${showbinder ? 'pt-32 pb-20' : 'py-20'}`}>
            <Card businessPageCard className={className} descriptionClass="pr-24" text1={text1} bluetext={bluetext} text3={text3} heroStar={heroStar} description={description} signupbtns={signupbtns} />
            <div className={`relative max-w-[580px] w-[100%]`}><img src={gridimage} alt="" />{showbinder ? <img src={dashboardBind} className="absolute top-[22%] left-[-20px]" alt="" /> : null}</div>
        </div>
    )
}
export default BusinessPageHero
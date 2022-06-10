import Card from "./Card"

const BusinessPageUsp = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-8 py-[70px]">
            <Card businessPageCard businessfeatures className="max-w-[640px] h-[628px] relative  bg-featcardcolor pt-[72px] pl-4 md:pl-16 rounded-2xl" descriptionClass="pr-40" text1="Designed for today’s" bluetext="ambitious" text3="businesses" description="We give merchants the ability to sell digital Gift Cards for their business quickly, intuitively and affordably." /> <Card businessPageCard businessfeatures className="max-w-[640px] h-[628px] relative bg-featcardcolor pt-[72px] pl-16 rounded-2xl" descriptionClass="pr-32" text1="Features that" bluetext="empower" text3="your business’s" description="Automate your sales and marketing so you can focus on other areas of your business." />
        </div>
    )
}

export default BusinessPageUsp
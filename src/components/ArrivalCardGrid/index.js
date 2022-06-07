import "./ArrivalCardGrid.css";
import { useState, useEffect } from "react";
import Card from "../Card";
import arrivalArrow from "../../Assets/images/arrival_arrow.svg";
import { ArrivalCardArray } from "../../data";


const ArrivalCardGrid = () => {
    const [filteredArrivalArray, setFilteredArrivalArray] = useState([])
    const [arrayLength, setArrayLength] = useState(5)

    useEffect(()=>{
       const newArray = ArrivalCardArray.filter((card, index)=> index <= arrayLength)
       setFilteredArrivalArray(newArray)
    }, [arrayLength])
    
    const showMoreProducts = () =>{
        setArrayLength((arrayLength => arrayLength + 6)) 
    }
  return (
    <>
      <div className="arrival_card_container gap-x-4 gap-y-[-10px]">
          {filteredArrivalArray && filteredArrivalArray.map((card, index)=> <Card key={index} cardName={card.cardName} cardDescription={card.cardDescription} cardFee={card.cardFee} itemIndex={index} /> )}
      </div>
      {ArrivalCardArray.length !== filteredArrivalArray.length ? (<p onClick={showMoreProducts} className="flex flex-row gap-4 items-center justify-center mt-14 cursor-pointer">
        <span>Load more products</span>{" "}
        <span>
          <img src={arrivalArrow} alt="display more cards" />
        </span>
      </p>):
      (<p className="mt-14 text-center">End of product list</p>) }
    </>
  );
};
export default ArrivalCardGrid;

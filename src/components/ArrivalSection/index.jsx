import ArrivalCardGrid from "../ArrivalCardGrid";
const ArrivalSection = () => {
  return (
    <div className="pt-[88px] pb-[102px]">
      <h2 className="text-[32px] font-bold mb-12 text-center md:text-left">
        Latest Arrivals
      </h2>
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="basis-1 md:basis-1/4 filter_container font-semibold bg-arrivalbg max-h-[663px] max-w-[272px] p-8">
          <div className="flex flex-row justify-between mb-12">
            {" "}
            <h3 className="text-arrivalheader text-base">Filters</h3>{" "}
            <h4 className="text-herobg text-sm">Reset</h4>
          </div>
          <h4 className="text-arrivalheader text-sm text-left mb-6">
            Categories
          </h4>
          <div className="text-arrivalfilters text-left flex flex-col gap-y-4">
            <div>
              {" "}
              <input type="checkbox" /> <label>Ecommerce</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Popular</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Airtime & Electricity</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Gaming</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Electronics</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Clothes and Fashion</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Jewelry & Watches</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Home and furnitures</label>
            </div>
            <div>
              {" "}
              <input type="checkbox" /> <label>Sports & Entertainment</label>
            </div>
          </div>
        </div>
        <div className="md:basis-3/4">
          <ArrivalCardGrid />
        </div>
      </div>
    </div>
  );
};

export default ArrivalSection;

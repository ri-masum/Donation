import { useEffect, useState } from "react";
import DonateCard from "../components/DonateCard";

const Donation = () => {
  const [donates, setDonates] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donate"));
    if (donateItem) {
      setDonates(donateItem);
    } else {
      // alert('no donation found')
      setNoFound("No Donation Done yet");
    }
    // console.log(donateItem);
  }, []);
  // console.log(isShow);

  return (
    <div>
      {noFound ? (
        <p className="text-4xl h-[70vh] flex justify-center items-center">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {isShow
              ? donates.map((donate) => (
                  <DonateCard donate={donate} key={donate.id}></DonateCard>
                ))
              : donates
                  .slice(0, 4)
                  .map((donate) => (
                    <DonateCard donate={donate} key={donate.id}></DonateCard>
                  ))}
          </div>
        {
            donates.length>4&&  <div className="flex justify-center items-center mt-10">
            
            <button className={isShow?'hidden':'btn btn-accent'} onClick={()=>setIsShow(!isShow)}>Show All</button>
  
              </div>
        }
        </div>
      )}
    </div>
  );
};

export default Donation;

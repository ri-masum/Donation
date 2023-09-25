import { useEffect, useState } from "react";
import DonateCard from "../components/DonateCard";


const Donation = () => {
    const [donates,setDonates]=useState([])
    const [noFound,setNoFound]=useState('')


    useEffect(()=>{
            const donateItem=JSON.parse(localStorage.getItem('donate'))
            if(donateItem){
                setDonates(donateItem)

            }
            else{
                // alert('no donation found')
                setNoFound('No Donation Done yet')
            }
            console.log(donateItem);

    },[])
    return (
        <div>
            {noFound?<p className="text-4xl h-[70vh] flex justify-center items-center">{noFound}</p>:<div>
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        donates.map(donate=><DonateCard donate={donate} key={donate.id}></DonateCard>)
                    }
                </div>
                
                </div>}

            
        </div>
    );
};

export default Donation;
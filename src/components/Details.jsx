import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const Details = () => {
    
    const [details,setDetails]=useState()
    const {id}=useParams();
    const parseint=parseInt(id)


    const data=useLoaderData();

    useEffect(()=>{

        const findData=data?.find((dt)=>dt.id===parseint);
       
        setDetails(findData)

    },[id,data])


    return (
        <div className="mt-20">

            <DetailsCard details={details}></DetailsCard>

            
        </div>
    );
};

export default Details;
import PropTypes from "prop-types";
const DetailsCard = ({ details }) => {
  const { id, text_color, image, title, donation_price ,description} =details || {};


const handleDonate=()=>{
    console.log('clicked');

    const donateMoney=JSON.parse(localStorage.getItem('donate'))
    const addDonateMoney=[];
    if(!donateMoney){
        addDonateMoney.push(details)
        localStorage.setItem('donate',JSON.stringify(details))
        
    }
    else{
        addDonateMoney.push(...donateMoney,details)
        localStorage.setItem('donate',JSON.stringify(details))


    }

}


  return (
    <div>

      <div className=" flex justify-center md:ml-[100px] lg:ml-[400px] w-fit   h-[500px] relative">
        <img src={image} alt="" className=""  />
        <div className="p-10 opacity-50 rounded-lg absolute bottom-0 left-0 bg-black w-full ">
        </div>
        <button 
        onClick={handleDonate}

        style={{backgroundColor:text_color}} 
         className="p-3 rounded-lg absolute bottom-4 left-4">
            Donate ${donation_price}
            </button>


      </div>
      <div className="card-body space-y-5">
          <h2 className="text-4xl font-bold ">{title}</h2>
          <p className="text-sm">{description}</p>
         
        </div>
    </div>
  );
};
DetailsCard.propTypes = {
  details: PropTypes.object,
};
export default DetailsCard;

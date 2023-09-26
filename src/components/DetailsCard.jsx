import PropTypes from "prop-types";
import Swal from 'sweetalert2'
const DetailsCard = ({ details }) => {
  const { id, text_color, image, title, donation_price ,description} =details || {};




const handleDonate = () => {
  
    const donateMoneyString = localStorage.getItem('donate');
    let donateMoney = [];
  
    if (donateMoneyString) {
      // Parse the stored data as JSON into an array
      donateMoney = JSON.parse(donateMoneyString);
      // console.log('if condifiton');
     
      const isExist=donateMoney.some(item=>item.id ===id)
      if(isExist){
        Swal.fire(
          'Oops!',
          'This card is already in your donation list.',
          'warning'
        );
        return;
      }
    }
  
    
    // Add the new item (details) to the array
    donateMoney.push(details);
  
    // Save the updated array back to localStorage
    localStorage.setItem('donate', JSON.stringify(donateMoney));
    // swal("Success!", "You donate successfully!", "success")
    Swal.fire(
      'Good job!',
      'You Donate SuccesFully!',
      'success'
    )
  };
  


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
          <h2 className="text-5xl font-bold ">{title}</h2>
          <p className="text-md">{description}</p>
         
        </div>
    </div>
  );
};
DetailsCard.propTypes = {
  details: PropTypes.object,
};
export default DetailsCard;

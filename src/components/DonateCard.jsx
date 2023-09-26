import PropTypes from 'prop-types'
const DonateCard = ({ donate }) => {

  const {  text_color, category, bg_color, image, title,donation_price } = donate;

  return (
    <div >
      <div
        className={`flex shadow-xl`}
        style={{ backgroundColor: bg_color, opacity: 10 }}
      >
        <figure>
          <img className="" src={image} alt="img" />
        </figure>
        <div className="card-body">
          <h2
            className="py-2 w-fit p-3  rounded-lg normal-case  "
            style={{ color: text_color, backgroundColor: bg_color }}
          >
            {category}
          </h2>
          <p className=" font-bold text-md text-black text-xlf" >
            {title}
          </p>
          <p className="font-semibold" style={{color:text_color}}>${donation_price}.00</p>
          <button style={{backgroundColor:text_color}} className="p-2 rounded-lg text-white w-fit">View Details</button>
        </div>
      </div>
    </div>
  );
};
DonateCard.propTypes ={
    donate:PropTypes.object
}
export default DonateCard;

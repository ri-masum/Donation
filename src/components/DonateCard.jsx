const DonateCard = ({ donate }) => {
  console.log(donate);
  const { id, text_color, category, bg_color, image, title,donation_price } = donate;

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
          <p className=" font-bold text-md" style={{ color: text_color }}>
            {title}
          </p>
          <p className="font-semibold" style={{color:text_color}}>${donation_price}.00</p>
        </div>
      </div>
    </div>
  );
};

export default DonateCard;

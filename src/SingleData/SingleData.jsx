const SingleData = ({ data }) => {
const {id,text_color,category,bg_color,image,title}=data
console.log(data);
  return (
    <div>
      <div className={`card card-compact w-80   shadow-xl`} style={{backgroundColor:bg_color ,opacity:10}} >
        <figure>
          <img className=""
            src={image}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-sm" style={{color:text_color}}>{category}</h2>
          <p className=" font-bold text-md" style={{color:text_color}}>{title}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default SingleData;

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const SingleData = ({ data }) => {
const {id,text_color,category,bg_color,image,title}=data

  return (
    <div>
     <Link to={`/details/${id}`}>
     <div className={`card card-compact w-80   shadow-xl`} style={{backgroundColor:bg_color ,opacity:10}} >
        <figure>
          <img className=""
            src={image}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="py-2 text-center rounded-lg normal-case w-1/3 f " style={{color:text_color,backgroundColor:bg_color}}>{category}</h2>
          <p className=" font-bold text-md" style={{color:text_color}}>{title}</p>
          
          
        </div>
      </div></Link>
    </div>
  );
};
SingleData.propTypes ={
    data:PropTypes.object

}

export default SingleData;

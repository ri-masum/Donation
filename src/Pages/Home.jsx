import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import SingleData from "../SingleData/SingleData";

const Home = () => {
    const allData=useLoaderData();

  return (
    <div>
     <Banner></Banner>
     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 place-items-center  ">
        {
            allData.map(data=><SingleData key={data.id} data={data}></SingleData>)
        }
     </div>

    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Statistic = () => {
  const [id, setId] = useState(0);
  const [total, setTotal] = useState(0);
  const [percen, setpercen] = useState(0);
  useEffect(() => {
    const donateMoneyString = localStorage.getItem("donate");
    const donateMoney = JSON.parse(donateMoneyString);
    if (donateMoney) {
      const total = donateMoney.filter(
        (preValue, currentItem) => preValue + currentItem.id,
        0
      );
    //   console.log("total id is", total.length); //
      const percentage = (total.length / 12) * 100;

      const remaining = 100 - percentage;

      setTotal(remaining);
      setpercen(percentage);
    } else {

<p className="text-5xl font-bold text-center">
    no DonaTion Done Yet
</p>    }
  }, []);

  const data = {
    datasets: [
      {
        data: [percen, total],
      },
    ],


    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: ["My Donation", "Remaining Donation"],
  };
 

  return (
    <div>
      <h1 className="text-5xl font-semibold text-center mb-10">
        Donation statistic
      </h1>
     {
        percen>0? <div className=" flex justify-center ">
        <div style={{ width: "30%", height: "30%" }}>
          <Pie data={data} ></Pie>
        </div>
      </div>:<p className="text-5xl font-bold text-center">
    No DonaTion Done Yet
</p> 
     }
    </div>
  );
};

export default Statistic;

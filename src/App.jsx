import { useSelector } from "react-redux";
import { selectRiskList, selectCheckedRiskListPercentage } from "./redux/risk/riskSlice";
import "./App.css";
import RiskMeter from "./components/RiskMeter/RiskMeter";
import Card from "./components/Card/Card";
import RightArraow from "./assets/svg-components/RightArraow";

function App() {
  const data = useSelector(selectRiskList);
  const percentage = useSelector(selectCheckedRiskListPercentage);

  return (
    <div className="App w-10/12 mx-auto">
      <h1 className="text-3xl sm:text-4xl text-center my-6">Risk Meter</h1>
      <p className="text-center text-base sm:text-xl	text-slate-700	mb-12">
        Your website is often the face of your brand. It is where you present your products and
        services and how you build brand awareness and trust. However, in today’s fast-paced digital
        world, risks are commonplace. So, it is critical to implement certain website maintenance
        practices to help reduce your risk. Calculate yours now:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="sm:w-4/5 mx-auto">
        <RiskMeter percentage={percentage} />
      </div>

      <div className="flex justify-center items-center w-full my-6 ">
        <p className="text text-lg mr-1 cursor-pointer">Check Detailed Checklist</p>
        <RightArraow />
      </div>
    </div>
  );
}

export default App;

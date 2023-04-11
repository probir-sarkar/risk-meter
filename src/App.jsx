import { useEffect, useState } from "react";

import "./App.css";
import RiskMeter from "./components/RiskMeter/RiskMeter";
import Card from "./components/Card/Card";
import RightArraow from "./assets/svg-components/RightArraow";

const initialData = [
  {
    id: 1,
    title: "Core Web Vitals",
    checked: false,
  },
  {
    id: 2,
    title: "HTTPS",
    checked: false,
  },
  {
    id: 3,
    title: "Mobile Friendliness",
    checked: false,
  },
  {
    id: 4,
    title: "Page Speed",
    checked: false,
  },
  {
    id: 5,
    title: "Broken Links",
    checked: false,
  },
  {
    id: 6,
    title: "SEO",
    checked: false,
  },
  {
    id: 7,
    title: "Security",
    checked: false,
  },
  {
    id: 8,
    title: "Accessibility",
    checked: false,
  },
];

function App() {
  const [data, setData] = useState(initialData);
  const [percentage, setPercentage] = useState(0);

  const handleCheck = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    console.log(newData);
    setData(newData);
  };
  useEffect(() => {
    const checkedItems = data.filter((item) => item.checked);
    const percentage = (checkedItems.length / data.length) * 100;
    setPercentage(percentage);
  }, [data]);

  return (
    <div className="App w-5/6  mx-auto">
      <h1 className="text-3xl sm:text-4xl text-center my-6">Risk Meter</h1>
      <p className="text-center text-base sm:text-xl	text-slate-700	mb-12">
        Your website is often the face of your brand. It is where you present your products and
        services and how you build brand awareness and trust. However, in today’s fast-paced digital
        world, risks are commonplace. So, it is critical to implement certain website maintenance
        practices to help reduce your risk. Calculate yours now:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-6 my-12">
        {data.map((item) => (
          <Card key={item.id} item={item} handleCheck={handleCheck} />
        ))}
      </div>

      <div className="sm:w-4/5 mx-auto">
        <RiskMeter percentage={percentage} />
      </div>

      <div className="flex justify-center items-center  w-full mt-6">
        <p className="text text-lg mr-1">Check Detailed Checklist</p>
        <RightArraow />
      </div>
    </div>
  );
}

export default App;

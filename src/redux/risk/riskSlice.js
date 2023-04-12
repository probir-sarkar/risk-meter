import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  riskList: [
    {
      id: 1,
      title: "Core Web Vitals",
      checked: false,
    },
    {
      id: 2,
      title: "Optimized Codes",
      checked: false,
    },
    {
      id: 3,
      title: "SEO Friendly Website",
      checked: false,
    },
    {
      id: 4,
      title: "Efficient Browser caching",
      checked: false,
    },
    {
      id: 5,
      title: "Server Security",
      checked: false,
    },
    {
      id: 6,
      title: "Crawling  and Indexing",
      checked: false,
    },
    {
      id: 7,
      title: "User Interaction",
      checked: false,
    },
    {
      id: 8,
      title: "Large Network Payload",
      checked: false,
    },
  ],
};

export const riskSlice = createSlice({
  name: "risk",
  initialState,
  reducers: {
    toggleCheck: ({ riskList }, { payload: id }) => {
      const risk = riskList.find((risk) => risk.id === id);
      risk.checked = !risk.checked;
    },
  },
});

export const { toggleCheck } = riskSlice.actions;

export const selectRiskList = (state) => state.risk.riskList;

export const selectCheckedRiskList = (state) => state.risk.riskList.filter((risk) => risk.checked);

export const selectCheckedRiskListPercentage = (state) => {
  const checkedRiskList = state.risk.riskList.filter((risk) => risk.checked);
  return (checkedRiskList.length / state.risk.riskList.length) * 100;
};

export default riskSlice.reducer;

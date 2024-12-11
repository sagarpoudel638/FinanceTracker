import React, { useState, useMemo } from "react";

const App = () => {
  const [totalMoneyinBank, setTotalMoneyinBank] = useState(0);
  const [fortnightIncome, setFortnightIncome] = useState(0);
  const [regularExpenses, setRegularExpenses] = useState(0);
  const [moneyLend, setMoneyLend] = useState(0);
  const [expectedExpenses, setExpectedExpenses] = useState(0);

  const isNegative = (number) => number < 0;
  const toSaveAmount = useMemo(() => {
    return expectedExpenses - (moneyLend + totalMoneyinBank);
  }, [expectedExpenses, moneyLend, totalMoneyinBank]);

  const daysLeft = useMemo(() => {
    const dailySavings = (fortnightIncome - regularExpenses) / 14;
    return dailySavings > 0 ? toSaveAmount / dailySavings : Infinity;
  }, [fortnightIncome, regularExpenses, toSaveAmount]);

  const weeksLeft = daysLeft / 7;
  const fortnightsLeft = daysLeft / 14;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Finance Tracker
        </h2>

        <Input
          inputlabel="Total Money in Bank"
          value={totalMoneyinBank}
          onChange={(e) => setTotalMoneyinBank(Number(e.target.value) || 0)}
        />
        <Input
          inputlabel="Fortnight Income"
          value={fortnightIncome}
          onChange={(e) => setFortnightIncome(Number(e.target.value) || 0)}
        />
        <Input
          inputlabel="Regular Expenses"
          value={regularExpenses}
          onChange={(e) => setRegularExpenses(Number(e.target.value) || 0)}
        />
        <Input
          inputlabel="Money Lent"
          value={moneyLend}
          onChange={(e) => setMoneyLend(Number(e.target.value) || 0)}
        />
        <Input
          inputlabel="Expected Expenses"
          value={expectedExpenses}
          onChange={(e) => setExpectedExpenses(Number(e.target.value) || 0)}
        />

        <div className="mt-6">
          {isNegative(toSaveAmount) ? (
            <h3 className="text-lg font-semibold text-gray-700">
              Total Savings: 
              <span className="text-green-600">${Math.abs(toSaveAmount.toFixed(2))}</span>
            </h3>
          ) : (
            <h3 className="text-lg font-semibold text-gray-700">
              To Save Amount:
              <span className="text-red-600">${toSaveAmount.toFixed(2)}</span>
            </h3>
          )}
        {isNegative(daysLeft)?(<h3 className="text-lg font-semibold text-green-700">
        Congratulations! You have Saved Enough 
        
      </h3>):(<div>
      <h3 className="text-lg font-semibold text-gray-700">
        Days Left to Save:
        <span className="text-blue-600">
          {isFinite(daysLeft) ? Math.ceil(daysLeft) + " days" : "N/A"}
        </span>
      </h3>
      <h3 className="text-lg font-semibold text-gray-700">
        Weeks Left to Save:
        <span className="text-blue-600">
          {isFinite(weeksLeft) ? weeksLeft.toFixed(1) + " weeks" : "N/A"}
        </span>
      </h3>
      <h3 className="text-lg font-semibold text-gray-700">
        Fortnights Left to Save:{" "}
        <span className="text-blue-600">
          {isFinite(fortnightsLeft)
            ? fortnightsLeft.toFixed(1) + " fortnight"
            : "N/A"}
        </span>
      </h3>
      </div> )}
        </div>
      </div>
    </div>
  );
};

const Input = ({ inputlabel, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">{inputlabel}</label>
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
);

export default App;

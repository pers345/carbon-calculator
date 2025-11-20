import React, { useState } from 'react';

const emissionFactors = {
  electricity: 0.233,
  car: 0.21,
  flight: 0.115,
};

export default function App() {
  const [dark, setDark] = useState(false);
  const [inputs, setInputs] = useState({ electricity: '', car: '', flight: '' });
  const [total, setTotal] = useState(null);

  const calculate = () => {
    const electricity = parseFloat(inputs.electricity) * emissionFactors.electricity || 0;
    const car = parseFloat(inputs.car) * emissionFactors.car || 0;
    const flight = parseFloat(inputs.flight) * emissionFactors.flight || 0;
    setTotal((electricity + car + flight).toFixed(2));
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <div className={\`\${dark ? 'dark' : ''}\`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-10">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Carbon Emission Calculator</h1>
            <button
              onClick={() => setDark(!dark)}
              className="border px-4 py-1 rounded dark:border-gray-600"
            >
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block">Electricity usage (kWh):</label>
              <input
                name="electricity"
                value={inputs.electricity}
                onChange={handleChange}
                type="number"
                className="w-full px-3 py-2 border rounded dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="block">Car travel (km):</label>
              <input
                name="car"
                value={inputs.car}
                onChange={handleChange}
                type="number"
                className="w-full px-3 py-2 border rounded dark:bg-gray-800"
              />
            </div>

            <div>
              <label className="block">Flight travel (km):</label>
              <input
                name="flight"
                value={inputs.flight}
                onChange={handleChange}
                type="number"
                className="w-full px-3 py-2 border rounded dark:bg-gray-800"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Calculate Emissions
          </button>

          {total !== null && (
            <div className="mt-6 text-xl font-semibold">
              Total Estimated CO₂: {total} kg
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

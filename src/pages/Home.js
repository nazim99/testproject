import React from 'react'
import {data} from '../data.js'
import FlavanoidsTable from '../components/flavanoids-component/FlavanoidsTable';
import FlavanoidsCalculate from '../components/flavanoids-component/FlavanoidsCalculate.js';

// keys function to remove space
data.forEach((item) => {
    Object.keys(item).forEach((key) => {
      var replacedKey = key
        .trim()
        .toString()
        .toLowerCase()
        .replace(/[^\w\-]+/g, "_");
      if (key !== replacedKey) {
        item[replacedKey] = item[key];
        delete item[key];
      }
    });
});
export default function Home() {
    // I need only alcohol & flavanoids then i have to calculate each of them individually that's why i have to seprated
    const cateData = data.reduce((acc, curr) => {
        const { alcohol, flavanoids } = curr;
        if (!acc[alcohol]) {
            acc[alcohol] = {
            items: []
            };
        }
        acc[alcohol].items.push(flavanoids);
        return acc;
    }, {});

    // for calculation i have to seprate all three alcohols & for just round figure i used math floor
    //first total 
    const filterOne = data.filter((item) => item.alcohol === 1);
    const level = filterOne.map((item) => Math.floor(item.flavanoids));
    const total = level.reduce((acc, cal) => acc + cal, 0);

    // second total
    const filterTwo = data.filter((item) => item.alcohol === 2);
    const level1 = filterTwo.map((item) => Math.floor(item.flavanoids));
    const total1 = level1.reduce((acc, cal) => acc + cal, 0);

    // third total
    const filterthird = data.filter((item) => item.alcohol === 3);
    const level2 = filterthird.map((item) => Math.floor(item.flavanoids));
    const total2 = level2.reduce((acc, cal) => acc + cal, 0);
  return (
    <>  
        <h2>Flavanoids Table</h2>
        <FlavanoidsTable cateData={cateData} />

        <h2 style={{marginTop:'35px'}}>Flavanoids Calculations</h2>
        <FlavanoidsCalculate total={total} total1={total1} total2={total2} />
    </>
  )
}
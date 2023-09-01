import React from 'react'
import GammaTable from '../components/gamma-components/GammaTable'
import GammaCalculate from '../components/gamma-components/GammaCalculate'
import {data} from '../data.js'

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

export default function Gamma() {
    // In this logic is changed that's why i have to change the code
    const cateData = data.reduce((acc, curr) => {
        const { alcohol } = curr;
        acc[alcohol] = acc[alcohol] ?? [];
        acc[alcohol].push(curr);
        return acc;
    }, {});
    
    // for calculation i have to seprate all three Gamma & for just round figure i used math floor
    
    //first total 
    const filterOne = data.filter((item) => item.alcohol === 1);
    const level = filterOne.map((item) =>
        Math.floor((item.ash * item.hue) / item.magnesium)
    );
    const total = level.reduce((acc, cal) => acc + cal, 0);

    // second total
    const filterTwo = data.filter((item) => item.alcohol === 2);
    const level1 = filterTwo.map((item) =>
        Math.floor((item.ash * item.hue) / item.magnesium)
    );
    const total1 = level1.reduce((acc, cal) => acc + cal, 0);

    // third total
    const filterthird = data.filter((item) => item.alcohol === 3);
    const level2 = filterthird.map((item) =>
        Math.floor((item.ash * item.hue) / item.magnesium)
    );
    const total2 = level2.reduce((acc, cal) => acc + cal, 0);
  return (
    <div style={{borderTop:'1px solid #222', paddingTop:'35px', marginTop:'50px'}}>
        <h2>Gamma Table</h2>
        <GammaTable cateData={cateData} />

        <h2 style={{marginTop:'35px'}}>Gamma Calculations</h2>
        <GammaCalculate total={total} total1={total1} total2={total2} />
    </div>
  )
}

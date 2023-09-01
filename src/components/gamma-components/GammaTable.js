import React from 'react'

export default function GammaTable({cateData}) {
    console.log(cateData)
  return (
    <>
        <table border="1" cellSpacing="0" cellPadding="5">
            <thead>
            <tr>
                <th colSpan="10">Measure</th>
                {Object.keys(cateData).map((item, index) => (
                    <th colSpan="10" key={'sets'+index}>
                        Class {item}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {Object.keys(cateData).map((item, index) => (
                <tr key={index}>
                <td colSpan="10">Gamma {item}</td>
                {cateData[item].map((list, i) => (
                    <td colSpan={list.length} key={i}>
                        {((list.ash * list.hue) / list.magnesium).toFixed(3)}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    </>
  )
}

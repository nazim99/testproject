import React from 'react'

export default function FlavanoidsTable({cateData}) {
  return (
    <>
        <table border="1" cellSpacing="0" cellPadding="5">
            <thead>
            <tr>
                <th colSpan="10">Measure</th>
                {Object.keys(cateData).map((item, index) => (
                    <th colSpan="10" key={'sets'+index}>
                        Alcohol {item}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {Object.keys(cateData).map((item, index) => (
                <tr key={'items'+index}>
                <td colSpan="10">Flavanoids {item}</td>
                {cateData[item].items.map((list, i) => (
                    
                    <td colSpan={list.length} key={i}>
                        {Math.round(list)}
                        {/* {list} */}
                    </td>
                    
                ))}
                </tr>
            ))}
            </tbody>
        </table>
    </>
  )
}

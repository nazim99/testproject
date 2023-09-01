import React from 'react'

export default function GammaCalculate({total, total1, total2}) {
  return (
    <>
        <table border="1" cellSpacing="0" cellPadding="5">
            <thead>
            <tr>
                <th>Gamma 1</th>
                <th>Gamma 2</th>
                <th>Gamma 3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{total}</td>
                <td>{total1}</td>
                <td>{total2}</td>
            </tr>
            </tbody>
        </table>
    </>
  )
}

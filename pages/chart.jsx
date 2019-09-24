import { Bar } from 'react-chartjs-2';
import { useState } from "react"

export default () => {
  const [data, setData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  })
  return <Bar
    data={data}
    width={100}
    height={150}
    options={{ maintainAspectRatio: false }}
  />
}
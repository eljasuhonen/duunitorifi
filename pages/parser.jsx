import Axios from "axios"
import { Bar } from "react-chartjs-2"
import { useState } from "react"
import * as R from "ramda"

const Parser = (props) => {
    
    const pageopen = props["data"]["days_open"]
    const temp = R.pipe(R.toPairs,R.sortBy(R.last))(pageopen)
    const label = R.pluck(0)(temp)
    const tieto = R.pluck(1)(temp)
    const [data, setData] = useState({
        labels:label,
        datasets: [{
          label: "Sivukäynnit / Kävijämäärät",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: tieto,
        }]
      })
    console.log(pageopen)
    return <Bar
    data={data}
    width={200}
    height={500}
    options={{ maintainAspectRatio: false }} ></Bar> 
}
Parser.getInitialProps = async () => {
    const url = "https://gist.githubusercontent.com/eljasuhonen/85019d69b6830d2595271ee0d9f88f0a/raw/7cd3e5a14f8e443d8fac1aa0c1270d834f3f2f9d/data.json"
    const {data} = await Axios.get(url)
    return { data }
} 
export default Parser 

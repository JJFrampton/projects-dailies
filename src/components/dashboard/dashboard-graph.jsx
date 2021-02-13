import React from 'react';

class DashboardGraph extends React.Component {
  constructor(props) {
    super(props)
    this.graphData = [
      {
        title: "Mandarin",
        details: "Learn mandarin, use rosetta stone or duo linguo",
        lastWeek: [1,1,0,1,1,1,1]
      },
      {
        title: "CompSci",
        details: "Learn computer science online",
        lastWeek: [1,1,0,0,1,0,1]
      },
      {
        title: "workout",
        details: "Learn computer science online",
        lastWeek: [1,0,0,0,1,0,0]
      }
    ]
  }
  render () {
    let graph = []
    this.graphData.forEach((task) => {
      let row = []
      let total = task.lastWeek.reduce((a, b) => a + b, 0)
      let color = "white"
      if (total > 0) { color = 'red' }
      if (total >= 3) { color = 'yellow' }
      if (total >= 6) { color = 'blue' }
      task.lastWeek.forEach((status) => {
        let fill = "white"
        if (status !== 0) {
          fill = color
        }
        row.push((<svg width="50" height="50" style={{marginRight:"5px"}}>
          <rect
            width="50"
            height="50"
            fill={fill}
          />
        </svg>))
      })
      graph.push((<div style={{display:"block"}}>{row}</div>))
    })
    return (

      <div>
        This is the graph!
        {graph}
      </div>
    );
  }
}
export default DashboardGraph;

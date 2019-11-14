import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
  
export default class DDDonut extends Component {

    render() {
        const data = {
            labels: ['World Class Jersey','Ukrainian Affair','DNCDraft'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]    
            };
         const pieOptions = {
            legend: {
                position: 'bottom'
            }
        };
        return (
            <div>
         
                    <Chart type="doughnut" data={data} options={pieOptions} />
                    
                    <div className="actionitems">
{/*actionable controls on the */}

</div>
                </div>

               



            
        )
    }
}
//DeniedDocDefault-DoNut
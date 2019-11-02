import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
import DeniedByDoc from'./../../svg/DeniedByDoc.svg'; 

export default class DeniedByDocs extends Component {

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
            <div className="card-header"><img src={ DeniedByDoc } className="icon" alt="GeoFence" align="left" /><h5>Documents Denied by Title</h5></div>
            <div className="widge-box">

                <div>
                    <Chart type="doughnut" data={data} options={pieOptions} />
                </div>

               




                </div>
<div className="actionitems">
{/*actionable controls on the */}

</div>

    </div>    
            
        )
    }
}
//DeniedDocDefault-DoNut
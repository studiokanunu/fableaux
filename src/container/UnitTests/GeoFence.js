import React, {Component} from 'react';
//import { Button, Form, FormGroup } from 'reactstrap';
import {Chart} from 'primereact/chart';
import GeoFence from'./../../svg/GeoFence.svg';
import './Utest.css';


class GeoFencing extends Component {
    render(){
        const data = {
            labels: ['Johnny','Mary','Clover'],
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

<div className="card-header"><img src={ GeoFence } className="icon" alt="GeoFence" align="left" /><h5>Geo Fencing Violations</h5></div>
<div className="widge-box">


<div>
                    <Chart type="pie" data={data} options= {pieOptions}  />
                </div>

</div>
<div className="actionitems">

</div>

    </div>


)

    }
};
export default GeoFencing
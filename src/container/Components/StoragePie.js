import React, {Component} from 'react';
import {Chart} from 'primereact/chart';
export default class StoragePie extends Component {

    render() {
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
                <Chart type="pie" data={data} options= {pieOptions}  />
            )
    }
}
import React, {Component} from 'react';
import AccessDeniedUser from'./../../svg/AccessDeniedUser.svg'; 
import BarChart from '../Components/Bars';

export default class AccDeniedUser extends Component {

    render() {

        return (
            <div>
            <div className="card-header"><img src={ AccessDeniedUser } className="icon" alt="GeoFence" align="left" /><h5>Access Denied by User</h5></div>
            <div className="widge-box">

                <div>
                    <BarChart />
                </div>

               




                </div>
<div className="actionitems">
{/*actionable controls on the */}

</div>

    </div>    
            
        )
    }
}

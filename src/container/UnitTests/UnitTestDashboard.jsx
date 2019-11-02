import React, {Component} from 'react';
import DeniedByDocs from './DeniedByDoc';
import StorageStats from './Storage';
import GeoFencing from './GeoFence';
import SubscriptStats from './Subscriptions';
import DeniedDocs from './DeniedDoc';
import EmailStats from './Email';
import FailedAuths from './FailedAuths';
import AccessDeniedUser from './AccDeniedUsr';
import Ipfence from './IpFencing';
import MostActiveDoc from './MostActiveDocs';
import './Utest.css';
import './common.css';


class StaticGrid extends Component {
//gridstart
render() {
  return (
    <container>
  <row className="boxset">
     <div><DeniedByDocs/></div>
 <div><StorageStats/></div>
 <div> <GeoFencing/></div>
  </row>
   <row className="boxset">
<div><SubscriptStats/></div>
<div><DeniedDocs /></div>
<div><EmailStats /></div>
   </row>
   <row className="boxset">
<div><FailedAuths /></div>
<div><AccessDeniedUser /></div>
<div><Ipfence /></div>
<div><MostActiveDoc /></div>

   </row>
 </container>
  );
}
}
export { StaticGrid }


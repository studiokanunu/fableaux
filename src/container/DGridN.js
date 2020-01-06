import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import  Dicons from "./Dicons.js"; //Drawer Icons file
import "./Dgrid.css";
import './UnitTests/Utest.css';
import './UnitTests/common.css';
import GeoFencing from './UnitTests/GeoFence';
import StorageStats from './UnitTests/Storage';
import FailedAuths from './UnitTests/FailedAuths';
import DeniedDocs from './UnitTests/DeniedDoc';
import Ipfence from './UnitTests/IpFencing';
import EmailStats from './UnitTests/Email';
import MostActiveDocs from './UnitTests/MostActiveDocs';
import SubscriptStats from './UnitTests/Subscriptions';
import DeniedByDocs from './UnitTests/DeniedByDoc';
import AccDeniedUser from './UnitTests/AccDeniedUsr';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

// the drawer holds the Data Views which we will expand
const widget=["GeoFence","Storage","FailedAuth","DeniedDocType","AccessDeniedUser", "IpFencing", "Email", "MostActiveDocs", "Subscriptions", "DeniedByDoc"];

const Widgies = [<GeoFencing/>, <StorageStats/>, <FailedAuths/>, <DeniedDocs/>,<AccDeniedUser/>, <Ipfence/>,<EmailStats/>,<MostActiveDocs/>,<SubscriptStats/>,<DeniedByDocs/>,];

class ToolBoxItem extends React.Component {
  render() {
    return (
<div
        className="toolbox__items__item "
        onClick={this.props.onTakeItem.bind(undefined, this.props.item)} id={widget[this.props.item.i]} >
<img src={ Dicons[this.props.item.i] } alt=""/> 

</div>
    );
  }
}
class ToolBox extends React.Component {
  render() {
    return (
      <div className="toolbox">
        <span className="toolbox__title">Toolbox</span>
        <div className="toolbox__items">
          {this.props.items.map(item => (
            <ToolBoxItem
              key={item.i}
              item={item}
              onTakeItem={this.props.onTakeItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default class ToolboxLayout extends React.Component {
    static defaultProps = {
        preventCollision: true,
        className: "layout",
        rowHeight: 150,
        onLayoutChange: function() {},
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        initialLayout: generateLayout()
      };

  state = {
    currentBreakpoint: "md",
    //mounted: false,
    layouts: { md: this.props.initialLayout },
    toolbox: { lg: [] }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts[this.state.currentBreakpoint], l => {
      return (
        <div key={l.i} className="basecard" id={widget[l.i]}>
          <div className="hide-button" onClick={this.onPutItem.bind(this, l)}>
            &times;
          </div>
          <div> 
          {Widgies[l.i]}
          
          
          </div>
          <span className="text" title="Resize, Move, Close">
              
            </span>
        </div>
      );
    });
  }

  onBreakpointChange = breakpoint => {
    this.setState(prevState => ({
      currentBreakpoint: breakpoint,
      toolbox: {
        ...prevState.toolbox,
        [breakpoint]:
          prevState.toolbox[breakpoint] ||
          prevState.toolbox[prevState.currentBreakpoint] ||
          []
      }
    }));
  };

 onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    this.setState({ compactType });
  };

  onTakeItem = item => {
    this.setState(prevState => ({
      toolbox: {
        ...prevState.toolbox,
        [prevState.currentBreakpoint]: prevState.toolbox[
          prevState.currentBreakpoint
        ].filter(({ i }) => i !== item.i)
      },
      layouts: {
        ...prevState.layouts,
        [prevState.currentBreakpoint]: [
          ...prevState.layouts[prevState.currentBreakpoint],
          item
        ]
      }
    }));
  };

  onPutItem = item => {
    this.setState(prevState => {
      return {
        toolbox: {
          ...prevState.toolbox,
          [prevState.currentBreakpoint]: [
            ...(prevState.toolbox[prevState.currentBreakpoint] || []),
            item
          ]
        },
        layouts: {
          ...prevState.layouts,
          [prevState.currentBreakpoint]: prevState.layouts[
            prevState.currentBreakpoint
          ].filter(({ i }) => i !== item.i)
        }
      };
    });
  };

  onLayoutChange = (layout, layouts) => {
    this.props.onLayoutChange(layout, layouts);
    this.setState({ layouts });
  };

  onNewLayout = () => {
    this.setState({
      layouts: { md: generateLayout() }
    });
  };

  render() {
    return (
      <div>
        <ToolBox
          items={this.state.toolbox[this.state.currentBreakpoint] || []}
          onTakeItem={this.onTakeItem}
        />

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          measureBeforeMount={true}
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function generateLayout() {
  return _.map(_.range(0, 9), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      //static: Math.random() < 0.05
    };
  });
}

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        {
          //BrowerRouter can have at most one child, which means complicated info
          //should be put in one <div></div>
        }
        <BrowserRouter>
          <div className="container">
            {
              //Route go through the listed paths and if currentpath contain listed
              //path, it will show the component. it's possible that multiple listed
              // path matches the current path and show multiple components.
              //That's why we need to use exact path instead of path.
            }
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

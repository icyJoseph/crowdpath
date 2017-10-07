import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import SearchBar from "../components/SearchBar";
import Background from "../components/Background";

import { connect } from "react-redux";
import { showAllArticles } from "../actions";

import ListView from "../components/ListView";

class App extends Component {
  componentWillMount() {
    this.props.onLoad();
  }

  render() {
    const { articles: { articles } } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <Background />
        <Container className="App-title">
          {/* <h1 className="App-title display-4">Crowd Path</h1> */}
          <SearchBar />
        </Container>
        <p className="App-intro">
          Explore our selected topics - or - search something
        </p>
        <ListView payload={articles} />
      </div>
    );
  }
}

const ConnectedApp = connect(
  (state, ownProps) => ({
    articles: state.articles
  }),
  {
    onLoad: () => showAllArticles
  }
)(App);

export default ConnectedApp;

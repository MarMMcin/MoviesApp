import React, { Component } from "react";

import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading
} from "../../actions/searchActions";

import styles from "../../Styles/SearchForm.module.scss";
export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <i className="fa fa-search" /> Search for a movie or TV show
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className={styles.input}
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <br />
            <button type="submit" className={styles.btn}>
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);

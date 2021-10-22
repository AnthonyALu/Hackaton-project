import React, { Component } from "react";
import ListGroup from "./common/listGroup";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import RecipesTable from "./recipesTable";
import { paginate } from "../utils/paginate";

class Recipes extends React.Component {
  state = {
    recipes: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {}

  handleDelete = (recipe) => {
    const recipes = this.state.recipes.filter((r) => r._id !== recipe._id);
    this.setState({ recipes });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      recipes: allRecipes,
    } = this.state;

    let filteredRecipes = allRecipes;
    if (searchQuery) {
      filteredRecipes = allRecipes.filter((r) =>
        r.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filteredRecipes = allRecipes.filter(
        (m) => m.genre._id === selectedGenre._id
      );
    }

    const sorted = _.orderBy(
      filteredRecipes,
      [sortColumn.path],
      [sortColumn.order]
    );
    const recipes = paginate(sorted, currentPage, pageSize);

    return { totalCount: filteredRecipes.length, data: recipes };
  };

  render() {
    const { length: count } = this.state.recipes;
    const { pageSize, currentPage, searchQuery, sortColumn } = this.state;
    if (count === 0)
      return (
        <Link
          to="/recipes/new"
          className="btn btn-primary"
          style={{ marginBottom: 20 }}
        >
          New Recipe
        </Link>
      );

    const { totalCount, data: recipes } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3 m-2">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} recipes.</p>
          <Link
            to="/recipes/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Recipe
          </Link>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <RecipesTable
            recipes={recipes}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
        </div>
      </div>
    );
  }
}

export default Recipes;

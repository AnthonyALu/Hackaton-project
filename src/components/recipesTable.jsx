import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class RecipesTable extends React.Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (recipe) => (
        <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
      ),
    },
    {
      path: "numberInStock",
      label: "Stock",
    },
    {
      path: "dailyRentalRate",
      label: "Rate",
    },

    {
      key: "delete",
      content: (recipe) => (
        <button
          onClick={() => this.props.onDelete(recipe)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { recipes, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        data={recipes}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default RecipesTable;

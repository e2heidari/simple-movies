import React, { useState } from "react";
import Movie from "./Movie";

const sortYear = (m, n) => n.year - m.year;
const sortTitle = (a, b) =>
  a.title > b.title ? 1 : b.title > a.title ? -1 : 0;

const Movies = ({ allMovies }) => {
  //  MVC -> Model View Controller

  //   const components = [];
  //   for (let i = 0; i < movieData.length; i++) {
  //     components.push(<Movie data={movieData[i]} />);
  //   }

  // movieData -> <Movie

  const [sortField, setSortField] = useState("year");

  // const x = {name:'iman',year:1985, lastName:'heidari'};
  // const {name, year} = x;

  // let sortField = "title";

  const onTitleSelected = () => {
    if (sortField !== "title") {
      setSortField("title");
    }
  };
  const onYearSelected = () => {
    if (sortField !== "year") {
      setSortField("year");
    }
  };

  console.log("refreshed");

  const components = allMovies
    .sort(sortField === "year" ? sortYear : sortTitle)
    .map((m) => <Movie key={m.id} {...m} />);

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="radio"
        name="sort"
        id="title"
        value="title"
        onClick={onTitleSelected}
      />
      <label htmlFor="year">Year</label>
      <input
        type="radio"
        name="sort"
        id="year"
        value="year"
        onClick={onYearSelected}
      />
      <div className="movies-container">
        {components}
      </div>
    </div>
  );
};

export default Movies;

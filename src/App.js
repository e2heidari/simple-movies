import React from "react";
import "./App.css";
import Movies from "./components/Movies";

let movieData = [
  {
    id: 1,
    title: "God Father One",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
    year: 1972,
    number: 5,
  },
  {
    id: 2,
    title: "The Dark Knight",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    year: 2008,
    number: 3,
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    year: 1994,
    number: 7,
  },
  {
    id: 4,
    title: "Forrest Gump",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
    year: 1994,
    number: 1,
  },
];

function App() {
  // const handleClick = () => {
  //   movieData = [
  //     ...movieData,
  //     {
  //       id: 5,
  //       title: "Kill Bill: Vol. 1",
  //       imageUrl:
  //         "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
  //       year: 2003,
  //     },
  //   ];
  // };
  return (
    <div className="container">
      <h1>Movies</h1>
      <Movies allMovies={movieData} />
    </div>
  );
}

export default App;

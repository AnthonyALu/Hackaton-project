import React from 'react';
import useFetch from "./useFetch.js"

const SerachByName = () => {

  const { data, loading, error } = useFetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");

  if (loading) return <h1> LOADING...</h1>

  if (error) console.log(error);


  return (
    <div className='container'>
      <p>{ data?.meals.strMeal}</p>
      <div>{ data?.meals.strMealThumb }</div>
    </div>
  );
};

export default SerachByName;

import React from 'react';
import { useState, useEffect } from 'react';
// import useFetch from "./useFetch.js"



const SerachByName = () => {

  const [value, setValue] = useState("");
  const [food, setFood] = useState([]);
  const [print, setPrint] = useState(false);

  const getFood = async () => {

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)

    let data = await response.json()

    setFood(data.meals) 
  }

  useEffect(() => {
    getFood() 
  }, [])

  console.log(value)

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <div >
      <form onSubmit={(e) => handleForm(e)} >
        <input type="text" placeholder="type... " onChange={(e) => setValue(e.target.value)} value={value} />
        <input type="submit"  value="search by name" onClick={() => setPrint(true)} />
      </form>
      {food.map(item => {
        return (
          <div>
            <p>{item.strMeal}</p>
            <img src={item.strMealThumb} alt="" />
          </div>
        )
      })}
    </div>
  )
};

export default SerachByName;

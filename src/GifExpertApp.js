import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handelAdd = () => {
  //Forma 1
  // setCategories([...categories, "HunterXHunter"])
  //Forma 2
  // 	setCategories( cats => [...cats, "HunterXHunter"])
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;

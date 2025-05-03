import React from "react";
import { useLoaderData, useParams } from "react-router";


const CategoryNews = () => {
  const {id} = useParams()
  const data = useLoaderData()

  console.log(id,data);
  return <div>category news pages - {id}</div>;
};

export default CategoryNews;

import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="font-bold text-primary">All categories</h1>
      <div className="grid grid-cols-1 gap-4 mt-2">
        {categories.map((category) => (
          <NavLink
            className={
              "btn border-0 hover:bg-base-200 bg-base-100 text-accent font-semibold"
            } key={category.id}
            to={`/Category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;

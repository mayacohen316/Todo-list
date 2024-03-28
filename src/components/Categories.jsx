import React, { useState } from "react";
import Category from "./Category";
import colorPalette from "./ColorPalette";
import "../styles/Categories.css";

const Categories = ({
  categories,
  todos,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => {
        const color = colorPalette[index % colorPalette.length]; 

        const totalTasks = todos.filter(
          (todo) => todo.category === category.name
        ).length;
        const completedTasks = todos.filter(
          (todo) => todo.category === category.name && todo.completed
        ).length;
        const completionPercentage =
          totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        return (
          <Category
            key={category.name}
            title={category.name}
            tasksCount={totalTasks}
            completionPercentage={completionPercentage}
            active={activeCategory === category.name}
            color={color}
            onCategoryClick={() => setActiveCategory(category.name)}
          />
        );
      })}
    </div>
  );
};

export default Categories;

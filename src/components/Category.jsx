import React from "react";
import "../styles/Category.css";
import CategoryProgress from "./CategoryProgress ";

const Category = ({
  title,
  tasksCount,
  completionPercentage,
  active,
  color,
  onCategoryClick,
}) => (
  <div
    className={`category ${active ? "active" : ""}`}
    onClick={onCategoryClick}
    style={{ '--category-shadow-color': color }} 
  >
    <div className="category-content">
      <div className="task-count">{tasksCount} tasks</div>
      <div className="title">{title}</div>
    </div>
    <CategoryProgress completed={completionPercentage} />
    <div className="completion-label">
      {completionPercentage.toFixed(0)}%
    </div>
  </div>
);

export default Category;

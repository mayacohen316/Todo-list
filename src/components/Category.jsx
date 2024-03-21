import React from 'react';
import '../styles/Category.css'; 
import CategoryProgress from './CategoryProgress ';

const Category = ({ title, tasksCount, completedTasks, totalTasks, active, onCategoryClick }) => (
    <div className={`category ${active ? 'active' : ''}`} onClick={onCategoryClick}>
      <div className="category-content">
        <div className="task-count">{tasksCount} tasks</div>
        <div className="title">{title}</div>
      </div>
      <CategoryProgress completedTasks={completedTasks} totalTasks={totalTasks} />
      <div className="underline" />
    </div>
  );

export default Category;

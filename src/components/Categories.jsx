import React, { useState } from 'react';
import Category from './Category'; 
import '../styles/Categories.css'; 

const Categories = () => {
  const categoriesData = [
    { title: 'Business', tasksCount: 40 },
    { title: 'Personal', tasksCount: 18 },
  ];

  const [activeCategory, setActiveCategory] = useState(categoriesData[0].title);

  return (
    <div className="categories-container">
      {categoriesData.map((category, index) => (
        <Category
          key={index}
          title={category.title}
          tasksCount={category.tasksCount}
          active={activeCategory === category.title}
          onCategoryClick={() => setActiveCategory(category.title)}
        />
      ))}
    </div>
  );
};

export default Categories;

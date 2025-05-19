import React from 'react';
import { SkillCategoryViewProps, SkillTreeProps } from '../types/Tree';


const SkillCategoryView: React.FC<SkillCategoryViewProps> = ({
  categoryName,
  skills,
  isLastCategory,
}) => {
  const categoryLinePrefix = isLastCategory ? '└── ' : '├── ';
  const itemLineSharedPrefix = isLastCategory ? '    ' : '│   ';

  return (
    <>
      {/* Category Name Line */}
      <div>{`${categoryLinePrefix}${categoryName}`}</div>

      {/* Skill Items under Category */}
      {skills.map((skill, index) => {
        const itemSpecificPrefix = index === skills.length - 1 ? '└── ' : '├── ';
        return (
          <div key={skill}>
            {`${itemLineSharedPrefix}${itemSpecificPrefix}${skill}`}
          </div>
        );
      })}
    </>
  );
};

const SkillTree: React.FC<SkillTreeProps> = ({
  rootPath,
  categoriesData,
  containerClassName = "font-mono", // Basic default
}) => {
  // Necessary base classes 
  const structuralClasses = "whitespace-pre-wrap leading-relaxed";

  return (
    <div className={`${structuralClasses} ${containerClassName}`}>
      {/* Root Path Line */}

      {rootPath && <div>{rootPath}</div>}

      {/* Categories and their Skills */}
      {categoriesData.map((category, index) => (
        <SkillCategoryView
          key={category.categoryName}
          categoryName={category.categoryName}
          skills={category.skills}
          isLastCategory={index === categoriesData.length - 1}
        />
      ))}
    </div>
  );
};

export default SkillTree;

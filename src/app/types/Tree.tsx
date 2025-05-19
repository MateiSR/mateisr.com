export interface SkillCategoryData {
  categoryName: string;
  skills: string[]; // Array of skill names
}

export interface SkillCategoryViewProps {
  categoryName: string;
  skills: string[];
  isLastCategory: boolean;
}

export interface SkillTreeProps {
  rootPath?: string;
  categoriesData: SkillCategoryData[];
  containerClassName?: string;
}


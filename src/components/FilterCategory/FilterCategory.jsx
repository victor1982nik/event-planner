import { useState } from "react";
import { categories } from "../../assets/options";
import { CiFilter } from "react-icons/ci";

import {
  Wrapper,
  Button,
  BtnText,
  List,
  Option,
} from "./FilterCategory.styled";

export const FilterCategory = ({
  isMobile,
  showCategory,
  handleCategoryClick,
  onFilterChange,
}) => {
  const [category, setCategory] = useState("Category");

  const handleCategorySelect = (e) => {
    //console.log(e);
    onFilterChange(e.target.innerText);
    setCategory(e.target.innerText);
  };
  //console.log("showCategory", showCategory);

  return (
    <Wrapper $isMobile={isMobile} $showCategory={showCategory}>
      <Button
        $showCategory={showCategory}
        $category={category}
        type="button"
        onClick={handleCategoryClick}
      >
        <BtnText $showCategory={showCategory}>{category}</BtnText>
        <CiFilter style={{ width: 24, height: 24 }} />
      </Button>

      {showCategory && (
        <List>
          {categories.map((c, index) => (
            <Option type="button" key={index} onClick={handleCategorySelect}>
              {c.value}
            </Option>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

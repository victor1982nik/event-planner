import { useState } from "react";
import { LiaSlidersHSolid } from "react-icons/lia";
//import { MdArrowUpward } from "react-icons/md";
import { sortingOptNew } from "../../assets/options";
import { List, Option } from "../FilterCategory/FilterCategory.styled";
import {
  BtnText,
  Button,
  Wrapper,
  MdArrowUpwardStyled,
  RotatedArrow,
} from "./Sorting.styled";

export const Sorting = ({
  isMobile,
  showSortingOptions,
  handleSortingClick,
  onSortingChange,
}) => {
  const [sorting, setSorting] = useState("Sorting");

  const handleSortingSelect = (index) => {
    const sort = sortingOptNew[index];
    onSortingChange(sort.value);
    setSorting(sort.valueName);
  };
  return (
    <Wrapper $isMobile={isMobile} $showSortingOptions={showSortingOptions}>
      <Button
        $showSortingOptions={showSortingOptions}
        $sorting={sorting}
        type="button"
        onClick={handleSortingClick}
      >
        <BtnText $showSortingOptions={showSortingOptions}>Sort by</BtnText>
        <LiaSlidersHSolid style={{ width: 24, height: 24 }} />
      </Button>
      {showSortingOptions && (
        <List>
          {sortingOptNew.map((item, index) => (
            <Option
              type="button"
              key={index}
              onClick={() => handleSortingSelect(index)}
            >
              {item.valueName}
              {index % 2 === 0 ? <MdArrowUpwardStyled /> : <RotatedArrow />}
            </Option>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

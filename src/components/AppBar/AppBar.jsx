import { AiOutlinePlus } from "react-icons/ai";
import { AddBtn, TextAddBtn, BtnWrapper, StyledWrapper } from "./AppBar.styled";
import { Link, useLocation } from "react-router-dom";
import { FilterCategory } from "../FilterCategory/FilterCategory";
import { useState } from "react";
import { Sorting } from "../Sorting/Sorting";

export const AppBar = ({ isMobile }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const location = useLocation();

  const onCategoryClick = () => {
    setShowCategory((prevState) => !prevState);
    setShowSortingOptions(false);
  };

  const onSortingClick = () => {
    setShowSortingOptions((prevState) => !prevState);
    setShowCategory(false);
  };

  return (
    <>
      <BtnWrapper>
        <StyledWrapper>
          <FilterCategory
            isMobile={isMobile}
            showCategory={showCategory}
            handleCategoryClick={onCategoryClick}
          />
          <Sorting
            isMobile={isMobile}
            showSortingOptions={showSortingOptions}
            handleSortingClick={onSortingClick}
          />
        </StyledWrapper>

        <Link to="/create" state={{ from: location }}>
          <AddBtn>
            <AiOutlinePlus style={{ width: 24, height: 24 }} />
            <TextAddBtn>{!isMobile && " Add new event"}</TextAddBtn>
          </AddBtn>
        </Link>
      </BtnWrapper>
    </>
  );
};

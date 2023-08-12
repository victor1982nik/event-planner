import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useMedia } from "react-use";
import { AiOutlinePlus } from "react-icons/ai";
import { theme } from "../../theme";
import { Sorting } from "../Sorting/Sorting";
import {
  TextAddBtn,
  BtnWrapper,
  StyledWrapper,
  NavLink,
} from "./AppBar.styled";
import { FilterCategory } from "../FilterCategory/FilterCategory";

export const AppBar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const location = useLocation();
  const isMobile = useMedia(theme.breakpoints.mobile.media);

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
            $isMobile={isMobile}
            $showCategory={showCategory}
            handleCategoryClick={onCategoryClick}
          />
          <Sorting
            $isMobile={isMobile}
            $showSortingOptions={showSortingOptions}
            handleSortingClick={onSortingClick}
          />
        </StyledWrapper>

        <NavLink to="/create" state={{ from: location }}>
          <AiOutlinePlus style={{ width: 24, height: 24 }} />
          <TextAddBtn>{!isMobile && " Add new event"}</TextAddBtn>
        </NavLink>
      </BtnWrapper>
    </>
  );
};

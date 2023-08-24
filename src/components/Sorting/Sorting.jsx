import { sortingOpt } from "../../assets/options";
import { LiaSlidersHSolid } from "react-icons/lia";
import { MdArrowUpward } from "react-icons/md";

import { List, Option } from "../FilterCategory/FilterCategory.styled";
import { BtnText, Button, Wrapper } from "./Sorting.styled";

export const Sorting = ({
  isMobile,
  showSortingOptions,
  handleSortingClick,
}) => {
  return (
    <Wrapper $isMobile={isMobile} $showSortingOptions={showSortingOptions}>
      <Button
        $showSortingOptions={showSortingOptions}
        type="button"
        onClick={handleSortingClick}
      >
        <BtnText $showSortingOptions={showSortingOptions}>Sort by</BtnText>
        <LiaSlidersHSolid style={{ width: 24, height: 24 }} />
      </Button>
      {showSortingOptions && (
        <List>
          {sortingOpt.map((item, index) => (
            <Option type="button" key={index}>
              {item}
              <MdArrowUpward style={{ width: 18, height: 18 }} />
            </Option>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

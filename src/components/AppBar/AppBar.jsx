import { CiFilter } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../Button/Button";
import { AddBtn, TextAddBtn, BtnWrapper } from "./AppBar.styled";

export const AppBar = ({ isMobile }) => {
  return (
    <>
      <BtnWrapper>
        <Button color="black" background="white">
          {!isMobile ? "Category " : ""}
          <CiFilter />
        </Button>
        <Button color="black" background="white">
          {!isMobile ? "Sort by " : ""}
          <LiaSlidersHSolid />
        </Button>
        <AddBtn>
          <AiOutlinePlus style={{ width: 24, height: 24 }} />
          <TextAddBtn>{!isMobile && " Add new event"}</TextAddBtn>
        </AddBtn>
      </BtnWrapper>
    </>
  );
};

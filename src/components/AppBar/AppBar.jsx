import { CiFilter } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";

export const AppBar = () => {
  return (
    <>
      <button>
        Sort by category <CiFilter />
      </button>
      <button>
        Sort by name <LiaSlidersHSolid />
      </button>
      <button>add event</button>
    </>
  );
};

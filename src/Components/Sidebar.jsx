import { Stack } from "@mui/system";
import React, { useState } from "react";
import { categories } from "../Utils/Constants";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Stack sx={{ flexDirection: { md: "column" } }}>
      {categories.map((category, idx) => {
        return (
          <button
            className={`category-btn  ${
              idx === activeIndex ? "active-btn" : ""
            }`}
            key={category.name}
            style={{ background: "#000", color: "white" }}
            onClick={() => {
              setSelectedCategory(category.name);
              setActiveIndex(idx);
            }}
          >
            <span
              style={{
                color: category.name === selectedCategory ? "white" : "red",
              }}
            >
              {" "}
              {category.icon}{" "}
            </span>
            <span> {category.name}</span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;

import React from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../../../Atom/atom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { fontFamily } from "../IconBar/datas";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function FontFamily() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("Arial");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleFontFamilyChange(family) {
    console.log(family);
    document.execCommand("fontName", "", family);
    setSelected(family);

    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        sx={{
          color: "black",
          fontFamily: selected,
          textTransform: "none",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selected}
        <ArrowDropDownOutlinedIcon />
      </Button>
      <Menu
        onChange={handleFontFamilyChange}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex" }}
      >
        {fontFamily.map((ele) => (
          <MenuItem
            onClick={() => handleFontFamilyChange(ele)}
            sx={{
              fontFamily: ele,
              width: "15rem",
            }}
          >
            {ele}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

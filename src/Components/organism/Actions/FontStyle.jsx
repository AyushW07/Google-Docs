import React from "react";
import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { fontStyle } from "../IconBar/datas";
import { atomInputRef } from "../../../Atom/atom";
import { useRecoilValue } from "recoil";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

function FontStyle() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("Normal Text");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleFontStyleChange(tag, text) {
    document.execCommand("formatBlock", "", tag);
    setSelected(text);

    setAnchorEl(null);
  }

  return (
    <div style={{ display: "flex" }}>
      <Button
        sx={{
          width: "8rem",
          color: "black",
          border: "1px solid black",
          textTransform: "none",
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selected}
        <ArrowDropDownCircleOutlinedIcon />
      </Button>
      <Menu
        onChange={handleFontStyleChange}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", border: "1px solid" }}
      >
        {fontStyle.map((ele) => (
          <MenuItem
            onClick={() => handleFontStyleChange(ele.tag, ele.text)}
            sx={{
              width: "10rem",
            }}
          >
            {ele.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default FontStyle;

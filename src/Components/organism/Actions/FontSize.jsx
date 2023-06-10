import React from "react";
import styles from "../Menus/Menus.module.css";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../../../Atom/atom";
import { fontSize } from "../IconBar/datas";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default function FontSize() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(6);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleFontSizeChange(fontSize) {
    console.log(fontSize);
    document.execCommand("fontSize", "", fontSize);
    setSelected(fontSize);
    setAnchorEl(null);
  }

  return (
    <div className={styles.fontSizeMainDiv} style={{ display: "flex" }}>
      <Button
        sx={{
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
      </Button>
      <Menu
        onChange={handleFontSizeChange}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex", border: "1px solid" }}
      >
        {fontSize.map((ele) => (
          <MenuItem
            onClick={() => handleFontSizeChange(ele)}
            sx={{
              width: "5rem",
            }}
          >
            {ele}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

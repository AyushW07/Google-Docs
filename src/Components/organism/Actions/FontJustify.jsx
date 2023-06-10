import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BiAlignLeft, BiAlignRight } from "react-icons/bi";
import {
  MdOutlineFormatAlignCenter,
  MdFormatAlignJustify,
} from "react-icons/md";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../../../Atom/atom";

export default function FontJustify() {
  const inputRef = useRecoilValue(atomInputRef);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(<BiAlignLeft />);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (icon) => {
    setAnchorEl(null);
    setSelected(icon);
  };
  function handleLeftAlign(icon) {
    document.execCommand("justifyLeft");
    handleClose(icon);
  }
  function handleCenterAlign(icon) {
    document.execCommand("justifyCenter");
    handleClose(icon);
  }
  function handleRightAlign(icon) {
    document.execCommand("justifyRight");
    handleClose(icon);
  }
  function handleFullAlign(icon) {
    document.execCommand("justifyFull");
    handleClose(icon);
  }
  return (
    <div>
      <Button
        sx={{ color: "black" }}
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
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(selected)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: "flex" }}
      >
        <MenuItem
          sx={{
            width: "7rem",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <BiAlignLeft
            fontSize="1rem"
            onClick={() => handleLeftAlign(<BiAlignLeft fontSize="1rem" />)}
          />
          &nbsp;
          <MdOutlineFormatAlignCenter
            fontSize="1rem"
            onClick={() =>
              handleCenterAlign(<MdOutlineFormatAlignCenter fontSize="1rem" />)
            }
          />
          &nbsp;
          <BiAlignRight
            fontSize="1rem"
            onClick={() => handleRightAlign(<BiAlignRight fontSize="1rem" />)}
          />
          &nbsp;
          <MdFormatAlignJustify
            fontSize="1rem"
            onClick={() =>
              handleFullAlign(<MdFormatAlignJustify fontSize="1rem" />)
            }
          />
        </MenuItem>
      </Menu>
    </div>
  );
}

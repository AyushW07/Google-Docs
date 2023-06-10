import React, { useRef, useState } from "react";
import styles from "./Menus.module.css";
import {
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import SmartButtonOutlinedIcon from "@mui/icons-material/SmartButtonOutlined";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

function InsertMenu() {
  const [open, setOpen] = useState(false);
  const imageRef = useRef(null);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleInputImage() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    if (event.target.files[0]) {
      let imgUrl = URL.createObjectURL(event.target.files[0]);
      let img = document.createElement("img");

      img.style.maxWidth = "50%";
      img.style.maxHeight = "50%";

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    }
    handleClose(" ");
  }

  return (
    <div>
      <Stack direction={"row"} spacing={2}>
        <div>
          <button
            className={styles.menubtn}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Insert
          </button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      sx={{ width: "20rem" }}
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                    >
                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleInputImage}
                      >
                        <ImageOutlinedIcon fontSize="small" />
                        &nbsp; Image
                        <input
                          onChange={handleImageChange}
                          ref={imageRef}
                          accept="image/*"
                          type="file"
                          hidden
                        />
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <TableChartOutlinedIcon fontSize="small" />
                        &nbsp; Table
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <PaletteOutlinedIcon fontSize="small" />
                        &nbsp; Drawing
                      </MenuItem>

                      <Divider />

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <InsertChartOutlinedRoundedIcon fontSize="small" />
                        &nbsp; Chart
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <HorizontalRuleOutlinedIcon fontSize="small" />
                        &nbsp; Horizontal Line
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <EmojiEmotionsOutlinedIcon fontSize="small" />
                        &nbsp; Emoji
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <SmartButtonOutlinedIcon fontSize="small" />
                        &nbsp; Smart Chips
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <ArrowDropDownCircleOutlinedIcon fontSize="small" />
                        &nbsp; DropDown
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </div>
  );
}

export default InsertMenu;

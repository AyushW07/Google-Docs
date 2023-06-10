import React, { useRef, useState } from "react";
import styles from "./Menus.module.css";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BrowserUpdatedOutlinedIcon from "@mui/icons-material/BrowserUpdatedOutlined";

function HelpMenu() {
  const [open, setOpen] = useState(false);
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
            Help
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
                        onClick={handleClose}
                      >
                        <HelpOutlineOutlinedIcon fontSize="small" />
                        &nbsp; Help
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <SchoolOutlinedIcon fontSize="small" />
                        &nbsp; Training
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <BrowserUpdatedOutlinedIcon fontSize="small" />
                        &nbsp; Updates
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

export default HelpMenu;

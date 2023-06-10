import React, { useState } from "react";
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
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";

function ExtensionsMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  const AddOnIcon = "https://www.gstatic.com/script/apps_script_1x_48dp.png";

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
            Extensions
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
                        <PlaylistAddOutlinedIcon fontSize="small" />
                        &nbsp; Add-ons
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

export default ExtensionsMenu;

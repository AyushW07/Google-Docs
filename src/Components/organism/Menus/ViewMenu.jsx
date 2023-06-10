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
import { useRecoilState } from "recoil";
import { showRuler } from "../../../Atom/atom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

function ViewMenu() {
  const [open, setOpen] = useState(false);
  const [rulerVisibility, setRulerVisibility] = useRecoilState(showRuler);
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

  function handleRuler() {
    setRulerVisibility(!rulerVisibility);
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
            View
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
                        <CreateOutlinedIcon fontSize="small" />
                        &nbsp; Mode
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <DoneOutlinedIcon fontSize="small" />
                        &nbsp; Show Print Layout
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleRuler}
                      >
                        <DoneOutlinedIcon fontSize="small" />
                        &nbsp; Show Ruler
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <DoneOutlinedIcon fontSize="small" />
                        &nbsp; Show Outline
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

export default ViewMenu;

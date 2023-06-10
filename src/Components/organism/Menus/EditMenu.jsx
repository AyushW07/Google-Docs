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
import { atomInputRef } from "../../../Atom/atom";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ContentPasteOutlinedIcon from "@mui/icons-material/ContentPasteOutlined";
import { useRecoilValue } from "recoil";

function EditMenu() {
  const inputRef = useRecoilValue(atomInputRef);
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

  function handleAction(action) {
    document.execCommand(action);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
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
            Edit
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
                      <MenuItem sx={{ fontSize: "small" }}>
                        <UndoOutlinedIcon fontSize="small" />
                        &nbsp; Undo
                      </MenuItem>

                      <MenuItem sx={{ fontSize: "small" }}>
                        <RedoOutlinedIcon fontSize="small" />
                        &nbsp; Redo
                      </MenuItem>

                      <Divider />

                      <MenuItem sx={{ fontSize: "small" }}>
                        <ContentCutOutlinedIcon fontSize="small" />
                        &nbsp; Cut
                      </MenuItem>

                      <MenuItem sx={{ fontSize: "small" }}>
                        <ContentCopyOutlinedIcon fontSize="small" />
                        &nbsp; Copy
                      </MenuItem>

                      <MenuItem sx={{ fontSize: "small" }}>
                        <ContentPasteOutlinedIcon fontSize="small" />
                        &nbsp; Paste
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

export default EditMenu;

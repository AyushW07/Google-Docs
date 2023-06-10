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
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import AccessibilityNewOutlinedIcon from "@mui/icons-material/AccessibilityNewOutlined";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";

function ToolsMenu() {
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
            Tools
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
                        <SpellcheckOutlinedIcon fontSize="small" />
                        &nbsp; Spelling & Grammar
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <TextSnippetOutlinedIcon fontSize="small" />
                        &nbsp; Word Count
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <ImportContactsOutlinedIcon fontSize="small" />
                        &nbsp; Dictionary
                      </MenuItem>

                      <Divider />

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <TranslateOutlinedIcon fontSize="small" />
                        &nbsp; Translate document
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <KeyboardVoiceOutlinedIcon fontSize="small" />
                        &nbsp; Voice Typing
                      </MenuItem>

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={handleClose}
                      >
                        <AccessibilityNewOutlinedIcon fontSize="small" />
                        &nbsp; Accessibility
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

export default ToolsMenu;

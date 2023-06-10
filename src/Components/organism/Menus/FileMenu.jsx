import React, { useRef, useState } from "react";
import styles from "./Menus.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomInputRef, atomFileName } from "../../../Atom/atom";
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
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";

function FileMenu() {
  const [open, setOpen] = useState(false);
  const inputRef = useRecoilValue(atomInputRef);
  const [fileNameRef, setFileNameRef] = useRecoilState(atomFileName);
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

  async function downloadPdf() {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    const sheetContent = inputRef.current;
    const canvas = await html2canvas(sheetContent);
    const imageData = canvas.toDataURL("image/png", 1.0);
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${fileNameRef}.pdf`);
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
            File
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
                        <ArticleOutlinedIcon fontSize="small" />
                        &nbsp; New
                      </MenuItem>

                      <MenuItem sx={{ fontSize: "small" }}>
                        <FolderOpenOutlinedIcon fontSize="small" />
                        &nbsp; Open
                      </MenuItem>

                      <MenuItem sx={{ fontSize: "small" }}>
                        <FileCopyOutlinedIcon fontSize="small" />
                        &nbsp; Make a Copy
                      </MenuItem>

                      <Divider />

                      <MenuItem
                        sx={{ fontSize: "small" }}
                        onClick={downloadPdf}
                      >
                        <FileDownloadOutlinedIcon fontSize="small" />
                        &nbsp; Download
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

export default FileMenu;

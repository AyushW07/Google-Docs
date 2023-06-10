import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { atomFileName } from "../../../Atom/atom";
import styles from "./MenuBar.module.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FileMenu from "../Menus/FileMenu";
import EditMenu from "../Menus/EditMenu";
import ViewMenu from "../Menus/ViewMenu";
import InsertMenu from "../Menus/InsertMenu";
import FormatMenu from "../Menus/FormatMenu";
import ToolsMenu from "../Menus/ToolsMenu";
import ExtensionsMenu from "../Menus/ExtensionsMenu";
import HelpMenu from "../Menus/HelpMenu";

function MenuBar() {
  const [fileName, setFileName] = useRecoilState(atomFileName);
  const [isFav, setIsFav] = useState(false);

  return (
    <div className={styles.mainHead}>
      <div className={styles.wrapper}>
        <img className={styles.docIcon} src="/docIcon.png" />
        <div className={styles.inner_wrapper}>
          <div className={styles.header}>
            <div className={styles.leftSection}>
              <input
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />{" "}
              &nbsp;
            </div>
            <div className={styles.rightSection}>
              <InsertCommentOutlinedIcon fontSize="medium" />
              <DuoOutlinedIcon />
              <Button
                sx={{
                  borderRadius: "30px",
                  bgcolor: "#c2e7ff",
                  color: "black",
                  textTransform: "none",
                }}
                variant="contained"
                startIcon={<LockOutlinedIcon />}
              >
                Share
              </Button>
              <img
                src="https://images.pexels.com/photos/3494648/pexels-photo-3494648.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Photo"
              />
            </div>
          </div>
          <div className={styles.menu}>
            <FileMenu />
            <EditMenu />
            <ViewMenu />
            <InsertMenu />
            <FormatMenu />
            <ToolsMenu />
            <ExtensionsMenu />
            <HelpMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;

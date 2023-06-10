import React, { useRef, useState } from "react";
import styles from "./FunctionMenus.module.css";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineFormatClear, MdSpellcheck } from "react-icons/md";
import { TfiPaintRoller } from "react-icons/tfi";
import { BsTypeBold } from "react-icons/bs";
import { BiItalic } from "react-icons/bi";
import { ImUnderline } from "react-icons/im";
import { MdOutlineFormatColorText } from "react-icons/md";
import { FaHighlighter } from "react-icons/fa";
import { BiCommentAdd } from "react-icons/bi";
import { AiOutlineStrikethrough } from "react-icons/ai";
import { MdFormatLineSpacing } from "react-icons/md";
import { MdChecklist } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatIndentDecrease } from "react-icons/md";
import { MdFormatIndentIncrease } from "react-icons/md";
import { MdOutlineInsertPhoto } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Zoom from "../Actions/Zoom";
import FontStyle from "../Actions/FontStyle";
import FontFamily from "../Actions/FontFamily";
import FontSize from "../Actions/FontSize";
import FontJustify from "../Actions/FontJustify";
import { useRecoilValue } from "recoil";
import { atomInputRef } from "../../../Atom/atom";
import { atomFileName } from "../../../Atom/atom";

function FunctionMenus() {
  const inputRef = useRecoilValue(atomInputRef);
  const fileName = useRecoilValue(atomFileName);
  const imageRef = useRef(null);
  const colorRef = useRef(null);
  const bcgColorRef = useRef(null);
  const [color, setColor] = useState("black");

  const [zoom, setZoom] = useState("");
  const handleChange = (event) => {
    setZoom(event.target.value);
  };

  function handleBold() {
    document.execCommand("bold");
  }

  function handleItalic() {
    document.execCommand("italic");
  }

  function handleUnderLine() {
    document.execCommand("underline");
  }

  function handleColorClick() {
    colorRef.current.click();
  }

  function handleColorChange(event) {
    document.execCommand("foreColor", "", event.target.value);
    setColor(event.target.value);
  }

  function handleBcgColorClick() {
    bcgColorRef.current.click();
  }

  function handleBcgColorChange(event) {
    document.execCommand("backColor", "", event.target.value);
  }

  function handleUndo() {
    document.execCommand("undo");
  }

  function handleRedo() {
    document.execCommand("redo");
  }

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
  }
  async function downloadPDF() {
    const sheetContent = inputRef.current;
    const canvas = await html2canvas(sheetContent);
    const imageData = canvas.toDataURL("image/png");
    const pdfDoc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false,
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST");
    pdfDoc.save(`${fileName}.pdf`);
    console.log(inputRef.current.innerHTML);
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftpart}>
          <button onClick={handleUndo}>
            <BiUndo style={{ fontSize: "1.2rem" }} />
          </button>
          <button onClick={handleRedo}>
            <BiRedo style={{ fontSize: "1.2rem" }} />
          </button>
          <button>
            <AiOutlinePrinter style={{ fontSize: "1.2rem" }} />
          </button>
          <button>
            <MdSpellcheck style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <TfiPaintRoller style={{ fontSize: "1rem" }} />
          </button>
        </div>
        <button onClick={downloadPDF} style={{ padding: "0.1px" }}>
          <PictureAsPdfIcon />
        </button>
        <div className={styles.zoom}>
          <form action="/action_page.php">
            <div style={{ display: "flex", width: "20rem" }}>
              <Zoom />
              <FontStyle />
              <FontFamily />
              <FontSize />
              {/* <FontJustify /> */}
            </div>
          </form>
        </div>
        <div className={styles.textType}>
          <button onClick={handleBold}>
            <BsTypeBold style={{ fontSize: "1rem" }} />
          </button>
          <button onClick={handleItalic}>
            <BiItalic style={{ fontSize: "1rem" }} />
          </button>
          <button onClick={handleUnderLine}>
            <ImUnderline style={{ fontSize: "1rem" }} />
          </button>
          <button onClick={handleColorClick}>
            <MdOutlineFormatColorText
              style={{ color: color, fontSize: "1rem" }}
            />
          </button>
          <input
            id={styles.inputColor}
            type="color"
            ref={colorRef}
            onChange={handleColorChange}
          />
          <button onClick={handleBcgColorClick}>
            <FaHighlighter style={{ fontSize: "1rem" }} />
          </button>
          <input
            id={styles.inputColor}
            type="color"
            ref={bcgColorRef}
            onChange={handleBcgColorChange}
          />
        </div>
        <div className={styles.boxD}>
          <button>
            <BiCommentAdd style={{ fontSize: "1rem" }} />
          </button>
          <button onClick={handleInputImage}>
            <MdOutlineInsertPhoto style={{ fontSize: "1rem" }} />
          </button>
          <input
            onChange={handleImageChange}
            ref={imageRef}
            accept="image/*"
            type="file"
            hidden
          />
        </div>
        <div className={styles.boxE}>
          <FontJustify />
          <button>
            <MdFormatLineSpacing style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <MdChecklist style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <MdFormatListBulleted style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <MdFormatListNumbered style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <MdFormatIndentDecrease style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <MdFormatIndentIncrease style={{ fontSize: "1rem" }} />
          </button>
          <button>
            <MdOutlineFormatClear style={{ fontSize: "1rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FunctionMenus;

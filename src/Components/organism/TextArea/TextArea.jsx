import React, { useRef } from "react";
import style from "./TextArea.module.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { atomFileName, atomInputRef, showRuler } from "../../../Atom/atom";
import { useEffect } from "react";

function TextArea() {
  const divRef = useRef(null);
  const [inputref, setInputRef] = useRecoilState(atomInputRef);
  const fileName = useRecoilValue(atomFileName);
  const rulerVisibility = useRecoilValue(showRuler);
  useEffect(() => {
    setInputRef(divRef);
  });

  return (
    <>
      <div
        className={
          rulerVisibility
            ? style.wholeAreaWithRuler
            : style.wholeAreaWithoutRuler
        }
      >
        <div
          id="textPage"
          ref={divRef}
          contentEditable={true}
          className={style.txtArea}
        ></div>
      </div>
    </>
  );
}

export default TextArea;

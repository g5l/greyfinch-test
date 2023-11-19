import React from "react";
import {Gif} from "@/types";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./styles.css";

export const Image = (props: Gif) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <img src={props.url} alt={props.category} className="image" onClick={() => setOpen(true)}/>
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: props.url,
              width: 3840,
              height: 2560
            },
          ]}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
          }}
        />
      )}
    </>
  );
};
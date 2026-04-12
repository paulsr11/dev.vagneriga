"use client";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import type { WPSlide } from "@/types/wp";

interface LightboxWrapperProps {
  open: boolean;
  close: () => void;
  index: number;
  slides: WPSlide[];
}

export default function LightboxWrapper({ open, close, index, slides }: LightboxWrapperProps) {
  return (
    <Lightbox
      open={open}
      close={close}
      index={index}
      slides={slides}
      plugins={[Video, Zoom, Fullscreen]}
    />
  );
}

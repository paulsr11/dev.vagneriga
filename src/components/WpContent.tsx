"use client";

import React, { useState, useEffect, useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";

interface WpContentProps {
  html: string;
}

export default function WpContent({ html }: WpContentProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Find all images and videos in the content
    const images = Array.from(containerRef.current.querySelectorAll("img"));
    const videoTags = Array.from(containerRef.current.querySelectorAll("video"));
    const iframes = Array.from(containerRef.current.querySelectorAll("iframe"));
    
    // Create slides for lightbox
    const imageSlides = images.map((img) => ({
      type: "image" as const,
      src: img.getAttribute("src") || "",
      alt: img.getAttribute("alt") || "",
    })).filter(slide => slide.src !== "" && !slide.src.includes("data:image"));
    
    const videoSlides = videoTags.map((v) => ({
      type: "video" as const,
      sources: [
        {
          src: v.getAttribute("src") || v.querySelector("source")?.getAttribute("src") || "",
          type: "video/mp4",
        },
      ],
    })).filter(v => v.sources[0].src !== "");

    const iframeSlides = iframes.map((f) => ({
      type: "video" as const,
      sources: [
        {
          src: f.getAttribute("src") || "",
          type: "video/mp4",
        },
      ],
    })).filter(v => v.sources[0].src !== "");
    
    const allSlides = [...imageSlides, ...videoSlides, ...iframeSlides];
    setSlides(allSlides);

    // Add click listeners to images and videos
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Image click
      if (target.tagName === "IMG") {
        const src = target.getAttribute("src");
        const foundIndex = allSlides.findIndex((slide) => slide.type === "image" && slide.src === src);
        if (foundIndex !== -1) {
          e.preventDefault();
          setIndex(foundIndex);
          setOpen(true);
        }
      }
      
      // Check if clicked inside a link that wraps an image
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href");
        if (href && (href.match(/\.(jpeg|jpg|gif|png|webp)$/i) || href.includes("youtube.com") || href.includes("vimeo.com"))) {
          const foundIndex = allSlides.findIndex((slide) => 
            (slide.type === "image" && slide.src === href) || 
            (slide.type === "video" && slide.sources[0].src === href)
          );
          if (foundIndex !== -1) {
            e.preventDefault();
            setIndex(foundIndex);
            setOpen(true);
          }
        }
      }
    };

    containerRef.current.addEventListener("click", handleClick);
    return () => {
      containerRef.current?.removeEventListener("click", handleClick);
    };
  }, [html]);

  return (
    <>
      <div
        ref={containerRef}
        className="wp-content break-words"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Video, Zoom, Fullscreen]}
      />
    </>
  );
}

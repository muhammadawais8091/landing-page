'use-client'
import { VideoInterface } from "@/interfaceTypes";
import { VideoPauseIconSvg, VideoPlayIconSvg } from "@/svg";
import { FC, useCallback, useEffect, useRef, useState } from "react";

export const VideoBlock: FC<VideoInterface> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  const handleViewChange = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      for (let entry of entries) {
        if (entry.intersectionRatio > 0.5) {
          if (videoRef.current) {
            // Note: if the user has not interacted with the page, videos that is not muted will not be allowed to play
            // and will throw out an error. Won't crash the app though.

            // Note2: if you want to pause all other videos, the following line would do so.
            document.querySelectorAll("video").forEach((video) => {
              video.pause();
            });

            // * this is not the best practice if there are some video elements that should not be affected.
            // * Modify the query to select only the videos that you want to pause.

            await videoRef.current.play();
            setIsPlaying(!isPlaying);
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      }
    },

    // eslint-disable-next-line 
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleViewChange, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    });

    setObserver(observer);
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [handleViewChange]);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef?.current?.pause()
    } else {
      videoRef?.current?.play()
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => {
    togglePlay()
  };

  return (
    <div className="relative landing-page-video-wrap">
      <button onClick={togglePlay} className="landing-page-video-play absolute cursor-pointer z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {isPlaying ? <VideoPauseIconSvg /> : <VideoPlayIconSvg />}
      </button>

      <video ref={videoRef} src={url} controls={false} playsInline autoPlay muted onEnded={handleVideoEnded} />
    </div>
  );
}


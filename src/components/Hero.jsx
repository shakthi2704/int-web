import { useEffect, useRef, useState } from "react"

const Hero = () => {
  const [current, setCurrent] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideo, setLoadedVideo] = useState(0)

  const totalVideos = 4
  const nextVideoRef = useRef(null)

  const handleMiniVideoClick = () => {}

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
          <div>MiniVideoPlayer</div>
        </div>
      </div>
    </div>
  )
}

export default Hero

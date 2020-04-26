//credits to https://dev.to/loribbaum/my-first-custom-hook-in-react-17np

import React, { useState } from "react"
export default function useResizer() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== `undefined` ? window.innerWidth < 746 : false
  )

  function handleSizeChange() {
    return setIsMobile(window.innerWidth < 746)
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleSizeChange)

    return () => {
      window.removeEventListener("resize", handleSizeChange)
    }
  }, [isMobile])

  return isMobile
}

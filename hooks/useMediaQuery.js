// from: https://github.com/Thienguen/website/blob/main/src/hooks/useMediaQuery.ts

import { useCallback, useEffect, useState } from "react";

/**
 *
 * @param {number} width
 * @param {boolean} max
 * @returns
 */

export const useMediaQuery = (width, max = false) => {
  // Initialized to null to indicate a "loading" state
  const [targetReached, setTargetReached] =
    (useState < null) | (boolean > null);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    let media = window.matchMedia(`(min-width: ${width})`);

    if (max) {
      media = window.matchMedia(`(max-width: ${width})`);
    }
    media.addEventListener("change", (e) => updateTarget(e));

    // On component mount, we immediately check the media query's state
    if (media.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }

    return () => media.removeEventListener("change", updateTarget); // Fixed the removeEventListener
  }, [width, max, updateTarget]);

  return targetReached;
};

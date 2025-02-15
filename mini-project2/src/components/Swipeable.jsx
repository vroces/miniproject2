import { useEffect, useRef, forwardRef, useCallback } from "react";
import PropTypes from "prop-types";

const Swipeable = forwardRef(function Swipeable(props, ref) {
  const {
    children,
    minDistance = 20,
    maxDistance = Infinity,
    timeout = 500,
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown
  } = props;

  const instanceRef = useRef({
    el: null,
    touchStartedTime: null,
    x: null,
    y: null,
    xDiff: null,
    yDiff: null
  });

  const handleTouchStart = useCallback(function handleTouchStart(e) {
    instanceRef.current.touchStartedTime = Date.now();
    instanceRef.current.x = e.touches[0].clientX;
    instanceRef.current.y = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(function handleTouchMove(e) {
    if (instanceRef.current.x && instanceRef.current.y) {
      instanceRef.current.xDiff = instanceRef.current.x - e.touches[0].clientX;
      instanceRef.current.yDiff = instanceRef.current.y - e.touches[0].clientY;
    }
  }, []);

  const handleTouchEnd = useCallback(
    function handleTouchEnd(e) {
      const xDiffAbs = Math.abs(instanceRef.current.xDiff);
      const yDiffAbs = Math.abs(instanceRef.current.yDiff);

      if (xDiffAbs > yDiffAbs && xDiffAbs >= minDistance && xDiffAbs <= maxDistance) {
        e.stopPropagation();
        if (instanceRef.current.xDiff > 0) {
          onSwipeLeft && onSwipeLeft();
        } else {
          onSwipeRight && onSwipeRight();
        }
      }
    },
    [minDistance, maxDistance, onSwipeLeft, onSwipeRight]
  );

  useEffect(() => {
    if (!instanceRef.current.el) return;
    const { el } = instanceRef.current;
    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchmove", handleTouchMove);
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  return children((el) => (instanceRef.current.el = el));
});

Swipeable.propTypes = {
  children: PropTypes.func.isRequired,
  onSwipeLeft: PropTypes.func,
  onSwipeRight: PropTypes.func,
};

export default Swipeable;

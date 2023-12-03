import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FramerMotionProps {
  isVisible: boolean;
  delay?: number;
  duration?: number;
  children?: JSX.Element[] | JSX.Element;
}

export const SlideFromRight = ({
  isVisible,
  children,
  duration,
  delay = 0,
}: FramerMotionProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isVisible) {
      timeoutId = setTimeout(() => {
        setShouldRender(true);
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible, delay]);

  return (
    <AnimatePresence>
      {shouldRender && (
        <motion.div
          key="modal"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: duration ?? 1.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

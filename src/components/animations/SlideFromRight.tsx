import { AnimatePresence, motion } from "framer-motion";
interface FramerMotionProps {
  isVisible: boolean;
  children?: JSX.Element[] | JSX.Element;
}

export const SlideFromRight = ({ isVisible, children }: FramerMotionProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        key="modal"
        initial={{ x: 300, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

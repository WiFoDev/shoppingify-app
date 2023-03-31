import { motion } from "framer-motion";
import { type FC, type ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Backdrop: FC<BackdropProps> = ({ children }) => {
  return (
    <motion.div
      animate="visible"
      className="fixed inset-0 z-10 flex bg-black/50 backdrop-blur-sm sm:flex-row-reverse"
      initial="hidden"
      variants={backdrop}
    >
      {children}
    </motion.div>
  );
};

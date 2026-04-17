import React from 'react'
import { motion } from "framer-motion";
const CustomBadge = ({title}:any) => {
  return (
     <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary dark:border-white/10 bg-white/5  px-4 py-1 text-sm text-primary backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          {title}
        </motion.div>
  )
}

export default CustomBadge

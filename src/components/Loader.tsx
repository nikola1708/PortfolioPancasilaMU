import { motion } from 'motion/react';

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-neutral-200 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-neutral-900 rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-neutral-900 mb-2">Buka website ini di desktop untuk pengalaman terbaik</h2>
          <p className="text-neutral-500">Portfolio - Pendidikan Kewarganegaraan</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className="pt-16 pb-10 px-2 border-t-2 border-neutral-100" 
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto backdrop-blur-md shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Container teks utama */}
          <div className="mb-6 mt-2">
             {/* Menambah mb-2 agar tidak terlalu mepet dengan judul di bawahnya */}
              <p className="text-neutral-600 text-sm mb-8 font-medium"> owned by Nikola</p>
              <p className="text-neutral-900 font-bold text-lg">Pendidikan Kewarganegaraan - 2025</p>
          </div>
          
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Portfolio MKU. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
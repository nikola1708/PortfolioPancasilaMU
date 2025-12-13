import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6 shadow-lg"
            transition={{ duration: 0.5 }}
          >
          </motion.div>

          <h1 className="mb-6">Nikola's Portfolio Present:</h1>
          
         <div className="max-w-2xl mx-auto space-y-4">
  {/* Card 1 */}
  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg">
    <p className="text-neutral-300 mb-2">Sedikit tentang saya</p>
    <p className="text-neutral-390">
      Maria Nikola adalah mahasiswi informatika semester 3 (20245520009) yang mengikuti mata kuliah Pendidikan Kewarganegaraan - 2025.
    </p>
  </div>
  {/* Card 2 */}
  <div className="bg-white/20 backdrop-blur-md border border-white/90 rounded-xl p-6 shadow-lg">
    <p className="text-neutral-200 mb-2">Mengapa Portfolio Ini Dibuat?</p>
    <p className="text-neutral-390">
      Portfolio ini dibuat sebagai tugas ujian akhir semester mata kuliah, juga merupakan dokumentasi pembelajaran saya selama mengikuti mata kuliah Pendidikan Kewarganegaraan.
    </p>
  </div>
</div>

        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-neutral-300 rounded-full mx-auto relative"
            whileHover={{ borderColor: '#171717' }}
          >
            <motion.div
              className="w-1 h-2 bg-neutral-900 rounded-full absolute left-1/2 top-2 -translate-x-1/2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

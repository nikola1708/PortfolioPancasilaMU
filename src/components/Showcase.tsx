import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'motion/react';
import { X, Mic, FileText, Image, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const works = [
  {
    id: 1,
    type: 'podcast',
    title: 'Pengibaran Bendera One Piece, Bentuk Protes Masyarakat terhadap Pemerintah',
    subtitle: 'Narasumber: S.H. Ignatius Ali Susilo',
    description: 'Podcast ini membahas fenomena pengibaran bendera One Piece sebagai simbol protes sosial-politik di Indonesia dari pandangan seorang lulusan hukum.',
    technical: 'Platform: YouTube | Durasi: 45 menit | Format: Video Podcast',
    details: 'Video/podcast ini menampilkan wawancara mendalam dengan Ignatius Ali Susilo, Kepala Sekolah SMK Tiseta sekaligus lulusan hukum yang menaruh perhatian pada dinamika kewarganegaraan. Ia membahas fenomena penggunaan bendera One Piece sebagai simbol protes sosial-politik di Indonesia, terutama menjelang peringatan 17 Agustus. Percakapan menyoroti bagaimana bendera ini dipakai masyarakat sebagai bentuk ekspresi kekecewaan terhadap kondisi ekonomi, korupsi, pembatasan kebebasan berpendapat, serta ketidakefektifan komunikasi pemerintah.',
    youtubeLink: 'https://www.youtube.com/watch?v=7qTmR4CCNAI',
    icon: Mic
  },
  {
    id: 2,
    type: 'podcast',
    title: 'Pengibaran Bendera One Piece, Pemberontakan atau Ekspresi Kebebasan?',
    subtitle: 'Narasumber: Christian Winata',
    description: 'Podcast ini berisi tentang pandangan salah satu fans one piece terhadap isu pengibaran bendera one piece yang terjadi pada Agustus 2025 lalu.',
    technical: 'Platform: YouTube | Durasi: 20 menit | Format: Video Podcast',
    details: 'Video ini menampilkan wawancara informal dengan seorang mahasiswa penggemar berat anime One Piece yang membahas tren penggunaan bendera One Piece sebagai simbol protes dan ekspresi politik di Indonesia maupun luar negeri. Percakapan mengupas makna budaya, politik, dan simbolis dari bendera tersebut, kaitannya dengan tema-tema dalam anime, serta respons pemerintah terhadap isu ini.',
    youtubeLink: 'https://www.youtube.com/watch?v=xPt6hIX-rRE',
    icon: Mic
  },
  {
    id: 3,
    type: 'Proposal Penelitian',
    title: 'Pengibaran Benderan One Piece sebagai Bentuk Protes dan Kekecewaan Masyarakat terhadap Sistem Pemerintahan di Indonesia',
    subtitle: 'Proposal.',
    description: 'Proposal penelitian untuk mengkaji fenomena pengibaran bendera One Piece sebagai bentuk protes sosial-politik di Indonesia.',
    technical: 'Fokus utama dari proposal ini adalah memahami motivasi masyarakat dalam menggunakan simbol ini untuk mengekspresikan kekecewaan terhadap kondisi ekonomi, korupsi, pembatasan kebebasan berpendapat, dan ketidakefektifan komunikasi pemerintah. Metodologi yang diusulkan meliputi studi literatur, wawancara dengan narasumber kunci seperti Ignatius Ali Susilo, serta analisis media sosial untuk menangkap persepsi publik. ',
    details: 'Fokus utama dari proposal ini adalah memahami motivasi masyarakat dalam menggunakan simbol ini untuk mengekspresikan kekecewaan terhadap kondisi ekonomi, korupsi, pembatasan kebebasan berpendapat, dan ketidakefektifan komunikasi pemerintah. Metodologi yang diusulkan meliputi studi literatur, wawancara dengan narasumber kunci seperti Ignatius Ali Susilo, serta analisis media sosial untuk menangkap persepsi publik.',
    pdfLink: '/files/Proposal PKN.pdf',
    hideDescription: true,
    icon: FileText
  },
  {
    id: 4,
    type: 'Artikel Ilmiah',
    title: 'Pengibaran Bendera One Piece sebagai Bentuk Protes dan Kekecewaan Masyarakat terhadap Sistem Pemerintahan di Indonesia',
    subtitle: 'Artikel Ilmiah.',
    description: 'Kenapa fenomena pengibaran bendera One Piece menjadi simbol protes sosial-politik di Indonesia? Artikel ini mengkaji motivasi masyarakat dalam menggunakan simbol ini untuk mengekspresikan kekecewaan terhadap kondisi ekonomi, korupsi, pembatasan kebebasan berpendapat, dan ketidakefektifan komunikasi pemerintah. Metodologi yang digunakan meliputi studi literatur, wawancara dengan narasumber kunci seperti Ignatius Ali Susilo, serta analisis media sosial untuk menangkap persepsi publik.',
    technical: '',
    details: 'Fokus utama dari artikel ini adalah memahami motivasi masyarakat dalam menggunakan simbol ini untuk mengekspresikan kekecewaan terhadap kondisi ekonomi, korupsi, pembatasan kebebasan berpendapat, dan ketidakefektifan komunikasi pemerintah. Bedanya, metodologi yang digunakan adalah kuantitatif. Kami menanyakan dan menggali lebih dalam bagaimana pendapat masyarakat terhadap isu ini melalui survei daring yang disebarkan.',
    hideDescription: true,
    pdfLink: '/files/Artikel Ilmiah.pdf',
    icon: FileText
  },

];

export function Showcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [dragStartX, setDragStartX] = useState(0);

  const selectedItem = works.find(work => work.id === selectedWork);

  const handleDragStart = (_event: any, info: any) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const dragDistance = info.point.x - dragStartX;
    const threshold = 50;

    if (dragDistance > threshold) {
      goToPrevious();
    } else if (dragDistance < -threshold) {
      goToNext();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const totalCards = works.length;
    const angle = (360 / totalCards) * diff;
    const radius = 300;

    return {
      rotateY: angle,
      z: Math.cos((angle * Math.PI) / 180) * radius,
      x: Math.sin((angle * Math.PI) / 180) * radius,
      opacity: Math.abs(diff) > 2 ? 0 : Math.abs(diff) === 0 ? 1 : 0,
      scale: Math.abs(diff) === 0 ? 1 : 0.75
    };
  };

  return (
    <section id="showcase" className="relative py-20 bg-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/img/image.png')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="relative z-10 max-w-1xl mx-auto flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-1"
        >
          <h2 className="mb-2 font-bold">Showcase Karya</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Koleksi karya pilihan selama perkuliahan
          </p>
        </motion.div>

        {/* 3D Tube Carousel - Minimalist */}
        <div
          className="relative h-[500px] md:h-[600px] mb-9 translate-x-4 mr-4"
          style={{ perspective: '2000px' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {works.map((work, index) => {
              const style = getCardStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={work.id}
                  className="absolute"
                  style={{
                    transformStyle: 'preserve-3d',
                    opacity: style.opacity,
                  }}
                  animate={style}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 25
                  }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <motion.div
                    className={`w-[300px] md:w-[500px] h-[420px] md:h-[400px] rounded-2xl ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                      }`}
                    whileHover={isActive ? {} : { scale: 0.8 }}
                    onClick={() => isActive && setSelectedWork(work.id)}
                  >
                    <div className="w-full h-full border-2 border-neutral-800 bg-white rounded-2xl p-8 flex flex-col justify-between shadow-xl">
                      {/* Content */}
                      <div>
                        <motion.div
                          className="w-14 h-14 border-2 border-neutral-900 rounded-lg flex items-center justify-center mb-6"
                          transition={{ duration: 0.3 }}
                        >
                          <work.icon size={28} className="text-neutral-900" strokeWidth={2} />
                        </motion.div>

                        <p className="text-neutral-500 mb-2">{work.subtitle}</p>
                        <h3 className="text-neutral-900 mb-4">{work.title}</h3>
                        {!work.hideDescription && (
                          <p className="text-neutral-600 leading-relaxed">
                            {work.description}
                          </p>
                        )}
                      </div>

                      {/* Bottom Badge */}
                      <div className="flex items-center justify-between">
                        <div>
                          {isActive && (
                            <motion.div
                              className="border border-neutral-900 rounded-lg px-3 py-1 text-neutral-900 text-sm inline-block"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {work.type.toUpperCase()}
                            </motion.div>
                          )}
                        </div>
                        {isActive && work.youtubeLink && (
                          <motion.a
                            href={work.youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 border-2 border-neutral-900 rounded-lg flex items-center justify-center bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Play size={16} strokeWidth={2.5} fill="white" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-9 mb-4">
          <motion.button
            onClick={goToPrevious}
            className="w-10 h-10 border-2 border-neutral-900 rounded-lg flex items-center justify-center bg-white hover:bg-neutral-900 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            title="ArrowLeft untuk navigasi"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </motion.button>

          <div className="flex items-center gap-2">
            {works.map((work, index) => (
              <motion.button
                key={work.id}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all ${index === currentIndex
                    ? 'w-8 h-2 bg-neutral-900'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                  } rounded-full`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={goToNext}
            className="w-10 h-10 border-2 border-neutral-900 rounded-lg flex items-center justify-center bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            title="ArrowRight untuk navigasi"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </motion.button>
        </div>

        {/* Hint Text */}
        <motion.p
          className="text-center text-neutral-400 mt-3 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          gunakan ← → keyboard, atau klik untuk melihat detail
        </motion.p>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedWork && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white border-2 border-neutral-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="border-b-2 border-neutral-900 p-8 relative">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 border-2 border-neutral-900 rounded-lg flex items-center justify-center">
                      <selectedItem.icon size={28} className="text-neutral-900" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-neutral-500 mb-1">{selectedItem.subtitle}</p>
                      <h3 className="text-neutral-900">{selectedItem.title}</h3>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedWork(null)}
                    className="w-10 h-10 border-2 border-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} strokeWidth={2.5} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-neutral-500 mb-2 text-sm">Deskripsi</p>
                  <p className="text-neutral-700 leading-relaxed">{selectedItem.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-neutral-500 mb-2 text-sm">Detail Lengkap</p>
                  <p className="text-neutral-700 leading-relaxed">{selectedItem.details}</p>
                  
                  {selectedItem.youtubeLink && (
                    <>
                      <p className="text-neutral-500 mt-9 mb-2 text-sm">Link Youtube</p>
                      <a 
                        href={selectedItem.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-700 leading-relaxed hover:text-neutral-900 hover:underline transition-colors inline-block"
                      >
                        {selectedItem.youtubeLink}
                      </a>
                    </>
                  )}

                  {selectedItem.pdfLink && (
                    <>
                      <p className="text-neutral-500 mt-9 mb-2 text-sm">Download File</p>
                      <a
                        href={selectedItem.pdfLink}
                        download
                        className="inline-flex items-center px-4 py-2 border-2 border-neutral-900 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium text-sm"
                      >
                        Download PDF
                      </a>
                    </>
                  )}
                </motion.div>

                {!selectedItem.hideDescription && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border border-neutral-200 rounded-xl p-6 bg-neutral-50"
                  >
                    <p className="text-neutral-500 mb-2 text-sm">Keterangan Teknis</p>
                    <p className="text-neutral-700 leading-relaxed">{selectedItem.technical}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

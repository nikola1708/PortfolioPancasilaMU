import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, BookOpen, MessageSquare, FileText, Lightbulb } from 'lucide-react';

const modules = [
  {
    week: 1,
    pertemuan: 1,
    title: 'Pengantar Pendidikan Kewarganegaraan',
    question: 'Mengapa Perlu Pendidikan Kewarganegaraan?',
    summary: 'Modul ini membahas pentingnya Pendidikan Kewarganegaraan. Materi mencakup pengertian kewarganegaraan, kompetensi dasar mata kuliah, materi pertemuan sampai akhir mata kuliah ini, dan harapan dari dosen dan mahasiswa.',
    evidence: 'Menghadiri dan berpartisipasi dalam kelas dan membaca materi',
    reflection: 'Melalui pembelajaran minggu ini, saya memahami bahwa Pendidikan Kewarganegaraan bukan sekadar mata kuliah formal, tetapi fondasi penting dalam membentuk karakter warga negara yang bertanggung jawab. Saya menyadari bahwa menjadi warga negara yang baik memerlukan pemahaman mendalam tentang hak, kewajiban, dan peran aktif dalam pembangunan nasional. Pembelajaran ini membuka wawasan saya tentang pentingnya partisipasi dalam kehidupan berbangsa dan bernegara, serta menumbuhkan rasa cinta tanah air yang lebih kuat.'
  },
  {
    week: 2,
    pertemuan: 2,
    title: 'Sejarah Identitas Nasional',
    question: "Bagaimana proses pembentukan identitas nasional Indonesia dari masa pra-kemerdekaan hingga era modern, dan apa peran tokoh-tokoh nasional dalam merumuskan dasar negara?",
    summary: 'Modul ini membahas sejarah perkembangan identitas nasional Indonesia dari masa pra-kemerdekaan hingga era modern saat ini. Dijelaskan juga dua teori dari bangsa Renan dan bangsa Anderson tentang pembentukan identitas nasional.',
    evidence: 'Menghadiri kelas, membaca dan memahami isi materi modul',
    reflection: 'Pembelajaran minggu ini memberikan wawasan mendalam tentang perjalanan panjang pembentukan identitas nasional Indonesia. Saya memahami bahwa identitas nasional bukanlah sesuatu yang statis, melainkan hasil dari proses sejarah yang kompleks, melibatkan perjuangan, pengorbanan, dan kontribusi berbagai tokoh nasional. Teori-teori yang dipelajari membantu saya melihat bagaimana bangsa ini dibentuk melalui interaksi sosial, budaya, dan politik. Saya semakin menyadari pentingnya menjaga dan merawat identitas nasional sebagai fondasi persatuan dan kesatuan di tengah keberagaman Indonesia.'
  },
  {
    week: 3,
    pertemuan: 3,
    title: 'Rakyat, Hukum, Negara relasi Kekuasaan',
    question: 'Mengapa hubungan negara dan rakyat harus didasari melalui kontrak? Apa yang terjadi jika suatu wilayah tidak diatur dalam lingkup tata negara?',
    summary: 'Materi ini membahas dinamika hubungan tripartit antara rakyat, hukum, dan negara, dengan fokus utama pada teori kontrak sosial sebagai transisi dari keadaan alamiah (state of nature) menuju masyarakat sipil yang teratur. Dijelaskan bahwa kesepakatan bersama menjadi landasan legitimasi kekuasaan di mana rakyat menyerahkan sebagian hak alamiahnya demi memperoleh kepastian hukum dan perlindungan dari negara, serta diuraikan pula unsur-unsur konstitutif pembentuk negara dan berbagai sumber legitimasi kekuasaan.',
    evidence: 'Menghadiri kelas, membaca dan memahami isi materi modul, dan berdiskusi dalam kelas dengan dosen dan teman-teman',
    reflection: 'Dari materi ini saya belajar bahwa kontrak sosial bukan hanya konsep teoretis, tetapi mekanisme penting yang memastikan hubungan negara dan rakyat berjalan secara sah dan saling menguntungkan. Pemahaman ini membuat saya melihat bahwa tanpa adanya kontrak dan tata negara yang jelas, kehidupan masyarakat mudah kembali pada kondisi tanpa aturan dan rentan kekacauan. Hal ini menguatkan pandangan saya bahwa keberadaan negara, hukum, dan kesepakatan kolektif antara rakyat dan penguasa adalah elemen penting yang menjaga stabilitas serta menjamin rasa aman bagi setiap warga negara.'
  },
  {
    week: 4,
    pertemuan: 4,
    title: 'Ideologi dan Falsafah Bangsa',
    question: 'Bagaimana peran dan fungsi Pancasila sebagai ideologi bangsa Indonesia dalam menghadapi tantangan globalisasi dan perbedaan sosial budaya?',
    summary: 'Modul materi ini menguraikan konsep dasar ideologi. Ideologi dan falsafah bangsa menjadi fondasi bagi berdirinya suatu negara. Dan Pancasila adalah dasar negara dan IDEOLOGI NEGARA yang memiliki peran penting dalam menjaga persatuan, mengarahkan pembangunan nasional, serta menghadapi tantangan globalisasi dan perbedaan sosial budaya.',
    evidence: 'Menghadiri kelas, membaca dan memahami isi materi modul, serta berdiskusi dalam kelas dengan dosen dan teman-teman',
    reflection: 'Materi ini membuat saya memahami bahwa ideologi bukan sekadar konsep abstrak, tetapi pedoman nyata yang mempengaruhi kehidupan sehari-hari sebagai warga negara Indonesia. Di minggu ke-4 ini, Saya belajar bahwa Pancasila bukan hanya sekadar teori, tetapi fondasi yang harus dihayati dan diamalkan dalam kehidupan sehari-hari.'
  },
  {
    week: 5,
    pertemuan: 5,
    title: 'Konstitusi',
    question: 'Kenapa Negara Indonesia membutuhkan konstitusi?',
    summary: 'Konstitusi dibutuhkan oleh Negara Indonesia sebagai dasar hukum tertinggi yang mengatur struktur kekuasaan, relasi antara negara dan warga negara, serta batasan bagaimana kekuasaan dijalankan. Materi menjelaskan bahwa konstitusi berfungsi sebagai pedoman penyelenggaraan negara, sumber legitimasi hukum, penjaga hak asasi warga negara, serta mekanisme pengendali agar kekuasaan tidak disalahgunakan. Konstitusi juga menegaskan identitas dan tujuan nasional, menetapkan lembaga-lembaga negara beserta kewenangannya, serta memastikan keberlangsungan pemerintahan yang stabil, tertib, dan demokratis. Tanpa konstitusi, negara tidak memiliki arah, sistem, maupun batas kekuasaan yang jelas sehingga berpotensi menciptakan kekacauan dan tindakan sewenang-wenang.',
    evidence: 'Lorem ipsum',
    reflection: 'Dari materi ini saya menyadari bahwa konstitusi bukan hanya dokumen formal, tetapi fondasi yang membuat negara dapat berjalan secara sah, tertib, dan demokratis. Memahami bagaimana konstitusi menetapkan struktur kekuasaan dan menjamin hak warga negara membuat saya melihat bahwa keberadaan konstitusi adalah jawaban langsung atas kebutuhan untuk mencegah kekacauan dan kesewenang-wenangan. Hal ini membuat saya semakin menghargai pentingnya aturan dasar negara karena tanpa konstitusi, tidak ada kepastian hukum dan tidak ada jaminan bahwa kekuasaan dijalankan untuk kepentingan rakyat.'
  },
  {
    week: 6,
    pertemuan: 6,
    title: "Fungsi dan Peran Negara",
    question: "Sejauh mana negara telah menjalankan empat fungsi mutlaknya (penertiban, kesejahteraan, pertahanan, keadilan) dan bagaimana penerapan prinsip Good Governance mempengaruhi kualitas pelayanan publik?",
    summary: "Materi ini membedakan secara jelas antara 'fungsi' sebagai tugas yang harus dilaksanakan dan 'peran' sebagai perilaku yang diharapkan dari negara. Fokus utama pembahasan adalah empat fungsi mutlak negara: penertiban (*law and order*) untuk mencegah konflik, kesejahteraan dan kemakmuran rakyat, pertahanan untuk menjaga kedaulatan, serta penegakan keadilan melalui badan-badan peradilan. Selain itu, materi juga menggarisbawahi pentingnya penerapan prinsip-prinsip Good Governance (seperti transparansi, akuntabilitas, partisipasi, dan supremasi hukum) sebagai standar ideal dalam pengelolaan kekuasaan negara untuk mencapai tujuan nasional secara efektif.",
    evidence: "Mempelajari diagram fungsi mutlak negara, menganalisis perbedaan fungsi dan peran, serta menelaah indikator Good Governance dalam slide materi.",
    reflection: "Melalui pembelajaran ini, saya menyadari bahwa negara memiliki tanggung jawab yang kompleks, tidak hanya sekadar menjaga keamanan (fungsi penertiban) tetapi juga wajib aktif mewujudkan keadilan sosial dan kesejahteraan. Saya memahami bahwa keberhasilan peran negara sangat bergantung pada implementasi Good Governance. Tanpa transparansi dan akuntabilitas, fungsi-fungsi negara tidak akan berjalan optimal."
  },
  {
    week: 7,
    pertemuan: 9,
    title: "Demokrasi",
    question: "Bagaimana Indonesia menerapkan prinsip demokrasi dalam sistem politiknya?",
    summary: "Materi ini membahas konsep dasar demokrasi yang berasal dari kata 'demos' dan 'kratos' (pemerintahan rakyat) serta perbandingannya dengan bentuk pemerintahan lain seperti monarki dan oligarki. Penjelasan mencakup klasifikasi demokrasi, baik langsung maupun perwakilan, serta prinsip-prinsip fundamental seperti supremasi hukum (rule of law), peradilan yang independen, dan jaminan hak asasi manusia. Secara spesifik, materi ini menyoroti karakteristik Demokrasi Pancasila yang dianut Indonesia, yang menekankan pada kedaulatan rakyat, permusyawaratan, dan pelaksanaan pemilihan umum sebagai mekanisme suksesi kekuasaan yang damai.",
    evidence: "Mempelajari definisi dan sejarah perkembangan demokrasi, menganalisis perbedaan demokrasi langsung dan perwakilan, serta menelaah prinsip-prinsip Demokrasi Pancasila melalui materi visual.",
    reflection: "Melalui pembelajaran ini, saya memahami bahwa Indonesia menerapkan prinsip demokrasi tidak secara liberal murni, melainkan melalui konsep Demokrasi Pancasila yang unik. Saya menyadari bahwa sistem politik kita menjalankan kedaulatan rakyat melalui mekanisme perwakilan (representative democracy) dan pemilihan umum berkala, namun tetap mengutamakan semangat musyawarah untuk mufakat dalam pengambilan keputusan. Hal ini menegaskan pandangan saya bahwa demokrasi di Indonesia adalah alat untuk mencapai tujuan bernegara yang harus dijalankan dengan hikmat kebijaksanaan, **bukan** sekadar adu kekuatan suara mayoritas semata."
  },
  {
    week: 8,
    pertemuan: 11,
    title: 'Multikulturalisme',
    question: 'Apa Makna Multikulturalisme yang Sebenarnya?',
    summary: 'Materi ini menjelaskan bahwa multikulturalisme adalah sebuah ideologi yang mengakui, menghargai, dan merayakan keberagaman sebagai bagian penting dari kehidupan bersama. Konsep ini menekankan kesetaraan antarkelompok, penghormatan terhadap perbedaan budaya, serta penerimaan terhadap keberagaman sebagai kekuatan sosial. Multikulturalisme hadir dalam berbagai bentuk seperti isolasionis, akomodatif, otonomis, kritis–interaktif, dan kosmopolitan. Secara historis, gagasan ini lahir dari perjuangan melawan diskriminasi dan berkembang seiring kesadaran akan pentingnya HAM dan demokrasi. Di Indonesia, multikulturalisme berakar pada nilai Pancasila, terutama prinsip persatuan, penghormatan terhadap keberagaman, dan keadilan sosial. Tantangan yang dihadapi antara lain isu SARA, stereotip, intoleransi, serta ketidaksetaraan sosial. ',
    evidence: 'lorem ipsum',
    reflection: 'Multikulturalisme maknanya bukan sekadar hidup berdampingan dengan orang yang berbeda, tetapi benar-benar memahami bahwa keberagaman adalah bagian dari identitas bersama yang harus dihargai dan dirawat. Dari materi ini saya menyadari bahwa multikulturalisme menuntut saya untuk bersikap terbuka, tidak menghakimi, dan berusaha melihat perbedaan sebagai peluang belajar, bukan sebagai ancaman. ',
  }
];

export function WeeklyModules() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [dragStartX, setDragStartX] = useState(0);

  const handleDragStart = (_event: any, info: any) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (_event: any, info: any) => {
    const dragDistance = info.point.x - dragStartX;
    const threshold = 50;

    if (dragDistance > threshold) {
      prevWeek();
    } else if (dragDistance < -threshold) {
      nextWeek();
    }
  };

  const nextWeek = () => {
    setCurrentWeek((prev) => (prev + 1) % modules.length);
  };

  const prevWeek = () => {
    setCurrentWeek((prev) => (prev - 1 + modules.length) % modules.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextWeek();
      } else if (e.key === 'ArrowLeft') {
        prevWeek();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getCardPosition = (index: number) => {
    const diff = index - currentWeek;
    const totalCards = modules.length;
    const angle = (360 / totalCards) * diff;
    const radius = 280;

    return {
      rotateY: angle,
      z: Math.cos((angle * Math.PI) / 180) * radius,
      x: Math.sin((angle * Math.PI) / 180) * radius,
      opacity: Math.abs(diff) > 2 ? 0 : Math.abs(diff) === 0 ? 1 : 0.09,
      scale: Math.abs(diff) === 0 ? 1 : 0.7
    };
  };

  return (
    <section id="modules" className="py-20 px-6 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-1"
        >
          <h2 className="mb-4">Modul Pembelajaran Mingguan</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Timeline perjalanan pembelajaran selama 7 minggu
          </p>
        </motion.div>

        {/* 3D Tube Carousel - Minimalist */}
        <div className="relative mb-0.1" style={{ perspective: '100px' }}>
          <div className="relative h-[400px] md:h-[450px]">
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {modules.map((module, index) => {
                const position = getCardPosition(index);
                const isActive = index === currentWeek;

                return (
                  <motion.div
                    key={module.week}
                    className="absolute"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={position}
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
                      className={`w-[200px] md:w-[280px] h-[280px] md:h-[350px] rounded-2xl ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'
                        }`}
                      onClick={() => !isActive && setCurrentWeek(index)}
                      whileHover={!isActive ? { scale: 0.75 } : {}}
                    >
                      <div className="w-full h-full rounded-2xl border-2 border-neutral-900 bg-white p-6 md:p-8 flex flex-col justify-between shadow-xl">
                        {/* Content */}
                        <div>
                          <motion.div
                            className="w-12 h-12 border-2 border-neutral-900 rounded-lg flex items-center justify-center mb-4"
                            animate={{ rotate: isActive ? 0 : 0 }}
                            whileHover={{ rotate: 90 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-xl text-neutral-900">{module.week}</span>
                          </motion.div>

                          <p className="text-neutral-500 text-sm mb-2">Minggu {module.week}</p>
                          <h4 className="text-neutral-900">{module.title}</h4>
                        </div>

                        {/* Bottom Indicator */}
                        <div>
                          {isActive && (
                            <motion.div
                              className="border border-neutral-900 rounded-lg px-3 py-1 text-neutral-900 text-sm inline-block"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              Pertemuan ke {module.pertemuan}
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <motion.button
            onClick={prevWeek}
            className="w-10 h-10 border-2 border-neutral-900 rounded-lg flex items-center justify-center bg-white hover:bg-neutral-900 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="ArrowLeft untuk navigasi"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </motion.button>

          <div className="flex items-center gap-2">
            {modules.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentWeek(index)}
                className={`transition-all ${index === currentWeek
                    ? 'w-8 h-2 bg-neutral-900'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                  } rounded-full`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextWeek}
            className="w-10 h-10 border-2 border-neutral-900 rounded-lg flex items-center justify-center bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="ArrowRight untuk navigasi"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </motion.button>
        </div>



        {/* Timeline Content */}
        <div className="max-w-6xl mx-auto mt-12">
          {/* Timeline Line */}
          <div className="relative h-[400px] md:h-[450px]">
            <AnimatePresence mode="wait">

  {/* Progress Line */}
  <motion.div
    className="absolute px-3 py-2 w-px bg-neutral-900"
    style={{ left: '30px', top: '70px' }}
    initial={{ height: 0 }}
    animate={{ height: ((currentWeek) / (modules.length - 1)) * 400 + 10 }} // pixel
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  />

       {/* Timeline Node */}
              <div className="relative pb-12">
                <div className="flex items-start gap-8 md:gap-12">

                  {/* Left Side - Week Number (Desktop Only) */}
                  <div className="hidden md:flex md:flex-2 md:justify-end md:pr-8">
                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="inline-block border-2 border-neutral-900 rounded-lg px-4 py-2 bg-white">
                        <p className="text-neutral-500 text-sm">Minggu</p>
                        <p className="text-2xl text-neutral-900">{modules[currentWeek].week}</p>
                        
                      </div>
                    </motion.div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 pl-12 md:pl-8">
                    <motion.div
                      className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 shadow-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {/* Mobile Week Number */}
                      <div className="md:hidden mb-4">
                        <div className="inline-block border-2 border-neutral-900 rounded-lg px-3 py-1 bg-white">
                          <span className="text-neutral-500 text-sm mr-2">Minggu</span>
                          <span className="text-xl text-neutral-900">{modules[currentWeek].week}</span>
                        </div>
                      </div>

                      <motion.h3
                        className="text-neutral-900 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {modules[currentWeek].title}
                      </motion.h3>

                      <div className="space-y-5">
                        {/* Pertanyaan Inti */}
                        <motion.div
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center mt-0.5">
                            <MessageSquare size={16} className="text-neutral-900" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <p className="text-neutral-500 text-sm mb-1">Pertanyaan Inti</p>
                            <p className="text-neutral-900">{modules[currentWeek].question}</p>
                          </div>
                        </motion.div>

                        {/* Ringkasan */}
                        <motion.div
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center mt-0.5">
                            <BookOpen size={16} className="text-neutral-900" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <p className="text-neutral-500 text-sm mb-1">Ringkasan Pembahasan</p>
                            <p className="text-neutral-700 whitespace-pre-line">{modules[currentWeek].summary}</p>
                          </div>
                        </motion.div>

                        {/* Bukti Pembelajaran */}
                        
                        {/* Refleksi */}
                        <motion.div
                          className="flex gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <div className="flex-shrink-0 w-8 h-8 border border-neutral-900 rounded-md flex items-center justify-center mt-0.5">
                            <Lightbulb size={16} className="text-neutral-900" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <p className="text-neutral-500 text-sm mb-1">Refleksi Mingguan</p>
                            <p className="text-neutral-700 italic">{modules[currentWeek].reflection}</p>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

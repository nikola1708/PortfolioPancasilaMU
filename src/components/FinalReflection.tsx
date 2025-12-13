import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const reflectionText = `Seluruh rangkaian pembelajaran Pendidikan Kewarganegaraan ini telah mengubah pemahaman saya lebih dari sekadar teori akademis. Seluruh perjalanan saya dalam mengikuti mata kuliah pendidikan kewarganegaraan ini, membuat saya menjadi lebih kritis dalam menilai dan mengolah informasi, membuka pikiran terhadap isu-isu yang terjadi di Indonesia, dan menganalisis sebab akibat dari masalah secara historis maupun teoritis. Relevansi materi ini semakin nyata ketika saya mengaplikasikannya dalam proyek penelitian kasus pengibaran bendera One Piece (melalui podcast, artikel, dan proposal). Studi kasus ini membuka mata saya tentang bagaimana isu ini bisa terjadi dan bagaimana reaksi pemerintah yang ternyata mirisnya memiliki kemiripan dengan reaksi pemerintah (angkatan laut) yang ada di dunia one piece. Saya belajar bahwa sebagai warga negara yang baik, kita harus aktif dalam mengawal jalannya pemerintahan dan memastikan hak-hak kita terpenuhi. \n\n Setelah melalui penelitian, kami melanjutkan materi Demokrasi dan Multikulturalisme. Di minggu itu, Saya belajar dan menyadari pentingnya toleransi dan penghargaan terhadap keberagaman di Indonesia, serta bagaimana hal ini menjadi salah satu fondasi bagi persatuan bangsa.`;

export function FinalReflection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping && displayedText.length === 0) {
            setIsTyping(true);
            let currentIndex = 0;
            
            const typingInterval = setInterval(() => {
              if (currentIndex <= reflectionText.length) {
                setDisplayedText(reflectionText.slice(0, currentIndex));
                currentIndex++;
              } else {
                clearInterval(typingInterval);
                setIsTyping(false);
              }
            }, 15);

            return () => clearInterval(typingInterval);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('reflection');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [isTyping, displayedText]);

  return (
    <section id="reflection" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Refleksi Akhir</h2>
          <p className="text-neutral-600">
            Saya mempelajari bahwa...</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-2 border-neutral-900 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-l-2 border-b-2 border-neutral-200 rounded-bl-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-r-2 border-t-2 border-neutral-200 rounded-tr-3xl" />

          <div className="relative z-10">
            {/* Opening quote mark */}
            <div className="mb-6">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="text-neutral-900">
                <path d="M0 32V18.6667C0 8.35556 4.44444 0 17.7778 0V7.11111C11.5556 7.11111 8.88889 11.5556 8.88889 18.6667H17.7778V32H0ZM22.2222 32V18.6667C22.2222 8.35556 26.6667 0 40 0V7.11111C33.7778 7.11111 31.1111 11.5556 31.1111 18.6667H40V32H22.2222Z" fill="currentColor" opacity="0.1"/>
              </svg>
            </div>

            {/* Typed text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                {displayedText}
                {isTyping && (
                  <motion.span
                    className="inline-block w-0.5 h-5 bg-neutral-900 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1 }}
                  />
                )}
              </p>
            </div>

            {/* Closing quote mark */}
            {displayedText.length === reflectionText.length && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex justify-end"
              >
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" className="text-neutral-900 rotate-180">
                  <path d="M0 32V18.6667C0 8.35556 4.44444 0 17.7778 0V7.11111C11.5556 7.11111 8.88889 11.5556 8.88889 18.6667H17.7778V32H0ZM22.2222 32V18.6667C22.2222 8.35556 26.6667 0 40 0V7.11111C33.7778 7.11111 31.1111 11.5556 31.1111 18.6667H40V32H22.2222Z" fill="currentColor" opacity="0.1"/>
                </svg>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Footer */}
        {displayedText.length === reflectionText.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block border-2 border-neutral-900 rounded-xl px-6 py-3 bg-white">
              <p className="text-neutral-500 text-sm mb-1">Terimakasih sudah menyaksikan perjalanan dokumentasi saya di </p>
              <p className="text-neutral-900">Pendidikan Kewarganegaraan - 2025</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

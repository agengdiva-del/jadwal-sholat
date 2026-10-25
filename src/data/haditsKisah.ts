/**
 * Daily Hadits & Kisah Teladan Sahabat (Motivasi Amaliah)
 * Curated authentic traditions and inspiring stories for daily motivation
 */

export interface HaditsKisahItem {
  id: string;
  title: string;
  arabic?: string;
  matanIndo: string;
  source: string;
  hikmah: string;
  category: 'sholat' | 'sedekah' | 'akhlak' | 'quran' | 'istiqomah' | 'dzikir';
}

export const DAILY_HADITS_COLLECTION: HaditsKisahItem[] = [
  {
    id: 'hadits-1',
    title: 'Keutamaan Sholat di Awal Waktu',
    arabic: 'سُئِلَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَيُّ الْعَمَلِ أَحَبُّ إِلَى اللَّهِ؟ قَالَ: الصَّلَاةُ عَلَى وَقْتِهَا',
    matanIndo: 'Nabi SAW ditanya: "Amalan apakah yang paling dicintai oleh Allah?" Beliau menjawab: "Sholat tepat pada waktunya."',
    source: 'HR. Bukhari no. 527 & Muslim no. 85',
    hikmah: 'Menjaga waktu sholat adalah cerminan loyalitas dan cinta tertinggi seorang hamba kepada Sang Pencipta di tengah kesibukan dunia.',
    category: 'sholat',
  },
  {
    id: 'hadits-2',
    title: 'Amalan yang Paling Dicintai adalah yang Istiqomah',
    arabic: 'أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ',
    matanIndo: 'Rasulullah SAW bersabda: "Amalan yang paling dicintai oleh Allah adalah amalan yang dilakukan secara kontinu (istiqomah) walaupun sedikit."',
    source: 'HR. Bukhari no. 6464 & Muslim no. 783',
    hikmah: 'Kebaikan kecil yang dirutinkan setiap hari jauh lebih bernilai di sisi Allah daripada amalan besar yang hanya dilakukan sesekali lalu terhenti.',
    category: 'istiqomah',
  },
  {
    id: 'hadits-3',
    title: 'Dua Rakaat Sebelum Subuh Lebih Baik dari Dunia',
    arabic: 'رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا',
    matanIndo: 'Rasulullah SAW bersabda: "Dua rakaat sholat sunnah fajar (sebelum Subuh) lebih baik daripada dunia beserta seluruh isinya."',
    source: 'HR. Muslim no. 725',
    hikmah: 'Jika dua rakaat sunnahnya saja melampaui kekayaan seisi bumi, betapa agung kemuliaan sholat fardhu Subuh yang ditegakkan berjamaah.',
    category: 'sholat',
  },
  {
    id: 'hadits-4',
    title: 'Sedekah Tidak Mengurangi Harta',
    arabic: 'مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ، وَمَا زَادَ اللَّهُ عَبْدًا بِعَفْوٍ إِلَّا عِزًّا',
    matanIndo: 'Rasulullah SAW bersabda: "Sedekah tidak akan mengurangi harta, dan tidaklah Allah menambah bagi seorang hamba yang pemaaf melainkan kemuliaan."',
    source: 'HR. Muslim no. 2588',
    hikmah: 'Secara hitungan matematika harta berkurang, namun secara hakikat Allah melipatgandakan keberkahan, kesehatan, dan penjagaan tak terlihat.',
    category: 'sedekah',
  },
  {
    id: 'hadits-5',
    title: 'Kisah Sahabat yang Selalu Dirindukan Surga',
    matanIndo: 'Rasulullah SAW memberitahu para sahabat bahwa seorang lelaki Anshar adalah calon penghuni surga. Sahabat Abdullah bin Amr menginap di rumahnya selama 3 hari dan melihat ibadahnya biasa saja, namun lelaki itu berkata: "Setiap kali aku hendak tidur di malam hari, tidak ada secuil pun rasa iri, dengki, atau dendam di hatiku kepada sesama muslim."',
    source: 'Musnad Ahmad no. 12697 (Sanad Shahih)',
    hikmah: 'Hati yang bersih, memaafkan kesalahan orang lain sebelum tidur, dan terbebas dari iri dengki adalah amalan ringan yang mengantarkan ke surga.',
    category: 'akhlak',
  },
  {
    id: 'hadits-6',
    title: 'Keajaiban Membaca Satu Huruf Al-Qur’an',
    arabic: 'مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ، وَالحَسَنَةُ بِعَشْرِ أَمْثَالِهَا',
    matanIndo: 'Barangsiapa membaca satu huruf dari Kitabullah (Al-Qur\'an), maka baginya satu kebaikan, dan satu kebaikan dilipatgandakan menjadi sepuluh kali lipat.',
    source: 'HR. At-Tirmidzi no. 2910 (Hasan Shahih)',
    hikmah: 'Jangan biarkan hari kita berlalu tanpa melantunkan kalam Ilahi, walau hanya satu lembar atau beberapa ayat penyejuk kalbu.',
    category: 'quran',
  },
  {
    id: 'hadits-7',
    title: 'Dahsyatnya Doa di Waktu Sepertiga Malam Terakhir',
    arabic: 'يَنْزِلُ رَبُّنَا تَبَارَكَ وَتَعَالَى كُلَّ لَيْلَةٍ إِلَى السَّمَاءِ الدُّنْيَا حِينَ يَبْقَى ثُلُثُ اللَّيْلِ الآخِرُ',
    matanIndo: 'Allah Tabaraka wa Ta\'ala turun ke langit dunia setiap malam pada sepertiga malam terakhir, seraya berfirman: "Siapa yang berdoa kepada-Ku niscaya Aku kabulkan, siapa yang meminta kepada-Ku niscaya Aku beri, dan siapa yang memohon ampun kepada-Ku niscaya Aku ampuni."',
    source: 'HR. Bukhari no. 1145 & Muslim no. 758',
    hikmah: 'Bangunlah di waktu sepertiga malam saat dunia terlelap. Curahkan isi hatimu kepada Dzat Yang Maha Mendengar segala bisikan.',
    category: 'sholat',
  },
  {
    id: 'hadits-8',
    title: 'Sholat Dhuha: Hak 360 Persendian Tubuh',
    arabic: 'يُصْبِحُ عَلَى كُلِّ سُلاَمَى مِنْ أَحَدِكُمْ صَدَقَةٌ... وَيُجْزِئُ مِنْ ذَلِكَ رَكْعَتَانِ يَرْكَعُهُمَا مِنَ الضُّحَى',
    matanIndo: 'Setiap pagi setiap persendian dari kalian wajib disedekahi... Dan semua itu cukup digantikan dengan mendirikan dua rakaat sholat Dhuha.',
    source: 'HR. Muslim no. 720',
    hikmah: 'Dua rakaat Dhuha yang kita tunaikan di sela rutinitas pagi adalah wujud syukur atas nikmat fisik yang sehat dan pembuka pintu rizki berkah.',
    category: 'sholat',
  },
  {
    id: 'hadits-9',
    title: 'Kisah Pohon Kurma yang Menangis Rindu',
    matanIndo: 'Batang pohon kurma yang biasa menjadi sandaran Nabi SAW saat khutbah merintih dan menangis seperti anak kecil ketika sebuah mimbar baru dibuat. Rasulullah SAW turun, memeluk pohon itu hingga ia tenang, lalu bersabda: "Ia menangis karena mendengar dzikir yang biasa dibacakan di dekatnya."',
    source: 'HR. Bukhari no. 3585',
    hikmah: 'Bahkan sebatang kayu kering pun memiliki kerinduan mendalam kepada Rasulullah SAW dan majelis dzikir. Bagaimana dengan hati kita?',
    category: 'akhlak',
  },
  {
    id: 'hadits-10',
    title: 'Kekuatan Istighfar Pembuka Segala Pintu Masalah',
    arabic: 'مَنْ لَزِمَ الِاسْتِغْفَارَ جَعَلَ اللَّهُ لَهُ مِنْ كُلِّ ضِيقٍ مَخْرَجًا، وَمِنْ كُلِّ هَمٍّ فَرَجًا',
    matanIndo: 'Barangsiapa melazimkan istighfar, Allah akan jadikan jalan keluar dari setiap kesempitan, jalan lapang dari setiap kesedihan, dan memberi rizki dari arah tak disangka-sangka.',
    source: 'HR. Abu Dawud no. 1518 & Ibnu Majah',
    hikmah: 'Basahilah lisan kita dengan ucapan Astaghfirullah. Istighfar adalah magnet pembuka berkah dan peredam kesulitan hidup.',
    category: 'dzikir',
  },
];

/**
 * Returns deterministic daily Hadits based on the current date
 */
export function getDailyHadits(date: Date = new Date()): HaditsKisahItem {
  // Use day of the year to pick a unique Hadits every single day
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  const index = Math.abs(dayOfYear) % DAILY_HADITS_COLLECTION.length;
  return DAILY_HADITS_COLLECTION[index];
}

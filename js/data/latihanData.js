/**
 * =============================================================================
 * DATA LATIHAN INTERAKTIF (GLADHEN) - DISESUAIKAN DENGAN MATERI KLIEN
 * =============================================================================
 * Sumber: MATERI WEBSITE.docx
 * =============================================================================
 */

export const KUIS_PILIHAN_GANDA = [
  {
    id: "kuis-1",
    konteks: "Kowe ketemu kanca sapantaran (Hani takon marang Ayu) ngenani rencana ndelok pagelaran jaranan mengko bengi.",
    pitakon: "Ukara basa Ngoko Lugu kang paling trep yaiku...",
    opsi: [
      "Yun, panjenengan mengko bengi sios mirsani jaranan?",
      "Yun, kowe mengko bengi sida delok jaranan?",
      "Yun, sampeyan dinten niki mbeta jaranan napa mboten?",
      "Yun, kula badhe ndelok jaranan kaliyan panjenengan."
    ],
    kunci: 1,
    katranganBener: "Bener banget! Marang kanca sapantaran cukup nggunakake basa Ngoko Lugu: 'Yun, kowe mengko bengi sida delok jaranan?'.",
    katranganSalah: "Kurang trep. Karo kanca sakpantaran watake rumaket (akrab), dadi tembung sesulihe tetep 'kowe' lan tembung kriyane 'delok' (Ngoko Lugu)."
  },
  {
    id: "kuis-2",
    konteks: "Retno guneman marang Mas Gondo (statuse padha nanging padha-padha ngurmati banget) nawani gedhang goreng.",
    pitakon: "Ukara basa Ngoko Alus kang bener yaiku...",
    opsi: [
      "Kowe apa wis mangan gedhang goreng iki?",
      "Panjenengan apa wis dhahar? Sing ngasta gedhang goreng iki panjenengan ta?",
      "Sampeyan napa sampun nedha gedhang goreng punika?",
      "Panjenengan kersa mundhut gedhang goreng kula?"
    ],
    kunci: 1,
    katranganBener: "Pinter! Ing Ngoko Alus, tembung sesulihe nganggo 'Panjenengan', dene tembung kriyane diowahi dadi Krama Inggil kaya 'dhahar' lan 'ngasta'.",
    katranganSalah: "Durung trep. Kanggo wong sing statuse padha nanging ngurmati banget, nggunakake basa Ngoko Alus: sesulih 'panjenengan' lan kriya krama inggil 'dhahar/ngasta'."
  },
  {
    id: "kuis-3",
    konteks: "Pak Ni tuku kenthang marang Bu Nur ing pasar (rembugan marang sapadha-padha sing wis kulina ing transaksi dagang).",
    pitakon: "Ukara basa Krama Lugu kang trep diucapake Pak Ni yaiku...",
    opsi: [
      "Bu Nur, kowe mbeta dagangan kenthang apa ora?",
      "Bu Nur, panjenengan ngasta kenthang pinten kilo?",
      "Bu Nur, sampeyan pendhetaken kenthang setunggal kilo reginipun pinten?",
      "Bu Nur, kula nyuwun kenthang dipunparingaken dhateng kula."
    ],
    kunci: 2,
    katranganBener: "Jempolan! Krama Lugu nggunakake tembung 'sampeyan' lan ater-ater/panambang krama 'dipun- / -aken', tuladhane 'pendhetaken'.",
    katranganSalah: "Kurang pas. Basa Krama Lugu nggunakake sesulih 'sampeyan' lan tembung krama lugu (ora nganggo krama inggil)."
  },
  {
    id: "kuis-4",
    konteks: "Pak Adi (tamu) rawuh ing omah takon marang anak: 'Bapakmu enek le?'. Bapake lagi adus (mandi) ing njero jedhing.",
    pitakon: "Wangsulane anak marang tamu kang bener manut unggah-ungguh yaiku...",
    opsi: [
      "Wonten Pak, mbok menawi Bapak taksih siram.",
      "Wonten Pak, Bapak lagi adus ing jedhing.",
      "Mboten wonten Pak, Bapak nembe tilem ing kamar.",
      "Wonten Pak, Bapak kula dereng adus saking wau."
    ],
    kunci: 0,
    katranganBener: "Leres sanget! Tembung 'adus' tumrap wong tuwa (Bapak) kudu dikramakake alus dadi 'siram' minangka wujud pakurmatan.",
    katranganSalah: "Kurang pas. Nalika nyritakake wong tuwa marang tamu, tembung 'adus' kudu dikramakake inggil dadi 'siram'."
  },
  {
    id: "kuis-5",
    konteks: "Ibu dhawuh: 'Le, tulung tukokna gula ing warung, ya.' Kepriye wangsulane anak kang sopan?",
    pitakon: "Wangsulan anak marang Ibu kang trep yaiku...",
    opsi: [
      "Iya Bu, aku arep tuku gula rong kilo.",
      "Inggih Bu, anggale mundhut gulanipun pinten kilo?",
      "Sampeyan mundhut gula piyambak mawon nggih Bu.",
      "Kula mboten purun kesah dhateng warung Bu."
    ],
    kunci: 1,
    katranganBener: "Linuwih! Anak matur marang Ibu nggunakake basa Krama Alus: 'Inggih Bu, anggale mundhut gulanipun pinten kilo?'.",
    katranganSalah: "Durung trep. Anak marang wong tuwa kudu matur kanthi Krama Alus lan tembung 'tuku' kanggo kaperluan ibu dikramakake dadi 'mundhut'."
  }
];

export const PASANG_TEMBUNG = [
  {
    id: "pair-1",
    ngoko: "Delok",
    krama: "Mirsani",
    tegese: "Melihat / Menonton"
  },
  {
    id: "pair-2",
    ngoko: "Mangan",
    krama: "Dhahar",
    tegese: "Makan"
  },
  {
    id: "pair-3",
    ngoko: "Gawa",
    krama: "Ngasta",
    tegese: "Membawa"
  },
  {
    id: "pair-4",
    ngoko: "Tuku",
    krama: "Mundhut",
    tegese: "Membeli"
  },
  {
    id: "pair-5",
    ngoko: "Adus",
    krama: "Siram",
    tegese: "Mandi"
  },
  {
    id: "pair-6",
    ngoko: "Jupuk",
    krama: "Mendhet",
    tegese: "Mengambil"
  },
  {
    id: "pair-7",
    ngoko: "Kowe",
    krama: "Panjenengan",
    tegese: "Kamu / Anda"
  },
  {
    id: "pair-8",
    ngoko: "Lunga",
    krama: "Tindak",
    tegese: "Pergi"
  }
];

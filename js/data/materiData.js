/**
 * =============================================================================
 * DATA MATERI: UNGGAH-UNGGUH BASA JAWA (DARI NASKAH RESMI KLIEN)
 * =============================================================================
 * Sumber: MATERI WEBSITE.docx
 * Format Tabel Kosa Kata: Ngoko | Krama Lugu | Krama Alus | Arti (ID)
 * =============================================================================
 */

export const MATERI_PENGANTAR = {
  judul: "Unggah-Ungguh Basa",
  isi: "Unggah-ungguh basa gegayutan karo solah tingkah utawa tatakrama wong Jawa. Unggah-ungguh basa miturut panganggone kaperang dadi loro, yaiku ragam ngoko lan ragam krama. Basa ngoko, minangka basa kang lumrah digunakake ing padinan watake rumaket. Basa ngoko kaperang dadi loro, yaiku ngoko lugu lan ngoko alus. Basa krama, minangka basa sing tatarane sandhuwure basa ngoko, tujuwane kanggo ngurmati wong liya. Basa krama kaperang dadi loro, yaiku krama lugu lan krama alus."
};

export const MATERI_DATA = [
  {
    id: "ngoko-lugu",
    nama: "Ngoko Lugu",
    sebutanLiyo: "Ragam Ngoko Watak Rumaket",
    levelWarna: "ngoko-lugu",
    badgeText: "Tingkat 1: Ngoko Lugu",
    tingkatFormil: 1,
    pangerten: "Ukara kang gunakake tembung ngoko lugu kabeh ora kecampuran krama. Minangka basa kang lumrah digunakake ing padinan lan watake rumaket.",
    
    digunakakeKanggo: [
      "Marang kanca sapantaran (saumuran).",
      "Sedulur kang luwih enom.",
      "Wong tuwa marang anak, putu, lan bocah cilik.",
      "Guneman guru marang muride."
    ],

    titikane: [
      "Tembung sesulih utama purusa: 'aku'",
      "Tembung sesulih madya purusa: 'kowe'",
      "Unsur ngurmati ora dibasakne",
      "Ater-ater lan panambang ora dibasakne"
    ],

    paugeran: "Tembung sesulih utama purusa 'aku', tembung sesulih madya purusa 'kowe'. Unsur ngurmati ora dibasakne, sarta ater-ater lan panambang ora dibasakne (tetep wujud ngoko).",

    tuladhaTembung: [
      { ngoko: "Kowe", kramaLugu: "Sampeyan", kramaAlus: "Panjenengan", tegese: "Kamu / Anda" },
      { ngoko: "Lunga", kramaLugu: "Kesah", kramaAlus: "Tindak", tegese: "Pergi" },
      { ngoko: "Mangan", kramaLugu: "Nedha", kramaAlus: "Dhahar", tegese: "Makan" },
      { ngoko: "Tuku", kramaLugu: "Tumbas", kramaAlus: "Mundhut", tegese: "Membeli" },
      { ngoko: "Delok", kramaLugu: "Ningali", kramaAlus: "Mirsani", tegese: "Melihat" }
    ],

    tuladhaUkara: [
      {
        jawa: "Yun, kowe mengko bengi sida delok jaranan?",
        indonesia: "Yun, kamu nanti malam jadi menonton jaranan (kuda lumping)?"
      },
      {
        jawa: "Aku budhal ijen, jarene Tita ora sida melu jalaran garapane sik akeh.",
        indonesia: "Aku berangkat sendiri, katanya Tita tidak jadi ikut karena tugasnya masih banyak."
      }
    ],

    tipsMaskot: "Basa Ngoko Lugu iki watake rumaket (akrab). Pas banget digunakake kanggo kanca sapantaran utawa marang sedulur sing luwih enom!"
  },

  {
    id: "ngoko-alus",
    nama: "Ngoko Alus",
    sebutanLiyo: "Ngoko Andhap",
    levelWarna: "ngoko-alus",
    badgeText: "Tingkat 2: Ngoko Alus",
    tingkatFormil: 2,
    pangerten: "Ukara kang gunakake tembung ngoko nanging kecampuran krama inggil mligi kanggo ngurmati wong sing diajak guneman utawa diomongake.",
    
    digunakakeKanggo: [
      "Kanggo rembugan marang sapadha-padha sing statuse padha nanging ngurmati banget.",
      "Kanggo rembugan marang wong sing drajate luwih dhuwur, nanging wis akrab banget.",
      "Kanggo rembugan marang wong sing drajate luwih dhuwur, nanging saperangan drajate luwih endhek.",
      "Kanggo nyritakake wong liya sing drajate dhuwur lan kudu diajeni."
    ],

    titikane: [
      "Tembung sesulih utama purusa: 'aku'",
      "Tembung sesulih madyama purusa: 'panjenengan'",
      "Sing dikramakane alus yaiku unsur kang ngurmati (tembung kriya, perangan awak, tembung aran)",
      "Ater-ater lan panambang dibasakne / tetep awujud ngoko"
    ],

    paugeran: "Tembung sesulih utama purusa 'aku', tembung sesulih madyama purusa 'panjenengan'. Sing dikramakane alus yaiku unsur kang ngurmati kaya ta: tembung kriya, perangan awak, tembung aran.",

    tuladhaTembung: [
      { ngoko: "Kowe", kramaLugu: "Sampeyan", kramaAlus: "Panjenengan", tegese: "Kamu / Anda" },
      { ngoko: "Mangan", kramaLugu: "Nedha", kramaAlus: "Dhahar", tegese: "Makan" },
      { ngoko: "Delok", kramaLugu: "Ningali", kramaAlus: "Mirsani", tegese: "Menonton / Melihat" },
      { ngoko: "Gawa", kramaLugu: "Mbeta", kramaAlus: "Ngasta", tegese: "Membawa" },
      { ngoko: "Lunga", kramaLugu: "Kesah", kramaAlus: "Tindak", tegese: "Pergi" }
    ],

    tuladhaUkara: [
      {
        jawa: "Yun, panjenengan mengko bengi sios mirsani jaranan?",
        indonesia: "Yun, Anda nanti malam jadi menonton jaranan?"
      },
      {
        jawa: "Panjenengan apa wis dhahar? Sajake katon lemes.",
        indonesia: "Anda apakah sudah makan? Kelihatannya tampak lemas."
      }
    ],

    tipsMaskot: "Titikane: Tembung sesulih dadi 'Panjenengan', lan tembung kriya tumrap wong liya dadi krama inggil kaya ta 'dhahar', 'mirsani', lan 'ngasta'!"
  },

  {
    id: "krama-lugu",
    nama: "Krama Lugu",
    sebutanLiyo: "Krama Madya",
    levelWarna: "krama-lugu",
    badgeText: "Tingkat 3: Krama Lugu",
    tingkatFormil: 3,
    pangerten: "Ukara kang gunakake tembung krama lugu kabeh. Krama lugu mujudake basa ing pasrawungan nuduhake watak ngajeni nanging kurang alus tumrape wong sing diajak guneman.",
    
    digunakakeKanggo: [
      "Kanggo rembugan marang sapadha-padha sing statuse padha, ngajeni nanging wis kulina.",
      "Kanggo rembugan marang wong sing drajate luwih endhek, durung kulina lan kepingin ngajeni."
    ],

    titikane: [
      "Tembung sesulih utama purusa: 'aku' diowahi dadi 'kula'",
      "Tembung sesulih madyama purusa: 'kowe' diowahi dadi 'sampeyan'",
      "Gunakake ater-ater (awalan) krama: 'dipun-'",
      "Gunakake panambang (akhiran) krama: '-ipun', '-aken'"
    ],

    paugeran: "Tembung sesulih utama purusa 'aku' dadi 'kula', sesulih madyama purusa 'kowe' dadi 'sampeyan'. Gunakake ater-ater krama 'dipun-' sarta panambang krama '-ipun, -aken'.",

    tuladhaTembung: [
      { ngoko: "Kowe", kramaLugu: "Sampeyan", kramaAlus: "Panjenengan", tegese: "Kamu / Anda" },
      { ngoko: "Aku", kramaLugu: "Kula", kramaAlus: "Kula / Dalem", tegese: "Saya" },
      { ngoko: "Gawa", kramaLugu: "Mbeta", kramaAlus: "Ngasta", tegese: "Membawa" },
      { ngoko: "Tuku", kramaLugu: "Tumbas", kramaAlus: "Mundhut", tegese: "Membeli" },
      { ngoko: "Jupuk", kramaLugu: "Mendhet", kramaAlus: "Mundhut", tegese: "Mengambil" }
    ],

    tuladhaUkara: [
      {
        jawa: "Mangga, yen purun kopi sampeyan mendhet piyambak!",
        indonesia: "Silakan, jika mau kopinya Anda mengambil sendiri!"
      },
      {
        jawa: "Bu Nur, sampeyan dinten niki mbeta dagangan napa mawon?",
        indonesia: "Bu Nur, Anda hari ini membawa barang dagangan apa saja?"
      }
    ],

    tipsMaskot: "Krama Lugu nggunakake tembung 'kula' lan 'sampeyan'. Pas dienggo marang kenalan utawa sesama bakul ing pasar kanthi sopan lan wajar!"
  },

  {
    id: "krama-alus",
    nama: "Krama Alus",
    sebutanLiyo: "Krama Inggil",
    levelWarna: "krama-alus",
    badgeText: "Tingkat 4: Krama Alus",
    tingkatFormil: 4,
    pangerten: "Ukara sing gunakake tembung krama alus kabeh, nanging kanggo awake dhewe gunakake krama lugu (ora ngunggahake awake dhewe). Tatarane sandhuwure basa ngoko, tujuwane kanggo ngurmati wong liya kanthi rasa kurmat kang jero.",
    
    digunakakeKanggo: [
      "Kanggo rembugan marang sapadha-padha sing statuse padha nanging durung kulina kanthi rasa ngurmati banget.",
      "Kanggo rembugan marang wong sing drajate luwih dhuwur.",
      "Guneman anak marang guru lan wong tuwa."
    ],

    titikane: [
      "Tembung sesulih utama purusa: 'aku' diowahi dadi 'kula'",
      "Tembung sesulih madyama purusa: 'kowe' diowahi dadi 'panjenengan'",
      "Gunakake ater-ater (awalan) krama: 'dipun-'",
      "Gunakake panambang (akhiran) krama: '-ipun', '-aken'",
      "Unsur ngurmati nganggo Krama Inggil mligi kagem wong tuwa utawa pimpinan"
    ],

    paugeran: "Tembung sesulih utama purusa 'aku' dadi 'kula', madyama purusa 'panjenengan'. Gunakake ater-ater 'dipun-' lan panambang '-ipun, -aken'. Kabeh tembung tumrap wong tuwa/guru nganggo Krama Inggil, dene awake dhewe tetep nganggo krama lugu.",

    tuladhaTembung: [
      { ngoko: "Kowe", kramaLugu: "Sampeyan", kramaAlus: "Panjenengan", tegese: "Kamu / Anda" },
      { ngoko: "Turu", kramaLugu: "Tilem", kramaAlus: "Sare", tegese: "Tidur" },
      { ngoko: "Mangan", kramaLugu: "Nedha", kramaAlus: "Dhahar", tegese: "Makan" },
      { ngoko: "Omah", kramaLugu: "Griya", kramaAlus: "Dalem", tegese: "Rumah" },
      { ngoko: "Weruh", kramaLugu: "Sumerep", kramaAlus: "Pirsa", tegese: "Melihat / Tahu" }
    ],

    tuladhaUkara: [
      {
        jawa: "Panjenengan punapa sampun pirsa dalemipun Pak Hadi?",
        indonesia: "Apakah Anda sudah mengetahui kediaman (rumah) dari Pak Hadi?"
      },
      {
        jawa: "Bu, ingkang panjenengan asta punika punapa ta? Punika jahe abrit kagunganipun Pak Bahlil.",
        indonesia: "Bu, yang Anda bawa itu apa ya? Ini jahe merah kepunyaan Pak Bahlil."
      }
    ],

    tipsMaskot: "Eling aturan iki ya: Tembung krama alus (krama inggil) kaya 'pirsa', 'dhahar', 'sare', lan 'dalem' mung kanggo ngurmati tiyang sepuh, dudu kanggo awake dhewe!"
  }
];

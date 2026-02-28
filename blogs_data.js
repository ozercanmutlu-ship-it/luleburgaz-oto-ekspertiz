const fs = require('fs');
const blogs = [
    { slug: "oto-ekspertiz-fiyatlari-2026", title: "2026 Oto Ekspertiz Fiyatları: Hangi Paketi Seçmelisiniz?", keywords: "oto ekspertiz, fiyat", desc: "güncel fiyatlar", excerpt: "fiyat listesi", content: "<h2>Detaylar</h2><p>Fiyat listesi detayları...</p>" },
    { slug: "arac-beyin-testi-obd-nedir", title: "OBD Araç Beyin Testi Nedir?", keywords: "obd testi", desc: "obd beyin testi", excerpt: "obd beyin", content: "<h2>OBD</h2><p>OBD açıklaması</p>" },
    { slug: "dyno-testi-motora-zarar-verir-mi", title: "Dyno Testi Araca Zarar Verir Mi?", keywords: "dyno", desc: "dyno", excerpt: "dyno", content: "<h2>Dyno</h2><p>Dyno açıklaması</p>" },
    { slug: "degisen-parca-ile-boyali-parca-farki", title: "Değişen ve Boyalı Parça Farkı", keywords: "boyalı parça", desc: "kaporta", excerpt: "kaporta", content: "<h2>Kaporta</h2><p>Kaporta detay</p>" },
    { slug: "motor-kompresyon-testi-nedir", title: "Motor Kompresyon Testi", keywords: "kompresyon", desc: "motor testi", excerpt: "kompresyon", content: "<h2>Kompresyon</h2><p>Kompresyon detay</p>" },
    { slug: "airbag-ekspertizi-nasil-yapilir", title: "Airbag Ekspertizi", keywords: "airbag", desc: "hava yastığı", excerpt: "airbag", content: "<h2>Airbag</h2><p>Airbag detay</p>" },
    { slug: "agir-hasarli-arac-alinir-mi", title: "Ağır Hasarlı Araç Alınır Mı?", keywords: "pert", desc: "pert", excerpt: "pert", content: "<h2>Pert</h2><p>Pert detay</p>" },
    { slug: "kilometre-dusurme-hileleri", title: "Kilometre Düşürme Hileleri", keywords: "km hilesi", desc: "km", excerpt: "km", content: "<h2>KM</h2><p>Km detay</p>" },
    { slug: "ekspertiz-raporu-kac-gun-gecerli", title: "Ekspertiz Raporu Geçerlilik", keywords: "rapor", desc: "rapor geçerlilik", excerpt: "rapor", content: "<h2>Rapor</h2><p>Rapor detay</p>" },
    { slug: "sanziman-ekspertizi-neler-var", title: "Otomatik Şanzıman Ekspertizi", keywords: "şanzıman", desc: "şanzıman", excerpt: "şanzıman", content: "<h2>Şanzıman</h2><p>Şanzıman detay</p>" }
];

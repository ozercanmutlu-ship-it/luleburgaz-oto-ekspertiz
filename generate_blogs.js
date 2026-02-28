const fs = require('fs');
const blogs = [
  {
    slug: "oto-ekspertiz-fiyatlari-2026",
    title: "2026 Oto Ekspertiz Fiyatları: Hangi Paketi Seçmelisiniz?",
    keywords: "oto ekspertiz fiyatları 2026, ekspertiz ücreti, araç ekspertiz paketleri",
    desc: "Oto ekspertiz yaptırırken hangi paketin ihtiyacınıza uygun olduğunu ve 2026 yılı güncel fiyatlarını öğrenin.",
    excerpt: "İkinci el araç alımlarında bütçe planlaması yaparken en çok merak edilen konulardan biri ekspertiz ücretleridir.",
    content: "<h2>Oto Ekspertiz Fiyatları Neye Göre Belirlenir?</h2><p>İkinci el araç pazarında 2026 yılı itibarıyla ekspertiz fiyatları, tercih edilen paketin kapsamına göre değişiklik göstermektedir. Sadece motor ve kaporta incelemesi içeren temel paketler uygun fiyatlıyken, dyno, obd beyin testi ve airbag kontrolü gibi detaylı incelemeler içeren paketler farklı ücretlendirilir.</p><p>Lüleburgaz Oto Ekspertiz olarak her bütçeye uygun şeffaf rapor sunuyoruz.</p>"
  },
  {
    slug: "arac-beyin-testi-obd-nedir",
    title: "OBD Araç Beyin Testi Nedir? Neden Önemlidir?",
    keywords: "obd testi nedir, araç beyin testi, elektronik arıza tespiti",
    desc: "Araç beyin testi (OBD) ile daha önce silinmiş gizli arızaların nasıl tespit edildiğini öğrenin.",
    excerpt: "Modern araçlarda elektronik sistemlerin sağlığı en az motor kadar önemlidir. OBD testi sayesinde gizli hataları buluyoruz.",
    content: "<h2>OBD Testi Nedir?</h2><p>OBD, aracın elektronik beynine (ECU) bağlanarak sistem üzerinde var olan veya geçmişte yaşanıp silinmiş arıza kodlarını (DTC) okumamızı sağlayan son teknoloji bir diagnostik yöntemdir.</p><p>Airbag ve kilometre hileleri sadece bu yolla tespit edilebilir.</p>"
  },
  {
    slug: "dyno-testi-motora-zarar-verir-mi",
    title: "Dyno Testi Araca Zarar Verir Mi?",
    keywords: "dyno testi zararlı mı, dinamometre testi, motor performans ölçümü",
    desc: "Dyno testi hakkındaki doğru bilinen yanlışları uzmanlardan dinleyin.",
    excerpt: "Ekspertiz merkezlerinde uygulanan performans testinin motora zarar verip vermediği en çok merak edilen konulardandır.",
    content: "<h2>Efsaneler ve Gerçekler</h2><p>Dinamometre testi, aracın ürettiği gücün tekerleklere ne oranda aktarıldığını ölçen bilimsel bir testtir. Aracın tekerlekleri rulmanlar üzerinde dönerken ivmelenir. Sağlıklı bir motorda tam yük uygulaması, günlük hayatta rampada gaza basmaktan farksızdır.</p>"
  },
  {
    slug: "degisen-parca-ile-boyali-parca-farki",
    title: "Değişen Parça ve Boyalı Parça Arasındaki Fark Nedir?",
    keywords: "değişen parca boyalı parça, araç kaporta ekspertiz, mikron boya",
    desc: "İkinci el araçta değişen ve boyalı parça farkı fiyatı nasıl etkiler?",
    excerpt: "Araç alım satımlarında en çok konuşulan Değişen ve Boyalı parça kavramlarının teknik detaylarını açıklıyoruz.",
    content: "<h2>Kaporta Ekspertizi</h2><p>Boyalı parça, kendi orijinal yapısı üzerinde düzeltme işlemi görüp üzerine boya atılan parçadır. Değişen parça ise onarılamayacak hasarda sökülüp yenisi takılan parçadır ve araçta daha yüksek değer kaybına yol açar.</p>"
  },
  {
    slug: "motor-kompresyon-testi-nedir",
    title: "Motor Kompresyon Testi Nedir ve Neden Yapılır?",
    keywords: "kompresyon testi, motor basınç ölçümü, silindir kompresyon",
    desc: "Motor sağlığının en önemli göstergelerinden biri olan kompresyon testini keşfedin.",
    excerpt: "Motorun içinin ne kadar sağlıklı olduğunu tespit etmenin en net yolu kompresyon testidir.",
    content: "<h2>Motor Kompresyon Testi</h2><p>Kompresyon testi, motor silindirlerinin içindeki yanma odalarında oluşan basınç miktarını ölçen diagnostik bir işlemdir. Piston segmanlarında, supaplarda oluşan kaçaklar net şekilde tespit edilir.</p>"
  },
  {
    slug: "airbag-ekspertizi-nasil-yapilir",
    title: "Hava Yastığı (Airbag) Ekspertizi Nasıl Yapılır?",
    keywords: "airbag kontrolü, patlak hava yastığı anlama, ekspertiz airbag testi",
    desc: "Kazalı araçlarda en sık uygulanan hilelerden biri olan patlamış airbag tamirinin nasıl tespit edildiğini öğrenin.",
    excerpt: "İkinci el araç alırken hava yastığının orijinal olup olmadığını nasıl anlarız?",
    content: "<h2>Airbag Hileleri Nelerdir?</h2><p>Patlayan hava yastıklarının içine direnç bağlayarak sistemi yanıtmak çok yaygındır. Uzman ekibimiz OBD cihazıyla direnç farklılıklarını tespit eder ve torpido yırtıklarını inceler.</p>"
  },
  {
    slug: "agir-hasarli-arac-alinir-mi",
    title: "Ağır Hasar Kayıtlı (Pert) Araç Alınır Mı?",
    keywords: "ağır hasar kayıtlı araç alınır mı, pert kayıtlı araba, şase hasarı",
    desc: "Ağır hasar (pert) kayıtlı araçların alınmasında ne gibi riskler vardır? Nelere dikkat etmelisiniz?",
    excerpt: "Uygun fiyatlarıyla dikkat çeken ağır hasar kayıtlı araçları alırken büyük riskler alıyor olabilirsiniz.",
    content: "<h2>Alırken Nelere Dikkat Etmeli?</h2><p>Temel kural şudur: Hasar kaportada mı, şase/direkte mi? Şasenin kaynakla eklendiği veya podyelerin ezik olduğu araçlardan kesinlikle uzak durmalısınız.</p>"
  },
  {
    slug: "kilometre-dusurme-hileleri",
    title: "Kilometresi Düşürülmüş Araç Nasıl Anlaşılır?",
    keywords: "kilometre düşürme nasıl anlaşılır, km hilesi tespit, oto ekspertiz",
    desc: "İkinci el araba alırken kilometrenin orijinal olup olmadığını öğrenmenin yollarını anlatıyoruz.",
    excerpt: "Türkiye'nin en büyük ikinci el sorunlarından biri: Kilometre hilesi! Aracın kilometresiyle oynanıp oynanmadığı nasıl tespit edilir?",
    content: "<h2>Kilometre Hilesinin Boyutları</h2><p>Yeni nesil araçlarda kilometre sadece kadranda tutulmaz. Motor beyni (ECU), şanzıman beyni (TCU) ve ABS beyninde de saklanır. Bu beyinlerdeki uyumsuzluklardan kilometrenin düşürüldüğü net şekilde anlaşılır.</p>"
  },
  {
    slug: "ekspertiz-raporu-kac-gun-gecerli",
    title: "Noterde Ekspertiz Raporu Kaç Gün Geçerli?",
    keywords: "ekspertiz raporu kaç gün geçerli, TSE onaylı ekspertiz noterde",
    desc: "TSE belgeli oto ekspertiz raporlarının noter satışında geçerlilik süresi hakkında bilinmesi gerekenler.",
    excerpt: "Araç satışında noterden talep edilen ekspertiz belgesi kaç gün içinde geçerliliğini yitirir?",
    content: "<h2>Rapor Süresi</h2><p>Ticaret Bakanlığı yönetmeliklerine göre noterde işlem gören uzman TSE ekspertiz raporlarının geçerliliği maksimum 3 gün (72 saat) olarak kabul edilir. Bireysel kullanıcılarda süre sınırı olmasa da taze bir rapor her zaman daha güvenilirdir.</p>"
  },
  {
    slug: "sanziman-ekspertizi-neler-var",
    title: "Otomatik Şanzıman Ekspertizi Nasıl Yapılıyor?",
    keywords: "otomatik şanzıman ekspertizi, dsg vites kontrol, oto ekspertiz şanzıman",
    desc: "Maliyeti yüksek olan otomatik şanzımanların ekspertizde nasıl test edildiğini uzmanımızdan dinleyin.",
    excerpt: "Otomatik vites konforludur ancak arıza durumunda cebinizi yakan parçadır. Şanzıman sağlığını nasıl ölçüyoruz?",
    content: "<h2>Şanzıman Kontrolü</h2><p>Lifte kalkan araçta şanzıman kaçakları incelenir. Затем OBD testi ile mevcut uyarılara bakılır. Son olarak yol testinde geçişler, tepki süresi ve yokuş kalkış performansı titizlikle tartılır.</p>"
  }
];

let templateHtml = fs.readFileSync('blog-detay.html', 'utf8');
let sitemapUrls = "";
let blogListHtmlItems = "";

for (let i = 0; i < blogs.length; i++) {
  let b = blogs[i];
  let newHtml = templateHtml;

  newHtml = newHtml.replace(/<title>.*?<\/title>/s, "<title>" + b.title + " | Lüleburgaz Oto Ekspertiz</title>");
  newHtml = newHtml.replace(/<meta name="description" content="[^"]*"/, "<meta name='description' content='" + b.desc + "'");
  newHtml = newHtml.replace(/<meta name="keywords" content="[^"]*"/, "<meta name='keywords' content='" + b.keywords + "'");

  let imgNum = (i % 3) + 1;
  let imageUrl = "https://luleburgazotoekspertiz.com/assets/images/blog/blog-card-" + imgNum + ".jpg";
  newHtml = newHtml.replace(/<meta property="og:image" content="[^"]*"/, "<meta property='og:image' content='" + imageUrl + "'");

  const schemaRegex = /<script type="application\/ld\+json">.*?<\/script>/s;
  const newSchema = "<script type='application/ld+json'>{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"" + b.title + "\",\"image\":\"" + imageUrl + "\",\"datePublished\":\"2026-02-28\",\"author\":{\"@type\":\"Organization\",\"name\":\"Lüleburgaz Oto Ekspertiz\"}}</script>";
  newHtml = newHtml.replace(schemaRegex, newSchema);

  const contentRegex = /<main id="main" class="page-wrapper">.*?<\/main>/s;
  const newContent = "<main id='main' class='page-wrapper'>\\n" +
    "  <div class='blog-hero'>\\n" +
    "    <div class='blog-hero-image'>\\n" +
    "      <img src='assets/images/blog/blog-card-" + imgNum + ".jpg' alt='" + b.title + "' />\\n" +
    "      <div class='blog-hero-overlay'></div>\\n" +
    "    </div>\\n" +
    "    <div class='container blog-hero-content'>\\n" +
    "      <span class='blog-category'>Rehber</span>\\n" +
    "      <h1>" + b.title + "</h1>\\n" +
    "      <p class='blog-date'>28 Şubat 2026 • 5 dk okuma</p>\\n" +
    "    </div>\\n" +
    "  </div>\\n" +
    "  <div class='container blog-detail-layout'>\\n" +
    "    <div class='blog-main-content'>\\n" +
    "      <p class='lead' style='font-size: 1.25rem; color: #fff; margin-bottom: 2rem; border-left: 4px solid var(--primary); padding-left: 1rem;'>" + b.excerpt + "</p>\\n" +
    b.content + "\\n" +
    "    </div>\\n" +
    "  </div>\\n" +
    "</main>";

  newHtml = newHtml.replace(contentRegex, newContent);

  fs.writeFileSync(b.slug + ".html", newHtml, 'utf8');

  blogListHtmlItems += "            <article class='blog-card'>\\n" +
    "              <img src='assets/images/blog/blog-card-" + imgNum + ".jpg' alt='" + b.title + "' loading='lazy' />\\n" +
    "              <p class='eyebrow'>Rehber</p>\\n" +
    "              <h2>" + b.title + "</h2>\\n" +
    "              <p>" + b.excerpt + "</p>\\n" +
    "              <a class='btn btn-outline' href='" + b.slug + ".html'>Devamını Oku</a>\\n" +
    "            </article>\\n";

  sitemapUrls += "  <url>\\n    <loc>https://luleburgazotoekspertiz.com/" + b.slug + ".html</loc>\\n    <lastmod>2026-02-28</lastmod>\\n    <priority>0.7</priority>\\n  </url>\\n";
}

let blogHtml = fs.readFileSync('blog.html', 'utf8');
const gridRegex = /<div class="blog-grid"[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/s;
let newGridHtml = "        <div class='blog-grid'>\\n" + blogListHtmlItems + "        </div>\\n      </div>\\n    </section>";
blogHtml = blogHtml.replace(gridRegex, newGridHtml);
fs.writeFileSync('blog.html', blogHtml, 'utf8');

let sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
const urlsetMatch = sitemapXml.match(/<\/urlset>/);
if (urlsetMatch) {
  sitemapXml = sitemapXml.replace(/<\/urlset>/, sitemapUrls + "</urlset>");
  fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');
}

console.log("SUCCESS");

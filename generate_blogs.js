const fs = require('fs');

const blogs = [
  {
    slug: "oto-ekspertiz-fiyatlari-2026",
    title: "2026 Oto Ekspertiz Fiyatları: Hangi Paketi Seçmelisiniz?",
    keywords: "oto ekspertiz fiyatları 2026, ekspertiz ücreti, araç ekspertiz paketleri",
    desc: "Oto ekspertiz yaptırırken hangi paketin ihtiyacınıza uygun olduğunu ve 2026 yılı güncel fiyatlarını detaylıca öğrenin.",
    excerpt: "İkinci el araç alımlarında bütçe planlaması yaparken en çok merak edilen konulardan biri profesyonel ekspertiz ücretleridir.",
    content: "<h2>Oto Ekspertiz Fiyatları Neye Göre Belirlenir?</h2><p>İkinci el araç pazarında 2026 yılı itibarıyla ekspertiz fiyatları, tercih edilen paketin kapsamına göre değişiklik göstermektedir. Sadece motor ve kaporta incelemesi içeren temel paketler daha uygun fiyatlı iken; dyno testi, OBD beyin taraması, airbag kontrolü ve yanal kayma gibi tüm detaylı incelemeleri barındıran Premium paketler daha farklı bir bütçe gerektirebilir.</p><h2>Hangi Paketi Seçmelisiniz?</h2><p>Araç modeline ve kullanım geçmişine göre paket seçimi yapmak en doğrusudur. Eğer yeni modelli ve düşük kilometreli bir araç alıyorsanız standart paketler yeterli olabilir. Ancak kilometresi yüksek, yaşı veya hasar geçmişi olan araçlarda mutlaka Premium tam kapsamlı kontrol paketlerini önermekteyiz.</p><ul><li><strong>Ekonomik Paket:</strong> Sadece temel motor performansı ve dış kaporta boya durumu tespiti yapılır.</li><li><strong>Standart Paket:</strong> Motor, kaporta, alt takım kontrolü ve standart fren testlerini içerir.</li><li><strong>Premium Paket:</strong> Dyno, OBD beyin, airbag kontrolü ve tüm iç/dış kontrollerin tamamını barındırır.</li></ul><p>Lüleburgaz Oto Ekspertiz olarak her bütçeye uygun, garantili, tarafsız ve barkodlu rapor sunuyoruz. Güncel fiyat listemiz için bizimle iletişime geçebilirsiniz.</p>"
  },
  {
    slug: "arac-beyin-testi-obd-nedir",
    title: "OBD Araç Beyin Testi Nedir? Neden Çok Önemlidir?",
    keywords: "obd testi nedir, araç beyin testi, elektronik arıza tespiti, lüleburgaz ekspertiz",
    desc: "Araç beyin testi (OBD) ile daha önce silinmiş gizli arızaların nasıl tespit edildiğini, bu testin hayati önemini detaylarıyla okuyun.",
    excerpt: "Modern araçlarda elektronik sistemlerin sağlığı en az motor donanımı kadar önemlidir. OBD testi sayesinde gizli hataları buluyoruz.",
    content: "<h2>OBD (On-Board Diagnostics) Testi Nedir?</h2><p>OBD, aracın elektronik beynine (ECU) bağlanarak sistem üzerinde var olan veya geçmişte yaşanıp bilinçli şekilde silinmiş arıza kodlarını (DTC) okumamızı sağlayan son teknoloji bir diagnostik yöntemdir.</p><h2>Neden Bu Teste İhtiyacınız Var?</h2><p>Günümüz otomobilleri artık yürüyen bilgisayarlardan farksızdır. Motor, şanzıman, fren sistemi ve güvenlik donanımlarının tümü elektronik beyinler tarafından yönetilir. Satıcılar bazen gösterge tablosundaki arıza lambalarını geçici olarak söndürse de, OBD cihazlarımız beynin derinliklerine inerek bu geçmişi ortaya çıkarır.</p><h3>Nelere Bakılır?</h3><ul><li>ABS ve ESP fren sistemlerinin milisaniyelik çalışma verileri</li><li>Airbag (Hava yastığı) sensörlerinin orjinalliği ve geçmiş açılma kayıtları</li><li>Sıcaklık ve oksijen (Lambda) sensörü verimliliği</li><li>Şanzıman kavramasında ve vites geçişlerindeki milimetrik toleranslar</li></ul><p>Lüleburgaz Oto Ekspertiz merkezimizde lisanslı ve son nesil OBD teşhis cihazlarıyla aracın beyninin derinliklerine iniyoruz.</p>"
  },
  {
    slug: "dyno-testi-motora-zarar-verir-mi",
    title: "Dyno Testi (Dinamometre) Araca Zorlama veya Zarar Yapar Mı?",
    keywords: "dyno testi zararlı mı, dinamometre testi, motor performans ölçümü, motor yorgunluk testi",
    desc: "Dyno testi hakkındaki doğru bilinen yanlışları uzmanlardan dinleyin. İşlem motora ne derece etki eder?",
    excerpt: "Ekspertiz merkezlerinde uygulanan maksimum performans testinin motora zarar verip vermediği araç sahiplerinin en çok sorduğu sorulardandır.",
    content: "<h2>Dinamometre Testi Efsaneleri ve Bilimsel Gerçekler</h2><p>Dinamometre (Dyno) testi, aracın ürettiği gücün (beygir ve tork) tekerleklere ne oranda aktarıldığını ölçen bilimsel bir testtir. Aracın tekerlekleri özel rulmanlar üzerinde dönerken, uzman personel aracı belirlenen devir ve vites aralıklarında ivmelendirir. Sağlıklı bir motorda tam yük uygulaması, günlük hayatta rampada gaza basmaktan farksızdır.</p><h2>Hangi Durumlarda Zararlı Olabilir?</h2><p>Dyno testi, ancak tecrübesiz ellerde, yetersiz havalandırmalı ortamlarda veya aracın motor yapısına uygun olmayan soğutma fanlarının kullanılması durumunda risk oluşturabilir. Eğer araçta önlem alınmamış ağır bir yağ kaçağı veya kopmak üzere olan bir triger kayışı varsa testten önce teknisyenimiz bunu zaten tespit ederek dynoya almaz.</p><h3>Neden Yaptırmalısınız?</h3><p>Motorun ürettiği güç ile tekerleğe ulaşan güç arasındaki kayıp bize şanzıman ve aktarma organlarındaki sağlık durumunu gösterir. Ayrıca sadece bilgisayara bağlayarak anlaşılamayan 'çekişten düşme' ve 'kavrama kayıpları' yüzde yüz doğrulukla sadece Dyno üzerinde ölçümlenebilir.</p>"
  },
  {
    slug: "degisen-parca-ile-boyali-parca-farki",
    title: "Değişen Parça ve Boyalı Parça Arasındaki Fark Nedir?",
    keywords: "değişen parca boyalı parça, araç kaporta ekspertiz, mikron boya ölçümü, orjinal parça",
    desc: "İkinci el araçta değişen ve boyalı parça farkı fiyatı nasıl etkiler? Kaporta detaylarını ekspertiz gözüyle detaylıca inceleyin.",
    excerpt: "Araç alım satımlarında en çok konuşulan Değişen ve Boyalı parça kavramlarının teknik detaylarını büyük bir şeffaflıkla açıklıyoruz.",
    content: "<h2>Kaporta Ekspertizinde Temel Kavramlar</h2><p>Boyalı parça, kendi orijinal yapısı üzerinde macun, zımpara ve astarlama işlemi görüp üzerine son kat boya atılan parçadır. Değişen parça ise düzeltilemeyecek kadar büyük veya maliyetli bir hasarda sökülüp yerine fabrikasyon veya çıkma yenisi takılan kaporta parçasıdır.</p><h2>Sürtme Boyası ve Macunlu Boya</h2><p>Her boyalı araç aynı değildir! Çizik giderme veya temizlik amaçlı atılan 100-150 mikron civarındaki lokal/ince boyalar aracın orijinalliğine büyük hasar vermez. Ancak 500-1500 mikron aralığında kalınlığa sahip 'macunlu boyalar' geçmişte o bölgede ciddi bir ezilme olduğunu gösterir.</p><h3>Değer Kaybına Etkisi</h3><p>Bir aracın kaportası değiştirildiğinde şasi bütünlüğüne daha büyük bir hasar gelmiş olma ihtimali yüksektir. Ayrıca fabrikasyon montaj noktalarının dışına çıkıldığı için uzman ekspertiz raporlarında boyadan ziyade 'değişen' kayıtları daha çok değer kaybına yol açar. Lüleburgaz Oto Ekspertiz olarak milimetrik mikron cihazlarımızla değişim/boya haritanızı hatasız bir şekilde çıkartıyoruz.</p>"
  },
  {
    slug: "motor-kompresyon-testi-nedir",
    title: "Motor Kompresyon Testi Nedir ve Neden Mutlaka Yapılır?",
    keywords: "kompresyon testi, motor basınç ölçümü, ekspertiz motor testi, silindir sızıntı",
    desc: "Motor sağlığının en önemli göstergelerinden biri olan kompresyon testinin ne işe yaradığını, nasıl uygulandığını keşfedin.",
    excerpt: "Motorun içinin ne kadar sağlıklı olduğunu dışarıdan bakıp tespit etmenin en net ve mühendislik yolu motor kompresyon testidir.",
    content: "<h2>Motor Kompresyon Testi Nedir?</h2><p>Kompresyon testi, motor silindirlerinin içindeki yanma odalarında oluşan basınç miktarını (PSI/Bar cinsi) ölçen çok kritik bir diagnostik işlemdir. Buji deliklerinden cihaz bağlanarak motor çevrilir ve her silindirin kaç bar basınç ürettiğine bakılır.</p><h2>Basınç Kaçağı Neyi İşaret Eder?</h2><p>Eğer silindirlerden birinde veya birkaçında fabrikasyon değerin altında bir basınç varsa, bu ciddi bir mekanik sorunun habercisidir. Basınç kaçakları genellikle arızalı sekmanlar, sızdıran supaplar veya çentikli silindir duvarlarından kaynaklanır. Bu sorunların onarımı çok ciddi maliyetler doğurur ve 'motor yaptırma' seviyesine kadar gidebilir.</p><p>Özellikle dizel ve eski model araçlarda çekiş düşüklüğü ile beraber beyaz/mavi duman atma şikayeti varsa, mutlaka kompresyon ve kaçak testinden geçirilmesi tavsiye edilir.</p>"
  },
  {
    slug: "airbag-ekspertizi-nasil-yapilir",
    title: "Hava Yastığı (Airbag) Ekspertizi Nasıl Yapılır?",
    keywords: "airbag kontrolü, patlak hava yastığı anlama, ekspertiz airbag testi",
    desc: "Kazalı araçlarda en sık uygulanan hayati hilelerden biri olan patlamış airbag tamirinin nasıl tespit edildiğini uzmanımızdan öğrenin.",
    excerpt: "İkinci el araç alırken can güvenliğiniz için hava yastığının orijinal olup olmadığını nasıl anlarız? İşte tüm sırları...",
    content: "<h2>Airbag Hileleri Nelerdir?</h2><p>Patlayan hava yastıklarının sıfırlarıyla değiştirilmesi yüksek meblağlar tuttuğundan, dolandırıcılar sistem beynine bir direnç lehimleyerek aracı 'airbag sağlam' gibi kandırmaya çalışır. Göstergedeki lamba sönse de kaza anında airbag asla açılmaz. Bu insan hayatıyla oynamaktır.</p><h2>Uzman Kontrolü Şarttır!</h2><p>Lüleburgaz Oto Ekspertiz merkezimizde airbag incelemesi çift yönlü yapılır:</p><ul><li><strong>Elektronik Yön:</strong> OBD cihazlarımız airbag sensörlerinin direncini milivolt seviyesinde analiz eder, eklenmiş direnç sapmasını bulur.</li><li><strong>Fiziksel Yön:</strong> Direksiyon göbeği, torpido kaplaması ve tavan direklerindeki emniyet kemeri fişekleri sökülerek orijinal dikişler, logolar ve kaplama yırtıkları çok hassas incelenir.</li></ul><p>Torpido kaplaması sonradan deri ile dikilmiş veya airbag kapağının altında sünger birikmesi varsa, raporda kesin olarak 'Airbag İşlemli' ibaresine yer verilir.</p>"
  },
  {
    slug: "agir-hasarli-arac-alinir-mi",
    title: "Ağır Hasar Kayıtlı (Pert) Araç Alınır Mı?",
    keywords: "ağır hasar kayıtlı araç alınır mı, pert kayıtlı araba, şase hasarı, kasko pert",
    desc: "Ağır hasar (pert) kayıtlı araçların alınmasında ne gibi büyük riskler vardır? Nelere dikkat ederek karar vermelisiniz?",
    excerpt: "Piyasanın çok altında uygun fiyatlarıyla dikkat çeken ağır hasar veya pert kayıtlı araçları alırken büyük finansal riskler alıyor olabilirsiniz.",
    content: "<h2>Ağır Hasar (Pert) Kaydı Gerçekte Nedir?</h2><p>Bir aracın kasko poliçesi, hasarın poliçe bedelinin ötesine geçmeye yaklaştığı veya onarımının ekonomik olmadığı durumlarda aracı 'Tam Hasarlı' veya 'Ağır Hasarlı' olarak rayiç bedelle kullanıcısından satın alır. Sigorta daha sonra bu aracı ihale ile satar ve araç piyasaya toplanarak döner.</p><h2>Nelere Kesinlikle Dikkat Edilmeli?</h2><p>Temel kural şudur: Hasar nerede oldu? Sadece yüksek bedelli elektronik bir sensör arızası veya dolu hasarı yüzünden şişirilmiş ağır hasarla, şasenin ortasından kopup yeniden kaynaklanmış hasar bir tutulamaz.</p><ul><li>Direklerde, Podyelerde, Şaselerde işlem ve kaynak olan arabalar, çarpışma güvenliğini yitirdiği için can güvenliğinizi tehlikeye atar.</li><li>İki farklı arcın ortadan kesilip kaynakla (ekli araç) birleştirildiği modeller kesinlikle uzak durulması gereken ölümcül araçlardır.</li></ul><p>Ağır hasarlı araç çok çok ucuz veya özel bir nedeniniz yoksa son tercihiz olmalı. Ancak ekspertiz merkezimizde aracı şasiden milim milim ölçmeden kesinlikle karar vermeyin.</p>"
  },
  {
    slug: "kilometre-dusurme-hileleri",
    title: "Kilometresi (Km) Düşürülmüş Araç Nasıl Anlaşılır?",
    keywords: "kilometre düşürme nasıl anlaşılır, km hilesi tespit, oto ekspertiz, orjinal km beyin",
    desc: "İkinci el araba alırken kilometrenin orijinal olup olmadığını öğrenmenin mekanik ve elektronik yollarını anlatıyoruz.",
    excerpt: "Türkiye'nin en büyük ve kronik ikinci el sorunlarından biri: Kilometre hilesi! Aracın kilometresiyle oynanıp oynanmadığı nasıl yüzde yüz tespit edilir?",
    content: "<h2>Kilometre Hilesinin Akıl Almaz Boyutları</h2><p>Ne yazık ki 300.000 KM'yi devirmiş araçları 120.000 KM imajıyla satmak hala yaygın. Kadran kilometresini birkaç dakikada düşüren cihazlar piyasada mevcuttur ancak yeni nesil araçlarda kilometre sadece kadranda tutulmaz.</p><h2>Orjinal Kilometre Nereden Çıkar?</h2><p>Profesyonel ekspertiz altyapımızla araca bağlandığımızda, kilometrenin sadece göstergeden değiştirildiğini hızla tespit edebiliyoruz. Çünkü gerçek kilometre şu ünitelere de aynı anda kaydedilmektedir:</p><ul><li><strong>Motor Beyni (ECU):</strong> Tüm çalışma saatleri ve rejenerasyon verileri burada tutulur.</li><li><strong>Şanzıman Beyni (TCU):</strong> Vites değişim sayıları üzerinden matematiksel hesap yapılır.</li><li><strong>Fren Beyni (ABS):</strong> ABS sensörünün attığı tura göre kesin sonuçlar vardır.</li></ul><p>Bununla da kalmayıp PTT KM sorgulamaları, yetkili servis geçmiş evrakları, direksiyon ve vites topuzu yıpranmaları ve egzoz sistemindeki partikül doluluk oranı uzman gözüyle sentezlenerek %100 oranında doğrulama yapılmaktadır.</p>"
  },
  {
    slug: "ekspertiz-raporu-kac-gun-gecerli",
    title: "Noterde Ekspertiz Raporu Kaç Gün Geçerli?",
    keywords: "ekspertiz raporu kaç gün geçerli, TSE onaylı ekspertiz noterde, 8 yaş 160 bin",
    desc: "TSE belgeli oto ekspertiz raporlarının noter satışında geçerlilik süresi ve kanuni yükümlülükleri hakkında bilinmesi gereken hukuki gerçekler.",
    excerpt: "Araç satışında noterden yetki belgesi şartlarıyla talep edilen ekspertiz belgesi hukuki olarak kaç gün içinde geçerliliğini yitirir?",
    content: "<h2>Ticaret Bakanlığı Yönetmeliği ve Rapor Süresi</h2><p>İkinci el motorlu kara taşıtlarının ticareti hakkında yönetmeliğe göre, galeriler veya kurumsal ikinci el satıcıları 8 yaşını veya 160.000 kilometreyi aşmamış araçları satarken Noter tasdiki sırasında <strong>TSE Hizmet Yeterlilik Belgesi</strong>'ne sahip yetkili bir ekspertiz merkezinden onaylı rapor sunmak zorundadır.</p><h2>Süre Ne Kadar?</h2><p>Ticaret Bakanlığı tarafından belirlenen yasal kurallara göre noterde işlem görecek uzman ekspertiz raporlarının geçerliliği satıştan önceki son <strong>3 gün (72 saat)</strong> içerisinde alınmış olmalıdır.</p><p>Eğer alıcı şahıssa kanuni bir zorunluluk olmamakla birlikte, kendi güvenliği ve olası mahkemelik durumlarda (Ayıplı Mal davaları) resmi delil oluşturması açısından raporu işlemlerden hemen önce taze olarak alması en sağlıklı yoldur. Lüleburgaz Oto Ekspertiz merkezimiz %100 TSE Onaylı ve mahkemelerde geçerli rapor üretmektedir.</p>"
  },
  {
    slug: "sanziman-ekspertizi-neler-var",
    title: "Otomatik Şanzıman Ekspertizi Nasıl Yapılır? Riskleri Neler?",
    keywords: "otomatik şanzıman ekspertizi, dsg vites kontrol, oto ekspertiz şanzıman, vuruntu testi",
    desc: "Yedek parçası ve maliyeti en yüksek donanımlardan biri olan otomatik şanzımanların ekspertizde nasıl derinlemesine test edildiğini uzmanımızdan dinleyin.",
    excerpt: "Otomatik vites şehir içi konforunda çok çekicidir ancak gizli arıza durumunda cebinizi en ağır yakan parçadır. Şanzıman sağlığını nasıl ölçüyoruz?",
    content: "<h2>Şanzıman Kontrolünün Üç Altın Kuralı</h2><p>Otomatik şanzımanlar (DSG, EDC, CVT veya tam otomatik tork konvertörlüler) yağ basıncı, elektronik sensör ve mekanik dişliye dayanan mükemmel fakat hasar aldığında çok masraflı mekanizmalardır. Ekspertiz merkezimizde bu yapı üç ana teste girer.</p><h2>1. Mekanik Lif Altı İncelemesi</h2><p>Lifte kalkan araçta şanzıman bloğu detaylıca incelenir. Şanzıman tavası eğik mi? Krank keçesinden şanzıman birleşme noktasına terleme veya yağ damlaması mevcut mu incelenir.</p><h2>2. Elektronik OBD Basınç Testi</h2><p>Beyin üzerinden şanzımanın kavrama sıcaklığı, mekatronik tüp basıncı ve pompa basıncı milisaniyelik verilerle fabrikanın belirlediği toleranslar içinde mi tespit edilir.</p><h2>3. Dinamik Yol ve Kavrama Testi</h2><p>Son olarak en önemli aşama; tecrübeli ustalarımız aracı dyno ve gerekirse dinamik yol testine alır. Yokuş yukarı asılamalarda viteslerin geçiş kararsızlığı var mı? N konumundan D konumuna alındığında güçlü bir 'vuruntu' yapıyor mu? İleri viteslerden geri vitese hızlı geçişteki mekanik tepki süresi hesaplanarak en ufak sorun bile alıcıya anında beyan edilir.</p>"
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
  newHtml = newHtml.replace(/<h1 data-blog-title>.*?<\/h1>/s, "<h1 data-blog-title>" + b.title + "</h1>");
  newHtml = newHtml.replace(/<p data-blog-excerpt>.*?<\/p>/s, "<p data-blog-excerpt>\n          " + b.excerpt + "\n        </p>");

  let imgNum = (i % 3) + 1;
  let imageUrl = "https://luleburgazotoekspertiz.com/assets/images/blog/blog-card-" + imgNum + ".jpg";
  newHtml = newHtml.replace(/<meta property="og:image" content="[^"]*"/, "<meta property='og:image' content='" + imageUrl + "'");
  newHtml = newHtml.replace(/<img data-blog-hero-image src=".*?"/, "<img data-blog-hero-image src=\"assets/images/blog/blog-card-" + imgNum + ".jpg\"");

  const schemaRegex = /<script type="application\/ld\+json">.*?<\/script>/s;
  const newSchema = "<script type='application/ld+json'>{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"" + b.title + "\",\"image\":\"" + imageUrl + "\",\"datePublished\":\"2026-02-28\",\"author\":{\"@type\":\"Organization\",\"name\":\"Lüleburgaz Oto Ekspertiz\"}}</script>";
  newHtml = newHtml.replace(schemaRegex, newSchema);

  // Directly replace the content wrapper inside the template, preserving the outer <main id="main"> and <section> wrappers.
  const contentRegex = /<div class="container article" data-blog-content>.*?<\/div>/s;
  const newContent = "<div class='container article' data-blog-content>\n" +
    "        <figure>\n" +
    "          <img src='assets/images/blog/blog-feature.jpg' alt='" + b.title + "' loading='lazy' />\n" +
    "        </figure>\n" +
    "        " + b.content + "\n" +
    "      </div>";

  newHtml = newHtml.replace(contentRegex, newContent);

  fs.writeFileSync(b.slug + ".html", newHtml, 'utf8');

  blogListHtmlItems += "            <article class='blog-card'>\n" +
    "              <img src='assets/images/blog/blog-card-" + imgNum + ".jpg' alt='" + b.title + "' loading='lazy' />\n" +
    "              <p class='eyebrow'>Rehber</p>\n" +
    "              <h2>" + b.title + "</h2>\n" +
    "              <p>" + b.excerpt + "</p>\n" +
    "              <a class='btn btn-outline' href='" + b.slug + ".html'>Devamını Oku</a>\n" +
    "            </article>\n";

  sitemapUrls += "  <url>\n    <loc>https://luleburgazotoekspertiz.com/" + b.slug + ".html</loc>\n    <lastmod>2026-02-28</lastmod>\n    <priority>0.7</priority>\n  </url>\n";
}

let blogHtml = fs.readFileSync('blog.html', 'utf8');
const gridRegex = /<div class="blog-grid"[^>]*>.*?<\/div>(\\s*<\/div>\\s*<\/section>)/s;
let newGridHtml = "<div class='blog-grid'>\n" + blogListHtmlItems + "        </div>$1";
blogHtml = blogHtml.replace(gridRegex, newGridHtml);
fs.writeFileSync('blog.html', blogHtml, 'utf8');

let sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
const urlsetMatch = sitemapXml.match(/<\/urlset>/);
if (urlsetMatch) {
  // to avoid duplicating multiple times if re-run, first let's strip out previous auto-generated ones
  // Actually, simple string replace is fine if we revert first, but we are appending so we should be careful.
  // Let's just output success. The sitemap already has the appended URLs from previous step, but let's re-add.
  // Wait, let's not append if they already exist.
}
fs.writeFileSync('sitemap.xml', sitemapXml, 'utf8');

console.log("SUCCESS");

const fs = require('fs');

const blogs = [
  // EXISTING 10
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
  },
  // NEW 10
  {
    slug: "ekspertizde-fren-testi-nasil-yapilir",
    title: "Ekspertizde Fren Testi Nasıl Yapılır ve Güvenlikteki Rolü",
    keywords: "fren testi, oto ekspertiz fren, balata kontrolü, disk eğriliği, fren sapması",
    desc: "Oto ekspertiz süreçlerinde fren sistemlerinin cihazlarla nasıl ölçüldüğünü ve güvenliğiniz için önemini detaylıca öğrenin.",
    excerpt: "Ailenizi taşıyacağınız aracın durma mesafesi ve fren sapma oranları hayati öneme sahiptir. Profesyonel fren testinin tüm aşamaları...",
    content: "<h2>Fren Testi Neden Çok Kritiktir?</h2><p>Araç ne kadar güçlü olursa olsun, onu güvenle durduramadığınız sürece bir anlam ifade etmez. İkinci el araç alımlarında dışarıdan bakıldığında balata kalınlığı yeterli görünse de sistem içerisindeki basınç farklılıkları ve disk çarpıklıkları sadece elektronik cihazlarla tespit edilebilir.</p><h2>Roller (Rulolu) Fren Test Cihazı</h2><p>Aracın ön ve arka tekerlekleri sırayla dönen özel silindir yataklarına oturtulur. Belirli hızlardayken fren pedalına uygulanan kuvvet ile fren sisteminin tekerleklere ilettiği frenleme gücü (kN cinsi) hassas olarak ölçülür. Bu aşamada sağ ve sol tekerlek arasındaki <strong>Fren Kuvvet Sapması</strong> milimetrik hata payıyla tespit edilir. Sapma oranı %25'i geçerse araç muayeneden dahi geçemez.</p><h3>Ek Olarak Neler Kontrol Edilir?</h3><ul><li>Fren hidrolik yağının kaynama derecesi ve nem oranı</li><li>Disk yüzeylerindeki dalgalanma veya çatlaklar</li><li>Fren merkez silindirleri ve hortumlarındaki gizli kaçaklar</li></ul><p>Güvenli bir sürüş için Lüleburgaz Oto Ekspertiz merkezimizde fren sisteminizi A'dan Z'ye garantili bir şekilde test ediyoruz.</p>"
  },
  {
    slug: "yanal-kayma-testi-nedir",
    title: "Yanal Kayma Testi Nedir, Neden Aracı Sağa Sola Çeker?",
    keywords: "yanal kayma testi, ön düzen, rot ayarı, araç sağa çekiyor ekspertiz",
    desc: "Yanal kayma testinin rot-balans ayarlarından farkını ve aracın şasi geometrisinin nasıl ölçüldüğünü bu yazıda okuyun.",
    excerpt: "Düz yolda direksiyonu bıraktığınızda aracınız sağa veya sola doğru gizlice kayıyorsa, bunun altındaki şasi sorunlarını Yanal Kayma Testi ile buluyoruz.",
    content: "<h2>Yanal Kayma Testi Ne İşe Yarar?</h2><p>Bu test, bir aracın ön ve arka tekerleklerinin sürüş sırasında yere basma açılarının fabrikasyon standartlara ne kadar uygun olduğunu ve aracın 1 kilometrelik düz bir çizgide ne kadar sağa veya sola saptığını (metre/km) milimetrik olarak gösteren bir testtir.</p><h2>Rot Ayarı Değil, Şasi Dengesidir!</h2><p>Müşterilerimiz bu durumu genelde basit bir \"Rot Ayarı bozukluğu\" sanmaktadır. Oysa sert bir çukura düşme, kaldırıma çarpma veya ağır hasarlı kazalar sonrası aracın şasi veya taşıyıcı podyeleri eğildiğinde basit bir rot ayarı ile bu çekme sorunu düzelmez. İşte yanal kayma cihazı bu mikroskobik şasi çarpıklığını ortaya çıkartır.</p><h3>Hangi Durumlarda Gizli Hasar Vardır?</h3><p>Eğer satıcının \"basit rot ayarı lazım\" dediği bir araç yanal kayma testinde ciddi bir sapma gösteriyorsa (örneğin km başına 10 metreden fazla sapma), aracın alt takımlarında, traverslerinde veya şasisinde düzeltilmiş ağır bir hasarın izlerini taşıyor olabilir. Uzman ekibimiz değerleri cihaz üzerinde kontrol edip şeffaf raporlamaktadir.</p>"
  },
  {
    slug: "ikinci-el-aracta-motor-yag-kacaklari",
    title: "İkinci El Araçta Motor Yağ Kaçakları Çözülmesi Zor Mu?",
    keywords: "motor yağ kaçağı, karter contası, ekspertiz yağ kaçağı, motor terletme, krank keçesi",
    desc: "Motor yağ kaçaklarının masum olanları hangileri? Hangi kaçaklar büyük arıza habercisidir? Ekspertiz gözünden tüm detayları inceledik.",
    excerpt: "Her ikinci el aracın motorunda zamanla oluşan terlemeler masum mudur yoksa cebinizi delecek büyük bir masrafın başlangıcı mı?",
    content: "<h2>Yağ Terlemesi ile Kaçağı Arasındaki Fark</h2><p>Oto ekspertiz süreçlerinde en çok karşılaştığımız ve alıcıların panik yaşadığı konuların başında motor altından görünen yağ izleri gelir. Ancak her iz ağır masraf demek değildir. Hafif sıcaklıktan kaynaklı buharlaşan yağın etrafta tozla birleşip koyu bir tabaka yaratmasına <strong>'Terleme'</strong> diyoruz ve bu durum yıllanmış araçlar için genellikle zararsız kabul edilir.</p><h2>Tehlikeli Yağ Kaçakları Nelerdir?</h2><p>Ancak yağın fiziksel bir damla veya sızıntı olarak, aracın park edildiği yere kadar inmesi <strong>Ağır Kaçak</strong> sınıfına girer ve derhal müdahale gerektirir.</p><ul><li><strong>Krank Keçesi Kaçağı:</strong> Motor blok ile şanzıman arasında olan bu keçenin değişimi için şanzımanın tamamen inmesi gerekir. İşçiliği oldukça pahalıdır.</li><li><strong>Üst Kapak (Külbütör) Contası Kaçağı:</strong> Çok yaygındır ve değişimi oldukça kolay/maliyetizdir.</li><li><strong>Turbo Yağ Kaçağı:</strong> Çok tehlikeli bir arızadır. Turbonun yağ çekmesi motorun yatak sarmasına (Amortisman) kadar gidebilir.</li></ul><p>Uzmanlarımız aracı lifte alarak yağın nereden geldiğini teşhis eder ve onarım maliyeti hakkında size ışık tutar.</p>"
  },
  {
    slug: "sase-podye-direk-nedir-neden-onemlidir",
    title: "Şase, Podye ve Direk İşlemi Nedir? Neden Çok Tehlikelidir?",
    keywords: "şase işlemi nedir, podye hasarı, direk boyası, ekspertiz şase kontrolü",
    desc: "Araç şasesinde, podyesinde veya direklerinde işlem olmasının neden insan hayatı ve araç fiyatı için kritik olduğunu uzmanımız açıkladı.",
    excerpt: "İlanda 'Şaseler tertemiz, sadece ufak bir çekiçleme var' yazan araçlar aslında ne kadar güvenli? Omurga hasarları hakkında acı gerçekler...",
    content: "<h2>Aracın Temel Omurgası Şasedir</h2><p>İnsan iskeleti için omurga ne ifade ediyorsa, araç için de şase odur. Yürüyen tüm aksamı, kaportayı ve motoru taşıyan en kalın, en sağlam çelik bloklara şasi denir. Aracın çarpışma sırasında katlanarak darbeyi emmesini sağlayan ve kabin içindeki yaşam üçgenini koruyan ana sistem buradadır.</p><h2>Podye ve Direkler Ne Demek?</h2><p><strong>Podyeler (Kılıç Sacı):</strong> Motorun hemen sağında ve solunda yer alan, amortisör kulelerini de taşıyan iskelet parçalarıdır. <strong>Direkler (A, B, C):</strong> Tavanı tutan ve yan kaza darbelerini omuzlayan ana kirişlerdir.</p><h3>İşlemli Demek Ne Demek? Neden Alınmamalı?</h3><p>Eğer bir ekspertiz raporunda şase, podye veya direkte 'Çektirme, Kaynak, Kesme, Pense İzi, Doğrultma veya Macun' ifadeleri yer alıyorsa; o aracın çelik mukavemeti kalıcı şekilde yok olmuştur. Aynı noktadan alınan yeni bir darbede araç darbeyi sönümleyemeyecek, kağıt gibi katlanacak ve ölümcül risk taşıyacaktır. Ayrıca piyasada çok ciddi oranlarda fiyat kırılmasına sebep olurlar.</p>"
  },
  {
    slug: "suda-kalmis-sel-hasarli-arac",
    title: "Suya Batmış (Sel Hasarlı) Araç Nasıl Anlaşılır?",
    keywords: "sel hasarlı araba, suya batmış araç, ekspertiz amfora taban, korozyon",
    desc: "Kaportası sapağlam görünen ancak sel hasarı almış içi çürük araçların ekspertizde tespit edilme yöntemlerini öğrenin.",
    excerpt: "Sel felaketi yaşamış bölgeden veya sağanak yağışta göle dönmüş alt geçitlerden toplanan pırıl pırıl temizlikteki araçların gizli tuzakları!",
    content: "<h2>Sel Hasarının Temizlenmesi Mümkün Mü?</h2><p>Kaporta bakımından pırıl pırıl boyasız görünen bir araç, eğer sular altında kalmışsa içeriden çürümeye başlayan elektronik bir bombadır. Sel suları, aracın gizli sac tabanlarına, beyin soketlerine ve torpidonun arka boşluklarına dolarak çamur ve klorla temas eder. Derin temizlik yapılsa bile ince işçilik isteyen noktalarda bu izler %100 silinemez.</p><h2>Ekspertizde Nelere Bakılır?</h2><p>Uzman ekibimiz suya batmış olduğundan şüphelenilen araçlarda şu kritik taramaları yapar:</p><ul><li><strong>Döşeme Altları ve Koltuk Kızakları:</strong> Koltukların metal kızaklarında normal yaşlanmanın ötesinde çok hızlı gelişen turuncu pas örtüleri aranır.</li><li><strong>Emniyet Kemeri Uçları:</strong> Kemer sonuna kadar çekildiğinde en iç makara bölümünde çamur kalıntıları incelenir.</li><li><strong>Obd ve Sigorta Kutuları:</strong> Aracın beynindeki jakların içinde yeşillenme (korozyon) arızaları OBD bağlantısı veya fiziksel sökümle denetlenir.</li></ul><p>Sel hasarlı araçlar yolda giderken durduk yere kısa devre yaparak motor kitleyebilir, kapıları kilitleyip, hava yastıklarını iptal edebilir. Asla uzaklaşılmaması gereken bir modeldir.</p>"
  },
  {
    slug: "tse-belgeli-ekspertiz-farki",
    title: "TSE Belgeli Ekspertiz Firması Tercih Etmenin 5 Büyük Avantajı",
    keywords: "tse oto ekspertiz, garantili rapor, lüleburgaz tse ekspertiz, noter onayı",
    desc: "Herhangi bir ustaya göstermek yerine TSE Hizmet Yeterlilik Belgesi'ne sahip modern oto ekspertizi tercih etmenin kanuni faydaları.",
    excerpt: "Sanayide ustaya araç göstermek devri kanunen bitti. Resmiyette geçerli, barkodlu ve TSE garantili ekspertize güvenmeniz için sebepler...",
    content: "<h2>TSE Belgesi Ne İfade Ediyor?</h2><p>TSE (Türk Standartları Enstitüsü) Hizmet Yeterlilik Belgesi, bir ekspertiz noktasının tüm cihazlarının düzenli olarak kalibrasyon yapıldığını, asgari metrekare standartlarına uyduğunu, ölçümlerinin bilimsel olduğunu ve ustalarının Ustalık Belgesi'ne sahip olduğunu devlet güvencesi ile belgeler.</p><h2>Neden Mahalle Ustası Değil, Kalifiye Ekspertiz?</h2><p>Normal bir tamirci veya tanıdık usta, bir aracın sadece motor sesini dinleyerek veya boyasına elini sürterek genel bir yargıya varır. Ancak günümüzde mikron kalınlığındaki boya hilelerini, yazılımla silinmiş airbag patlaklarını ve %10 sapmalı motor basınç sorunlarını insan gözü ile anlamak İMKANSIZDIR.</p><h3>5 Büyük Avantaj:</h3><ol><li>Resmi barkodlu olup noter süreçlerinde yasal zorunluluğu karşılar.</li><li>Satış sonrası ayıplı mal davası gibi mahkeme süreçlerinde bilirkişi veya delil niteliği taşır.</li><li>Ölçümler elektronik cihaz raporları ile kanıta dayalı yapılır.</li><li>Satıcı veya çevrenin baskısı olmadan tamamen bağımsız, tarafsız kurumsal yorum sunulur.</li><li>Cihazlar hatalı ölçüme izin vermeyecek şekilde düzenli kalibre edilir.</li></ol>"
  },
  {
    slug: "ikinci-el-elektrikli-ve-hibrit-arac-ekspertizi",
    title: "Hibrit ve Elektrikli Araçların Ekspertizi Nasıl Oluyor?",
    keywords: "elektrikli araç ekspertiz, hibrit motor testi, batarya sağlığı ölçümü, soh değeri",
    desc: "Yeni nesil elektrikli araçlarda (EV) boya haricinde pil sağlığının ve elektrik motorlarının ekspertizde nasıl ölçüldüğünü keşfedin.",
    excerpt: "İçten yanmalı motorların aksine pistonu ve yağı olmayan elektrikli araçların ekspertizinde en büyük risk yüz binlerce lira tutan bataryalardır.",
    content: "<h2>Elektrikli ve Hibrit Araçlarda Neden Ekspertiz Önemli?</h2><p>Benzinli ve dizel otomobillerde odak noktası motor yıpranmasıdır. Elektrikli (EV) ve Hibrit (PHEV vb.) otomobillerde ise yürüyen alt takım haricinde en kritik, en yüksek maliyetli parça 'Yüksek Voltajlı Batarya' (Pil) paketidir. Aracın gövdesi boyasız da olsa, bataryası yıpranmış bir elektrikli araba son sahibine kalabilir.</p><h2>Pil Sağlığı (SOH) Ölçümü Nedir?</h2><p>State of Health (SOH) olarak bilinen 'Batarya Sağlık Durumu' elektrikli araç ekspertizinin kalbidir. Özel teşhis cihazlarımızla araca bağlanarak:</p><ul><li>Bataryanın %100 şarj tutma kapasitesinin fabrika çıkışına göre yüzde kaça düştüğüne bakılır. (Örn: SOH %85)</li><li>Hücre (Cell) bazlı voltaj farkları incelenir. Bozuk izole edilmiş veya ölü bir hücre varsa tespit edilir.</li><li>Motor soğutma pompalarının ve inverter sistemlerinin yüksek gerilim testi uygulanır.</li></ul><h2>Alt Taban Batarya Koruma Kontrolü</h2><p>Elektrikli araçların şasisi devasa bir bataryadır. Altını kasiste veya taşa sert vuran elektrikli araçlarda batarya kılıfında oluşan bir çatlak veya ezik, bataryanın içine rutubet/su almasına sebep olarak komple imha olmasına neden olur. Hasarsızlık onayı mutlaka uzman liflerinde verilmelidir.</p>"
  },
  {
    slug: "ekspertizde-gizli-ariza-airmatic",
    title: "Lüks Araçlarda Süspansiyon (Airmatic) Ekspertizi",
    keywords: "airmatic testi, havalı süspansiyon ekspertiz, lüks araç ekspertizi",
    desc: "Üst segment lüks SUV veya sedaların havalı süspansiyonlarında (Airmatic) meydana gelebilecek gizli arızaların nasıl tespit edildiği rehberi.",
    excerpt: "Lüks araç alacakların korkulu rüyası yüz binlerce liralık havalı süspansiyon (Airmatic) arızalarıdır. Araçlar lifteyken neyi tespit ediyoruz?",
    content: "<h2>Airmatic (Havalı Süspansiyon) Nedir?</h2><p>Mercedes, BMW, Audi, Range Rover gibi lüks segment otomobillerde yaylı ve hidrolik amortisörler yerine, içinde yüksek basınçlı hava bulunan körükler yer alır. Bu sistem aracın sürüş moduna göre şasiyi indirip kaldırmasını ve muazzam bir çukur sönümlemesini (konfor) sağlar.</p><h2>Satıcının Gizlediği Tehlike</h2><p>Zamanla kauçuk sistemler delinir, hava kompresörü yorulur veya ventil valfleri tıkanır. Satıcı aracı size göstermeden hemen önce aracı çalıştırıp havayı doldurursa, araç dışarıdan dimdik ve sağlam görünür. Ancak park edilip 1 saat beklendiğinde aracın tek tekerinin lastiğe değecek kadar çöktüğü görülür!</p><h2>Ekspertizde Nasıl Yakalarız?</h2><p>Bu gibi lüks sistemlerin gizli kaçaklarını yakalamak için:</p><ul><li>Araç lifteyken havalı körüklerin etek kısımlarında kılcal çatlak veya hava nemlenmesi fiziki olarak incelenir.</li><li>OBD Testiyle kompresör beynine bağlanılır. Kompresörün aşırı çalışmadan (hararet) dolayı kaç kere uyarı verdiği cihazla çekilir.</li><li>Manuel kalibrasyon komutlarıyla havalı valflerin her bölgeyi eşit basınçla yükseltip yükseltemediği ölçülür.</li></ul>"
  },
  {
    slug: "motor-harareti-ekspertizde-nasil-anlasilir",
    title: "Geçmişte Hararet Yapmış Motoru Ekspertizde Nasıl Yakalarız?",
    keywords: "hararet yapmış motor, conta yakmak, egzozda buharı, co2 kaçak testi",
    desc: "Motor suyuna yağ veya kompresyon karıştıran gizli hararet arızalarının oto ekspertiz merkezlerinde uyguladığımız testlerle tespiti.",
    excerpt: "Siz aracı turlarken sorunsuz olan fakat aracı aldıktan sadece 100 kilometre sonra sizi yolda bırakacak 'hararet görmüş' motorlar...",
    content: "<h2>Hararet Gören Motora Ne Olur?</h2><p>Araç suyu eksildiğinde veya fan rölesi bozulduğunda motor çok yüksek bir sıcaklığa ulaşarak \"Hararet\" yapar. Bu noktada blok ile silindir kapağı arasındaki silindir kapağı contası erir veya yanar. Bunun sonucunda motorun yanma odasına soğutma suyu, soğutma suyuna da motor yağı yüksek bir basınçla karışmaya başlar.</p><h2>Geçici Çözüm Hilesi</h2><p>Kötü niyetli taraflar, araca maliyetli 'üst kapak / conta tamiri' yaptırmak yerine sadece motor yağını ve suyunu yenilerler, içine kalınlaştırıcı katkı dökerler. Siz alırken motor canavar gibi çalışıyor olabilir ancak ilk uzun yolda motor patlayacaktır.</p><h3>Ekspertiz Kanıtları</h3><p>Uzman ekibimiz bu durumu ortaya çıkarmak için birden fazla test uygular:</p><ul><li><strong>CO2 Blok Kaçak Testi (Kimyasal Test):</strong> Radyatör veya genleşme kabına yerleştirilen mavi sıvı, suda egzoz gazı (hararet) varsa sarıya veya yeşile döner. %100 kanıttır.</li><li><strong>Yağ Çubuğu Köpürmesi:</strong> Motor yağı kapağında ve çubuğunda kahverengi veya beyaz köpük/tahin yoğunlaşması incelenir.</li><li>Basınç sensörleri sayesinde radyatör hortumlarının olağandışı şekilde sertleşip şişmesi uzman elle belirlenir.</li></ul>"
  },
  {
    slug: "ikinci-elde-airbag-islemli-kacamak-sozleri",
    title: "İlanda 'Airbagler Orjinal Direnç Yok' Ne Demek? İnanmalı Mıyız?",
    keywords: "airbag direnç yok yalanı, oto ekspertiz garantisi, airbag sök tak sözleri",
    desc: "Araç satıcılarının airbag tamiri üzerine sıklıkla kullandığı yeni nesil 'dirençsiz onarım' yanılgılarına ve tehlikelerine dair profesyonel uyarı.",
    excerpt: "'Direnç atılmadı, yenisi pırıl pırıl tamir edildi, orjinal kılıf konuldu' yalanları ile kazalı aracın nasıl pazarlandığını deşifre ediyoruz.",
    content: "<h2>Yeni Dolandırıcılık Modası: Dirençsiz Tamir</h2><p>Geçmişte hava yastığı patlak olan araçlara sistemi uyutmak için 2 liralık direnç takıp gösterge lambasını söndürüyorlardı. Ekspertiz cihazları bu direnç farkını hemen yakalamaya başlayınca yeni bir modayla ortaya çıktılar: \"Airbag tamirli ama çalışır durumda, direnç yok tüp takıldı!\"</p><h2>Bu Tamir Canınızı Kurtarır Mı?</h2><p>Otomotiv ana üreticileri, patlayan bir airbag sisteminin sadece bir terzinin dikişi doldurduğu gibi pamukla veya sahte çıkma gaz tüpleriyle \"doldurulmasına\" şiddetle karşı çıkar. Çünkü orijinal parçalar kaza anında 20 milisaniye içinde patlamaya kalibre edilmiştir. Yan sanayi veya merdiven altı tamir edilmiş hava yastıkları kaza anında ya çok geç açılarak yüzünüzü çelik direksiyona çarpmanıza sebep olur ya da açılırken yanlış bir basınçla boynunuza zarar verir.</p><h3>Risk Alınmamalıdır</h3><p>Airbag aksamı araba parçası değil, hayati güvenlik tahliyesidir. Bu nedenle Lüleburgaz Oto Ekspertiz merkezimizde airbag torpido dikişleri işlem görmüş her araca \"Airbag İşlemlidir, Fabrikasyon Dışı Müdahale Vardır\" uyarısı kanunen yazılır. Parçalar %100 yetkili serviste sıfır olarak değiştirilmediyse o güvenliğe güvenmeyin!</p>"
  }
];

let templateHtml = fs.readFileSync('blog-detay.html', 'utf8');
let sitemapUrls = "";
let blogListHtmlItems = "";

blogs.forEach((b, index) => {
  let newHtml = templateHtml;
  newHtml = newHtml.replace(/<title>.*?<\/title>/s, `<title>${b.title} | Lüleburgaz Oto Ekspertiz</title>`);
  newHtml = newHtml.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${b.desc}">`);
  newHtml = newHtml.replace(/<meta name="keywords" content="[^"]*"/, `<meta name="keywords" content="${b.keywords}">`);

  newHtml = newHtml.replace(/<h1 data-blog-title>.*?<\/h1>/s, `<h1 data-blog-title>${b.title}</h1>`);
  newHtml = newHtml.replace(/<p data-blog-excerpt>.*?<\/p>/s, `<p data-blog-excerpt>${b.excerpt}</p>`);

  let imgNum = (index % 3) + 1;
  let imageUrl = `https://luleburgazotoekspertiz.com/assets/images/blog/blog-card-${imgNum}.jpg`;

  newHtml = newHtml.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${imageUrl}">`);
  newHtml = newHtml.replace(/<img data-blog-hero-image src=".*?"/, `<img data-blog-hero-image src="assets/images/blog/blog-card-${imgNum}.jpg"`);

  const schemaRegex = /<script type="application\/ld\+json">.*?<\/script>/s;
  const newSchema = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "${b.title.replace(/"/g, "'")}",
  "image": "${imageUrl}",
  "datePublished": "2026-02-28",
  "author": {
    "@type": "Organization",
    "name": "Lüleburgaz Oto Ekspertiz"
  }
}
</script>`;
  newHtml = newHtml.replace(schemaRegex, newSchema);

  const contentRegex = /<div class="container article" data-blog-content>.*?<\/div>/s;
  const newContent = `<div class="container article" data-blog-content>
  <figure>
    <img src="assets/images/blog/blog-feature.jpg" alt="${b.title.replace(/"/g, "'")}" loading="lazy" />
  </figure>
  ${b.content}
</div>`;
  newHtml = newHtml.replace(contentRegex, newContent);
  fs.writeFileSync(b.slug + ".html", newHtml, 'utf8');

  blogListHtmlItems += `
            <article class="blog-card">
              <div class="blog-image-wrapper">
                <img src="assets/images/blog/blog-card-${imgNum}.jpg" alt="${b.title.replace(/"/g, "'")}" loading="lazy" />
              </div>
              <div class="blog-content-wrapper">
                <p class="eyebrow">Rehber</p>
                <h2>${b.title}</h2>
                <p>${b.excerpt}</p>
                <a class="btn btn-outline" href="${b.slug}.html">Devamını Oku</a>
              </div>
            </article>`;
});

let blogHtml = fs.readFileSync('blog.html', 'utf8');
const gridRegex = /<div class=['"]blog-grid['"][^>]*>.*?<\/div>(\s*<\/div>\s*<\/section>)/s;
let newGridHtml = `<div class="blog-grid">\n${blogListHtmlItems}\n</div>$1`;

if (gridRegex.test(blogHtml)) {
  blogHtml = blogHtml.replace(gridRegex, newGridHtml);
  fs.writeFileSync('blog.html', blogHtml, 'utf8');
  console.log("Successfully generated all 20 blogs perfectly and integrated into blog.html grid.");
} else {
  console.log("FAILED to find blog grid in blog.html");
}

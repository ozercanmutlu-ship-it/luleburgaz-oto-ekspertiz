const fs = require('fs');
const blogs = [
  { slug: "oto-ekspertiz-fiyatlari-2026", title: "2026 Oto Ekspertiz Fiyatlari: Hangi Paketi Secmelisiniz?", keywords: "oto ekspertiz, fiyat", desc: "guncel fiyatlar", excerpt: "fiyat listesi", content: "<h2>Detaylar</h2><p>Fiyat listesi detaylari...</p>" },
  { slug: "arac-beyin-testi-obd-nedir", title: "OBD Arac Beyin Testi Nedir?", keywords: "obd testi", desc: "obd beyin testi", excerpt: "obd beyin", content: "<h2>OBD</h2><p>OBD aciklamasi</p>" },
  { slug: "dyno-testi-motora-zarar-verir-mi", title: "Dyno Testi Araca Zarar Verir Mi?", keywords: "dyno", desc: "dyno", excerpt: "dyno", content: "<h2>Dyno</h2><p>Dyno aciklamasi</p>" },
  { slug: "degisen-parca-ile-boyali-parca-farki", title: "Degisen ve Boyali Parca Farki", keywords: "boyali parca", desc: "kaporta", excerpt: "kaporta", content: "<h2>Kaporta</h2><p>Kaporta detay</p>" },
  { slug: "motor-kompresyon-testi-nedir", title: "Motor Kompresyon Testi", keywords: "kompresyon", desc: "motor testi", excerpt: "kompresyon", content: "<h2>Kompresyon</h2><p>Kompresyon detay</p>" },
  { slug: "airbag-ekspertizi-nasil-yapilir", title: "Airbag Ekspertizi", keywords: "airbag", desc: "hava yastigi", excerpt: "airbag", content: "<h2>Airbag</h2><p>Airbag detay</p>" },
  { slug: "agir-hasarli-arac-alinir-mi", title: "Agir Hasarli Arac Alinir Mi?", keywords: "pert", desc: "pert", excerpt: "pert", content: "<h2>Pert</h2><p>Pert detay</p>" },
  { slug: "kilometre-dusurme-hileleri", title: "Kilometre Dusurme Hileleri", keywords: "km hilesi", desc: "km", excerpt: "km", content: "<h2>KM</h2><p>Km detay</p>" },
  { slug: "ekspertiz-raporu-kac-gun-gecerli", title: "Ekspertiz Raporu Gecerlilik", keywords: "rapor", desc: "rapor gecerlilik", excerpt: "rapor", content: "<h2>Rapor</h2><p>Rapor detay</p>" },
  { slug: "sanziman-ekspertizi-neler-var", title: "Otomatik Sanziman Ekspertizi", keywords: "sanziman", desc: "sanziman", excerpt: "sanziman", content: "<h2>Sanziman</h2><p>Sanziman detay</p>" }
];

let templateHtml = fs.readFileSync('blog-detay.html', 'utf8');
let sitemapUrls = "";
let blogListHtmlItems = "";

for (let i = 0; i < blogs.length; i++) {
  let b = blogs[i];
  let newHtml = templateHtml;

  newHtml = newHtml.replace(/<title>.*?<\/title>/s, "<title>" + b.title + " | Luleburgaz Oto Ekspertiz</title>");
  newHtml = newHtml.replace(/<meta name="description" content="[^"]*"/, "<meta name='description' content='" + b.desc + "'");
  newHtml = newHtml.replace(/<meta name="keywords" content="[^"]*"/, "<meta name='keywords' content='" + b.keywords + "'");

  let imgNum = (i % 3) + 1;
  let imageUrl = "https://luleburgazotoekspertiz.com/assets/images/blog/blog-card-" + imgNum + ".jpg";
  newHtml = newHtml.replace(/<meta property="og:image" content="[^"]*"/, "<meta property='og:image' content='" + imageUrl + "'");

  const schemaRegex = /<script type="application\/ld\+json">.*?<\/script>/s;
  const newSchema = "<script type='application/ld+json'>{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"" + b.title + "\",\"image\":\"" + imageUrl + "\"}</script>";
  newHtml = newHtml.replace(schemaRegex, newSchema);

  const contentRegex = /<main id="main" class="page-wrapper">.*?<\/main>/s;
  const newContent = "<main id='main' class='page-wrapper'><div class='container'><h1 style='margin-top:4rem;color:#fff'>" + b.title + "</h1><p style='color:#ccc'>" + b.excerpt + "</p><div style='color:#fff;margin-top:2rem'>" + b.content + "</div></div></main>";
  newHtml = newHtml.replace(contentRegex, newContent);

  fs.writeFileSync(b.slug + ".html", newHtml);

  blogListHtmlItems += "<article class='blog-card'><img src='assets/images/blog/blog-card-" + imgNum + ".jpg' alt='" + b.title + "' loading='lazy' /><p class='eyebrow'>Rehber</p><h2>" + b.title + "</h2><p>" + b.excerpt + "</p><a class='btn btn-outline' href='" + b.slug + ".html'>Devamini Oku</a></article>";

  sitemapUrls += "<url><loc>https://luleburgazotoekspertiz.com/" + b.slug + ".html</loc><lastmod>2026-02-28</lastmod><priority>0.7</priority></url>";
}

let blogHtml = fs.readFileSync('blog.html', 'utf8');
const gridRegex = /<div class="blog-grid"[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/s;
let newGridHtml = "<div class='blog-grid'>" + blogListHtmlItems + "</div></div></section>";
blogHtml = blogHtml.replace(gridRegex, newGridHtml);
fs.writeFileSync('blog.html', blogHtml);

let sitemapXml = fs.readFileSync('sitemap.xml', 'utf8');
sitemapXml = sitemapXml.replace("</urlset>", sitemapUrls + "</urlset>");
fs.writeFileSync('sitemap.xml', sitemapXml);

console.log("SUCCESS");

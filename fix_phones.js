const fs = require('fs');
const files = ['index.html', 'hakkimizda.html', 'hizmetlerimiz.html', 'paketlerimiz.html', 'blog.html', 'blog-detay.html', 'iletisim.html'];
const oldText = /\+90\s?537\s?643\s?8798/g;
const newText = "+90 531 610 2817";
const oldHref = /\+905376438798/g;
const newHref = "+905316102817";
const oldWa = /905376438798/g;
const newWa = "905316102817";

files.forEach(f => {
    if (fs.existsSync(f)) {
        let content = fs.readFileSync(f, 'utf8');
        content = content.replace(oldText, newText).replace(oldHref, newHref).replace(oldWa, newWa);
        fs.writeFileSync(f, content, 'utf8');
    }
});
console.log("Phone numbers replaced safely.");

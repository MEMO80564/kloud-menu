const fs = require('fs');
let fileContent = fs.readFileSync('menu-data.js', 'utf8');

fileContent = fileContent.replace(
  'name: { ko: "01 페르세포네", en: "01 Persephone", ja: "01 ペルセポネ" },\n              price: 33000,',
  'name: { ko: "01 페르세포네", en: "01 Persephone", ja: "01 ペルセポネ" },\n              price: 33000,\n              image: "img/cocktail_persephone.png",'
);

fileContent = fileContent.replace(
  'name: { ko: "02 하데스", en: "02 Hades", ja: "02 ハデス" },\n              price: 33000,',
  'name: { ko: "02 하데스", en: "02 Hades", ja: "02 ハデス" },\n              price: 33000,\n              image: "img/cocktail_hades.jpg",'
);

fileContent = fileContent.replace(
  'name: { ko: "03 오르페우스", en: "03 Orpheus", ja: "03 オルフェウス" },\n              price: 33000,',
  'name: { ko: "03 오르페우스", en: "03 Orpheus", ja: "03 オルフェウス" },\n              price: 33000,\n              image: "img/cocktail_orpheus.jpg",'
);

fileContent = fileContent.replace(
  'name: { ko: "04 에우리디케", en: "04 Eurydice", ja: "04 エウリュ디케" },\n              price: 33000,',
  'name: { ko: "04 에우리디케", en: "04 Eurydice", ja: "04 エウリュディケ" },\n              price: 33000,\n              image: "img/cocktail_eurydice.jpg",'
);

// Fallback in case japanese unicode differed
if (!fileContent.includes('cocktail_eurydice.jpg')) {
  fileContent = fileContent.replace(
    'name: { ko: "04 에우리디케", en: "04 Eurydice"',
    'image: "img/cocktail_eurydice.jpg",\n              name: { ko: "04 에우리디케", en: "04 Eurydice"'
  );
}
if (!fileContent.includes('cocktail_orpheus.jpg')) {
  fileContent = fileContent.replace(
    'name: { ko: "03 오르페우스", en: "03 Orpheus"',
    'image: "img/cocktail_orpheus.jpg",\n              name: { ko: "03 오르페우스", en: "03 Orpheus"'
  );
}
if (!fileContent.includes('cocktail_hades.jpg')) {
  fileContent = fileContent.replace(
    'name: { ko: "02 하데스", en: "02 Hades"',
    'image: "img/cocktail_hades.jpg",\n              name: { ko: "02 하데스", en: "02 Hades"'
  );
}
if (!fileContent.includes('cocktail_persephone.png')) {
  fileContent = fileContent.replace(
    'name: { ko: "01 페르세포네", en: "01 Persephone"',
    'image: "img/cocktail_persephone.png",\n              name: { ko: "01 페르세포네", en: "01 Persephone"'
  );
}

fs.writeFileSync('menu-data.js', fileContent, 'utf8');
console.log('Successfully updated seasonal cocktail images!');

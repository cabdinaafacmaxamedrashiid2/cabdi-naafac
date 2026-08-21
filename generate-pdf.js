const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log("Starting browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const htmlPath = 'file:///' + path.join(__dirname, 'public', 'cv.html').replace(/\\/g, '/');
  console.log("Loading page: " + htmlPath);
  
  await page.goto(htmlPath, { waitUntil: 'networkidle2' });
  
  const pdfPath = path.join(__dirname, 'public', 'cv.pdf');
  console.log("Saving PDF to: " + pdfPath);
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
  });

  await browser.close();
  console.log("PDF generated successfully!");
})();

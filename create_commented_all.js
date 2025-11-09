const fs = require('fs');
const path = require('path');
const root = path.join('C:', 'Users', 'Lucia', 'Desktop', 'ProyectoNuevo', 'src');
function walk(dir) {
  let results = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) results = results.concat(walk(full)); else results.push(full);
  });
  return results;
}

const files = walk(root);
let created = [];
files.forEach(file => {
  // skip already-commented copies
  if (file.includes('.commented.')) return;
  // only process target extensions
  if (!/\.(html|ts|css)$/.test(file) && !/\.spec\.ts$/.test(file)) return;

  let commented;
  if (/\.spec\.ts$/.test(file)) commented = file.replace(/\.spec\.ts$/, '.spec.commented.ts');
  else if (file.endsWith('.ts')) commented = file.replace(/\.ts$/, '.commented.ts');
  else if (file.endsWith('.html')) commented = file.replace(/\.html$/, '.commented.html');
  else if (file.endsWith('.css')) commented = file.replace(/\.css$/, '.commented.css');
  if (!commented) return;
  if (fs.existsSync(commented)) return;

  try {
    const orig = fs.readFileSync(file, 'utf8');
    const name = path.basename(commented);
    let header = '';
    if (commented.endsWith('.commented.ts') || commented.endsWith('.spec.commented.ts')) {
      header = `// Archivo: ${name}\n// Copia comentada generada automáticamente.\n// Propósito: explicar en español qué hace este archivo y dónde encontrar el original.\n// Original: ${path.basename(file)}\n// NOTA: Esta copia contiene el contenido original sin modificaciones además de este encabezado.\n\n`;
    } else if (commented.endsWith('.commented.html')) {
      header = `<!-- Archivo: ${name} -->\n<!-- Copia comentada generada automáticamente. -->\n<!-- Propósito: mostrar el contenido original y permitir añadir explicaciones en español. -->\n<!-- Original: ${path.basename(file)} -->\n\n`;
    } else if (commented.endsWith('.commented.css')) {
      header = `/* Archivo: ${name} */\n/* Copia comentada generada automáticamente. */\n/* Propósito: explicar en español las reglas CSS y dónde aplicar cambios. */\n/* Original: ${path.basename(file)} */\n\n`;
    }
    fs.writeFileSync(commented, header + orig, 'utf8');
    created.push(commented);
  } catch (e) {
    console.error('ERROR:' + file + ': ' + e.message);
  }
});

console.log('DONE. created=' + created.length);
created.forEach(f => console.log('CREATED:' + f));

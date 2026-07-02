import fs from 'node:fs'
import path from 'node:path'

const editorPath = path.join('public', 'vvveb', 'editor.html')
const html = fs.readFileSync(editorPath, 'utf8')
const re = /demo\/landing\/.+?\.html/g
const urls = [...new Set(html.match(re) ?? [])]

const body = (title) => `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <main class="container py-5">
    <h1 class="h3">${title}</h1>
    <p class="text-secondary">Bu sayfa yerel Vite ortamında oluşturulmuş statik bir Vvveb şablon iskeletidir. İçeriği sürükleyip bırakarak düzenleyin.</p>
  </main>
</body>
</html>
`

for (const rel of urls) {
  const out = path.join('public', 'vvveb', rel)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  if (!fs.existsSync(out)) {
    const title = path.basename(rel, '.html').replace(/-/g, ' ')
    fs.writeFileSync(out, body(title), 'utf8')
  }
}

const sectionsDir = path.join('public', 'vvveb', 'demo', 'landing', 'sections')
const stylesDir = path.join('public', 'vvveb', 'demo', 'landing', 'styles')
fs.mkdirSync(sectionsDir, { recursive: true })
fs.mkdirSync(stylesDir, { recursive: true })
const sectionsJs = path.join(sectionsDir, 'sections.js')
const stylesJs = path.join(stylesDir, 'styles.js')
if (!fs.existsSync(sectionsJs)) {
  fs.writeFileSync(sectionsJs, '// Yerel stub — tam tema için VvvebJs demo/landing alt modülünü ekleyin.\n', 'utf8')
}
if (!fs.existsSync(stylesJs)) {
  fs.writeFileSync(stylesJs, '// Yerel stub\n', 'utf8')
}

console.log('Stubbed', urls.length, 'landing html files under public/vvveb/demo/landing')

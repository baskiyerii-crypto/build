import fs from 'node:fs'
import path from 'node:path'

const accents = [
  ['indigo', 'from-indigo-950', 'to-indigo-800', 'text-indigo-950'],
  ['violet', 'from-violet-950', 'to-violet-800', 'text-violet-950'],
  ['sky', 'from-sky-950', 'to-sky-800', 'text-sky-950'],
  ['emerald', 'from-emerald-950', 'to-emerald-800', 'text-emerald-950'],
  ['rose', 'from-rose-950', 'to-rose-800', 'text-rose-950'],
  ['amber', 'from-amber-950', 'to-amber-800', 'text-amber-950'],
  ['zinc', 'from-zinc-900', 'to-zinc-700', 'text-zinc-900'],
  ['slate', 'from-slate-900', 'to-slate-700', 'text-slate-900'],
]

const thumb = 'https://picsum.photos/seed/'
const blocks = []
let n = 0

function add(name, html) {
  const id = `tailwind/pack-${n++}`
  blocks.push({
    id,
    name,
    image: `${thumb}${id.replace(/[^a-z0-9]/gi, '')}/400/220`,
    html,
  })
}

for (let i = 0; i < 300; i++) {
  const [label, f1, t1, btnText] = accents[i % accents.length]
  const k = i + 1
  const mod = i % 12
  if (mod === 0)
    add(
      `Hero ${k}`,
      `<section class="relative overflow-hidden bg-gradient-to-br ${f1} ${t1} px-6 py-16 text-white"><div class="mx-auto max-w-3xl text-center"><p class="text-[10px] font-medium uppercase tracking-[0.35em] text-white/55">Bölüm ${k}</p><h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Net başlık</h2><p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75">Kısa değer önerisi. Düzenlemek için bloğu seçin.</p><div class="mt-8 flex flex-wrap justify-center gap-3"><a href="#" class="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm ${btnText}">Başla</a><a href="#" class="inline-flex items-center justify-center rounded-full border border-white/35 px-5 py-2 text-sm font-medium text-white hover:bg-white/10">Detay</a></div></div></section>`,
    )
  else if (mod === 1)
    add(
      `Özellik ızgarası ${k}`,
      `<section class="border-y border-zinc-200/80 bg-white px-6 py-14 dark:border-zinc-800 dark:bg-zinc-950"><div class="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3"><div class="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">01</p><h3 class="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Hızlı</h3><p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Açıklama metni burada.</p></div><div class="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">02</p><h3 class="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Güvenli</h3><p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Açıklama metni burada.</p></div><div class="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><p class="text-xs font-semibold uppercase tracking-wide text-zinc-500">03</p><h3 class="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">Ölçeklenebilir</h3><p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Açıklama metni burada.</p></div></div></section>`,
    )
  else if (mod === 2)
    add(
      `İstatistik bandı ${k}`,
      `<section class="bg-zinc-900 px-6 py-10 text-white"><div class="mx-auto flex max-w-5xl flex-wrap justify-between gap-8"><div><p class="text-3xl font-semibold tracking-tight">%98</p><p class="mt-1 text-xs uppercase tracking-wider text-zinc-400">Memnuniyet</p></div><div><p class="text-3xl font-semibold tracking-tight">24/7</p><p class="mt-1 text-xs uppercase tracking-wider text-zinc-400">Destek</p></div><div><p class="text-3xl font-semibold tracking-tight">120+</p><p class="mt-1 text-xs uppercase tracking-wider text-zinc-400">Ülke</p></div><div><p class="text-3xl font-semibold tracking-tight">12ms</p><p class="mt-1 text-xs uppercase tracking-wider text-zinc-400">Gecikme</p></div></div></section>`,
    )
  else if (mod === 3)
    add(
      `CTA şeridi ${k}`,
      `<section class="mx-auto max-w-5xl px-6 py-10"><div class="flex flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-200/80 bg-gradient-to-r from-white to-zinc-50 px-8 py-8 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:flex-row sm:items-center"><div><h3 class="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Hazır mısınız?</h3><p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Ekibimizle görüşün.</p></div><a href="#" class="inline-flex shrink-0 items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900">Randevu</a></div></section>`,
    )
  else if (mod === 4)
    add(
      `Referans kartı ${k}`,
      `<section class="bg-white px-6 py-12 dark:bg-zinc-950"><div class="mx-auto max-w-3xl rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30"><p class="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">“Ürün ve ekip olağanüstü. Geçiş süreci sorunsuzdu.”</p><div class="mt-6 flex items-center gap-3"><div class="h-10 w-10 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500"></div><div><p class="text-sm font-medium text-zinc-900 dark:text-zinc-100">Ayşe Yılmaz</p><p class="text-xs text-zinc-500">CTO · ${label}</p></div></div></div></section>`,
    )
  else if (mod === 5)
    add(
      `Fiyat 3 sütun ${k}`,
      `<section class="border-t border-zinc-200/80 bg-zinc-50 px-6 py-14 dark:border-zinc-800 dark:bg-zinc-900/40"><div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"><div class="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"><p class="text-sm font-medium text-zinc-500">Başlangıç</p><p class="mt-2 text-3xl font-semibold">₺0</p><ul class="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400"><li>· Temel özellikler</li><li>· Topluluk</li></ul><a href="#" class="mt-6 inline-flex w-full justify-center rounded-xl border border-zinc-200 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Seç</a></div><div class="rounded-2xl border border-zinc-900 bg-zinc-900 p-6 text-white shadow-lg dark:border-white dark:bg-white dark:text-zinc-900"><p class="text-sm font-medium text-zinc-300 dark:text-zinc-600">Pro</p><p class="mt-2 text-3xl font-semibold">₺499</p><ul class="mt-4 space-y-2 text-sm text-zinc-200 dark:text-zinc-700"><li>· Öncelikli destek</li><li>· Analitik</li></ul><a href="#" class="mt-6 inline-flex w-full justify-center rounded-xl bg-white py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">Seç</a></div><div class="rounded-2xl border border-zinc-200/80 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"><p class="text-sm font-medium text-zinc-500">Kurumsal</p><p class="mt-2 text-3xl font-semibold">Özel</p><ul class="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400"><li>· SLA</li><li>· SSO</li></ul><a href="#" class="mt-6 inline-flex w-full justify-center rounded-xl border border-zinc-200 py-2 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">İletişim</a></div></div></section>`,
    )
  else if (mod === 6)
    add(
      `Logo şeridi ${k}`,
      `<section class="border-y border-zinc-200/70 bg-white px-6 py-8 dark:border-zinc-800 dark:bg-zinc-950"><p class="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-400">Güvenilen markalar</p><div class="mx-auto mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-70"><span class="text-sm font-semibold text-zinc-400">ACME</span><span class="text-sm font-semibold text-zinc-400">Northwind</span><span class="text-sm font-semibold text-zinc-400">Globex</span><span class="text-sm font-semibold text-zinc-400">Umbrella</span></div></section>`,
    )
  else if (mod === 7)
    add(
      `İletişim kartı ${k}`,
      `<section class="px-6 py-14"><div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"><div><h2 class="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Bize yazın</h2><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">24 saat içinde dönüş yapıyoruz.</p></div><form class="space-y-4 rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><input class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950" placeholder="Ad" /><input class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950" type="email" placeholder="E-posta" /><textarea rows="4" class="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950" placeholder="Mesaj"></textarea><button type="button" class="w-full rounded-xl bg-zinc-900 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900">Gönder</button></form></div></section>`,
    )
  else if (mod === 8)
    add(
      `Bento ${k}`,
      `<section class="bg-zinc-50 px-6 py-14 dark:bg-zinc-950"><div class="mx-auto grid max-w-6xl gap-4 md:grid-cols-4 md:grid-rows-2"><div class="md:col-span-2 md:row-span-2 rounded-3xl border border-zinc-200/80 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><h3 class="text-xl font-semibold">Öne çıkan</h3><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Geniş kart alanı.</p></div><div class="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><p class="text-xs font-medium text-zinc-500">Metrik</p><p class="mt-2 text-2xl font-semibold">+42%</p></div><div class="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><p class="text-xs font-medium text-zinc-500">Süre</p><p class="mt-2 text-2xl font-semibold">2 gün</p></div><div class="md:col-span-2 rounded-3xl border border-dashed border-zinc-300 bg-white/60 p-6 dark:border-zinc-700 dark:bg-zinc-900/20"><p class="text-sm text-zinc-600 dark:text-zinc-400">Esnek alan — görsel veya kod ekleyin.</p></div></div></section>`,
    )
  else if (mod === 9)
    add(
      `SSS basit ${k}`,
      `<section class="px-6 py-14"><div class="mx-auto max-w-2xl space-y-3"><h2 class="text-center text-2xl font-semibold tracking-tight">Sık sorulanlar</h2><details class="group rounded-2xl border border-zinc-200/80 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"><summary class="cursor-pointer text-sm font-medium">Teslimat süresi?</summary><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Standart projeler 2–4 hafta.</p></details><details class="group rounded-2xl border border-zinc-200/80 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"><summary class="cursor-pointer text-sm font-medium">İade politikası?</summary><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">14 gün içinde koşullu iade.</p></details></div></section>`,
    )
  else if (mod === 10)
    add(
      `Blog kartları ${k}`,
      `<section class="bg-white px-6 py-14 dark:bg-zinc-950"><div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">${['A', 'B', 'C']
        .map(
          (x) =>
            `<article class="overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40"><div class="aspect-[16/10] bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700"></div><div class="p-4"><p class="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">${x} · ${k}</p><h3 class="mt-1 text-base font-semibold">Başlık</h3><p class="mt-1 text-xs text-zinc-600 dark:text-zinc-400">Özet metin.</p></div></article>`,
        )
        .join('')}</div></section>`,
    )
  else
    add(
      `Alt bilgi mini ${k}`,
      `<footer class="border-t border-zinc-200/80 bg-zinc-50 px-6 py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400"><div class="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center"><p class="font-medium text-zinc-800 dark:text-zinc-200">© ${k} Marka</p><div class="flex gap-4"><a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100">Gizlilik</a><a href="#" class="hover:text-zinc-900 dark:hover:text-zinc-100">Şartlar</a></div></div></footer>`,
    )
}

const ids = blocks.map((b) => b.id)
const outPath = path.join('public', 'vvveb', 'js', 'blocks-tailwind-pack.js')
const body = `/* Otomatik üretildi — scripts/gen-tailwind-blocks.mjs */
;(function () {
  if (typeof window.Vvveb === 'undefined' || !Vvveb.Blocks) return
  var ids = ${JSON.stringify(ids)}
  var blocks = ${JSON.stringify(blocks)}
  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i]
    Vvveb.Blocks.add(b.id, { name: b.name, image: b.image, html: b.html })
  }
  Vvveb.BlocksGroup['Genel · Tailwind parçaları'] = ids
})()
`
fs.writeFileSync(outPath, body, 'utf8')
console.log('Wrote', blocks.length, 'blocks to', outPath)

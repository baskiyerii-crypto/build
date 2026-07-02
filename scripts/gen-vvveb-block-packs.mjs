/**
 * Vvveb.Blocks: çok sayıda yapısal olarak farklı şablon (döngüde şablon rotasyonu).
 * Çalıştır: node scripts/gen-vvveb-block-packs.mjs
 */
import fs from 'node:fs'
import path from 'node:path'

const img = (s) => `https://picsum.photos/seed/${s}/520/300`

function emit(filename, groupName, blocks) {
  const ids = blocks.map((b) => b.id)
  const out = path.join('public', 'vvveb', 'js', filename)
  const body = `;(function () {
  if (typeof window.Vvveb === 'undefined' || !Vvveb.Blocks) return
  var ids = ${JSON.stringify(ids)}
  var blocks = ${JSON.stringify(blocks)}
  for (var i = 0; i < blocks.length; i++) {
    var b = blocks[i]
    Vvveb.Blocks.add(b.id, { name: b.name, image: b.image, html: b.html })
  }
  Vvveb.BlocksGroup[${JSON.stringify(groupName)}] = ids
})()
`
  fs.writeFileSync(out, body, 'utf8')
  console.log(filename, blocks.length)
}

/** @param {number} n */
function ecTemplates(n) {
  const k = n + 1
  const p = (99 + (n % 50) * 3).toFixed(0)
  const T = [
    () =>
      `<section class="bg-white py-10 dark:bg-zinc-950"><div class="mx-auto max-w-6xl px-4"><h2 class="text-lg font-semibold">Ürün ızgarası · ${k}</h2><div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">${[1, 2, 3, 4].map((i) => `<div class="rounded-2xl border border-zinc-200 p-3 dark:border-zinc-800"><div class="aspect-square rounded-xl bg-zinc-200 dark:bg-zinc-800"></div><p class="mt-2 text-sm font-medium">Ürün ${i}</p><p class="text-xs text-zinc-500">₺${p}</p></div>`).join('')}</div></div></section>`,
    () =>
      `<section class="border-y border-zinc-200 bg-zinc-50 py-8 dark:border-zinc-800 dark:bg-zinc-900/40"><div class="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center"><div class="md:w-1/2"><div class="aspect-video rounded-2xl bg-gradient-to-br from-indigo-200 to-violet-300 dark:from-indigo-900 dark:to-violet-900"></div></div><div class="md:w-1/2"><p class="text-xs font-semibold uppercase text-indigo-600">Öne çıkan · ${k}</p><h2 class="mt-2 text-2xl font-semibold">Yatay vitrin</h2><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Görsel + metin düzeni.</p><button type="button" class="mt-4 rounded-full bg-zinc-900 px-5 py-2 text-sm text-white dark:bg-white dark:text-zinc-900">İncele</button></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl overflow-x-auto px-4"><div class="flex min-w-max gap-4">${[1, 2, 3, 4, 5].map((i) => `<div class="w-56 shrink-0 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"><div class="h-32 rounded-xl bg-zinc-200 dark:bg-zinc-800"></div><p class="mt-2 text-sm font-medium">Kart ${i}</p></div>`).join('')}</div></div></section>`,
    () =>
      `<section class="bg-zinc-900 py-10 text-white"><div class="mx-auto max-w-5xl px-4"><div class="flex flex-wrap justify-between gap-6 text-center"><div><p class="text-3xl font-bold">${(n % 40) + 12}k</p><p class="text-xs uppercase text-zinc-400">Sipariş · ${k}</p></div><div><p class="text-3xl font-bold">%${96 + (n % 3)}</p><p class="text-xs uppercase text-zinc-400">Memnuniyet</p></div><div><p class="text-3xl font-bold">24/7</p><p class="text-xs uppercase text-zinc-400">Destek</p></div></div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-3xl rounded-3xl border border-dashed border-zinc-300 bg-zinc-50/80 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900/30"><h3 class="text-xl font-semibold">Sepet özeti · ${k}</h3><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Ara toplam · ₺${p}</p><button type="button" class="mt-6 w-full rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white">Ödemeye geç</button></div></section>`,
    () =>
      `<section class="bg-white py-10 dark:bg-zinc-950"><div class="mx-auto max-w-5xl px-4"><ol class="flex flex-wrap items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">${['Sepet', 'Kargo', 'Ödeme', 'Onay'].map((s, i) => `<li class="flex items-center gap-2">${i ? '<span class="text-zinc-300">→</span>' : ''}<span class="rounded-full px-3 py-1 ${i === 2 ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'bg-zinc-100 dark:bg-zinc-800'}">${s}</span></li>`).join('')}</ol><p class="mt-4 text-xs text-zinc-500">Ödeme adımı · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-6 md:grid-cols-3"><div class="md:col-span-2 space-y-3">${[1, 2, 3].map((i) => `<div class="flex gap-4 rounded-xl border border-zinc-200 p-3 dark:border-zinc-800"><div class="h-20 w-20 shrink-0 rounded-lg bg-zinc-200 dark:bg-zinc-800"></div><div class="flex-1"><p class="font-medium">Ürün satırı ${i}</p><p class="text-xs text-zinc-500">Adet: ${i}</p></div><p class="font-semibold">₺${p}</p></div>`).join('')}</div><aside class="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"><p class="text-sm font-semibold">Özet · ${k}</p><p class="mt-4 text-lg font-bold">₺${(Number(p) * 2).toFixed(0)}</p></aside></div></div></section>`,
    () =>
      `<section class="bg-gradient-to-r from-amber-50 to-orange-50 py-8 dark:from-amber-950/40 dark:to-orange-950/40"><div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4"><p class="text-sm font-semibold">Kampanya · ${k}</p><p class="text-2xl font-bold tracking-tight">%${20 + (n % 15)} indirim</p><button type="button" class="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white">Alışverişe başla</button></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-5xl px-4"><div class="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"><table class="w-full text-left text-sm"><thead class="bg-zinc-100 dark:bg-zinc-900"><tr><th class="p-3">Özellik</th><th class="p-3">A</th><th class="p-3">B</th></tr></thead><tbody><tr class="border-t border-zinc-200 dark:border-zinc-800"><td class="p-3">Garanti</td><td class="p-3">2 yıl</td><td class="p-3">1 yıl</td></tr><tr class="border-t border-zinc-200 dark:border-zinc-800"><td class="p-3">Teslimat</td><td class="p-3">Ücretsiz</td><td class="p-3">₺29</td></tr></tbody></table></div><p class="mt-2 text-xs text-zinc-500">Karşılaştırma · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-2xl px-4 space-y-3">${[1, 2, 3].map((i) => `<details class="rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950"><summary class="cursor-pointer font-medium">Sık sorulan ${i} · ${k}</summary><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Yanıt metnini düzenleyin.</p></details>`).join('')}</div></section>`,
    () =>
      `<section class="border-t border-zinc-200 bg-white py-10 dark:border-zinc-800 dark:bg-zinc-950"><div class="mx-auto max-w-6xl px-4"><div class="flex flex-wrap justify-center gap-8 opacity-70">${['ACME', 'Globex', 'Umbrella', 'Stark', 'Wayne'].map((b) => `<span class="text-sm font-bold tracking-widest text-zinc-500">${b}</span>`).join('')}</div><p class="mt-4 text-center text-xs text-zinc-400">Marka şeridi · ${k}</p></div></section>`,
    () =>
      `<section class="relative py-16 text-center text-white" style="background:linear-gradient(135deg,#1e3a5f,#0f172a)"><div class="mx-auto max-w-2xl px-4"><h2 class="text-3xl font-semibold">Arama odaklı hero · ${k}</h2><div class="mx-auto mt-6 flex max-w-lg rounded-full bg-white/10 p-1"><input class="flex-1 rounded-full bg-transparent px-4 py-2 text-sm outline-none placeholder:text-white/60" placeholder="Ne arıyorsunuz?" /><button type="button" class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900">Ara</button></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-3"><div class="rounded-2xl bg-sky-100 p-6 md:col-span-2 dark:bg-sky-950/40"><h3 class="text-lg font-semibold">Geniş kart · ${k}</h3></div><div class="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"><p class="text-xs font-semibold text-zinc-500">Küçük</p><p class="mt-2 text-2xl font-bold">₺${p}</p></div><div class="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800">Bento 2</div><div class="rounded-2xl border border-zinc-200 p-4 md:col-span-2 dark:border-zinc-800">Bento geniş · ${k}</div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl px-4"><div class="flex flex-col gap-4 md:flex-row"><div class="flex-1 rounded-2xl border-2 border-zinc-900 p-6 dark:border-white"><p class="text-xs font-semibold uppercase">Temel · ${k}</p><p class="mt-2 text-3xl font-bold">₺0</p></div><div class="flex-1 scale-105 rounded-2xl bg-zinc-900 p-6 text-white shadow-xl dark:bg-white dark:text-zinc-900"><p class="text-xs font-semibold uppercase text-zinc-300 dark:text-zinc-600">Popüler</p><p class="mt-2 text-3xl font-bold">₺${p}</p></div><div class="flex-1 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"><p class="text-xs font-semibold">Kurumsal</p><p class="mt-2 text-xl font-bold">Teklif</p></div></div></div></section>`,
    () =>
      `<section class="bg-rose-50 py-10 dark:bg-rose-950/20"><div class="mx-auto max-w-3xl px-4 text-center"><p class="text-4xl text-rose-500">“</p><p class="text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">Müşteri yorumu metni · ${k}</p><p class="mt-4 text-sm font-semibold">— Ayşe Y., İstanbul</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${[1, 2, 3, 4, 5].map((i) => `<div class="rounded-xl border border-zinc-200 p-4 text-center dark:border-zinc-800"><div class="mx-auto h-12 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700"></div><p class="mt-2 text-sm font-medium">Kategori ${i}</p></div>`).join('')}</div><p class="mt-4 text-center text-xs text-zinc-500">Kategori · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl px-4"><div class="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-700 p-8 text-white"><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-xs uppercase text-white/60">Kupon · ${k}</p><p class="text-2xl font-bold">İLK${10 + (n % 20)}</p></div><button type="button" class="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-900">Uygula</button></div></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-5xl px-4"><h3 class="mb-4 text-lg font-semibold">Blog / rehber · ${k}</h3><div class="divide-y divide-zinc-200 dark:divide-zinc-800">${[1, 2, 3].map((i) => `<article class="flex flex-wrap gap-4 py-4"><div class="h-24 w-32 shrink-0 rounded-lg bg-zinc-200 dark:bg-zinc-800"></div><div><h4 class="font-medium">Başlık ${i}</h4><p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Özet satırı.</p></div></article>`).join('')}</div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-8 lg:grid-cols-2"><form class="space-y-3 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"><p class="font-semibold">İletişim · ${k}</p><input class="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950" placeholder="E-posta" /><textarea class="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-950" rows="3" placeholder="Mesaj"></textarea><button type="button" class="w-full rounded-lg bg-zinc-900 py-2 text-sm text-white dark:bg-white dark:text-zinc-900">Gönder</button></form><div class="flex min-h-[220px] items-center justify-center rounded-2xl bg-zinc-100 text-sm text-zinc-500 dark:bg-zinc-900">Harita alanı</div></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-5xl px-4"><div class="relative overflow-hidden rounded-3xl bg-zinc-900 p-10 text-white"><div class="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div><h3 class="relative text-2xl font-semibold">Koyu CTA · ${k}</h3><p class="relative mt-2 max-w-md text-sm text-white/75">Kısa açıklama.</p><button type="button" class="relative mt-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900">Hemen başla</button></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl px-4"><ul class="space-y-4 border-l-2 border-zinc-300 pl-6 dark:border-zinc-700">${[1, 2, 3, 4].map((i) => `<li class="relative"><span class="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-zinc-900 dark:bg-white"></span><p class="font-medium">Adım ${i} · ${k}</p><p class="text-sm text-zinc-600 dark:text-zinc-400">Açıklama.</p></li>`).join('')}</ul></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-6xl px-4"><div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">${Array.from({ length: 8 }, (_, i) => `<div class="${i === 3 ? 'col-span-2 row-span-2' : ''} min-h-[100px] rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700"></div>`).join('')}</div><p class="mt-3 text-center text-xs text-zinc-500">Galeri ızgara · ${k}</p></div></section>`,
    () =>
      `<section class="border-y border-amber-200 bg-amber-50 py-6 text-center text-sm font-medium text-amber-900 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-100">Ücretsiz kargo · ${k} · 500₺ üzeri siparişlerde</section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-3xl px-4 text-center"><div class="inline-flex rounded-full border border-zinc-200 p-1 dark:border-zinc-700"><button type="button" class="rounded-full bg-zinc-900 px-4 py-1.5 text-xs text-white dark:bg-white dark:text-zinc-900">Aylık</button><button type="button" class="rounded-full px-4 py-1.5 text-xs text-zinc-600">Yıllık</button></div><p class="mt-4 text-xs text-zinc-500">Fiyat toggle · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-5xl px-4"><div class="flex flex-wrap gap-2">${['XL', 'L', 'M', 'S', 'XS'].map((s) => `<button type="button" class="rounded-lg border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-600">${s}</button>`).join('')}</div><p class="mt-3 text-xs text-zinc-500">Beden seçici · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl px-4"><div class="flex items-center justify-between rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"><div class="flex items-center gap-3"><button type="button" class="h-9 w-9 rounded-lg border border-zinc-300 dark:border-zinc-600">−</button><span class="w-8 text-center font-semibold">2</span><button type="button" class="h-9 w-9 rounded-lg border border-zinc-300 dark:border-zinc-600">+</button></div><p class="font-semibold">₺${p}</p></div><p class="mt-2 text-xs text-zinc-500">Adet · ${k}</p></div></section>`,
    () =>
      `<section class="py-8"><div class="mx-auto max-w-5xl px-4 text-sm text-zinc-600 dark:text-zinc-400"><nav class="flex flex-wrap gap-2"><span>Anasayfa</span><span>/</span><span>Kategori</span><span>/</span><span class="text-zinc-900 dark:text-zinc-100">Ürün · ${k}</span></nav></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-6xl px-4"><div class="flex flex-col gap-4 md:flex-row"><aside class="w-full shrink-0 space-y-2 md:w-56">${['Marka', 'Renk', 'Fiyat'].map((f) => `<label class="flex items-center gap-2 text-sm"><input type="checkbox" class="rounded border-zinc-300" /> ${f}</label>`).join('')}</aside><div class="flex-1 grid grid-cols-2 gap-3 lg:grid-cols-3">${[1, 2, 3, 4, 5, 6].map((i) => `<div class="rounded-xl border border-zinc-200 p-2 dark:border-zinc-800"><div class="aspect-[4/5] rounded-lg bg-zinc-200 dark:bg-zinc-800"></div><p class="mt-1 text-xs font-medium">Ürün ${i}</p></div>`).join('')}</div></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl px-4"><div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/30"><div class="flex flex-wrap items-center justify-between gap-4"><p class="font-semibold text-emerald-900 dark:text-emerald-100">Güvenli ödeme · ${k}</p><div class="flex gap-2 text-xs">VISA · MC · TROY</div></div></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-3xl px-4"><div class="space-y-3">${['Kredi kartı', 'Havale', 'Kapıda ödeme'].map((m, i) => `<label class="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 p-4 has-[:checked]:border-zinc-900 dark:border-zinc-800 dark:has-[:checked]:border-white"><input type="radio" name="pay-${n}" class="accent-zinc-900" ${i === 0 ? 'checked' : ''} /><span class="font-medium">${m}</span></label>`).join('')}</div><p class="mt-2 text-xs text-zinc-500">Ödeme seçimi · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-5xl px-4"><h3 class="text-lg font-semibold">Video + ürün · ${k}</h3><div class="mt-4 grid gap-6 md:grid-cols-2"><div class="aspect-video rounded-2xl bg-black/80"></div><div><p class="text-sm text-zinc-600 dark:text-zinc-400">Ürün hikayesi ve teknik özellikler.</p><ul class="mt-3 list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300"><li>Özellik 1</li><li>Özellik 2</li></ul></div></div></div></section>`,
    () =>
      `<footer class="border-t border-zinc-200 bg-zinc-50 py-10 dark:border-zinc-800 dark:bg-zinc-900/40"><div class="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4"><div><p class="font-semibold">Mağaza · ${k}</p><p class="mt-2 text-sm text-zinc-600">Adres satırı.</p></div><div><p class="text-sm font-semibold">Yardım</p><ul class="mt-2 space-y-1 text-sm text-zinc-600"><li>İade</li><li>Kargo</li></ul></div><div><p class="text-sm font-semibold">Hesap</p><ul class="mt-2 space-y-1 text-sm text-zinc-600"><li>Siparişler</li></ul></div><div><p class="text-sm font-semibold">Bülten</p><input class="mt-2 w-full rounded-lg border border-zinc-200 px-2 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-950" placeholder="E-posta" /></div></div></footer>`,
  ]
  return T[n % T.length]()
}

/** @param {number} n */
function corpTemplates(n) {
  const k = n + 1
  const C = [
    () =>
      `<section class="py-20 text-center"><div class="mx-auto max-w-3xl px-4"><p class="text-xs font-semibold uppercase tracking-widest text-zinc-500">Kurumsal · ${k}</p><h1 class="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Merkez hero</h1><p class="mt-4 text-zinc-600 dark:text-zinc-400">Kısa misyon cümlesi.</p></div></section>`,
    () =>
      `<section class="py-16"><div class="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2"><div><h2 class="text-3xl font-semibold">İki sütun anlatı · ${k}</h2><p class="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">Sol metin, sağ görsel düzeni.</p></div><div class="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-slate-200 to-zinc-100 dark:from-slate-800 dark:to-zinc-900"></div></div></section>`,
    () =>
      `<section class="bg-zinc-900 py-16 text-white"><div class="mx-auto max-w-5xl px-4"><div class="grid gap-8 sm:grid-cols-3 text-center">${['Hız', 'Güven', 'Ölçek'].map((t) => `<div><p class="text-3xl font-bold">${t === 'Hız' ? '10x' : t === 'Güven' ? '%99' : '50+'}</p><p class="mt-2 text-xs uppercase text-zinc-400">${t}</p></div>`).join('')}</div><p class="mt-8 text-center text-xs text-zinc-500">Rakamlar · ${k}</p></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-6 md:grid-cols-3">${[1, 2, 3].map((i) => `<div class="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"><h3 class="font-semibold">Hizmet ${i}</h3><p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Açıklama · ${k}</p></div>`).join('')}</div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-5xl px-4"><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${[1, 2, 3, 4].map((i) => `<div class="text-center"><div class="mx-auto h-24 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800"></div><p class="mt-3 font-medium">Kişi ${i}</p><p class="text-xs text-zinc-500">Unvan</p></div>`).join('')}</div><p class="mt-6 text-center text-xs text-zinc-500">Ekip · ${k}</p></div></section>`,
    () =>
      `<section class="py-16 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900"><div class="mx-auto max-w-4xl px-4 text-center"><h2 class="text-2xl font-semibold">Referans · ${k}</h2><blockquote class="mt-6 text-lg italic text-zinc-700 dark:text-zinc-300">“Uzun alıntı metni.”</blockquote><p class="mt-4 text-sm font-semibold">— Şirket A</p></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="columns-1 gap-4 sm:columns-2 lg:columns-3">${[1, 2, 3, 4, 5, 6].map((i) => `<div class="mb-4 break-inside-avoid rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"><p class="font-medium">Kart ${i}</p><p class="text-sm text-zinc-600">Metin · ${k}</p></div>`).join('')}</div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-5xl px-4"><h2 class="text-xl font-semibold">Zaman çizelgesi · ${k}</h2><div class="mt-8 space-y-6 border-l border-zinc-300 pl-8 dark:border-zinc-700">${[2022, 2023, 2024].map((y) => `<div><p class="text-sm font-bold text-zinc-500">${y}</p><p class="mt-1 font-medium">Başlık</p><p class="text-sm text-zinc-600 dark:text-zinc-400">Olay açıklaması.</p></div>`).join('')}</div></div></section>`,
    () =>
      `<section class="py-16"><div class="mx-auto max-w-4xl rounded-3xl border border-zinc-200 bg-white px-8 py-10 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950"><h3 class="text-2xl font-semibold">CTA kutusu · ${k}</h3><button type="button" class="mt-6 rounded-full bg-zinc-900 px-6 py-2.5 text-sm text-white dark:bg-white dark:text-zinc-900">Bize ulaşın</button></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-4 md:grid-cols-2">${[1, 2].map((i) => `<article class="flex gap-4 rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"><div class="h-28 w-28 shrink-0 rounded-xl bg-zinc-200 dark:bg-zinc-800"></div><div><h4 class="font-semibold">Haber ${i} · ${k}</h4><p class="mt-1 text-sm text-zinc-600">Özet.</p></div></article>`).join('')}</div></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-5xl px-4"><div class="rounded-3xl bg-slate-900 px-8 py-12 text-white"><div class="flex flex-wrap items-center justify-between gap-6"><div><p class="text-sm text-white/70">Bülten · ${k}</p><p class="text-xl font-semibold">Haftalık içgörüler</p></div><div class="flex gap-2"><input class="rounded-lg bg-white/10 px-3 py-2 text-sm outline-none" placeholder="E-posta" /><button type="button" class="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900">Abone ol</button></div></div></div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-4 md:grid-cols-4">${['Strateji', 'Tasarım', 'Geliştirme', 'Destek'].map((s) => `<div class="rounded-2xl bg-zinc-100 p-5 text-center dark:bg-zinc-900"><p class="text-sm font-semibold">${s}</p><p class="mt-2 text-xs text-zinc-600 dark:text-zinc-400">· ${k}</p></div>`).join('')}</div></section>`,
    () =>
      `<section class="py-16 text-white" style="background:radial-gradient(circle at 20% 20%,#334155 0,transparent 40%),#0f172a"><div class="mx-auto max-w-3xl px-4 text-center"><h2 class="text-3xl font-semibold">Radial arka plan · ${k}</h2><p class="mt-4 text-sm text-slate-300">Kurumsal vurgu.</p></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-4xl px-4"><div class="flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-zinc-300 p-10 text-center dark:border-zinc-700"><p class="text-sm text-zinc-600 dark:text-zinc-400">Logo veya video yükleme alanı · ${k}</p></div></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-5xl px-4"><h3 class="text-lg font-semibold">Sertifika / ödül şeridi · ${k}</h3><div class="mt-6 flex flex-wrap justify-center gap-6">${['ISO', 'GDPR', 'SOC2', 'PCI'].map((b) => `<span class="rounded-lg border border-zinc-200 px-4 py-2 text-xs font-bold dark:border-zinc-700">${b}</span>`).join('')}</div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-6 md:grid-cols-2"><div class="space-y-3"><h3 class="text-xl font-semibold">İletişim bilgisi · ${k}</h3><p class="text-sm text-zinc-600">Adres · Tel · E-posta</p></div><div class="rounded-2xl bg-zinc-100 p-6 text-sm dark:bg-zinc-900">Ofis haritası placeholder</div></div></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-4xl px-4"><table class="w-full text-left text-sm"><tbody>${['CEO', 'CTO', 'CFO'].map((r, i) => `<tr class="border-b border-zinc-200 dark:border-zinc-800"><td class="py-3 font-medium">${r}</td><td class="py-3 text-zinc-600">İsim ${i + 1}</td><td class="py-3 text-zinc-500">LinkedIn</td></tr>`).join('')}</tbody></table><p class="mt-2 text-xs text-zinc-500">Yönetim · ${k}</p></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-5xl px-4"><div class="flex flex-wrap justify-center gap-3">${['React', 'Node', 'AWS', 'K8s', 'Postgres'].map((t) => `<span class="rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-medium dark:bg-zinc-800">${t}</span>`).join('')}</div><p class="mt-6 text-center text-xs text-zinc-500">Teknoloji etiketleri · ${k}</p></div></section>`,
    () =>
      `<section class="py-16"><div class="mx-auto max-w-3xl px-4 text-center"><h2 class="text-2xl font-semibold">Fiyatlandırma (kurumsal) · ${k}</h2><p class="mt-4 text-4xl font-bold">₤${(n % 5) + 1}999<span class="text-base font-normal text-zinc-500">/yıl</span></p></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-4 md:grid-cols-2">${[1, 2, 3, 4].map((i) => `<div class="rounded-2xl bg-gradient-to-br from-white to-zinc-100 p-6 shadow-sm dark:from-zinc-900 dark:to-zinc-950"><p class="text-sm font-semibold">Vaka ${i} · ${k}</p><p class="mt-2 text-sm text-zinc-600">Sonuç özeti.</p></div>`).join('')}</div></section>`,
    () =>
      `<section class="border-y border-zinc-200 py-8 dark:border-zinc-800"><div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 text-sm"><p>© ${2020 + (n % 5)} Şirket · ${k}</p><div class="flex gap-4"><a href="#" class="text-zinc-600 hover:underline">Gizlilik</a><a href="#" class="text-zinc-600 hover:underline">KVKK</a></div></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-4xl px-4"><h3 class="text-lg font-semibold">SSS kurumsal · ${k}</h3><div class="mt-4 space-y-2">${[1, 2].map((i) => `<div class="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900/50"><p class="font-medium">Soru ${i}?</p><p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400">Kısa cevap.</p></div>`).join('')}</div></div></section>`,
    () =>
      `<section class="py-16"><div class="mx-auto max-w-6xl px-4"><div class="relative overflow-hidden rounded-3xl bg-indigo-600 px-8 py-14 text-white"><div class="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20"></div><h3 class="relative text-2xl font-semibold">Renkli CTA · ${k}</h3><p class="relative mt-2 max-w-lg text-sm text-white/85">Kurumsal kampanya.</p></div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-5xl px-4"><div class="grid grid-cols-3 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">${['Keşfet', 'Çözümler', 'İletişim'].map((s) => `<div class="rounded-t-lg border border-b-0 border-zinc-200 py-3 dark:border-zinc-800">${s}</div>`).join('')}</div><p class="mt-4 text-center text-xs text-zinc-500">Sekme görünümü · ${k}</p></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-4xl px-4"><div class="flex flex-col items-center"><div class="h-1 w-24 rounded-full bg-zinc-900 dark:bg-white"></div><p class="mt-6 text-center text-lg text-zinc-700 dark:text-zinc-200">Minimal alıntı bloğu · ${k}</p></div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">${Array.from({ length: 10 }, (_, i) => `<div class="aspect-[3/4] rounded-lg bg-zinc-200 dark:bg-zinc-800"></div>`).join('')}</div><p class="mt-3 text-center text-xs text-zinc-500">Portfolyo ızgara · ${k}</p></div></section>`,
    () =>
      `<section class="py-10"><div class="mx-auto max-w-3xl px-4"><div class="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-100">Bilgi kutusu: duyuru veya uyarı metni · ${k}</div></div></section>`,
    () =>
      `<section class="py-14"><div class="mx-auto max-w-5xl px-4"><div class="grid md:grid-cols-3 md:gap-0"><div class="border border-zinc-200 p-6 dark:border-zinc-800 md:border-r-0"><p class="font-semibold">Ofis A · ${k}</p></div><div class="border border-zinc-200 p-6 dark:border-zinc-800 md:-ml-px"><p class="font-semibold">Ofis B</p></div><div class="border border-zinc-200 p-6 dark:border-zinc-800 md:-ml-px"><p class="font-semibold">Ofis C</p></div></div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-4xl px-4 text-center"><p class="text-sm text-zinc-500">Yatay çizgi bölücü · ${k}</p><hr class="mx-auto mt-6 max-w-xs border-zinc-300 dark:border-zinc-700" /></div></section>`,
    () =>
      `<section class="py-16"><div class="mx-auto max-w-6xl px-4"><div class="grid gap-6 lg:grid-cols-12"><div class="lg:col-span-5 rounded-3xl bg-zinc-200 dark:bg-zinc-800 min-h-[240px]"></div><div class="lg:col-span-7 flex flex-col justify-center"><h2 class="text-3xl font-semibold">Asimetrik grid · ${k}</h2><p class="mt-4 text-zinc-600 dark:text-zinc-400">Geniş içerik alanı.</p></div></div></div></section>`,
    () =>
      `<section class="py-12"><div class="mx-auto max-w-5xl px-4"><div class="flex flex-wrap items-end justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800"><h2 class="text-2xl font-semibold">Başlık + aksiyon · ${k}</h2><button type="button" class="rounded-lg border border-zinc-300 px-4 py-2 text-sm dark:border-zinc-600">İndir</button></div></div></section>`,
    () =>
      `<section class="py-14 bg-white dark:bg-zinc-950"><div class="mx-auto max-w-3xl px-4 text-center"><div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-2xl text-white dark:bg-white dark:text-zinc-900">★</div><h3 class="text-xl font-semibold">Ödül rozeti · ${k}</h3></div></section>`,
  ]
  return C[n % C.length]()
}

const TARGET = 300

function buildPack(prefix, groupTitle, tplFn) {
  const blocks = []
  for (let i = 0; i < TARGET; i++) {
    const id = `${prefix}/b-${i}`
    blocks.push({
      id,
      name: `${groupTitle.split('·')[0].trim()} · ${i + 1}`,
      image: img(id.replace(/\W/g, '') + String(i)),
      html: tplFn(i),
    })
  }
  return blocks
}

emit('blocks-pack-ecommerce.js', 'E-ticaret · Hazır bölümler', buildPack('ec', 'E-ticaret · Hazır bölümler', ecTemplates))
emit('blocks-pack-corporate.js', 'Kurumsal · Hazır bölümler', buildPack('co', 'Kurumsal · Hazır bölümler', corpTemplates))

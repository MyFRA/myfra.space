---
title: 'Memanggil API secara server side di NextJS'
date: '2026-06-18'
---

![Memanggil API secara server side di NextJS](/static/blogs/memanggil-api-secara-server-side-di-nextjs/memanggil-api-secara-server-side-di-nextjs.png)

Terkadang ketika di frontend development kita ingin memanggil data secara server side (data diambil di sisi server). Mungkin karena credential pemanggilan api tersebut sensitif, kita ingin agar website SEO atau hal teknis lainnya yang mewajibkan pemanggilan data dilakukan secara server side. Untungnya NextJS support server side rendering, jadi kita bisa melakukan pemanggilan API secara server side. Jadi sekarang saya ingin membagikan tutorial nya

### Instalasi Project

Pertama mari kita mulai dari installasi NextJS nya terlebih dahulu:

```bash
npx create-next-app@latest my-app --yes
cd my-app
npm run dev
```

setelah selesai, saya akan contohkan pemanggilan api secara server side di file `app/page.tsx`. Berikut isi file page.tsx yang sudah saya ubah agar lebih ringkas

```tsx
export default function Home() {
    return (
        <div>
            <h1>Example Server Side API Call</h1>
        </div>
    )
}
```

### Pemanggilan API Server Side menggunakan fetch

sekarang untuk pemanggilan api, kita perlu membuat async function yang menghandle proses tersebut. Disini saya akan coba kasih contoh pemanggilan api publik yang menampilkan foto anjing secara random

```tsx
async function getRandomDogPict() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await resp.json()

    return data
}
```

lalu kita simpan data nya pada variable

```tsx
const dog = await getRandomDogPict()
```

karena kita ambil data nya menggunakan `await` maka kita harus ubah function Home kita menjadi async

```tsx
export default async function Home() {

```

selanjutnya bisa kita tampilkan data nya pada tag img

```html
<img src="{dog.message}" alt="" />
```

ketika kita lihat di browser maka akan muncul sebagai berikut:
![Memanggil API secara server side di NextJS](/static/blogs/memanggil-api-secara-server-side-di-nextjs/dog-browser.png)

di function `getRandomDogPict` kalian juga bisa debug data nya terlebih dahulu untuk melihat isi dari response api nya. Tapi ingat karena ini bersifat server side, maka kita lihat debug console nya pada terminal bukan di browser

```tsx
async function getRandomDogPict() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await resp.json()

    console.log(data)

    return data
}
```

berikut dibawah adalah full kode program dari file `page.tsx`:

```tsx
export default async function Home() {
    const dog = await getRandomDogPict()

    return (
        <div>
            <h1>Example Server Side API Call</h1>

            <div>
                <img src={dog.message} width={200} alt="" />
            </div>
        </div>
    )
}

async function getRandomDogPict() {
    const resp = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await resp.json()

    console.log(data)

    return data
}
```

okay, mungkin cukup itu dulu yaa tutorial pemanggilan api secara server side di NextJS. Temen temen juga bisa ubah dari fetch menggunakan Axios misalnya, itu juga tidak masalah. Karena balik lagi secara konsep sebenarnya masih sama. Sekian yaa, thank you ❤️

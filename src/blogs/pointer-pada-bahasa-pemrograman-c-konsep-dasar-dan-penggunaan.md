---
title: 'Pointer Pada Bahasa Pemrograman C, Konsep Dasar dan Contoh Penggunaannya'
date: '2026-06-03'
---

![Pointer Pada Bahasa Pemrograman C, Konsep Dasar dan Penggunaan](https://myfra.space/static/blogs/pointer-pada-bahasa-pemrograman-c-konsep-dasar-dan-penggunaan/pointer-pada-bahasa-pemrograman-c-konsep-dasar-dan-penggunaan.png)

Saat kita mulai belajar bahasa pemrograman C pada waktunya kita akan mulai bertemu dengan konsep pointer, dan mungkin memang sudah inilah waktunya

Okay, jadi kali ini saya akan coba sharing tentang pointer, baik apa itu pointer, konsep dasar dan penggunaanya. Nahh, kita mulai dulu dari

## Konsep Dasar Pointer

Sebelum ke definisi apa itu pointer, kita perlu melihat dahulu konsep dasar pointer itu seperti apa, agar kita bisa membayangkan dibalik layarnya seperti apa. Dibawah saya lampirkan contoh visualisasi sederhana dari bagaimana sebenarnya variabel kita tersimpan di memory
![Pointer Variable Pada Memory](https://myfra.space/static/blogs/pointer-pada-bahasa-pemrograman-c-konsep-dasar-dan-penggunaan/pointer-memory.png)

Dari contoh gambar diatas, kita bisa lihat masing masing variable diatas yaitu variable a, b dan c memiliki alamat dan nilai. `Alamat`, itu adalah lokasi dari variable kita di memory sedangkan `nilai` adalah value (nilai) dari variable yang kita buat

Kita bisa lihat di contoh diatas variable c memiliki nilai yaitu alamat dari variable b, sehingga bisa kita sebut `variable c adalah sebuah pointer`

Sedangkan alamat dari variable b digunakan sebagai nilai dari variable c, sehingga bisa kita sebut `variable b adalah sebuah reference`

Nah karena hal diatas, kita melihat variable c dan b memiliki hubungan pointer dan reference. Jadi jika saya mengubah nilai variable c menjadi angka 20, maka nilai dari variable b akan ikut berubah menjadi 20. Sehingga bisa kita anggap mereka memiliki sebuah kontrak atau janji yang berbunyi seperti ini

> _Jika nilai dari variable reference berubah maka nilai dari variable pointer ikut berubah, begitupun sebaliknya jika nilai dari variable pointer berubah maka nilai dari variable reference ikut berubah_

## Apa itu Pointer

Nahh berdasarkan konsep yang kita bahas diatas, jika ditanya apa itu pointer? maka jawaban saya:

> _Pointer adalah sebuah variable yang menyimpan alamat memori dari variable lain sebagai nilai_

## Contoh Penggunaanya

Sekarang mari kita praktik contoh penggunaanya di bahasa pemrograman C. Untuk pembuatan variable pointer kita harus menggunakan simbol `*`, sedangkan untuk reference kita menggunakan simbol `&`. Berikut dibawah contoh kode sederhana penerapan pointer.

```C
#include <stdio.h>

int main()
{
    int a = 5; // Reference
    int *b = &a; // Pointer

    printf("%d\n", a);
    printf("%d", *b);

    return 0;
}
```

Jika kita jalankan program diatas, maka akan menampilkan seperti berikut

```C
5
5
```

kita bisa lihat pada contoh diatas, ketika kita menampilkan nilai dari variable \*b, outputnya adalah `5`

> _Untuk penulisan variable pointer pada C wajib menggunakan tanda \*, contoh: **\*foo**, **\*bar**_

> _Untuk penulisan variable reference pada C wajib menggunakan tanda &, contoh: **&foo**, **&bar**_

> _Untuk menampilkan variable pointer wajib mengikutsertakan tanda \*_

## Penggunaan Pointer di Function

sekarang kita lanjut contoh penggunaan pointer di function. Berikut dibawah contoh nya

```C
#include <stdio.h>

void doSum(int a, int b, int *result)
{
    *result = a + b;
}

int main()
{
    int x = 10;
    int y = 20;
    int total;

    doSum(x, y, &total);

    printf("%d\n", total);

    return 0;
}
```

nah pada contoh kode program diatas, bisa dilihat di parameter ketiga pada function doSum adalah sebuah pointer yaitu int `*result`. Sebagai contoh saya mengirimkan variable total sebagai argumen untuk mengisi parameter result pada function tsb. Karena parameter \*result di function doSum adalah sebuah pointer. Maka kita akan kirimkan variable total sebagai reference seperti contoh diatas `doSum(x, y, &total);`

Sehingga Jika kita jalankan program diatas dan tampilkan nilai dari variable total, maka hasilnya seperti berikut

```C
30
```

Kurang lebih seperti diatas untuk konsep dasar dan penggunaan pointer pada bahasa pemrograman C. Misal ada yang mau ditanyakan, kurang sesuai atau ada yang perlu dibenahi, mari kita diskusi di bawah pada komentar. Sekian, terima gaji

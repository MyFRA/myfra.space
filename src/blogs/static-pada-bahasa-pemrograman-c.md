---
title: 'Static Pada Bahasa Pemrograman C'
date: '2026-05-21'
---

![Static Pada Bahasa Pemrograman C](https://myfra.space/static/blogs/static-pada-bahasa-pemrograman-c/c-lang.jpeg)

Akhir akhir ini saya sedang belajar bahasa pemrograman C, dan menemui satu keyword unik yaitu `static`

Saya akan memberikan contoh fungsi sederhana tanpa menggunakan `static` seperti di bawah:

```C
#include<stdio.h>
int runner() {
    int count = 0;
    count++;
    return count;
}

int main()
{
    printf("%d\n", runner());
    printf("%d", runner());
    return 0;
}
```

ketika kita jalankan hasilnya akan seperti ini

```
1
1
```

bukan hal yang aneh bukan, tampak normal karena memang sudah seharusnya seperti diatas

Nahh, sekarang kita ubah variable count diatas menjadi `static`:

```C
#include <stdio.h>

int runner()
{
    static int count = 0;
    count++;
    return count;
}

int main()
{
    printf("%d\n", runner());
    printf("%d", runner());
    return 0;
}
```

ketika kita jalankan hasilnya akan seperti ini

```
1
2
```

lohh, kok bisa? kenapa menampilan 1 dan 2. Nah disitu letak uniknya

Jadi pada dasarnya static adalah sebuah variable/fungsi yang lifetime nya sepanjang program. Jadi variabel tidak akan mati ketika fungsi selesai, dia tetap hidup sampai program berhenti

Lalu kenapa program diatas menampilkan 1 dan 2, bukannya kode `static int count = 0;` pada fungsi diatas itu adalah sebuah inisialisasi variabel?

nah jadi ketika inisialisasi variable menggunakan keyword static, maka compiler akan tahu bahwa itu adalah static jadi hanya akan melakukan inisialisasi sekali saja. Dan ketika fungsi kedua dijalankan dia tidak membuat ulang variabel, melainkan melihat kembali ke dalam memory dan melakukan increment sehingga akan menghasilkan output 1 dan 2, seperti contoh kode fungsi diatas

---

Sekarang kita coba keyword static pada function, pada dasarnya function di bahasa pemrograman C bersifat global sehingga penggunaan static pada function digunakan atau bersifat sebagai visibility bahwa function tersebut hanya bisa digunakan di file tersebut saja. Contoh seperti pada kode program di bawah

```C
#include <stdio.h>

static int foo() {      // Tidak dapat diakses di file lain
    printf("Foo\n");
    return 0;
}

int bar() {              // Dapat diakses di file lain
    printf("Bar\n");
    return 0;
}

int main() {
    foo();
    bar();

    return 0;
}
```

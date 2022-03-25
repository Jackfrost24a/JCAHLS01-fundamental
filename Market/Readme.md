# Introduce Git and Github
## Git
Merupakan bagian dari SCM (Source Code Management) yang ada pada local storage/PC.

## Github
Program Management secara online. Sehingga, Program/Code bisa kita share secara umum/open-source
========================
## Bagian Pada Git
1. Modified/Changes
   * Bagian dari Git untuk merecord perubahan yang dilakukan pada file
   * Record Perubahan, record penambahan file dan record pengurangan file.
2. Staged
   * Bagian dari git untuk menyiapkan file apa saja yang akan kita simpan kedalam git.
3. Committed
   * Bagian dari git untuk menyimpan perubahan pada file project kita.
-------------------------------------------------
## Konfigurasi Git
Lakukan ini semua dengan terminal

Menghubungkan Git dengan Github :
- Konfigurasi username : git config -- global user.name "username_github"
- konfigurasi email : git config --global user.email "email@github"

>Menyiapkan Project untuk menggunakan git
1. Inisialisasi git/mengaktifkan git pada project
   - git init
2. Melihat status git pada project
   - git status
3. Memindahkan ke Staged Session
   - git add nama_file -> jika file spesifik
   - git add .  -> jika Semua File
4. Menyimpan Perubahan di committed Session
   - git commit -m "pesan mengenai perubahan yang dilakukan."
5. melihat histoy commit
   - git log

6. Menambahkan Link github
   - git remote add alias_name link_Github
   - git remote -v : memeriksa link github repository yang terdaftar pada project
7. Konfigurasi Branch utama
   - git branch -M nama_branch
8. Mengupload/menyimpan ke github
   - git push -u alias_name nama_branch
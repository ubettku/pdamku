# ERD
![WhatsApp Image 2024-09-26 at 18 15 21_6fd345ae](https://github.com/user-attachments/assets/0aafb8fb-b19d-4ec5-8eae-82b3f6e03d22)
# uml
![Untitled Diagram drawio (1)](https://github.com/user-attachments/assets/e5d69ebd-fcf6-4692-9500-3b7b9a156576)

# 1. Prasyarat 
### Pastikan perangkat Anda telah memenuhi prasyarat berikut sebelum menginstal Repository ini:

- PHP: Versi 8.1 atau lebih baru.
- Composer: Dependency Manager untuk PHP.
- MySQL/SQLite: Untuk database.
- Node.js & NPM: Untuk pengelolaan dependensi front-end.

# 2. Langkah Instalasi  

### Langkah 1: Clone Repository 
git clone
### Langkah 2: Pindah ke Direktori Proyek 


cd laravel-web-desa

- Setelah Itu Masuk Ke dalam Visual Studio Code


code .

### Langkah 3: Instal Dependensi Backend

composer install

### Langkah 4: Copy atau Salin File Konfigurasi (.env)

##### Salin file .env.example menjadi .env untuk mengatur variabel lingkungan atau Mengunkan Code berikut:


cp .env.example .env


### Langkah 5: Atur Konfigurasi .env


 DB_CONNECTION=mysql
 DB_HOST=127.0.0.1
 DB_PORT=3306
 DB_DATABASE=webdesa
 DB_USERNAME=root
 DB_PASSWORD=


### Langkah 6: Migrasi Database

- Buat sebuah Databases Di xampp Terlebih Dahulu


php artisan migrate


### Langkah 7: Buat Strogae Untuk Menyimpan Foto Yang di buat di Crud

php artisan storage:link


### Langkah 8: Generate Application Key

- Langkah ini sangat penting untuk setiap aplikasi Laravel, karena tanpa kunci ini, beberapa fitur tidak akan berjalan sebagaimana mestinya jadi harus di jalankan ya perintanya kalo mau menggunakan Source Code ini ya semoga berhasil :blush: :


php artisan key:generate


### Langkah 9: Jalankan Server Pengembang


php artisan serve



<p align="center">
⚠ <strong>Peringatan:</strong> Pastikan untuk menjalankan semua sesuai dengan urutan agar berjalan lancar.⚠
</p>
<h1 align="center">Semoga Beruntung :blush:</h1>

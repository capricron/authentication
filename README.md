Cara setting Projek Ini

1. Bikin Database dengan nama auth
2. Buat file .env dengan isi sebagai berikut:
    NODE_PATH=src   
    JWT_SECRET = "bebas"
3. Run npm install
4. Run npx sequelize-cli db:migrate
5. Run yarn run dev

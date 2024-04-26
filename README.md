# test_hh
## backend
- ```cd backend```
- ```npm i```
- **setting config development /config.json dan /config.js dengan database username, password, dialect**
- default => (test_hh_dev, postgres, postgres, postgres)
- ```npx sequelize-cli db:create``` //membuat db 
- ```npx sequelize-cli db:migrate```
- ```npx sequelize-cli db:seed:all```
- ```node app``` //running on port 3000

## frontend
- ```cd frontend```
- ```npm i```
- ```npm run dev``` //running on port 8080

## jalankan aplikasi 
buka pada browser http://localhost:8080/
login menggunakan data seeding 
1. email: user1@example.com password: password1
2. email: user2@example.com password: password2

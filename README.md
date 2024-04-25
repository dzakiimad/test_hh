# test_hh
## backend
- _cd backend_
- _npm i_
- **setting config development /config.json dan /config.js dengan database username, password, dialect**
- default => (test_hh_dev2, postgres, postgres, postgres)
- _npx sequelize-cli_ db:create //membuat db 
- _npx sequelize-cli db:migrate_
- _npx sequelize-cli db:seed:all_
- node app //running on port 3000

## frontend
- _cd my-app_
- _npm i_
- _npm run dev_ //running on port 8080

## jalankan aplikasi 
buka pada browser http://localhost:8080/
login menggunakan data seeding 
1. email: user1@example.com password: password1
2. email: user2@example.com password: password2

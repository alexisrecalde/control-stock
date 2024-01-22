# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Run `docker-compose up` command
3. Run `npm start` command
// docker run -it --rm postgres:14.5 psql -h localhost -U test -d test
// npx typeorm --  migration:run -d src/data-source.ts
// npx typeorm migration:create ./src/migrations/Test


//npx typeorm-ts-node-esm migration:generate -d src/data-source.ts
npx typeorm-ts-node-esm migration:run -d src/data-source.ts
//typeorm migration:run -- -d src/data-source.ts
// typeorm migration:run -- -d src/data-source.ts
#migrate database
./node_modules/knex/bin/cli.js migrate:latest;
#run server
nodemon -L /code/index.js;

include .env

default: run

install:
	sudo docker exec -it xtree_app yarn

dev-server:
	sudo docker exec -it xtree_app yarn start:dev

migration:
	sudo docker exec -it xtree_app yarn migration

run:
	sudo docker-compose up -d --build

clean:
	sudo docker-compose down --remove-orphans

in:
	sudo docker exec -it xtree_app sh

all-permissions:
	sudo chown -R ${USER}:${USER} ./node_modules
	sudo chown -R ${USER}:${USER} ./.docker
	sudo chown -R ${USER}:${USER} ./coverage

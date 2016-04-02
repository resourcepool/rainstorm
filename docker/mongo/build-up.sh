#!/bin/bash

#Stop and rm running containers
for container_id in $(docker ps  --filter="name=retaliation-mongo-seed" -q);
	do docker stop $container_id && docker rm $container_id;
done

for container_id in $(docker ps  --filter="name=retaliation-mongo" -q);
        do docker stop $container_id && docker rm $container_id;
done

docker-compose build -t mongo-retaliation --no-cache
echo Please wait 6 seconds before docker starts...
sleep 6
docker-compose up -d

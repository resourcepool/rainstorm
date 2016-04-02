FROM mongo

COPY init.json /init.json
CMD mongoimport --host retaliation-mongo --db retaliation-mongo --collection users --type json --file /init-users.json

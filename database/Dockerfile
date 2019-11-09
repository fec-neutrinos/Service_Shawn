
FROM mysql:5.7

ADD ./reviews.sql /docker-entrypoint-initdb.d

ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

EXPOSE 3306

FROM jenkins:latest

MAINTAINER Louis Amoros <amoros.louis@gmail.com>

ENV DEBIAN_FRONTEND noninteractive
USER root

# copy config directory
COPY config /usr/share/jenkins/config

# copy job cdb config
COPY config/cdb /var/jenkins_home/jobs/cdb

# copy and install jenkins plugins
COPY config/plugins.txt /usr/share/jenkins/plugins.txt
RUN /usr/local/bin/plugins.sh /usr/share/jenkins/plugins.txt

# link jenkins docker to dind with port 
ENV DOCKER_HOST tcp://dind-cdb:5000

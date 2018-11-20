FROM node:8.11.1
MAINTAINER Eric Muyser <eric@muyser.com>

# Install Git
# RUN apt-get update && apt-get install -y git

# Install node.js 8.11.1
# RUN apt-get install python-software-properties && \
#     curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
#     apt-get install nodejs

# allow app to create template from conf, and log to disk
RUN mkdir -p /opt/service
ADD . /opt/service/

WORKDIR /opt/service

# Change this to daemon later
USER root

RUN npm install

# Default to dev for now but will use environment variables to figure out the env
CMD ["npm", "start"]

EXPOSE 8080 9876
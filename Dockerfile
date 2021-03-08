# build environment
FROM node:latest as build

# set working directory
WORKDIR /app

# Install Greek language pack
# RUN apt-get install -y language-pack-el

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json


RUN npm install

COPY . /app
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN NODE_ENV='production'
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
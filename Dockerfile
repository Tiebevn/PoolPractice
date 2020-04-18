FROM node:12 as react-builder
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install --production
COPY . .
RUN npm run build


FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
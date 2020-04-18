FROM node:12 as react-builder
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
RUN npm install --production
COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=react-builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
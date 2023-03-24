FROM node:16 as backend
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm", "start"]

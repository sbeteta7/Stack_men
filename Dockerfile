FROM node:18.18.2
 LABEL maintainer sebastian.beteta@tecsup.edu.pe
 RUN git clone -q https://github.com/sbeteta7/Stack_men.git
 WORKDIR /usr/src/app
 RUN chown -R node:node .
 USER node
 RUN npm init -y && npm install
 COPY . .
 EXPOSE 10850
 CMD ["npm","start"]
~                    
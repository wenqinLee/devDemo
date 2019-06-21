FROM hub.c.163.com/dou3311/cloudmarket:node10.15-slim
RUN mkdir -p /home/hello-docker
WORKDIR /home/hello-docker    # Bundle app source
COPY . /home/hello-docker
RUN npm install
EXPOSE 10001
CMD npm start
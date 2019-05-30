docker rm -f letsencrypt
docker run -d \
  --restart=always \
  -v /root/certs:/etc/nginx/certs:rw \
  --volumes-from nginx \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  --name letsencrypt \
  jrcs/letsencrypt-nginx-proxy-companion
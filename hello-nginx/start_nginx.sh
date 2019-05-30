docker rm -f nginx
docker run -d \
        --restart=always \
        -p 80:80 -p 443:443 \
       	--name=nginx \
       	-v /root/certs:/etc/nginx/certs:ro \
       	-v /etc/nginx/vhost.d \
       	-v /usr/share/nginx/html \
        -v /var/run/docker.sock:/tmp/docker.sock:ro \
       	jwilder/nginx-proxy
### rancher部署简记


### Rancher Server ssl ca
sudo docker run -d --restart=unless-stopped -p 8080:8080 -v /some/dir/cert.crt:/var/lib/rancher/etc/ssl/ca.crt rancher/server
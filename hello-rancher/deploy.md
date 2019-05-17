### rancher部署简记
需要有docker 环境

### 关闭master和分机的防火墙
    <code>
        systemctl stop firewalld && systemctl disable firewalld
        swapoff -a 
        setenforce 0
        sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config # 修改配置永久生效，需重启
    </code>
### Rancher Server ssl ca
sudo docker run -d --restart=unless-stopped -p 8080:8080 -v /some/dir/cert.crt:/var/lib/rancher/etc/ssl/ca.crt rancher/server
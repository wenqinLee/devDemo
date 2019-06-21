echo "打包镜像"
docker build -t= "940215724qin/demo:hello-dockerHub" .
docker login -u 940215724qin -p W2V5rb9TJnjg7aS
docker push 940215724qin/demo:hello-dockerHub

echo '删除打包文件...'
rm bundle.tar.gz
rm -rf bundle/
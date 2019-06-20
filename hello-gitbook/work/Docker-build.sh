docker rn -f gitbook-demo
docker run \
    --name gitbook-demo \
    -d \
    -p 4000:4000 \
        registry.cn-beijing.aliyuncs.com/maodouio/gitbook-demo:v0.0.1 \

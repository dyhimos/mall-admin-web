# 设置基础镜像
FROM nginx:1.17.8
# 定义作者
MAINTAINER minggh 
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
ADD dist/  /usr/share/nginx/html/
#用本地的 default.conf 配置来替换nginx镜像里的默认配置
ADD nginx.conf /etc/nginx/nginx.conf
ADD default.conf /etc/nginx/conf.d/default.conf
RUN chown nginx:nginx -R /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;"]

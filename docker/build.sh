DOCKER_IMG=mall-admin-web
DOCKER_CONTAIN=mall-admin-web
APP_PORT=8090
HOST_PROT=8090
MAX_MEM=256M
docker stop ${DOCKER_CONTAIN}
docker rm  ${DOCKER_CONTAIN}
docker rmi  ${DOCKER_IMG}
docker build -t ${DOCKER_IMG} ./
docker run --name ${DOCKER_CONTAIN} -m ${MAX_MEM} --restart=always --privileged=true --net=host -p ${HOST_PROT}:${APP_PORT} -d ${DOCKER_IMG}
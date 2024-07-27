include .env
# コンテナへ接続
hoseru-ssh:
	docker exec -it ${CONTAINER_NAME} sh
## ketcher_container
clean rewrite
### dev run
docker-compose up --build
### prod run 
_docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build_
-d == detached

### prod run clean without dev server on 3001
_docker-compose -f docker-compose.prod.yml up --build_
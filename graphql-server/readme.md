# Node-Graphql-Server


## Takeaways and Troubleshooting
```
initdb: directory "/var/lib/postgresql/data" exists but is not empty
```
Make sure `h:/tools/PostgreSQL/10/data` is empty. Postgres data is mounted there!

```
FATAL:  data directory "/var/lib/postgresql/data" has wrong ownership
```
Some versions of Docker set different level of permission on mounted volumes. It might be easier to just mount on project directory. This error is actually an indicator that volume on host has insufficient privilege instead of container.

```
Docker volume cannot be created
```
Make sure to always prune unneeded volume with `docker volume prune` 

---
### Docker
- To connect to container use `docker exec -ti <containerId> bash`. 
- Docker convention for binding is always `host:container` e.g, `8888:8080` refers to port 8888 on host and 8080 inside the container.
- :warning: Sometimes it might take awhile for `volume` to sync. If you're trying to sync a big folder from container to host then it might take awhile to appear.

### Docker Compose
- Start Docker Compose using `docker-compose up -d`
- Stop everything using `docker-compose down`
- List volumes using `docker volume ls` and remove unused ones using `docker volume prune` after stopping everything else.
  
### Prisma
- Prisma database uses `default$default` schema by default. This schema resides inside Postgres image created by Docker Compose. The data stored within is stored inside Hyper-V in case of Windows 10.
- Prima creates a database called `prisma`, with user being `postgres`. The user is specified in `docker-compose.yml` while `prisma` database name is a default.


### Postgres (Inside Docker)
- To connect to prisma db `psql prisma postgres`
- To list all schemas `\dt *.*`
- To list only `default$default` schema `\dt default$default.`
- To select from a table use `select * from default$default."User";`
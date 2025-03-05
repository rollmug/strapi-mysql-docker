# 🚀 Strapi with MySQL in Docker

To get started, clone this repo:

```bash
# clone into directory of your choice:
git clone https://github.com/rollmug/strapi-mysql-docker.git

# change directory:
cd strapi-mysql-docker
```

### Environment vars:

Using the included `.env.example` file as a starter, create a `.env` file and update the values as needed.

To automatically generate the app keys and secrets, you can optionally paste the following script into your terminal, then copy and past the resulting variables:

```bash
APP_KEYS=$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16),$(openssl rand -base64 16)  \
API_TOKEN_SALT=$(openssl rand -base64 16) \
JWT_SECRET=$(openssl rand -base64 16) \
ADMIN_JWT_SECRET=$(openssl rand -base64 16) \
TRANSFER_TOKEN_SALT=$(openssl rand -base64 16) \
echo "\n# Secrets" && \
echo "APP_KEYS=$APP_KEYS" && \
echo "API_TOKEN_SALT=$API_TOKEN_SALT" && \
echo "JWT_SECRET=$JWT_SECRET" && \
echo "ADMIN_JWT_SECRET=$ADMIN_JWT_SECRET" && \
echo "TRANSFER_TOKEN_SALT=$TRANSFER_TOKEN_SALT" && \
echo ""
```

### Build and Run

To build your instance and run Strapi with MySQL:

```bash
docker-compose up -d --build
```

You can then access your Strapi instance from `http://localhost:1337/`

To stop all running containers, run:

```bash
docker-compose down
```

For subsequent runs, you can simply run without the "build" option, ie:

```bash
docker-compose up -d
```
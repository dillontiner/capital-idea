# capital-idea

### Running development locally
Set up your local SSL certificate so HTTPS works locally ([source](https://www.freecodecamp.org/news/how-to-set-up-https-locally-with-create-react-app/))
```
# Set up mkcert on Mac if needed
brew install mkcert
mkcert -install

# Create the keys that will allow you to access the frontend app via HTTPS
mkdir -p frontend/.cert
mkcert -key-file ./frontend/.cert/key.pem -cert-file ./frontend/.cert/cert.pem "localhost"
```

Run the dev app locally with this command (assumes you have [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/))
```
docker-compose -f docker-compose.dev.yml up
```

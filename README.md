# capital-idea

Proof of concept for live streaming prices for hypothetical t shirts with stock certificates on them.

![capital-idea](https://user-images.githubusercontent.com/10820969/118417280-5b13e900-b681-11eb-999d-b47d9ef88287.gif)

### Running development locally
Set up your local SSL certificate so HTTPS works locally ([source](https://www.freecodecamp.org/news/how-to-set-up-https-locally-with-create-react-app/)). If this for some reason fails, going back to an earlier commit `git checkout 759aec572a0c55922344f41a4303ae03560c3eaa`
```
# Set up mkcert on Mac if needed
brew install mkcert
mkcert -install

# Create the keys that will allow you to access the frontend app via HTTPS
mkdir -p frontend/.cert
mkcert -key-file ./frontend/.cert/key.pem -cert-file ./frontend/.cert/cert.pem "localhost"
```

Install the dependencies for each service, which are required to run the development app.
```
cd frontend && npm install && cd ..
cd ecommerce-backend && npm install && cd ..
cd live-pricing-service && npm install && cd ..
```

Run the dev app locally with this command and view it at `https://localhost`. This assumes you have [docker](https://docs.docker.com/get-docker/) and [docker compose](https://docs.docker.com/compose/install/)). I had `Docker version 19.03.12, build 48a66213fe` and `docker-compose version 1.26.2, build eefe0d31` installed on OSX respectively.
```
docker-compose -f docker-compose.dev.yml up
```

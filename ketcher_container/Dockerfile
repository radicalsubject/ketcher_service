# pull official base image
FROM node:alpine

# set working directory
WORKDIR /ketcher_container

# add `/app/node_modules/.bin` to $PATH
ENV PATH /ketcher_container/node_modules/.bin:$PATH

# add app
COPY package.json ./
COPY packages/ ./
COPY .babelrc ./
RUN yarn 

RUN yarn workspaces run build
COPY . ./

# # start app
# CMD ["npm", "start"]
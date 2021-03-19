# pull official base image
FROM node:alpine

# set working directory
WORKDIR /ketcher_container

# add `/app/node_modules/.bin` to $PATH
ENV PATH /ketcher_container/node_modules/.bin:$PATH

# add app
COPY . ./
RUN yarn 
RUN yarn workspaces run build

# # start app
# CMD ["npm", "start"]
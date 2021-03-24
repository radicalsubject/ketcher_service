# pull official base image
FROM node:alpine

# set working directory
WORKDIR /ketcher_container

# add `/app/node_modules/.bin` to $PATH
ENV PATH /ketcher_container/node_modules/.bin:$PATH

# add app
COPY package.json .
COPY packages/ ./packages
COPY .babelrc .
RUN yarn 
RUN npm cache clean --force
RUN yarn workspaces run build
#add other everything
COPY . .
# # start app
# CMD ["npm", "start"]
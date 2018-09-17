FROM node:8-jessie
RUN mkdir /code

RUN npm i -gq nodemon > /dev/null 2> /dev/null

COPY ./entrypoint.sh /code/entrypoint.sh
WORKDIR /code

CMD sh entrypoint.sh

FROM node:14

# RUN mkdir class_build // 굳이 따로 폴더를 안 만들어 주어도  아래 copy에서 자동생성
WORKDIR /class_build/

COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start 
# CMD 는 미리저장안되며 RUN은 미리저장해놓고 실행
# CMD yarn start // CDM는 일회용 // RUN은 무제한 


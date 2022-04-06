console.log("타입스크립트를 실행했어요!!!");
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

// const { ApolloServer, gql } = require("apollo-server"); 옜날꺼
import { ApolloServer, gql } from "apollo-server";
// 1.타입
const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    #- createBoard(writer: String, title: String, contents:: String): String - 연습용(example)
    createBoard(createBoardInput: CreateBoardInput!): String #- 실제용(backend06)
  }
`;

// 2.API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 데이터베이스에 접속해서 게시물 가져오기

      const result = await Board.find();

      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // args는 데이터 받아오기
      // context는 요약정보
      // info는 api정보
      // parent는  fetchBoard("철수") <= 철수를 나타냄
      // 데이터베이스에 접속해서 게시물 등록하기.

      await Board.insert({
        ...args.createBoardInput,
        //...args,
        // writer: args.createBoardInput.Writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      // 수정하면?
      // Board.update({writer:"철수"}, {title:"제목2"});
      // 삭제하면?
      // Board.delete({writer: "철수"})
      // 실제로삭제하는게 아닌
      // Board.update({writer:"철수"}, {deletedAt: new Date() });

      return "게시물을 등록했습니다!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5004,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Board],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!!!");
    // 백엔드 API 오픈(24시간동안 접속 가능하게끔 열어주기)
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!!!");
  });

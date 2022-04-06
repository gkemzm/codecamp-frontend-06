// import { DataSource } from "typeorm";
// import { fetchProducts } from "./tables/Products";

// const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "34.64.124.189",
//   port: 5004,
//   username: "postgres",
//   password: "postgres2021",
//   database: "postgres",
//   entities: [fetchProducts],
//   logging: true,
// });

// AppDataSource.initialize()
//   .then(() => {
//     console.log("연결성공!!!");
//   })
//   .catch(() => {
//     console.log("연결실패!!!");
//   });
console.log("타입스크립트를 실행했어요!!!");
import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer, gql } from "apollo-server";

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
      const result = await Board.find();

      return result;
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      await Board.insert({
        ...args.createBoardInput,
      });

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

    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!!!");
  });

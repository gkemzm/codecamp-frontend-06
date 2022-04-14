import { useQuery, gql } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function MyPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}

export default withAuth(MyPage);

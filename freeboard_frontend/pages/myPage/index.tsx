import { useQuery, gql } from "@apollo/client";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import PickedList from "../../src/components/units/market/pickList/pickList.container";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <>
      <PickedList />
      <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>
    </>
  );
}

export default MyPage;

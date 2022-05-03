import { useQuery, gql } from "@apollo/client";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import PickedList from "../../src/components/units/market/pickList/pickList.container";
import BucketList from "../../src/components/units/market/bucketList/bucketList.container";
import styled from "@emotion/styled";
import PointList from "../../src/components/units/market/pointList/pointList.container";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;
function MyPage() {
  useAuth();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log(data);

  return (
    <Wrapper>
      <PickedList />
      <BucketList />
      <PointList />
    </Wrapper>
  );
}

export default MyPage;

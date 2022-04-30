import { gql, useQuery } from "@apollo/client";
import PickedListHTML from "./pickList.presenter";

const FETCH_USEDITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String) {
    fetchUseditemsIPicked(search: $search) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      pickedCount
      buyer {
        _id
        email
        name
        createdAt
        updatedAt
      }
      seller {
        _id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export default function PickedList() {
  const { data } = useQuery(FETCH_USEDITEMS_IPICKED, {
    variables: {
      search: "",
    },
  });
  console.log(data);

  return <PickedListHTML data={data} />;
}

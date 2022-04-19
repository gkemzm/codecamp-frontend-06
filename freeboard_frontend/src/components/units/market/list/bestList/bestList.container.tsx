
import { useQuery } from "@apollo/client";
import { FETCH_USED_TIEM_OFTHEBEST } from "./bestList.query";
import BestProductHTML from './bestList.presenter';

export default function BestProductContainer() {
  const { data } = useQuery(FETCH_USED_TIEM_OFTHEBEST);
  console.log(data);
  return (
    <>
      <BestProductHTML data={data} />
    </>
  );
}

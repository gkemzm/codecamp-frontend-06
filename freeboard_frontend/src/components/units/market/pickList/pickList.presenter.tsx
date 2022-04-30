export default function PickedListHTML(props: any) {
  return (
    <>
      <div>
        {props.data?.fetchUseditemsIPicked?.map((el: any) => (
          <>
            <div key={el._id}></div>
            <div>{el._id}</div>
            <div>{el.name}</div>
            <div>{el.remarks}</div>
            <div>{el.contents}</div>
            <div>{el.tags}</div>
            <img src={`https://storage.googleapis.com/${el.images[0]}`}></img>
          </>
        ))}
      </div>
    </>
  );
}

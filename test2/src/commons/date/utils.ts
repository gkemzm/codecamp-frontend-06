export const getDate = (date: any) => {
  const newdate = new Date(date);
  const yyyy = newdate.getFullYear();
  const mm = newdate.getMonth() + 1;
  const dd = newdate.getDate();
  const hh = newdate.getHours();
  const mn = newdate.getMinutes();
  return `${yyyy}.${mm}.${dd}   ${hh}:${mn}`;
};

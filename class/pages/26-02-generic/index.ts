// 1. 문자 타입
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(8);

// 3. any 타입
const getAny2 = (arg: any): any => {
  return arg;
};
const reuslt3_1 = getAny2("철수");
const reuslt3_2 = getAny2(3);
const reuslt3_3 = getAny2(true);

// 4. get 타입 2
const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic 타입 // 어떤 타입인지 모르지만 들어온 타입을 그대로 사용한다. // 문자/숫자/bool가 들어오면 전체가 문자/숫자/bool 사용
// 즉 들어온타입을 그대로 사용하는 타입
function getGeneric<MyType>(arg: MyType): MyType {
  return arg;
}

const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const reuslt5_1 = getGeneric(aaa);
const reuslt5_2 = getGeneric(bbb);
const reuslt5_3 = getGeneric(ccc);

// 6.gereric 타입2
// prettier-ignore
function getGenerics<MyType1, MyType2, MyType3>(
  arg1: MyType1, 
  arg2: MyType2,
  arg3: MyType3
): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// 7.gereric 타입2 - 축약1
function getGenerics<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const result7 = getGenerics("철수", "다람쥐초등학교", 8);

// 8.gereric 타입2 - 축약1
function getGenerics<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const result8 = getGenerics("철수", "다람쥐초등학교", 8);

// 9. useState에서의 generic
// const [school, setSchool] = useState<string>("다람쥐초등학교")
// const apple: number = 3;
// console.log(apple);

// 10. 화살표함수에서의 generic
// const getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] =>{
//     return [arg3, arg2, arg1];
// }

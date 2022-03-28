import { Rate } from "antd";
import { useState } from "react";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  // state = {
  //   value: 3,
  // };

  const handleChange = (value: any) => {
    // this.setState({ value });
    setValue(value);
  };
  return (
    <div>
      <Rate onChange={handleChange} value={value} />
    </div>
  );
}

// 위의 onChange은 우리가 사용하는 DOM이벤트가아닌
// 이름만 같은 제작자들이 직접만든 함수이다.
// 아래의 코드가 위처럼 바뀐것이다.

// import { Rate } from 'antd';

// const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

// class Rater extends React.Component {
//   state = {
//     value: 3,
//   };

//   handleChange = value => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <span>
//         <Rate tooltips={desc} onChange={this.handleChange} value={value} />
//         {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
//       </span>
//     );
//   }
// }

// ReactDOM.render(<Rater />, mountNode);

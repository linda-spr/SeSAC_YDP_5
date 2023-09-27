import { Component } from 'react';

class ClassBind extends Component {
  constructor(props) {
    super(props);

    console.log('constructor this : ', this);
    this.state = {
      name: 'sesac',
    };
    //  #1 클래스 컴포넌트에서 이벤트 사용 - bind 쓰기
    // - js에서는 this 호출하는 방법에 의해 결정
    //  => 함수가 호출될 떄마다 this가 다를 수 있다
    // bind() 메서드는 호출되는 방법과 무관하게 this를 묶어버림
    this.printConsole = this.printConsole.bind(this);
  }

  //   1) bind 사용 경우
  printConsole() {
    console.log('this', this);
    console.log('state : ', this.state);
  }

  // #2. 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
  // 화살표 함수는 this가 아예 없음! 선언될 시점에 상위 스코프가 this로 바인딩
  //   printConsole = () => {
  //     console.log('this', this);
  //   };

  printConsole2 = (evt, msg, e) => {
    console.log(msg);
    console.log(e);
    console.log(evt.target);
    console.log(evt.currentTarget);
  };

  printConsole3(msg, e, evt) {
    console.log(msg);
    console.log(this);
    console.log(e);
    console.log(evt.target);
    console.log(evt.currentTarget);
  }

  render() {
    return (
      <div>
        <h1>Class Component Event</h1>
        <button onClick={this.printConsole}>printConsole(인자X)</button>
        <button onClick={(e) => this.printConsole2(e, 'msg', 'msg2')}>
          printConsole(인자O)
        </button>
        {/* <button onClick={this.printConsole2}>printConsole(인자O, bind)</button> */}
        <button onClick={this.printConsole2.bind(this, 'msg3', 'msg4')}>
          printConsole(인자O, bind2)
        </button>
      </div>
    );
  }
}

export default ClassBind;

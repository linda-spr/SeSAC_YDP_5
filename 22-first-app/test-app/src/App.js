// import logo from './logo.svg';
import './App.css';
import Larva from './Larva';

function App() {
  const name = 'luna';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };
  return (
    <div className="App">
      {/* 자동 생성 코드 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* JSX 문법 */}
      {/* 하나로 감싸인 요소 */}
      <>
        {/* js문법 사용
            - {}로 감싸면 js표현식 사용 가능
            - {}안에서 삼항 연산자 사용 가능 (if,for문 사용 불가X) */}
        <div>{name} 안녕?</div>
        <div>
          {student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}
        </div>

        {/* 3. style 속성
            - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
            - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성해야 함 (ex. backgroundColor)
        */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'yellow',
            color: 'blue',
            fontSize: '48px',
          }}
        >
          스타일 적용2
        </div>

        {/* 4. className 사용
            - class 속성이 아닌 className 속성 사용 (ex. <div className="App">)

            5. 종료 태그가 없는 태그 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
            - <input /> or <input></input>

            6. 주석
            - // : jsx 외부 주석
            - {* *} : jsx 내부 주석
        */}
        <Larva />
      </>
    </div>
  );
}

export default App;

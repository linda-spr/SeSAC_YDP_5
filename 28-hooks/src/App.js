import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducer.Ex';
import Form from './components/react-hook-form/Form';
import useTitle from './hooks/useTitle';

function App() {
  useTitle('React Hooks 연습중입니당');

  return (
    <div className="App" style={{ marginBottom: '500px' }}>
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={7} />
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form />
    </div>
  );
}

export default App;

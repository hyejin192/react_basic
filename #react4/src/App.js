import { useState } from 'react';
import './App.css';

function App() {
  const [username,setUsername]=useState(''); 
  const [password,setpassword]=useState('');
  const onSubmit =(event)=> {
    // form은 전송 후에 refresh(새로고침)되기 때문에 폼 제출 시 기본 동작을 막는 역할인 event.preventDefault을 사용
    event.preventDefault(); 
    console.log(username, password)
  }

  // onChange : input의 값이 바뀔때마다 실행하는 함수
  // 단일태그는 반드시 닫는태그로 적기
  return (
    <>
    <form onSubmit={onSubmit}>
      
      <input placeholder='Username' value={username}      
      onChange={(e)=>{setUsername(e.target.value)}}/><br/>

      <input placeholder='Password' value={password}
      onChange={(e)=>{setpassword(e.target.value)}}/><br/>
      
      <button type='submit'>Update</button>
    </form>
    </>
    
  );
}

export default App;

# 🏖️ router
![image](https://github.com/hyejin192/react_basic/assets/129017064/f049d1b8-6395-4ae5-b909-cdcd44173815)

      npm install react-router-dom
      
![image](https://github.com/hyejin192/react_basic/assets/129017064/5b4f388a-5c84-42b9-b2fc-396706cc254e)

## index.js에 셋팅하기
![image](https://github.com/hyejin192/react_basic/assets/129017064/ff22d413-8a83-463b-9b83-7c38035a52bc)
![image](https://github.com/hyejin192/react_basic/assets/129017064/d51da4bf-0110-4bbb-b541-1673ab154efb)

## hompage와 about 연결
![image](https://github.com/hyejin192/react_basic/assets/129017064/7e0972e4-4ee1-46d2-9096-de178cfbefe2)

      route는 routes로 감싼다.
      route안에 path,element 작성 ( path='/' 는 첫페이지 기본값)
      element 안에 각각의 js를 연결
      <Link to="/about">Go to about</Link> 는 <a href="/about">Go to about</a> 와 같음
      link로 about을 연결해도 되고, navigate를 사용해 연결해도 된다.
      
      * button은 link를 걸 수 없기때문에 navigate를 사용
      
 ## route.js를 사용
 ![image](https://github.com/hyejin192/react_basic/assets/129017064/a5604d8d-daf1-4b47-be6c-c5c39dceb326)
 
 ## rest
 
      자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미

 ![image](https://github.com/hyejin192/react_basic/assets/129017064/3d6b7799-f473-4465-9050-ba8b602890ed)
 
 ![image](https://github.com/hyejin192/react_basic/assets/129017064/220b8edc-2f32-4cf6-9795-57ce101619fe)
   
 ### 화면에 출력 (useEffect 의존성배열함수)
![image](https://github.com/hyejin192/react_basic/assets/129017064/cb9fc4dc-7931-4771-b33e-17d27ef799fa)

## card.js 생성
![image](https://github.com/hyejin192/react_basic/assets/129017064/4ec4f7bf-0aa5-471c-8b3a-0b360cfaa8a3)
![image](https://github.com/hyejin192/react_basic/assets/129017064/279d0f8f-0e01-4881-afde-85aa0debcd2d)

      {title}이 결국 {title:props.title}  title경로 중요









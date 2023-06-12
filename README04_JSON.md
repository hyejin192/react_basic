# 🌸 json-server
![image](https://github.com/hyejin192/react_basic/assets/129017064/14f8e131-817a-48d3-82bf-774fd3f3fd8f)

    npm i json-server
    
![image](https://github.com/hyejin192/react_basic/assets/129017064/60656823-280f-4824-bc8f-2955d8fb7308)

    터미널에 npm i json-server 적기
    
## db.json 파일 만들기    
![image](https://github.com/hyejin192/react_basic/assets/129017064/b5b313f4-3227-40b5-a879-1505b5efdfb5)

### db.json파일은 root에 만들어야 한다
![image](https://github.com/hyejin192/react_basic/assets/129017064/9d30acca-23d8-4488-968c-d7a1f23dd951)

## db.json 실행하기
![image](https://github.com/hyejin192/react_basic/assets/129017064/c26c8c5c-c62b-4864-8289-f0da348e4bc7)

### 위와 같이 실행하면 port를 3000번을 사용하기 때문에 react와 중복이 되어버린다. 
### 그래서 port를 변경해주어야 한다.(-- port 3004)

   json-server --watch db.json --port 3004 
   
   #### ❗ 실행이 안된다면
   npx json-server --watch db.json --port 3004


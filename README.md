# React + TypeScript로 투두리스트 만들기
### 2023.01.18
- [React로 TodoList 만들기](https://github.com/seoyeon-jung/react-todolist)를 typescript로 리팩토링한 프로젝트입니다
<br>
<br>

## 사용한 기술 스택  
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<br>
<br>

## 완성된 페이지
[오늘 뭐하지?🤔](https://type-script-todo-list-delta.vercel.app/)  << 바로가기!
<br>
<br>
<br>

## Features
1. todo 추가하기
	- 제목/내용 입력 후 [추가하기] 버튼 클릭하면 추가
	- todo 추가 후 제목/내용 input은 다시 빈 값으로 바뀌도록 구성
2. todo 삭제하기
	- 삭제 버튼 클릭하면 todo 삭제
3. todo 완료-진행중 상태변경하기
	- 완료-취소 버튼 toggle : isDone 상태가 true이면 label=취소 / false이면 label=완료
4. Working 이면 위쪽 / Done 이면 아래쪽에 위치
<br>
<br>

## Error Log
![image](https://user-images.githubusercontent.com/95006849/213172189-1704ab86-6f00-4600-a25f-2f27789c1638.png)
- 무분별한 interface 사용으로 인해 item의 type을 읽지 못하는 오류 발생
- 중복되는 type을 제거하고 item의 type을 제대로 지정해주니 해결 완료
- todo의 type은 Item[] 배열 형태로 지정해주었다

### Assignment 1
* 요구 사항: 이메일과 비밀번호 유효성 검사를 수행하고, 유효하지 않은 경우 버튼을 비활성화하라.
* 해설: 코드에서는 이메일 유효성 검사를 email.includes('@')로 하여 '@' 문자가 포함되어야 하며, 비밀번호의 유효성 검사는 password.length >= 8로 8자 이상이어야 함을 확인합니다.
<img width="789" alt="image" src="https://github.com/KoneJ/Frontend_settings/assets/86594108/1f4b5453-45b9-4d40-b212-a1590ca219b1">



### Assignment 2
* 요구 사항: 회원가입 페이지에서 회원가입 후 /signin 경로로 이동하라.
* 해설: 회원가입을 위한 handleSignUp 함수에서 정상 응답 시 (201 상태 코드) /signin 경로로 이동합니다.
<img width="403" alt="image" src="https://github.com/KoneJ/Frontend_settings/assets/86594108/0aeee1fc-25b3-42a0-9ec1-cd7a71ffe58e">


### Assignment 3
* 요구 사항: 로그인 페이지에서 로그인 후 /todo 경로로 이동하고 JWT를 로컬 스토리지에 저장하라.
* 해설: 로그인을 위한 handleSignIn 함수에서 정상 응답 시 (200 상태 코드) 로컬 스토리지에 JWT를 저장하고 /todo 경로로 이동합니다.
<img width="607" alt="image" src="https://github.com/KoneJ/Frontend_settings/assets/86594108/202c01a4-dd32-46d2-aa35-8507591f5724">


### Assignment 4
* 요구 사항: 로그인 여부에 따른 리다이렉트 처리를 하라.
* 해설: 로컬 스토리지에 토큰이 있는지 여부에 따라 리다이렉트를 처리합니다.
<img width="591" alt="image" src="https://github.com/KoneJ/Frontend_settings/assets/86594108/d4857739-a22d-408d-aed4-2b13e744e111">





# week11
## 3, 8, 10주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:gi-yeon/week11.git
    - (HTTPS 설장한 경우) git clone https://github.com/gi-yeon/week11.git
2. 원하는 주차 폴더로 이동
    1. > cd week3
    2. > cd week8
    3. > cd week10
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력 (주석 부분)

<pre>
<code>
const pool=mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인의 mysql user id
        database: 'tutorial', // 본인이 만든 데이터베이스 이름
        password: 'password', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
<br></br>
# <span style="color:green">week3 DB 내용</span>

studentID|name|department|grade|entranceDate|email
---|---|---|---|---|---|
12123456|강철수|정보통신공학과|4|2012-03-01|철수@gmail.com|
12211234|홍길동|정보통신공학과|4|2021-03-01|길동@gmail.com|
12184887|정기연|정보통신공학과|4|2018-03-01|giyeon3145@gmail.com|
12164040|고라니|정보통신공학과|4|2017-03-01|gorani@gmail.com|
<br></br>

# <span style="color:skyblue">week8 DB 내용</span>
## Department

Dname|Dnumber|Mgr_ssn|mgr_start_date
---|---|---|---|
졸업 프로젝트|0|121812345|2021-10-24|
데이터베이스설계|1|121912345|2021-10-24|
컴퓨터네트워크|2|122012345|2021-10-24|

## Employee
 Fname | Minit | Lname | Ssn       | Bdate      | Address | Sex  | Salary | Super_ssn | Dno
 ---|---|---|---|---|---|---|---|---|---|
 기연  | D     | 정    | 121812345 | 1997-12-04 | 평택    | 남   |    300 |           |   0 |
 철수  | F     | 김    | 121912345 | 1998-01-01 | 인천    | 남   |    111 | 121812345 |   1 |
 길동  | G     | 홍    | 122012345 | 1999-01-02 | 서울    | 남   |    111 | 121812345 |   2 |
 보통  | Q     | 정    | 122112345 | 2000-01-01 | 대전    | 남   |    111 | 121912345 |   1 |
 학과  | P     | 공    | 122154321 | 2000-01-22 | 대전    | 여   |    111 | 122012345 |   2 |
<br></br>

 # <span style="color:orange">week10 DB 내용</span>

## Department

Dname          | Dnumber |
---|---|
정보통신공학과|1|

## user
Id    | Password  | Role  |
---|---|---|
admin | admin1234 | admin |
test  | test1234  | users |

## school
id | name         | location |
---|---|---|
1 | 인하대학교   | 인천     |
4 | 서울대학교   | 서울     |
5 | 하버드대학교 | 하버드   |
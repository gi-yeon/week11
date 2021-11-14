import mysql from "mysql2";

//데이터베이스 연결
const pool=mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'wjdrldus12!@',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

//async / await 사용
const promisePool = pool.promise();

//select query export로 다른 스크립트에 있는 함수를 사용할 수 있다.
export const selectSql = {
    //data는 필요 없고 
    getEmployee : async()=>{
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async()=>{
        const [rows] = await promisePool.query(`select * from department`);
        
        return rows
    },
}

export const insertSql={
    //리턴은 필요 없지만 데이터를 데이터베이스에 넣어주어야하기 때문에 insert 구문을 수행하게 되는 부분이다.
    setEmployee : async(data)=>{
        //employee테이블에 데이터를 넣는 sql구문 data 구문을 사용해서 data. 형식을 사용하게 된다.
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}")`;

            //sql내용을 실행하는 쿼리문
            await promisePool.query(sql);
    },
    
    setDepartment : async(data)=>{
        //department테이블에 데이터를 넣는 sql구문
        const sql = `insert into department values (
            "${data.Dname}","${data.Dnumber}","${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
            //sql내용을 실행하는 쿼리문
            await promisePool.query(sql);
    },
}

//update query
export const updateSql = {
    //data 파라미터를 넣어서 이동할 수 있도록 만들어 주었다.
    updateEmployee : async(data)=>{
        //ssn의 값이 타이핑한 값과 일치하면 해당 행만 salary값을 고칠 수 있도록 만들어주었다.
        const sql = `update employee set salary = ${data.Salary} where Ssn=${data.Ssn}`;
        await promisePool.query(sql);
    },
    updateDepartment : async(data)=>{
        //where조건에 맞게 갱신하는 부분 dnumber가 0이면 받아온 data의 dname부분으로 바꾸는 부분
        const sql =`update department set dname = "${data.Dname}" where Dnumber =0`;
        await promisePool.query(sql);
    },
}

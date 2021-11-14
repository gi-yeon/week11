import mysql from "mysql2";

//데이터베이스 연결
const pool=mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
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
    //data는 필요 없고 데이터베이스에서 유저들을 불러온다.
    getUsers : async()=>{
        const [rows] = await promisePool.query(`select * from user`);

        return rows
    },
    //데이터베이스에서 부서들을 가져온다.
    getDepartment : async()=>{
        const [rows] = await promisePool.query(`select * from department`);
        
        return rows
    },
    //데이터베이스에서 학교들을 가져온다.
    getSchool : async()=>{
        const [rows] = await promisePool.query(`select * from school`);

        return rows
    },
}

//update query
export const deleteSql = {
    //data 파라미터를 넣어서 이동할 수 있도록 만들어 주었다.
    deleteDepartment : async(data)=>{
        //department 테이블의 속성인 Dnumber가 데이터의 Dnumber과 같을 경우 해당 레코드를 삭제하는 함수이다.
        console.log('deleteSql.deleteDepartment :', data.Dnumber)
        const sql = `delete from department where Dnumber = "${data.Dnumber}"`;
        await promisePool.query(sql);
    },
    
    deleteSchool : async(data)=>{
        //school 테이블의 속성인 id가 데이터의 id와 같을 경우 삭제한다.
        console.log('deleteSql.deleteSchool :', data.id)
        const sql = `delete from school where id = ${data.id}`;
        await promisePool.query(sql);
    },
}

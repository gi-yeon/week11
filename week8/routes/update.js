import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

//기존의 입력 값 불러오기
router.get('/employee', async(req,res)=>{
    const emp_res = await selectSql.getEmployee();
    //updateEmployee.hbs와 연동되어 실행되는 부분 emp_res데이터를 넘겨준다.
    res.render('updateEmployee',{
        title: "직원 테이블 갱신",
        emp_res
    });
});

//기존의 입력 값 불러오기
router.get('/department',async(req,res)=>{
    const dept_res = await selectSql.getDepartment();
    //updateDepartment.hbs와 연동되어 실행되는 부분 dep_res데이터를 넘겨준다.
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    })
});

//수정버튼 눌렀을 경우 update query를 싱행하며 조회 페이지로 이동
router.post("/employee", async(req,res)=>{
    const vars = req.body;
    
    //ssn, salary 데이터를 updateEmployee함수를 실행하기 위해 사용한다.
    const data = {
        Salary: vars.salary,
        Ssn: vars.ssn
    }
    //updateEmployee함수 실행
    await updateSql.updateEmployee(data);
    //http://3434/select화면으로 이동
    res.redirect('/select');
});

//수정버튼 눌렀을 경우 update query를 싱행하며 조회 페이지로 이동
router.post('/department', async(req,res)=>{
    //데이터 내용 받아오는 부분
    const vars = req.body;
    console.log(vars.dname);

    //data를 받아 고치는 부분
    const data={
        Dname: vars.dname
    }
    //updateDepartment함수 실행
    await updateSql.updateDepartment(data);
    //http://3434/select화면으로 이동
    res.redirect('/select');
});

module.exports=router;
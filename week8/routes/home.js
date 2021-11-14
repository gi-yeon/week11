//view의 home.hbs파일과 연동

import express from "express";
//insertSql 모듈을 from 뒤에 있는 주소에서 가져온다. insertSql만 사용한다.
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

//home.hbs와 연동시켜 화면에 보여주는 역할
router.get('/',(req,res)=>{
    console.log("Home")
    res.render('home');
});

//웹에서 입력한 값들을 처리하는 부분 home.hbs에서 post로 보내기 때문에 req로 data를 받을 수 있다.
router.post('/',(req,res)=>{
    const vars =req.body; //req의 내용들을 vars가 받는다.
    const var_lenth = Object.keys(req.body).length; //길이 설정 후에 department는 속성이 4개, employee는 그보다 많으니 길이로 department, employee 판단 가능
    //속성이 4개보다 많으니 employee
    if(var_lenth>4){
        //datat 객체에 받아온 내용들 설정
        const data={
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        //insertSql모듈에서 setEmployee 함수를 이용해 data넘겨줌
        insertSql.setEmployee(data);
    }else{
        //속성 값이 4개이므로 department data에 객체에 받아온 내용들 설정
        const data={
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        //마찬가지로 insertSql모듈에서 setDepartment 함수를 이용해 data넘겨줌
        insertSql.setDepartment(data);
    }
    //insertSql 실행 후 다시 홈 화면으로 돌아가는 명령이다.
    res.redirect('/');
})

module.exports=router;
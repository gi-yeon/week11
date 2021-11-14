import express from"express";
import { selectSql } from "../database/sql";

const router = express.Router();

// '/'는 /select를 의미한다. 
router.get('/',async function(req,res) {
    //employee, department에 저장하는 역할을 한다.
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();
    
    //select.hbs와 연동되는 부분이고, 테이블 형태로 사용되게 된다.
    res.render('select',{
        title:'직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports=router;
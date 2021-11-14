import express from"express";
import { selectSql } from "../database/sql";

const router = express.Router();
 
router.get('/',async function(req,res) {
    //getDepartment쿼리를 이용해 department변수에 레코드들을 저장한다.
    const department = await selectSql.getDepartment();
    
    //select.hbs와 연동되는 부분이고, 테이블 형태로 사용되게 된다.
    res.render('select',{
        title:'IT 공대',
        department
    });
});

module.exports=router;
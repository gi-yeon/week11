import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

//기존의 입력 값 불러오기
router.get('/', async(req,res)=>{
    //getDepartment쿼리를 실행한다.
    const department = await selectSql.getDepartment();
    const school = await selectSql.getSchool();
    //delete.hbs와 연동되어 title, deoartment의 Dnumber, Dname데이터와 school의 id, name, location 데이터를 넘겨준다.
    res.render('delete',{
        title: "삭제 기능",
        department,
        school,
    });
});

//웹에서 입력한 값들을 처리하는 부분 delete.hbs에서 post로 보내기 때문에 req로 data를 받을 수 있다.
router.post('/',async(req,res)=>{
    console.log('delete router department table: ',req.body.delBtn1)
    console.log('delete router school table: ',req.body.delBtn2)
    //delBtn1의 값은 Dnumber이므로 Dnumber가 아닐 경우 undefined상태가 되고 이는 delBtn2를 선택한 것과 같은 의미이다. delBtn2는 id속성 데이터를 건네준다.
    if(req.body.delBtn1===undefined){
        console.log('delete school table')
        const data2 ={
            id : req.body.delBtn2,
        };
        await deleteSql.deleteSchool(data2);
    }
    else{
        console.log('delete department table')
        const data1 = {
            Dnumber: req.body.delBtn1,
        };
        await deleteSql.deleteDepartment(data1);
    }
    //deleteDepartment쿼리를 수행한다.
    res.redirect('/delete');
});

module.exports=router;
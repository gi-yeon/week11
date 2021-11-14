//view의 home.hbs파일과 연동

import express from "express";
//selectSql 모듈을 from 뒤에 있는 주소에서 가져온다. selectSql만 사용한다.
import { selectSql } from "../database/sql";

const router = express.Router();

//login.hbs와 연동시켜 화면에 보여주는 역할
router.get('/',(req,res)=>{
    res.render('login');
});

//웹에서 입력한 값들을 처리하는 부분 login.hbs에서 post로 보내기 때문에 req로 data를 받을 수 있다.
router.post('/', async(req,res)=>{
    const vars =req.body; //req의 내용들을 vars가 받는다.
    const users = await selectSql.getUsers();//getUsers쿼리를 실행해 users라는 변수에 유저 레코드들을 저장한다.
    let whoAmI = '';//현재 사용자가 누구인지 알려주는 변수이다.
    let checkLogin = false;//로그인을 했는지 안했는지 판별해주는 변수이다ㅣ.
    
    //map명령어를 이용해 쉽게 여러 데이터들을 한 번에 분류 및 확인할 수 있다.
    users.map((user)=> {
        console.log(user.Id);
        //입력받은 데이터의 id가 user.id와 동일하고, password까지 같다면 checkLogin을 true로 바꾼다.
        if(vars.id === user.Id && vars.password === user.Password){
            console.log('login success!');
            checkLogin = true;
            //만약 id가 관리자 계정이면 whoAmI는 admin, 아닐 경우 user로 받는다.
            if(vars.id === 'admin'){
                whoAmI = 'admin';
            }else{
                whoAmI = 'user';
            }
        }
    })

    console.log(whoAmI);
    //관리자 계정이면 /delete페이지로 이동하고, 일반 유저일 경우 select페이지로 이동한다. 둘 다 아닐 경우 팝업창으로 "로그인에 실패했습니다." 메세지를 띄운다.
    if(checkLogin && whoAmI==='admin'){
        res.redirect('/delete');
    }else if(checkLogin && whoAmI === 'user'){
        res.redirect('/select');
    }else{
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})

module.exports=router;
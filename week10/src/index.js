//node modules에서 모듈 가져오기
import express from "express";
import logger from "morgan";
import path from "path";

//login, delete, select 제이슨 파일에 설정한 모듈 가져오기
import loginRouter from "../routes/login";
import deleteRouter from "../routes/delete";
import selectRouter from "../routes/select";

//포트번호 설정
const PORT = 5000;

//express기능 사용하기 위해 app모듈 설정
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine','hbs')
app.use(logger("dev"));

app.use('/',loginRouter);
app.use('/delete',deleteRouter);
app.use('/select',selectRouter);


app.listen(PORT,()=>{
    console.log(`Example app listening at http://localhost:${PORT}`)
})
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3030

app.use(cors())

// app.set("port", process.env.PORT || 3030); // 포트 설정
// app.set("host", process.env.HOST || "0.0.0.0"); // 아이피 설정

// 루트 접속시 아이피 출력
app.get('/', (req, res) => {
  res.send('환영합니다')
})

app.get('/result/:name', (req, res) => {
    const { name } = req.params

    if(name == "3D") {
        res.json({'result' : '형상물','img':'https://prrp.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2023/08/31134454/PRRP_V3_MEGA3DP-FI_01.jpg'})
    } else if(name == "2D") {
        res.json({'result': '도면'})
    } else {
        res.json({'result' : '알수없음'})
    }

  });
  
 
// app.get('/user/:id', function (req, res) {
//     const q = req.params
//     console.log(p);
//     const b = req.body;
//     console.log(b);

//     res.json({'message': '안녕'});
//   });

// 서버 동작중인 표시

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
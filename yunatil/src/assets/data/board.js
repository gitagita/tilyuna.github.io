export default [{
    type: "tip",
    key:"고도몰",
    title: "SESSION",
    code: "$memNo = \\Session::get('member.memNo');",
    content: "로그인한 회원 정보는 SESSION에 있다. 로그인한 회원 정보를 사용할 때는 sesion에서 가져다 쓰자.",
    regDt: "2022.04.05"
},
{
    type: "tip",
    key:"고도몰",
    title: "로그로 데이터 찍어보기",
    code: "<pre>$dbkLog = \\App::load('\\Component\\Dbk\\DbkLog');\n$logData = [];;\n$logData['arrData'] = $arrData;;\n//DbkLog 테이블에 내용이 insert된다.;\n$dbkLog->setInsertLog('setInsertLike',$logData);;\nunset($dbkLog, $logData);</pre>",
    content: "DbkLog Component  파일의 setInsertLog함수에서 log값을 db에 저장한다.",
    regDt: "2022.04.05"
}];

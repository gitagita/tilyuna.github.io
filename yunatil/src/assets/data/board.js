export default [{
    id : 0,
    type: "work",
    title: "20220329",
    code: "controller",
    content: "사조씨푸드에서 작업했던 내용을 기반으로 레이델 작업을 진행했다."
},
{
    id : 1,
    type: "tip",
    title: "DB에 로그찍는 방법",
    code: "<code>$logData = []; \n $logData['CHECK'] = '1'; \n $dbkLog = \\App::load('\\Component\\Dbk\\DbkLog'); \n $dbkLog->setInsertLog('DbkEventWidget-kind = '.$kind, $logData</code>",
    content: "$logData 변수에 확인하고 싶은 데이터 값을 삽입한다."
}];

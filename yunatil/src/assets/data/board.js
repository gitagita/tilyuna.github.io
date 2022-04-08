export default [{
    type: "tip",
    key:"고도몰",
    title: "SESSION",
    code: "$memNo = \\Session::get('member.memNo');",
    content: "로그인한 회원 정보는 SESSION에 있다. 로그인한 회원 정보를 사용할 때는 session에서 가져다 쓰자.",
    regDt: "2022.04.05"
},
{
    type: "tip",
    key:"고도몰",
    title: "로그로 데이터 확인",
    code: "<pre>$dbkLog = \\App::load('\\Component\\Dbk\\DbkLog');\n$logData = [];;\n$logData['arrData'] = $arrData;;\n//DbkLog 테이블에 내용이 insert된다.;\n$dbkLog->setInsertLog('setInsertLike',$logData);;\nunset($dbkLog, $logData);</pre>",
    content: "DbkLog Component  파일의 setInsertLog함수에서 log값을 db에 저장한다.",
    regDt: "2022.04.05"
},
{
    type: "tip",
    key:"고도몰",
    title: "trigger()",
    code: "<pre>$('#testspan').trigger('click');\n$('.order-buy').trigger('click');</pre>",
    content: "이벤트 실행 없이 무조건 실행되게 함.(이벤트 핸들러 없이도 실행되게)",
    regDt: "2022.04.06"
},
{
    type: "tip",
    key:"고도몰",
    title: "get: url로 넘긴 데이터 가져오기",
    code: "<pre>$bdId = Request::get()->get('bdId'); \n if($bdId === 'recipe') {...}</pre>",
    content: "해당 url에서만 동작하도록 함. 다른 페이지에서 이 컨트롤러를 자주 사용하게 될 경우 if문은 사용해 bdId 별로 구분해서 동작하게 할 수 있음",
    regDt: "2022.04.06"
},
{
    type: "tip",
    key:"고도몰",
    title: "고도몰 공통 코드",
    code: "<pre>gd_select_box('areaNm', 'areaNm', gd_array_change_key_value(gd_code('90001')), \n null, $dbkMainFilter['areaNm'], '선택해주세요');</pre>",
    content: "텍스트로 selectbox 만들기, 코드 관리는 es_code애서 관리함",
    regDt: "2022.04.07"
},
{
    type: "work",
    key:"고도몰",
    title: "타임세일",
    code: "<pre>'SELECT sno FROM es_timeSale WHERE delFl = 'n' AND dbkMainFl = 'y' \nAND startDt <= now() AND endDt >= now() ORDER BY sno DESC LIMIT 0,1'</pre>",
    content: "타임세일 기획전 중, 메인으로 지정된 것이면서 진행 중이고, 그 중 가장 최신인 게시글을 결과로 도출한다. sql로 조건을 걸어 해결 가능했다.",
    regDt: "2022.04.08"
},
{
    type: "error",
    key:"고도몰",
    title: "선물하기",
    code: "<pre></pre>",
    content: "order.html파일의 내용과 같은데 order_gift.html파일에서는 배송지 목록 추가 기능이 동작하지 않는 오류가 있었다. body태그 바로 안쪽에 있는 태그들 중 id='popupShipping'인 태그가 order_gift에서 실행할 때 포함되지 않고 있는 것을 발견했다. outline/header/_header.html 파일에서 body태그를 발견했고 order조건만 있는 것을 발견하고 order_gift일 때의 조건도 주가했다.",
    regDt: "2022.04.08"
}];

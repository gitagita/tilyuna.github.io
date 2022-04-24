export default [{
    type: "tip",
    key:"고도몰",
    title: "SESSION",
    code: "<pre>$memNo = \\Session::get('member.memNo');</pre>",
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
    content: "order.html파일의 내용과 같은데 order_gift.html파일에서는 배송지 목록 추가 기능이 동작하지 않는 오류가 있었다. body태그 바로 안쪽에 있는 태그들 중 id='popupShipping'인 태그가 order_gift에서 실행할 때 포함되지 않고 있는 것을 발견했다. outline/header/_header.html 파일에서 body태그를 발견했고 order조건만 있는 것을 발견하고 order_gift일 때의 조건도 추가했다.",
    regDt: "2022.04.08"
},
{
    type: "error",
    key:"고도몰",
    title: "전화번호 검색 필터",
    code: "<pre>if ($this->search['key'] && $this->search['keyword']) {\n	if($this->search['key'] == 'areaNm' || $this->search['key'] == 'shopNm') {\n		$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n		$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n	}\n    }\nif ($this->search['key'] == 'contact'){\n	$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n	$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n}\n</pre>",
    content: "이슈: 전화번호로 0을 검색했을 때 모든 연락처 리스트가 나오는 결과가 있었다. $this->search['keyword']의 값이 0인 경우 해당 if문 안에 들어가지 않았다. 0을 false로 인식했기 때문이다. 그래서 contact부분만 if문 밖으로 따로 빼주었다.",
    regDt: "2022.04.13"
},
{
    type: "tip",
    key:"고도몰",
    title: "Controller에서 페이지 redirect",
    code: "<pre>$this->redirect('/goods/goods_view.php?goodsNo=' . Request::get()->get('goodsNo'));</pre>",
    content: "",
    regDt: "2022.04.14"
},
{
    type: "tip",
    key:"고도몰",
    title: "CommonController",
    code: "<pre>if ($this->search['key'] && $this->search['keyword']) {\n	if($this->search['key'] == 'areaNm' || $this->search['key'] == 'shopNm') {\n		$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n		$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n	}\n    }\nif ($this->search['key'] == 'contact'){\n	$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n	$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n}\n</pre>",
    content: "전제 페이지에서 사용할 수 있는 Controller\nstand.html은 컨트롤러가 없음 그래서 CommonController를 사용해서 데이터를 가져와서 써야함",
    regDt: "2022.04.14"
},
{
    type: "dev",
    key:"파이썬",
    title: "MemoCode 코딩 메뉴 추가",
    code: "<pre>#한줄씩 문장을 읽어들여 '\\n'문자로 연결하기\ndef delEnter():\n    texts = str(text.get(1.0, END))\n    tList = texts.split('\\n')\n    vText = ''\n    for t in tList:\n        if t == '':\n            break;\n        vText += t+'\\\\n'\n    text.delete(1.0, END)\n    text.insert(INSERT, vText)\n    \n#'\\'를 '\\\\'로 변환\ndef delWord():\n    texts = str(text.get(1.0, END))\n    texts = texts.replace('\\\\','\\\\\\\\')\n    text.delete(1.0, END)\n    text.insert(INSERT, texts)\n</pre>",
    content: "pre 태그 사이에 줄바꿈이 있는 긴 코드를 넣어야할 때 일일이 엔터를 '\\n'문자로 수정하고 '\\'문자를 '\\\\'로 수정하는 것은 번거롭고 비효율적이었다. 그래서 이전에 과제로 만들었던 파이썬 메모장에 다음의 기능을 추가해 해결했다. <br/> 1. 엔터키를 '\\n'문자로 변환<br/>2.'\\'문자를'\\\\'문자로 변환 <br/> 프로그래밍 언어를 아니까 필요할 때 프로그램을 직접 만들어서 사용할 수 있다는 게 좋은 것 같다.",
    regDt: "2022.04.16"
},
{
    type: "error",
    key:"고도몰",
    title: "고도몰 고유 기능 휴대폰 인증 오류 해결",
    code:"<pre>window.open(protocol + '//hpauthdream.godo.co.kr/module/Mobile_hpauthDream_Main.php?callType=joinmembermobile&shopUrl=' + callbackUrl + '&cpid={=authDataCpCode}&i=1', 'uth_popup', 'top=30, left=50, status=0, width=425, height=650');\n</pre>",
    content: "결론: &i=1를 경로에 넣어주어야 동작했음",
    regDt: "2022.04.18"
},
{
    type: "error",
    key:"고도몰",
    title: "회원가입 버튼 클릭 시 submit 되지 않는 오류",
    code: "",
    content: "고도몰 [회원 > 회원 관리 > 회원 가입 항목 관리] 에서 페이지에 없는 항목이 사용으로 체크되어 있지 않는지 확인 ",
    regDt: "2022.04.18"
},
{
    type: "tip",
    key:"php",
    title: "explode함수",
    code: "<pre>$snoData = explode('|', $tmpSno);</pre>",
    content: "foreach로 join함수 돌리지 말고 explode함수로 해결하자",
    regDt: "2022.04.24"
},
{
    type: "tip",
    key:"git",
    title: "git ssh로 clone하기",
    code: "",
    content: "1. git 설치하기\n\n2. 사용자 이름 및 이메일 설정하기레파지토리에 커밋하고 푸시하기 위해 필요함) \n\ngit config --global user.name '사용자 이름'\ngit config --global user.email '사용자 이메일'\n\n3. ssh-keygen 사용하기\nssh-keygen -t rsa\n\nC:\\Users\\[사용자계정]\\.ssh 폴더에 id_dsa.pub 파일의 내용(공개키)을 복사해 git레파지토리 ssh공개키로 설정한다.\n(필요에 따라 해당 폴더에 config파일을 삽입한다.)\n\n4. 레파지토리의 ssh 주소 복사 후 \ngit clone [복사한 ssh주소]",
    regDt: "2022.04.24"
}];

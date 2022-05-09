export default [{
    id: 1,
    type: "tip",
    key:"고도몰",
    title: "SESSION",
    code: "<pre>$memNo = \\Session::get('member.memNo');</pre>",
    content: "로그인한 회원 정보는 SESSION에 있다. 로그인한 회원 정보를 사용할 때는 session에서 가져다 쓰자.",
    regDt: "2022.04.05"
},
{
    id: 2,
    type: "tip",
    key:"고도몰",
    title: "로그로 데이터 확인",
    code: "<pre>$dbkLog = \\App::load('\\Component\\Dbk\\DbkLog');\n$logData = [];;\n$logData['arrData'] = $arrData;;\n//DbkLog 테이블에 내용이 insert된다.;\n$dbkLog->setInsertLog('setInsertLike',$logData);;\nunset($dbkLog, $logData);</pre>",
    content: "DbkLog Component  파일의 setInsertLog함수에서 log값을 db에 저장한다.",
    regDt: "2022.04.05"
},
{
    id: 3,
    type: "tip",
    key:"고도몰",
    title: "trigger()",
    code: "<pre>$('#testspan').trigger('click');\n$('.order-buy').trigger('click');</pre>",
    content: "이벤트 실행 없이 무조건 실행되게 함.(이벤트 핸들러 없이도 실행되게)",
    regDt: "2022.04.06"
},
{
    id: 4,
    type: "tip",
    key:"고도몰",
    title: "get: url로 넘긴 데이터 가져오기",
    code: "<pre>$bdId = Request::get()->get('bdId'); \n if($bdId === 'recipe') {...}</pre>",
    content: "해당 url에서만 동작하도록 함. 다른 페이지에서 이 컨트롤러를 자주 사용하게 될 경우 if문은 사용해 bdId 별로 구분해서 동작하게 할 수 있음",
    regDt: "2022.04.06"
},
{
    id: 5,
    type: "tip",
    key:"고도몰",
    title: "고도몰 공통 코드",
    code: "<pre>gd_select_box('areaNm', 'areaNm', gd_array_change_key_value(gd_code('90001')), \n null, $dbkMainFilter['areaNm'], '선택해주세요');</pre>",
    content: "텍스트로 selectbox 만들기, 코드 관리는 es_code애서 관리함",
    regDt: "2022.04.07"
},
{
    id: 6,
    type: "work",
    key:"고도몰",
    title: "타임세일",
    code: "<pre>'SELECT sno FROM es_timeSale WHERE delFl = 'n' AND dbkMainFl = 'y' \nAND startDt <= now() AND endDt >= now() ORDER BY sno DESC LIMIT 0,1'</pre>",
    content: "타임세일 기획전 중, 메인으로 지정된 것이면서 진행 중이고, 그 중 가장 최신인 게시글을 결과로 도출한다. sql로 조건을 걸어 해결 가능했다.",
    regDt: "2022.04.08"
},
{
    id: 7,
    type: "error",
    key:"고도몰",
    title: "선물하기",
    code: "<pre></pre>",
    content: "order.html파일의 내용과 같은데 order_gift.html파일에서는 배송지 목록 추가 기능이 동작하지 않는 오류가 있었다. body태그 바로 안쪽에 있는 태그들 중 id='popupShipping'인 태그가 order_gift에서 실행할 때 포함되지 않고 있는 것을 발견했다. outline/header/_header.html 파일에서 body태그를 발견했고 order조건만 있는 것을 발견하고 order_gift일 때의 조건도 추가했다.",
    regDt: "2022.04.08"
},
{
    id: 8,
    type: "error",
    key:"고도몰",
    title: "전화번호 검색 필터",
    code: "<pre>if ($this->search['key'] && $this->search['keyword']) {\n	if($this->search['key'] == 'areaNm' || $this->search['key'] == 'shopNm') {\n		$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n		$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n	}\n    }\nif ($this->search['key'] == 'contact'){\n	$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n	$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n}\n</pre>",
    content: "이슈: 전화번호로 0을 검색했을 때 모든 연락처 리스트가 나오는 결과가 있었다. $this->search['keyword']의 값이 0인 경우 해당 if문 안에 들어가지 않았다. 0을 false로 인식했기 때문이다. 그래서 contact부분만 if문 밖으로 따로 빼주었다.",
    regDt: "2022.04.13"
},
{
    id: 9,
    type: "tip",
    key:"고도몰",
    title: "Controller에서 페이지 redirect",
    code: "<pre>$this->redirect('/goods/goods_view.php?goodsNo=' . Request::get()->get('goodsNo'));</pre>",
    content: "",
    regDt: "2022.04.14"
},
{
    id: 10,
    type: "tip",
    key:"고도몰",
    title: "CommonController",
    code: "<pre>if ($this->search['key'] && $this->search['keyword']) {\n	if($this->search['key'] == 'areaNm' || $this->search['key'] == 'shopNm') {\n		$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n		$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n	}\n    }\nif ($this->search['key'] == 'contact'){\n	$this->arrWhere[] = 'c.' . $this->search['key'] . ' LIKE concat(\\'%\\',?,\\'%\\') ';\n	$this->db->bind_param_push($this->arrBind, 's', $this->search['keyword']);\n}\n</pre>",
    content: "전제 페이지에서 사용할 수 있는 Controller\nstand.html은 컨트롤러가 없음 그래서 CommonController를 사용해서 데이터를 가져와서 써야함",
    regDt: "2022.04.14"
},
{
    id: 11,
    type: "dev",
    key:"파이썬",
    title: "MemoCode 코딩 메뉴 추가",
    code: "<pre>#한줄씩 문장을 읽어들여 '\\n'문자로 연결하기\ndef delEnter():\n    texts = str(text.get(1.0, END))\n    tList = texts.split('\\n')\n    vText = ''\n    for t in tList:\n        if t == '':\n            break;\n        vText += t+'\\\\n'\n    text.delete(1.0, END)\n    text.insert(INSERT, vText)\n    \n#'\\'를 '\\\\'로 변환\ndef delWord():\n    texts = str(text.get(1.0, END))\n    texts = texts.replace('\\\\','\\\\\\\\')\n    text.delete(1.0, END)\n    text.insert(INSERT, texts)\n</pre>",
    content: "pre 태그 사이에 줄바꿈이 있는 긴 코드를 넣어야할 때 일일이 엔터를 '\\n'문자로 수정하고 '\\'문자를 '\\\\'로 수정하는 것은 번거롭고 비효율적이었다. 그래서 이전에 과제로 만들었던 파이썬 메모장에 다음의 기능을 추가해 해결했다. <br/> 1. 엔터키를 '\\n'문자로 변환<br/>2.'\\'문자를'\\\\'문자로 변환 <br/> 프로그래밍 언어를 아니까 필요할 때 프로그램을 직접 만들어서 사용할 수 있다는 게 좋은 것 같다.",
    regDt: "2022.04.16"
},
{
    id: 12,
    type: "error",
    key:"고도몰",
    title: "고도몰 고유 기능 휴대폰 인증 오류 해결",
    code:"<pre>window.open(protocol + '//hpauthdream.godo.co.kr/module/Mobile_hpauthDream_Main.php?callType=joinmembermobile&shopUrl=' + callbackUrl + '&cpid={=authDataCpCode}&i=1', 'uth_popup', 'top=30, left=50, status=0, width=425, height=650');\n</pre>",
    content: "결론: &i=1를 경로에 넣어주어야 동작했음",
    regDt: "2022.04.18"
},
{
    id: 13,
    type: "error",
    key:"고도몰",
    title: "회원가입 버튼 클릭 시 submit 되지 않는 오류",
    code: "<pre></pre>",
    content: "고도몰 [회원 > 회원 관리 > 회원 가입 항목 관리] 에서 페이지에 없는 항목이 사용으로 체크되어 있지 않는지 확인 ",
    regDt: "2022.04.18"
},
{
    id: 14,
    type: "tip",
    key:"php",
    title: "explode함수",
    code: "<pre>$snoData = explode('|', $tmpSno);</pre>",
    content: "foreach로 join함수 돌리지 말고 explode함수로 해결하자",
    regDt: "2022.04.24"
},
{
    id: 15,
    type: "tip",
    key:"git",
    title: "git ssh로 clone하기",
    code: "<pre></pre>",
    content: "1. git 설치하기<br/><br/>2. 사용자 이름 및 이메일 설정하기레파지토리에 커밋하고 푸시하기 위해 필요함) <br/><br/>git config --global user.name '사용자 이름'<br/>git config --global user.email '사용자 이메일'<br/><br/>3. ssh-keygen 사용하기<br/>ssh-keygen -t rsa<br/><br/>C:\\Users\\[사용자계정]\\.ssh 폴더에 id_dsa.pub 파일의 내용(공개키)을 복사해 git레파지토리 ssh공개키로 설정한다.<br/>(필요에 따라 해당 폴더에 config파일을 삽입한다.)<br/><br/>4. 레파지토리의 ssh 주소 복사 후 <br/>git clone [복사한 ssh주소]",
    regDt: "2022.04.24"
},
{
    id: 16,
    type: "tip",
    key:"네이버지도APi",
    title: "마커 지우기",
    code: "<pre>var dbkMarker = {=json_encode(markerData)};\nvar dbkAreaNmList = {=json_encode(areaNmList)};\nvar dbkThisFl = '{dbkThisFl}';\nvar postionY = 37.534286;\nvar postionX = 127.0396037;\nvar dbkPointMaker = [];\n//마커 제거\nif(dbkPointMaker){\n	dbkPointMaker.setMap(null);\n}\nfunction showPosition(position) {\n	if(dbkThisFl == 'y') {\n		postionY = position.coords.latitude;\n		postionX = position.coords.longitude;\n	}\n	var oPoint3 = new naver.maps.LatLng(postionY, postionX);\n	map.setCenter(oPoint3);\n	let marker = new naver.maps.Marker({\n		position: oPoint3,\n		map: map\n	});\n	dbkPointMaker[0] = marker;\n	<!--{ ? gd_isset(markerData) }-->\n		<!--{ @ markerData }-->\n			getLatLon('{=.address} {=.addressSub} ',' {=.shopNm} ','{=.sno}','{=.contact}');\n		<!--{ / }-->\n	<!--{ / }-->\n	setTimeout(function(){\n		dbkMarker.sort(function(a,b){\n			return a.sort - b.sort;\n		});\n		// console.log(typeof(dbkMarker));\n		dbkCreateLi();\n		\n	}, 800);\n}</pre>",
    content: "dbkPointMaker.setMap(null); 이 마커 하나를 지우는 함수이다.",
    regDt: "2022.04.26"
},
{
    id: 17,
    type: "tip",
    key:"네이버지도APi",
    title: "마커 위에 숫자 표시하기",
    code: "<pre>const tmpIndex = parseInt(index)+1;\nvar marker = new naver.maps.Marker({\n	position: oPoint2,\n	map: map,\n	title:tit,\n	zIndex:MarkerCnt,\n	icon: {\n		content: '<#div><#img src='../img/map/pin_default.png' alt='' ' +\n				 'style='margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none;' +\n				 '-webkit-user-select: none; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;'>' +\n				 '<#span class='shd' style='z-index:10; color: #ff8888; text-align: center; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;'>'+tmpIndex+'<#span></#div>'\n		}\n});</pre>",
    content: "네이버 지도 api에 숫자가 표시된 마커를 제공하고 있었다. 그런데 숫자가 8까지 밖에 제공하고 있지 않았다. 마커 이미지와 숫자가 분리되지 않고 숫자 마커 자체가 이미지로 되어 있었다.<br/>개발 사항에서는 지도에 표시할 마커가 50개 이상이 되었기 때문에 해당 마커 기능을 사용할 수 없었다. 그래서 이미지 위해 숫자를 표시하도록 태그를 삽입하고 style을 지정해 해결했다.<br/><br/>태그 인식 방지문자로 태그 앞에 #을 추가함",
    regDt: "2022.04.26"
},
{
    id: 18,
    type: "error",
    key:"api",
    title: "api: delete, geta메서드는 body에 data를 실어 보내기 불가능",
    code: "<pre>async delBoardView ({state, dispatch, commit, rootGetters}, inquiry) {\n    console.log('inquiry', inquiry)\n    const defaultsData = ncpApi.defaults.data\n    ncpApi.defaults.data = {password: inquiry.password}\n    // await dispatch('_delBoardDetail', { params: {boardNo: inquiry.boardNo, articleNo: inquiry.articleNo}, inquiry })\n    await dispatch('_delBoardDetail', { params: inquiry })\n    ncpApi.defaults.data = defaultsData\n}\n</pre>",
    content: "api에서 delete와 get메서드는 body에 data를 실어 보낼 수 없다. swagger에서 제공하는 api중 비회원이 게시판 글을 삭제하는 경우 비밀번호를 body로 넘겨주도록 구현되어 있었다. 비밀번호이기 때문에 body에 데이터를 실어 보내는 것은 이해하지만 post가 아닌 delete로 구현한 이유는 모르겠다.<br/>그래서 ncpApi 전역 변수에 강제로 data를 추가해 해결했다.",
    regDt: "2022.05.03"
},
{
    id: 19,
    type: "error",
    key:"vue",
    title: "에러 코드에 따른 조건",
    code: "<pre>this.$store.dispatch('board/editableBoardView', inquiry).then(() => {\n    this.user.password = ''\n    this.$emit('isCorrect', true)\n    this.close('close')\n}).catch((err) => {\n    const code = err.data.code\n    if (code === 'M0306') {\n    this.setDisplayPwd(false)\n    this.key = err.data.key\n    }\n})\n</pre>",
    content: "비밀번호 10회 오류 시 캡챠 이미지를 띄워 인증코드를 입력하도록 하는 부분을 구현했다. f12키에서 네트워크 부분에 에러의 CODE를 확인할 수 있는데 이 에러를 err.data.code로 가져올 수 있다. ",
    regDt: "2022.05.03"
},
{
    id: 20,
    type: "dev",
    key:"vue",
    title: "게시글 작성하기: 이미지",
    code: "<pre>const inquiry = {\n        boardNo: this.boardNo,\n        articleTitle: this.articleTitle,\n        articleContent: this.articleContent,\n        password: this.password,\n        secreted: this.secreted,\n        boardCategoryNo: this.boardCategoryNo,\n        imageUrls: [],\n        images: this.images,\n        guestName: this.guestName,\n        tags: []\n      }\n      if (this.running) {\n        return\n      } else {\n        this.running = true\n      }\n      const dispatch = this.$store.dispatch\n      Promise.all(inquiry.images.map((image) => {\n        const data = new FormData()\n        data.append('file', image.file)\n        return dispatch('common/uploadImages', data)\n      })).then(ret => {\n        const urls = ret.map(res => 'http:' + res.data.imageUrl)\n        inquiry.imageUrls = urls\n        const img = ret.map(res => res.data.originName)\n        for (var i = 0; i < img.length; i++) {\n          inquiry.images[i] = {'originalFileName': img[i], 'uploadedFileName': urls[i]}\n        }\n        this.$store.dispatch('board/setBoardView', inquiry).then(() => {\n          alert('게시글이 작성되었습니다.')\n          this.running = false\n          this.close('')\n        }).catch((e) => {\n          this.running = false\n        })\n      })\n</pre>",
    content: "게시글 작성하는 API를 사용해서 params로 inquery 값을 대입했다. 이미지의 경우 데이터 형식을 맞춰주어야했는데, 이때 map을 이용해 이미지 데이터들을 하나씩 가져와 가공했다.",
    regDt: "2022.05.09"
},
{
    id: 21,
    type: "tip",
    key:"vue",
    title: "...mapState와 ...mapGetters",
    code: "<pre>// js 파일\nmutations: {\n  BOARD_VIEW (state, view) {\n     state.view = view\n  }\n},\ngetters: {\n  getCaptchaUrl (state) {\n    return state.captchaImg\n  }\n}\n\n// vue파일\ncomputed: {\n   ...mapState('board', ['categories']),\n   ...mapGetters('authentication', ['isAvailableMember'])\n}\n</pre>",
    content:  "...mapState('경로', ['변수명', '변수명', ...])<br/>...mapGetters('경로', ['getter함수명'])<br/>",
    regDt: "2022.05.09"
}];
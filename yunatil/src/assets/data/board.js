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
},
{
    id: 22,
    type: "tip",
    key:"고도몰",
    title: "file데이터 ps로 전송하는 방법",
    code: "<pre><form id='frm' action='../member/member_ps.php' method='post' enctype='multipart/form-data'>\n//file 타입의 데이터를 ps로 전송하기 위해서는 form 태그에 enctype='multipart/form-data' 추가해야함\n\n<input type='file' name='busiReg' id='busiReg'/></pre>",
    content:  "회원가입 시 사업자등록증을 첨부하는 부분을 구현했다.",
    regDt: "2022.05.12"
},
{
    id: 23,
    type: "tip",
    key:"고도몰",
    title: "preg_match(): 배송 불가 지역",
    code: "<pre>//Controller\n$notDelivery = $dbkOrder->getDeliveryAreaLimit();\nif($notDelivery){\n	foreach($notDelivery as $key => $value){\n		if(preg_match('/{$value['addArea']}/u', $deliveryArea)){\n			$this->json('y');\n		}\n	}\n}\n$this->json('n');\n\n\n//Component\npublic function getDeliveryAreaLimit(){\n		$this->arrWhere[] = ' sd.basicKey = 1';\n		$this->db->strField = ' sd.addArea ';\n		$this->db->strWhere = implode(' AND ', gd_isset($this->arrWhere));\n\n		$query = $this->db->query_complete();\n		$strSQL = 'SELECT ' . array_shift($query) . ' FROM ' .DB_SCM_DELIVERY_AREA. ' as sd ' . implode(' ', $query);\n		$data = $this->db->query_fetch($strSQL, $this->arrBind,false);\n		unset($this->arrWhere);\n		unset($this->arrBind);\n		return StringUtils::htmlSpecialCharsStripSlashes(gd_isset($data));\n	}\n</pre>",
    content:  "preg_match($pattern, $subject [,$matches]);<br/><br/>$subject에 $pattern이 있는지 검색<br/>있으면 1, 없으면 0을 반환",
    regDt: "2022.05.15"
},
{
    id: 24,
    type: "tip",
    key:"고도몰",
    title: "이미지 줌 플러그인",
    code: "<pre>  $(document).ready(function() {\n    $('#elementToZoomOn').smartZoom(); // start plugin behaviour\n  });\n\n\n//이미지가 여러개인 경우\n//Controller\n$getData['image'][$gVal['imageKind']]['img'][] = gd_html_preview_image($gVal['imageName'], $goodsInfo['imagePath'], $goodsInfo['imageStorage'], $imageSize, 'goods', $goodsInfo['goodsNm'], null, false, false, $imageHeightSize);\n\n//html\n$('.dbk_goods_view_image_slider .zoom-content-mobile > img').each(function(index, item){\n    $(item).attr('id', 'zoomImage_'+index);\n    $('.dbk_goods_view_image_slider > li > .zoom-content-mobile > img').smartZoom('destroy');\n    $('#zoomImage_'+index).smartZoom(option);\n   //이미지 확대 비율 조정\n    //$('#zoomImage_'+index).smartZoom('zoom', 0.3);\n    //zoom-content-mobile 클래스의 width와 height의 절반 길이를 설정하면 이미지가 중간에 위치함\n    //$('#zoomImage_'+index).smartZoom('pan', -250,-250);\n})\n</pre>",
    content:  "이미지 줌 플러그인 링크: https://github.com/dams-dev/smartJQueryZoom<br/>js파일을 script로 삽입하고 smartZoom 함수로 이미지를 줌할 수 있다.<br/><br/>이미지가 여러개인 경우 이미지마다 id를 다르게 설정하여 각각 zoom시켜주어야한다.",
    regDt: "2022.05.15"
},
{
    id: 25,
    type: "tip",
    key:"codeIgniter 프레임워크",
    title: "codeIgniter 프레임워크",
    code: "<pre></pre>",
    content:  "codeIgniter 프레임워크<br/><br/>페이지 생성 시에 주로 사용하는 폴더는 application 폴더 하위에 있는 controllers, models, views 폴더였다.<br/><br/>views 폴더에서 프론트 view 파일을 생성하고,<br/><br/>controllers폴더에서 view파일과 이름이 매칭되는 컨트롤러를 생성하고,<br/><br/>models 폴더에서 db에 접근하는 기능에 대한 파일을 생성한다.<br/><br/>",
    regDt: "2022.05.17"
},
{
    id: 26,
    type: "tip",
    key:"excel",
    title: "PHP: 엑셀 업로드",
    code: "<pre>case 'excel_upload_area':\n	try {\n		//$filename = './file.xlsx'; // 서버에 올려진 파일을 직접 지정할 경우\n		//$snoList = $this->input->post('excelFile');\n\n\n		// excel_upload.php 파일을 이용해 업로드 한 경우\n\n		$filename = $_FILES['excelFile']['tmp_name'];\n		\n		// 업로드 된 엑셀 형식에 맞는 Reader객체를 만든다.\n\n		$objReader = PHPExcel_IOFactory::createReaderForFile($filename);\n\n		// 읽기전용으로 설정\n		$objReader->setReadDataOnly(true);\n		$objExcel = $objReader->load($filename);\n		//echo print_r($objExcel, true); exit;\n\n		// 첫번째 시트를 선택\n		$objExcel->setActiveSheetIndex(0);\n		$objWorksheet = $objExcel->getActiveSheet();\n\n		$rowIterator = $objWorksheet->getRowIterator();\n\n		foreach ($rowIterator as $row) { // 모든 행에 대해서\n		   $cellIterator = $row->getCellIterator();\n		   $cellIterator->setIterateOnlyExistingCells(false);\n		}\n		$maxRow = $objWorksheet->getHighestRow();\n		\n		for ($i = 2 ; $i <= $maxRow ; $i++) {\n		   $zipcode = $objWorksheet->getCell('A' . $i)->getValue(); // A열\n		   $regDt = $objWorksheet->getCell('B' . $i)->getValue(); // B열\n		   //기존 데이터 삭제 후 업로드인 경우\n			//$this->DawnDeliveryAdminModel->getAdminDawnDeliveryAreaDel('harim_dawn_delivery_area');\n			\n			//기존 데이터에 추가하는 경우\n			$this->DawnDeliveryAdminModel->setAdminDawnDeliveryAreaSave('harim_dawn_delivery_area', $zipcode);\n		}\n\n		print '<script type=\\'text/javascript\\'>alert('파일이 업로드되었습니다.');</script>';\n		redirect('./Harimpet/Admin/Order/DawnDeliveryArea','refresh'); \n		exit;\n	} catch (\\Exception $e) {\n		echo json_encode($e);\n	}\n	break;\n\n\n\n</pre>",
    content:  "$filename = $_FILES['excelFile']['tmp_name'];<br/><br/>filename이 엑셀파일 이름인 줄 알았는데 print_r()로 찍어보니까 특이한 문자가 찍혔다.<br/><br/>",
    regDt: "2022.05.18"
},
{
    id: 27,
    type: "tip",
    key:"excel",
    title: "PHP: 엑셀 다운로드",
    code: "<pre>public function excelDown()\n		{\n			$search['keyword'] = $this->input->get('keyword', TRUE);\n			$search['sort'] = $this->input->get('sort',TRUE);\n\n			$excelDeliveryAreaList = $this->DawnDeliveryAdminModel->getDawnDeliveryAreaListExcel('harim_dawn_delivery_area', $search);\n\n			if($excelDeliveryAreaList) {\n\n				$idx = 2 ;\n				foreach($excelDeliveryAreaList as $eKey => $eVal) {\n\n					// 워크시트에서 1번째는 활성화\n					$this->excel->setActiveSheetIndex(0);\n					// 워크시트 이름 지정\n					$this->excel->getActiveSheet()->setTitle('새벽배송지역');\n					// A1의 내용을 입력 합니다.\n					$this->excel->getActiveSheet()->setCellValue('A1', '고유번호');\n					$this->excel->getActiveSheet()->setCellValue('B1', '우편번호');\n					$this->excel->getActiveSheet()->setCellValue('C1', '등록일');\n					$this->excel->getActiveSheet()->setCellValue('A'.$idx, $eVal['sno']);\n					$this->excel->getActiveSheet()->setCellValue('B'.$idx, $eVal['zip_code']);\n					$this->excel->getActiveSheet()->setCellValue('C'.$idx, $eVal['regDt']);\n					// A1의 폰트를 변경 합니다.\n					//$this->excel->getActiveSheet()->getStyle('A1')->getFont()->setSize(20);\n					// A1의 글씨를 볼드로 변경합니다.\n					//$this->excel->getActiveSheet()->getStyle('A1')->getFont()->setBold(true);\n					// A1부터 D1까지 셀을 합칩니다.\n					//$this->excel->getActiveSheet()->mergeCells('A1:D1');\n					// A1의 컬럼에서 가운데 쓰기를 합니다.\n					//$this->excel->getActiveSheet()->getStyle('A1')->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);\n\n					$idx ++;\n\n					usleep(500000);//딜레이\n				}\n			}else {\n				// 워크시트에서 1번째는 활성화\n				$this->excel->setActiveSheetIndex(0);\n				// 워크시트 이름 지정\n				$this->excel->getActiveSheet()->setTitle('새벽배송지역');\n				// A1의 내용을 입력 합니다.\n				$this->excel->getActiveSheet()->setCellValue('A1', '번호');\n				$this->excel->getActiveSheet()->setCellValue('B1', '우편번호');\n				$this->excel->getActiveSheet()->setCellValue('C1', '등록일');\n			}\n\n			$filename='delivery_area.xls'; // 엑셀 파일 이름\n			header('Content-Type: application/vnd.ms-excel'); //mime 타입\n			header('Content-Disposition: attachment;filename=''.$filename.'''); // 브라우저에서 받을 파일 이름\n			header('Cache-Control: max-age=0'); //no cache\n						\n			// Excel5 포맷으로 저장 엑셀 2007 포맷으로 저장하고 싶은 경우 'Excel2007'로 변경합니다.\n			$objWriter = PHPExcel_IOFactory::createWriter($this->excel, 'Excel2007'); \n			// 서버에 파일을 쓰지 않고 바로 다운로드 받습니다.\n			$objWriter->save('php://output');\n			exit();\n		}\n\n\n\n</pre>",
    content:  "처음엔 엑셀 업로드와 같은 라이브러리를 사용하려고 했는데 오류가 나서 다른 방법으로 수정했다.<br/><br/>//원래 사용하려던 방법(오류나거나 파일을 읽지 못함)<br/>$objPHPExcel = PHPExcel_IOFactory::load($_FILES['excel']['tmp_name']);<br/><br/>",
    regDt: "2022.05.18"
}];
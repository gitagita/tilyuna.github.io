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
    content: "텍스트로 selectbox 만들기, 코드 관리는 es_code에서 관리함",
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
    code: "<pre>'<'form id='frm' action='../member/member_ps.php' method='post' enctype='multipart/form-data'>\n//file 타입의 데이터를 ps로 전송하기 위해서는 form 태그에 enctype='multipart/form-data' 추가해야함\n\n'<'input type='file' name='busiReg' id='busiReg'/></pre>",
    content:  "회원가입 시 사업자등록증을 첨부하는 부분을 구현했다. <br/><br/>form 태그에 enctype='multipart/form-data' 추가",
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
},
{
    id: 28,
    type: "err",
    key:"카페24_API",
    title: "\\'Access-Control-Allow-Origin: *\\'. (parameter.src)'",
    code: "<pre>'<'IfModule mod_headers.c'>'\nHeader set Access-Control-Allow-Origin '*'\n'<'/'IfModule'>'\n\n// 태그가 인식되어 태그 양쪽에 임의로 따옴표를 추가했다.\n\n</pre>",
    content:  "POST/api/v2/admin/scripttags 호출했을 때 발생했던 오류<br/><br/>{'error':{'code':422,'message':'The CORS (Cross-origin resource sharing) header of the script in the src attribute must be \\'Access-Control-Allow-Origin: *\\'. (parameter.src)'}}<br/><br/>src 데이터가 있는 서버파일에 접근하지 못해 발생하는 오류였음<br/></br/> Apache 웹 서버에서 apache2.conf 또는 sites-enabled 파일에서는 <Directory> 태그를 통해 파일이 위치한 경로와 디렉토리에 대한 접근 허용 설정을 할 수 있다.<br/><br/>.htaccess 파일은 해당 설정 기능을 독립된 자료로 저장한 파일이다.<br/><br/>.htaccess 파일에 해당 내용 추가하면 해결 됨<br/><br/><IfModule mod_headers.c><br/>Header set Access-Control-Allow-Origin '*'<br/></IfModule>",
    regDt: "2022.05.19"
},
{
    id: 29,
    type: "tip",
    key:"PHPExcel",
    title: "PHPExcel라이브러리 날짜 타입 지정",
    code: "<pre>$this->excel->getActiveSheet()->setCellValue('B'.$idx, PHPExcel_Style_NumberFormat::toFormattedString($eVal['holiday'], PHPExcel_Style_NumberFormat::FORMAT_DATE_YYYYMMDD2));</pre>",
    content:  "PHPExcel라이브러리를 사용해 엑셀다운로드 프로세스를 구현하던 중 data 타입의 데이터가  2022-01-01이 아니라  45363같은 숫자로 출력되었다. 이때 엑셀 타입형식을 지정해주니 날짜 형식으로 출력되었다.",
    regDt: "2022.05.20"
},
{
    id: 30,
    type: "dev",
    key:"php",
    title: "휴무일 프로세스",
    code: "<pre>class Orderform extends CI_Controller\n{\n\n	//새벽배송 휴무일\n	const HOLIDAY_HOUR = 18;\n\n	public function __construct()\n	{\n		parent::__construct();\n		$this->load->library('session');\n		$this->load->helper(array('form', 'url'));\n		$this->load->model('/Harimpet/DawnDeliveryAdminModel');\n\n	}\n\n	public function index()\n	{\n		$zipcode = $this->input->post('zipcode');\n		$holiday = $this->input->post('holiday');\n\n		if(isset($zipcode)) {\n			//echo $zipcode;\n			//$arrData['zipcode'] = $zipcode;\n			$result = $this->getdeliveryArea($zipcode);\n			if($result > 0) {\n				echo 'zipable';\n				exit;\n			} else {\n				echo 'zipdisable';\n				exit;\n			}\n		}\n		if($holiday == 'y') {\n			$result = $this->getDeliveryDay();\n			echo $result;\n			exit;\n		}\n	}\n\n	//새벽배송 가능 우편 번호\n	public function getdeliveryArea($zipcode)\n	{\n		$arrData['zipcode'] = $zipcode;\n		$result = $this->DawnDeliveryAdminModel->getDeliveryAreaReg('harim_dawn_delivery_area', $arrData);\n		return $result['cnt'];\n		exit;\n	}\n\n\n	public function getDeliveryDay(){\n		//$data['today'] = date('Y-m-d');\n		$data['today'] = '2022-05-17';\n		$data['tomorrow'] = date('Y-m-d', strtotime($data['today'].'+1 day'));\n\n		//오늘이 휴무일인지 확인\n		\n		//현재 시간\n		$holidayFl = $this->getHolidayCheck($data['today']);\n		if($holidayFl == 0 && date('H') < self::HOLIDAY_HOUR) {\n			//echo '6시 이전';\n			$deliveryDay = $this->getDeliveryHoliday($data);\n		} else {\n			//echo '6시 이후 || 오늘이 휴무일인 경우';\n			$deliveryDay = $this->getDeliveryHoliday($data, 'y');\n		}\n\n		return $deliveryDay;\n	}\n\n	//새벽 배송 휴무일 계산\n	public function getDeliveryHoliday($data, $kind='n')\n	{\n		//배송 준비기간\n		$dateNum = 0;\n		//현재 시각이 18:00이전이면 => 배송준비기간 오늘 포함 이틀\n\n		//현재 날짜가 휴무일이면\n		//현재 시각이 18:00이후이면 => 배송준비 기간 이틀\n		while(true){\n			//$todayFl = $this->getHolidayCheck($data['today']);\n			$tomorrowFl = $this->getHolidayCheck($data['tomorrow']);\n			\n			//if($todayFl == 0 && $tomorrowFl == 0) {\n			if($tomorrowFl == 0) {\n				//echo '휴무아님y';\n				if($kind=='y' && $dateNum < 1){\n					$dateNum+=1;\n					//echo $dateNum.'  ';\n					$data = $this->setHolidayAdd($data);\n				} else {\n					break;\n				}\n			} else {\n				//echo '휴무임';\n				$data = $this->setHolidayAdd($data);\n			}\n		}\n		\n		return $data['tomorrow'];\n	}\n\n	\n	\n	//해당 날짜 휴무일 체크\n	public function getHolidayCheck($date)\n	{\n		//echo print_r($date, true);\n		$holidayFl = 0;\n		//요일 구하기\n		$week = date('w',strtotime($date));\n		//echo $weekTomorrow;\n		\n		//해당 요일이 토,일요일인 경우\n		if($week == 0  || $week == 6) {\n			$holidayFl+=1;\n		} else {\n			$result = $this->DawnDeliveryAdminModel->getHolidayCnt('harim_dawn_delivery_holiday', $date);\n			if($result['cnt'] > 0) {\n				$holidayFl+=1;\n			}\n		}\n		return $holidayFl;\n	}\n	\n	//다음 날짜로 이동\n	private function setHolidayAdd($arrData) {\n		$getData['today'] = date('Y-m-d', strtotime($arrData['today'].'+1 day'));\n		$getData['tomorrow'] = date('Y-m-d', strtotime($arrData['tomorrow'].'+1 day'));\n\n		return $getData;\n	}\n\n\n}</pre>",
    content:  "하림펫푸드의 새벽배송 휴무일을 구하는 프로세스를 구현했다.<br/>배송업체 입장에서 생각하면 배송 예상일을 생각하는데 이해하기 쉬웠다. <br/><br/>[예시]<br/>오늘이 18시 이전이고 휴무일이 아닌 경우에는 +1일 한다. 즉, 다음날이 휴무일이 아니라면 예상 배송일이된다. 만약 휴무일이면 이후 날짜 중 휴무일이 아닌 날이 휴무일이 된다. 배송업체 입장에서 다시 말하면 배송을 준비하는 시간이 오늘과 하루 더 해서 배송을 준비한다. <br/><br/>만약 오늘이 휴무일이라면 이후 날짜 중 이틀의 준비 기간을 잡을 수 있으면 된다. 프로세스에서는 $dateNum변수를 선언해서 $dateNum < 1 일 때로 조건을 걸어 휴무일이 아닌 날이 한 번은 있도록 설정했다.",
    regDt: "2022.05.20"
},
{
    id: 31,
    type: "diary",
    key:"db",
    title: "개발하면서 백업하자. 그리고 기록하자",
    code: "<pre></pre>",
    content:  "레이델 개발을 마치고 DB를 이전하는 업체에 의뢰해서 이전이 마칠 때까지 기다렸다. 그런데 이번에 담당하는 사람이 바뀌면서 예전과 다르게 파일과 DB를 이전시킨 것이다. 원래 있었던 내용들이 예전에 있었던 소스코드로 덮어쓰여져 있고, DB도 마찬가지로 추가해두었던 필드들이 사라져 있었다. 팀장님도 이런 경우는 처음라고 하셨다. 백업이라고는 내가 개발한 폴더쪽만 백업해두었지 전체 백업은 해두지 않았었고, 테이블도 몇 개만 파일로 받아두었었다. <br/><br/>나중에 또 이런 일이 있을지도 모르니 DB테이블과 소스코드 모두 시간이 걸리더라도 전체 백업을 받아두어야겠다고 생각했다.<br/><br/>날짜에 따라 그날 개발한 사항을 기록해두는 것도 중요했다. 백업 받은 날짜와 비교해보거나, DB이전한 날 이후로 작업한 것 있는 경우가 있는지 찾을 때 필요했다. 기록하자.",
    regDt: "2022.05.25"
},
{
    id: 32,
    type: "tip",
    key:"php",
    title: "해당 ID로 로그인한 유저에서만 동작하게 하기",
    code: "<pre>if(\\Session::get('member.memId') == 'test_3') {...}</pre>",
    content:  "이미 배포된 사이트이거나, 다른 팀원들이 페이지를 사용하고 있을 때. <br/>테스트 계정 만들어서 해당 ID인 경우의 회원에서만 동작하도록 설정해서 테스트 해볼 수 있다.",
    regDt: "2022.05.27"
},
{
    id: 33,
    type: "tip",
    key:"php",
    title: "하나의 Contorller에서 여러 페이지로 분기하기",
    code: "<pre>if($getValue['kind'] == 's') {\n	$this->getView()->setPageName('dbk/stores.php');\n} else if($getValue['kind'] == 'k'){\n	$this->getView()->setPageName('dbk/storek.php');\n} else if($getValue['kind'] == 'y'){\n	$this->getView()->setPageName('dbk/storey.php');\n}\n$this->setData('kind', $getValue['kind']);\n\n</pre>",
    content:  "여러 페이지가 공통된 Controller를 사용하는 경우 getView함수를 사용할 수 있다. <br/> 분기는 테스트 하는 경우 유용하게 쓰일 수 있다. 여러 사람이 프론트쪽 파일을 하나씩 가지고 있으면서 각자 수정하고 테스트 해볼 때 사용하면 좋다. <br/><br/>예를들어 상품상세페이지를 수정하는데 Controller는 손대지 않고 프론트쪽 파일을 여러명이 각자 독립적으로 수정하고 테스트 하려는 경우가 있다.",
    regDt: "2022.05.27"
},
{
    id: 34,
    type: "tip",
    key:"php",
    title: "router-link 태그",
    code: "<pre>'<'router-link :to='`/brand/${brand.no}`'>{{brand.name}}'<'/router-link></pre>",
    content:  "router-link to에서 변수랑 문자열 연결",
    regDt: "2022.05.31"
},
{
    id: 35,
    type: "tip",
    key:"jquery",
    title: "클릭 시 checked 되게 하기",
    code: "<pre>'<'label for='des_r2' style='margin: 10px 5px 10px 0px;'>\n	'<'input type='radio' id='des_r2' class='deliveryDt disable' data-type='post' name='des_delivery' value='datePickerPost' autocomplete='off' checked> 일반배송\n'<'/label>\n'<'label for='des_r1' style='margin: 10px 5px;'>\n	'<'input type='radio' id='des_r1' class='deliveryDt disable' data-type='dawn' name='des_delivery' value='datePickerDawn' autocomplete='off'> 새벽배송\n'<'/label>\n\n\n$('#des_r2').trigger('click');\n$('#des_r1').trigger('click');</pre>",
    content:  "jquery로 radio타입 checked로 변경하는 방법",
    regDt: "2022.06.09"
},
{
    id: 36,
    type: "tip",
    key:"jquery",
    title: "날짜 포맷 설정하기",
    code: "<pre>getFullYmdStr: function(d) {\n	var date = d.split('-'); \n	return date[0]+ '년 ' + parseInt(date[1]) + '월 ' + parseInt(date[2]) + '일 ';\n}</pre>",
    content:  "split함수로 연,월,일을 나눈 후 형식에 맞게 가공 함. parseInt함수를 사용하면 '06'이 '6'으로 표기된다. 입력값은 '2022-06-09'의 형태이다.",
    regDt: "2022.06.09"
},
{
    id: 37,
    type: "tip",
    key:"고도몰",
    title: "주문 상세 검색에 검색 필터 추가하기",
    code: "<pre></pre>",
    content:  "개발을 하다보면 기업마다 관리자 주문리스트 페이지의 상세 검색쪽에 추가로 검색기능을 요구할 때가 있다.<br/>주문의 상세 검색 폼은 layout_order_search_form.php 파일에 있다.<br/>검색 기능을 추가하는 위치는 OrderAdmin.php이다.",
    regDt: "2022.06.11"
},
{
    id: 38,
    type: "tip",
    key:"고도몰",
    title: "Component 상속 받기",
    code: "<pre>class DbkGoods extends \\Bundle\\Component\\Goods\\Goods</pre>",
    content:  "",
    regDt: "2022.06.17"
},
{
    id: 39,
    type: "tip",
    key:"고도몰",
    title: "프론트에서 회원세션 가져오기",
    code: "<pre><!--{ ? gSess.memId == 'test_1'}-->\n<!--{ / }--></pre>",
    content:  "아이디가 test_1인 경우에 대해 실행되게 할 수 있다.",
    regDt: "2022.06.17"
},
{
    id: 40,
    type: "tip",
    key:"고도몰",
    title: "회원의 상품 쿠폰 가져오기",
    code: "<pre>	/** \n	 * yuna\n	 * 2022.06.15.\n	 * 회원의 상품쿠폰 리스트 가져오기\n	 */	\n	public function getMemberProductCouponCnt(){\n		$memNo = \\Session::get('member.memNo');\n		\n		// 회원\n		$this->arrWhere[] = 'mc.memNo =?';\n		$this->db->bind_param_push($this->arrBind, 'i', $memNo);\n\n		// 만료기간\n		//$this->arrWhere[] = 'c.couponUsePeriodStartDate<=? AND c.couponUsePeriodEndDate>?';\n		$this->arrWhere[] = 'mc.memberCouponStartDate<=? AND mc.memberCouponEndDate>?';\n		$this->db->bind_param_push($this->arrBind, 's', date('Y-m-d H:i:s'));\n        $this->db->bind_param_push($this->arrBind, 's', date('Y-m-d H:i:s'));\n\n		// 쿠폰사용가능 여부\n		$this->arrWhere[] = 'mc.memberCouponState ='y'';\n\n		// 상품 쿠폰\n        $this->arrWhere[] = 'c.couponUseType=?';\n        $this->db->bind_param_push($this->arrBind, 's', 'product');\n\n\n		// 사용범위?PC+모바일(‘a’),PC(‘p’),모바일(‘m’)\n        $this->arrWhere[] = '(c.couponDeviceType in (?,?))';\n\n		if (Request::isMobile()) { // 모바일 접속 여부\n			$this->db->bind_param_push($this->arrBind, 's', 'all');\n			$this->db->bind_param_push($this->arrBind, 's', 'mobile');\n		} else {\n			$this->db->bind_param_push($this->arrBind, 's', 'all');\n			$this->db->bind_param_push($this->arrBind, 's', 'pc');\n		}\n\n		//온라인 쿠폰\n		//$this->arrWhere[] = 'c.couponKind=?';\n    //$this->db->bind_param_push($this->arrBind, 's', 'online');\n\n		$this->db->strField .= ' * ';\n		//$this->db->strField .= ' COUNT(mc.memberCouponNo) as cnt ';\n    $this->db->strWhere = implode(' AND ', gd_isset($this->arrWhere));\n    $this->db->strJoin .= ' LEFT JOIN ' . DB_COUPON . ' as c ON c.couponNo = mc.couponNo';\n\n		$query = $this->db->query_complete();\n    $strSQL = 'SELECT ' . array_shift($query) . ' FROM ' . DB_MEMBER_COUPON . ' as mc ' . implode(' ', $query);\n    $data = $this->db->query_fetch($strSQL, $this->arrBind);\n\n		//echo print_r($data);\n\n		return $data[0]['cnt'];\n	}\n</pre>",
    content:  "어떤 회원이 가지고 있는 상품 쿠폰을 가져온다. 쿠폰의 사용 기간은 유효해야하며, 모바일과 pc의 사용 범위를 확인해야한다. 쿠폰은 사용 가능해야한다.(이미 사용한 쿠폰은 가져오지 않는다.)",
    regDt: "2022.06.17"
},
{
    id: 41,
    type: "diary",
    key:"고도몰",
    title: "실수 후 대처",
    code: "<pre></pre>",
    content:  "<h3>내가 한 실수</h3>이전에 만든 프로세스에 오류가 발견되어 야근을 했다. 회원이 구매확정했을 때 구매 금액에서 마일리지 지급 비율만큼 곱해서 지급하는 프로세스였다. 내가 한 실수는 구매 금액에 마일리지 지급 비율을 곱한 후 동일 상품 구매 개수를 곱한 것이다. 이미 구매 금액에 동일상품 개수도 곱해져 있는데 내가 거기에 상품 개수를 곱했으니 회원에게 마일리지를 더 지급해버린 것 이다. <br/>고도몰에서 구매확정했을 때 Order.php컴포넌트의 statusChangeCodeS($orderNo, $arrData)함수를 타는데 $arrData에 있는 sno값이 DB의 es_orderGoods의 sno이다. es_OrderGoods는 주문한 상품 또는 옵션 이 하나의 행이 되고, 만약 동일 상품 또는 옵션을 여러개 구매한 경우 한 행의 goodsCnt가 그 개수가 된다.<br/> es_orderGoods에서 realTaxSupplyGoodsPrice+realTaxVatGoodsPrice+realTaxFreeGoodsPrice를 더하면 해당 상품에 대한 개수도 곱해져 있는 실제 구매 금액이다.<br/><br/><h3>대처방법</h3>1.DB에 있는 내용 excel로 정리하기 <br/><a class='hangul' href='https://blog.naver.com/PostView.naver?blogId=lsw3210&logNo=221581987792&redirect=Dlog&widgetTypeCall=true&directAccess=false'>1-1.DB의 내용 excel로 내보내기(click!!)</a><br/><a class='hangul' href='https://moguwai.tistory.com/entry/phpmyadmin%EC%97%90%EC%84%9C-excel%EB%A1%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B6%94%EC%B6%9C%ED%95%98%EA%B8%B0'>1-2.excel형식 만들기(click!!)</a><br/><br/> 2. 실수한 부분 정리하기 <br/> 3. 파일 정리해서 전달 <br/> 4. 처리할 부분 안내 받고 처리하기",
    regDt: "2022.06.22"
},
{
    id: 42,
    type: "tip",
    key:"고도몰",
    title: "$this->getView()",
    code: "<pre>if($getValue['mode'] == 'data') {\n	$this->getView()->setPageName('dbk/dbk_goods_list.php');\n} else {\n	$this->getView()->setDefine('goodsTemplate', 'dbk/dbk_goods_list.html');\n}\n</pre>",
    content:  "해당 Controller를 어느 파일로 보이게 할지 정하는 함수.  else문의 경우에는 헤당 파일을 goodsTemplate로 선언한 것이다. 프론트 쪽에서는 {#goodsTemplate}아 같이 사용할 수 있다.",
    regDt: "2022.06.20"
},
{
    id: 43,
    type: "tip",
    key:"jquery",
    title: "attr, prop",
    code: "&lt;div class='comment-write js-form-write'&gt;<br/>	&lt;form id='dbkForm0in' method='post' action='./dbk_event_ps.php' enctype='multipart/form-data'&gt;<br/>&nbsp;&nbsp;&lt;input type='hidden' name='mode' value='dbk_reply_insert'/&gt;<br/>&nbsp;&nbsp;&lt;input type='hidden' name='eventSno' value='{=eventSno}'/&gt;<br/>&nbsp;&nbsp;&lt;input type='hidden' name='depth' value='1'/&gt;<br/>&nbsp;&lt;label&gt;<br/>&nbsp;&nbsp;&nbsp;&lt;input type='checkbox' name='isSecretReply' value='y'/&gt;<br/>&nbsp;&nbsp;&nbsp;비밀댓글<br/>	&nbsp;&lt;/label&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>	&nbsp;&lt;div class='comment-write_list'&gt;<br/>&nbsp;&nbsp;&nbsp;&lt;textarea type='text' name='memo' class='text' placeholder='내용을 입력해주세요. (최대 xx자)'&gt;&lt;/textarea&gt;<br/>&nbsp;&nbsp;&nbsp;&lt;button type='button' class='comment-write_submit js-comment-btn-write' data-type='in' data-sno='0'&gt;확인&lt;/button&gt;<br/>&nbsp;&lt;/div&gt;<br/>&lt;!--{ ? dbkEmojiList }--&gt;<br/>&lt;ul&gt;<br/>	&nbsp;&lt;!--{ @ dbkEmojiList }--&gt;<br/>	&nbsp;&nbsp;&nbsp;&lt;li&gt;<br/>	&nbsp;&nbsp;&nbsp;&nbsp;&lt;label&gt;<br/>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input type='checkbox' name='emojiSno' value='{.sno}' /&gt;<br/>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src='../data/etc/{.emojiIcon}' style='width:50px;'/&gt;<br/>	&nbsp;&nbsp;&nbsp;&nbsp;&lt;/label&gt;<br/>	&nbsp;&nbsp;&nbsp;&lt;/li&gt;<br/>	&nbsp;&nbsp;&lt;!--{ / }--&gt;<br/>		&lt;/ul&gt;<br/>&nbsp;&lt;!--{ / }--&gt;<br/>	&nbsp;&lt;input type='file' name='saveFile'/&gt;<br/>	&lt;/form&gt;<br/>&lt;/div&gt;<br/><br/><br/><br/>&lt;script&gt;<br/>$(document).ready(function(){<br/>	$('input[name=\\'emojiSno\\']').on('click', function(){<br/>		//다른 곳에서도 name='emojiSno'를 사용해서 클릭한 element의 부모의 div의 name='emojiSno'에 대해서만 동작하도록<br/>		const $parentsDiv = $(this).closest('div');<br/><br/>&nbsp;&nbsp;if($(this).is(':checked')) {<br/>&nbsp;&nbsp;&nbsp;//선택 해제 할 때 prop를 사용하면 전제 선택 해제가 되지 않음<br/>&nbsp;&nbsp;&nbsp;//<br/>	&nbsp;&nbsp;$parentsDiv.find('input[name=\\'emojiSno\\']').attr('checked', false);<br/>	&nbsp;&nbsp;$(this).prop('checked', true);<br/>	&nbsp;} else {<br/>&nbsp;&nbsp;&nbsp;$parentsDiv.find('input[name=\\'emojiSno\\']').attr('checked', false);<br/>	&nbsp;}<br/>&nbsp;});<br/>});<br/>&lt;/script&gt;<br/>",
    content:  "게시글 댓글에 이모지를 선택할 수 있는 기능이다. 이모지는 필수가 아니므로 checkbox로 구현했고, 한가지만 선택할 수 있으므로 이미 체크되어 있는 것이 있으면 전체 해제 후 클릭 한 것을 체크하도록 프로세스를 구현했다. <br/> 이슈는 prop로 했을 때 전체해제가 동작하지 않았다는 점이었다. input의 상태를 확인해보니 checkbox 기본 기능대로 동작하고 있었다. prop 대신 속성을 추가하는 메서드 attr를 사용하니 잘 작동했다.",
    regDt: "2022.07.30"
}];
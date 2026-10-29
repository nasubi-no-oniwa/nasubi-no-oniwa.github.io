// =============================================
//  ことば（日本語・English・繁體中文・한국어）
//  ===========================================

(function () {
  var LANGS = ['ja', 'en', 'zh', 'ko'];
  var KEY = 'nasubi_lang';
  var D = {
 "lang_label": [
  "ことば",
  "Language",
  "語言",
  "언어"
 ],
 "home": [
  "なすびのお庭へ",
  "Nasubi's Garden (more games)",
  "前往茄子的庭院",
  "가지의 정원으로"
 ],
 "howto": [
  "あそびかた",
  "How to play",
  "玩法",
  "플레이 방법"
 ],
 "close": [
  "とじる",
  "Close",
  "關閉",
  "닫기"
 ],
 "back": [
  "もどる",
  "Back",
  "返回",
  "돌아가기"
 ],
 "to_title": [
  "タイトルへ",
  "Back to title",
  "回到標題",
  "타이틀로"
 ],
 "again": [
  "もう一回",
  "Play again",
  "再來一局",
  "한 판 더"
 ],
 "easy": [
  "よわい",
  "Easy",
  "簡單",
  "약함"
 ],
 "normal": [
  "ふつう",
  "Normal",
  "普通",
  "보통"
 ],
 "hard": [
  "つよい",
  "Hard",
  "困難",
  "강함"
 ],
 "vs_cpu": [
  "CPUとたいせん",
  "VS CPU",
  "對戰CPU",
  "CPU와 대전"
 ],
 "online": [
  "あいことばで対戦",
  "Play with a passcode",
  "用暗號對戰",
  "암호로 대전"
 ],
 "passcode": [
  "あいことば",
  "Passcode",
  "暗號",
  "암호"
 ],
 "name": [
  "なまえ",
  "Name",
  "名字",
  "이름"
 ],
 "noname": [
  "ななし",
  "Anonymous",
  "無名氏",
  "익명"
 ],
 "online_hint": [
  "同じあいことばを入れた人と対戦。3人目からは観戦になります。",
  "Play against whoever enters the same passcode. From the 3rd person on, you watch.",
  "和輸入相同暗號的人對戰。第3個人開始為觀戰。",
  "같은 암호를 입력한 사람과 대전. 3번째 사람부터는 관전이 됩니다."
 ],
 "join": [
  "はいる",
  "Join",
  "進入",
  "입장"
 ],
 "wait_pre": [
  "あいことば「",
  "Passcode: ",
  "暗號「",
  "암호 「"
 ],
 "wait_post": [
  "」",
  "",
  "」",
  "」"
 ],
 "waiting": [
  "あいてを待っています…",
  "Waiting for an opponent…",
  "等待對手中…",
  "상대를 기다리는 중…"
 ],
 "copy_link": [
  "さそうリンクをコピー",
  "Copy invite link",
  "複製邀請連結",
  "초대 링크 복사"
 ],
 "copied": [
  "コピーしました！",
  "Copied!",
  "已複製！",
  "복사했어요!"
 ],
 "send_link": [
  "このリンクを送ってください",
  "Send this link",
  "請傳送這個連結",
  "이 링크를 보내 주세요"
 ],
 "err_code": [
  "あいことばを入れてください（. # $ / [ ] は使えません）",
  "Enter a passcode (. # $ / [ ] are not allowed)",
  "請輸入暗號（不能使用 . # $ / [ ]）",
  "암호를 입력해 주세요 (. # $ / [ ] 는 사용할 수 없어요)"
 ],
 "err_code_short": [
  "あいことばを入れてください",
  "Enter a passcode",
  "請輸入暗號",
  "암호를 입력해 주세요"
 ],
 "connecting": [
  "つないでいます…",
  "Connecting…",
  "連線中…",
  "연결 중…"
 ],
 "err_net": [
  "通信できませんでした。電波のよいところでもう一度ためしてください",
  "Couldn't connect. Please try again where the signal is better.",
  "無法連線。請在訊號好的地方再試一次。",
  "연결하지 못했어요. 신호가 좋은 곳에서 다시 시도해 주세요."
 ],
 "err_notready": [
  "オンライン対戦はまだ準備中です",
  "Online play isn't ready yet",
  "線上對戰還在準備中",
  "온라인 대전은 아직 준비 중이에요"
 ],
 "err_conn": [
  "つながりませんでした",
  "Couldn't connect",
  "無法連線",
  "연결되지 않았어요"
 ],
 "left_win": [
  "相手が抜けたので、あなたの勝ち！",
  "Your opponent left, so you win!",
  "對手離開了，你贏了！",
  "상대가 나가서 당신의 승리!"
 ],
 "left": [
  "あいてが退室しました",
  "Your opponent left",
  "對手已離開",
  "상대가 퇴장했어요"
 ],
 "watch_in": [
  "観戦で入りました。試合が始まるのを待っています…",
  "You joined as a spectator. Waiting for the game to start…",
  "已用觀戰身分進入。等待比賽開始…",
  "관전으로 입장했어요. 경기 시작을 기다리는 중…"
 ],
 "wait_next": [
  "次の試合が始まるのを待っています…",
  "Waiting for the next game…",
  "等待下一局開始…",
  "다음 경기를 기다리는 중…"
 ],
 "wait_rematch": [
  "あいての「もう一回」を待っています…",
  "Waiting for your opponent to choose \"Play again\"…",
  "等待對手按「再來一局」…",
  "상대의 '한 판 더'를 기다리는 중…"
 ],
 "you": [
  "あなた",
  "You",
  "你",
  "나"
 ],
 "cpu": [
  "CPU",
  "CPU",
  "CPU",
  "CPU"
 ],
 "your_turn": [
  "あなたの番",
  "Your turn",
  "輪到你",
  "내 차례"
 ],
 "cpu_wait_label": [
  "CPU（ふつう）と遊びながら待つ",
  "Play the CPU (Normal) while waiting",
  "一邊和CPU（普通）玩一邊等",
  "기다리는 동안 CPU(보통)와 플레이"
 ],
 "qm_btn": [
  "だれかと対戦",
  "Play someone online",
  "隨機對戰",
  "아무나와 대전"
 ],
 "qm_stat": [
  "対戦待ち <b>{w}</b>人・対戦中 <b>{p}</b>組",
  "<b>{w}</b> waiting · <b>{p}</b> playing",
  "等待中 <b>{w}</b>人・對戰中 <b>{p}</b>組",
  "대기 <b>{w}</b>명 · 대전 중 <b>{p}</b>쌍"
 ],
 "qm_prime_hot": [
  "🔥 いま対戦タイム！（22時まで）",
  "🔥 Battle time now! (until 22:00 JST)",
  "🔥 現在是對戰時間！（到日本時間22點）",
  "🔥 지금은 대전 타임! (일본 시간 22시까지)"
 ],
 "qm_prime": [
  "🌙 毎晩21時〜22時は対戦タイム",
  "🌙 Battle time every night 21:00–22:00 JST",
  "🌙 每晚日本時間21〜22點是對戰時間",
  "🌙 매일 밤 일본 시간 21~22시는 대전 타임"
 ],
 "qm_sub": [
  "いま待っている人と、自動でつながります。",
  "You'll be matched automatically with someone who's waiting.",
  "自動和正在等待的人配對。",
  "기다리고 있는 사람과 자동으로 연결돼요."
 ],
 "qm_go": [
  "さがす",
  "Find a match",
  "尋找",
  "찾기"
 ],
 "qm_badname": [
  "その名前は使えません。ほかの名前にしてね",
  "That name can't be used. Please choose another.",
  "這個名字不能使用，請換一個。",
  "그 이름은 사용할 수 없어요. 다른 이름으로 해 주세요."
 ],
 "qm_searching": [
  "相手をさがしています",
  "Looking for an opponent",
  "正在尋找對手",
  "상대를 찾는 중"
 ],
 "qm_wait_pre": [
  "いま対戦待ち ",
  "Waiting now: ",
  "目前等待中 ",
  "현재 대기 "
 ],
 "qm_wait_post": [
  "人",
  "",
  "人",
  "명"
 ],
 "qm_cpu": [
  "CPUと遊びながら待つ",
  "Play the CPU while waiting",
  "一邊和CPU玩一邊等",
  "기다리는 동안 CPU와 플레이"
 ],
 "qm_cancel": [
  "やめる",
  "Cancel",
  "取消",
  "그만두기"
 ],
 "qm_retry": [
  "もう一度さがす",
  "Search again",
  "再找一次",
  "다시 찾기"
 ],
 "qm_searching_t": [
  "相手をさがしています… {t}",
  "Looking for an opponent… {t}",
  "正在尋找對手… {t}",
  "상대를 찾는 중… {t}"
 ],
 "qm_calling": [
  "CPUと遊んでいる人に声をかけています…",
  "Inviting someone who is playing the CPU…",
  "正在邀請正在和CPU玩的人…",
  "CPU와 플레이 중인 사람에게 신청하는 중…"
 ],
 "qm_declined": [
  "相手が見送りました。ほかの人をさがします",
  "They passed. Looking for someone else.",
  "對方跳過了，改找其他人。",
  "상대가 넘겼어요. 다른 사람을 찾을게요."
 ],
 "qm_found": [
  "相手が見つかりました！",
  "Opponent found!",
  "找到對手了！",
  "상대를 찾았어요!"
 ],
 "qm_avail": [
  "対戦できる相手がいます！",
  "Someone is ready to play!",
  "有可以對戰的對手！",
  "대전할 수 있는 상대가 있어요!"
 ],
 "qm_play": [
  "対戦する",
  "Play",
  "對戰",
  "대전하기"
 ],
 "qm_pass": [
  "見送る",
  "Pass",
  "跳過",
  "넘기기"
 ],
 "qm_taken": [
  "さっきの相手は、ほかの人と対戦を始めました。もう少し待ってね",
  "That player started a match with someone else. Please wait a little longer.",
  "剛才的對手已經和別人開始對戰了。請再等一下。",
  "방금 상대는 다른 사람과 대전을 시작했어요. 조금만 더 기다려 주세요."
 ],
 "qm_fail": [
  "相手とつながりませんでした（{c}）",
  "Couldn't connect to your opponent ({c})",
  "無法和對手連線（{c}）",
  "상대와 연결되지 않았어요 ({c})"
 ],
 "qm_nojoin": [
  "入れませんでした",
  "Couldn't join",
  "無法進入",
  "들어가지 못했어요"
 ],
 "qm_next": [
  "次の相手をさがす",
  "Find next opponent",
  "尋找下一位對手",
  "다음 상대 찾기"
 ],
 "doc_title": [
  "なすびのお庭",
  "Nasubi's Garden",
  "茄子的庭院",
  "가지의 정원"
 ],
 "doc_desc": [
  "なすびのお庭は、ブラウザですぐ遊べる小さなゲームをつくっている場所です。スマホでもPCでも、インストールなしで遊べます。",
  "Nasubi's Garden makes small games you can play right away in your browser. No install needed, on phone or PC.",
  "茄子的庭院製作在瀏覽器馬上就能玩的小遊戲。手機電腦都能玩，免安裝。",
  "가지의 정원은 브라우저에서 바로 즐길 수 있는 작은 게임을 만드는 곳입니다. 설치 없이 스마트폰에서도 PC에서도 즐길 수 있어요."
 ],
 "nav_games": [
  "ゲーム",
  "Games",
  "遊戲",
  "게임"
 ],
 "nav_news": [
  "お知らせ",
  "News",
  "最新消息",
  "소식"
 ],
 "nav_about": [
  "このお庭",
  "About",
  "關於這裡",
  "소개"
 ],
 "mascot": [
  "なすびのキャラクター",
  "Nasubi, the eggplant",
  "茄子角色",
  "가지 캐릭터"
 ],
 "hero_h1": [
  "<span class=\"n\">なすび</span>の<span class=\"g\">お庭</span>",
  "<span class=\"n\">Nasubi</span>'s <span class=\"g\">Garden</span>",
  "<span class=\"n\">茄子</span>的<span class=\"g\">庭院</span>",
  "<span class=\"n\">가지</span>의 <span class=\"g\">정원</span>"
 ],
 "hero_p": [
  "ブラウザですぐ遊べる小さなゲーム。インストールなし、スマホでもPCでも。",
  "Small games you can play right in your browser. No install, on phone or PC.",
  "在瀏覽器馬上就能玩的小遊戲。免安裝，手機電腦都能玩。",
  "브라우저에서 바로 즐기는 작은 게임. 설치 없이, 스마트폰에서도 PC에서도."
 ],
 "live_loading": [
  "いまの人数を読みこみ中…",
  "Loading player counts…",
  "正在讀取目前人數…",
  "현재 인원을 불러오는 중…"
 ],
 "live_err": [
  "いまの人数を読みこめませんでした",
  "Couldn't load player counts",
  "無法讀取目前人數",
  "현재 인원을 불러오지 못했어요"
 ],
 "live_note": [
  "ゲームの「だれかと対戦」を押すと、待っている人と自動でつながります。相手がいないときはCPUと遊びながら待てます。",
  "Press \"Play someone online\" in a game to be matched automatically with someone who's waiting. If nobody is there, you can play the CPU while you wait.",
  "在遊戲中按「隨機對戰」，就會自動和正在等待的人配對。沒有對手時，可以一邊和CPU玩一邊等。",
  "게임에서 '아무나와 대전'을 누르면 기다리는 사람과 자동으로 연결돼요. 상대가 없을 때는 CPU와 플레이하며 기다릴 수 있어요."
 ],
 "live_sum": [
  "いま 対戦待ち <b>{w}</b>人・対戦中 <b>{p}</b>組",
  "Now: <b>{w}</b> waiting · <b>{p}</b> playing",
  "目前 等待中 <b>{w}</b>人・對戰中 <b>{p}</b>組",
  "지금 대기 <b>{w}</b>명 · 대전 중 <b>{p}</b>쌍"
 ],
 "sh_live": [
  "いま 対戦待ち {w}人・対戦中 {p}組",
  "Now: {w} waiting · {p} playing",
  "目前 等待中 {w}人・對戰中 {p}組",
  "지금 대기 {w}명 · 대전 중 {p}쌍"
 ],
 "sh_can": [
  "だれかと対戦できます",
  "Online matchmaking available",
  "可以隨機對戰",
  "아무나와 대전할 수 있어요"
 ],
 "li_wait": [
  "待ち{n}人",
  "{n} waiting",
  "等待{n}人",
  "대기 {n}명"
 ],
 "li_play": [
  "対戦中{n}組",
  "{n} playing",
  "對戰中{n}組",
  "대전 중 {n}쌍"
 ],
 "badge_wait": [
  "待ち{n}",
  "Wait {n}",
  "等待{n}",
  "대기 {n}"
 ],
 "play": [
  "あそぶ",
  "Play",
  "開始玩",
  "플레이"
 ],
 "more": [
  "くわしく",
  "Details",
  "詳情",
  "자세히"
 ],
 "soon": [
  "つくってます",
  "Coming soon",
  "製作中",
  "제작 중"
 ],
 "news_more": [
  "もっと見る（あと{n}件）",
  "Show more ({n} more)",
  "查看更多（還有{n}則）",
  "더 보기 ({n}개 더)"
 ],
 "icon_alt": [
  "{n}のアイコン",
  "{n} icon",
  "{n}的圖示",
  "{n} 아이콘"
 ],
 "about_1": [
  "<b>なすびのお庭</b>は、思いついたゲームを1つずつ植えて育てている場所です。",
  "<b>Nasubi's Garden</b> is where I plant and grow the games I come up with, one at a time.",
  "<b>茄子的庭院</b>是把想到的遊戲一個一個種下、慢慢培育的地方。",
  "<b>가지의 정원</b>은 떠오른 게임을 하나씩 심어 키우는 곳입니다."
 ],
 "about_2": [
  "どのゲームも無料で、ブラウザを開くだけで遊べます。新しいゲームが実ったら、ここでお知らせします。",
  "Every game is free and plays just by opening your browser. When a new game ripens, I'll announce it here.",
  "每款遊戲都免費，只要打開瀏覽器就能玩。新遊戲結出果實時，會在這裡通知大家。",
  "모든 게임은 무료이고, 브라우저만 열면 즐길 수 있어요. 새 게임이 열매를 맺으면 여기서 알려 드릴게요."
 ],
 "soon_text": [
  "ただいま土の中で育てています。芽が出るまでお待ちください。",
  "Growing underground right now. Please wait until it sprouts.",
  "目前正在土裡培育中。請等它發芽。",
  "지금 흙 속에서 키우고 있어요. 싹이 날 때까지 기다려 주세요."
 ],
 "tag:パズル": [
  "パズル",
  "Puzzle",
  "益智",
  "퍼즐"
 ],
 "tag:CPU対戦": [
  "CPU対戦",
  "VS CPU",
  "對戰CPU",
  "CPU 대전"
 ],
 "tag:だれかと対戦": [
  "だれかと対戦",
  "Online matchmaking",
  "隨機對戰",
  "아무나와 대전"
 ],
 "tag:合言葉で対戦": [
  "合言葉で対戦",
  "Passcode match",
  "暗號對戰",
  "암호 대전"
 ],
 "tag:観戦": [
  "観戦",
  "Spectate",
  "觀戰",
  "관전"
 ],
 "tag:2人対戦": [
  "2人対戦",
  "2 players",
  "雙人對戰",
  "2인 대전"
 ],
 "tag:この端末で2人": [
  "この端末で2人",
  "2P on one device",
  "同一裝置雙人",
  "한 기기로 2인"
 ],
 "tag:同じPCで2人": [
  "同じPCで2人",
  "2P on one PC",
  "同一台電腦雙人",
  "한 PC로 2인"
 ],
 "tag:3D": [
  "3D",
  "3D",
  "3D",
  "3D"
 ],
 "tag:2D": [
  "2D",
  "2D",
  "2D",
  "2D"
 ],
 "tag:アクション": [
  "アクション",
  "Action",
  "動作",
  "액션"
 ],
 "tag:タワーディフェンス": [
  "タワーディフェンス",
  "Tower defense",
  "塔防",
  "타워 디펜스"
 ],
 "tag:リバーシ": [
  "リバーシ",
  "Reversi",
  "黑白棋",
  "리버시"
 ],
 "tag:ランナー": [
  "ランナー",
  "Runner",
  "跑酷",
  "러너"
 ],
 "tag:1人で記録": [
  "1人で記録",
  "Solo records",
  "單人紀錄",
  "혼자 기록 도전"
 ],
 "tag:ゴースト": [
  "ゴースト",
  "Ghosts",
  "幽靈紀錄",
  "고스트"
 ],
 "tag:お絵かき": [
  "お絵かき",
  "Drawing",
  "畫畫",
  "그림 그리기"
 ],
 "tag:キャラID": [
  "キャラID",
  "Character ID",
  "角色ID",
  "캐릭터 ID"
 ],
 "tag:バトル": [
  "バトル",
  "Battle",
  "戰鬥",
  "배틀"
 ],
 "tag:コマID": [
  "コマID",
  "Top ID",
  "陀螺ID",
  "팽이 ID"
 ],
 "tag:市町村": [
  "市町村",
  "Municipalities",
  "市町村",
  "시정촌"
 ],
 "tag:全自動バトル": [
  "全自動バトル",
  "Auto battle",
  "全自動對戰",
  "전자동 배틀"
 ],
 "tag:研究": [
  "研究",
  "Research",
  "研究",
  "연구"
 ],
 "tag:挑戦状": [
  "挑戦状",
  "Challenges",
  "挑戰書",
  "도전장"
 ],
 "tag:前世": [
  "前世",
  "Past life",
  "前世",
  "전생"
 ],
 "tag:歴史": [
  "歴史",
  "History",
  "歷史",
  "역사"
 ],
 "tag:年表": [
  "年表",
  "Timeline",
  "年表",
  "연표"
 ],
 "tag:ひとりで": [
  "ひとりで",
  "Single player",
  "單人",
  "1인용"
 ],
 "tag:みんなで協力": [
  "みんなで協力",
  "Co-op with everyone",
  "全員合作",
  "모두 협력"
 ],
 "tag:全100層": [
  "全100層",
  "100 floors",
  "全100層",
  "전 100층"
 ],
 "tag:ドット絵": [
  "ドット絵",
  "Pixel art",
  "像素風",
  "도트 그래픽"
 ],
 "tag:2ボタン": [
  "2ボタン",
  "2 buttons",
  "2個按鈕",
  "2버튼"
 ],
 "tag:60秒": [
  "60秒",
  "60 seconds",
  "60秒",
  "60초"
 ],
 "tag:コンボ": [
  "コンボ",
  "Combos",
  "連擊",
  "콤보"
 ],
 "tag:ランキング": [
  "ランキング",
  "Rankings",
  "排行榜",
  "랭킹"
 ],
 "tag:3つの陣営": [
  "3つの陣営",
  "3 factions",
  "3個陣營",
  "3개 진영"
 ],
 "tag:掲示板": [
  "掲示板",
  "Message board",
  "留言板",
  "게시판"
 ],
 "tag:ローグライク": [
  "ローグライク",
  "Roguelike",
  "Roguelike",
  "로그라이크"
 ],
 "tag:全100階": [
  "全100階",
  "100 floors",
  "全100層",
  "전 100층"
 ],
 "tag:長押し": [
  "長押し",
  "Press & hold",
  "長按",
  "길게 누르기"
 ],
 "tag:力加減": [
  "力加減",
  "Finesse",
  "力道控制",
  "힘 조절"
 ],
 "tag:物理": [
  "物理",
  "Physics",
  "物理",
  "물리"
 ],
 "tag:バランス": [
  "バランス",
  "Balance",
  "平衡",
  "균형"
 ],
 "tag:なんでやねん": [
  "なんでやねん",
  "Absurd",
  "無厘頭",
  "황당"
 ],
 "tag:準備中": [
  "準備中",
  "Coming soon",
  "準備中",
  "준비 중"
 ]
};
  function pick() {
    try { var q = new URLSearchParams(location.search).get('lang'); if (q && LANGS.indexOf(q) >= 0) { try { localStorage.setItem(KEY, q); } catch (e) {} return q; } } catch (e) {}
    try { var s = localStorage.getItem(KEY); if (s && LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || 'ja').toLowerCase();
    if (n.indexOf('ja') === 0) return 'ja'; if (n.indexOf('ko') === 0) return 'ko'; if (n.indexOf('zh') === 0) return 'zh'; return 'en';
  }
  var L = pick();
  function t(k, v) {
    var row = D[k]; var i = LANGS.indexOf(L);
    var s = row ? (row[i] != null ? row[i] : row[0]) : k;
    if (v) for (var x in v) s = s.split('{' + x + '}').join(v[x]);
    return s;
  }
  function langFont() {
    var u = { zh: 'https://fonts.googleapis.com/css2?family=Chiron+GoRound+TC:wght@500;800;900&display=swap',
              ko: 'https://fonts.googleapis.com/css2?family=Jua&display=swap' }[L];
    if (!u || document.getElementById('font-' + L)) return;
    var l = document.createElement('link'); l.id = 'font-' + L; l.rel = 'stylesheet'; l.href = u; document.head.appendChild(l);
  }
  function apply() {
    langFont();
    var de = document.documentElement;
    de.lang = L === 'zh' ? 'zh-Hant' : L; de.setAttribute('data-lang', L);
    document.querySelectorAll('[data-i]').forEach(function (e) { e.textContent = t(e.dataset.i); });
    document.querySelectorAll('[data-ih]').forEach(function (e) { e.innerHTML = t(e.dataset.ih); });
    document.querySelectorAll('[data-ip]').forEach(function (e) { e.placeholder = t(e.dataset.ip); });
    document.querySelectorAll('[data-ia]').forEach(function (e) { e.setAttribute('aria-label', t(e.dataset.ia)); });
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === L ? 'true' : 'false'); });
    document.title = t('doc_title');
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', t('doc_desc'));
    try { document.dispatchEvent(new CustomEvent('langchange', { detail: L })); } catch (e) {}
  }
  function set(l) { if (LANGS.indexOf(l) < 0) return; L = l; try { localStorage.setItem(KEY, l); } catch (e) {} apply(); }
  function bind() {
    document.querySelectorAll('.langs button').forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.lang); }); });
    apply();
  }
  window.I18N = { t: t, set: set, apply: apply, get lang() { return L; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();

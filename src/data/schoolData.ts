export interface Course {
  id: string;
  category: 'junior' | 'middle' | 'senior';
  title: string;
  subtitle: string;
  grade: string;
  capacity: string;
  schedule: string;
  description: string;
  tags: string[];
  features: string[];
  syllabus: { week: string; topic: string; detail: string }[];
  outcomes: string[];
}

export interface Notice {
  id: string;
  category: '모집' | '학사' | '행사';
  title: string;
  date: string;
  views: number;
  content: string;
  isImportant?: boolean;
}

export interface CalendarEvent {
  date: string;
  day: string;
  title: string;
  category: '입학' | '특강' | '평가' | '휴원' | '학사';
  time: string;
  description: string;
}

export const SCHOOL_INFO = {
  name: "Chan's School",
  koreanName: "찬스 스쿨",
  tagline: "스스로 탐구하고 미래를 설계하는 융합 인재의 요람",
  heroDescription: "Chan's School은 단순 암기식 주입 교육에서 벗어나, 기술(Coding & AI), 논리(Math & Logic), 인문·소통(Global Debate)이 어우러진 프로젝트 기반의 혁신 교육을 제공합니다.",
  address: "서울특별시 서초구 반포대로 140 찬스스쿨 에듀케이션 빌딩 3-5F",
  subway: "지하철 2·3호선 교대역 6번 출구 도보 3분",
  phone: "02-588-2026",
  email: "admissions@chans-school.edu",
  hours: "평일 10:00 - 21:00 / 토요일 09:00 - 18:00 (일요일 휴무)",
  director: "박찬우 (Chan-Woo Park) 총괄원장",
};

export const HIGHLIGHT_STATS = [
  { value: "1:8", label: "소수 정예 멘토링 비율", sub: "담임제 밀착 피드백" },
  { value: "100%", label: "자기주도 프로젝트 완성", sub: "개인별 포트폴리오 구축" },
  { value: "4대", label: "미래 융합 트랙 운영", sub: "AI·수리·인문·디자인" },
  { value: "98.6%", label: "재원생 및 학부모 만족도", sub: "2025학년도 설문 기준" },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "주도적 문제 정의와 탐구",
    enTitle: "Inquiry-Driven Discovery",
    description: "주어진 정답을 빠르게 맞히는 것보다 '왜?'라는 본질적인 질문을 던지고, 가설을 세워 스스로 검증하는 탐구 태도를 형성합니다.",
    iconName: "Compass",
  },
  {
    number: "02",
    title: "실전 프로젝트 기반 학습",
    enTitle: "Real-World Project Learning",
    description: "개념 습득에 머무르지 않고, 직접 소프트웨어를 코딩하거나 리서치 페이퍼를 작성하며 눈에 보이는 결과물을 창작합니다.",
    iconName: "Code2",
  },
  {
    number: "03",
    title: "1:1 학생 맞춤형 성장 설계",
    enTitle: "Personalized Mentorship",
    description: "학생마다 다른 지적 호기심과 잠재력을 존중합니다. 전문 멘토진이 학생의 학습 템포와 진로 목표에 맞춘 로드맵을 함께 그립니다.",
    iconName: "Users2",
  },
  {
    number: "04",
    title: "글로벌 소통과 비판적 사고",
    enTitle: "Global Communication & Logic",
    description: "복잡한 문제의 해결 방안을 논리적으로 정리하고, 영어와 데이터 시각화를 통해 세계 무대에서 소통할 수 있는 역량을 키웁니다.",
    iconName: "Globe",
  },
];

export const COURSES: Course[] = [
  {
    id: "ai-coding-junior",
    category: "junior",
    title: "주니어 AI & 크리에이티브 코딩",
    subtitle: "놀이와 창작으로 시작하는 컴퓨팅 사고력",
    grade: "초등 4학년 ~ 6학년",
    capacity: "클래스당 8명 정원",
    schedule: "주 1회 (회당 2시간 30분)",
    description: "블록 코딩에서 텍스트 코딩(Python)으로 자연스럽게 전환하며, 인공지능의 기본 원리를 이해하고 나만의 인터랙티브 게임과 인터페이스를 만듭니다.",
    tags: ["Python 기초", "머신러닝 이해", "알고리즘 게임 제작", "창의 발표"],
    features: [
      "직관적인 시각적 시뮬레이션을 통한 알고리즘 학습",
      "초등 눈높이에 맞춘 음성·이미지 인식 AI 프로젝트",
      "학기말 개인 프로젝트 쇼케이스 및 학부모 시연회",
    ],
    syllabus: [
      { week: "1-4주차", topic: "알고리즘적 사고와 Python 기초 문법", detail: "변수, 조건문, 반복문을 활용한 논리적 명령 흐름 마스터" },
      { week: "5-8주차", topic: "데이터와 친해지기 & 그래픽 프로그래밍", detail: "좌표계 애니메이션 및 센서 데이터를 활용한 인터랙션 구현" },
      { week: "9-12주차", topic: "AI 비전 모델과 스마트 미니 프로젝트", detail: "Teachable Machine 및 Python 라이브러리로 제스처 인식 게임 완성" },
    ],
    outcomes: ["파이썬 기초 인증서 수여", "개인 게임 프로그램 1편 출시", "알고리즘 기초 포트폴리오"],
  },
  {
    id: "math-logic-middle",
    category: "middle",
    title: "수리 논증 & 문제해결 프로젝트",
    subtitle: "공식을 넘어서는 깊이 있는 수학적 모델링",
    grade: "중학생 전 학년",
    capacity: "클래스당 6명 정원",
    schedule: "주 2회 (회당 2시간)",
    description: "단순 계산식 문제풀이가 아닌 실생활 현상을 수식과 기하학 모델로 구조화하고, 동료들과 치열하게 디베이트하며 논리적 정합성을 검증합니다.",
    tags: ["수학적 모델링", "증명과 디베이트", "기하 & 대수 심화", "학술 보고서"],
    features: [
      "단원별 심층 탐구 주제를 다루는 세미나식 수업",
      "수학적 오류를 찾아내는 피어 리뷰(Peer Review) 시스템",
      "국내외 올림피아드 및 영재원 서술형 대비 논증 훈련",
    ],
    syllabus: [
      { week: "1-4주차", topic: "수론과 암호학의 연결고리", detail: "소수 판별법, 모듈러 연산, RSA 공개키 암호 알고리즘 분석" },
      { week: "5-8주차", topic: "좌표평면과 기하학적 최적화", detail: "페르마 포인트, 볼록껍질 알고리즘의 기하학적 증명" },
      { week: "9-12주차", topic: "확률과 통계로 분석하는 도시 데이터", detail: "공공 데이터를 기반으로 한 회귀분석 및 논증 보고서 완성" },
    ],
    outcomes: ["수리 논증 리서치 페이퍼 1편", "창의 수리 경진대회 출품 지원", "중등 심화 개념 완성"],
  },
  {
    id: "global-debate-middle",
    category: "middle",
    title: "글로벌 이슈 디베이트 & 아카데믹 라이팅",
    subtitle: "국제 사회 이슈를 관통하는 비판적 담론",
    grade: "초등 고학년 ~ 중학생",
    capacity: "클래스당 8명 정원",
    schedule: "주 1회 (회당 3시간)",
    description: "UN 지속가능목표(SDGs), 인공지능 윤리, 기후위기 등 시의성 있는 주제를 영어로 리서치하고, 팔러먼터리(Parliamentary) 형식으로 토론하며 에세이를 작성합니다.",
    tags: ["English Debate", "Critical Thinking", "SDGs 글로벌 이슈", "Academic Essay"],
    features: [
      "아이비리그 출신 원어민 및 바이링구얼 전담 멘토",
      "뉴욕타임스, 이코노미스트 아티클 기반 독해 훈련",
      "1:1 에세이 첨삭과 구조화된 스피치 트레이닝",
    ],
    syllabus: [
      { week: "1-4주차", topic: "AI와 프라이버시 권리 논쟁", detail: "공리주의 vs 권리론 관점 분석 및 오프닝 스피치 구조화" },
      { week: "5-8주차", topic: "우주 탐사와 자원 분배의 정의", detail: "반박(Rebuttal) 테크닉 훈련 및 논리적 오류 반증 연습" },
      { week: "9-12주차", topic: "모의 UN 총회 및 최종 에세이 포트폴리오", detail: "결의안 작성, 정책 제안 스피치 및 5단락 학술 에세이 발행" },
    ],
    outcomes: ["영문 학술 에세이 포트폴리오", "모의 UN 및 디베이트 대회 참가 자격", "영어 말하기/쓰기 자신감"],
  },
  {
    id: "tech-capstone-senior",
    category: "senior",
    title: "소프트웨어 엔지니어링 & 캡스톤 프로젝트",
    subtitle: "실제 배포까지 경험하는 고등 심화 연구 트랙",
    grade: "중3 ~ 고등학생 (특목/자사고 준비생)",
    capacity: "클래스당 6명 정원",
    schedule: "주 1회 (회당 3시간 30분)",
    description: "웹 풀스택 아키텍처, 데이터베이스, AI API 연동을 직접 설계하고 팀 단위로 세상을 이롭게 할 실제 프로덕트를 기획·개발·배포합니다.",
    tags: ["Full-Stack Dev", "클라우드 배포", "오픈소스 기여", "학생부 세특/진로"],
    features: [
      "현업 시니어 엔지니어 출신 멘토의 코드 리뷰",
      "Git/GitHub 협업 워크플로우 실습",
      "학생부종합전형 및 해외 대학 포트폴리오 최적화",
    ],
    syllabus: [
      { week: "1-4주차", topic: "시스템 설계 & 클라우드 인프라 이해", detail: "RESTful API 설계, 관계형/NoSQL DB 모델링 및 사용자 인증" },
      { week: "5-8주차", topic: "생성형 AI 모델 파이프라인 연동", detail: "LLM API 프롬프트 엔지니어링, 실시간 인터랙션 UI 개발" },
      { week: "9-12주차", topic: "최종 프로덕트 배포 & 데모데이 발표", detail: "Vercel/AWS 배포, 성능 최적화, 최종 기술 백서 작성" },
    ],
    outcomes: ["실서비스 라이브 웹 프로덕트", "GitHub 리포지토리 및 기술 블로그", "심층 탐구 보고서 세특 자료"],
  },
];

export const NOTICES: Notice[] = [
  {
    id: "notice-2026-spring",
    category: "모집",
    title: "2026학년도 1학기 찬스 스쿨 정규반 신입생 모집 요강",
    date: "2026.03.02",
    views: 428,
    isImportant: true,
    content: `안녕하세요, 찬스 스쿨(Chan's School) 교무처입니다.

2026학년도 봄학기 신입생을 위한 정규 교육과정 원서 접수가 시작되었습니다. 각 반 6~8명 소수 정예 운영 원칙에 따라 선착순 심층 상담 및 진단 평가 후 클래스가 확정됩니다.

[모집 개요]
• 모집 대상: 초등 4학년 ~ 고등 2학년
• 개설 트랙: 주니어 AI & 코딩 / 수리 논증 / 글로벌 디베이트 / 시니어 캡스톤
• 1차 접수 기간: 2026년 3월 2일(월) ~ 3월 20일(금)
• 진단 심층 면담: 주중 14:00~19:00 또는 토요일 사전 예약제
• 개강일: 2026년 3월 28일(토) 순차 개강

입학 상담 페이지를 통해 희망 일시를 예약해 주시면 담당 멘토가 사전 연락을 드립니다.`,
  },
  {
    id: "notice-open-campus",
    category: "행사",
    title: "학부모를 위한 교육 설명회: 'AI 시대에 필요한 진짜 공부 역량'",
    date: "2026.02.18",
    views: 615,
    isImportant: true,
    content: `급변하는 생성형 AI 시대, 우리 아이에게 지금 가장 필요한 역량은 무엇일까요?

찬스 스쿨 박찬우 총괄원장과 외부 에듀테크 전문가를 모시고, 단순 코딩 스킬을 넘어 비판적 질문력과 프로젝트 기획력을 기르는 교육 솔루션을 나눕니다.

• 일시: 2026년 3월 14일(토) 오전 11:00 ~ 12:30
• 장소: 찬스 스쿨 3층 그랜드 세미나 라운지
• 대상: 초·중·고 학부모 선착순 40분
• 내용:
  - 1부: 미래 입시와 글로벌 교육 트렌드 분석
  - 2부: 찬스 스쿨 4대 커리큘럼 소개 및 학생 작품 시연
  - 3부: 질의응답 및 1:1 맞춤 상담`,
  },
  {
    id: "notice-hackathon-results",
    category: "학사",
    title: "2025 겨울 청소년 미래 챌린지 해커톤 전원 수상 소식",
    date: "2026.01.25",
    views: 312,
    content: `지난 1월 개최된 제4회 청소년 미래 챌린지 해커톤에서 찬스 스쿨 시니어 캡스톤 트랙 참가팀 3팀이 전원 본상(대상 1팀, 최우수상 2팀)을 수상하였습니다.

시각장애인을 위한 사물인식 음성 도우미 웹앱을 개발한 팀 '찬스메이커' 학생들에게 아낌없는 축하와 응원을 보냅니다. 학생들의 성장 과정은 캠퍼스 갤러리 및 블로그에서 확인하실 수 있습니다.`,
  },
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    date: "2026.03.14",
    day: "토",
    title: "봄학기 학부모 정기 입학 설명회",
    category: "입학",
    time: "11:00 - 12:30",
    description: "AI 시대 융합 교육 로드맵 및 2026학년도 커리큘럼 안내",
  },
  {
    date: "2026.03.20",
    day: "금",
    title: "1학기 정규반 1차 원서 마감",
    category: "입학",
    time: "18:00 마감",
    description: "각 트랙별 정원 마감 시 조기 종료될 수 있습니다.",
  },
  {
    date: "2026.03.28",
    day: "토",
    title: "2026학년도 봄학기 개강 오리엔테이션",
    category: "학사",
    time: "10:00 - 17:00",
    description: "신입생 웰컴 키트 증정 및 팀 빌딩 아이스브레이킹",
  },
  {
    date: "2026.04.18",
    day: "토",
    title: "글로벌 테크 전문가 초청 특강",
    category: "특강",
    time: "14:00 - 16:00",
    description: "실리콘밸리 AI 리서처와 함께하는 청소년 진로 멘토링",
  },
  {
    date: "2026.05.05",
    day: "화",
    title: "어린이날 법정 공휴일 휴원",
    category: "휴원",
    time: "종일",
    description: "공휴일 지정 휴무 (온라인 과제 제출 시스템은 정상 가동)",
  },
];

export const FAQ_LIST = [
  {
    q: "코딩이나 프로그래밍 경험이 전혀 없어도 입학할 수 있나요?",
    a: "네, 물론입니다! 찬스 스쿨의 주니어 및 비기너 트랙은 처음 시작하는 학생들의 눈높이에 맞춘 감각적인 실습부터 시작합니다. 진단 면담을 통해 학생의 수준에 알맞은 단계부터 체계적으로 학습할 수 있도록 배정합니다.",
  },
  {
    q: "일반 학원과 찬스 스쿨의 가장 큰 차이점은 무엇인가요?",
    a: "일반 학원이 강사 주도의 지식 전달과 단편적인 문제풀이에 집중한다면, 찬스 스쿨은 학생이 직접 프로젝트의 기획자이자 연구자가 되는 'PBL(Project-Based Learning)' 시스템입니다. 1:8 정예 멘토링으로 결과물(포트폴리오)을 실제로 완성해 냅니다.",
  },
  {
    q: "입학 전 무료 진단 면담은 어떻게 진행되나요?",
    a: "상담 신청서를 접수하시면 담당 선생님이 전화로 1차 상담 후 캠퍼스 방문 일정을 조율합니다. 약 40분간 학생의 적성, 문제해결 성향, 흥미 분야를 종합 진단하고 가장 적합한 트랙을 컨설팅해 드립니다.",
  },
  {
    q: "수업 결석 시 보강 제도가 있나요?",
    a: "학교 시험이나 불가피한 사유로 결석할 경우, 사전 신청 시 멘토와의 1:1 보강 세션 또는 실시간 온라인 세션으로 결손 없이 보충할 수 있습니다.",
  },
];

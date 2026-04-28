const ANALYSIS = {
  problems: [
    { category: '메뉴 구조', items: [
      { title: '메뉴 파편화', desc: '동일 업무가 여러 메뉴에 분산되어 부서별 데이터 사일로 발생', severity: 'critical' },
      { title: '중복 기능', desc: '회원정보 조회가 상담팀/매칭팀/CS팀 메뉴에 각각 존재하여 데이터 불일치', severity: 'critical' },
      { title: '비직관적 네비게이션', desc: '업무 흐름과 메뉴 배치가 불일치하여 신규 입사자 교육 비용 증가', severity: 'high' }
    ]},
    { category: '데이터 관리', items: [
      { title: '상태값 모호성', desc: '회원 상태(활동/보류/교체/탈퇴 등)의 정의가 불명확하고 수동 변경으로 오류 빈발', severity: 'critical' },
      { title: '계약일 임의 조작', desc: '매니저가 실적 이월 목적으로 계약 시작일을 임의 변경 가능 → 위약금/환불금 산정 오류', severity: 'critical' },
      { title: '이력 추적 불가', desc: '상태 변경, 매칭 이력, 결제 이력의 감사 로그(Audit Log) 부재', severity: 'high' },
      { title: '데이터 연동 부재', desc: '결제 시스템, 인증 시스템, 매칭 시스템 간 데이터가 분리되어 수동 대조 필요', severity: 'high' }
    ]},
    { category: '업무 프로세스', items: [
      { title: '수동 프로세스 과다', desc: '정회원 전환, 서류 인증, 프로필 발송 등 대부분 수작업 처리', severity: 'high' },
      { title: '중복DB 수동 처리', desc: '동일 고객이 여러 마케팅 채널로 중복 유입 시 관리자가 수동으로 확인/소스외 처리 → 콜 겹침 및 영업 충돌 발생', severity: 'critical' },
      { title: '결재선 부재', desc: '중요 변경사항(탈퇴, 환불 등)에 대한 체계적 결재/승인 프로세스 없음', severity: 'medium' },
      { title: '알림 체계 미흡', desc: '회원/매니저에 대한 자동 알림(카카오톡, SMS) 발송 체계 부재', severity: 'medium' }
    ]},
    { category: '인증/서류', items: [
      { title: '수동 서류 수집', desc: '회원 인증 서류를 매니저가 직접 수집/등록 → 누락 및 지연 발생', severity: 'high' },
      { title: 'API 미연동', desc: '주민등록초본, 혼인관계증명서 등 공공기관 스크래핑 API 미연동', severity: 'high' },
      { title: '인증 상태 불투명', desc: '서류별 인증 진행 상태를 한눈에 파악하기 어려움', severity: 'medium' }
    ]}
  ],
  menus: [
    { name: '대시보드', icon: '📊', features: ['매출 현황 요약','신규 가입 현황','컨택/미팅 현황','매니저별 실적 랭킹','오늘의 할일 알림'], status: 'partial' },
    { name: '준회원 관리', icon: '👤', features: ['준회원 목록/검색/필터','상세정보 조회/수정','상담 이력 관리','미팅 예약/결과 기록','정회원 전환 처리','서류인증 등록'], status: 'done' },
    { name: '정회원 관리', icon: '👥', features: ['정회원 목록/검색','상세정보(원페이지 뷰)','인증서류 관리','매칭 대상자 검색/필터·요청/수락/거절','안심번호 발급','교제 관리','결제/청구 이력','메모/상담 기록'], status: 'partial' },
    { name: '인증관리', icon: '📋', features: ['서류인증 현황 대시보드','매니저 직접등록','회원 자동인증(스크래핑 API)','인증 진행률 추적','PDF 다운로드'], status: 'partial' },
    { name: '실적·통계', icon: '📈', features: ['매출 현황 리포트','컨설턴트별 실적','월별/분기별 통계','컨택 전환율 분석'], status: 'planned' },
    { name: 'CS/클레임', icon: '🛡️', features: ['클레임 접수/처리','탈회 처리 파이프라인','위약금 자동 산정','환불금 계산','전자서명 내재화'], status: 'planned' },
    { name: '인사관리', icon: '👔', features: ['매니저 성과 KPI 관리','급여 산정 시스템','인센티브 자동 계산','근태/출퇴근 관리','인사 평가 이력'], status: 'planned' },
    { name: '설정/관리', icon: '⚙️', features: ['사용자 권한 관리','프로그램/등급 설정','알림 템플릿 관리','시스템 로그'], status: 'planned' },
    { name: '유입DB 분배 관리', icon: '📥', features: ['[신규] 채널별 유입 자동 연동','API/웹훅(Webhook) 연동 관리','채널별 실시간 유입 로그 모니터링','비정상 DB 차단 룰 설정','중복DB 자동 수거(소스외)','매니저 자동/수동 분배'], status: 'partial' }
  ],
  menuStructure: [
    { code: 'MN-100', depth2: '대시보드', depth3: '종합 현황판', depth4: '매출 현황 요약, 신규 가입 현황, 컨택/미팅 현황, 매니저별 실적 랭킹, 오늘의 할일 알림' },
    { code: 'MN-200', depth2: '준회원 관리', depth3: '준회원 목록', depth4: '전체 목록/검색/필터, 상태별 분류(신규/컨택중/미팅예약/가입보류/가입진행예정)' },
    { code: 'MN-201', depth2: '', depth3: '준회원 상세', depth4: '기본정보 조회/수정, 상담 이력 등록/조회, 미팅 예약/결과 기록, 담당 매니저 변경(사유 필수), 변경 이력 조회' },
    { code: 'MN-202', depth2: '', depth3: '정회원 전환', depth4: '전환 모달(가입정보 입력), 서류인증 등록, 결제 정보 연결' },
    { code: 'MN-300', depth2: '정회원 관리', depth3: '정회원 목록', depth4: '전체 목록/검색/필터, 상태별 분류(인증중/활동/매칭중/보류/휴면/탈회)' },
    { code: 'MN-301', depth2: '', depth3: '정회원 상세 (원페이지 뷰)', depth4: '기본정보 탭, 인증서류 탭, 매칭 정보 탭, 결제/청구 이력 탭, 메모/상담 기록 탭' },
    { code: 'MN-302', depth2: '', depth3: '계약 관리', depth4: '계약서 조회, 계약 시작일(하드코딩), 만료일 자동 산정, 1가입/2가입 분리' },
    { code: 'MN-310', depth2: '', depth3: '매칭 대상자 검색', depth4: '등급별 매칭 룰 적용(+1단계 제한), 성별/나이/지역/학력 필터, 매칭 제외 조건 설정' },
    { code: 'MN-311', depth2: '', depth3: '매칭 요청/수락/거절', depth4: '프로필 발송, 72시간 무응답 자동 거절, 쌍방 수락 시 미팅 생성' },
    { code: 'MN-312', depth2: '', depth3: '안심번호 관리', depth4: '미팅 수락 시 050x 자동 발급, 교제 종료/거절 시 자동 회수' },
    { code: 'MN-313', depth2: '', depth3: '교제 관리', depth4: '임시교제 등록, 21일 경과 시 확정 촉구 알림, 교제 확정/파기 처리' },
    { code: 'MN-400', depth2: '인증관리', depth3: '인증 현황 대시보드', depth4: '전체 인증 진행률, 서류별 완료/미완료 현황, 미인증 회원 알림' },
    { code: 'MN-401', depth2: '', depth3: '서류인증 등록', depth4: '매니저 직접등록(수동), 회원 자동인증(스크래핑 API 연동), PDF 다운로드/뷰어' },
    { code: 'MN-402', depth2: '', depth3: '인증 자동화 설정', depth4: '4대 서류 Pass 시 [활동] 자동 전환 룰, 간편인증(카카오/PASS) 연동 관리' },
    { code: 'MN-500', depth2: '유입DB 분배 관리', depth3: '[신규] 채널별 유입 자동 연동', depth4: 'API/웹훅(Webhook) 연동 관리, 채널별 실시간 유입 로그 모니터링, 비정상 DB 차단 룰 설정' },
    { code: 'MN-501', depth2: '', depth3: '중복DB 자동 수거', depth4: '휴대폰 번호 기반 실시간 중복 탐지, 소스외 자동 이관, 기존 담당 매니저 알림' },
    { code: 'MN-502', depth2: '', depth3: '매니저 분배', depth4: '자동 분배(라운드로빈/가중치), 수동 분배, 분배 이력 조회' },
    { code: 'MN-600', depth2: '실적·통계', depth3: '매출 리포트', depth4: '일별/월별/분기별 매출 현황, 가입비 수납 현황' },
    { code: 'MN-601', depth2: '', depth3: '컨설턴트 실적', depth4: '매니저별 실적 랭킹, 컨택 전환율 분석, 미팅 전환율, 가입 전환율' },
    { code: 'MN-602', depth2: '', depth3: '운영 대시보드', depth4: '회원 현황 통계, 매칭 성공률, 클레임 발생률' },
    { code: 'MN-700', depth2: 'CS/클레임', depth3: '클레임 접수/처리', depth4: '클레임 유형 분류, 처리 상태 추적, 담당자 배정' },
    { code: 'MN-701', depth2: '', depth3: '탈회 처리', depth4: '탈회 신청서 전자서명, 위약금 자동 산정(계약일 기준), 환불금 계산, 정산팀/법무팀 연계' },
    { code: 'MN-800', depth2: '인사관리', depth3: '매니저 성과 관리', depth4: '매니저별 KPI 대시보드(컨택수/미팅수/가입전환율/매칭성공률), 월별 성과 추이, 목표 대비 달성률' },
    { code: 'MN-801', depth2: '', depth3: '급여 산정', depth4: '기본급 + 성과급 자동 계산, 인센티브 산정(가입 건당/매칭 성공 건당), 급여 명세서 생성' },
    { code: 'MN-802', depth2: '', depth3: '인사 평가', depth4: '분기별/반기별 인사 평가 등록, 평가 이력 조회, 승진/보직 변경 이력' },
    { code: 'MN-803', depth2: '', depth3: '근태 관리', depth4: '출퇴근 기록, 연차/휴가 관리, 근무 시간 통계' },
    { code: 'MN-900', depth2: '설정/관리', depth3: '사용자 권한', depth4: '역할별 접근 권한 설정(관리자/매니저/인포팀/매칭팀/CS팀/인사팀)' },
    { code: 'MN-901', depth2: '', depth3: '시스템 설정', depth4: '프로그램/등급 설정, 알림 템플릿 관리, 시스템 로그 조회' }
  ],
  roles: ['관리자','매니저','인포팀','매칭팀','CS팀','인사팀','경영진'],
  permissions: [
    { menu: '대시보드',       access: ['●','●','●','●','●','●','●'] },
    { menu: '준회원 관리',    access: ['●','●','○','△','✕','✕','○'] },
    { menu: '정회원 관리',    access: ['●','△','●','●','△','✕','○'] },
    { menu: '┗ 매칭 기능',   access: ['●','✕','✕','●','✕','✕','○'] },
    { menu: '┗ 안심번호',    access: ['●','✕','✕','●','✕','✕','✕'] },
    { menu: '┗ 교제 관리',   access: ['●','✕','✕','●','✕','✕','○'] },
    { menu: '┗ 계약 관리',   access: ['●','✕','●','✕','✕','✕','○'] },
    { menu: '인증관리',       access: ['●','△','●','✕','✕','✕','○'] },
    { menu: '유입DB 분배',   access: ['●','○','●','✕','✕','✕','○'] },
    { menu: '실적·통계',     access: ['●','○','○','○','○','○','●'] },
    { menu: 'CS/클레임',     access: ['●','✕','✕','✕','●','✕','○'] },
    { menu: '인사관리',       access: ['●','✕','✕','✕','✕','●','●'] },
    { menu: '┗ 급여 산정',   access: ['●','✕','✕','✕','✕','●','●'] },
    { menu: '┗ 근태 관리',   access: ['●','○','✕','✕','✕','●','○'] },
    { menu: '설정/관리',      access: ['●','✕','△','✕','✕','✕','✕'] }
  ],
  improvements: [
    { area: '계약 시작일', before: '매니저가 임의로 계약 시작일 입력/변경 가능', after: '인포팀 전산 생성일 = 계약 시작일 자동 고정(Lock)', impact: '실적 이월 방지, 위약금 산정 정확도 100%', dept: '인포팀', priority: 'Critical' },
    { area: '결제 체계', before: '1차/2차 가입비가 분리 관리되지 않음', after: '1가입(횟수제)/2가입(기간제) 분리 결제 + 통합 릴레이션 DB', impact: '결제 이력 추적 가능, 환불 계산 자동화', dept: '상담/인포/경영', priority: 'Critical' },
    { area: '회원 상태', before: '상태값 수동 변경, 프로필 발송 수동 제어', after: '상태값 자동 변경 + 프로필 발송 Lock 자동화', impact: '매칭 오류 방지, 보류 회원 매칭 차단', dept: '매칭/관리자', priority: 'High' },
    { area: '회원 상세', before: '부서별 별도 화면에서 정보 분산 조회', after: '원페이지(One-Page) 통합 회원 상세 뷰', impact: '부서간 정보 사일로 해소, 업무 효율 향상', dept: '상담/매칭/CS', priority: 'High' },
    { area: 'CS/환불', before: '클레임→탈회→환불 각각 수동 처리', after: '원스톱 파이프라인 + 전자서명 내재화', impact: '처리 시간 단축, 법적 분쟁 소지 차단', dept: 'CS/법무/경영', priority: 'Medium' },
    { area: '매칭 필터', before: '매칭 대상자 수동 검색/선별', after: '등급 +1단계 제한 등 자동 필터링', impact: '매칭 품질 향상, 부적합 매칭 차단', dept: '매칭팀', priority: 'Medium' },
    { area: '서류 인증', before: '매니저가 회원에게 서류 직접 요청/수집', after: '스크래핑 API 자동 발급 + 간편인증', impact: '서류 수집 시간 90% 단축', dept: '인증팀/인포팀', priority: 'High' },
    { area: '알림 체계', before: '수동 문자/카톡 발송 또는 미발송', after: '상태별 자동 알림톡/SMS 발송 체계', impact: '회원 만족도 향상, 누락 방지', dept: '전체', priority: 'High' },
    { area: '중복DB 수거', before: '관리자가 눈으로 중복 번호 확인 후 수동 소스외 처리', after: '휴대폰 번호 기반 실시간 중복 탐지 → 소스외 자동 이관 + 기존 담당자 알림', impact: '단순 반복 업무 100% 자동화, 가입 전환율 향상', dept: '상담/인포', priority: 'Critical' },
    { area: '채널별 유입 연동', before: '마케팅 채널(메타, 카카오, 랜딩페이지 등)에서 DB를 수동 엑셀 다운로드 후 시스템에 직접 입력', after: 'API/웹훅으로 채널별 DB 자동 연동 + 실시간 유입 로그 모니터링 + 비정상 DB(스팸/테스트) 자동 차단', impact: 'DB 유입 즉시 분배 가능, 수동 입력 제거, 스팸 DB 사전 차단', dept: '마케팅/인포', priority: 'Critical' }
  ],
  apis: [
    {
      id: 1, icon: '📄', name: '공공데이터 및 마이데이터 스크래핑 API',
      priority: 'Critical',
      desc: '기존 인증팀의 수동 위임장 기반 주민센터 대행 발급 업무를 전면 폐지하고 자동화',
      features: ['간편인증(카카오/PASS/토스) 동의 기반 서류 자동 수합','혼인관계·가족관계증명서, 졸업증명서, 건강보험자격득실확인서, 소득금액증명원 실시간 발급','서류 진위여부 자동 검증'],
      effect: '4대 필수 서류 모두 Pass 시 관리자 개입 없이 [인증중] → [활동] 자동 전환, 매칭 락(Lock) 해제',
      docs: [
        { name: '혼인관계증명서', api: '대법원 전자가족관계등록시스템', method: '스크래핑' },
        { name: '가족관계증명서', api: '대법원 전자가족관계등록시스템', method: '스크래핑' },
        { name: '대학/대학원 졸업증명서', api: '학교 발급 시스템', method: '스크래핑/직접등록' },
        { name: '건강보험자격득실확인서', api: '국민건강보험공단', method: 'API' },
        { name: '소득금액증명원', api: '국세청 홈택스', method: '스크래핑' },
        { name: '주민등록초본', api: '정부24 API', method: '스크래핑' }
      ],
      techStack: ['본인인증: PASS/카카오 간편인증 SDK','스크래핑: Codef API 또는 바로빌 API','저장: S3 또는 NAS (PDF 원본)','뷰어: PDF.js 기반 인라인 뷰어'],
      flow: ['회원 본인인증 요청','간편인증(카카오/PASS)','스크래핑 API 호출','공공기관 서류 자동 발급','PDF 저장 및 인증 완료']
    },
    {
      id: 2, icon: '📱', name: '안심번호(가상번호) 발급 API',
      priority: 'High',
      desc: '개인정보보호법 대응 및 매칭 시 분쟁 방지를 위한 실제 연락처 차단',
      features: ['미팅 수락(OK) 즉시 통신사/벤더 API 호출하여 안심번호(050x) 발급','양측 회원에게 임시 번호 안내','교제 거절 또는 피드백 종료 시 자동 회수(파기)'],
      effect: '회원 간 실제 연락처 노출 원천 차단, 스토킹 등 2차 피해 예방',
      docs: [],
      techStack: ['통신사 API 또는 전문 벤더사(KT 050, SK 안심번호 등)','발급/회수 자동화 배치 시스템'],
      flow: ['미팅 수락(OK)','안심번호 API 호출','양측에 번호 발급·안내','피드백 종료/거절','안심번호 자동 회수']
    },
    {
      id: 3, icon: '📥', name: '마케팅 채널 웹훅(Webhook) 연동 API',
      priority: 'Critical',
      desc: '다양한 마케팅 채널에서 유입되는 가망 고객(준회원) DB를 정제하고 영업 충돌 방지',
      features: ['카카오/네이버/메타(페이스북·인스타)/CPA 등 랜딩페이지 폼 데이터 실시간 인서트','휴대폰 번호 대조 중복 DB 실시간 필터링','비정상 DB(스팸/테스트) 자동 차단 룰'],
      effect: 'DB 유입 즉시 분배 가능, 중복 DB → 소스외 자동 이관 + 기존 담당 매니저 알림 발송',
      docs: [],
      techStack: ['Webhook Receiver (REST API 엔드포인트)','채널별 API 키 관리','실시간 중복 체크 엔진'],
      flow: ['마케팅 채널 유입','Webhook 수신','중복 번호 체크','신규 → 자동 분배','중복 → 소스외 이관 + 알림']
    },
    {
      id: 4, icon: '🔔', name: '통합 커뮤니케이션 API (알림톡/SMS/메일)',
      priority: 'High',
      desc: '수동 메시지 발송 업무를 룰 엔진(Rule Engine)과 연동하여 100% 자동화',
      features: ['부재중 5회 누적 → 타 매니저 이관 알림','보류 기한(30일) 만료 → 활동 원복 알림','프로필 발송 72시간 무응답 → 자동 거절 알림','임시교제 21일 경과 → 상태 확정 촉구 알림','미팅 확정 → 장소/시간/안심번호 자동 안내'],
      effect: '영업/보류/미팅/교제 전 단계에서 누락 없는 자동 알림 체계 구축',
      docs: [],
      techStack: ['카카오 알림톡 API (비즈메시지)','SMS 발송 API (부스트/인포뱅크 등)','이메일 발송 (SendGrid/AWS SES)','룰 엔진: 임계값(Threshold) 기반 트리거'],
      flow: ['이벤트 발생(상태변경 등)','룰 엔진 조건 체크','템플릿 매칭','알림톡/SMS 자동 발송','발송 이력 저장']
    },
    {
      id: 5, icon: '✍️', name: '전자계약 및 전자서명 API',
      priority: 'High',
      desc: '외부 시스템에 의존하던 계약/환불 파이프라인을 인트라넷 내부로 내재화',
      features: ['가입 시 정회원 계약서(고유식별정보 수집 동의 포함) 전자서명','탈회 시 탈회 신청서 및 합의서 전자서명','카카오 인증/공동인증서 기반 법적 효력 확보','서명 원본 DB 저장 및 감사 추적'],
      effect: '서명 확인 즉시 계약 시작일 전산 하드코딩, 탈회 시 고정된 계약일 기반 위약금 자동 산정 → 정산팀/법무팀 연계',
      docs: [],
      techStack: ['전자서명 API (모두싸인/이싸인/카카오페이 인증서)','공동인증서 연동 모듈','문서 원본 관리 (S3/DB BLOB)'],
      flow: ['계약서 생성','카카오/공동인증서 서명 요청','서명 완료 확인','원본 저장 + 계약일 확정','탈회 시 위약금 자동 산정']
    }
  ],
  flowcharts: {
    main: `graph LR
  A["🔍 신규\nDB 유입"] --> A1["📋 중복번호\n자동 체크"]
  A1 --> A2{"중복?"}
  A2 -->|Yes| A3["소스외\n자동 이관"]
  A2 -->|No| B["📞 상담\n컨택 배정"]
  B --> B1["1차 컨택\n(전화/카톡)"]
  B1 --> C{"응답?"}
  C -->|No| C1["부재중\n카운트 +1"]
  C1 --> C2{"5회\n누적?"}
  C2 -->|No| B1
  C2 -->|Yes| C3["🚫 결번 불가\n영구 차단"]
  C -->|Yes| D["📅 미팅\n예약"]
  D --> D1["🤝 방문상담\n(지사/카페)"]
  D1 --> E{"가입\n의사?"}
  E -->|높음| E1["💰 가입비\n결제"]
  E -->|보류| F["⏸️ 가입보류\n(30일 타이머)"]
  F -.->|만료시| F1["활동 원복\n알림 발송"]
  E -->|거절| F2["❌ DB 종료"]
  E1 --> G["📋 전자계약서\n서명"]
  G --> H["🖥️ 전산생성\n(인포팀)"]
  H --> H1["계약시작일\n= 생성일 Lock"]
  H1 --> I["📄 서류인증\n(스크래핑 API)"]
  I --> I1{"4대 서류\nPass?"}
  I1 -->|No| I2["미인증 항목\n안내 발송"]
  I1 -->|Yes| J["✅ 인증중→활동\n자동 전환"]
  J --> K["💑 매칭\n시작"]
  K --> K1["프로필 발송\n+안심번호"]
  K1 --> L{"72시간\n응답?"}
  L -->|No| L1["자동 거절"]
  L -->|수락| M["🤝 미팅\n(안심번호 안내)"]
  L -->|거절| K
  L1 --> K
  M --> N{"만남\n결과?"}
  N -->|호감| O["💕 임시교제\n(21일)"]
  O --> O1{"확정?"}
  O1 -->|Yes| O2["💍 교제확정\n→ 성혼"]
  O1 -->|No| O3["파기\n→ 재매칭"]
  O3 --> K
  N -->|거절| K
  N -->|불만| P["🛡️ CS\n클레임"]
  P --> Q{"탈회?"}
  Q -->|No| K
  Q -->|Yes| R["📝 위약금산정\n전자서명\n환불처리"]
  style A fill:#312e81,stroke:#6366f1,color:#e2e8f0
  style J fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style O2 fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style R fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style C3 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style H1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,

    membership: `graph LR
  A["📥 DB 유입\n(웹훅/수동)"] --> A1{"채널 확인"}
  A1 -->|메타 리드| A2["메타 API\n웹훅 수신"]
  A1 -->|카카오 싱크| A3["카카오 API\n웹훅 수신"]
  A1 -->|랜딩페이지| A4["폼 데이터\n인서트"]
  A1 -->|수동 입력| A5["매니저 직접\n등록"]
  A2 --> B["📋 준회원 자동 등록"]
  A3 --> B
  A4 --> B
  A5 --> B
  B --> B1{"스팸/테스트\nDB 체크"}
  B1 -->|비정상| B2["🚫 자동 차단\n(차단 로그)"]
  B1 -->|정상| C["👤 매니저 자동 배정\n(라운드로빈)"]
  C --> D["📞 1차 컨택\n(전화)"]
  D --> E{"응답?"}
  E -->|Yes| F["상담 진행\n(니즈 파악)"]
  E -->|No| G["부재중 기록\n(일시/사유)"]
  G --> G1{"부재중\n5회?"}
  G1 -->|No| G2["재컨택\n예약 등록"]
  G2 -.-> D
  G1 -->|Yes| G3["🚫 결번(불가)\n영구 차단"]
  F --> H{"미팅 의사?"}
  H -->|Yes| I["📅 미팅 예약\n(일시/장소)"]
  H -->|추후| J["재컨택\n일정 등록"]
  J -.-> D
  H -->|거절| K["❌ 가입거절\n(사유 기록)"]
  I --> L["🤝 방문상담"]
  L --> M{"가입 결정?"}
  M -->|높음| N["✅ 가입 진행예정"]
  M -->|보류| O["⏸️ 가입보류"]
  O -.-> D
  M -->|거절| K
  N --> P["💰 결제 진행"]
  style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style B2 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style N fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,

    payment: `graph LR
  A["✅ 가입 결정"] --> B["프로그램 선택"]
  B --> B1["골드/다이아/\n사파이어/프로"]
  B1 --> CT{"서비스\n계약형태"}
  CT -->|인증제| CT1{"직업 분류"}
  CT -->|횟수제| HX["횟수제 계약\n(2가입)"]
  CT -->|기간제| GG["기간제 계약\n(2가입)"]
  CT1 -->|전문직| CT2{"가입비\n100만원?"}
  CT1 -->|준전문직| CT3["인증제 2장\n(2가입 필수)"]
  CT2 -->|100만원 이하| CT4["인증제 1장\n(1가입만)"]
  CT2 -->|100만원 초과| CT5["인증제 2장\n(2가입 가능)"]
  CT4 --> C["1차 가입비 산정"]
  CT5 --> C
  CT3 --> C
  HX --> C
  GG --> C
  C --> D{"결제 방법"}
  D -->|카드| D1["PG 결제"]
  D -->|계좌이체| D2["무통장 입금"]
  D -->|분할납부| D3["분할 스케줄\n등록"]
  D1 --> E{"결제\n완료?"}
  D2 --> E
  D3 --> E
  E -->|No| F["미수금 등록\n(독촉 알림 예약)"]
  F -.-> E
  E -->|Yes| G["📋 전자계약서\n생성"]
  G --> G1["고유식별정보\n수집 동의서"]
  G1 --> G2["카카오/공동인증서\n전자서명"]
  G2 --> G3{"서명\n완료?"}
  G3 -->|No| G4["서명 요청\n재발송"]
  G4 -.-> G2
  G3 -->|Yes| H["🖥️ 전산 생성\n(인포팀)"]
  H --> H1["⚠️ 계약 시작일\n= 전산 생성일\n(자동 Lock)"]
  H1 --> H2["만료일 자동 계산\n(룰 엔진)"]
  H2 --> I["2차 가입비 산정\n(기간제)"]
  I --> J["통합 결제 이력 DB\n(1차+2차 릴레이션)"]
  J --> K["영수증/계약서\n자동 발송"]
  style H1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style G2 fill:#312e81,stroke:#6366f1,color:#e2e8f0
  style K fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style CT fill:#4338ca,stroke:#6366f1,color:#e2e8f0
  style CT4 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style CT5 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style CT3 fill:#78350f,stroke:#f59e0b,color:#e2e8f0`,

    certification: `graph LR
  A["📄 서류 인증 시작\n(정회원 전환 후)"] --> B{"인증 방법"}
  B -->|자동인증| C["회원에게\n간편인증 요청\n(SMS/알림톡)"]
  B -->|직접등록| D["매니저가\n서류 파일 업로드"]
  C --> E["회원 본인인증\n(PASS/카카오)"]
  E --> F["동의 항목 확인\n(개인정보 수집)"]
  F --> G["스크래핑 API 호출"]
  G --> G1["혼인관계증명서\n(대법원)"]
  G --> G2["가족관계증명서\n(대법원)"]
  G --> G3["건강보험자격득실\n(건보공단)"]
  G --> G4["소득금액증명원\n(홈택스)"]
  G --> G5["졸업증명서\n(학교)"]
  G1 --> H["PDF 원본 저장\n(S3/NAS)"]
  G2 --> H
  G3 --> H
  G4 --> H
  G5 --> H
  D --> H
  H --> I["서류 진위여부\n자동 검증"]
  I --> J{"검증\nPass?"}
  J -->|No| J1["반려 처리\n(재제출 요청 알림)"]
  J1 -.-> A
  J -->|Yes| K["인증 완료\n처리"]
  K --> L["인증 진행률\n업데이트"]
  L --> M{"4대 필수서류\n전체 Pass?"}
  M -->|No| M1["미인증 항목\n안내 알림 발송"]
  M1 -.-> A
  M -->|Yes| N["✅ 인증중 → 활동\n자동 전환"]
  N --> O["매칭 Lock 해제\n(프로필 발송 가능)"]
  style G fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style N fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style J1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,

    matching: `graph LR
  A["💑 매칭 요청\n(매칭팀)"] --> B["대상자 검색\n(성별/나이/지역/학력)"]
  B --> C["자동 필터링"]
  C --> C1["등급 +1단계\n제한 적용"]
  C1 --> C2["매칭 제외\n조건 체크"]
  C2 --> C3["기매칭 이력\n중복 제거"]
  C3 --> D["매칭 후보\n리스트 생성"]
  D --> E["매칭 대상자\n선정 (매칭팀)"]
  E --> F["프로필 발송\n(양측 회원)"]
  F --> F1["안심번호(050x)\n자동 발급"]
  F1 --> G{"72시간 내\n응답?"}
  G -->|무응답| H["⚠️ 자동 거절\n알림 발송"]
  H --> D
  G -->|거절| I["거절 사유 기록\n→ 다음 후보"]
  I --> D
  G -->|쌍방 수락| J["✅ 매칭 성사"]
  J --> K["미팅 일정 조율\n(장소/시간)"]
  K --> K1["미팅 확정\n알림 발송\n(안심번호 포함)"]
  K1 --> L["🤝 미팅 진행"]
  L --> M{"만남 피드백?"}
  M -->|호감| N["💕 임시교제\n등록"]
  N --> N1["21일 타이머\n시작"]
  N1 --> N2{"21일\n경과?"}
  N2 -->|Yes| N3["확정 촉구\n알림 발송"]
  N3 --> N4{"교제\n확정?"}
  N4 -->|Yes| O["💍 교제 확정\n(안심번호 유지)"]
  N4 -->|No| O1["교제 파기\n(안심번호 회수)"]
  O1 --> D
  M -->|거절| P["거절 피드백\n기록"]
  P --> P1["안심번호\n자동 회수"]
  P1 --> D
  style C1 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style J fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style O fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style H fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,

    claim: `graph LR
  A["🛡️ 클레임 접수\n(전화/게시판/방문)"] --> B["접수 정보 기록\n(일시/채널/내용)"]
  B --> C["유형 자동 분류"]
  C --> C1["서비스 불만"]
  C --> C2["매칭 불만"]
  C --> C3["환불 요청"]
  C --> C4["기타"]
  C1 --> D["CS 담당자\n자동 배정"]
  C2 --> D
  C3 --> D
  C4 --> D
  D --> E["1차 상담\n진행"]
  E --> F{"해결\n가능?"}
  F -->|Yes| G["해결 조치\n기록"]
  G --> G1["만족도 조사\n발송"]
  G1 --> G2["종결 처리"]
  F -->|No| H["에스컬레이션\n(팀장/법무)"]
  H --> I{"탈회\n요청?"}
  I -->|No| J["추가 조치\n협의"]
  J --> E
  I -->|Yes| K["탈회 심사\n(법무팀 검토)"]
  K --> L["⚠️ 위약금 자동 산정\n(계약시작일 기준)"]
  L --> L1["잔여 횟수/기간\n환불금 계산"]
  L1 --> L2["방어율 적용\n(위약금 차감)"]
  L2 --> M["탈회 신청서\n전자서명"]
  M --> M1["합의서\n전자서명"]
  M1 --> N["환불 처리\n(정산팀)"]
  N --> O["탈회 완료\n(상태 변경)"]
  O --> O1["안심번호\n전체 회수"]
  style A fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style L fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style G2 fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style M fill:#312e81,stroke:#6366f1,color:#e2e8f0`,

    distribute: `graph LR
  A["📥 마케팅 채널\nDB 유입"] --> A1{"유입 채널\n확인"}
  A1 -->|메타 리드| A2["Facebook/Instagram\n웹훅 수신"]
  A1 -->|카카오| A3["카카오 싱크\nAPI 수신"]
  A1 -->|네이버| A4["네이버 폼\n웹훅 수신"]
  A1 -->|CPA| A5["CPA 제휴\nAPI 수신"]
  A1 -->|랜딩페이지| A6["자사 랜딩\n폼 데이터"]
  A2 --> B["📋 DB 정규화\n(필드 매핑)"]
  A3 --> B
  A4 --> B
  A5 --> B
  A6 --> B
  B --> B1{"스팸/테스트\nDB 필터"}
  B1 -->|비정상| B2["🚫 자동 차단\n(로그 기록)"]
  B1 -->|정상| C{"휴대폰 번호\n중복 확인"}
  C -->|고유| D["분배 대기열\n(Queue)"]
  C -->|중복| E{"기존 담당자\n존재?"}
  E -->|Yes| F["소스외 계정\n자동 이관"]
  E -->|No| D
  F --> G["기존 담당 매니저\n자동 알림 발송"]
  G --> G1["📢 알림: 고객OOO\n추가 채널 유입"]
  D --> H{"분배 방식"}
  H -->|자동| I["라운드로빈\n균등 분배"]
  H -->|가중치| I1["실적 기반\n가중 분배"]
  H -->|수동| J["관리자 직접\n매니저 지정"]
  I --> K["매니저 배정 완료"]
  I1 --> K
  J --> K
  K --> K1["배정 알림 발송\n(매니저)"]
  K1 --> L["📞 상담 컨택 시작"]
  L --> L1["실시간 유입 로그\n모니터링 대시보드"]
  style B2 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style F fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style G fill:#312e81,stroke:#6366f1,color:#e2e8f0
  style K fill:#064e3b,stroke:#10b981,color:#e2e8f0`,

    hrPerformance: `graph LR
  A["👔 인사관리\n월간 정산 시작"] --> B["매니저별 KPI\n자동 집계"]
  B --> B1["컨택수 집계\n(일/주/월)"]
  B --> B2["미팅수 집계\n(예약/완료/노쇼)"]
  B --> B3["가입전환율\n(컨택→가입)"]
  B --> B4["매칭성공률\n(발송→성사)"]
  B1 --> C["성과 대시보드\n업데이트"]
  B2 --> C
  B3 --> C
  B4 --> C
  C --> D{"목표\n달성?"}
  D -->|달성| E["🏆 인센티브\n자동 산정"]
  D -->|미달| F["⚠️ 성과 부진\n알림"]
  E --> G["가입 건당\n인센티브 계산"]
  G --> G1["매칭 성공 건당\n인센티브 계산"]
  G1 --> H["급여 산정\n(기본급+성과급)"]
  F --> F1["개선 면담\n예약"]
  F1 -.-> H
  H --> I["급여 명세서\n자동 생성"]
  I --> J["인사팀 검토\n/승인"]
  J --> K["급여 확정\n/지급"]
  K --> L["분기별\n인사 평가 연계"]
  style E fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style F fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style H fill:#312e81,stroke:#6366f1,color:#e2e8f0`,

    statistics: `graph LR
  A["📈 실적/통계\n데이터 수집"] --> B["일별 자동 집계\n(배치 스케줄러)"]
  B --> C["매출 데이터"]
  B --> D["가입 데이터"]
  B --> E["매칭 데이터"]
  B --> F["CS 데이터"]
  C --> G["매출 리포트\n(일/월/분기)"]
  D --> H["가입 현황 리포트\n(채널별/매니저별)"]
  E --> I["매칭 현황 리포트\n(성공률/소요일수)"]
  F --> J["CS 리포트\n(유형별/처리율)"]
  G --> K["📊 운영 대시보드\n(통합 뷰)"]
  H --> K
  I --> K
  J --> K
  K --> L{"이상치\n감지?"}
  L -->|Yes| M["⚠️ 관리자\n자동 알림"]
  L -->|No| N["정상 운영"]
  K --> O["엑셀/PDF\n리포트 다운로드"]
  K --> P["경영진 주간\n리포트 자동 발송"]
  style K fill:#312e81,stroke:#6366f1,color:#e2e8f0
  style M fill:#78350f,stroke:#f59e0b,color:#e2e8f0`,

    menuTree: `graph LR
  ROOT["🏢 퍼플스 인트라넷"]
  ROOT --> MN1["📊 대시보드\\nMN-100"]
  ROOT --> MN2["👤 준회원 관리\\nMN-200"]
  ROOT --> MN3["👥 정회원 관리\\nMN-300"]
  ROOT --> MN4["📄 인증관리\\nMN-400"]
  ROOT --> MN5["📥 유입DB 분배\\nMN-500"]
  ROOT --> MN6["📈 실적·통계\\nMN-600"]
  ROOT --> MN7["🛡️ CS/클레임\\nMN-700"]
  ROOT --> MN8["👔 인사관리\\nMN-800"]
  ROOT --> MN9["⚙️ 설정/관리\\nMN-900"]

  MN1 --> MN100["종합 현황판"]

  MN2 --> MN200["준회원 목록"]
  MN2 --> MN201["준회원 상세"]
  MN2 --> MN202["정회원 전환"]

  MN3 --> MN300["정회원 목록"]
  MN3 --> MN301["정회원 상세\\n(원페이지 뷰)"]
  MN3 --> MN302["계약 관리"]
  MN3 --> MN310["매칭 대상자 검색"]
  MN3 --> MN311["매칭 요청/수락/거절"]
  MN3 --> MN312["안심번호 관리"]
  MN3 --> MN313["교제 관리"]

  MN4 --> MN400["인증 현황\\n대시보드"]
  MN4 --> MN401["서류인증 등록"]
  MN4 --> MN402["인증 자동화 설정"]

  MN5 --> MN500["채널별 유입\\n자동 연동"]
  MN5 --> MN501["중복DB\\n자동 수거"]
  MN5 --> MN502["매니저 분배"]

  MN6 --> MN600["매출 리포트"]
  MN6 --> MN601["컨설턴트 실적"]
  MN6 --> MN602["운영 대시보드"]

  MN7 --> MN700["클레임\\n접수/처리"]
  MN7 --> MN701["탈회 처리"]

  MN8 --> MN800["매니저\\n성과 관리"]
  MN8 --> MN801["급여 산정"]
  MN8 --> MN802["인사 평가"]
  MN8 --> MN803["근태 관리"]

  MN9 --> MN900["사용자 권한"]
  MN9 --> MN901["시스템 설정"]

  style ROOT fill:#312e81,stroke:#6366f1,color:#e2e8f0
  style MN1 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN2 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN3 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN4 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN5 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN6 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN7 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN8 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style MN9 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0`,
    statusAssociate: `graph TD
  subgraph ENTRY["🔵 연락전"]
    A1["📥 컨텍전\\n신규 DB 유입"]
  end
  subgraph CONSULT["🟡 상담진행"]
    B1["📵 부재중\\n(미연락)"]
    B2["🔽 낮음\\n(컨텍)"]
    B3["➖ 보통\\n(컨텍)"]
    B4["🔼 높음\\n(컨텍)"]
    B5["⏳ 장기상담\\n(컨텍)"]
  end
  subgraph VISIT["🟢 방문상담"]
    C1["🤝 방문상담"]
  end
  subgraph JOIN["🔵 가입/보류"]
    D1["⏸️ 가입보류\\n(컨텍)"]
    D2["💰 가입중"]
    D3["✅ 가입완료"]
  end
  subgraph BLOCKED["🔴 진행불가"]
    E1["📵 결번 불가"]
    E2["💍 기혼 불가"]
    E3["🚫 기타 불가"]
  end
  subgraph CLEANUP["⚪ DB정리/만료"]
    F1["🔄 변경"]
    F2["⏰ 기간만료\\n재컨텍\\n(출처태그 구분)"]
  end

  A1 -->|"첫 통화 시도"| B1
  A1 -->|"통화 연결"| B2
  A1 -->|"통화 연결"| B3
  A1 -->|"통화 연결"| B4
  B1 -.->|"⚙️ 5회 부재"| E1
  B2 -->|"의사 상승"| B3
  B3 -->|"의사 상승"| B4
  B4 -->|"기간 장기화"| B5
  B5 -.->|"⚙️ 90일x2회\n[태그:장기상담]"| F2
  B4 -->|"미팅 예약"| C1
  B3 -->|"미팅 예약"| C1
  C1 -->|"가입 보류"| D1
  C1 -->|"가입 진행"| D2
  C1 -->|"기혼 확인"| E2
  D1 -.->|"⚙️ 30일x1회\n[태그:가입보류]"| F2
  D2 -->|"전액 결제"| D3
  D2 -.->|"⚙️ 30일 미납"| E3
  D3 -->|"정회원DB 등록"| REGULAR["🎉 정회원 전환\\n(신규)"]
  F2 -.->|"쿨타임 후 재배정"| A1

  style A1 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style D3 fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style REGULAR fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style E1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style E2 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style E3 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style B5 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style D1 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style F2 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style B1 fill:#78350f,stroke:#f59e0b,color:#e2e8f0`,

    statusRegular: `graph TD
  subgraph AUTH["🔵 인증전"]
    R1["🆕 신규\\n정회원DB 등록"]
    R2["📄 인증중\\n서류인증 진행"]
    R3["⏳ 활동대기\\n2가입 대기"]
  end
  subgraph ACTIVE["🟢 활동"]
    R4["✅ 활동\\n매칭 서비스"]
  end
  subgraph DATE["💜 교제"]
    R5["💕 임시교제\\n2번째 만남"]
    R6["❤️ 교제\\n3번째 만남"]
    R7["🌐 외부교제"]
  end
  subgraph HOLD["🟡 보류"]
    R8["⏸️ 약정보류"]
    R9["⏸️ 임시보류\\n2달 이하"]
    R10["⏸️ 장기보류\\n2달 이상"]
    R11["🚫 강제보류\\n범죄/비매너"]
  end
  subgraph EXIT["🔴 탈회"]
    R12["📝 탈회진행"]
    R13["💸 탈회"]
  end
  subgraph EXPIRE["⚪ 만료"]
    R14["📋 약정만료\\n횟수 소진"]
    R15["⏰ 자동만료"]
    R16["📋 만료\\n기간만료"]
    R17["💕 만료교제"]
    R18["🌐 외부결혼"]
    R19["⚖️ 소송중"]
  end
  subgraph WEDDING["🎊 성혼"]
    R20["💍 결혼예정"]
    R21["🎊 성혼\\n성혼비 완납"]
  end

  R1 -->|"서류 접수"| R2
  R2 -->|"인증 완료"| R4
  R3 -.->|"⚙️ 90일 미진행"| R15
  R3 -->|"2가입 진행"| R4
  R14 -->|"활동대기 전환"| R3

  R4 -->|"2번째 만남"| R5
  R5 -->|"3번째 만남"| R6
  R5 -.->|"⚙️ 21일 Lock"| R4
  R5 -->|"결렬"| R4
  R6 -->|"결렬"| R4
  R6 -->|"결혼"| R20
  R7 -->|"결렬"| R4
  R4 -->|"외부교제 통보"| R7

  R4 -->|"횟수제 일시정지"| R8
  R4 -->|"기간제 일시정지"| R9
  R9 -->|"2달 초과"| R10
  R4 -->|"문제 회원"| R11
  R8 -->|"복귀"| R4
  R9 -->|"복귀"| R4
  R10 -->|"복귀"| R4
  R11 -->|"회장님 해제"| R4

  R4 -->|"CS 접수"| R12
  R12 -.->|"⚙️ 7영업일 SLA"| R13

  R4 -->|"횟수 소진"| R14
  R4 -->|"기간 만료"| R16
  R16 -->|"준회원 재컨텍 유입"| REENTRY["📥 준회원\\n재컨텍 DB"]
  R6 -->|"만료일 도래"| R17
  R17 -->|"결혼"| R21
  R4 -->|"법적 분쟁"| R19
  R19 -.->|"⚙️ 프로필 전면 차단"| R19
  R19 -->|"소송 종료"| R4

  R20 -->|"성혼비 완납"| R21

  style R1 fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
  style R4 fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style R21 fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style R20 fill:#064e3b,stroke:#10b981,color:#e2e8f0
  style R13 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style R11 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style R19 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
  style R15 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style R8 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style R9 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style R10 fill:#78350f,stroke:#f59e0b,color:#e2e8f0
  style R5 fill:#6b21a8,stroke:#a855f7,color:#e2e8f0
  style R6 fill:#6b21a8,stroke:#a855f7,color:#e2e8f0`
  },

  tables: [
    { name:'TB_ASSOCIATE', desc:'준회원(DB) 마스터', cols:[
      {col:'assoc_id',type:'INT',pk:true,desc:'준회원 PK'},
      {col:'name',type:'VARCHAR(30)',pk:false,desc:'이름'},
      {col:'phone',type:'VARCHAR(15)',pk:false,desc:'휴대폰(UK, 중복체크 키)'},
      {col:'gender',type:'CHAR(1)',pk:false,desc:'성별(M/F)'},
      {col:'birth_date',type:'DATE',pk:false,desc:'생년월일'},
      {col:'education',type:'VARCHAR(20)',pk:false,desc:'최종학력'},
      {col:'school',type:'VARCHAR(50)',pk:false,desc:'출신학교'},
      {col:'job',type:'VARCHAR(30)',pk:false,desc:'직업'},
      {col:'company',type:'VARCHAR(50)',pk:false,desc:'직장명'},
      {col:'region',type:'VARCHAR(20)',pk:false,desc:'거주지역'},
      {col:'marital_status',type:'VARCHAR(10)',pk:false,desc:'혼인상태(초혼/재혼)'},
      {col:'status',type:'VARCHAR(30)',pk:false,desc:'상태(컨텍전,부재중 등)'},
      {col:'channel',type:'VARCHAR(50)',pk:false,desc:'유입경로(마케팅채널)'},
      {col:'branch_id',type:'INT',pk:false,desc:'소속지사 FK'},
      {col:'consultant_id',type:'INT',pk:false,desc:'담당매니저 FK'},
      {col:'dist_date',type:'DATETIME',pk:false,desc:'분배일시'},
      {col:'regist_date',type:'DATETIME',pk:false,desc:'DB등록일'},
      {col:'last_contact',type:'DATETIME',pk:false,desc:'최근컨텍일'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'},
      {col:'updated_at',type:'DATETIME',pk:false,desc:'수정일시'}
    ]},
    { name:'TB_REGULAR', desc:'정회원 마스터', cols:[
      {col:'regular_id',type:'INT',pk:true,desc:'정회원 PK'},
      {col:'member_code',type:'VARCHAR(10)',pk:false,desc:'회원번호(M26001)'},
      {col:'assoc_id',type:'INT',pk:false,desc:'준회원 FK(전환 이력)'},
      {col:'name',type:'VARCHAR(30)',pk:false,desc:'이름'},
      {col:'phone',type:'VARCHAR(15)',pk:false,desc:'휴대폰'},
      {col:'gender',type:'CHAR(1)',pk:false,desc:'성별'},
      {col:'birth_date',type:'DATE',pk:false,desc:'생년월일'},
      {col:'photo_url',type:'VARCHAR(255)',pk:false,desc:'프로필사진 URL'},
      {col:'brand',type:'VARCHAR(20)',pk:false,desc:'브랜드(퍼플스/디노블/르매리)'},
      {col:'education',type:'VARCHAR(20)',pk:false,desc:'최종학력'},
      {col:'school',type:'VARCHAR(50)',pk:false,desc:'출신학교'},
      {col:'job',type:'VARCHAR(30)',pk:false,desc:'직업'},
      {col:'company',type:'VARCHAR(50)',pk:false,desc:'직장명'},
      {col:'region',type:'VARCHAR(20)',pk:false,desc:'거주지역'},
      {col:'religion',type:'VARCHAR(10)',pk:false,desc:'종교'},
      {col:'height',type:'SMALLINT',pk:false,desc:'키(cm)'},
      {col:'marital_history',type:'VARCHAR(10)',pk:false,desc:'혼인이력(초혼/재혼)'},
      {col:'family_wealth',type:'VARCHAR(20)',pk:false,desc:'가족자산'},
      {col:'personal_wealth',type:'VARCHAR(20)',pk:false,desc:'개인자산'},
      {col:'program',type:'VARCHAR(20)',pk:false,desc:'프로그램(전문직/정규 등)'},
      {col:'contract_type',type:'VARCHAR(10)',pk:false,desc:'계약유형(횟수/기간/인증)'},
      {col:'status',type:'VARCHAR(20)',pk:false,desc:'활동상태'},
      {col:'consultant_id',type:'INT',pk:false,desc:'상담매니저 FK'},
      {col:'matching_mgr_id',type:'INT',pk:false,desc:'매칭매니저 FK'},
      {col:'join_date',type:'DATE',pk:false,desc:'가입일(=전산생성일, Lock)'},
      {col:'expiry_date',type:'DATE',pk:false,desc:'만료일(자동계산)'},
      {col:'meeting_count',type:'INT',pk:false,desc:'누적미팅수'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'},
      {col:'updated_at',type:'DATETIME',pk:false,desc:'수정일시'}
    ]},
    { name:'TB_EMPLOYEE', desc:'사원(매니저) 마스터', cols:[
      {col:'emp_id',type:'INT',pk:true,desc:'사원 PK'},
      {col:'name',type:'VARCHAR(30)',pk:false,desc:'사원명'},
      {col:'emp_code',type:'VARCHAR(10)',pk:false,desc:'사번'},
      {col:'role',type:'VARCHAR(20)',pk:false,desc:'역할(상담/매칭/인포/CS)'},
      {col:'branch_id',type:'INT',pk:false,desc:'소속지사 FK'},
      {col:'phone',type:'VARCHAR(15)',pk:false,desc:'연락처'},
      {col:'email',type:'VARCHAR(100)',pk:false,desc:'이메일'},
      {col:'is_active',type:'TINYINT',pk:false,desc:'활성여부(0/1)'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'}
    ]},
    { name:'TB_CONTACT_LOG', desc:'컨텍(상담) 이력', cols:[
      {col:'log_id',type:'BIGINT',pk:true,desc:'이력 PK'},
      {col:'assoc_id',type:'INT',pk:false,desc:'준회원 FK'},
      {col:'emp_id',type:'INT',pk:false,desc:'상담자 FK'},
      {col:'contact_type',type:'VARCHAR(10)',pk:false,desc:'방법(통화/SMS/카톡/부재)'},
      {col:'content',type:'TEXT',pk:false,desc:'상담내용'},
      {col:'result',type:'VARCHAR(30)',pk:false,desc:'결과상태'},
      {col:'contact_date',type:'DATETIME',pk:false,desc:'컨텍일시'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'}
    ]},
    { name:'TB_MEETING', desc:'미팅 관리', cols:[
      {col:'meeting_id',type:'INT',pk:true,desc:'미팅 PK'},
      {col:'assoc_id',type:'INT',pk:false,desc:'준회원 FK(방문상담)'},
      {col:'regular_id',type:'INT',pk:false,desc:'정회원 FK(매칭미팅)'},
      {col:'intro_id',type:'INT',pk:false,desc:'소개장 FK'},
      {col:'meeting_type',type:'VARCHAR(10)',pk:false,desc:'유형(방문상담/매칭미팅)'},
      {col:'meeting_date',type:'DATETIME',pk:false,desc:'미팅일시'},
      {col:'place',type:'VARCHAR(100)',pk:false,desc:'장소'},
      {col:'registrar_id',type:'INT',pk:false,desc:'등록자(매니저) FK'},
      {col:'pre_confirm',type:'VARCHAR(10)',pk:false,desc:'사전확인(확인완료/미확인)'},
      {col:'feeling',type:'TEXT',pk:false,desc:'소감/느낌'},
      {col:'result',type:'VARCHAR(10)',pk:false,desc:'결과(정상/펑크/취소/노쇼)'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'}
    ]},
    { name:'TB_INTRODUCTION', desc:'소개장(매칭 요청)', cols:[
      {col:'intro_id',type:'INT',pk:true,desc:'소개장 PK'},
      {col:'requester_id',type:'INT',pk:false,desc:'요청회원 FK'},
      {col:'target_id',type:'INT',pk:false,desc:'대상회원 FK'},
      {col:'target_mgr_id',type:'INT',pk:false,desc:'대상회원 매니저 FK'},
      {col:'profile_sent',type:'TINYINT',pk:false,desc:'프로필발송여부'},
      {col:'profile_sent_date',type:'DATETIME',pk:false,desc:'프로필발송일'},
      {col:'result',type:'VARCHAR(10)',pk:false,desc:'결과(OK/거절/대기)'},
      {col:'result_date',type:'DATETIME',pk:false,desc:'결과일'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'등록일시'}
    ]},
    { name:'TB_PAYMENT', desc:'결제/가입비 관리', cols:[
      {col:'payment_id',type:'INT',pk:true,desc:'결제 PK'},
      {col:'regular_id',type:'INT',pk:false,desc:'정회원 FK'},
      {col:'payment_type',type:'VARCHAR(10)',pk:false,desc:'유형(1가입/2가입/추가)'},
      {col:'program',type:'VARCHAR(20)',pk:false,desc:'프로그램'},
      {col:'amount',type:'INT',pk:false,desc:'결제금액'},
      {col:'paid_amount',type:'INT',pk:false,desc:'납부금액'},
      {col:'unpaid_amount',type:'INT',pk:false,desc:'미수금'},
      {col:'pay_method',type:'VARCHAR(10)',pk:false,desc:'결제수단(카드/현금/이체)'},
      {col:'pay_date',type:'DATE',pk:false,desc:'결제일'},
      {col:'receipt_no',type:'VARCHAR(30)',pk:false,desc:'영수증번호'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'}
    ]},
    { name:'TB_CERT_DOC', desc:'인증서류 관리', cols:[
      {col:'cert_id',type:'INT',pk:true,desc:'인증 PK'},
      {col:'regular_id',type:'INT',pk:false,desc:'정회원 FK'},
      {col:'doc_name',type:'VARCHAR(50)',pk:false,desc:'서류명'},
      {col:'status',type:'VARCHAR(10)',pk:false,desc:'상태(미등록/등록완료)'},
      {col:'method',type:'VARCHAR(10)',pk:false,desc:'등록방법(직접/자동스크래핑)'},
      {col:'issue_date',type:'DATE',pk:false,desc:'발급일자'},
      {col:'issuer',type:'VARCHAR(50)',pk:false,desc:'발급처'},
      {col:'file_url',type:'VARCHAR(255)',pk:false,desc:'파일저장경로(S3)'},
      {col:'file_name',type:'VARCHAR(100)',pk:false,desc:'원본파일명'},
      {col:'registered_by',type:'INT',pk:false,desc:'등록자 FK'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'등록일시'}
    ]},
    { name:'TB_STATUS_HISTORY', desc:'상태변경 이력(Audit Log)', cols:[
      {col:'history_id',type:'BIGINT',pk:true,desc:'이력 PK'},
      {col:'target_type',type:'VARCHAR(10)',pk:false,desc:'대상구분(준회원/정회원)'},
      {col:'target_id',type:'INT',pk:false,desc:'대상 PK'},
      {col:'prev_status',type:'VARCHAR(30)',pk:false,desc:'이전상태'},
      {col:'new_status',type:'VARCHAR(30)',pk:false,desc:'변경상태'},
      {col:'reason',type:'VARCHAR(200)',pk:false,desc:'변경사유'},
      {col:'processor_id',type:'INT',pk:false,desc:'처리자 FK'},
      {col:'changed_at',type:'DATETIME',pk:false,desc:'변경일시'}
    ]},
    { name:'TB_DISTRIBUTE', desc:'회원분배 이력', cols:[
      {col:'dist_id',type:'INT',pk:true,desc:'분배 PK'},
      {col:'assoc_id',type:'INT',pk:false,desc:'준회원 FK'},
      {col:'emp_id',type:'INT',pk:false,desc:'배정매니저 FK'},
      {col:'dist_type',type:'VARCHAR(10)',pk:false,desc:'분배유형(자동/수동)'},
      {col:'is_duplicate',type:'TINYINT',pk:false,desc:'중복DB여부(0/1)'},
      {col:'dup_original_id',type:'INT',pk:false,desc:'원본회원 FK(중복시)'},
      {col:'dist_date',type:'DATETIME',pk:false,desc:'분배일시'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'}
    ]},
    { name:'TB_NOTIFICATION', desc:'알림 발송 이력', cols:[
      {col:'noti_id',type:'BIGINT',pk:true,desc:'알림 PK'},
      {col:'recipient_type',type:'VARCHAR(10)',pk:false,desc:'수신대상(매니저/회원)'},
      {col:'recipient_id',type:'INT',pk:false,desc:'수신자 PK'},
      {col:'channel',type:'VARCHAR(10)',pk:false,desc:'발송채널(카카오/SMS)'},
      {col:'template',type:'VARCHAR(50)',pk:false,desc:'알림 템플릿코드'},
      {col:'title',type:'VARCHAR(100)',pk:false,desc:'알림제목'},
      {col:'content',type:'TEXT',pk:false,desc:'알림내용'},
      {col:'status',type:'VARCHAR(10)',pk:false,desc:'발송상태(대기/성공/실패)'},
      {col:'sent_at',type:'DATETIME',pk:false,desc:'발송일시'},
      {col:'created_at',type:'DATETIME',pk:false,desc:'생성일시'}
    ]},
    { name:'TB_BRANCH', desc:'지사 마스터', cols:[
      {col:'branch_id',type:'INT',pk:true,desc:'지사 PK'},
      {col:'name',type:'VARCHAR(30)',pk:false,desc:'지사명'},
      {col:'address',type:'VARCHAR(200)',pk:false,desc:'주소'},
      {col:'tel',type:'VARCHAR(15)',pk:false,desc:'대표전화'},
      {col:'is_active',type:'TINYINT',pk:false,desc:'활성여부'}
    ]}
  ],
  erd: `erDiagram
  TB_BRANCH ||--o{ TB_EMPLOYEE : "소속"
  TB_BRANCH ||--o{ TB_ASSOCIATE : "소속지사"
  TB_EMPLOYEE ||--o{ TB_ASSOCIATE : "담당매니저"
  TB_EMPLOYEE ||--o{ TB_REGULAR : "상담매니저"
  TB_EMPLOYEE ||--o{ TB_REGULAR : "매칭매니저"
  TB_EMPLOYEE ||--o{ TB_CONTACT_LOG : "상담자"
  TB_EMPLOYEE ||--o{ TB_MEETING : "등록자"
  TB_ASSOCIATE ||--o{ TB_CONTACT_LOG : "상담이력"
  TB_ASSOCIATE ||--o{ TB_MEETING : "방문상담"
  TB_ASSOCIATE ||--o{ TB_DISTRIBUTE : "분배이력"
  TB_ASSOCIATE ||--o| TB_REGULAR : "정회원전환"
  TB_REGULAR ||--o{ TB_CERT_DOC : "인증서류"
  TB_REGULAR ||--o{ TB_PAYMENT : "결제이력"
  TB_REGULAR ||--o{ TB_INTRODUCTION : "매칭요청"
  TB_REGULAR ||--o{ TB_MEETING : "매칭미팅"
  TB_INTRODUCTION ||--o| TB_MEETING : "미팅연결"
  TB_ASSOCIATE }o--o{ TB_STATUS_HISTORY : "상태변경"
  TB_REGULAR }o--o{ TB_STATUS_HISTORY : "상태변경"
  TB_EMPLOYEE ||--o{ TB_NOTIFICATION : "수신알림"
  TB_DISTRIBUTE ||--o| TB_EMPLOYEE : "배정매니저"

  TB_BRANCH {
    INT branch_id PK
    VARCHAR name
  }
  TB_EMPLOYEE {
    INT emp_id PK
    VARCHAR name
    VARCHAR role
    INT branch_id FK
  }
  TB_ASSOCIATE {
    INT assoc_id PK
    VARCHAR name
    VARCHAR phone UK
    VARCHAR status
    INT consultant_id FK
    INT branch_id FK
  }
  TB_REGULAR {
    INT regular_id PK
    VARCHAR member_code
    INT assoc_id FK
    VARCHAR name
    VARCHAR status
    INT consultant_id FK
    INT matching_mgr_id FK
  }
  TB_CONTACT_LOG {
    BIGINT log_id PK
    INT assoc_id FK
    INT emp_id FK
    VARCHAR contact_type
  }
  TB_MEETING {
    INT meeting_id PK
    INT assoc_id FK
    INT regular_id FK
    INT intro_id FK
  }
  TB_INTRODUCTION {
    INT intro_id PK
    INT requester_id FK
    INT target_id FK
    VARCHAR result
  }
  TB_PAYMENT {
    INT payment_id PK
    INT regular_id FK
    VARCHAR payment_type
    INT amount
  }
  TB_CERT_DOC {
    INT cert_id PK
    INT regular_id FK
    VARCHAR doc_name
    VARCHAR status
  }
  TB_STATUS_HISTORY {
    BIGINT history_id PK
    VARCHAR target_type
    INT target_id FK
  }
  TB_DISTRIBUTE {
    INT dist_id PK
    INT assoc_id FK
    INT emp_id FK
    TINYINT is_duplicate
  }
  TB_NOTIFICATION {
    BIGINT noti_id PK
    VARCHAR recipient_type
    INT recipient_id FK
    VARCHAR channel
   }`,
  ruleEngine: [
    { id:'RL-001', domain:'컨택 관리', trigger:'부재중 카운트 = 3회', action:'상태 → 보류 전환', notify:'담당 매니저 알림', menu:'MN-200', priority:'High' },
    { id:'RL-002', domain:'컨택 관리', trigger:'부재중 카운트 = 5회 누적', action:'타 매니저 자동 이관', notify:'기존/신규 매니저 알림', menu:'MN-200', priority:'Critical' },
    { id:'RL-003', domain:'컨택 관리', trigger:'보류 상태 30일 경과', action:'상태 → 활동 원복', notify:'담당 매니저 재컨택 알림', menu:'MN-200', priority:'High' },
    { id:'RL-004', domain:'컨택 관리', trigger:'미팅 예약 등록', action:'상태 → 방문상담 전환', notify:'회원에게 미팅 안내 알림톡', menu:'MN-201', priority:'Medium' },
    { id:'RL-005', domain:'결제/계약', trigger:'1차 가입비 결제 완료', action:'전산 생성 트리거(인포팀)', notify:'인포팀 알림', menu:'MN-302', priority:'Critical' },
    { id:'RL-006', domain:'결제/계약', trigger:'전산 생성 완료', action:'계약 시작일 = 생성일 자동 Lock(수정 불가)', notify:'-', menu:'MN-302', priority:'Critical' },
    { id:'RL-007', domain:'결제/계약', trigger:'계약 시작일 Lock', action:'만료일 자동 계산(프로그램별 기간)', notify:'회원에게 계약 안내', menu:'MN-302', priority:'High' },
    { id:'RL-008', domain:'결제/계약', trigger:'미수금 발생 후 7일 경과', action:'독촉 알림 자동 발송', notify:'회원 SMS/알림톡', menu:'MN-302', priority:'Medium' },
    { id:'RL-009', domain:'서류인증', trigger:'4대 필수서류 전체 Pass', action:'상태 → 인증중→활동 자동 전환 + 매칭 Lock 해제', notify:'회원/매니저 알림', menu:'MN-402', priority:'Critical' },
    { id:'RL-010', domain:'서류인증', trigger:'서류 진위여부 검증 실패', action:'반려 처리 + 재제출 요청', notify:'회원에게 재제출 알림톡', menu:'MN-401', priority:'High' },
    { id:'RL-011', domain:'매칭', trigger:'프로필 발송 후 72시간 무응답', action:'자동 거절 처리', notify:'양측 회원 알림', menu:'MN-311', priority:'Critical' },
    { id:'RL-012', domain:'매칭', trigger:'쌍방 수락(OK)', action:'안심번호(050x) 자동 발급 + 미팅 생성', notify:'양측 회원 안심번호 안내', menu:'MN-312', priority:'Critical' },
    { id:'RL-013', domain:'매칭', trigger:'교제 거절 또는 피드백 종료', action:'안심번호 자동 회수(파기)', notify:'-', menu:'MN-312', priority:'High' },
    { id:'RL-014', domain:'매칭', trigger:'임시교제 등록 후 21일 경과', action:'확정 촉구 알림 발송', notify:'양측 회원 알림톡', menu:'MN-313', priority:'High' },
    { id:'RL-015', domain:'CS/환불', trigger:'탈회 승인', action:'위약금 자동 산정(계약시작일 기준) + 환불금 계산', notify:'정산팀/법무팀 알림', menu:'MN-701', priority:'Critical' },
    { id:'RL-016', domain:'CS/환불', trigger:'탈회 전자서명 완료', action:'상태 → 탈회 + 안심번호 전체 회수', notify:'회원 탈회 확인 알림', menu:'MN-701', priority:'High' },
    { id:'RL-017', domain:'DB 분배', trigger:'신규 DB 유입(웹훅)', action:'휴대폰 번호 중복 체크 → 고유 시 자동 분배 / 중복 시 소스외 이관', notify:'중복 시 기존 매니저 알림', menu:'MN-501', priority:'Critical' },
    { id:'RL-018', domain:'DB 분배', trigger:'스팸/테스트 DB 패턴 탐지', action:'자동 차단 + 차단 로그 기록', notify:'관리자 알림', menu:'MN-500', priority:'High' },
    { id:'RL-019', domain:'서류인증', trigger:'인증팀 서류 반려 처리', action:'담당 매니저에게 반려 사유 자동 알림 + 7일 보완 기한 타이머 시작', notify:'담당 매니저 알림', menu:'MN-401', priority:'Critical' },
    { id:'RL-020', domain:'서류인증', trigger:'서류 반려 후 7일 경과 미보완', action:'자동 가입 파기 처리', notify:'매니저/회원 알림', menu:'MN-401', priority:'Critical' },
    { id:'RL-021', domain:'서류인증', trigger:'API 조회 실패 또는 자동 검증 불가', action:'수동 검토 Task 뷰로 자동 이관 (인증팀)', notify:'인증팀 담당자 알림', menu:'MN-402', priority:'High' },
    { id:'RL-022', domain:'서류인증', trigger:'서류 위조 적발', action:'영구 가입 차단(블랙리스트) 등록 + 번호/신분 차단', notify:'법무팀/관리자 알림', menu:'MN-402', priority:'Critical' }
  ],

  policy: {
    sections: [
      { id:'bg', title:'1. 정책 수립 배경 및 목적', content:'파편화된 기술 요구사항을 법적·기술적 규제에 맞게 체계화하고, 데이터 흐름의 안전성을 확보합니다. 분산된 데이터 구조를 <strong>단일 고객 식별자(UID)</strong> 중심의 마스터 DB로 마이그레이션하며, 개인정보보호법 및 결혼중개업법을 철저히 준수합니다.' },
      { id:'member-ops', title:'2. 회원 정책 및 운영', items:[
        {sub:'2.0 회원 대분류', points:['<strong>준회원(미결제)</strong>: 가입비 결제 및 서류 인증 전 회원 (가망 DB) → 상담팀(영업 매니저) 관리','<strong>정회원(결제완료)</strong>: 가입비 결제 및 서류 인증 후 실질 활동하는 그룹 → 매칭팀(매칭 매니저) 관리']},
        {sub:'2.1 준회원 수집 제한', points:['주민등록번호 수집 <strong style="color:#dc2626">엄격 금지</strong> (시스템상 필드 비활성화)','최소 정보 수집 원칙: 성명, 연락처, 생년월일, 성별, 지역만 허용','동의서는 정회원 승인 시점 전까지 <strong>법적 효력 미발생</strong>']},
        {sub:'2.2 정회원 고유식별정보 처리', points:['고유식별정보 처리에 대한 <strong>별도 명시적 동의</strong> 획득','법정 필수 증빙: 신분증, 가족관계증명서, 혼인관계증명서, 학력증명서, 재직증명서','인증팀 검증 완료 + 활동 전환 시점에 동의 효력 확정']},
        {sub:'2.3 3대 계약 형태', note:'[시스템 절대 규칙] 단일 인증제만 1장짜리 계약이며, 나머지는 모두 1/2가입이 포개진 2장짜리 계약입니다.', table:{
          headers:['계약 형태명','계약방법','1/2 생애주기','주요 정산 특징','계약가능 프로그램'],
          rows:[
            ['인증제(1장계약)','기간','기간종료 시 → 만료','55만 원 수준 자격비 인증 상품 (기간제 물)','전문직'],
            ['인증제(2장계약)','횟수/기간 + 기간','횟수 or 기간종료 시 → 활동대기 (2가입 진행 여부 확인)','100만 이상 프리미엄 인증 상품','전문직, 준전문직'],
            ['횟수제','횟수+기간','횟수 종료 시 → 활동대기 (27일 진행 여부 확인)','월 만남 횟수 차감 방식','정규(프로그램), 기타, 프로모션'],
            ['기간제','기간+횟수','기간 종료 시 → 만료 (27일 전 진행 여부 확인)','횟수 차감 없이 기간 내 무제한 활동','정규(프로그램), 기타, 프로모션']
          ]
        }},
        {sub:'2.4 프로그램 → 계약 형태 선택', table:{
          headers:['프로그램','선택 가능한 계약 형태','타겟 고객 및 가입 조건'],
          rows:[
            ['전문직','기간(1장계약) or 횟수/기간 + 기간(2장계약)','남성 전용'],
            ['준전문직','횟수/기간 + 기간(2장계약)','남성 전용'],
            ['정규 (프로그램)','횟수제 or 기간제','일반 회원 (실버~블랙 등급)'],
            ['기타/프로모션','횟수제 or 기간제','미밴드/시즌 기타 프론트 설정']
          ]
        }},
        {sub:'2.5 결제 프로세스', points:['1차 가입비 산정(횟수제) → PG/무통장/분할 결제 → 전자계약서 생성 → 전산 생성(인포팀) → 2차 가입비 산정(기간제)','⚠️ 계약 시작일 = 전산 생성일 (자동 Lock)','통합 결제 이력 DB에서 1차+2차 릴레이션 관리']},
        {sub:'2.6 업그레이드 및 다운그레이드 정책', note:'정회원 가입 이후 고객의 요청에 따라 프로그램 등급을 변경할 때의 전산 처리 및 정산 기준을 정의합니다.', table:{
          headers:['구분','적용 시점','시스템 처리 방식','비고'],
          rows:[
            ['인증 전 변경','계약 직후 ~ 서류 인증 완료 전','기존 계약서 [취소/무효화] 후, 변경된 등급으로 [신규 계약서 재작성]','처음부터 절차 재진행'],
            ['인증 후 변경','서류 인증 완료 및 서비스 개시 후','기존 계약 유지 상태에서 전산 내 [단계업그레이드] 기능 활용','매칭 이력 유지']
          ]
        }},
        {sub:'2.7 프로필 발송 규칙', note:'프로필은 회원의 개인정보가 포함된 민감 자료이므로, 발송 자격·시점·차단 조건을 엄격히 통제합니다.', table:{
          headers:['구분','조건','시스템 처리','비고'],
          rows:[
            ['발송 허용 대상','활동(인증 완료) 상태 회원만','미인증/활동대기/보류/만료 회원 프로필 URL 생성 자체 차단','매칭 매니저만 발송 권한 보유'],
            ['발송 시점','미팅 확정 후 상대방 동의 시','미팅 미확정 상태에서 프로필 URL 전송 시스템 차단','상대 회원 매니저 공유 승인 필수'],
            ['소송중 회원','[소송중] 상태 전환 즉시','해당 회원의 프로필 열람/발송/공유 전면 차단 + 기발송 프로필 URL 무효화','법무팀 해제 전까지 영구 봉쇄'],
            ['블랙리스트 회원','[기타(블랙 등)] 상태','프로필 데이터 접근 원천 차단 + 검색 결과 제외','관리자/법무팀 외 조회 불가'],
            ['보류 중 회원','임시/장기/강제보류 상태','보류 기간 동안 프로필 발송 일시 중지','활동 복귀 시 자동 재개'],
            ['교제 중 회원','임시교제/교제/약정교제 상태','타 회원 대상 프로필 발송 시스템 차단','교제 종료(결별) 시 자동 해제'],
            ['탈회/만료 회원','탈회진행/만료/자동만료 상태','기발송된 프로필 URL 접속 시 만료 안내 페이지 표시','개인정보 보호법 준수']
          ]
        }},
        {sub:'2.8 회원 상태별 전환 정책 (36개 상태)', note:'준회원 15개 + 정회원 21개 전체 상태값 정의. <strong style="color:#4f46e5">⚙️ 자동화 룰</strong> 컬럼은 해당 상태에 적용되는 시스템 자동 제어 규칙이며, 상세 임계값은 <strong>9장 룰 엔진</strong>에서 정의합니다.', statusRulesRef:true}
      ]},
      { id:'db', title:'3. DB 아키텍처 및 보안 설계', items:[
        {sub:'3.1 망 분리', points:['외부망(웹 서버)과 내부망(DB 서버) 물리적 분리','퍼플스/디노블/르매리 브랜드별 독립 논리구조 유지']},
        {sub:'3.2 단일 UID + 브랜드 격리', points:['<strong>행 단위 보안(RLS)</strong> 또는 브랜드 식별 메타데이터 태그 적용','타 브랜드 매니저의 교차 접근 기술적 원천 차단']},
        {sub:'3.3 필드 단위 암호화', points:['주민등록번호, 연락처, 상세주소 등 모든 식별정보 필드 암호화','복호화 시 권한 확인 + 열람 로그 자동 생성']}
      ]},
      { id:'retention', title:'4. 개인정보 보유 및 파기 정책', items:[
        {sub:'4.1 회원 유형별 법정 보유 기간', points:[
          '<strong>정회원(계약자)</strong>: 결혼중개업법에 의거, 최종 서비스 종료(성혼, 만료, 탈회 등) 후 <strong>5년간 보관</strong> (운영 DB와 분리된 별도 아카이브에서 관리)',
          '<strong>준회원(단순 문의자)</strong>: 가입 계약을 체결하지 않은 가망 고객은 개인정보 수집 시 동의받은 보유 기간(<strong>통상 1년</strong>)을 따르며, 목적 달성 시 지체 없이 파기'
        ]},
        {sub:'4.2 블라인드 처리', points:['탈회 시 식별 필드 <strong>해싱(Hashing)/마스킹(Masking)</strong> 처리','매칭·영업 모듈 조회 불가, 법적 감사 용도로만 접근 가능']},
        {sub:'4.3 정기 파기', points:['5년 경과 데이터 매월 자동 파기','파기 대상·일시·책임자 포함 파기 로그 영구 보존']},
        {sub:'4.4 소스외 및 영업종료 DB 자동 파기 정책', note:'진행불가·소스외 등 판정을 받은 준회원 DB에 대한 체계적 파기 절차를 정의합니다.', points:[
          '<strong>대상</strong>: [진행불가], [소스외] 등 판정을 받은 준회원 DB',
          '<strong>보유 기한</strong>: 해당 상태로 변경된 날로부터 <strong style="color:#dc2626">최대 1년</strong> (사내 약관 기준)',
          '<strong>시스템 자동 처리</strong>: 매월 1회 시스템이 자동으로 파기 대상자를 선별하여 정리 작업 진행 (수동 삭제 불필요)',
          '<strong>정보 가공(통계용)</strong>: 영업적으로 불필요하나 통계 지표로 활용해야 하는 데이터는 이름·연락처를 <strong>마스킹(***) 또는 암호화</strong> 처리하여 비식별화 후 보관',
          '<strong>완전 삭제</strong>: 가공 불가능하거나 보관 필요 없는 데이터는 어떤 방법으로도 복구할 수 없도록 시스템에서 <strong style="color:#dc2626">영구 삭제</strong> 처리',
          '<strong>기록 관리</strong>: 파기 일시·대상·방법을 기록(파기 로그)하여 보존, <strong>연 1회 보안 점검</strong> 시 증빙 자료로 활용'
        ]}
      ]},
      { id:'security', title:'5. 보안 운영 정책', items:[
        {sub:'5.1 매니저 보안 수칙', points:['비밀번호 주기적 변경 강제','고객 정보 화면 캡처/촬영 <strong style="color:#dc2626">엄격 금지</strong>','중앙 집중식 이력 저장소로 모든 열람/변경 이력 상시 모니터링']},
        {sub:'5.2 사진/프로필 보안', points:['사진 3장 이내(JPG), 과도한 보정 금지','미인증/활동대기 상태 시 프로필 URL 전송 기능 시스템 차단']}
      ]},
      { id:'cert-fail', title:'6. 서류인증 실패 및 재심사 절차', items:[
        {sub:'6.1 최종 가입 거절 사유 (4대 사유)', points:[
          '① 법적으로 가입이 불가한 사유가 있는 경우',
          '② 회원의 조건 또는 계약사항이 회사의 가입 기준에 미달하는 경우',
          '③ 회원의 신원을 신뢰할 수 없는 경우',
          '④ 필수적인 서류의 작성 및 제출을 회원이 거부하는 경우',
          '<strong style="color:#dc2626">서류 위조 적발 시 → 영구 가입 차단(블랙리스트) 등록</strong>'
        ]},
        {sub:'6.2 서류 반려 및 자동 알림', points:[
          '인증팀 반려 처리 시 담당 상담 매니저에게 <strong>반려 사유 + 시스템 알림 자동 발송</strong>',
          '별도 게시판 작성 불필요 → 매니저가 즉각 고객 연락하여 서류 보완 요청',
          '서류 보완 및 재심사 청구 기한: <strong>반려일로부터 7일 이내</strong> (기한 초과 시 자동 가입 파기)'
        ]},
        {sub:'6.3 예외 처리 대기열', points:[
          '마이데이터 API 조회 실패 또는 자동 검증 불가 케이스',
          '해외 대학 졸업자, 특수 전문직 면허증, 자영업자 매출 증빙 등',
          '인증팀 <strong>수동 검토 Task 뷰</strong>로 자동 이관 → 2차 확인 후 최종 승인/반려',
          '즉시 인증 실패로 처리하지 않음 (예외 보호)'
        ]},
        {sub:'6.4 블랙리스트 관리 (상세: 7장 참조)', points:[
          '서류 위조, 사기 행위, 반복적 허위 정보 제공 시 <strong style="color:#dc2626">영구 가입 차단</strong>',
          '상세 정책은 「7. 블랙리스트 영구 가입 차단 정책」에서 정의'
        ]}
      ]},
      { id:'blacklist', title:'7. 블랙리스트 영구 가입 차단 정책', items:[
        {sub:'7.1 정책 목적 및 배경', points:[
          '서류 위조/신원 부적격자로부터 정회원 풀(Pool)의 <strong>신뢰도를 근본적으로 보호</strong>',
          '전산 시스템을 통한 원천적 재가입 방지 체계 구축',
          '<strong>리스크 관리</strong>: 서류 위조/신원 불량 행위는 브랜드 가치 훼손 + 매칭 서비스 신뢰도 파괴의 중대 위협',
          '<strong>방어적 내부 기록</strong>: 준회원은 법적 개인정보 제공 및 서비스 계약 효력 미발생 상태 → 블랙리스트 등록은 부적격자와의 계약 체결을 미연에 방지하는 회사의 방어적 내부 기록 및 시스템 보호 조치'
        ]},
        {sub:'7.2 블랙리스트 정의 및 적용 범위', points:[
          '<strong style="color:#dc2626">서류 위조</strong>: 학력, 재직, 혼인관계, 재산 증명 등 인증 단계(인증중 상태)에서 발견된 모든 형태의 허위 서류 제출자',
          '<strong style="color:#dc2626">신원 불량</strong>: 법적 가입 불가 사유 발생자(기혼 등), 회사 가입 기준 미달 중 신원 신뢰 불가 판정자, 전산상 [기타(블랙 등)] 분류자'
        ]},
        {sub:'7.3 전산 상태값 매핑 및 영구 차단 로직', points:[
          '<strong>상태값 지정</strong>: 관리 메뉴에서 [기타(블랙 등)] 전환 시 즉시 영구 차단 모드 진입',
          '<strong>UID 기반 영구 귀속</strong>: 차단 회원은 단일 고객 식별자(UID)로 시스템에 영구 귀속',
          '<strong>자동 중복 체크 트리거</strong>: 연락처 또는 주민등록번호 입력 시 즉시 가동 → 주민등록번호 해시(Hash) 값 대조 → 등록 불가 팝업 출력 + 접수 원천 차단',
          '<strong>영업 리스트 영구 제외</strong>: 상담 매니저의 검색/배정 리스트에서 영구 숨김 처리',
          '<strong>DB 풀 이관 차단</strong>: 재가입 영업 DB 풀로의 자동 이관 프로세스 차단 → 영업 마케팅 대상에서 원천 배제'
        ]},
        {sub:'7.4 가입 단계별 차단 프로세스', points:[
          '<strong>① 준회원(상담) 단계</strong>: 휴대폰 번호 + 주민번호 기반 자동 중복 체크로 1차 필터링 → 블랙리스트 감지 시 등록 즉시 거부',
          '<strong>② 신규 → 인증중 단계</strong>: 인포팀 계약서/영수증 확인 + 인증팀 서류 검증 병행 → 위조 발견 시 즉시 불가 처리 + [기타(블랙 등)] 상태값 부여',
          '<strong>③ 활동/사후 단계</strong>: 블랙리스트 사유 발생 또는 [소송중] 전환 시 → 모든 데이터 열람/수정 권한 즉시 봉쇄 + 법무팀 자동 알림 발송'
        ]},
        {sub:'7.5 데이터 아키텍처 및 마이그레이션', points:[
          '<strong>통합 관리 전략</strong>: Master Member DB 내 생애주기 속성(Lifecycle Status) 컬럼 신설 → 블랙리스트 해당 인원에 Blacklist 속성 영구 귀속',
          '<strong>마이그레이션 지침</strong>: AS-IS cust_mem 테이블의 기타(블랙 등) 데이터 → TO-BE Master DB의 Blacklist 플래그 연결 + UID 부여하여 이관'
        ]},
        {sub:'7.6 운영 및 보안 규정 (Strict Access Control)', points:[
          '<strong style="color:#dc2626">검색 결과 배제</strong>: [기타(블랙 등)] 상태 데이터는 일반 매니저 검색 결과에서 완전 제외',
          '<strong>권한 및 원복 제한</strong>: 시스템 관리자 및 법무팀 전용 권한 보유자 외 데이터 조회/상태 원복(Roll-back) 불가',
          '<strong style="color:#dc2626">수정 권한 전면 차단</strong>: [소송중] 또는 [기타(블랙 등)] 상태 시 전 직원의 데이터 수정 기능 비활성화 → 임의 정보 조작 방지'
        ]}
      ]},
      { id:'withdrawal', title:'8. 탈회 및 환불 정책', items:[
        {sub:'8.1 탈회금 산정 기준', note:'탈회 시점(서비스 진행 단계)에 따라 환불 비율이 차등 적용됩니다.', table:{
          headers:['단계','탈회 시점','환불 비율','비고'],
          rows:[
            ['① 프로필 제공 전','계약 성립 후 ~ 프로필 제공 전','가입비의 90% 환불','서비스 미개시 상태'],
            ['② 프로필 제공 후','프로필 제공 완료 후','가입비의 85% 환불','프로필 제작 비용 공제'],
            ['③ 만남일자 확정 후','만남 일자 확정 이후','가입비의 80% 환불','매칭 준비 비용 공제'],
            ['④ 1회 만남 이후','첫 만남 진행 이후','가입비의 20% + 잔여횟수 환산','잔여 횟수 기반 탈회금 산정']
          ]
        }},
        {sub:'8.2 1가입/2가입 탈회금 정책', note:'1/2가입이 포개진 2장짜리 계약의 경우, 가입 단위별로 탈회금을 별도 산정합니다.', points:[
          '<strong>1가입 탈회</strong>: 1가입 계약 기준 위약금 공제 후 환불액 산정',
          '<strong>2가입 탈회</strong>: 2가입 미개시 시 2가입분 전액 환불 | 2가입 개시 후에는 잔여횟수 기반 환산',
          '<strong>1장계약(인증제 단일)</strong>: 단일 계약이므로 가입 단위 구분 없이 전체 기준 적용'
        ]},
        {sub:'8.3 실매출 마이너스(-) 금액 처리 기준', points:[
          '<strong style="color:#dc2626">마이너스(-) 금액 정의</strong>: 단순 전산 오류로 인한 결제 취소나 승인 취소 금액이 아님',
          '<strong>실질적 의미</strong>: 1가입 위약금을 공제한 후, 고객의 실제 계좌로 송금이 완료된 <strong>최종 환불금(실제 현금 유출액)</strong>을 의미',
          '<strong>데이터 산출 기준</strong>: 표출되는 마이너스 금액 = (고객 원결제 금액) - (1가입 위약금 등 제반 공제액)',
          '실매출 조회 화면에서 마이너스 표시 시 → 해당 건은 <strong>환불 완료 건</strong>으로 처리'
        ]},
        {sub:'8.4 탈회 프로세스 및 시스템 처리', points:[
          '<strong>탈회 접수</strong>: 회원 탈회 의사 접수 → [탈회진행] 상태 전환',
          '<strong>정산 처리</strong>: 접수일 기준 <strong>7영업일 이내</strong> 환불 정산 완료 필수',
          '<strong>SLA 경고</strong>: 7영업일 초과 미처리 시 법무/정산팀 자동 SLA 경고 발송',
          '<strong>완료 후</strong>: [만료] 상태 전환 → 매칭 블라인드 + 재가입 마케팅 풀 자동 이관'
        ]}
      ]},
      { id:'auto-rules', title:'9. 상태별 자동화 임계값 및 룰 엔진', items:[
        {sub:'9.1 핵심 자동화 임계값 (Threshold)', note:'각 상태별 기간 초과 시 시스템이 자동으로 전환 처리합니다.', table:{
          headers:['관리 항목','전환 조건','전환 후 상태','시스템 처리 결과'],
          rows:[
            ['부재중','최대 5회 통화 시도 (또는 14일)','결번(불가)','[진행불가] 처리 + 영구 차단 (DB 재활용 불가)'],
            ['장기상담','상담 시작 후 90일 경과','기간만료(재컨텍)','[태그: 장기상담] 부여 + 60일간 재지정 금지'],
            ['가입보류','방문 상담 후 30일 경과','기간만료(재컨텍)','[태그: 가입보류] 부여 + 타 매니저 우선 배정'],
            ['잔금미납','계약금 납부 후 30일 경과','탈회진행(계약파기)','환불/탈회팀 이관 + 매니저 경고 알림'],
            ['임시교제','상태 진입 후 21일(3주) 경과','시스템 락(Lock)','활동 복귀 또는 교제 확정 강제 선택'],
            ['활동대기','1가입 종료 후 90일 경과','자동만료','[태그: 정회원만료] 부여 + 재영업 DB 이관']
          ]
        }},
        {sub:'9.2 장기상담 무한루프 방지 정책', note:'동일 매니저의 DB 독점(홀딩)을 원천 차단합니다.', points:[
          '<strong>기간</strong>: 장기상담 지정일로부터 <strong>최대 90일</strong> 유지',
          '<strong>횟수 제한</strong>: 동일 담당자가 동일 고객을 장기상담으로 둘 수 있는 횟수 → <strong style="color:#dc2626">최대 2회(최초 1회 + 연장 1회, 총 180일)</strong>',
          '<strong>강제 회수</strong>: 2회 만료 시 해당 DB는 무조건 <strong>미분배 DB 풀</strong>로 회수',
          '<strong>쿨타임(페널티)</strong>: 회수된 DB는 향후 <strong style="color:#dc2626">60일간</strong> 기존 담당 매니저에게 재배정 불가 (시스템 차단)',
          '<strong>만료 알림</strong>: 만료 7일 전 + 3일 전 → 담당 매니저에게 "관리 기간 종료 예정" 푸시 알림 발송'
        ]},
        {sub:'9.3 가입보류 제어 정책', note:'방문까지 진행한 가망 고객의 결제 전환을 촉진합니다.', points:[
          '<strong>기간</strong>: 방문일(가입보류 진입일)로부터 <strong>최대 30일</strong> 유지',
          '<strong>횟수 제한</strong>: 동일 담당자 <strong style="color:#dc2626">최대 1회(30일)</strong>만 지정 가능 → 만료 후 재지정 시스템 차단',
          '<strong>예외 연장</strong>: 반드시 필요한 경우 관리자(팀장)의 <strong>강제 승인</strong>이 있어야만 추가 30일 부여',
          '<strong>회수 후 태그</strong>: 30일 미결제 시 <strong>[방문 미결제 DB]</strong> 태그 → 공용 DB 풀 방출 → 타 매니저에게 클로징 영업 기회 제공'
        ]},
        {sub:'9.4 잔금미납 제어 정책', note:'계약만 체결하고 잔금이 입금되지 않는 악성 미결제 건을 통제합니다.', points:[
          '<strong style="color:#d97706">1차 경고(14일)</strong>: 계약금 결제 후 14일 이내 잔금 미납 시 → 담당 매니저 및 팀장에게 <strong>미납 알림</strong> 발송',
          '<strong style="color:#dc2626">최종 만료(30일)</strong>: 계약금 결제 후 30일 경과 시까지 잔금 미납 → 시스템 자동으로 <strong>[탈회진행]</strong> 상태 전환 + 법무/정산팀 이관',
          '<strong>결제 상태 추적</strong>: 가입중 상태에서 결제 진행률(전액/부분/미납) 실시간 표시',
          '<strong>매니저 책임</strong>: 30일 미납 자동 파기 건 → 해당 매니저 실적에서 제외 + 경고 이력 기록'
        ]},
        {sub:'9.5 기간만료(재컨텍) 출처 태그 정책', note:'다양한 경로에서 유입되는 재컨텍 DB의 혼선을 방지합니다.', table:{
          headers:['출처 태그','이전 상태','영업 우선순위','분배 전략'],
          rows:[
            ['[정회원 만료]','약정만료/기간만료/자동만료','1순위 (최상)','기존 매니저 우선권 또는 VIP 전담 배정'],
            ['[가입보류 만료]','가입보류 → 30일 경과','2순위 (상)','타 매니저 배정 + 기존 상담일지 팝업 필독'],
            ['[장기상담 만료]','장기상담 → 90일 경과','3순위 (중)','신입/DB 보충 매니저 자동 배분'],
            ['[부재중 만료]','부재중 → 5회/14일 초과','4순위 (하)','문자/알림톡 위주 핑(Ping) 영업']
          ]
        }},
        {sub:'9.6 재컨텍 쿨타임 및 액션타임', note:'고객 피로도 관리와 매니저 영업 효율을 동시에 통제합니다.', table:{
          headers:['구분','출처 태그','쿨타임 (휴식기)','액션타임 (승부기한)','설계 이유'],
          rows:[
            ['쿨타임','[가입보류 만료]','14~30일','14일','방문 이력 있는 고관여 고객 → 빠른 재접근 필요'],
            ['쿨타임','[장기상담 만료]','60일','14일','장기 통화만 한 고객 → 피로도 해소 후 새 매니저 접근'],
            ['쿨타임','[부재중 만료]','30일','14일','연락 불가 고객 → 1개월 후 알림톡 핑'],
            ['쿨타임','[정회원 만료]','90~180일','14일','재가입 심리 주기(3~6개월) 고려']
          ]
        }},
        {sub:'9.7 변경(지사 이관) 프로세스 및 데이터 통제', note:'타 지사/브랜드로 DB 관할권을 넘기는 특수 상태를 통제합니다.', points:[
          '<strong style="color:#dc2626">승인 필수</strong>: 매니저 → [이관 사유(필수)] + [대상 지사] 선택 → <strong>팀장급 이상 승인</strong> 후에만 이관 실행',
          '<strong>데이터 격리</strong>: 이관 완료 즉시 기존 지사의 모든 접근 권한 회수 (RLS 정책 적용)',
          '<strong>자동 적재</strong>: 대상 지사의 [미분배 DB 리스트]로 즉시 자동 적재 + <strong>[지사 이관: OO지사]</strong> 태그 부여',
          '<strong>이력 보존</strong>: 이전 지사 상담 메모는 [이전 상담 이력] 별도 탭으로 분리 노출',
          '<strong>실적 귀속</strong>: 유입 실적 = 최초 유입 지사 / 매출 실적 = 최종 결제 지사에 귀속'
        ]}
      ]},
      { id:'distribute-policy', title:'10. 회원분배 정책', items:[
        {sub:'10.1 정책 목적 및 적용 범위', points:[
          '마케팅 채널을 통해 유입된 <strong>준회원(가망 DB)</strong>을 상담 매니저에게 체계적·공정하게 배정하는 기준과 절차를 정의합니다.',
          '<strong>적용 대상</strong>: 모든 신규 유입 준회원 DB (메타 광고, 카카오, 랜딩페이지, 제휴 채널 등)',
          '<strong>적용 범위</strong>: 자동 분배, 수동 분배, 중복 DB 수거, 재분배(재컨텍 DB 배정)를 포함한 분배 프로세스 전반',
          '<strong>목표</strong>: ① 매니저 간 균등한 업무량 배분 ② 신규 DB 방치 제로(Zero) ③ 중복 DB 유입에 의한 영업 혼선 원천 방지'
        ]},
        {sub:'10.2 분배 대상 및 자격 조건', note:'분배 대상이 되는 DB와 분배를 수신하는 매니저의 자격을 정의합니다.', table:{
          headers:['구분','조건','비고'],
          rows:[
            ['분배 대상 DB','상태값이 [컨텍전]인 준회원','유입 직후 미배정 상태의 신규 DB만 해당'],
            ['분배 제외 DB','[진행불가], [소스외], [블랙리스트] 상태','시스템에서 분배 대기열 자동 제외'],
            ['분배 수신 매니저','현재 재직 중(활성 상태)인 상담팀 영업 매니저','퇴사·휴직·인증팀·매칭팀 매니저 제외'],
            ['매니저 상한선','1인당 일일 최대 <strong>20건</strong>, 월간 최대 <strong>200건</strong>','상한 초과 시 분배 대기열에서 자동 스킵'],
            ['재컨텍 DB','[기간만료(재컨텍)] 상태에서 쿨타임 완료된 DB','출처 태그별 우선순위에 따라 별도 분배 (§9.5~6 참조)']
          ]
        }},
        {sub:'10.3 분배 방식', note:'시스템은 <strong>자동 분배</strong>를 기본으로 하며, 예외 상황에서 <strong>수동 분배</strong>를 허용합니다.', items:[
          {sub:'10.3.1 자동 분배 (라운드로빈)', points:[
            '<strong>기본 방식</strong>: 활성 매니저 목록을 순서대로 돌아가며 1건씩 균등하게 배정하는 방식',
            '<strong>실행 시점</strong>: ① 마케팅 채널에서 신규 DB가 자동 연동되어 들어올 때 즉시 실행 ② 관리자가 [자동분배] 버튼을 클릭하여 미분배 건을 일괄 처리할 때',
            '<strong>가중치 분배 (옵션)</strong>: 관리자가 매니저별 분배 비율을 조절할 수 있음 (예: 신입 매니저는 절반만 배정, 베테랑 매니저는 1.5배 배정)',
            '<strong>지사 격리</strong>: 분배는 <strong>동일 지사 소속 매니저</strong>에게만 실행되며, 타 지사 매니저에게는 자동 분배되지 않음',
            '<strong>분배 순서</strong>: ① 먼저 유입된 DB부터 우선 분배 ② 같은 시간에 유입된 경우 등록 순서대로 분배'
          ]},
          {sub:'10.3.2 수동 분배', points:[
            '<strong>권한</strong>: 팀장급 이상 또는 관리자 권한 보유자만 실행 가능',
            '<strong>절차</strong>: 미분배 회원 선택(체크박스) → 배정 매니저 지정 → [분배 실행] 클릭',
            '<strong>사용 사례</strong>: ① VIP/고가치 DB를 특정 매니저에게 직접 배정 ② 특정 채널 전문 매니저에게 해당 채널 DB 배정 ③ 매니저 부재 시 긴급 대체 배정',
            '<strong>제한</strong>: 수동 분배 시에도 매니저 상한선(일일 20건 / 월간 200건) 초과 배정 불가 — 초과 시 경고 팝업 후 강제 배정 옵션 제공 (관리자 전용)'
          ]}
        ]},
        {sub:'10.4 중복 DB 수거 정책', note:'동일 휴대폰 번호로 재유입된 DB의 자동 감지 및 처리 절차를 정의합니다.', points:[
          '<strong>탐지 기준</strong>: 유입된 DB의 휴대폰 번호를 기존 전체 회원 DB와 자동으로 대조하여 중복 여부를 판별',
          '<strong>고유 DB (신규)</strong>: 중복이 없는 경우 → 정상 분배 대기 목록에 등록',
          '<strong style="color:#dc2626">중복 DB (재유입)</strong>: ① 신규 DB를 <strong>[소스외]</strong> 상태로 자동 전환 ② 기존 담당 매니저에게 <strong>알림 자동 발송</strong> (고객의 추가 관심도를 실시간 캐치)',
          '<strong>수거 이력 관리</strong>: 중복 수거된 DB는 시스템에 자동으로 이력이 기록되며, 원본 회원과의 연결 정보가 함께 보존됨',
          '<strong>수동 검사</strong>: 관리자가 [중복DB 검사] 버튼을 클릭하여 전체 DB를 대상으로 일괄 중복 검사를 실행할 수 있음',
          '<strong>소스외 DB 활용</strong>: 소스외로 이관된 DB는 분배 대상에서 영구 제외되나, 기존 담당 매니저가 해당 고객의 재문의 사실을 확인하여 후속 영업에 활용'
        ]},
        {sub:'10.5 분배 알림 및 이력 관리', points:[
          '<strong>분배 알림</strong>: 분배 완료 시 배정된 매니저에게 <strong>카카오 알림톡 또는 SMS</strong>로 자동 알림 발송 — 회원명, 유입 채널, 연락처 포함',
          '<strong>분배 이력 기록</strong>: 모든 분배 행위(자동/수동)는 시스템에 자동 기록 — 분배 유형, 배정 매니저, 분배 일시, 중복 여부 등 상세 내역 보존',
          '<strong>이력 보호</strong>: 분배 이력은 <strong>수정·삭제가 불가능</strong>하며, 누가 언제 어떤 분배를 했는지 투명하게 추적할 수 있음',
          '<strong>대시보드 표출</strong>: 매니저별 분배 현황(전체/이번달/이번주), 분배 비율, 최근 분배 이력을 실시간 조회 가능'
        ]},
        {sub:'10.6 재분배(담당 변경) 정책', note:'이미 분배된 DB의 담당 매니저를 변경하는 경우의 규칙을 정의합니다.', points:[
          '<strong style="color:#dc2626">재분배 사유 필수</strong>: 담당 매니저 변경 시 반드시 <strong>변경 사유</strong>를 입력해야 하며, 사유 미입력 시 시스템 차단',
          '<strong>승인 절차</strong>: 일반 매니저 → 팀장 승인 필요 | 팀장급 이상 → 즉시 실행 가능',
          '<strong>변경 이력</strong>: 담당 변경 이력은 시스템에 자동 기록되며, 회원 상세 페이지에서 [컨설턴트 변경 이력] 조회 가능',
          '<strong>실적 귀속</strong>: 변경 시점 이전 상담 실적 → 기존 매니저 귀속 | 변경 이후 실적 → 신규 매니저 귀속',
          '<strong>재분배 쿨타임</strong>: 동일 DB에 대해 <strong>7일 이내 2회 이상 재분배 불가</strong> — 빈번한 떠넘기기 방지'
        ]},
        {sub:'10.7 분배 권한 매트릭스', table:{
          headers:['기능','일반 매니저','팀장','지사장','본부장/관리자'],
          rows:[
            ['자동 분배 실행','✕','○','●','●'],
            ['수동 분배 실행','✕','○','●','●'],
            ['중복 DB 검사','✕','○','●','●'],
            ['소스외 수거 실행','✕','○','●','●'],
            ['재분배(담당 변경)','△ (승인 요청)','○ (직접 실행)','● (전체)','● (전체)'],
            ['분배 상한선 초과 배정','✕','✕','✕','● (강제 배정)'],
            ['분배 이력 조회','본인 건만','소속팀 전체','소속지사 전체','전체'],
            ['분배 가중치 설정','✕','✕','○','●']
          ]
        }},
        {sub:'10.8 분배 실패 및 예외 처리', points:[
          '<strong>분배 가능 매니저 0명</strong>: 모든 활성 매니저가 상한선 초과 또는 부재 시 → <strong>미분배 대기 목록</strong>에 보류 + 관리자에게 긴급 알림 발송',
          '<strong>채널 자동 연동 장애</strong>: 마케팅 채널에서 DB 자동 유입이 실패한 경우 → 5분 간격으로 최대 3회 자동 재시도 → 3회 모두 실패 시 관리자에게 알림 발송',
          '<strong>스팸/허위 DB</strong>: 비정상적인 연락처(예: 000-0000-0000) 또는 테스트성 DB 감지 시 → 자동 차단 처리 + 차단 내역 기록',
          '<strong>분배 후 미컨텍</strong>: 분배 후 <strong>48시간 이내</strong>에 첫 연락을 시도하지 않은 경우 → 담당 매니저에게 <strong>미컨텍 경고 알림</strong> 발송',
          '<strong>72시간 미컨텍</strong>: 분배 후 72시간이 지나도 연락이 없는 경우 → 팀장에게 긴급 알림 발송 + 재분배 검토 대상으로 자동 지정'
        ]}
      ]},
      { id:'roadmap', title:'11. 향후 이행 계획', steps:['설계: 보안/DB 정책을 개발 규격서(Spec)에 반영 확정','구현: UID 통합 DB + 필드 암호화 + RLS + 룰 엔진 개발','테스트: 브랜드 격리 검증 + 임계값 상태 전이 테스트','배포: AS-IS 데이터 시계열 변환 + 마스터 DB 이관','사후: 법정 파기 로그 점검 + 보안 감사 정례화'] }
    ],

    statusRules: [
      { memberType:'준회원', phase:'연락전', status:'컨텍전', desc:'신규 DB 유입', startCond:'최초 가입/유입/DB 등록 시', maintenance:'매니저 배정 및 첫 연락 전까지', startBy:'-', startTrans:'-', endBy:'-', endTrans:'부재중 또는 상담 상태로 전환', rule:'-' },
      { memberType:'준회원', phase:'상담진행', status:'부재중(미연락)', desc:'통화 미연결', startCond:'매니저가 통화 시도했으나 연결 실패', maintenance:'다음 전화 시 해결될 때까지', startBy:'-', startTrans:'-', endBy:'-', endTrans:'5회 부재 시 결번(불가) 전환', rule:'5회 부재 → 결번(불가) (§9.1)' },
      { memberType:'준회원', phase:'상담진행', status:'낮음(컨텍)', desc:'가입 의사 낮음', startCond:'통화 후 매니저 판단 등록', maintenance:'지속적인 연락(미팅) 기간', startBy:'-', startTrans:'-', endBy:'-', endTrans:'가입 의사 상승 시 상태 전환', rule:'-' },
      { memberType:'준회원', phase:'상담진행', status:'보통(컨텍)', desc:'일반 상담 진행', startCond:'통화 후 매니저 판단 등록', maintenance:'지속적인 연락(미팅) 기간', startBy:'-', startTrans:'-', endBy:'-', endTrans:'매칭에 따른 보류/상태로 전환', rule:'-' },
      { memberType:'준회원', phase:'상담진행', status:'높음(컨텍)', desc:'가입 의사 높음', startCond:'통화 후 매니저 판단 등록', maintenance:'상담 종료 전까지', startBy:'-', startTrans:'-', endBy:'-', endTrans:'가입의사 반영/보류로 전환', rule:'-' },
      { memberType:'준회원', phase:'상담진행', status:'장기상담(컨텍)', desc:'장기적 관리 필요', startCond:'상담 기간이 길어질 때', maintenance:'매니저 지정 방향 관리기간', startBy:'-', startTrans:'-', endBy:'-', endTrans:'90일 경과 시 재컨텍 전환', rule:'90일×2회 → 재컨텍 (§9.2)' },
      { memberType:'준회원', phase:'방문상담', status:'방문상담', desc:'오프라인 상담', startCond:'방문 예약 확정 시 내방', maintenance:'방문 결과 관련까지', startBy:'-', startTrans:'-', endBy:'-', endTrans:'상담 결과 보류/가입 상태 전환', rule:'-' },
      { memberType:'준회원', phase:'가입/보류', status:'가입보류(컨텍)', desc:'가입 결정 연기', startCond:'회원의 가입 의사로 보류 시', maintenance:'지정된 보류 기간 만료 전까지', startBy:'-', startTrans:'-', endBy:'-', endTrans:'기한 만료 시 재컨텍 전환', rule:'30일×1회 → 재컨텍 (§9.3)' },
      { memberType:'준회원', phase:'가입/보류', status:'가입중', desc:'계약/결제 진행', startCond:'가입서 등록 1차 처리 (미납/부분결)', maintenance:'잔금 결제 완료 전까지', startBy:'-', startTrans:'-', endBy:'-', endTrans:'결제 완료 시 가입완료로 전환', rule:'14일 경고/30일 파기 (§9.4)' },
      { memberType:'준회원', phase:'가입/보류', status:'가입완료', desc:'정회원 이관 대기', startCond:'프로그램 전액 정산 완료', maintenance:'시스템에서 정회원 DB로 이관 시', startBy:'-', startTrans:'-', endBy:'-', endTrans:'가입완료→신규 등록', rule:'-' },
      { memberType:'준회원', phase:'진행불가', status:'결번(불가)', desc:'연락처 오류', startCond:'없는 번호 확인 시', maintenance:'영구 유지(전환 불가)', startBy:'-', startTrans:'-', endBy:'-', endTrans:'-', rule:'영구 차단' },
      { memberType:'준회원', phase:'진행불가', status:'기혼(불가)', desc:'법적 서비스 불가', startCond:'기혼자 확인 시', maintenance:'영구 유지(전환 불가)', startBy:'-', startTrans:'-', endBy:'-', endTrans:'-', rule:'영구 차단' },
      { memberType:'준회원', phase:'진행불가', status:'기타(불가)', desc:'블랙리스트 등', startCond:'블랙리스트 정책 심의/판정 시', maintenance:'영구 유지(전환 불가)', startBy:'-', startTrans:'-', endBy:'-', endTrans:'-', rule:'영구 차단 (§7장)' },
      { memberType:'준회원', phase:'DB정리', status:'변경', desc:'상담 가능성이 없는 회원 처리', startCond:'타 자사 등으로 이관', maintenance:'해당 없음', startBy:'-', startTrans:'-', endBy:'-', endTrans:'-', rule:'팀장 승인 필수 (§9.7)' },
      { memberType:'준회원', phase:'만료', status:'기간만료(재컨텍)', desc:'영업 종료 재진입', startCond:'각 상태별 임계값 초과 시 자동 전환', maintenance:'매니저 재배정 선택 시', startBy:'-', startTrans:'-', endBy:'-', endTrans:'재전환 시도 시 시작 상태로 전환', rule:'출처태그+쿨타임 (§9.5~6)' },
      { memberType:'정회원', phase:'인증전', status:'신규', desc:'신규 전산 생성 직후', startCond:'정회원DB 등록 시', maintenance:'전산생성 이후 선택일 전까지', startBy:'인증팀', startTrans:'-', endBy:'인증팀', endTrans:'서류 접수 시 인증중으로 전환', rule:'-' },
      { memberType:'정회원', phase:'인증전', status:'인증중', desc:'서류인증 진행중', startCond:'서류 접수 후', maintenance:'인증완료 전까지', startBy:'인증팀', startTrans:'-', endBy:'인증팀', endTrans:'인증 완료 시 활동으로 전환', rule:'-' },
      { memberType:'정회원', phase:'인증전', status:'활동대기', desc:'2가입 진행해야 할 상태', startCond:'1가입 약정만료 후 자동 전산생성', maintenance:'인증완료 전까지', startBy:'자동', startTrans:'-', endBy:'인증팀', endTrans:'2가입 진행 시 활동 전환 / 미진행 시 자동만료', rule:'90일 → 자동만료 (§9.1)' },
      { memberType:'정회원', phase:'활동', status:'활동', desc:'매칭 서비스 진행중', startCond:'최종인증완료', maintenance:'계약기간 내', startBy:'인증팀', startTrans:'-', endBy:'다양', endTrans:'교제/보류/만료/탈회 등 다양한 상태로 전환', rule:'-' },
      { memberType:'정회원', phase:'교제', status:'임시교제', desc:'미팅 후 2번째 만남 예정', startCond:'소개 후 두 번째 만남', maintenance:'교제 결렬 전까지', startBy:'매칭', startTrans:'-', endBy:'매칭', endTrans:'결렬 시 활동 복귀 / 3회 만남 시 교제 전환', rule:'21일 Lock (§9.1)' },
      { memberType:'정회원', phase:'교제', status:'교제', desc:'미팅 후 3번째 만남 예정', startCond:'소개 후 세 번째 만남', maintenance:'교제 결렬 전까지', startBy:'매칭', startTrans:'-', endBy:'매칭', endTrans:'결렬 시 활동 복귀 / 결혼 시 결혼예정 전환', rule:'-' },
      { memberType:'정회원', phase:'교제', status:'외부교제', desc:'당사회원 아닌 이성과 교제', startCond:'회원 외부교제 통보', maintenance:'교제 결렬 전까지', startBy:'매칭', startTrans:'-', endBy:'매칭', endTrans:'결렬 시 활동 복귀', rule:'-' },
      { memberType:'정회원', phase:'보류', status:'약정보류', desc:'1가입 횟수제 내 보류', startCond:'1가입 횟수제 중 만남 일시정지', maintenance:'회원 진행 요청 전까지', startBy:'매칭', startTrans:'-', endBy:'매칭', endTrans:'회원 요청 시 활동 복귀', rule:'만료시 강제 원복' },
      { memberType:'정회원', phase:'보류', status:'임시보류', desc:'2가입/인증제 내 보류 (2달↓)', startCond:'기간제 중 일시정지', maintenance:'회원 진행 요청 전까지', startBy:'CS', startTrans:'-', endBy:'CS', endTrans:'회원 요청 시 활동 복귀', rule:'만료시 강제 원복' },
      { memberType:'정회원', phase:'보류', status:'장기보류', desc:'2가입/인증제 내 보류 (2달↑)', startCond:'기간제 중 장기 정지', maintenance:'회원 요청 전까지', startBy:'CS', startTrans:'-', endBy:'CS', endTrans:'회원 요청 시 활동 복귀', rule:'만료시 강제 원복' },
      { memberType:'정회원', phase:'보류', status:'강제보류', desc:'서비스 중단조치 (범죄, 비매너, 허위정보 등)', startCond:'문제 회원 판정', maintenance:'회사 판단에 따라', startBy:'회장님', startTrans:'-', endBy:'회장님', endTrans:'회장님 해제 시 활동 복귀', rule:'관리자 전용' },
      { memberType:'정회원', phase:'탈회', status:'탈회진행', desc:'탈회금액과 지급일 확정통보 된 상태', startCond:'탈회 절차 및 비용 확인', maintenance:'지급 완료 전까지', startBy:'CS', startTrans:'-', endBy:'회장님', endTrans:'지급 완료 시 탈회 종결', rule:'7영업일 SLA (§8.4)' },
      { memberType:'정회원', phase:'탈회', status:'탈회', desc:'탈회금 전액 지급 종결', startCond:'탈회 지급 완료', maintenance:'-', startBy:'회장님', startTrans:'-', endBy:'-', endTrans:'-', rule:'-' },
      { memberType:'정회원', phase:'만료', status:'약정만료', desc:'1가입 약정횟수 소진', startCond:'횟수제 약정횟수 소진', maintenance:'-', startBy:'매칭', startTrans:'-', endBy:'인증팀', endTrans:'활동대기로 전환 (2가입 진행 여부 확인)', rule:'쿨타임 90~180일 (§9.6)' },
      { memberType:'정회원', phase:'만료', status:'자동만료', desc:'활동대기 3개월 경과', startCond:'약정만료 후 3개월', maintenance:'-', startBy:'자동', startTrans:'-', endBy:'-', endTrans:'-', rule:'자동 전환' },
      { memberType:'정회원', phase:'만료', status:'만료(기간만료)', desc:'기간제 만료일 도래 후 매칭에서 만료처리', startCond:'2가입/인증제 기간 만료', maintenance:'-', startBy:'매칭', startTrans:'-', endBy:'-', endTrans:'준회원 DB 재컨텍으로 유입', rule:'쿨타임 90~180일 (§9.6)' },
      { memberType:'정회원', phase:'만료', status:'만료교제', desc:'회원상태 교제인 상태에서 만료일 도래', startCond:'교제 상태 회원 기간만료', maintenance:'-', startBy:'매칭', startTrans:'-', endBy:'-', endTrans:'결혼 시 성혼으로 전환', rule:'-' },
      { memberType:'정회원', phase:'만료', status:'외부결혼', desc:'외부 결혼 확인', startCond:'혼인결과 기반 확인', maintenance:'-', startBy:'법무', startTrans:'-', endBy:'-', endTrans:'-', rule:'-' },
      { memberType:'정회원', phase:'만료', status:'소송중', desc:'법적 분쟁', startCond:'법적 분쟁 발생 시', maintenance:'소송 종료 전까지', startBy:'법무', startTrans:'-', endBy:'법무', endTrans:'소송 종료 시 원래 상태로 복귀', rule:'프로필 전면 차단 (§2.7)' },
      { memberType:'정회원', phase:'성혼', status:'결혼예정', desc:'결혼 사실 통보 후 성혼비 납입 전', startCond:'회원 결혼사실 통보', maintenance:'성혼비 납입 전까지', startBy:'매칭', startTrans:'-', endBy:'회장님', endTrans:'성혼비 완납 시 성혼 전환', rule:'-' },
      { memberType:'정회원', phase:'성혼', status:'성혼', desc:'성혼비 완납', startCond:'성혼비 납부 확인', maintenance:'-', startBy:'회장님', startTrans:'-', endBy:'-', endTrans:'-', rule:'-' }
    ],

    memberClass: [
      { type:'준회원', payment:'미결제', desc:'가입비 결제 및 서류 인증 전 회원 (가망 DB)', authority:'상담팀 (영업 매니저)' },
      { type:'정회원', payment:'결제 완료', desc:'가입비 결제 및 서류 인증 후 실질 활동하는 그룹', authority:'매칭팀 (매칭 매니저)' }
    ],

    contractTypes: [
      { type:'인증제', name:'횟수+기간+인증', condition:'횟수 ≥ 1 AND 기간 ≥ 보증', settlement:'보증 횟수 가입비 (1가입 미만 시 위약금 적용)', programs:'전 프로그램' },
      { type:'횟수제', name:'횟수+가입', condition:'횟수 종료 시 → 활동대기 (27일 대기 후 기간 만료)', settlement:'잔여 횟수 기반 정산', programs:'골드 프로그램' },
      { type:'기간제', name:'기간+횟수', condition:'기간 초과 시 → 만료 (27일 전 고지 후 만료)', settlement:'잔수 시간 만기 시 단위 무제한', programs:'전 프로그램' }
    ],

    programs: [
      { name:'골드/다이아', contract:'가입(장기) or 횟수제(+가입평가)', target:'남성 전용' },
      { name:'온라인매칭', contract:'횟수+가입(+시즌)', target:'남성 전용' },
      { name:'실전(프로코스)', contract:'횟수+기간제', target:'하위 레벨 (미혼~) 등급' },
      { name:'기타/프로모션', contract:'미밴드/시즌 기타(프론트)', target:'가입선 파트 임시적 등 설정 시 타임' }
    ],

    matchingFilter: [
      { type:'기본 필터', target:'정회원(활동중)', range:'본인 등급 기준 1단계 매뉴얼', rule:'(+1)단계 규칙 (예: 골드→골드+까지)' },
      { type:'특수 매칭', target:'전문직(상위)', range:'연락 조건 허용 레벨 이상 대상', rule:'미실적 또는 미입회 매체 프로세스' },
      { type:'재결합', target:'해산 전체', range:'포드 단위 연선(?) 컨셉 성사 선정', rule:'등급 미달 시 신규 심의 대상 시 결성' },
      { type:'무제한 수준', target:'최수자격/VIP', range:'등급 제한 없이 전체 매칭 가능', rule:'해당 없음' }
    ],

    specialStatus: [
      { status:'약정보류', desc:'1가입 횟수 인정 중 1회분만 보류 가능. 매칭/프로필 미팅 기간 동안 횟수 보전 목적' },
      { status:'임시보류/장기보류', desc:'서비스 매칭/상담 중 고객 자발적 의사로 서비스 수행 배제. 임시(2개월 이하), 장기(2개월 초과)' },
      { status:'강제보류', desc:'분쟁 해결 또는 회사 직권 정지. 본부장급 관리자만 해제 가능' },
      { status:'기간만료/뉴', desc:'계약 기한 도래 시 자동 전환. DB는 재가입 영업 풀로 자동 이관' }
    ],

    upgradePolicy: [
      { timing:'인증 전 변경', condition:'계약 조건 → 서류 인증 정 전', system:'전산 미인코드 신규 세팅으로 재생성', note:'차용분 환불 재산정' },
      { timing:'인증 후 변경', condition:'서류 합격 확립 서비스 개시 후', system:'기존 계약 무효 + 상대 시점 전산 신규 생성', note:'차일 대신 정산' }
    ],

    profileRule: [
      '회원(실물) 사진 3장 이내 (JPG 권장)',
      '과도한 사진 보정 행위 엄격 금지 (허위정보 클레임 방지)',
      '활동상태가 아닌 회원(미인증/활동대기)에게 프로필 URL 전송 시스템 차단',
      '발송 시기: 미팅 확정 시 또는 기존의 정의된 발송 시점에만 허용',
      '악성인/악의적 상대 설정은 불가'
    ]
  }
};

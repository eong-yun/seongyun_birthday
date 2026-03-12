// =====================================================
// 🎂 Birthday Adventure - 설정 파일
// 이 파일에서 비밀번호, 퀴즈, 장소 등을 수정하세요!
// =====================================================

const CONFIG = {
  // 🔐 비밀번호 (숫자나 문자로 원하는 대로 변경)
  password: "0305",

  // 🎂 생일 당사자 이름 (헤더에 표시됨)
  birthdayPerson: "소중한 당신에게",

  // 💌 보내는 사람
  from: "",

  // 메인 화면 텍스트
  mainTitle: "SeongYun Adventure",
  mainSubtitle: "성윤이 전용 하루 코스!!",

  // 카드를 순서대로만 열 수 있는지 여부
  // true = 1번 완료해야 2번 열림 / false = 모두 처음부터 열림
  sequential: true,

  // 🎉 완주 메시지 (봉투 편지로 대체됨)
  completionTitle: "오늘 끝!!!!!!",
  completionMessage:
    "정말 고마워요!\n오늘 하루 당신이 최고였어요.\n\n생일 진심으로 축하해요! 🎂💕\n앞으로도 함께할 날들이 가득하길 바라요.",

  // 📸 추억 슬라이드쇼 (메인 화면 상단에 표시)
  // driveId: 구글 드라이브 파일 ID / caption: 사진 설명
  slideshow: [
    { driveId: "", caption: "우리의 첫 번째 기억" },
    { driveId: "", caption: "함께한 소중한 순간" },
    { driveId: "", caption: "잊지 못할 하루" },
  ],

  // 💌 비밀 편지 (스탬프 모두 모으면 공개)
  letter: {
    to: "성윤!!",
    body: "진짜 하나 못받은거 있지 않아??ㅎㅎ",
    from: "",
  },
};

// =====================================================
// 🗺️  어드벤처 데이터
// id, title, subtitle, emoji, quiz, location 을 수정하세요
// =====================================================
const adventures = [
  {
    id: 1,
    title: "처음으로 갈 곳!",
    subtitle: "\n",
    emoji: "🌸",
    cardGradient: "linear-gradient(150deg, #F0EDF7 0%, #E4DFF0 100%)",
    accentColor: "#9D8FC9",
    quiz: {
      question: "암호를 대시오~~",
      // 정답을 배열로 여러 개 입력하면 그 중 하나만 맞춰도 통과!
      // (대소문자·앞뒤 공백 무시, 한글 모두 허용)
      answers: ["성"],
      hint: "차갑고 쌉싸름한 그것 ☕",
    },
    location: {
      name: "광화문",
      address: "서울 종로구 효자로 12 국립고궁박물관",
      // description:
      //   "여기가 바로 모든 것의 시작이에요.\n\n처음 마주쳤던 그 순간부터 왠지 특별할 것 같았어요. 창가 자리에서 나눴던 이야기들이 아직도 생생하게 기억나요 💕",
      lat: 37.5791,
      lng: 126.9943,
      // 구글 드라이브 파일 ID를 아래에 입력하세요
      googleDriveImages: ["stamp1.jpg"],
      googleDriveVideos: [],
    },
  },
  {
    id: 2,
    title: "잠깐 쉴까??",
    subtitle: "\n",
    emoji: "☕",
    cardGradient: "linear-gradient(150deg, #E8E1F0 0%, #D9CFEB 100%)",
    accentColor: "#8B7FC6",
    quiz: {
      question: "암호를 대시오~~",
      answers: ["윤"],
      hint: "이탈리아 음식이에요 🍝",
    },
    location: {
      name: "리와인드 서울",
      address: "서울 종로구 율곡로 33 2F",
      // description:
      //   "이 곳에서 처음으로 밥을 같이 먹었어요.\n\n긴장해서 많이 못 먹었던 기억이 나나요? 저도 그랬어요 😊 그래도 정말 행복한 시간이었어요.",
      lat: 37.575897,
      lng: 126.983436,
      googleDriveImages: ["stamp2.jpg"],
      googleDriveVideos: [],
    },
  },
  {
    id: 3,
    title: "성윤이가 보고 싶어 했던 거!",
    subtitle: "\n",
    emoji: "🌊",
    cardGradient: "linear-gradient(150deg, #E4DFF0 0%, #D5CDEA 100%)",
    accentColor: "#9D8FC9",
    quiz: {
      question: "암호를 대시오~~",
      answers: ["아"],
      hint: "같이 보면서 많이 놀랐던 장면이 있었어요 🎬",
    },
    location: {
      name: "연남CGV",
      address: "서울 마포구 양화로 186 LC타워 7층 CGV 연남",
      // description:
      //   "이 영화관에서 어두운 곳에 나란히 앉아 영화를 봤어요.\n\n무서운 장면에서 손을 잡았던 기억 아직 있죠? 저는 절대 못 잊어요 😄",
      lat: 37.557668,
      lng: 126.925888,
      googleDriveImages: ["stamp3.jpg"],
      googleDriveVideos: [],
    },
  },
  {
    id: 4,
    title: "배 안고파??",
    subtitle: "\n",
    emoji: "🍕",
    cardGradient: "linear-gradient(150deg, #EBE6F5 0%, #DCD5ED 100%)",
    accentColor: "#7C6FB0",
    quiz: {
      question: "암호를 대시오~~",
      answers: ["축"],
      hint: "거기 가면 항상 이걸 시켰잖아요 😋",
    },
    location: {
      name: "사르르 연남",
      address: "서울 마포구 연희로1길 63 2,3층",
      // description:
      //   "이 곳이 우리만의 특별한 맛집이에요.\n\n여기 오면 항상 행복해지는 것 같아요. 맛있는 걸 같이 먹을 때 당신 표정이 정말 예뻐요 😊",
      lat: 37.561520,
      lng: 126.926560,
      googleDriveImages: ["stamp4.jpg"],
      googleDriveVideos: [],
    },
  },
  {
    id: 5,
    title: "생일인데 빠진 거 뭐 없어??",
    subtitle: "\n",
    emoji: "🎡",
    cardGradient: "linear-gradient(150deg, #F0EDF7 0%, #E4DFF0 100%)",
    accentColor: "#8B7FC6",
    quiz: {
      question: "암호를 대시오~~",
      answers: ["하"],
      hint: "바다가 정말 예뻤던 곳이에요 🌊",
    },
    location: {
      name: "두디케이크",
      address: "서울 서대문구 신촌로9길 37 1층 201호",
      // description:
      //   "이 곳에서의 기억은 평생 잊지 못할 것 같아요.\n\n손을 잡고 같이 걸었던 그 길, 노을이 지던 그 풍경, 그리고 옆에 있어준 당신 💫",
      lat: 37.558558,
      lng: 126.933014,
      googleDriveImages: ["stamp5.jpg"],
      googleDriveVideos: [],
    },
  },
  {
    id: 6,
    title: "낮에 만났는데 벌써 밤이야~~",
    subtitle: "\n",
    emoji: "💝",
    cardGradient: "linear-gradient(150deg, #E8E1F0 0%, #DAD1EB 100%)",
    accentColor: "#9D8FC9",
    quiz: {
      question: "암호를 대시오~~",
      answers: ["해"],
      hint: "세 글자, 세상에서 제일 좋은 말 💕",
    },
    location: {
      name: "엉집",
      address: "그 어딘가~~",
      // description:
      //   "여기까지 와줘서 정말 정말 고마워요 🥹\n\n오늘 이 모든 여정을 함께 걸어준 당신께 가장 진심 어린 마음을 전하고 싶어요.\n\n생일 진심으로 축하해요! 🎂\n오늘도, 앞으로도 항상 행복하길 바라요 💕",
      lat: 37.496853,
      lng: 126.848276,
      googleDriveImages: ["stamp6.jpg"],
      googleDriveVideos: [],
    },
  },
];

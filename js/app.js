// =====================================================
// app.js - 공통 유틸리티 함수
// =====================================================

// 🔐 인증 확인 (페이지 로드 시 호출)
function checkAuth() {
  if (!sessionStorage.getItem("birthday_auth")) {
    window.location.replace("index.html");
  }
}

// 📦 완료된 스탬프 목록 가져오기
function getCompletedStamps() {
  const stored = localStorage.getItem("birthday_completed_stamps");
  return stored ? JSON.parse(stored) : [];
}

// ✅ 스탬프 추가
function addStamp(id) {
  const stamps = getCompletedStamps();
  if (!stamps.includes(id)) {
    stamps.push(id);
    localStorage.setItem(
      "birthday_completed_stamps",
      JSON.stringify(stamps)
    );
  }
}

// ❓ 특정 스탬프 완료 여부 확인
function isCompleted(id) {
  return getCompletedStamps().includes(id);
}

// 🌟 모든 스탬프 완료 여부 확인
function isAllCompleted() {
  const completed = getCompletedStamps();
  return adventures.every((a) => completed.includes(a.id));
}

// 🔡 답변 정규화 (대소문자·공백 무시)
function normalizeAnswer(text) {
  return text.trim().toLowerCase().replace(/\s+/g, "");
}

// ✏️ 퀴즈 정답 확인
function checkAnswer(userInput, correctAnswers) {
  const normalized = normalizeAnswer(userInput);
  return correctAnswers.some(
    (ans) => normalizeAnswer(ans) === normalized
  );
}

// 🔗 URL 파라미터 가져오기
function getUrlParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

// 📖 ID로 어드벤처 데이터 가져오기
function getAdventureById(id) {
  return adventures.find((a) => a.id === parseInt(id));
}

// 🖼️ 로컬 이미지 URL
function getDriveImageUrl(filename) {
  return `images/${filename}`;
}

// 🎬 구글 드라이브 동영상 embed URL
function getDriveVideoUrl(fileId) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

// 🗺️ Google Maps 앱으로 열기
function openInMaps(lat, lng, name) {
  const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  window.open(url, "_blank");
}

// 🎊 confetti 헬퍼
function fireConfetti(options = {}) {
  if (typeof confetti === "undefined") return;
  const defaults = {
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FF6B9D", "#FF9F43", "#48DBFB", "#A29BFE", "#FFEAA7", "#55EFC4"],
  };
  confetti({ ...defaults, ...options });
}

// 🎊 대규모 confetti
function fireBigConfetti() {
  if (typeof confetti === "undefined") return;
  const count = 200;
  const defaults = { origin: { y: 0.7 } };
  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ["#FF6B9D", "#FF9F43", "#FFEAA7", "#A29BFE", "#55EFC4"],
    });
  }
  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

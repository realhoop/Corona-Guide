function copyToClipboard(val) {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand('copy');
  document.body.removeChild(t);
}
function copy(link) {
  copyToClipboard(link);
  alert('Copied!');
}
function shareTwitter() {
  // var sendText = "개발새발"; // 전달할 텍스트
  var sendUrl = "devpad.tistory.com/"; // 전달할 URL
  window.open("https://twitter.com/intent/tweet?text=" + "&url=" + sendUrl);
}
function shareFacebook() {
  var sendUrl = "devpad.tistory.com/"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init('0e17533e87dd5ddca8763112daabfc38');
  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: '#btnKakao', // 카카오공유버튼ID
    objectType: 'feed',
    content: {
      title: "개발새발", // 보여질 제목
      description: "개발새발 블로그입니다", // 보여질 설명
      imageUrl: "devpad.tistory.com/", // 콘텐츠 URL
      link: {
         mobileWebUrl: "devpad.tistory.com/",
         webUrl: "devpad.tistory.com/"
      }
    }
  });
}

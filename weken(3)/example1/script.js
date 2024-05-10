// 画像を表示するための関数
function showImage() {
  // 画像を表示するためのimg要素を取得
  var img = document.getElementById('image');
  // 画像のURLを設定
  img.src = 'https://maximum.vc/images/hero.png';
}

// ボタンがクリックされたときに呼び出される
function onLoaded() {
  // ボタン要素を取得
  const button = document.getElementById('button');
  // ボタンがクリックされたときにshowImage関数を呼び出す
  button.addEventListener('click', showImage);
}

// ページの読み込みが完了したときに呼び出される
document.addEventListener('DOMContentLoaded', onLoaded);
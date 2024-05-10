// 色を変更する関数
function changeColor() {
  var color = document.getElementById('text');
  color.style.color = 'red';
}

// ボタンがクリックされたときに呼び出される
function onLoaded() {
  const button = document.getElementById('button');
  button.addEventListener('click', changeColor);
}

// ページの読み込みが完了したときに呼び出される
document.addEventListener('DOMContentLoaded', onLoaded);
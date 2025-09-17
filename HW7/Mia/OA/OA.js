// 定义 replacer 模块
window.replacer = window.replacer || {};
(function () {
  window.replacer.initReplacer = function () {
    const replaceButton = document.getElementById("replace-btn");
    replaceButton.addEventListener("click", renderText, false);
  };

  function renderText() {
    document.getElementById("text").innerHTML = replace();
  }

  function replace() {
    //Add your code to replace
    const textarea = document.getElementById("text");
    const findValue = document.querySelector(".find").value;
    const replaceValue = document.querySelector(".replace").value;
    if (findValue) {
      // 用 split + join 实现全局替换
      return textarea.value.split(findValue).join(replaceValue);
    }
    return textarea.value;
  }
})();

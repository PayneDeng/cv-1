let demo = document.querySelector("#demo");
let string = `你好，我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
  color:red;
}
`;
string = string.replace(/\n/g, "<br>");
let n = 0;
demo.innerHTML = string.substring(0, n);

let step = () => {
  setTimeout(() => {
    n = n + 1;
    demo.innerHTML = string.substring(0, n);
    if (n < string.length) {
      step();
    }
  }, 100);
};

step();


// function compile() {
//     var html = document.getElementById("html");
//     var css = document.getElementById("css");
//     var js = document.getElementById("js");
//     var code = document.getElementById("code").contentWindow.document;
  
//     document.body.onkeyup = function() {
//       code.open();
//       code.writeln(
//         html.value +
//           "<style>" +
//           css.value +
//           "</style>" +
//           "<script>" +
//           js.value +
//           "</script>"
//       );
//       code.close();
//     };
//   }
  
//   compile();

const html= document.getElementById("html");
const css= document.getElementById("css");
const js= document.getElementById("js");

const run=document.querySelector(".btn-run");
const iframe=document.getElementById("code").contentWindow.document;
const darkMode=document.querySelector(".btn-dark");
const lightMode=document.querySelector(".btn-light");


let isLive=false;
run.addEventListener("click",()=>{
  console.log(html.value);
  console.log(css.value);
  console.log(js.value);
  iframe.open();
      iframe.writeln(
           html.value +
             "<style>" +
            css.value +
            "</style>" +
             "<script>" +
             js.value +
            "</script>"
         );
         iframe.close();
         console.log(iframe);   
})


darkMode.addEventListener("click",()=>{

  console.log("clicked");
  html.style.backgroundColor="#363836";
  css.style.backgroundColor="#363836";
  js.style.backgroundColor="#363836";


  html.style.color="#eee";
  html.style.color="#eee";
  html.style.color="#eee";
  
});


lightMode.addEventListener("click",()=>{
  html.style.backgroundColor="";
  css.style.backgroundColor="";
  js.style.backgroundColor="";


  html.style.color="";
  html.style.color="";
  html.style.color="";
  
});

document.body.onkeyup = function() {

  if(isLive)
  {
    iframe.open();
    iframe.writeln(
    html.value +
      "<style>" +
      css.value +
      "</style>" +
      "<script>" +
      js.value +
      "</script>"
  );
  iframe.close();

  }
};

document.getElementById("live").onclick = function()
{
  isLive=!isLive;
    if(isLive)
    {
      iframe.open();
      iframe.writeln(
    html.value +
      "<style>" +
      css.value +
      "</style>" +
      "<script>" +
      js.value +
      "</script>"
  );
  iframe.close();
    }
}


document.getElementById("dload").onclick = function(){
  var l = document.createElement("a");
  l.href = "data:text/html;charset=UTF-8," + iframe.body.innerHTML;
  l.setAttribute("download", "code");
  l.click();
}



	

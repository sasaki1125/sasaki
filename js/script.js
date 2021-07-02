// ハンバーガー
$(function () {
  $('.Toggle').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active');
        $('.NavMenu').fadeIn(500);
    } else {
        $('.NavMenu').removeClass('active');
        $('.NavMenu').fadeOut(500);
    }
  });

  $('.navmenu-a').click(function () {
    $('.NavMenu').removeClass('active');
    $('.NavMenu').fadeOut(1000);
    $('.Toggle').removeClass('active');
  });
});

// conBアニメーション
const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll",function() {
  for (let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
})
// Aboutアニメーション

const animationTargetElements = document.querySelectorAll(".textAnimation");
for (let i = 0; i < animationTargetElements.length; i++){
  const targetElement = animationTargetElements[i],
        texts = targetElement.textContent, 
        textsArray = [];
  
  targetElement.textContent = "";

  for (let j = 0; j < texts.split("").length; j++){
    const t = texts.split("")[j]; 
    if (t === "") {
        textsArray.push("");
      } else {
        textsArray.push('<span style="animation-delay: ' + (j*0.3) + 's;">' + t + '</span>')
      }
  }

  for (let k = 0; k < textsArray.length; k++){
    targetElement.innerHTML += textsArray[k];
  }
}






var menu = document.querySelector('.js-menu');

function menuHome(){
  animation(600);

  menu.classList.remove("active");
  menu.innerHTML = '';

  menuArr.forEach(function(item,index){
    if(item[1]){
     menu.innerHTML += '<li><a onclick="menuItem('+ index +')" href="javascript:void(0);">'+ item[0][0] +'<span>'+ item[1].length +' '+ getNumEnding(item[1].length, aEndings) +'</span></a></li>';
    }else{
      menu.innerHTML += '<li><a href="'+ item[0][1] +'">'+ item[0][0] +'</a></li>';
    }
  });
}

function menuItem(index){
 animation(600);

 menu.classList.add("active");
 menu.innerHTML = '';
 menu.innerHTML += '<li><a onclick="menuHome()" href="javascript:void(0);">Назад</a></li>';

 menuArr[index][1].forEach(function(item){
  menu.innerHTML += '<li><a href="'+ item[1] +'">'+ item[0] +'</a></li>';
 });
}

function animation(time){
  menu.classList.add("animation");

  function animationRemove(){
    menu.classList.remove("animation");
  }
  setTimeout(animationRemove, time);
}



var aEndings = ['Публікація', 'Публікації', 'Публікацій'];
function getNumEnding(iNumber, aEndings){
    var sEnding, i;
    iNumber = iNumber % 100;
    if (iNumber>=11 && iNumber<=19) {
        sEnding=aEndings[2];
    }
    else {
        i = iNumber % 10;
        switch (i)
        {
            case (1): sEnding = aEndings[0]; break;
            case (2):
            case (3):
            case (4): sEnding = aEndings[1]; break;
            default: sEnding = aEndings[2];
        }
    }
    return sEnding;
}

menuHome();

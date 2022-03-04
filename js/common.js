$('body')
.prepend('<header></header>') // 앞
.append('<footer></footer>'); // 뒤


$('header').load('inc.html header > div',navi); //로드 완료시 실행할 명령
//클래스가있다면 문서 뒷편에 쓰면 해당 문서안에있는 클래스나 태그가 header에 로드가 됨
$('footer').load('inc.html footer > div');


function navi(){
    // if(localStorage.pageNum){
    //     $('header nav a')
    //     .eq(localStorage.pageNum)
    //     .css({borderBottom:'4px solid #5eaeba'});        
    // }
    // $('header a').eq(localStorage.pageNum).css({borderBottom:'2px solid #f00'});

    // $('header nav a').on('click',function(e){
    //     e.preventDefault();
    //     localStorage.pageNum = $(this).index();
    //     location.href = $(this).attr('href');
                            
    // })
}
const webdevVideo = document.querySelectorAll('.Vid1');
const webdevVideoCard = document.querySelectorAll('.VideoCard');
for (let i = 0; i < webdevVideoCard.length; i++) {
    webdevVideoCard[i].addEventListener('mouseenter',
    function(e){
        console.log('dddupa');
        webdevVideo[i].play();
       
    })
    webdevVideoCard[i].addEventListener('mouseout', function(e){
        console.log('dududupa');
        webdevVideo[i].pause();
        
    })
}

const cgiVideo = document.querySelectorAll('.CGI-video');
const cgiVideoCard = document.querySelectorAll('.CGI-Card');
for (let i = 0; i < cgiVideoCard; i++) {
    cgiVideoCard[i].addEventListener('mouseenter',
    function(e){
        console.log('dudududududupa');
        cgiVideo[i].play()
    })
    cgiVideoCard[i].addEventListener('mouseleave',function(e){
    console.log('dddddddddupa');
    cgiVideo[i].pause()

    })
}

for (let i = 0; i < cgiVideoCard.length; i++) {
    cgiVideoCard[i].addEventListener('mouseenter',
    function(e){
        console.log('dddupa');
        cgiVideo[i].play();
       
    })
    cgiVideoCard[i].addEventListener('mouseleave', 
    function(e){
        console.log('dududupa');
        cgiVideo[i].pause();
        
    })
}
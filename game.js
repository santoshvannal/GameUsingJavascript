score = 0;
cross = true;
document.addEventListener("keydown", keyDown);
function keyDown(e){
    e.preventDefault();
    //console.log(e.key);
    if(e.key == "ArrowUp")
    {
       // console.log("hello");
        hero = document.querySelector(".hero");
        hero.classList.add("animateHero");
        setTimeout(()=> {
            hero.classList.remove("animateHero")
        }, 800);
    } 

    if(e.key == "ArrowLeft")
    {
       // console.log("hello");
        //hero = document.querySelector(".hero");
        hero = document.querySelector(".hero");
        heroX = parseInt(window.getComputedStyle(hero,null).getPropertyValue("left"));
        hero.style.left = (heroX-50) + "px";
        
    } 

    if(e.key == "ArrowRight")
    {
       // console.log("hello");
        //hero = document.querySelector(".hero");
        hero = document.querySelector(".hero");
        heroX = parseInt(window.getComputedStyle(hero,null).getPropertyValue("left"));
        hero.style.left = (heroX+50) + "px";
    } 
}





setInterval(()=> {

    // var h = document.querySelector(".hero");
    // var e = document.querySelector(".enemy");

    // function isColide(a,b)
    // {
    //     aRect = a.getBoundingClientRect();
    //     bRect = b.getBoundingClientRect();
    
    //     return !((aRect.bottom < bRect.top)||(aRect.top > bRect.bottom)||(aRect.right < bRect.left)||(aRect.left > bRect.right))
    // }

    // if(isColide(h,e))
    // {
    //     console.log("collide");
    // }
    hero = document.querySelector(".hero");
    enemy = document.querySelector(".enemy");
    gameOver = document.querySelector(".gameOver");
    scoreCount = document.querySelector(".scoreCount");
    
    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue("top"));

    ex = parseInt(window.getComputedStyle(enemy, null).getPropertyValue("left"));
    ey = parseInt(window.getComputedStyle(enemy, null).getPropertyValue("top"));
    
    offsetX = Math.abs(hx-ex);
    offsety = Math.abs(hy-ey);

    if(offsetX< 73 && offsety<52)
    {
        gameOver.style.visibility = "visible";
        enemy.classList.remove("animateEnemy");
        console.log("collision");
    }
    else if(cross && offsetX < 145)
    {

        score+=1;
        console.log("score == "+score);
        scoreCount.innerHTML = "Score: " + score;
        cross = false;

        setTimeout(()=> {
            cross = true;
        },1000);
    }
},10);

// function updateScore(score){
//     scoreCount//.innerHTML = "your score:" + score; 
//    // document.querySelector("scoreCount").innerHTML = "your score:" + score; 

// }

setTimeout(()=> {
   
},1000);
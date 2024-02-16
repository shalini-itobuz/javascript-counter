let c=0;
const value=document.querySelector("#value");
const buttons=document.querySelectorAll(".btn");
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains("counter-up")){
            c++;
        }
        else if(styles.contains("counter-down")){
            c--;
        }
        else{
            c=0;
        }
        if(c>0){
            value.style.color="green";
        }
        if(c<0){
            value.style.color="red";
        }
        if(c===0){
            value.style.color="black";
        }
        value.textContent=c;
    })
});
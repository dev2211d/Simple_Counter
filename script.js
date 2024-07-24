var countDisplay=document.getElementById('display-number'); //to show number
const plusBtn=document.getElementById('plus-btn'); //plus button
const minusBtn=document.getElementById('minus-btn'); //minus button
var settingTimeCount=0;
var refreshTimeCount=0;

const infoBtn=document.getElementById('info-btn'); //info button
const settingBtn=document.getElementById('setting-btn'); //setting button
const refreshBtn=document.getElementById('refresh-btn'); //refresh button
let mainDisplay=document.querySelector('.main-display');//home screen content
let wrapperInfoBtn=document.querySelector('.wrapper-info-btn'); //info screen content
let wrapperSettingBtn=document.querySelector('.wrapper-setting-btn');//setting screen content
let wrapperRefreshBtn=document.querySelector('.wrapper-reset-btn');//refresh screen content

let resetYes=document.querySelector('.reset-yes'); //refresh ->yes button
let resetNo=document.querySelector('.reset-no'); //refresh ->no button

const color1=document.querySelector('.color1'); //background color change in setting screen
const color2=document.querySelector('.color2');
const color3=document.querySelector('.color3');
const color4=document.querySelector('.color4');
const color5=document.querySelector('.color5');
const color6=document.querySelector('.color6');
const color7=document.querySelector('.color7');
const color8=document.querySelector('.color8');



let limitDivAvailableDisplay=document.querySelector('.limit-div'); //make limit div visible when limit is set in setting screen
let toggler=document.getElementById('toggler-1');//to activate limit setting button
let maxLimit=document.querySelector('.max-limit'); //if toggler is checked then making limit set button visible
let limitDisplayContainer=document.querySelector('.maxLimitRemaining'); //display remaining limit on home screen
let limitReached=document.querySelector('.limit-reached'); //pop-up when limit is reached
var maxLimitNum=document.getElementById('max-num');//limit set by us 
if(!(toggler.checked))
    {
        maxLimitNum=null;
    }

mainDisplay.classList.add('active'); //making home screen visible when loaded

//for increment
plusBtn.addEventListener('click',()=>{
    let count=parseInt(countDisplay.innerText);
    count=count+1;
    console.log(maxLimitNum);
    if(!(toggler.checked))
        {
            limitDivAvailableDisplay.style.visibility='hidden';
        }
    if(maxLimitNum!=null&&toggler.checked)
    {
        maxLimitNum=maxLimitNum-1;
        limitDisplayContainer.innerText=maxLimitNum;
        limitReached.style.visibility='hidden';
    }
    if(maxLimitNum===0||maxLimitNum<0)
        {
            limitReached.style.visibility='visible';
        }
    if(count>0)
        {
            minusBtn.classList.add('active');
        }
    else{
        minusBtn.classList.remove('active');
    }
    countDisplay.innerText=count;
})

//for decrement
minusBtn.addEventListener('click',()=>{
    let count=parseInt(countDisplay.innerText);
    count=count-1;
    if(!(toggler.checked))
        {
            limitDivAvailableDisplay.style.visibility='hidden';
        }
    if(maxLimitNum!=null)
   {
    maxLimitNum=maxLimitNum+1;
    limitDisplayContainer.innerText=maxLimitNum;
    if(maxLimitNum!=0)
        limitReached.style.visibility='hidden';
   }
    countDisplay.innerText=count;
    if(count===0)
        {
            minusBtn.classList.remove('active');
            return ;
        }
});

//when clicked on info button
infoBtn.addEventListener('click',()=>{
    mainDisplay.classList.remove('active');
    wrapperInfoBtn.classList.add('active');
    minusBtn.style.visibility='hidden';
});

//when clicked on setting button
settingBtn.addEventListener('click',()=>{
    settingTimeCount=parseInt(countDisplay.innerText);
    wrapperRefreshBtn.classList.remove('active');
    mainDisplay.classList.remove('active');
    wrapperInfoBtn.classList.remove('active');
    wrapperSettingBtn.classList.add('active');
    minusBtn.style.visibility = 'hidden';
});

//when clicked on refresh button
refreshBtn.addEventListener('click',()=>{
    mainDisplay.classList.remove('active');
    wrapperInfoBtn.classList.remove('active');
    wrapperSettingBtn.classList.remove('active');
    wrapperRefreshBtn.classList.add('active');
    minusBtn.style.visibility = 'hidden';
});

document.addEventListener('click',()=>{
 if(!infoBtn.contains(event.target)&&!wrapperInfoBtn.contains(event.target)&&!settingBtn.contains(event.target)&&!wrapperSettingBtn.contains(event.target)&&!refreshBtn.contains(event.target)&&!wrapperRefreshBtn.contains(event.target)|((event.target.id==='reset-home'))|(event.target.id==='go-home'))
    {
       console.log('1st');
        wrapperRefreshBtn.classList.remove('active');
        wrapperInfoBtn.classList.remove('active');
        wrapperSettingBtn.classList.remove('active');
        mainDisplay.classList.add('active');
        let count=parseInt(countDisplay.innerText);
        if(count===0)
            {
                minusBtn.style.visibility='hidden';
                return ;
            }
        else{
            minusBtn.style.visibility='visible';
            minusBtn.classList.add('active');
        }
        // minusBtn.style.visibility='visible';
    }
 else if(!infoBtn.contains(event.target)&&!wrapperInfoBtn.contains(event.target)&&!refreshBtn.contains(event.target)&&!wrapperRefreshBtn.contains(event.target)&&(settingBtn.contains(event.target)|wrapperSettingBtn.contains(event.target)))
    {
       console.log('2nd');
        mainDisplay.classList.remove('active');
        wrapperInfoBtn.classList.remove('active');
        wrapperRefreshBtn.classList.remove('active');
        wrapperSettingBtn.classList.add('active');
    }
 else if(!settingBtn.contains(event.target)&&!wrapperSettingBtn.contains(event.target)&&!refreshBtn.contains(event.target)&&!wrapperRefreshBtn.contains(event.target)&&(infoBtn.contains(event.target)|wrapperInfoBtn.contains(event.target)))
    {
       console.log('3rd');
        mainDisplay.classList.remove('active');
        wrapperSettingBtn.classList.remove('active');
        wrapperRefreshBtn.classList.remove('active');
        wrapperInfoBtn.classList.add('active');
    }
else if((!infoBtn.contains(event.target)&&!wrapperInfoBtn.contains(event.target)&&!settingBtn.contains(event.target)&&!wrapperSettingBtn.contains(event.target)&&(refreshBtn.contains(event.target)|wrapperRefreshBtn.contains(event.target))))
    {
        console.log('4th');
        mainDisplay.classList.remove('active');
        wrapperSettingBtn.classList.remove('active');
        wrapperInfoBtn.classList.remove('active');
        wrapperRefreshBtn.classList.add('active');
    }
});


color1.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#141516';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})
color3.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#f3f3f3';
    
    mainDisplay.style.color='#141516';
    wrapperInfoBtn.style.color='#141516';
    wrapperSettingBtn.style.color='#141516';
})
color5.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#004291';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})
color7.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#ed1e79';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})
color2.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#607d8b';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})
color4.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#a700a5';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})
color6.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#00ad98';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})
color8.addEventListener('focus',()=>{
    document.body.style.backgroundColor='#ffac02';
    mainDisplay.style.color='#f3f3f3';
    wrapperInfoBtn.style.color='#f3f3f3';
    wrapperSettingBtn.style.color='#f3f3f3';
})

//setting functionality to direct change value of data on home screen
function chooseStanding(){
    let input=document.getElementById('set-count');
    let newVal=input.value;
    countDisplay.innerText=newVal;
}

//maximum limit value
function chooseStandingMaxValue()
{
    // console.log(mainDisplay.innerText);
    let input=document.getElementById('max-num');
   maxLimitNum=input.value 
   if(maxLimitNum!=null)
    {
        maxLimitNum=maxLimitNum-settingTimeCount;
        limitDisplayContainer.innerText=maxLimitNum;
        console.log(maxLimitNum);
    }
    if(maxLimitNum===0|maxLimitNum<0)
        {
            limitReached.style.visibility='visible';
        }
    else{
        limitReached.style.visibility='hidden';
    }
   
}

//to check toggle is checked and handling visibility of maximum limit setting button
function toggle()
{
    if(toggler.checked)
        {
            maxLimit.classList.add('checkbox-checked');
            limitDivAvailableDisplay.style.visibility='visible';
        }
    else{
        maxLimit.classList.remove('checkbox-checked');
    }
}

//event listener to be call above mentioned function
toggler.addEventListener('click',toggle);

//handling functionalities  of cancel button on refresh screen
function resetToHome(){
    wrapperRefreshBtn.classList.remove('active');
    wrapperInfoBtn.classList.remove('active');
    wrapperSettingBtn.classList.remove('active');
    mainDisplay.classList.add('active');
    let count=parseInt(countDisplay.innerText);
    if(count===0)
        {
            minusBtn.style.visibility='hidden';
            return ;
        }
    else{
        minusBtn.style.visibility='visible';
        minusBtn.classList.add('active');
    }
}

//handling functionalities of yes button on refresh screen ->home screen pe value 0 ho jani chahiye aur setting button m setCount 0 hona chahiye
resetYes.addEventListener('click',()=>{
    countDisplay.innerText='0';
    if(toggler.checked)
        {
            let inputLimit=document.getElementById('max-num');
   maxLimitNum=inputLimit.value 
   limitReached.style.visibility='hidden';
        }
    limitDisplayContainer.innerText=maxLimitNum;
    let input=document.getElementById('set-count');
    input.value=0;
    console.log(input.value);
    
    wrapperRefreshBtn.classList.remove('active');
    wrapperInfoBtn.classList.remove('active');
    wrapperSettingBtn.classList.remove('active');
    mainDisplay.classList.add('active');
    let count=parseInt(countDisplay.innerText);
    if(count===0)
        {
            minusBtn.style.visibility='hidden';
            return ;
        }
    else{
        minusBtn.style.visibility='visible';
        minusBtn.classList.add('active');
    }
});

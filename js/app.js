//Ui

const whatisvpn = document.getElementById('wvpn'),
    vpnapp = document.getElementById('vpna'),
    severs = document.getElementById('severs'),
    navitems = document.querySelectorAll('.nav-items');

    const whatisvpnbox = document.getElementById('for-menu-one');
    const vpnappbox = document.getElementById('vpn-app-box');
    const severbox = document.getElementById('sever-box');

    //event listener
    //what is vpn
    whatisvpn.addEventListener('mouseenter',()=>{
        whatisvpnbox.style.transform = "rotateX(0)";
        vpnappbox.style.transform = "rotateX(90deg)";
        severbox.style.transform = "rotateX(90deg)";
    });

    whatisvpnbox.addEventListener('mouseleave',()=>{
        whatisvpnbox.style.transform = "rotateX(90deg)";
    });

    //vpn app
    vpnapp.addEventListener('mouseenter',()=>{
        vpnappbox.style.transform = "rotateX(0)";
        whatisvpnbox.style.transform = "rotateX(90deg)";
        severbox.style.transform = "rotateX(90deg)";
    });

    vpnappbox.addEventListener('mouseleave',()=>{
        vpnappbox.style.transform = "rotateX(90deg)";
    });

    //severs
    severs.addEventListener('mouseenter',()=>{
        severbox.style.transform = "rotateX(0)";
        whatisvpnbox.style.transform = "rotateX(90deg)";
        vpnappbox.style.transform = "rotateX(90deg)";
    });
    severbox.addEventListener('mouseleave',()=>{
        severbox.style.transform = "rotateX(90deg)";
    })

    //fix nav
    navitems.forEach((navitem)=>{
        navitem.addEventListener('mouseenter',()=>{
            whatisvpnbox.style.transform = "rotateX(90deg)";
            vpnappbox.style.transform = "rotateX(90deg)";
            severbox.style.transform = "rotateX(90deg)";
        })
    });


    //For Time


    const hour = document.getElementById('hr'),
          min = document.getElementById('min'),
          sec = document.getElementById('sec');

    const hr = document.querySelector('.hr'),
          mi = document.querySelector('.min'),
          se = document.querySelector('.sec');

          let [milliseconds,seconds,minutes,hours] = [1000,59,59,11];


          function displaytimer() {

            milliseconds -= 10;
        
            if (milliseconds === 0) {
                milliseconds = 1000;

                seconds--;
        
                if (seconds === 0) {
                    seconds = 60;
        
                    minutes--;
        
                    if (minutes === 0) {
                        minutes = 60;
        
                        hours--;
                    }
                }
            }
        
            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;
        
        
            hour.innerText = `${h}`;
            min.innerText = `${m}`;
            sec.innerText = `${s}`;

            hr.innerText = `${h}`;
            mi.innerText = `${m}`;
            se.innerText = `${s}`;
        }

        function starttime(){
    
            time = setInterval(displaytimer,10);
        }

        setTimeout(starttime,3000);



        //For mmk

        const oneup     = document.getElementById('up1'),
              onedown   = document.getElementById('down1'),
              twoup     = document.getElementById('up2'),
              twodown   = document.getElementById('down2'),
              threeup   = document.getElementById('up3'),
              threedown = document.getElementById('down3');

        const checkbox = document.getElementById('toggle'),
              slider = document.getElementById('slider');

        const toast = document.getElementById('toast'),
              toasttext = document.getElementById('toast-text');

            slider.addEventListener('click',()=>{
                // console.log("hay");
                if(!checkbox.checked){
                    oneup.innerText = "21400 MMK";
                    onedown.innerText = "28400 MMK";
                    twoup.innerText = "3700 MMK";
                    twodown.innerText = "3700 MMK";
                    threeup.innerText = "10500 MMK";
                    threedown.innerText = "1370000 MMK";

                    toast.style.display = "block";
                    toasttext.innerText = "Now you Change MMK";
                    toast.style.transform = "translateY(0%)";
                    setTimeout(()=>{
                        toast.style.transform = "translateY(200%)";
                    },1800);


               }else{
                oneup.innerHTML = `<span class="dolarsign">$</span>12.99<span> /mo</span>`;
                onedown.innerText = "$12.99";
                twoup.innerHTML = `<span class="dolarsign">$</span>2.25<span> /mo</span>`;
                twodown.innerText = "$58.5";
                threeup.innerHTML = `<span class="dolarsign">$</span>6.39<span> /mo</span>`;
                threedown.innerText = "$83.34";

                toasttext.innerText = "Now you change US $";
                toast.style.transform = "translateY(0%)";
                    setTimeout(()=>{
                        toast.style.transform = "translateY(200%)";
                    },1800);

                }
       
            });


const getoffer = document.getElementById('discountbtn');
const home = document.querySelector('.home');
const discount = document.querySelector('.discount');
const index = document.getElementById('index');



getoffer.addEventListener('click',()=>{
    home.style.display = "none";
    discount.style.display = "flex";
    toast.style.display = "block";
});

index.addEventListener('click',()=>{
    home.style.display = "flex";
    discount.style.display = "none";
    toast.style.display = "none";
});


          


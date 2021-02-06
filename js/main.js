const $forme=document.getElementById('forme');
const $list=document.getElementById('list');
const $caption=document.getElementById('caption');
const ar= ["David","Meir","Neta","Avi","David a","Neta b"];

$caption.innerText=ar.join('--');
const callback=(event)=> {

    if (event.target.localName=="input") 
    {

        //init 
        $list.innerHTML="";

        let myvalue=event.target.value;
        if(myvalue) {

            let res=ar.filter((name)=>name.indexOf(myvalue)===0);
            $list.classList.add('show');
            res.forEach(item=> {
                $list.innerHTML+=`<li>${item}</li>` ;
            })
            
        }
        
 
    }

}

$forme.addEventListener('keyup', callback);



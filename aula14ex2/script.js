function table(){
    let num=document.getElementById('txtn')
    let tab=document.getElementById('seltab')
    if(num.value.length==0){
        alert('Por favor, digite um numero!')
    }else{
        let n=Number(num.value)
        tab.innerHTML=''
        for(c=1;c<=10;c++){
            let item=document.createElement('option')
            item.text=`${n}*${c}=${n*c}`
            tab.appendChild(item)
        }
    }
   

}
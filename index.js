function Sapxep(){
    var somotEL=document.getElementById("so-thu-nhat").value*1;
    var sohaiEL=document.getElementById("so-thu-hai").value*1;
    var sobaEL=document.getElementById("so-thu-ba").value*1;

    var sapxepEl;
 
 

    if(somotEL>sohaiEL && somotEL>sobaEL)
    {
        if(sohaiEL>sobaEL)
        {
        sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
        Số thứ tự được sắp xếp theo chiều tăng dần là :
        ${(sobaEL + "," + sohaiEL + "," + somotEL )} </h2>`;
        }
        else{
            sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Số thứ tự được sắp xếp theo chiều tăng dần là :
            ${(sohaiEL + "," + sobaEL + "," + somotEL )} </h2>`;
        }
    }

    else if(sohaiEL>somotEL && sohaiEL>sobaEL)
    {
        if(sobaEL>somotEL){
            sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Số thứ tự được sắp xếp theo chiều tăng dần là :
            ${(somotEL + "," + sobaEL + "," + sohaiEL )} </h2>`;
            }
            else{
                sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">  Số thứ tự được sắp xếp theo chiều tăng dần là :${(sobaEL + "," + somotEL + "," + sohaiEL )} </h2>`;
            }

    }

    else if(sobaEL>somotEL && sobaEL>sohaiEL)
    {
        if(sohaiEL>somotEL){
            sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
            Số thứ tự được sắp xếp theo chiều tăng dần là :
            ${(somotEL + "," + sohaiEL + "," + sobaEL )} </h2>`;
            }
            else{
                sapxepEl=document.getElementById("result").innerHTML=`<h2 class="mt-5 text-danger text-center">
                Số thứ tự được sắp xếp theo chiều tăng dần là :${(sohaiEL + "," + somotEL + "," + sobaEL )} </h2>`;
            }

    }

}
/*----------------Bài 2----------------*/
function Dem(){
    var x=document.getElementById("mot").value*1;
    var y=document.getElementById("hai").value*1;
    var z=document.getElementById("ba").value*1;

    var DemsochanEL=0;
    

    if(x%2==0){
        DemsochanEL++;
    }
     if(y%2==0){
        DemsochanEL++;
    }
     if(z%2==0){

        DemsochanEL++;
    }

    
    var DemsoleEL=3-DemsochanEL;
    console.log("🚀 ~ file: index.js:75 ~ Dem ~ DemsoleEL", DemsoleEL)
    

    var DemEL = document.getElementById("demso").innerHTML=`<h2 class="mt-5 text-danger text-center">Có: ${DemsochanEL} số chẵn <br />
    Có:${DemsoleEL} số lẻ
    </h2>`;

        


}

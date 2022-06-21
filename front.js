
async function postData(){
    document.getElementById('short').innerHTML = 'Loading...';

    var dat = {
        longUrl: document.getElementById('auto').value
    //     // longUrl: "https://www.w3schools.com/tags/att_input_value.asp"
        
    }
    // var dat = {"longUrl":"https://codeforces.com/"}
    console.log(dat);
    const response = await fetch('https://l-sh.herokuapp.com/api/url/shorten/',{
        method: 'POST',
        mode: 'cors',
        headers:{
            
            "Content-type": "application/json; charset=UTF-8"
            
            
        },
        AccessControlAllowOrigin: '*',
        ReferrerPolicy: 'no-referrer',
        redirect: 'follow',
        body: JSON.stringify(dat)
        
    });
    return response.json();
    console.log(`data is recieved & data = ${dat.longUrl}`)
    
    if(response.ok) alert (response.json());
}
function print(){
   console.log("getElementById");
   console.log(document.getElementById("auto").value);
}
var output;

function foo(){
    postData().
    then(data=>{
        // console.log('Sucess: ',data);
        output= data.shortUrl;
        console.log(output);
        if(!output){
            output = 'INVALID LONG URL'
        }
        document.getElementById('short').innerHTML = output;
        // alert(output);

    }).
    catch((err)=> {console.error('Error: ',err);});
    // const p = document.createElement("p");
    // const node = document.createTextNode(output[2];
    // p.appendChild(node);
    // document.getElementById("header").appendChild(p);
}


function f(){

}

// postData();
document.getElementById("subbb").addEventListener('click',foo);
// postData

// );
// );
// }));

// document.getElementById("subbb").addEventListener('click',()=> console.log('hey'));
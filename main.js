
        let ArrayOfLinks = localStorage.getItem("ArrayOfLinks");
        if(ArrayOfLinks==null){
            ArrayOfLinks=[];
        } else{
            ArrayOfLinks=eval(ArrayOfLinks);
            const url = window.location.href;
            const searchParams = new URL(url).searchParams; 
            const urlSearchParams = new URLSearchParams(searchParams);
            let id = urlSearchParams.get('id'); // Returns value of param1
            if(id!==null){
                let boool1 = ArrayOfLinks.find(e=>e.id==`${id}`);
                window.location.href=boool1.url
            }
        }



    document.querySelector('#btn-short').addEventListener('click', ()=>{

        let newURL=document.querySelector('#newURL').value;

        if(newURL!==''){
            
            let boool = ArrayOfLinks.find(e=>e.url===`${newURL}`);
                
            if(boool!==undefined){
                document.querySelector('#newURL').value='';
                document.querySelector('#out-but').href=window.location.origin + window.location.pathname+`?id=${boool.id}`;
                document.querySelector('#out-but').innerHTML=window.location.origin + window.location.pathname+`?id=${boool.id}`;
            }else if(boool===undefined){
                document.querySelector('#newURL').value='';
                let id = Math.floor(Math.random() * 10000);
                
                ArrayOfLinks.push({
                    "id": id,
                    "url": newURL
                });

                localStorage.setItem("ArrayOfLinks",JSON.stringify(ArrayOfLinks));
                document.querySelector('#out-but').href=window.location.origin + window.location.pathname+`?id=${id}`;
                document.querySelector('#out-but').innerHTML=window.location.origin + window.location.pathname+`?id=${id}`;
        
            }
        }
    });


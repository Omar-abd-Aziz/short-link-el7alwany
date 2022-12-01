
    let ArrayOfLinks=localStorage.getItem("ArrayOfLinks")||[];

    window.onload=()=>{
        let ArrayOfLinks=localStorage.getItem("ArrayOfLinks");
        ArrayOfLinks=eval(ArrayOfLinks);
        const url = window.location.href;
        const searchParams = new URL(url).searchParams; 
        const urlSearchParams = new URLSearchParams(searchParams);
        let id = urlSearchParams.get('id'); // Returns value of param1
        if(id!==null){
            ArrayOfLinks.forEach(e=>{
                if(id==e.id){
                    window.location.href=e.url
                }
            })
        }

    }

    document.querySelector('#btn-short').addEventListener('click', ()=>{
        createShort();
    });

    function createShort() {
        let newURL=document.querySelector('#newURL').value;
        if(newURL!==''){
            let ArrayOfLinks=localStorage.getItem("ArrayOfLinks");
            ArrayOfLinks=eval(ArrayOfLinks);
            document.querySelector('#newURL').value='';
            let id = Math.floor(Math.random() * 10000)
            ArrayOfLinks.push({
                "id": id,
                "url": newURL
            });

            let x = ArrayOfLinks;
            
            localStorage.setItem("ArrayOfLinks",JSON.stringify(ArrayOfLinks));

            document.querySelector('#out-but').href=window.location.origin + window.location.pathname+`?id=${id}`;
            document.querySelector('#out-but').innerHTML=window.location.origin + window.location.pathname+`?id=${id}`;
        }
    };


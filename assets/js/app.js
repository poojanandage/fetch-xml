let cl = console.log;


const count = 50;
const apiKey = 'xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
//https://api.unsplash.com/photos/random/?client_id=xloMzbEgalV5ABNMRl1jtD340RkBCHrYcS2PzlzEfiw&count=50
const data = document.getElementById("info")

function fetchapi(url) {
    return fetch(url,{
        
    }).then(res=>res.json())
}
fetchapi(apiUrl)
        .then(data=>{
            templating(data)
        })
        .catch(cl)
// function makeApicall(md,url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();

//         xhr.open(md,url,true);

//         xhr.onload=function () {
//             if (xhr.status === 200 || xhr.status === 201) {
//                 cl(xhr.response)
//                 resolve(xhr.response)
//             } else {
//                 reject("something wrong.....")
//             }
//         }
//         xhr.send()
//     })
// }
// makeApicall("GET",apiUrl)
//             .then(res=>{
//                 let data = JSON.parse(res)
//                 templating(data)
//             })
//             .catch(cl)


function templating(arr) {
    let result = "";
    arr.forEach(ele => {
        result +=`<div class="col-md-4 my-3">
        <div class="card bg-light">
            <div class="card-body">
                <div class="img">
                     <img src="${ele.urls.thumb}" alt="" class="img-fluid">
                </div>
                <div class="card-title my-1 text-center">
                    <span class="h5 mr-3"><i class="fas fa-thumbs-up mr-2 text-primary"></i>Likes -${ele.likes}</span>
                    <span class="h5 ml-2"><i class="fas fa-eye mr-2 text-dark"></i>Views -${ele.views}</span>
                </div>
            </div>

        </div>
    </div>`
    });
    data.innerHTML = result;
}
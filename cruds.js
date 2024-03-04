 // get total
//create product
//save localstorage
//clear input after create a pruduct
//read 
//count
//delete
//update
//search
//clean data
 var title = document.getElementById('titl');
var price = document.getElementById('price');
var taxes = document.getElementById('taxes');
var ads = document.getElementById('ads');
var discount = document.getElementById('discount');
var total = document.getElementById('total');
var count = document.getElementById('count');
var category = document.getElementById('category');
var submit = document.getElementById('submit');
//pour verifier que les element sont correctement ecite
console.log(title,price,taxes,ads,discount,total,count,category,submit);
// get total
function gettotal(){
    //console.log('done'); ---> c'est juste pour verifier la fonction 
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value ) - +discount.value ;
        total.innerHTML =result ;
        total.style.background= '#040';
    }else {
        total.innerHTML='';
        total.style.background='#a00d02';
    }
}

//create product
var datapro ;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro = [];
}
//var datapro = []; --> ca au depart ms ca cause probleme 
//les element sont liee entre eux donc on est besoin de creer un object 
submit.onclick = function(){
    var newpro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML, //psc seulemnet un input que peut le recuperer par .value
         count:count.value,
         category:category.value,
    }
    datapro.push(newpro);
    localStorage.setItem('product' , JSON.stringify(datapro));  //save localstorage
    cleardata()
    showdata()
    console.log(datapro); // juste pour tester l'object
}

//save localstorage ---> deja fait dans la fonction getproduct

//clear input --->  after create a pruduct
function cleardata(){   //---> dans la fonction principal getproduct on fait l'appel a cleardata()
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}

//read 
function showdata(){
    let table ='';
    for(let i=0 ; i < datapro.length ;i++){
       // table=datapro[i]; //---> table=datapro[i].title; si je veux juste le promier champ de caque ligne
       //  console.log(table) ---> reste valide dans le console mais dans la page il affiche [object object] donc on fait comme ca
        table +=`
        <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button id="update">update</button></td>
            <td><button id="delete" onclick='deletedata(${i})'>delete</button></td>
            </tr>
        `

    }
    document.getElementById('tbody').innerHTML=table;

//pour suppremer tout les elemnts

    let btndeleteall = document.getElementById('deleteall');
    if(datapro.length> 0){
        btndeleteall.innerHTML =`
        <button onclick="deleteALL()" >delete all</button>
        `
    }else{
        btndeleteall.innerHTML='';
    }
}
showdata() // Pour que on peut savoir les donnes toujour dans la page
//count
//delete --> la promier partie dans la fonction precedent dans le button

function deletedata(i){
    datapro.splice(i,1); //pour suppremer dans array
    localStorage.product=  JSON.stringify(datapro); //pour supremer dans localstorage
    showdata() //c'est pour une fois que on click sur le button delete on arrive a voir la modification en meme temps               
}
function deleteALL(){
    localStorage.clear();
    datapro.splice(0);
    showdata();
}

//update
//search
//clean data
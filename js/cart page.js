const product =[
    {
        image: 'images/p1.jpeg',
        title: 'Health  Medicines',
        price: 120
    },
    {
        image: 'images/p2.jpeg',
        title: 'Health  Medicines',
        price: 150
    },
    {
        image: 'images/p3.jpeg',
        title: 'Health  Medicines',
        price: 230
    },
    {
        image: 'images/p4.jpeg',
        title: 'Health  Medicines',
        price: 70
    },
    {
        image: 'images/p5.jpeg',
        title: 'Health  Medicines',
        price: 145
    },
    {
        image: 'images/p6.jpeg',
        title: 'Health  Medicines',
        price: 85
    },
    {
        image: 'images/p7.jpeg',
        title: 'Health  Medicines',
        price: 100
    },
]

const categories = [...new Set(product.map((item)=>
    {return item}))];

    function delElement(a){
        categories.splice(a, 1);
        displaycart();
    }

    function promo(){
        let promocode=document.getElementById('promocode').value;
        if(promocode==1 ||promocode==2 ||promocode==3 ){
            displaycart(50);
        }
        else(
            prompt("Enter correct promo code")
        )
    }
function displaycart(c){
    let j=0, total=0;
    document.getElementById("itemA").innerHTML = categories.length + " Items";
    document.getElementById("itemB").innerHTML = categories.length + " Items";
    if(categories.length==0){
        document.getElementById("root").innerHTML="Your cart is empty";

        document.getElementById("totalA").innerHTML = "$ 00.00";
        document.getElementById("totalB").innerHTML = "$ 00.00";
    }
    else{
        document.getElementById("root").innerHTML = categories.map((items)=>{
            let {image, title, price} = items;
            total = total+price;
            document.getElementById("totalA").innerHTML = "$ "+ total +".00";

            if(c==50){
                document.getElementById("totalB").innerHTML="$ "+(total-c)+".00";
            }else{
                document.getElementById("totalB").innerHTML="$ "+total+ ".00";
            }
            
            return(
                `<tr>
                    <td width="150"><div class="gh"> <img class="ga" src=${image}></div></td>
                    <td width="360"><p style='font-size:15px;'>${title}</p></td>
                    <td width="150"><h2 style='font-size:15px; color:red; '>$ ${price}.00</h2></td>
                    <td width="70">`+"<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></td>"+
                `</tr>`
            );
        }).join('');
    }
}
displaycart();
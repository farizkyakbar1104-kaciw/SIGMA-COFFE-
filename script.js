// =========================================
// SIGMA COFFE STORE
// script.js
// =========================================

// -------------------------------
// DATA KERANJANG
// -------------------------------

let keranjang = [];
let total = 0;

// -------------------------------
// TAMBAH KE KERANJANG
// -------------------------------

function tambahKeranjang(nama, harga){

    keranjang.push({
        nama: nama,
        harga: harga
    });

    tampilKeranjang();

}

// -------------------------------
// TAMPILKAN KERANJANG
// -------------------------------

function tampilKeranjang(){

    const list = document.getElementById("listKeranjang");

    list.innerHTML = "";

    total = 0;

    keranjang.forEach((item,index)=>{

        total += item.harga;

        list.innerHTML += `

        <li>

        ${item.nama}

        -

        Rp ${item.harga.toLocaleString("id-ID")}

        <button onclick="hapusProduk(${index})">

        ❌

        </button>

        </li>

        `;

    });

    document.getElementById("total").innerHTML =
    total.toLocaleString("id-ID");

}

// -------------------------------
// HAPUS PRODUK
// -------------------------------

function hapusProduk(index){

    keranjang.splice(index,1);

    tampilKeranjang();

}

// -------------------------------
// PENCARIAN PRODUK
// -------------------------------

function cariProduk(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let produk =
    document.getElementsByClassName("produk");

    for(let i=0;i<produk.length;i++){

        let nama =
        produk[i].innerText.toLowerCase();

        if(nama.indexOf(input)>-1){

            produk[i].style.display="block";

        }else{

            produk[i].style.display="none";

        }

    }

}

// -------------------------------
// CHECKOUT
// -------------------------------

const formCheckout =
document.querySelector("#checkout form");

if(formCheckout){

formCheckout.addEventListener("submit",function(e){

e.preventDefault();

let nama =
this.querySelectorAll("input")[0].value;

let alamat =
this.querySelectorAll("input")[1].value;

let wa =
this.querySelectorAll("input")[2].value;

if(nama==""){

alert("Nama masih kosong");

return;

}

if(alamat==""){

alert("Alamat masih kosong");

return;

}

if(wa==""){

alert("Nomor WhatsApp masih kosong");

return;

}

if(keranjang.length==0){

alert("Keranjang masih kosong");

return;

}

alert(

"Terima kasih "

+ nama +

"\n\nPesanan berhasil dibuat."

);

this.reset();

keranjang=[];

tampilKeranjang();

});

}

// -------------------------------
// WHATSAPP
// -------------------------------

const wa =
document.querySelector(".wa");

if(wa){

wa.addEventListener("click",function(){

alert("Anda akan diarahkan ke WhatsApp.");

});

}

// -------------------------------
// LOAD
// -------------------------------

window.onload=function(){

tampilKeranjang();

};
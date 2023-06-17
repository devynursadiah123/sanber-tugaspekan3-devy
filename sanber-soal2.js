// Tugas pekanan 3 - Soal2.js
// Petunjuk pengerjaan 

//Misalkan terdapat response API sebagai berikut. 

let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}

/*Sebagai QA Engineer kalian ingin mengecek total quantity  dari bebarapa storageId untuk 
productCode FBR00040101 (FloBrand-DressBSPink). 
Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 
 Hint : Gunakan metode Pengulangan, Array dan Object keys 
 (silakan cari referensi cara mendapatkan value dari json)*/

 const productCode = "FBR00040101";
let totalQuantity = 0;

// untuk metode Object.keys digunakan agar mendapatkan array kunci dari object data
const dataKeys = Object.keys(productBin.data);

// Iterasi melalui array kunci 
// kunci untuk mengakses setiap item dalam object data
for (let i = 0; i < dataKeys.length; i++) {
  const item = productBin.data[dataKeys[i]];
  if (item.productCode === productCode) {
    totalQuantity += item.quantity;
  }
}
  
console.log(`Jadi Total Stok dari StorageID untuk ProductCode ${productCode} (FloBrand-DressBSPink) adalah ${totalQuantity} stok`);




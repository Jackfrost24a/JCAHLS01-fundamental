class Product {
    constructor(_sku, _img, _name, _category, _stock, _price) {
        this.sku = _sku;
        this.img = _img;
        this.name = _name;
        this.category = _category;
        this.stock = _stock;
        this.price = _price;
    }

}
let dbproduct = [
    new Product("SKU-1-1236745", "https://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/31/2015/11/3.png", "oreo", "Food", 25, 25000),
    new Product("SKU-2-198374", "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/7/17/fbe4c61e-b30e-4485-9069-22deda586365.jpg", "pocari Sweat", "Drink", 20, 15000)
]
let selectedIdx = null;

function handlesubmit() {
    let form = document.getElementById("form-product")
    let sku = `SKU-${dbproduct.length + 1} ${Math.round(Math.random() * 1000000)}`
    let img = form.elements[0].value
    let name = form.elements[1].value
    let category = form.elements[2].value
    let stock = form.elements[3].value
    let price = form.elements[4].value

    if (img == "" || name == "" || category == "null" || stock == "" || price == "") {
        alert("Isi semua data dengan benar")
    } else {
        dbproduct.push(new Product(sku, img, name, category, parseInt(stock), parseInt(price)))
        form.elements[0].value = "";
        form.elements[1].value = "";
        form.elements[2].value = "";
        form.elements[3].value = null;
        form.elements[4].value = "";
        form.elements[5].value = "";
    }


    //1. mengambil data dari input
    //2. proteksi satu form yang kosong maka akan ada alert
    // 3. data disimpan kedalam dbproduct
    //4. reset ualgn input element
}

function printProduct() {
    let htmlElement = dbproduct.map((val, idx) => {
        if (selectedIdx == idx) {
            return `<tr>
            <td>${val.sku}</td>
            <td><img src="${val.img} "width="75px"></td>
            <td><input type ="text" id="new name" value="${val.name}"></td>
            <td>${val.category}</td>
            <td><input type ="text" id="new name" value="${val.stock}"></td>
            <td><input type ="text" id="new name" value="${val.price}"></td>
            <td><button type ="button">Save</button>
                <button type="button" >cancel</button>
            </td>
            </tr>`
        }
        return `<tr>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>${val.category}</td>
            <td>${val.stock.toLocaleString()}</td>
            <td>IDR. ${val.price.toLocaleString()}</td>
            <td><button type ="button onClick=handleEdit(${idx})">Edit</button>
                <button type="button" onClick="handleDelete(${idx})>Delete</button>
            </td>
            </tr>
            `
    }).
        document.getElementById("table-list").innerHTML = htmlElement.join("");



}
function handleEdit(idx) {
    selectedIdx = idx
    printProduct();

}


function handleDelete(idx) {
    if (confirm("Yakin mau menghapus produk ini?"))
        dbproduct.splice(idx, 1);
    printProduct();

}




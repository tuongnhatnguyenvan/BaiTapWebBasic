function remove(){
    localStorage.removeItem('listProduct');
}


function save() {
    var a = {
        name: document.getElementById('name').value,
        id: document.getElementById('id').value,
        prdname: document.getElementById('prdname').value,
        qty: document.getElementById("qty").value,
        price: document.getElementById('price').value
    };
    console.log(a);

    // Lấy dữ liệu từ LocalStorage (nếu có)
    var data = JSON.parse(localStorage.getItem('data')) || [];

    // Hoặc
    // var savedData = localStorage.getItem('listProduct');
    // var arr = savedData ? JSON.parse(savedData) : [];

    // Thêm mục mới vào mảng dữ liệu
    data.push(a);

    // Lưu dữ liệu vào LocalStorage
    localStorage.setItem('data', JSON.stringify(data));
}

function show() {
    // Lấy dữ liệu từ LocalStorage
    var data = JSON.parse(localStorage.getItem('data'));

    if (data && data.length > 0) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            var n = i + 1;
            html += "<tr>";
            html += "<td>" + n + "</td>";
            html += "<td>" + data[i].name + "</td>";
            html += "<td>" + data[i].id + "</td>";
            html += "<td>" + data[i].prdname + "</td>";
            html += "<td>" + data[i].qty + "</td>";
            html += "<td>" + data[i].price + "</td>";
            html += "<td>" + (parseFloat(data[i].qty) * parseFloat(data[i].price)) + "</td>";
            html += "</tr>";
        }
        document.getElementById('tbl').innerHTML = html;
    } else {
        document.getElementById('tbl').innerHTML = '<tr><td colspan="7">Không có dữ liệu</td></tr>';
    }
}

function reset() {
    document.getElementById('name').value = "";
    document.getElementById('id').value = "";
    document.getElementById('prdname').value = "";
    document.getElementById('qty').value = "";
    document.getElementById('price').value = "";
}
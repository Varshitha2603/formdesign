var selectedRow = null

function onFormSubmit()
{
    if(validate())
    {
        var formData = readFormData();
        if(selectedRow == null)
            insertNewRecord(formData)
        else
            updateRecord(formData)
        resetForm();
    }
}

function readFormData()
{
    var formData = {};
    formData["productcode"] = document.getElementById("productcode").value;
    formData["productname"] = document.getElementById("productname").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["price"] = document.getElementById("price").value;
    return formData;
}

function insertNewRecord(data)
{
    var table = document.getElementById("productlist").getElementsByTagName('tbody')[0];
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = formData[productcode].value;

    let td2 = document.createElement("td");
    td2.innerText = formData[productname].value;

    let td3 = document.createElement("td");
    td3.innerText = formData[qty].value;

    let td4 = document.createElement("td");
    td4.innerText = formData[price].value;
    // var newRow = table.insertRow(table.length);
    // `<td>${table=data.productcode.value}</td>`;
    // `<td>${table=data.productname.value}</td>`;
    // `<td>${table=data.qty.value}</td>`;
    // `<td>${table=data.price.value}</td>`
    // `<td><button onClick = "onEdit(this)">Edit</button>
    //       <button onDelete = "onDelete(this)">Delete</button></td>`
        
    // cell1 = newRow.insertCell(0);
    // cell1.innerHTML = data.productcode;
    // cell2 = newRow.insertCell(1);
    // cell2.innerHTML = data.productname;
    // cell3 = newRow.insertCell(2);
    // cell3.innerHTML = data.qty;
    // cell4 = newRow.insertCell(3);
    // cell4.innerHTML = data.price;
    // cell4 = newRow.insertCell(4);
    // cell4.innerHTML = `<button onClick = "onEdit(this)">Edit</button>
    //                    <button onClick = "onDelete(this)">Delete</button>`;
}

function resetForm()
{
    document.getElementById("productcode").value = "";
    document.getElementById("productname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    selectedRow = null;
}

function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productcode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.productcode;
    selectedRow.cells[1].innerHTML = formData.productname;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.price;
}

function onDelete(td)
{
    if(confirm('Are you sure to delete this record?'))
    {
        row = td.parentElement.parentElement;
        document.getElementById("productlist").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate()
{
    isValid = true;
    if(document.getElementById("productcode").value == "")
    {
        isValid = false;
        document.getElementById("productcodeValidationError").classList.remove("hide");
    }
    else
    {
        isValid = true;
        if(!document.getElementById("productcodeValidationError").classList.contains("hide"))
            document.getElementById("productcodeValidationError").classList.add("hide");
    }
    return isValid;
}





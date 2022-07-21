let nameInput = document.getElementById("name-input");
let dateInput = document.getElementById("date-input");
let amountInput = document.getElementById("amount-input");
let dataTable = document.getElementById("expense-table");
let addExpenseButton = document.getElementById("add-expense");
let checker = true;
let buttonList = ["head row"];

addExpenseButton.addEventListener("click", function () {

    if (checker) {
        /*Deleting empty row */
        dataTable.deleteRow(1);
        checker = false;
    }

    var row = dataTable.insertRow(dataTable.rows.length);
    var cellZero = row.insertCell(0);
    var cellOne = row.insertCell(1);
    var cellTwo = row.insertCell(2);

    cellZero.innerText = nameInput.value;
    cellOne.innerText = dateInput.value;

    var div = document.createElement("div");
    var p = document.createElement("p");
    var button = document.createElement("button");

    div.classList = "cell-two-container";
    div.append(p, button);

    p.classList = "cell-two-data";
    p.innerText = amountInput.value;

    button.classList = "deleteButton";
    button.innerText = "x"

    cellTwo.append(div);

    buttonList.push(button);
});



dataTable.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        let clickedButton = event.target;
        let index = buttonList.indexOf(clickedButton);
        dataTable.deleteRow(index);
        buttonList.splice(index, 1);
        //adding empty list row 
        if (buttonList.length == 1) {
            let emptyRow = document.createElement('tr');
            let emptyRowCell = document.createElement('td');

            emptyRow.id = "empty-row";
            emptyRow.appendChild(emptyRowCell);
            emptyRowCell.colSpan = "3"
            emptyRowCell.innerText = "Expense list is Empty!";
            checker = true;
            dataTable.appendChild(emptyRow);
        }
    }

    
});
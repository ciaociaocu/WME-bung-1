
// „Show/Hide“ function for five attributes.
function showHide(obj) {
    var tRows = document.getElementById('table').rows;
    for(var i = 0; i < tRows.length; i++){
        var tbValue = tRows[i].cells[obj];
        if(tbValue.style.display == 'none')
            tbValue.style.display = '';
        else
            tbValue.style.display = 'none';
    }
}


/*
    Use "isUp_Country" to record the current state of the "Country" column.
    For example, when the current order is ascending and user clicks the "up"
    button, we do nothing.
    When user clicks the "down" button, we change the table into a descending one.
    Do the opposite operating when the current order is descending.
*/
var isUp_Country = true;
function sortTable(obj){

    var tBody = document.getElementById('tBody');
    var arr = [];
    // var isUp = true;


    //put the data of tBody into the arr.
    for (var i = 0; i < tBody.rows.length; i++){
        arr[i] =tBody.rows[i];
    }

    if (obj == 'up' && isUp_Country == true){
        isUp_Country = true;
    }else if (obj == 'down' && isUp_Country == false){
        isUp_Country = false;
    }else if (obj == 'up' && isUp_Country == false){
        // change the table into a ascending one.
        arr.reverse();
        isUp_Country = true;
    }else if (obj == 'down' && isUp_Country == true){
        // change the table into a descending one.
        arr.reverse();
        isUp_Country = false;
    }

    //insert the data of the arr into the tBody
    for (var j = 0; j < arr.length; j++){
        tBody.appendChild(arr[j]);
    }

    //remain the sequence number
    for (let i = 0; i < 25; i++){
        if (i < 9){
            tBody.rows[i].cells[0].innerHTML = "00" + (i + 1);
        }else{
            tBody.rows[i].cells[0].innerHTML = "0" + (i + 1);
        }
    }

}
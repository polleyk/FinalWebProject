
var existing_dept = document.getElementById("existing_dept");
var new_name = document.getElementById("new_dept_name");
var new_abbr = document.getElementById("new_dept_abbr");

existing_dept.onchange = function()  {

    dept = existing_dept.value;

    if (dept == 0) {
        //new_name.disabled = false;
        //new_abbr.disabled = false;
        new_name.value = '';
        new_abbr.value = '';
    } else {
        //new_name.disabled = true;
        //new_abbr.disabled = true;
        new_name.value = 'N/A';
        new_abbr.value = 'N/A';
    }

};




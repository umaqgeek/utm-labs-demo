var data = [];
var dataOri = [];

$(function() {

    viewData();

    $("#inputSearch").keyup(function() {
        var inputSearch = $("#inputSearch").val();
        if (inputSearch && inputSearch.length > 0) {
            data = [...dataOri].filter((dInner) => {
                return dInner.id.toLowerCase().includes(inputSearch.toLowerCase())
                    || dInner.name.toLowerCase().includes(inputSearch.toLowerCase())
                    || dInner.email.toLowerCase().includes(inputSearch.toLowerCase());
            });
        } else {
            data = [...dataOri];
        }
        viewData();
    });

    $("#btnClear").click(function() {
        $("#id").val("");
        $("#name").val("");
        $("#email").val("");
        $("#inputSearch").val("");
        $("#inputSearch").focus();
        data = [...dataOri];
        viewData();
    });

    $("#btnSave").click(function() {
        var id = $("#id").val();
        var name = $("#name").val();
        var email = $("#email").val();
        if (id && name && email) {
            var newObj = {
                id,
                name,
                email
            };
            data.push({...newObj});
            dataOri.push({...newObj});
            viewData();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
        } else {
            alert("Please fill in the blank!");
        }
        $("#id").focus();
    });

    function viewData() {
        var tbody = $("#dataTable tbody");
        $(tbody).children().remove();

        if (data.length > 0) {
            data.map(function(d, dIndex) {
                var row = $.parseHTML("<tr></tr>");
                var tdId = $.parseHTML("<td></td>");
                $(tdId).html(d.id);
                var tdName = $.parseHTML("<td></td>");
                $(tdName).html(d.name);
                var tdEmail = $.parseHTML("<td></td>");
                $(tdEmail).html(d.email);
                var btnDelete = $.parseHTML("<button id='" + dIndex + "' class='btnDelete btnDanger'>Delete</button>");
                var tdAction = $.parseHTML("<td></td>");
                $(tdAction).html(btnDelete);
                $(row).append(tdId);
                $(row).append(tdName);
                $(row).append(tdEmail);
                $(row).append(tdAction);
                $(tbody).append(row);

                $("#" + dIndex).click(function() {
                    var confirm = window.confirm("Are you sure you want to delete this row?");
                    if (confirm) {
                        var newData = [...dataOri].filter((_, dInnerIndex) => dInnerIndex !== dIndex);
                        data = [...newData];
                        dataOri = [...newData];
                        viewData();
                    }
                });

                return d;
            });
        } else {
            var blankRow = $.parseHTML("<tr></tr>");
            var blankTd = $.parseHTML("<td colspan='4'><center>No data yet...</center></td>");
            $(blankRow).append(blankTd);
            $(tbody).append(blankRow);
        }
    };
});
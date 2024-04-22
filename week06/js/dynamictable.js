$(function() {
    
    function addDataToTableRow(index, isbn, title, author, publisher, publishDate, price) {
        var row = $.parseHTML("<tr></tr>");

        var tdIndex = $.parseHTML("<td></td>");
        $(tdIndex).html(index);
        $(tdIndex).data("isbn", isbn);
        $(tdIndex).data("title", title);
        $(tdIndex).data("author", author);
        $(tdIndex).data("publisher", publisher);
        $(tdIndex).data("publishDate", publishDate);
        $(tdIndex).data("price", price);

        var tdTitle = $.parseHTML("<td></td>");
        $(tdTitle).html("<a href='#'>" + title + "</a>");

        var tdAuthor = $.parseHTML("<td></td>");
        $(tdAuthor).html(author);

        var tdDelete = $.parseHTML("<td></td>");
        $(tdDelete).html("<div align='center'><a href='#'><img src='https://cdn-icons-png.freepik.com/512/5974/5974771.png' style='max-height: 32px;' /></a></div>");

        $(row).append(tdIndex);
        $(row).append(tdTitle);
        $(row).append(tdAuthor);
        $(row).append(tdDelete);

        $("#tbl1 tbody").append(row);
    }

    addDataToTableRow(1, "isbn123", "The Way of Kings", "Brandon Sanderson", "TOR", "13/02/2010", "9.99");
    addDataToTableRow(2, "isbn456", "Kingkiller Chronicles", "Patrick Rothfuss", "Gollantz", "13/02/2012", "12.99");

    $("#tbl1").on("click", "td", function(e) {
        var tdIndex = $(this).index();
        console.log(tdIndex);
        console.log($(this).html());

        var parentTR = $(this).parent();
        var firstTD = $(parentTR).children().eq(0);
        console.log(firstTD);

        if (tdIndex == 1) // Clicking title link - popup view/edit all data
        {
            //isbn
            //data attribute in 1st td
            var isbn = $(firstTD).data("isbn");

            //title
            //data attribute in 1st td
            var title = $(firstTD).data("title");

            //author
            //data attribute in 1st td
            var author = $(firstTD).data("author");

            //publisher
            //data attribute in 1st td
            var publisher = $(firstTD).data("publisher");

            //publishdate
            //data attribute in 1st td
            var publishdate = $(firstTD).data("publishdate");

            //price
            //data attribute in 1st td
            var price = $(firstTD).data("price");

            alert(isbn + "\n" + title + "\n" + author + "\n" + publisher + "\n" + publishdate + "\n" + price);
        }

        if (tdIndex == 2) // Clicking author td
        {
            var author = $(this).html();

            var name = window.prompt("Please enter new name", author);

            if (name !== null)
            {
                $(this).html(name);

                // DATA attribute also must be updated
                $(firstTD).data("author", name);
            }
        }
    });

    $("#tbl1").on("mouseenter", "td", function(e) {
        var tdIndex = $(this).index();
        if (tdIndex == 2) {
            $(this).css('cursor', 'pointer');
            $(this).css('font-weight', 'bold');
        }
        $(this).css({
            'background-color': 'rgba(0, 255, 0, 0.3)',
            'cursor': 'pointer'
        });
    }).on("mouseleave", "td", function() {
        var tdIndex = $(this).index();
        if (tdIndex == 2) {
            $(this).css('cursor', 'default');
            $(this).css('font-weight', 'normal');
        }
        $(this).css({
            'background-color': 'white',
            'cursor': 'default'
        });
    });
    
    $("#tbl1").on("click", "img", function() {
        //                       A        DIV       TD       TR
        var parentTR = $(this).parent().parent().parent().parent();
        alert(parentTR.html());
    
        var answer = confirm("Are you sure you want to delete the record?")
    
        if (answer) {
            $(parentTR).fadeOut("slow", "swing", function(e) {
                $(parentTR).remove();
            });
        }
    });
});
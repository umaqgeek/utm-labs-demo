function c(...obj) {
    console.log(...obj);
}

$(function() { // same as $(document.ready(function() {

    $("#btn1").click(function() {
        $("p").hide();
    });
    $("#btn2").click(function() {
        $("#test").hide();
    });
    $("#btn3").click(function() {
        $(".test").hide();
    });

    function jqueryDom1() {
        var current = $("#para");
        c("current: ", current);
        var currentNode = $(current)[0];
        c("currentNode: ", currentNode);
        c("Node type: " + currentNode.nodeType); // 1
        c("Node name: " + currentNode.nodeName); // P
        c("Node ID: " + currentNode.id); // para
    };
    // jqueryDom1();

    function jqueryDom2Parent() {
        var parent = $("#para").parent();
        c($(parent)[0].nodeName); // BODY
    };
    // jqueryDom2Parent();

    function jqueryDom3Children() {
        var children = $("#para").children();
        c(children);
        var contents = $("#para").contents();
        c(contents);
    };
    // jqueryDom3Children();

    function jqueryDom4Children() {
        var children = $("#para").children();
        c('children', children);
        children.each(function() {
            var nativeNode = $(this)[0];
            c('nativeNode', nativeNode);
            var node = $(this);
            c('node', node);
            c('');
        });
        var contents = $("#para").contents();
        c('contents', contents);
        contents.each(function() {
            var nativeNode = $(this)[0];
            c('nativeNode', nativeNode);
            var node = $(this);
            c('node', node);
            c('');
        });
    };
    // jqueryDom4Children();

    function jqueryDomFirstChild() {
        var first = $("#para").children().eq(0);
        c('first', first);
        var nativeNode = $(first)[0];
        c('nativeNode', nativeNode);
    };
    // jqueryDomFirstChild();

});
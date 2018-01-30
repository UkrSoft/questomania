var trigger = 0;

$(function () {

    $(".draggable").draggable(
        {
            helper: 'clone',
            appendTo: '#elementPanel',
            start: function (event, ui) {

            },
            stop: function (event, ui) {
                $(this).show();
            }
        }
    );

    $('#elementPanel').droppable({
        accept: '.draggable',
        drop: function (event, ui) {
            $(this).append($(ui.helper).clone());
        }
    });



    $("#button").on("click", function () {
        showHidePanel();
    });

    function showHidePanel() {
        // get effect type from
        var selectedEffect = $("#effectTypes").val();
        var options = {};
        // Run the effect
        if (trigger === 0) {
            $("#effect").hide("slide", options, 10);
            $("#main-container").removeClass("col-md-7").addClass("col-md-9");
            trigger = 1;
        } else {
            $("#effect").removeAttr("style").hide().fadeIn();
            $("#main-container").removeClass("col-md-9").addClass("col-md-7");
            trigger = 0;
        }

    }
});

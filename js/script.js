function setUp() {
    $("#notes").hide();
    $(".paragraph-wrapper img").click(function() { showParagraphNote(this); });
}


function showNotes() {
    $("#notes").show();
}

function hideNotes() {
    $("#notes").hide();
}

function showParagraphNote(event) {
    //Get index of paragraph
    let indexParagraph = $(event).parent().attr("id").slice(1, indexParagraph.length);
    
    //Show notes
    if($("#notes").is(":hidden"))
        $("#notes").show;
    
    $(".chapter-wrapper:visible *").hide();
    $("#pn" + indexParagraph).show();
} 
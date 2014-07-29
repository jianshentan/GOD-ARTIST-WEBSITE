$( document ).ready( function() {
    $( "#sxlw__button" ).click( function() {
        window.location.href = "/sxlw";
    });

    $( "#cn_headlines__button" ).click( function( ) {
        window.location.href = "/cn_headlines";
    });

    $( "#cn_propaganda__button" ).click( function( ) {
        window.location.href = "/cn_propaganda";
    });

    $( "#guo-in-usa__button" ).click( function( ) {
        window.location.href = "/guo_in_usa";
    });

    $( ".hipster_on_a_leash" ).click( function( ) {
        openInNewTab( "http://www.buzzfeed.com/guoohdong/hipster-on-a-leash-vit4" );
    });

    $( ".hipster_on_a_leash_header" ).click( function( ) {
        openInNewTab( "http://www.buzzfeed.com/guoohdong/hipster-on-a-leash-vit4" );
    });
    $( ".hipster_on_a_leash_question" ).click( function( ) {
        window.location.href = "/hipster_on_a_leash";
    });
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}


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
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}


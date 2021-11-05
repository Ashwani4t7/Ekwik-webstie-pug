console.log("we are using jquery");

$(function(){
$(document).ready(function(){
    $('#btn-service').on('click', function() {
        $('.phone-service-class').toggle();
    });
    $('#seooo').on('click', function() {
        $('#phone-seo-service').toggle();
    });
    $('#packages').on('click', function() {
        $('#phone-packages-service').toggle();
    });
    $('#reseller').on('click', function() {
        $('#phone-reseller-service').toggle();
    });
    $('#Reputation').on('click', function() {
        $('#phone-Reputation-service').toggle();
    });
    $('#Development-Solution').on('click', function() {
        $('#phone-Development-Solution-service').toggle();
    });
    $('#social-Media').on('click', function() {
        $('#phone-social-Media-service').toggle();
    });
    $('#others').on('click', function() {
        $('#phone-others-service').toggle();
    });
    $('#menu-section').on('hover', function() {
        $('#Our-work-list').css("visibility", "visible");
    });
});

});

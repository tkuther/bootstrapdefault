$(document).ready(function(){
    $('#btn-grid').click(function() {
        $('#btn-grid').addClass('active');
        $('#btn-list').removeClass('active');
        $('#content').find('.col-outer').removeClass('col-lg-12').addClass('col-lg-3 col-md-4 col-sm-6 col-xs-12');
        $('#content').removeClass('content-list').addClass('content-grid');
        $('#content .col-inner').equalHeights();
    });
    $('#btn-list').click(function() {
        $('#btn-list').addClass('active');
        $('#btn-grid').removeClass('active');
        $('#content').find('.col-outer').removeClass('col-lg-3 col-md-4 col-sm-6 col-xs-12').addClass('col-lg-12');
        $('#content').removeClass('content-grid').addClass('content-list').equalHeights();
        $('#content .col-inner').equalHeights();
    });
});
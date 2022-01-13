$(document).ready(function() {

    $('.Default').MonthPicker();

    $('#From').MonthPicker( 
    {
        Button: false,
        MinMonth: '01/2001',
        MaxMonth: 0,
        StartYear: 2001
    });

    $('#To').MonthPicker( 
    {
        Button: false,
        MinMonth: '01/2001',
        MaxMonth: 0,
        StartYear: 2022
    });
    
});

function returnFromVal() {
    let val = $('#From').val();

    // in case the field is empty
    if (typeof val === 'undefined') {
        let val = '01/2001';
    }
    
    return val;
}

function returnToVal() {
    let val = $('#To').val();

    // in case the field is empty
    if (typeof val === 'undefined') {
        let val = '01/2001';
    }

    // make sure to value isn't less than from value
    let month = $('#To').MonthPicker('GetSelectedMonth');
    let year = $('#To').MonthPicker('GetSelectedYear');
    let from_month = $('#From').MonthPicker('GetSelectedMonth');
    let from_year = $('#From').MonthPicker('GetSelectedYear');
    if (year < from_year || (year === from_year && month < from_month)) {
        let val = $('#From').MonthPicker('GetSelectedMonthYear');
    }

    return val;
}

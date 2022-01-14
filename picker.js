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

function setPickersRange(monthArray) {
    let minMonth = "01/2021";
    let maxMonth = "01/2001";
    for (month of monthArray) {
        if ((month.split('/')[1] < minMonth.split('/')[1]) || (month.split('/')[1] == minMonth.split('/')[1] && month.split('/')[0] < minMonth.split('/')[0])) {
            minMonth = month;
        }
        if ((month.split('/')[1] > maxMonth.split('/')[1]) || (month.split('/')[1] == minMonth.split('/')[1] && month.split('/')[0] > minMonth.split('/')[0])) {
            maxMonth = month;
        }
    }

    $('#From').MonthPicker( 
    {
        Button: false,
        MinMonth: minMonth,
        MaxMonth: maxMonth,
        StartYear: minMonth.split('/')[1]
    });

    $('#To').MonthPicker( 
    {
        Button: false,
        MinMonth: minMonth,
        MaxMonth: maxMonth,
        StartYear: maxMonth.split('/')[1]
    });
}

function setFromMin(monthYear) {
    $('#From').MonthPicker( 
    {
        Button: false,
        MinMonth: (monthYear),
        MaxMonth: 0,
        StartYear: 2001
    });
}

function setToMin(monthYear) {
    $('#To').MonthPicker( 
    {
        Button: false,
        MinMonth: monthYear,
        MaxMonth: 0,
        StartYear: 2022
    });
}

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

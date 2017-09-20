$(document).ready(() => {
    $(document).on('keyup', 'table input[type=number]', function (e) {
        const afterTax = Number($(this).val());
        $(this).parents('tr').find('.itemBeforeTax').text(itemBeforeTax(afterTax));
        $(this).parents('tr').find('.itemTax').text(afterTax - itemBeforeTax(afterTax));
        updateSumTable();
        updateTaxTable();
        updateSum();
    })

    $('#addRow').on('click', function () {
        $('#itemTable').append(rowModule);
    })
})

function itemBeforeTax(afterTax) {
    return Math.round(afterTax / 1.05)
}

function updateSumTable() {
    let sum = 0;
    $('.itemBeforeTax').each(function () {
        sum = sum + Number($(this).text());
    });
    $('.sumBeforeTax').text(sum);
}

function updateTaxTable() {
    let tax = 0;
    $('.itemTax').each(function () {
        tax = tax + Number($(this).text());
    });
    $('.tax').text(tax);
}

function updateSum() {
    const beforeTax = Number($('.sumBeforeTax').text());
    const tax = Number($('.tax').text());
    $('.sum').text(beforeTax + tax);
}

const rowModule = '<tr>' +
    '<td><input type="number"></td>' +
    '<td class="itemBeforeTax">0</td>' +
    '<td class="itemTax">0</td>' +
    '</tr>'
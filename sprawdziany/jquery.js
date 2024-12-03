$(document).ready(function() {
    let liczbaWiersz = 0;

    $('#dodaj').click(function() {
        liczbaWiersz++;
        if (liczbaWiersz % 2 === 0) {
            kolor = 'zolty';
        } else {
            kolor = 'bialy';
        }
        const nwWiersz = `<tr class="${kolor}"><td>${liczbaWiersz}</td><td>Wiersz ${liczbaWiersz}</td></tr>`;
        $('#tabela tbody').append(nwWiersz);
    });

    $('#zmien').click(function() {
        $('#tabela tbody tr.zolty').removeClass('zolty').addClass('zielony');
    });
});
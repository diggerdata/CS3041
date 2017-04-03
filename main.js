var cards = $(".container");

for (var i = 0; i < cards.length; i++) {
    var target = Math.floor(Math.random() * cards.length - 1) + 1;
    var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
    cards.eq(target).attr('id', i);
    cards.eq(target).find(".next").attr('href', "#" + (i + 1).toString());

    cards.eq(target).before(cards.eq(target2));
}

var cards2 = $(".container");

for (var i = 0; i < cards2.length; i++) {
    cards2.eq(i).attr('id', i);
    if (i == 2) {
        cards2.eq(i).find(".next").attr('href', "#start");
        cards2.eq(i).find(".next").text("Restart");
        cards2.eq(i).find(".next").attr('id', 'restart');
        cards2.eq(i).find(".back").attr('href', "#" + (i - 1).toString());
    } else if (i == 0) {
        cards2.eq(i).find(".next").attr('href', "#" + (i + 1).toString());
        cards2.eq(i).find(".back").attr('href', "#start");
    } else {
        cards2.eq(i).find(".next").attr('href', "#" + (i + 1).toString());
        cards2.eq(i).find(".back").attr('href', "#" + (i - 1).toString());
    }
}

$('#restart').click(function() {
    location.reload();
});

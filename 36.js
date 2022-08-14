var bookPrice = [120, 180, 200, 290, 350, 620, 110]
for (var i = 0; i < bookPrice.length; i++) {
    if (bookPrice[i] > 200) {
        continue;
    }
    console.log(bookPrice[i]);
}
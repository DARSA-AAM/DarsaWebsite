document.getElementById('dateInput').addEventListener('change', function() {
    var inputDate = new Date(this.value);
    var currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (inputDate >= currentDate) {
        window.location.href = 'secondpage.html'; // Redirect to another HTML page within your website
    } else {
        window.location.href = 'secondpage.html'; // Redirect to another HTML page within your website
    }
});

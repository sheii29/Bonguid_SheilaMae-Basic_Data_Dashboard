document.addEventListener("DOMContentLoaded", function() {
    const totalUsers = document.getElementById('totalUsers').textContent;
    const totalSales = document.getElementById('totalSales').textContent;
    const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', function() {
        alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
    });
});

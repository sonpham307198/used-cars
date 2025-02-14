function updateCarPrices() {
    $('.card-item').each(function () {
        let carPrice = $(this).find('.car-price');
        let rowBottomText = $(this).find('.row-bottom').text().trim();

        // Lưu giá gốc nếu chưa có
        if (!carPrice.attr('data-original-price')) {
            carPrice.attr('data-original-price', carPrice.html().trim());
        }

        let originalPrice = carPrice.attr('data-original-price');

        // Kiểm tra điều kiện
        if (rowBottomText.includes('Đã bán')) {
            carPrice.html('Đã bán');
        } else {
            carPrice.html(originalPrice); // Khôi phục giá gốc
        }
    });
}

// Khi danh sách xe thay đổi (AJAX/Pagination), cập nhật lại giá xe
let observer = new MutationObserver(function (mutations) {
    updateCarPrices();
});

// Theo dõi thay đổi trong .list-product (nơi chứa danh sách xe)
observer.observe(document.querySelector('.list-product'), { childList: true, subtree: true });

// Lần đầu chạy script
updateCarPrices();

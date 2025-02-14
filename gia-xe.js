function updateCarPrice() {
    $('.card-item').each(function() {
        let rowBottomText = $(this).find('.row-bottom').text().trim();
        let carPrice = $(this).find('.car-price');

        if (rowBottomText.includes('Đã bán')) {
            carPrice.html('Đã bán');
        }
    });
}

// Theo dõi danh sách xe trong ".list-product" sau khi AJAX tải xong
const targetNode = document.querySelector('.list-product');

if (targetNode) {
    const observer = new MutationObserver((mutations, obs) => {
        // Kiểm tra nếu danh sách xe có thay đổi thì cập nhật giá xe
        let hasNewCars = mutations.some(mutation => mutation.addedNodes.length > 0);
        if (hasNewCars) {
            setTimeout(updateCarPrice, 500); // Chờ 0.5s để đảm bảo danh sách tải xong
        }
    });

    observer.observe(targetNode, { childList: true, subtree: true });
}

// Chạy ngay khi trang vừa load
setTimeout(updateCarPrice, 1000); // Chờ 1s cho chắc chắn danh sách xe đã tải

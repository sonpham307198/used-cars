function updateCarPrice() {
    $('.card-item').each(function() {
        let rowBottomText = $(this).find('.row-bottom').text().trim();
        let carPrice = $(this).find('.car-price');

        if (rowBottomText.includes('Đã bán')) {
            carPrice.html('Đã bán');
        }
    });
}

// Chờ danh sách xe thay đổi để chạy lại updateCarPrice()
const targetNode = document.querySelector('.list-product'); // Chọn phần tử chứa danh sách xe
if (targetNode) {
    const observer = new MutationObserver(updateCarPrice);
    observer.observe(targetNode, { childList: true, subtree: true });
}

// Gọi hàm cập nhật ngay khi trang vừa tải
updateCarPrice();

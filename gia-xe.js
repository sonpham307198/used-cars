function resetCarPrice() {
    $('.card-item .car-price').each(function() {
        let carPrice = $(this);
        if (carPrice.attr('data-original-price')) {
            carPrice.html(carPrice.attr('data-original-price')); // Khôi phục giá gốc
        }
    });
}

function updateCarPrice() {
    $('.card-item').each(function() {
        let rowBottomText = $(this).find('.row-bottom').text().trim(); 
        let carPrice = $(this).find('.car-price');

        // Lưu giá gốc nếu chưa lưu
        if (!carPrice.attr('data-original-price')) {
            carPrice.attr('data-original-price', carPrice.text().trim());
        }

        if (rowBottomText.includes('Đã bán')) {
            carPrice.html('Đã bán'); 
        }
    });
}

function handlePagination() {
    resetCarPrice();  // Bước 1: Đảo ngược về giá gốc
    updateCarPrice(); // Bước 2: Kiểm tra điều kiện và cập nhật lại
}

// Gọi lần đầu khi trang tải
updateCarPrice();

// Kiểm tra nếu observer đã tồn tại trước khi tạo mới
if (typeof window._carPriceObserver === 'undefined') {
    window._carPriceObserver = new MutationObserver(handlePagination);
    const targetNode = document.querySelector('.list-container'); // Cập nhật selector nếu cần
    if (targetNode) {
        window._carPriceObserver.observe(targetNode, { childList: true, subtree: true });
    }
}

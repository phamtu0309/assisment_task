function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    
    // Kiểm tra tên (bắt buộc, tối đa 50 ký tự)
    if (name.length === 0 || name.length > 50) {
        alert("Họ và tên là bắt buộc và không được vượt quá 50 ký tự.");
        return false;
    }

    // Kiểm tra email (đúng định dạng email)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Email không đúng định dạng.");
        return false;
    }

    // Kiểm tra phone (bắt buộc)
    if (phone.length === 0) {
        alert("Vui lòng nhập số điện thoại.");
        return false;
    }

    // Kiểm tra giới tính (bắt buộc)
    if (!gender) {
        alert("Vui lòng chọn giới tính.");
        return false;
    }

    // Nếu tất cả các kiểm tra đều hợp lệ
    alert("Thông tin đã được nhập thành công!");
    document.getElementById("registrationForm").reset(); // Xóa thông tin sau khi nhập đúng
    return false; // Tránh nạp lại trang sau khi gửi form
}
const result = document.getElementById("result");
result.setAttribute("style","display: block")

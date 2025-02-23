document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    // Lấy giá trị từ input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let messageBox = document.getElementById("messageBox");

    // Kiểm tra thông tin đăng nhập
    if (username === "admin" && password === "123456") {
        messageBox.innerHTML = "<div class='alert alert-success'>Đăng nhập thành công!</div>";
    } else {
        messageBox.innerHTML = "<div class='alert alert-danger'>Tên đăng nhập hoặc mật khẩu không đúng!</div>";
    }
});

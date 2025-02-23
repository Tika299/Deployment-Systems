document.getElementById("loginForm").addEventListener("submit",function (event) {
    //Dừng gửi from mặc định
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let messageBox = document.getElementById("messageBox").value;

    if(username === "admin" && password === "123456") {
        messageBox.innerHTML = "<div class='alert alert-success'>Đăng nhập thành công!</div>";
    }else {
        messageBox.innerHTML = "<div class='alert alert-danger'>Tên đăng nhập hoặc mật khẩu không đúng!</div>";
    }
})
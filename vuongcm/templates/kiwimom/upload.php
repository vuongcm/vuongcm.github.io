<?php
if (isset($_POST) && !empty($_FILES['file'])) {
    $duoi = explode('.', $_FILES['file']['name']); // tách chuỗi khi gặp dấu .
    $duoi = $duoi[(count($duoi) - 1)]; //lấy ra đuôi file
    // Kiểm tra xem có phải file ảnh không
    if ($duoi === 'jpg' || $duoi === 'png' || $duoi === 'gif' || $duoi === 'jpeg') {
        // tiến hành upload
        if (move_uploaded_file($_FILES['file']['tmp_name'], 'upload/' . $_FILES['file']['name'])) {
            // Nếu thành công
            die('Upload thành công file: ' . $_FILES['file']['name']); //in ra thông báo + tên file
        } else { // nếu không thành công
            die('Có lỗi trong quá trình upload!'); // in ra thông báo
        }
    } else { // nếu không phải file ảnh
        die('Chỉ được upload ảnh'); // in ra thông báo
    }
} else {
    die('Lock'); // nếu không phải post method
}
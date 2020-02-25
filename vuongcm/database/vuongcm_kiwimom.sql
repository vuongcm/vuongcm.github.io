-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 14, 2020 at 10:24 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vuongcm_kiwimom`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `post_id`, `parent_id`, `body`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 7, NULL, 'ass', '2020-02-12 08:14:04', '2020-02-12 08:14:04', NULL),
(2, 1, 7, NULL, 'hay quá', '2020-02-12 08:16:51', '2020-02-12 08:16:51', NULL),
(3, 1, 7, NULL, 'Tuyệt vời !', '2020-02-12 08:25:15', '2020-02-12 08:25:15', NULL),
(4, 1, 7, 1, 'trả lơi vô học', '2020-02-12 08:27:42', '2020-02-12 08:27:42', NULL),
(5, 1, 7, NULL, 'Các kỹ năng Tự phục vụ', '2020-02-12 08:31:43', '2020-02-12 08:31:43', NULL),
(6, 1, 7, NULL, 'Khoa học - niềm hứng thú bất tận', '2020-02-12 08:34:54', '2020-02-12 08:34:54', NULL),
(7, 1, 7, 6, 'Tuyệt quá', '2020-02-12 08:35:00', '2020-02-12 08:35:00', NULL),
(8, 1, 7, NULL, 'Bài viết rất hay và ý nghĩa, ủng hộ mẹ!', '2020-02-12 08:36:42', '2020-02-12 08:36:42', NULL),
(9, 1, 7, 8, 'Cảm ơn!', '2020-02-12 08:36:53', '2020-02-12 08:36:53', NULL),
(10, 2, 7, NULL, 'Chúc bố mẹ luôn tràn đầy năng lượng', '2020-02-12 08:51:11', '2020-02-12 08:51:11', NULL),
(11, 2, 7, 2, 'cũng đc', '2020-02-12 09:48:06', '2020-02-12 09:48:06', NULL),
(12, 2, 7, NULL, 'Cũng tạm được đấy', '2020-02-12 09:48:33', '2020-02-12 09:48:33', NULL),
(13, 2, 7, 12, 'Tốt mà', '2020-02-12 09:48:43', '2020-02-12 09:48:43', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(7, '2020_01_19_095436_create_post_table', 3),
(15, '2020_01_30_013751_edit_post_table', 4),
(16, '2020_02_04_145549_create_post_comments_table', 5),
(17, '2020_01_14_071141_edit_users_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `admin`, `group`, `link`, `title`, `content`, `description`, `keywords`, `created_at`, `updated_at`) VALUES
(7, 'vuongcm', 'logic-toan-hoc', 'khoa-hoc-niem-hung-thu-bat-tan', 'Khoa học - niềm hứng thú bất tận', '<h3>vuongcm</h3><h4>Mục 2</h4><h5>Mục 3</h5><p>Các kỹ năng này đều là các công việc thường ngày trong cuộc sống nên bố mẹ chỉ cần tạo môi trường cho con được thực hiện càng nhiều càng tốt. Khích lệ và động viên con cố gắng trong từng việc một. Dần dần em bé sẽ có kỹ năng tốt hơn và tự lập trong cuộc sống. Bố mẹ nên để con cùng tham gia vào các công việc trong gia đình, con sẽ cảm thấy vai trò của mình trong gia đình, vui vẻ và hứng thú khi vừa làm vừa học thêm các kỹ năng mới. Học Giáo dục sớm không phải điều gì cao siêu và hàn lâm đâu ạ. Học trong cuộc sống vừa gần gũi vừa hữu ích, không chỉ cung cấp kiến thức, kỹ năng cho con mà còn xây dựng nếp sống và nhân cách của con sau này nữa ạ. Đúng là “nhất cử mà trăm thứ tiện” nên những người làm bố mẹ như chúng ta chỉ cần hiểu đúng và ứng dụng linh hoạt thì Giáo dục sớm rất vui vẻ và gần gũi phải không ạ. :D</p><img src=\"http://localhost:81/templates/kiwimom/upload/Teach-Your-Child-How-to-Brush-Their-Baby-Teeth.jpg\" alt=\"img\" class=\"img-responsive\" title=\"Teach-Your-Child-How-to-Brush-Their-Baby-Teeth\"><p>Các kỹ năng Tự phục vụ cho trẻ 3 – 6 tuổi mẹ Kiwi sẽ chia sẻ ở bài viết thiếp theo bố mẹ nhé. Chúc bố mẹ luôn tràn đầy năng lượng và áp dụng thành công Giáo dục sớm để mỗi giây phút ở bên con đều vui vẻ và hữu ích ạ </p>', 'php artisan migrate', 'php artisan migrate', '2020-02-02 02:32:05', '2020-02-02 07:52:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `level` tinyint(4) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `level`, `status`, `username`, `lastname`, `firstname`, `gender`, `email`, `avatar`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'vuongcm', 'Cao', 'Vương', 'Nam', 'vuongcao.117@gmail.com', 'https://lh3.googleusercontent.com/-jUFJs0Pe5Ao/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcUCXPg8Ii-qnMT1h856e9FVijGmg.CMID/s83-c/photo.jpg', NULL, '$2y$10$fSzh533UgB5TtdaM26fBlOBJfGHjGOfQsTiS0W8yp4MvjMSnoTD8q', 'O8sd23D0ZOU1ZRYoZciP7lye6shd5uElCNaX8mAvTwOaen1vRNBI3LMBKyab', '2020-01-14 02:33:08', '2020-01-18 11:54:21'),
(2, 3, 1, 'thaonguyen', 'Nguyễn', 'Thảo Béo', 'Nữ', 'nguyenthao.gds@gmail.com', NULL, NULL, '$2y$10$bLRF7Z8hOIUt4kK1fazyxetPOu.8EWGPgGfccjz0Ur1NfJjG/BMKG', NULL, '2020-01-17 00:27:35', '2020-01-18 11:55:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

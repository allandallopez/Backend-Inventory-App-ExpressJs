-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2019 at 03:17 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myinventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'vehicle'),
(2, 'electronic'),
(6, 'Outfit'),
(7, 'food');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(55) NOT NULL,
  `description` varchar(55) NOT NULL,
  `image` varchar(55) NOT NULL,
  `id_category` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date_added` timestamp NULL DEFAULT NULL,
  `date_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `image`, `id_category`, `quantity`, `date_added`, `date_update`) VALUES
(1, 'BMW 3 Series', 'The sixth generation of the BMW 3 Series consists of th', 'www.bmw-v-kool.com', 1, 70, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(2, 'Mercedes-Benz C300', 'The Mercedes-Benz C-Class is a line of compact executiv', 'www.mrcy-world.com', 1, 45, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(3, 'BMW M4 Coupe', 'Dream Car, with V8 Engine and twin turbo. More tha 700h', 'www.bmwlLKv-kool.com', 1, 50, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(4, 'BMW M6 Gran Coupe', 'The BMW M6 is the performance variant of the 6 Series l', 'www.bmwlLKv-kool.com', 1, 75, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(6, 'Daihatsu Sigra', 'LCGC (Low Cost Green Car) for who what wanna look stand', 'wtww.dhts.com', 1, 60, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(7, 'Honda NSX', 'JDM Car using modern design. One of most high tech supe', 'www.honda-cool.com', 1, 49, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(8, 'Cadillac Escalade S', 'The Cadillac Escalade is not a good luxury large SUV, b', 'https://cars.usnews.com/cars-trucks/cadillac/escalade/2', 1, 75, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(9, 'CHEVROLET CAMARO ZL1', 'The Camaro ZL1 was born in 1969, when enterprising deal', 'wtww.media.chevrolet.com', 1, 75, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(10, 'CHEVROLET CAMARO SS', 'The June 1966 media introduction of the original 1967 C', 'wtww.media.chevrolet.com', 1, 50, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(11, 'Mercedes Benz CLA-Class', 'V6 Engine, FWD', 'wtww.media.cmercy.com', 1, 60, '2019-08-30 10:40:01', '2019-08-30 10:40:01'),
(13, 'BMW Series 7 2019', 'Well, it used to be the ultimate BMW. A 7 Series', 'www.bmw\'germ.com', 1, 40, '2019-08-30 10:56:37', '2019-08-30 11:26:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(3, 'jonna', '020701', 'llrdd@gmail.com'),
(4, 'raka', '11234', 'raka@gmail.com'),
(5, 'ddbayi', '12345', 'ddbbyy@gmail.com'),
(6, 'papa', '9860', 'bbubu@gmail.com'),
(7, 'pagi', '123445', 'morning@gmail.com'),
(8, 'New User', '2019', 'NewEmail@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

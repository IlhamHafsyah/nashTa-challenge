-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2021 at 09:12 AM
-- Server version: 10.5.10-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nashta`
--

-- --------------------------------------------------------

--
-- Table structure for table `datanilai`
--

CREATE TABLE `datanilai` (
  `nim` int(20) DEFAULT NULL,
  `idMataKuliah` int(20) DEFAULT NULL,
  `idDosen` int(20) DEFAULT NULL,
  `nilai` int(4) DEFAULT NULL,
  `keterangan` varchar(20) COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `datanilai`
--

INSERT INTO `datanilai` (`nim`, `idMataKuliah`, `idDosen`, `nilai`, `keterangan`) VALUES
(20210001, 1, 2021001, 90, 'Lulus'),
(20210002, 1, 2021001, 100, 'Lulus'),
(20210004, 1, 2021001, 30, 'Tidak Lulus'),
(20210003, 1, 2021001, 60, 'Tidak Lulus'),
(20210005, 1, 2021001, 85, 'Lulus'),
(20210001, 2, 2021002, 90, 'Lulus'),
(20210002, 2, 2021002, 100, 'Lulus'),
(20210003, 2, 2021002, 55, 'Tidak Lulus'),
(20210004, 2, 2021002, 70, 'Lulus'),
(20210005, 2, 2021002, 85, 'Lulus');

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `idDosen` int(20) NOT NULL,
  `nama` varchar(50) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `dosen`
--

INSERT INTO `dosen` (`idDosen`, `nama`) VALUES
(2021001, 'Mohammad'),
(2021002, 'Nurdhi');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nim` int(20) NOT NULL,
  `nama` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL,
  `alamat` varchar(200) COLLATE utf8mb4_bin DEFAULT NULL,
  `tanggalLahir` date DEFAULT NULL,
  `jurusan` varchar(50) COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nim`, `nama`, `alamat`, `tanggalLahir`, `jurusan`) VALUES
(20210001, 'ilham', 'Tangerang', '1998-10-10', 'Teknik Informatika'),
(20210002, 'Hafsyah', 'Banten', '1998-10-10', 'Fisika'),
(20210003, 'Budi', 'Jakarta', '1998-11-11', 'Teknik Informatika'),
(20210004, 'Agus', 'Jakarta', '1998-12-12', 'Teknik Informatika'),
(20210005, 'Abdul', 'Jogja', '1998-11-11', 'Teknik Informatika');

-- --------------------------------------------------------

--
-- Table structure for table `matakuliah`
--

CREATE TABLE `matakuliah` (
  `idMataKuliah` int(20) NOT NULL,
  `nim` int(20) NOT NULL,
  `namaMataKuliah` varchar(40) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `matakuliah`
--

INSERT INTO `matakuliah` (`idMataKuliah`, `nim`, `namaMataKuliah`) VALUES
(1, 20210001, 'database'),
(1, 20210002, 'database'),
(1, 20210003, 'database'),
(1, 20210004, 'database'),
(1, 20210005, 'database'),
(2, 20210001, 'SQL'),
(2, 20210002, 'SQL'),
(2, 20210003, 'SQL'),
(2, 20210004, 'SQL'),
(2, 20210005, 'SQL');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(20) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `password` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  `role` enum('mahasiswa','dosen') COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `email`, `password`, `role`) VALUES
(1, 'mohammadilham@gmail.com', 'mohammadilhampassword', 'mahasiswa'),
(2, 'nurdhihafsyah@gmail.com', 'nurdhihafsyahpassword', 'dosen'),
(3, 'dosenemail@gmail.com', '$2b$10$qYgV6lORA2sy7bSi6XTUa.ZPEvVtUuZk19KalKwkWoF.NPsT4SfjO', 'dosen');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `datanilai`
--
ALTER TABLE `datanilai`
  ADD KEY `FK__dosen` (`idDosen`),
  ADD KEY `FK__mahasiswa` (`nim`);

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`idDosen`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD KEY `FK_matakuliah_mahasiswa` (`nim`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `datanilai`
--
ALTER TABLE `datanilai`
  ADD CONSTRAINT `FK__dosen` FOREIGN KEY (`idDosen`) REFERENCES `dosen` (`idDosen`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK__mahasiswa` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD CONSTRAINT `FK_matakuliah_mahasiswa` FOREIGN KEY (`nim`) REFERENCES `mahasiswa` (`nim`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

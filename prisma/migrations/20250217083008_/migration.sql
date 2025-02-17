/*
  Warnings:

  - You are about to drop the column `create_at` on the `articles` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `articles` table. All the data in the column will be lost.
  - Added the required column `updateAt` to the `articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` DROP COLUMN `create_at`,
    DROP COLUMN `update_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NOT NULL;

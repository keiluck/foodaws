/*
  Warnings:

  - You are about to drop the column `categoryName` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `products` table. All the data in the column will be lost.
  - Made the column `goodsId` on table `Spec` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Spec` DROP FOREIGN KEY `Spec_goodsId_fkey`;

-- DropIndex
DROP INDEX `Category_id_key` ON `Category`;

-- DropIndex
DROP INDEX `Spec_id_key` ON `Spec`;

-- DropIndex
DROP INDEX `products_id_key` ON `products`;

-- AlterTable
ALTER TABLE `Spec` MODIFY `goodsId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `products` DROP COLUMN `categoryName`,
    DROP COLUMN `parentId`,
    DROP COLUMN `update_at`,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Spec` ADD CONSTRAINT `Spec_goodsId_fkey` FOREIGN KEY (`goodsId`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Category` RENAME INDEX `Category_parentId_fkey` TO `Category_parentId_idx`;

-- RenameIndex
ALTER TABLE `Spec` RENAME INDEX `Spec_goodsId_fkey` TO `Spec_goodsId_idx`;

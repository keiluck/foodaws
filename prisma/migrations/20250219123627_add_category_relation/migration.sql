/*
  Warnings:

  - Added the required column `categoryName` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `images` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `testList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products` ADD COLUMN `categoryId` VARCHAR(191) NULL,
    ADD COLUMN `categoryName` VARCHAR(191) NOT NULL,
    ADD COLUMN `images` JSON NOT NULL,
    ADD COLUMN `parentId` VARCHAR(36) NULL,
    ADD COLUMN `stock` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `testList` ADD COLUMN `url` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `parentId` VARCHAR(191) NULL,

    UNIQUE INDEX `Category_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Spec` (
    `id` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `options` JSON NOT NULL,
    `goodsId` VARCHAR(191) NULL,

    UNIQUE INDEX `Spec_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Spec` ADD CONSTRAINT `Spec_goodsId_fkey` FOREIGN KEY (`goodsId`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

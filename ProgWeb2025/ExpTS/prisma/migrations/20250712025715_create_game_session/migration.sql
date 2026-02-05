/*
  Warnings:

  - The primary key for the `GameSession` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `GameSession` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `GameSession` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `GameSession` table. All the data in the column will be lost.
  - Added the required column `userId` to the `GameSession` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `GameSession` DROP FOREIGN KEY `GameSession_user_id_fkey`;

-- DropIndex
DROP INDEX `GameSession_user_id_fkey` ON `GameSession`;

-- AlterTable
ALTER TABLE `GameSession` DROP PRIMARY KEY,
    DROP COLUMN `created_at`,
    DROP COLUMN `updated_at`,
    DROP COLUMN `user_id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `GameSession` ADD CONSTRAINT `GameSession_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

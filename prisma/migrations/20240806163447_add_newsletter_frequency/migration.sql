-- CreateEnum
CREATE TYPE "NewsletterFrequency" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY');

-- AlterTable
ALTER TABLE "Newsletter" ADD COLUMN     "frequency" "NewsletterFrequency" NOT NULL DEFAULT 'WEEKLY';

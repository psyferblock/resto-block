-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "Order_userEmail_idx" ON "Order"("userEmail");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

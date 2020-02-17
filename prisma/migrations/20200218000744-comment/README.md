# Migration `20200218000744-comment`

This migration has been generated at 2/18/2020, 12:07:44 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `sikembar_test`.`ReportFinance` DROP COLUMN `comment`,
ADD COLUMN `comment` varchar(191)   ;

ALTER TABLE `sikembar_test`.`ReportGood` DROP COLUMN `comment`,
ADD COLUMN `comment` varchar(191)   ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200217201724-comment-good..20200218000744-comment
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "mysql"
-  url = "***"
+  url      = "mysql://root:princess32@localhost:3306/sikembar_test"
 }
 generator client {
   provider = "prisma-client-js"
@@ -258,9 +258,9 @@
   currency Currency @default(USD)
   rate Int
   approved Boolean @default(false)
   flag_for_deletion Boolean @default(false)
-  comment String
+  comment String?
   budgets Budget[]
   royalty Royalty[]
   capital_budget CapitalBudget[]
   cashflow Cashflow[]
@@ -287,9 +287,9 @@
   currency Currency
   rate Int
   approved Boolean @default(false)
   flag_for_deletion Boolean @default(false)
-  comment String
+  comment String?
   procurement Procurement[]
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
 }
```



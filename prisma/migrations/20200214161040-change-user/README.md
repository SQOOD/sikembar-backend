# Migration `20200214161040-change-user`

This migration has been generated at 2/14/2020, 4:10:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `sikembar_test`.`User` ADD COLUMN `approved` boolean NOT NULL DEFAULT false ;

ALTER TABLE `sikembar_test`.`ReportFinance` DROP COLUMN `file_path`;

ALTER TABLE `sikembar_test`.`ReportGood` DROP COLUMN `file_path`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200209215648-initial..20200214161040-change-user
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
@@ -12,8 +12,9 @@
   username      String  @unique
   password      String
   company_permission    CompanyPermission @default(MINERBA)
   picture       String? @default("")
+  approved      Boolean @default(false)
   role          Role 
   commodity     Commodity @default(NOT_AVAILABLE)
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
@@ -255,9 +256,8 @@
   currency Currency @default(USD)
   rate Int
   approved Boolean @default(false)
   flag_for_deletion Boolean @default(false)
-  file_path String
   budgets Budget[]
   royalty Royalty[]
   capital_budget CapitalBudget[]
   cashflow Cashflow[]
@@ -284,9 +284,9 @@
   currency Currency
   rate Int
   approved Boolean @default(false)
   flag_for_deletion Boolean @default(false)
-  file_path String
+
   procurement Procurement[]
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
 }
```



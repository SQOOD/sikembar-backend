# Migration `20200216173216-add-comment`

This migration has been generated at 2/16/2020, 5:32:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `sikembar_test`.`ReportFinance` ADD COLUMN `comment` varchar(191) NOT NULL DEFAULT '' ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200214162943-mineral..20200216173216-add-comment
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
@@ -258,8 +258,9 @@
   currency Currency @default(USD)
   rate Int
   approved Boolean @default(false)
   flag_for_deletion Boolean @default(false)
+  comment String
   budgets Budget[]
   royalty Royalty[]
   capital_budget CapitalBudget[]
   cashflow Cashflow[]
```



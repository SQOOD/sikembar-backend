# Migration `20200217201724-comment-good`

This migration has been generated at 2/17/2020, 8:17:24 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `sikembar_test`.`ReportGood` ADD COLUMN `comment` varchar(191) NOT NULL DEFAULT '' ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200216173216-add-comment..20200217201724-comment-good
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
@@ -287,9 +287,9 @@
   currency Currency
   rate Int
   approved Boolean @default(false)
   flag_for_deletion Boolean @default(false)
-
+  comment String
   procurement Procurement[]
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
 }
```



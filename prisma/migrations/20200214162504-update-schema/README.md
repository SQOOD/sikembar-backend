# Migration `20200214162504-update-schema`

This migration has been generated at 2/14/2020, 4:25:04 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200214161040-change-user..20200214162504-update-schema
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
@@ -33,9 +33,10 @@
 enum CompanyPermission {
   IUP
   IUPOPK
   MINERBA
-  VENDOR
+  SUPPLIER
+  KK
 }
 enum CompanyType {
   PT
   CV
```



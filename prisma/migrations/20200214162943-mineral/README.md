# Migration `20200214162943-mineral`

This migration has been generated at 2/14/2020, 4:29:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200214162504-update-schema..20200214162943-mineral
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
@@ -197,8 +197,9 @@
   BATU_GAMPING
   ONIK
   PASIR_LAUT
   NOT_AVAILABLE
+  MINERAL
 }
 enum Term {
   TAHUNAN
```



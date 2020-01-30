# Migration `watch-20200129124420`

This migration has been generated at 1/29/2020, 12:44:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `sikembar_test`.`User` (
  `address` varchar(191)   ,
  `commodity` varchar(191) NOT NULL DEFAULT 'NOT_AVAILABLE' ,
  `company_name` varchar(191)   ,
  `company_permission` varchar(191) NOT NULL DEFAULT 'MINERBA' ,
  `company_type` varchar(191)   ,
  `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  `email` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `npwp` varchar(191)   ,
  `password` varchar(191) NOT NULL DEFAULT '' ,
  `phone` varchar(191)   ,
  `picture` varchar(191)   ,
  `role` varchar(191) NOT NULL DEFAULT 'MINER' ,
  `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  `username` varchar(191) NOT NULL DEFAULT '' ,
  `wiup` varchar(191)   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`ReportFinance` (
  `approved` boolean NOT NULL DEFAULT false ,
  `currency` varchar(191) NOT NULL DEFAULT 'USD' ,
  `file_path` varchar(191) NOT NULL DEFAULT '' ,
  `flag_for_deletion` boolean NOT NULL DEFAULT false ,
  `id` varchar(191) NOT NULL  ,
  `rate` int NOT NULL DEFAULT 0 ,
  `report_type` varchar(191) NOT NULL DEFAULT 'REALISASI' ,
  `term` varchar(191) NOT NULL DEFAULT 'TAHUNAN' ,
  `year` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`ReportGood` (
  `approved` boolean NOT NULL DEFAULT false ,
  `currency` varchar(191) NOT NULL DEFAULT 'IDR' ,
  `file_path` varchar(191) NOT NULL DEFAULT '' ,
  `flag_for_deletion` boolean NOT NULL DEFAULT false ,
  `id` varchar(191) NOT NULL  ,
  `rate` int NOT NULL DEFAULT 0 ,
  `report_type` varchar(191) NOT NULL DEFAULT 'REALISASI' ,
  `term` varchar(191) NOT NULL DEFAULT 'TAHUNAN' ,
  `year` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Budget` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Supply` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`CapitalBudget` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Cashflow` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Assumption` (
  `currency` varchar(191)   ,
  `cut_off` int   ,
  `cut_off_unit` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `price` int   ,
  `rate` int   ,
  `volume_unit` varchar(191)   ,
  `volume_value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Fuel` (
  `currency` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `price` int   ,
  `rate` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`CostOfGood` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Investment` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`OtherFinance` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`LostProfit` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Royalty` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`OperationCost` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`StateRevenue` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Balance` (
  `category` varchar(191)   ,
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `sub_category` varchar(191)   ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`SourceOfFunding` (
  `detail` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Procurement` (
  `category` varchar(191)   ,
  `country_of_origin` varchar(191)   ,
  `current_district` varchar(191)   ,
  `detail` varchar(191)   ,
  `district_of_origin` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `project_area` varchar(191)   ,
  `province_of_origin` varchar(191)   ,
  `spec` varchar(191)   ,
  `tkdn` int   ,
  `tkdn_type` varchar(191)   ,
  `unit_price` int   ,
  `unit_price_type` varchar(191)   ,
  `volume_unit` varchar(191)   ,
  `volume_value` int   ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Good` (
  `category` varchar(191)   ,
  `description` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `name` varchar(191) NOT NULL DEFAULT '' ,
  `picture` varchar(191)   ,
  `tkdn` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

ALTER TABLE `sikembar_test`.`ReportFinance` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`ReportGood` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Budget` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Supply` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`CapitalBudget` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Cashflow` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Assumption` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Fuel` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`CostOfGood` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Investment` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`OtherFinance` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`LostProfit` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Royalty` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`OperationCost` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`StateRevenue` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Balance` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`SourceOfFunding` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_finance`) REFERENCES `sikembar_test`.`ReportFinance`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Procurement` ADD COLUMN `report_good` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`report_good`) REFERENCES `sikembar_test`.`ReportGood`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Good` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

CREATE UNIQUE INDEX `User.username` ON `sikembar_test`.`User`(`username`)

CREATE UNIQUE INDEX `Fuel_report_finance` ON `sikembar_test`.`Fuel`(`report_finance`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration watch-20200129123904..watch-20200129124420
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
   datasource db {
     provider = "mysql"
-    url = "***"
+    url      = "mysql://root:princess32@localhost:3306/sikembar_test"
   }
   generator photon {
     provider = "photonjs"
@@ -286,139 +286,139 @@
   model Budget {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model Supply {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model CapitalBudget {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model Cashflow {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
-    category String
+    detail String?
+    value Int?
+    category String?
   }
   model Assumption {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    currency Currency @default(IDR)
-    rate Int
-    detail String
-    volume_unit VolumeUnit
-    volume_value Int
-    price Int
-    cut_off Int
-    cut_off_unit CutOffUnit
+    currency Currency? @default(USD)
+    rate Int?
+    detail String?
+    volume_unit VolumeUnit?
+    volume_value Int?
+    price Int?
+    cut_off Int?
+    cut_off_unit CutOffUnit?
   }
   model Fuel {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    currency Currency
-    rate Int
-    price Int
+    currency Currency?
+    rate Int?
+    price Int?
   }
   model CostOfGood {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model Investment {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model OtherFinance {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model LostProfit {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    category String
-    value Int
+    detail String?
+    category String?
+    value Int?
   }
   model Royalty {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model OperationCost {
     id    String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model StateRevenue {
     id  String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
-    category String
+    detail String?
+    value Int?
+    category String?
   }
   model Balance {
     id  String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
-    sub_category String
-    category String
+    detail String?
+    value Int?
+    sub_category String?
+    category String?
   }
   model SourceOfFunding {
     id  String  @default(cuid()) @id
     report_finance ReportFinance
-    detail String
-    value Int
+    detail String?
+    value Int?
   }
   model Procurement {
     id    String  @default(cuid()) @id
     report_good ReportGood
-    detail String
-    spec String
-    volume_unit VolumeUnit
-    volume_value Int
-    unit_price_type UnitPricetype
-    unit_price Int
-    category ProcurementCategory
-    project_area String
+    detail String?
+    spec String?
+    volume_unit VolumeUnit?
+    volume_value Int?
+    unit_price_type UnitPricetype?
+    unit_price Int?
+    category ProcurementCategory?
+    project_area String?
     country_of_origin Country?
     province_of_origin Province?
     district_of_origin District?
     current_district District?
-    tkdn Int
-    tkdn_type TKDNType
+    tkdn Int?
+    tkdn_type TKDNType?
   }
   model Good {
     id    String  @default(cuid()) @id
```



# Migration `watch-20200129122647`

This migration has been generated at 1/29/2020, 12:26:50 PM.
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
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Supply` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`CapitalBudget` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Cashflow` (
  `category` varchar(191) NOT NULL DEFAULT '' ,
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Assumption` (
  `currency` varchar(191) NOT NULL DEFAULT 'IDR' ,
  `cut_off` int NOT NULL DEFAULT 0 ,
  `cut_off_unit` varchar(191) NOT NULL DEFAULT 'PERSENTASE' ,
  `id` varchar(191) NOT NULL  ,
  `price` int NOT NULL DEFAULT 0 ,
  `rate` int NOT NULL DEFAULT 0 ,
  `volume_unit` varchar(191) NOT NULL DEFAULT 'OZ' ,
  `volume_value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Fuel` (
  `currency` varchar(191) NOT NULL DEFAULT 'IDR' ,
  `id` varchar(191) NOT NULL  ,
  `price` int NOT NULL DEFAULT 0 ,
  `rate` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`CostOfGood` (
  `category` varchar(191) NOT NULL DEFAULT '' ,
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Investment` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`OtherFinance` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`LostProfit` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Royalty` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`OperationCost` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`StateRevenue` (
  `category` varchar(191) NOT NULL DEFAULT '' ,
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Balance` (
  `category` varchar(191) NOT NULL DEFAULT '' ,
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `sub_category` varchar(191) NOT NULL DEFAULT '' ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`SourceOfFunding` (
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Procurement` (
  `category` varchar(191) NOT NULL DEFAULT 'A' ,
  `country_of_origin` varchar(191)   ,
  `current_district` varchar(191)   ,
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `district_of_origin` varchar(191)   ,
  `id` varchar(191) NOT NULL  ,
  `project_area` varchar(191) NOT NULL DEFAULT '' ,
  `province_of_origin` varchar(191)   ,
  `spec` varchar(191) NOT NULL DEFAULT '' ,
  `tkdn` int NOT NULL DEFAULT 0 ,
  `tkdn_type` varchar(191) NOT NULL DEFAULT 'SA' ,
  `unit_price` int NOT NULL DEFAULT 0 ,
  `unit_price_type` varchar(191) NOT NULL DEFAULT 'ONSITE' ,
  `volume_unit` varchar(191) NOT NULL DEFAULT 'OZ' ,
  `volume_value` int NOT NULL DEFAULT 0 ,
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
migration watch-20200128213541..watch-20200129122647
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
@@ -397,9 +397,8 @@
     id  String  @default(cuid()) @id
     report_finance ReportFinance
     detail String
     value Int
-    category String
   }
   model Procurement {
     id    String  @default(cuid()) @id
```



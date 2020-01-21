# Migration `watch-20200120101840`

This migration has been generated at 1/20/2020, 10:18:43 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `sikembar_test`.`User` (
  `commodity` varchar(191) NOT NULL DEFAULT 'BATUBARA' ,
  `company_type` varchar(191) NOT NULL DEFAULT 'IUP' ,
  `createdAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  `id` varchar(191) NOT NULL  ,
  `password` varchar(191) NOT NULL DEFAULT '' ,
  `picture` varchar(191)   ,
  `role` varchar(191) NOT NULL DEFAULT 'MINER' ,
  `updatedAt` datetime(3) NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  `username` varchar(191) NOT NULL DEFAULT '' ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`ReportFinance` (
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
  `category` varchar(191) NOT NULL DEFAULT '' ,
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
  `category` varchar(191) NOT NULL DEFAULT '' ,
  `detail` varchar(191) NOT NULL DEFAULT '' ,
  `id` varchar(191) NOT NULL  ,
  `value` int NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
)
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `sikembar_test`.`Procurement` (
  `category` varchar(191) NOT NULL DEFAULT 'A' ,
  `country_of_origin` varchar(191)   ,
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

ALTER TABLE `sikembar_test`.`ReportFinance` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`ReportGood` ADD COLUMN `user` varchar(191) NOT NULL ,
ADD FOREIGN KEY (`user`) REFERENCES `sikembar_test`.`User`(`id`) ON DELETE RESTRICT;

ALTER TABLE `sikembar_test`.`Budget` ADD COLUMN `report_finance` varchar(191) NOT NULL ,
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

CREATE UNIQUE INDEX `User.username` ON `sikembar_test`.`User`(`username`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..watch-20200120101840
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,616 @@
+  datasource db {
+    provider = "mysql"
+    url      = "mysql://root:princess32@localhost:3306/sikembar_test"
+  }
+
+  generator photon {
+    provider = "photonjs"
+  }
+
+  model User {
+    id            String  @default(cuid()) @id
+    username      String  @unique
+    password      String
+    company_type  CompanyType
+    picture       String?
+    role          Role @default(MINER)
+    commodity     Commodity
+    createdAt     DateTime @default(now())
+    updatedAt     DateTime @updatedAt
+  }
+
+  enum CompanyType {
+    IUP
+    IUPOPK
+  }
+
+  enum Role {
+    MINER
+    MERCHANT
+    STAFF
+  }
+
+  enum Commodity {
+  BATUBARA
+  BITUMEN_PADAT
+  BATUAN_ASPAL
+  GAMBUT
+  LITIUM
+  BERILIUM
+  MAGNESIUM
+  KALIUM
+  KALSIUM
+  EMAS
+  TEMBAGA
+  PERAK
+  TIMBAL
+  SENG_TIMAH
+  NIKEL
+  MANGAN
+  PLATINA
+  BISMUTH
+  MOLIBDENUM
+  BAUKSIT
+  AIR_RAKSA
+  WOLFRAM
+  TITANIUM
+  BARIT
+  VANADIUM
+  KROMIT
+  ANTIMONI
+  KOBALT
+  TANTALUM
+  CADMIUM
+  GALIUM
+  INDIUM
+  YITRIUM
+  MAGNETIT
+  BESI
+  GALENA
+  ALUMINA
+  NIOBIUM
+  ZIRKONIUM
+  ILMENIT
+  KHROM
+  ERBIUM
+  YTTERBIUM
+  DYSPROSIUM
+  THORIUM
+  CESIUM
+  LANTHANUM
+  NEODYMIUM
+  HAFNIUM
+  SCANDIUM
+  ALUMUNIUM
+  PALLADIUM
+  RHODIUM
+  OSMIUM
+  RUTHENIUM
+  IRIDIUM
+  SELENIUM
+  TELLURIDE
+  STRONIUM
+  GERMANIUM
+  ZENOTIN
+  INTAN
+  KORUNDUM
+  GRAFIT
+  ARSEN
+  PASIR_KUARSA
+  FLUORSPAR
+  KRIOLIT
+  YODIUM
+  BROM
+  KLOR
+  BELERANG
+  FOSFAT
+  HALIT
+  ASBES
+  TALK
+  MIKA
+  MAGNESIT
+  YAROSIT
+  OKER
+  FLUORIT
+  BALL_CLAY
+  FIRE_CLAY
+  ZEOLIT
+  KAOLIN
+  FELDSPAR
+  BENTORIIT
+  GIPSUM
+  DOLOMIT
+  KALSIT
+  RIJANG
+  PIROFILIT
+  KUARSIT
+  ZIRKON
+  WOLASTONIT
+  TAWAS
+  BATU_KUARSA
+  PERLIT
+  GARAM_BATU
+  CLAY
+  BATU_GAMPING_UNTUK_SEMEN
+  PUMICE
+  TRAS
+  TOSEKI
+  OBSIDIAN
+  MARMER
+  TANAH_DIATONIC
+  TANAH_SERAP_FULLERS_EARTH
+  SLATE
+  GRANIT
+  GRANODIORIT
+  ANDESIT
+  GABRO
+  PERIDOTIT
+  BASALT
+  TRAKHIT
+  LOUSIT
+  TANAH_LIAT
+  TANAH_URUG
+  BATU_APUNG
+  OPAL
+  KALSEDON
+  CHERT
+  KRISTAL_KUARSA
+  JASPER
+  KRISOPRASE
+  KAYU_TERKERSIKAN
+  GAMET
+  GIOK
+  AGAT
+  DIORIT
+  TOPAS
+  BATU_GUNUNG_QUARRY_BESAR
+  KERIKIL_GALIAN_DARI_BUKIT
+  KERIKIL_SUNGAI
+  BATU_KALI
+  KERIKIL_SUNGAI_AYAK_TANPA_PASIR
+  PASIR_URUG
+  PASIR_PASANG
+  KERIKIL_BERPASIR_ALAMI_SIRTU
+  URUKAN_TANAH_SETEMPAT
+  TANAH_MERAH_LATERIT
+  BATU_GAMPING
+  ONIK
+  PASIR_LAUT
+  NOT_AVAILABLE
+  }
+
+  enum Term {
+    TAHUNAN
+    TRIWULANSATU
+    TRIWULANDUA
+    TRIWULANTIGA
+    TRIWULANEMPAT
+    JANUARI
+    FEBRUARI
+    MARET
+    APRIL
+    MEI
+    JUNI
+    JULI
+    AGUSTUS
+    SEPTERMBER
+    OKTOBER
+    NOVEMBER
+    DESEMBER
+  }
+
+  enum Currency {
+    IDR
+    USD
+    MYR
+    YEN
+    CNY
+    SGD
+    EUR
+  }
+
+  enum ReportType {
+    REALISASI
+    RENCANA
+  }
+
+  enum VolumeUnit {
+    OZ
+    TONNE
+    KG
+    G
+  }
+
+  enum CutOffUnit {
+    PERSENTASE
+    GPERTONNE
+  }
+
+
+  model ReportFinance {
+    id    String  @default(cuid()) @id
+    user  User
+    term  Term @default(TAHUNAN)
+    year  Int
+    report_type ReportType
+    currency Currency
+    rate Int
+    approved Boolean @default(false)
+    flag_for_deletion Boolean @default(false)
+    file_path String
+  }
+
+  model ReportGood {
+    id    String  @default(cuid()) @id
+    user  User
+    term  Term @default(TAHUNAN)
+    year  Int
+    report_type ReportType
+    currency Currency
+    rate Int
+    approved Boolean @default(false)
+    flag_for_deletion Boolean @default(false)
+    file_path String
+  }
+
+  model Budget {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+    category String
+  }
+
+  model Cashflow {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+    category String
+  }
+
+  model Assumption {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    currency Currency @default(IDR)
+    rate Int
+    volume_unit VolumeUnit
+    volume_value Int
+    price Int
+    cut_off Int
+    cut_off_unit CutOffUnit
+  }
+
+  model Fuel {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    currency Currency
+    rate Int
+    price Int
+  }
+
+  model CostOfGood {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+    category String
+  }
+
+  model Investment {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+  }
+
+  model OtherFinance {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+  }
+
+  model LostProfit {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+  }
+
+  model Royalty {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+  }
+
+  model OperationCost {
+    id    String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+  }
+
+  model StateRevenue {
+    id  String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+    category String
+  }
+
+  model Balance {
+    id  String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+    sub_category String
+    category String
+  }
+
+  model SourceOfFunding {
+    id  String  @default(cuid()) @id
+    report_finance ReportFinance
+    detail String
+    value Int
+    category String
+  }
+
+  model Procurement {
+    id    String  @default(cuid()) @id
+    report_good ReportGood
+    detail String
+    spec String
+    volume_unit VolumeUnit
+    volume_value Int
+    unit_price_type UnitPricetype
+    unit_price Int
+    category ProcurementCategory
+    project_area String
+    country_of_origin Country?
+    province_of_origin Province?
+    district_of_origin District?
+    tkdn Int
+    tkdn_type TKDNType
+  }
+
+  enum Country {
+    AFGHANISTAN
+    ALBANIA
+    ALGERIA
+    ANDORRA
+    ANGOLA
+    ANTIGUA_DEPS
+    ARGENTINA
+    ARMENIA
+    AUSTRALIA
+    AUSTRIA
+    AZERBAIJAN
+    BAHAMAS
+    BAHRAIN
+    BANGLADESH
+    BARBADOS
+    BELARUS
+    BELGIUM
+    BELIZE
+    BENIN
+    BHUTAN
+    BOLIVIA
+    BOSNIA_HERZEGOVINA
+    BOTSWANA
+    BRAZIL
+    BRUNEI
+    BULGARIA
+    BURKINA
+    BURUNDI
+    CAMBODIA
+    CAMEROON
+    CANADA
+    CAPE_VERDE
+    CENTRAL_AFRICAN_REP
+    CHAD
+    CHILE
+    CHINA
+    COLOMBIA
+    COMOROS
+    CONGO
+    CONGO_DEMOCRATIC_REP
+    COSTA_RICA
+    CROATIA
+    CUBA
+    CYPRUS
+    CZECH_REPUBLIC
+    DENMARK
+    DJIBOUTI
+    DOMINICA
+    DOMINICAN_REPUBLIC
+    EAST_TIMOR
+    ECUADOR
+    EGYPT
+    EL_SALVADOR
+    EQUATORIAL_GUINEA
+    ERITREA
+    ESTONIA
+    ETHIOPIA
+    FIJI
+    FINLAND
+    FRANCE
+    GABON
+    GAMBIA
+    GEORGIA
+    GERMANY
+    GHANA
+    GREECE
+    GRENADA
+    GUATEMALA
+    GUINEA
+    GUINEA_BISSAU
+    GUYANA
+    HAITI
+    HONDURAS
+    HUNGARY
+    ICELAND
+    INDIA
+    INDONESIA
+    IRAN
+    IRAQ
+    IRELAND_REPUBLIC
+    ISRAEL
+    ITALY
+    IVORY_COAST
+    JAMAICA
+    JAPAN
+    JORDAN
+    KAZAKHSTAN
+    KENYA
+    KIRIBATI
+    KOREA_NORTH
+    KOREA_SOUTH
+    KOSOVO
+    KUWAIT
+    KYRGYZSTAN
+    LAOS
+    LATVIA
+    LEBANON
+    LESOTHO
+    LIBERIA
+    LIBYA
+    LIECHTENSTEIN
+    LITHUANIA
+    LUXEMBOURG
+    MACEDONIA
+    MADAGASCAR
+    MALAWI
+    MALAYSIA
+    MALDIVES
+    MALI
+    MALTA
+    MARSHALL_ISLANDS
+    MAURITANIA
+    MAURITIUS
+    MEXICO
+    MICRONESIA
+    MOLDOVA
+    MONACO
+    MONGOLIA
+    MONTENEGRO
+    MOROCCO
+    MOZAMBIQUE
+    MYANMAR
+    NAMIBIA
+    NAURU
+    NEPAL
+    NETHERLANDS
+    NEW_ZEALAND
+    NICARAGUA
+    NIGER
+    NIGERIA
+    NORWAY
+    OMAN
+    PAKISTAN
+    PALAU
+    PANAMA
+    PAPUA_NEW_GUINEA
+    PARAGUAY
+    PERU
+    PHILIPPINES
+    POLAND
+    PORTUGAL
+    QATAR
+    ROMANIA
+    RUSSIAN_FEDERATION
+    RWANDA
+    ST_KITTS_NEVIS
+    ST_LUCIA
+    SAINT_VINCENT_THE_GRENADINES
+    SAMOA
+    SAN_MARINO
+    SAO_TOME_PRINCIPE
+    SAUDI_ARABIA
+    SENEGAL
+    SERBIA
+    SEYCHELLES
+    SIERRA_LEONE
+    SINGAPORE
+    SLOVAKIA
+    SLOVENIA
+    SOLOMON_ISLANDS
+    SOMALIA
+    SOUTH_AFRICA
+    SOUTH_SUDAN
+    SPAIN
+    SRI_LANKA
+    SUDAN
+    SURINAME
+    SWAZILAND
+    SWEDEN
+    SWITZERLAND
+    SYRIA
+    TAIWAN
+    TAJIKISTAN
+    TANZANIA
+    THAILAND
+    TOGO
+    TONGA
+    TRINIDAD_TOBAGO
+    TUNISIA
+    TURKEY
+    TURKMENISTAN
+    TUVALU
+    UGANDA
+    UKRAINE
+    UNITED_ARAB_EMIRATES
+    UNITED_KINGDOM
+    UNITED_STATES
+    URUGUAY
+    UZBEKISTAN
+    VANUATU
+    VATICAN_CITY
+    VENEZUELA
+    VIETNAM
+    YEMEN
+    ZAMBIA
+    ZIMBABWE
+  }
+
+  enum Province {
+    DKI_JAKARTA
+  }
+
+  enum District {
+    JAKARTA_TIMUR
+  }
+
+  enum TKDNType {
+    SA
+    SI
+  }
+
+  enum UnitPricetype {
+    ONSITE
+    CIF
+  }
+
+  enum ProcurementCategory {
+    A
+    B
+    C
+    D
+    E
+    F
+    G
+    H
+    I
+    J
+    K
+    L
+    M
+    N
+    O
+    P
+    Q
+    R
+    S
+    T
+  }
```



import { Photon } from '@prisma/photon'
const photon = new Photon()

async function main() {
  const user1 = await photon.users.create({
    data: {
      username: '1234567890',
      password: '$2b$10$/1CrKPoRuMweAKDbR9s4xOdOy.cbcUOLkgk7KMBpkyExFQ.afnopq', // 1n14dmin
      commodity: 'NOT_AVAILABLE',
      company_type: 'NOT_AVAILABLE',
      role: 'ADMIN',
      company_permission: 'MINERBA',
      company_name: 'KEMENTRIAN ESDM'
    },
  });
  const user2 = await photon.users.create({
    data: {
      username: 'perusahaan1',
      password: '$2b$10$/1CrKPoRuMweAKDbR9s4xOdOy.cbcUOLkgk7KMBpkyExFQ.afnopq', // 1n14dmin
      commodity: 'BATUBARA',
      company_type: 'CV',
      company_name: 'CobaCoba',
      role: 'MINER',
      company_permission: 'IUP',
    },
  });
}

main().finally(async () => {
  await photon.disconnect()
})

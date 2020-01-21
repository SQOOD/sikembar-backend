import { Photon } from '@prisma/photon'
const photon = new Photon()

async function main() {
  const user1 = await photon.users.create({
    data: {
      username: 'defaultAdmin',
      password: '$2b$10$/1CrKPoRuMweAKDbR9s4xOdOy.cbcUOLkgk7KMBpkyExFQ.afnopq', // 1n14dmin
      commodity: 'NOT_AVAILABLE',
      company_type: 'MINERBA',
      role: 'ADMIN',
    },
  })
}

main().finally(async () => {
  await photon.disconnect()
})

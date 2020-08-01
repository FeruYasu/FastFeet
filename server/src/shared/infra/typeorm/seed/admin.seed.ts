import { hash } from 'bcryptjs';

let AdminSeed;

async function hashPassword() {
  const passwordHashed = await hash('123456', 8);

  AdminSeed = [
    {
      name: 'admin',
      email: 'admin@fastfeet.com',
      password: passwordHashed,
      createdAt: `${new Date()}`,
      updatedAt: `${new Date()}`,
    },
  ];

  return AdminSeed;
}

export default hashPassword;

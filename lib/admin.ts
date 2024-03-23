import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2e0O2MRjWZVOafFb2GJzo98KzZ2",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};

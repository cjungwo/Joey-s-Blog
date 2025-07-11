import { Role } from "@/generated/prisma";

export function RbacGuard(userRole: Role, role: Role | Role[]): boolean {
  if (Array.isArray(role) === false) {
    role = [role];
  }

  if (role.includes(userRole)) {
    return true;
  }

  return false;
}
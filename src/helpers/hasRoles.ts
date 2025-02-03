import IUser from "@/interfaces/IUser"

export default function hasRoles(user: IUser | null, roleName: string) {
  if(!user) return

  return user?.roles?.some(role => role.name === roleName)
}
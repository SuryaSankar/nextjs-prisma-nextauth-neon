import { signOut } from "@/auth"
 
export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="hidden sm:block text-gray-700 font-medium hover:text-[#369b6f] transition-all duration-200" type="submit">Sign Out</button>
    </form>
  )
}
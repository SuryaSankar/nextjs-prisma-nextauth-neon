
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
        <button className="px-3 py-2 sm:px-4 bg-[#369b6f] hover:bg-[#2d8159] text-white rounded-lg transition-all duration-200 font-medium shadow-sm hover:-translate-y-0.5 hover:shadow-md text-sm sm:text-base" type="submit">
            Signin with Google
        </button>
    </form>
  )
} 
import prisma from '@/lib/prisma'

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <div>
        <a href="/posts/new">Create Post</a>
      </div>
    </div>
  );
}
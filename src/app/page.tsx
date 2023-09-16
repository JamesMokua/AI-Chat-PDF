import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import FileUpload from "@/components/ui/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 ">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold ">Analyse your PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg text-slate-600">
            Join millions of people who use somaPDF to read documents, answer
            questions and understand resources
          </p>
          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload/>
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get started
                  <LogInIcon className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

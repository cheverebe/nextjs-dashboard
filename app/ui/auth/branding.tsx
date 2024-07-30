import { NewspaperIcon } from "@/lib/icons";

export default function AuthBranding() {
    return <div className="text-primary-foreground max-w-[300px] space-y-4 text-center lg:max-w-[400px] lg:text-left">
    <div className="flex items-center justify-center lg:justify-start">
      <NewspaperIcon className="h-8 w-8" />
      <span className="ml-2 text-2xl font-bold">TMN</span>
    </div>
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        Tailormade News
      </h1>
      <p className="text-primary-foreground/80 text-lg sm:text-xl">
        Personalized news for your interests.
      </p>
    </div>
  </div>
}
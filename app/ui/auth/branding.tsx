import { NewspaperIcon } from "@/lib/icons";
import Image from 'next/image';

export default function AuthBranding() {
    return <div className="text-primary-foreground max-w-[300px] space-y-4 text-center lg:max-w-[400px] lg:text-left">
    <div className="flex items-center justify-center">
      <Image
            src="/white-n-logo.png"
            width={120}
            height={120}
            alt="Screenshots of the dashboard project showing desktop version"
          />
    </div>
    <div className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        TailorMadeNews
      </h1>
      <p className="text-primary-foreground/80 text-lg sm:text-xl">
        Personalized news for your interests.
      </p>
    </div>
  </div>
}
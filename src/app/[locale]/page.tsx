import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Page() {
  const t = useTranslations('Index')

  return (
    <>
      <main>
        hello
      </main>
    </>
  );
}

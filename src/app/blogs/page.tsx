import BlogPage from "@/src/components/blog/BlogsPage";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";
import { languages } from "@/src/i18n/settings";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return (
    <>
      <BlogPage />
      <FloatingWhatsapp isActive={true} hideOnMobile={false} />
    </>
  );
}
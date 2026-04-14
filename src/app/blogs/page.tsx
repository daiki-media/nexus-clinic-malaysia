import BlogPage from "@/src/components/blog/BlogsPage";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Nexus Clinic Blog – Aesthetic & Weight Loss Insights",
  description: "MOH-certified clinic blog featuring expert advice on aesthetic, anti-aging, and weight loss treatments designed for safe, effective results.",
  alternates: {
    canonical: `${baseurl}/blogs`,
  },
};


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
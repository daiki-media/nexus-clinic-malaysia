import FaceHub from '@/src/views/faceTreatment/FaceHub';

export default async function FacePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <FaceHub locale={locale} />;
}       
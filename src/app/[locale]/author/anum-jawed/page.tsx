import Image from "next/image";

export default function AuthorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">

      {/* Header */}
      <div className="flex items-center gap-6 mb-10">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/images/Anum_img.png"
            alt="Dr. Anum Jawed"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-brown">
            Dr. Anum Jawed
          </h1>
          <p className="text-brown/70">
            Pharmaceutical Content Writer & Registered Pharmacist
          </p>
          <p className="text-sm text-wine mt-1">
            Pharm-D, MPhil in Pharmaceutics
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-6 text-lg text-brown/90 leading-relaxed">

        <p>
          Dr. Anum Jawed is a pharmaceutical content writer and registered pharmacist with a strong academic background in pharmaceutics. She earned her Doctor of Pharmacy (Pharm-D) and MPhil in Pharmaceutics from the University of Karachi, Pakistan.
        </p>

        <p>
          She has professional experience working with DoctorOnCall, a Malaysian digital healthcare platform, and has also contributed to healthcare initiatives associated with the Ministry of Health Malaysia (MOH).
        </p>

        <p>
          Through these roles, she gained valuable experience in developing research-based healthcare and pharmaceutical content for public health awareness and patient education.
        </p>

        <p>
          With her combined expertise in pharmacy and writing, she specializes in creating clear, accurate, and engaging medical and pharmaceutical content, helping translate complex scientific information into accessible knowledge for a wider audience.
        </p>

      </div>
    </div>
  );
}

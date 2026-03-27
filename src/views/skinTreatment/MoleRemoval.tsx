"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Scissors,
  CheckCircle2,
  XCircle,
  MapPin,
  AlertTriangle,
  Flame,
  ZapIcon,
  Snowflake,
  Layers,
  HelpCircle,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const MoleRemovalLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "moleRemoval");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-mole-removal1.webp",
      after: "/images/B&A-skin/B&A-mole-removal1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-mole-removal2.webp",
      after: "/images/B&A-skin/B&A-mole-removal2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-mole-removal3.webp",
      after: "/images/B&A-skin/B&A-mole-removal3.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: "url('/images/clinic/interior.png')" }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20 }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-5xl md:text-7xl text-brown mb-6 leading-tight"
            >
              Mole Removal in Kuala Lumpur That
              <span className="text-wine"> Looks Natural</span> When It Heals
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-taupe text-xl md:text-2xl mb-4 max-w-3xl mx-auto font-inter"
            >
              If it is on your face, you do not just want it gone. You want the
              area to heal neatly and blend in.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown text-lg mb-8 max-w-2xl mx-auto font-inter"
            >
              At Nexus Clinic KL, we choose the safest method for your mole
              type, location, and skin, then guide you through aftercare so the
              result looks clean and calm.
            </motion.p>

            <motion.button
              variants={scaleIn}
              className="bg-wine text-light px-12 py-4 rounded-full font-inter text-lg hover:bg-rose transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Book Your Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* Trust Strip */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="absolute bottom-0 left-0 right-0 bg-glass backdrop-blur-md border-t border-cream py-4"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-sm text-brown font-inter">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose shrink-0" />
                <span>
                  Nexus Clinic Kuala Lumpur, KLCC area: LG 10, Lower Ground
                  Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-rose shrink-0" />
                <span>
                  Multiple removal methods available: laser, electrocautery,
                  radiofrequency, cryotherapy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-rose shrink-0" />
                <span>
                  Doctor-led assessment first: we check changes in size, color,
                  or texture before removing
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why People Choose Mole Removal */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              Mole removal in Malaysia is not only cosmetic.
              <span className="text-wine"> Sometimes it is peace of mind.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-4"
            >
              Most people do not book mole removal because they love skincare.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-lg mb-4"
            >
              They book it because the mole is starting to bother them.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-8 shadow-lg mb-6"
            >
              <p className="text-brown font-inter">
                It catches on a mask. It sits right where makeup cakes. Someone
                pointed it out in a photo and now you cannot unsee it. Or worse,
                it changed. Even slightly. That tiny change can sit in your head
                for weeks.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-taupe font-inter">
              At Nexus Clinic Kuala Lumpur, we treat this the right way. First
              we assess the mole and your skin. Then we choose the safest
              removal method for that exact spot. Nexus Clinic states it offers
              several methods, and the choice depends on the condition and
              individual needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Section with Single Image */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                What is a mole,{" "}
                <span className="text-wine">in simple words</span>
              </h2>
              <p className="text-taupe font-inter text-lg mb-4">
                A mole is a common skin growth. Many are harmless. Some are
                present from childhood. Others appear later.
              </p>

              <p className="text-brown font-inter mb-3 font-semibold">
                Moles can be:
              </p>
              <ul className="list-disc pl-5 text-taupe font-inter mb-4">
                <li>Flat or raised</li>
                <li>Light brown, dark brown, or black</li>
                <li>Smooth or slightly rough</li>
                <li>Small like a dot, or larger</li>
              </ul>

              <p className="text-taupe font-inter mb-4">
                Most people have a few. Some people have many.
              </p>

              <p className="text-brown font-inter font-semibold">
                The key point is this: not every mole should be removed the same
                way, and not every mole should be removed purely for looks. If a
                mole is changing, it must be checked properly first.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/mole-removal.webp"
                  alt="Mole assessment at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mole vs Skin Tag vs Wart */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Mole vs skin tag vs wart
              <span className="text-wine">
                {" "}
                (people mix these up all the time)
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-4"
            >
              This is one reason a doctor-led assessment matters.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6 mb-6"
            >
              <div className="bg-light rounded-2xl p-6 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">Mole</h3>
                <p className="text-taupe font-inter">
                  usually pigmented (brown or black), can be flat or raised.
                </p>
              </div>

              <div className="bg-light rounded-2xl p-6 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Skin tag
                </h3>
                <p className="text-taupe font-inter">
                  soft, skin-colored, often on neck, underarms, groin.
                </p>
              </div>

              <div className="bg-light rounded-2xl p-6 shadow-lg">
                <h3 className="font-georgia text-xl text-brown mb-3">Wart</h3>
                <p className="text-taupe font-inter">
                  rougher texture, caused by a virus, can come back if the virus
                  remains.
                </p>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-taupe font-inter">
              Nexus Clinic's service also bundles moles, warts, and similar
              growths because people search them together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* When to Consider Mole Removal */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              When should you consider mole removal?
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-2">
                  1) Cosmetic reasons
                </h3>
                <p className="text-taupe font-inter">
                  You do not like how it looks, where it sits, or how it makes
                  you feel. That is valid.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-2">
                  2) Comfort reasons
                </h3>
                <p className="text-taupe font-inter">
                  It gets irritated by shaving, masks, collars, bras, or straps.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-2">
                  3) "This looks different" reasons
                </h3>
                <p className="text-taupe font-inter">
                  Any mole that changes in size, color, or texture deserves
                  attention before removal. Nexus Clinic highlights this too.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-2">
                  4) You want to check if it is suspicious
                </h3>
                <p className="text-taupe font-inter">
                  A doctor may recommend a biopsy if a mole seems suspicious.
                  Clique Clinic notes that if cancer is suspected, a tissue
                  sample may be taken for microscopic examination.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section className="py-24 bg-wine text-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl mb-8 text-center"
          >
            Red flags you should not ignore
            <span className="text-cream"> (ABCDE rule)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream/90 font-inter text-center mb-8"
          >
            If you notice changes, do not self-treat. Get it checked.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-cream/90 font-inter text-center mb-8"
          >
            The American Academy of Dermatology shares the ABCDE signs used to
            spot suspicious moles:
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-5 gap-4 mb-8"
          >
            <div className="text-center bg-light/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-georgia mb-2">A</div>
              <p className="font-inter text-sm">Asymmetry</p>
            </div>
            <div className="text-center bg-light/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-georgia mb-2">B</div>
              <p className="font-inter text-sm">Border that is irregular</p>
            </div>
            <div className="text-center bg-light/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-georgia mb-2">C</div>
              <p className="font-inter text-sm">Color variation</p>
            </div>
            <div className="text-center bg-light/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-georgia mb-2">D</div>
              <p className="font-inter text-sm">
                Diameter (often bigger than a pencil eraser, but can be smaller)
              </p>
            </div>
            <div className="text-center bg-light/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-georgia mb-2">E</div>
              <p className="font-inter text-sm">Evolving changes over time</p>
            </div>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-cream/90 font-inter text-center"
          >
            Even if you still want it removed for cosmetic reasons, this
            screening step protects you.
          </motion.p>
        </motion.div>
      </section>

      {/* No DIY Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-3xl p-12 shadow-xl border-2 border-wine/20"
            >
              <AlertTriangle className="w-16 h-16 text-wine mx-auto mb-6" />
              <h2 className="font-georgia text-4xl text-brown mb-6">
                Please do not remove a mole at home
              </h2>
              <p className="text-taupe font-inter text-lg mb-4">
                A lot of people look up "DIY mole removal" after seeing an ad.
                It is risky.
              </p>
              <p className="text-brown font-inter mb-4">
                AAD clearly says never try to remove a mole at home. Reasons
                include missed skin cancer, scarring, and infection.
              </p>
              <p className="text-taupe font-inter">
                Cleveland Clinic also advises against at-home mole removal and
                notes professional removal is safer.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-4 text-center"
            >
              How mole removal works at Nexus Clinic KL
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-12"
            >
              (what to expect)
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-center mb-8"
            >
              Think of this as a calm, step-by-step process.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine text-light w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      Step 1: Consultation and assessment
                    </h3>
                    <p className="text-taupe font-inter mb-3">We look at:</p>
                    <ul className="list-disc pl-5 text-taupe font-inter">
                      <li>The mole's shape, color, texture, and size</li>
                      <li>The location (face, eyelid area, neck, body)</li>
                      <li>Your skin type and how you usually heal</li>
                      <li>Whether the mole has changed recently</li>
                    </ul>
                    <p className="text-taupe font-inter mt-3">
                      Pantai Hospital also describes this consultation logic:
                      the doctor assesses the type, size, and number of moles,
                      then gives a treatment plan and quotation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine text-light w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      Step 2: Choose the safest removal method
                    </h3>
                    <p className="text-taupe font-inter">
                      Nexus Clinic states it provides options such as laser
                      treatment, electrocautery, radiofrequency, and
                      cryotherapy, chosen based on the condition and individual
                      needs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine text-light w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      Step 3: Numbing and removal
                    </h3>
                    <p className="text-taupe font-inter">
                      Most procedures use local anaesthetic, so you stay
                      comfortable.
                    </p>
                    <p className="text-taupe font-inter mt-2">
                      Cleveland Clinic notes providers use numbing medication,
                      and you may feel some stinging or burning in the area for
                      a few days after.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-light rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wine text-light w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="font-georgia text-xl text-brown mb-2">
                      Step 4: Aftercare guidance
                    </h3>
                    <p className="text-taupe font-inter">
                      This part affects the final look more than people think.
                      We guide you on cleaning, protection, and what not to
                      touch.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Removal Methods */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              Removal Methods at Nexus Clinic KL
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-3 flex items-center gap-2">
                  <Zap className="text-wine" /> 1) Laser mole removal
                </h3>
                <p className="text-taupe font-inter mb-3">
                  Often used for certain cosmetic moles and selected lesions. It
                  can be quick, precise, and controlled.
                </p>
                <p className="text-taupe font-inter">
                  Competitor pages that rank for KL often focus heavily on
                  laser:
                </p>
                <p className="text-taupe font-inter mt-2">
                  Clique explains laser removal as a simple outpatient method
                  where the area is numbed and the laser is used to ablate the
                  mole. Da Vinci lists laser healing around 7 to 14 days,
                  depending on method and case.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-3 flex items-center gap-2">
                  <Flame className="text-wine" /> 2) Electrocautery
                </h3>
                <p className="text-taupe font-inter">
                  Uses heat to remove the lesion. Often used for certain benign
                  growths depending on assessment.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-3 flex items-center gap-2">
                  <ZapIcon className="text-wine" /> 3) Radiofrequency removal
                </h3>
                <p className="text-taupe font-inter">
                  Uses high-frequency energy with controlled depth. Nexus
                  includes radiofrequency as an option.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-3 flex items-center gap-2">
                  <Snowflake className="text-wine" /> 4) Cryotherapy
                </h3>
                <p className="text-taupe font-inter">
                  Uses freezing for certain lesions. Also listed as an option by
                  Nexus.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-cream rounded-2xl p-6"
              >
                <h3 className="font-georgia text-2xl text-brown mb-3 flex items-center gap-2">
                  <Scissors className="text-wine" /> 5) Surgical excision (when
                  needed)
                </h3>
                <p className="text-taupe font-inter mb-3">
                  If a mole is suspicious, deeper, or requires removal with
                  margins, a surgical approach may be used by the appropriate
                  specialist route. Clique notes that cancerous moles may
                  require surgical removal and referral.
                </p>
                <p className="text-brown font-inter font-semibold">
                  Not every mole is a laser mole. And not every mole should be
                  "burned off" quickly. The method should match the mole, not
                  the marketing.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Is mole removal painful?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              Most people fear this part. Then they are surprised.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-8 shadow-lg"
            >
              <p className="text-taupe font-inter mb-4">
                Cleveland Clinic states numbing medication is used to prevent
                pain during mole removal, though mild stinging or burning can
                happen for a few days after. Clique also notes laser mole
                removal is generally comfortable under local anaesthetic.
              </p>
              <p className="text-brown font-inter">
                If you are removing a mole in a sensitive area (like nose, upper
                lip, around eyes), comfort planning matters even more. That is
                why we do assessment first.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Healing Time */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Healing time and what the area looks like afterward
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              This is where expectations need to be real.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4 mb-8">
              <p className="text-taupe font-inter">
                • Pantai Hospital says recovery is usually minimal, with mild
                redness or scabbing for a few days to a week, depending on the
                method.
              </p>
              <p className="text-taupe font-inter">
                • Da Vinci mentions laser healing around 7 to 14 days, while
                surgical excision may take a few weeks.
              </p>
              <p className="text-taupe font-inter">
                • Medical News Today notes a mole removal scar will usually heal
                within about 4 weeks, though it may remain visible longer.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                The most common "normal" stages:
              </h3>
              <ol className="space-y-3 text-taupe font-inter">
                <li>1. Day 1 to 3: mild redness, tenderness, small wound</li>
                <li>2. Day 4 to 10: scab forms and dries</li>
                <li>3. Week 2 to 4: skin closes and calms</li>
                <li>
                  4. Following months: the scar line (if any) fades and blends
                </li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scar Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Will mole removal leave a scar?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter text-center mb-4 text-lg"
            >
              Sometimes yes. Sometimes barely.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-light rounded-2xl p-8 shadow-lg mb-6"
            >
              <p className="text-taupe font-inter mb-4">
                Clique answers this honestly: scarring is possible and depends
                on depth, and for many people the scar is cosmetically better
                than the mole. Medical News Today also explains scars usually
                heal within weeks but can remain visible for months or longer.
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter font-semibold"
            >
              If your top worry is scarring, tell the doctor upfront. The
              removal method, depth control, and aftercare plan can be tailored
              around that goal.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Can It Grow Back */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Can a mole grow back after removal?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              Usually, it depends on whether it was completely removed.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8"
            >
              <p className="text-taupe font-inter">
                Da Vinci notes moles do not typically grow back unless
                incompletely removed. For warts, recurrence can happen if the
                underlying virus remains, which is why diagnosis matters.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects */}
      <section className="py-24 bg-wine text-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl mb-8 text-center"
          >
            Side effects and risks (what can happen)
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream/90 font-inter text-center mb-8"
          >
            Most mole removals are straightforward, but you should know the
            possibilities.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
            <div className="bg-light/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-cream mb-3">
                Possible side effects include:
              </h3>
              <ul className="space-y-2 text-cream/80 font-inter">
                <li>• Redness and mild swelling for a few days</li>
                <li>• Scabbing</li>
                <li>
                  • Temporary darkening of the area, especially in deeper skin
                  tones
                </li>
                <li>• Small scar line</li>
                <li>
                  • Infection risk if aftercare is ignored (this is one reason
                  professionals use sterile equipment and controlled methods)
                </li>
              </ul>
            </div>

            <div className="bg-light/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-georgia text-xl text-cream mb-3">
                Rare but important:
              </h3>
              <ul className="space-y-2 text-cream/80 font-inter">
                <li>
                  • Delayed healing if the area keeps getting rubbed or picked
                </li>
                <li>• Pigment changes</li>
                <li>
                  • Need for a second session for some moles (Clique mentions
                  some require a few sessions)
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Cost Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Mole removal cost in Malaysia
              <span className="text-wine"> (what affects price)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              People want a number. The honest answer is that prices vary,
              because one mole can be tiny and flat, and another can be large,
              raised, or in a tricky spot.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-2xl p-8 mb-6"
            >
              <p className="text-taupe font-inter mb-4">
                Local pricing references show wide ranges:
              </p>
              <p className="text-brown font-inter font-semibold">
                A Malaysian clinic site quotes a broad range (RM80 to RM2000 per
                mole) depending on size, depth, and method. Use it as a rough
                guide, not a guarantee.
              </p>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter mb-4"
            >
              Directory pages and clinic listings also show that pricing differs
              across KL and Malaysia, often because methods and clinic
              positioning vary.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mb-4"
            >
              Pantai Hospital's advice is sensible: have a consultation, get
              assessment, then receive a detailed quotation and plan based on
              type, size, and number of moles.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 rounded-2xl p-6"
            >
              <h3 className="font-georgia text-2xl text-brown mb-3">
                What usually increases cost:
              </h3>
              <ul className="list-disc pl-5 text-taupe font-inter">
                <li>Larger or deeper mole</li>
                <li>Face locations where precision matters more</li>
                <li>Multiple moles removed in one visit</li>
                <li>Suspicion that requires biopsy or referral pathway</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Areas we commonly treat
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              Moles can appear anywhere, but these are the most requested areas
              in Kuala Lumpur:
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                "Face (cheeks, nose, forehead, lip line)",
                "Neck",
                "Under chin",
                "Back and shoulders",
                "Chest",
                "Arms and hands",
                "Legs",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-light p-4 rounded-xl text-brown font-inter text-center shadow-sm"
                >
                  {area}
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-brown font-inter mt-8 text-center"
            >
              Face moles are the most emotionally loaded. People see them every
              day. That is why scar planning and aftercare are a big part of the
              Nexus approach.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              Pros and cons of mole removal
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-wine" /> Pros
                </h3>
                <ul className="space-y-3 text-taupe font-inter">
                  <li>• A cleaner look where makeup sits better</li>
                  <li>• Less irritation from shaving, masks, collars</li>
                  <li>• Less self-consciousness in photos</li>
                  <li>• Peace of mind once it is properly assessed</li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-cream rounded-2xl p-8"
              >
                <h3 className="font-georgia text-2xl text-brown mb-4 flex items-center gap-2">
                  <XCircle className="text-wine" /> Cons
                </h3>
                <ul className="space-y-3 text-taupe font-inter">
                  <li>• Possible scarring, depending on depth and method</li>
                  <li>
                    • A healing period where the spot looks "worse" before it
                    looks better
                  </li>
                  <li>• Some moles may require more than one session</li>
                  <li>
                    • If a mole is suspicious, cosmetic removal may not be the
                    correct first step
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages vs Approach */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-6 text-center"
            >
              Mole removal vs "skin growth removal" packages
              <span className="text-wine"> (what to choose)</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              Some clinics bundle everything under one package: moles, warts,
              oil seeds, milia, skin tags.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-4"
            >
              That can be convenient. It also increases the chance you remove
              the wrong thing the wrong way.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-wine/10 border border-wine/20 rounded-2xl p-8"
            >
              <p className="text-brown font-inter text-lg">
                A better approach is what Nexus states: multiple methods, chosen
                based on the condition and your needs.
              </p>
              <p className="text-brown font-inter mt-4 font-semibold">
                That single sentence builds trust, because it signals clinical
                judgment instead of a fixed menu.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Nexus */}
      <section className="py-24 bg-wine text-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl mb-8 text-center"
          >
            Why Nexus Clinic Kuala Lumpur
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream/90 font-inter text-center mb-8 text-lg"
          >
            If you are removing a mole, you are trusting someone with your face
            or body. You want calm hands, clear answers, and a plan you
            understand.
          </motion.p>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
            <div className="bg-light/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <MapPin className="w-12 h-12 text-rose mx-auto mb-3" />
              <p className="font-inter">
                KLCC location and easy access: LG 10, Wisma UOA II, Jalan Pinang
              </p>
            </div>
            <div className="bg-light/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Layers className="w-12 h-12 text-rose mx-auto mb-3" />
              <p className="font-inter">
                Multiple removal options, so the method matches the mole
              </p>
            </div>
            <div className="bg-light/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-rose mx-auto mb-3" />
              <p className="font-inter">
                A safety-first approach that flags mole changes for examination
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown mb-8 text-center"
            >
              People Also Ask FAQs
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-taupe font-inter text-center mb-8"
            >
              (real PAA-style questions)
            </motion.p>

            <div className="space-y-4">
              {[
                {
                  q: "Is mole removal painful?",
                  a: "Most mole removal is done with numbing medication, so the procedure itself should not be painful. You may feel mild stinging or burning for a few days afterward.",
                },
                {
                  q: "How long does it take to heal after mole removal?",
                  a: "Recovery is often minimal, with mild redness or scabbing for a few days to a week, depending on the method. Laser healing is commonly quoted around 7 to 14 days, while surgical excision may take longer.",
                },
                {
                  q: "Will mole removal leave a scar?",
                  a: "It can. Scar risk depends on mole depth and removal method. Some people find the scar looks better than the mole once it fades.",
                },
                {
                  q: "Can a mole grow back after removal?",
                  a: "Moles do not typically grow back unless they were incompletely removed.",
                },
                {
                  q: "How much does mole removal cost in Malaysia?",
                  a: "Cost varies widely based on size, depth, location, and method. Some Malaysian pricing references show a broad range, and the most accurate way is a consultation and quotation.",
                },
                {
                  q: "Is laser mole removal safe?",
                  a: "When performed by a medical professional after proper assessment, laser removal can be a safe option for suitable moles. However, suspicious moles may need biopsy or a different pathway, so assessment comes first.",
                },
                {
                  q: "When should I worry about a mole?",
                  a: "If it changes in size, shape, color, border, or starts evolving, get it checked. The AAD ABCDE guide is a simple way to remember warning signs.",
                },
                {
                  q: "Can I remove a mole at home?",
                  a: "No. AAD warns against at-home mole removal due to skin cancer risk, scarring, and infection.",
                },
                {
                  q: "Do I need a biopsy before removing a mole?",
                  a: "Not always. But if a mole looks suspicious, a doctor may take a tissue sample for microscopic examination.",
                },
                {
                  q: "What is the best method for removing a mole on the face?",
                  a: "There is no single 'best' method. It depends on depth, location, and your scar risk. This is why clinics that offer multiple options and choose based on the condition tend to get better outcomes. Nexus lists several options, selected based on individual needs.",
                },
                {
                  q: "How do I care for the area after mole removal?",
                  a: "Follow your clinic's instructions closely. Healing and scar appearance are strongly influenced by aftercare, and sun protection matters because scars can darken. Medical sources emphasise ongoing wound care and sun avoidance during healing.",
                },
                {
                  q: "Should I remove a mole if it is changing?",
                  a: "A changing mole should be examined first. Do not treat it as purely cosmetic. Use the ABCDE signs and book an assessment.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-cream rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all"
                >
                  <h3 className="font-georgia text-xl text-brown mb-2 flex items-start gap-2">
                    <HelpCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                    {faq.q}
                  </h3>
                  <p className="text-taupe font-inter pl-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto px-4 text-center max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-brown mb-6"
          >
            If a mole is making you feel self-conscious, you do not need to keep
            living with that feeling.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-taupe font-inter text-xl mb-4"
          >
            And if a mole is changing, you do not need to keep guessing.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="bg-light rounded-2xl p-8 shadow-xl mb-8"
          >
            <p className="text-brown font-inter text-lg">
              Book a mole assessment at Nexus Clinic Kuala Lumpur (KLCC area)
              and we will explain what it is, what method suits it, what healing
              will look like, and what the realistic result is for your skin.
            </p>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-brown font-inter mb-8">
            Nexus Clinic is located at LG 10, Wisma UOA II, Jalan Pinang, 50450
            Kuala Lumpur.
          </motion.p>

          <motion.button
            variants={scaleIn}
            className="bg-wine text-light px-12 py-4 rounded-full font-inter text-lg hover:bg-rose transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Book Your Mole Assessment
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default MoleRemovalLanding;

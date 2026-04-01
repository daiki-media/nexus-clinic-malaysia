"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Activity,
  Droplet,
  Brain,
  Heart,
  Calendar,
  MapPin,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const FinasterideLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "hair/finasteride");

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-cream font-inter">
      {/* Hero Section - Page 1 */}
      <section className="relative overflow-hidden bg-linear-to-b from-wine/5 to-cream py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              variants={fadeInUp}
              className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown mb-6 leading-tight"
            >
              Stop the DHT.{" "}
              <span className="text-wine">Slow the shedding.</span>
              <br />
              Keep the hair you still have.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-taupe mb-8 max-w-2xl mx-auto"
            >
              Finasteride is a doctor prescribed treatment for male pattern hair
              loss. It helps protect your crown and mid scalp as thinning
              starts.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-sm text-brown">
                    Doctor led hair loss assessment and prescription planning
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-sm text-brown">
                    Evidence based options, often paired with minoxidil when
                    suitable
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-sm text-brown">
                    KLCC location at Wisma UOA II, Jalan Pinang
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-1" />
                  <span className="text-sm text-brown">
                    Clear guidance on side effects and safety checks
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What is Finasteride Section - WITH IMAGE - Page 1 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInLeft}
              viewport={{ once: true }}
            >
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
                Quick answer:{" "}
                <span className="text-wine">
                  What is finasteride for hair loss?
                </span>
              </h2>
              <p className="text-brown/80 text-lg leading-relaxed">
                Finasteride is a once daily tablet used for male pattern hair
                loss. It works by lowering DHT, a hormone linked to follicle
                shrinkage in androgenetic alopecia. Many men see slower hair
                loss. Some also see regrowth over time.
              </p>
              <p className="text-brown/80 text-lg leading-relaxed mt-4">
                At Nexus Clinic Kuala Lumpur, finasteride is usually considered
                when your pattern looks hormonal and genetic, especially around
                the crown or mid scalp.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInRight}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/api/placeholder/600/400"
                  alt="Medical consultation for hair loss"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Hair Thinning Happens - Page 1 */}
      <section className="py-16 bg-cream">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl text-brown mb-8 text-center"
          >
            Why hair thinning happens{" "}
            <span className="text-wine">(in simple terms)</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-brown/80 text-lg leading-relaxed"
          >
            If your hairline is creeping back or your crown is opening up, it is
            often male pattern hair loss. The follicles slowly shrink. Hair
            becomes finer. Growth cycles get shorter. Over time, those hairs
            stop showing up.
          </motion.p>
        </motion.div>
      </section>

      {/* How Finasteride Works - Page 2 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              How <span className="text-wine">finasteride works</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg leading-relaxed mb-4"
            >
              Finasteride blocks an enzyme called 5 alpha reductase. This
              reduces DHT levels. Less DHT means less miniaturisation of
              sensitive follicles.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg leading-relaxed"
            >
              That matters because most men do not lose hair evenly. They lose
              it in a pattern. Finasteride is designed for that pattern.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Finasteride Is For - Page 2 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="font-georgia text-3xl text-brown mb-12 text-center"
          >
            Who finasteride is for{" "}
            <span className="text-wine">(and who it is not for)</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-2xl p-8 border border-rose/20"
            >
              <h3 className="text-xl font-georgia text-wine mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                Good fit for finasteride
              </h3>
              <p className="text-brown/80 mb-3">
                Finasteride may be a good option if:
              </p>
              <ul className="space-y-3 text-brown/80">
                <li className="flex items-start">
                  <span className="text-wine mr-2">•</span>
                  You have male pattern hair loss (temples, crown, mid scalp)
                </li>
                <li className="flex items-start">
                  <span className="text-wine mr-2">•</span>
                  You are in early to moderate stages and want to slow it down
                </li>
                <li className="flex items-start">
                  <span className="text-wine mr-2">•</span>
                  You can take a daily tablet consistently
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-2xl p-8 border border-rose/20"
            >
              <h3 className="text-xl font-georgia text-rose mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Not a good fit (or needs extra caution)
              </h3>
              <ul className="space-y-3 text-brown/80">
                <li className="flex items-start">
                  <span className="text-rose mr-2">•</span>
                  Finasteride is not for women or children.
                </li>
                <li className="flex items-start">
                  <span className="text-rose mr-2">•</span>
                  It is also not the first answer for patchy bald spots (like
                  alopecia areata) or sudden shedding from stress or illness.
                  That needs a proper diagnosis first.
                </li>
                <li className="flex items-start">
                  <span className="text-rose mr-2">•</span>
                  Pregnancy safety matters. Pregnant women should not handle
                  crushed or broken finasteride tablets due to risk to a male
                  fetus.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Timeline - Pages 2-3 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="font-georgia text-3xl text-brown mb-12 text-center"
          >
            What results to expect{" "}
            <span className="text-wine">(timeline you can plan around)</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <Clock className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Weeks 1 to 8
              </h3>
              <p className="text-brown/70 text-sm">
                You may not see visible change yet. That is normal. Hair growth
                is slow.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <Activity className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Month 3 to 6
              </h3>
              <p className="text-brown/70 text-sm">
                Many people start noticing less shedding or small improvements.
                NHS guidance notes that for hair loss, improvement is often seen
                after 3 to 6 months.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <Calendar className="w-8 h-8 text-wine mb-4" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Month 9 to 12
              </h3>
              <p className="text-brown/70 text-sm">
                This is where results are easier to judge. Many clinicians ask
                patients to assess at around a year, not a few weeks.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center text-brown/80 italic bg-cream p-6 rounded-xl max-w-2xl mx-auto border border-taupe/20"
          >
            <p className="font-semibold mb-2">If you stop finasteride</p>
            <p>
              If you stop finasteride, the benefit gradually fades and hair loss
              usually resumes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Take Finasteride - Page 3 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              How to take finasteride{" "}
              <span className="text-wine">(simple routine)</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              For hair loss, the usual dose is 1mg once daily. Take it at
              roughly the same time each day. Swallow the tablet whole. Do not
              crush or break it.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-brown/80 text-lg">
              At Nexus Clinic KL, the right plan depends on your pattern, family
              history, and goals. Some patients also add minoxidil or in clinic
              therapies when suitable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Side Effects and Safety - Pages 3-4 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="font-georgia text-3xl text-brown mb-8 text-center"
          >
            Side effects and safety{" "}
            <span className="text-wine">(talked about honestly)</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center text-brown/80 mb-8 max-w-2xl mx-auto"
          >
            Most men take finasteride without major issues. But side effects can
            happen. The key is awareness and early action.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <Heart className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                Sexual side effects
              </h3>
              <p className="text-brown/70 text-sm">
                In the FDA label for Propecia (finasteride 1mg), common adverse
                reactions reported include decreased libido, erectile
                dysfunction, and ejaculation disorder.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <Brain className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                Mood changes and mental health
              </h3>
              <p className="text-brown/70 text-sm">
                UK regulators advise men taking finasteride to watch for
                psychiatric side effects. They advise stopping finasteride 1mg
                for hair loss if depression or suicidal thoughts occur and
                contacting a doctor promptly.
              </p>
              <p className="text-brown/70 text-sm mt-2">
                The EMA has also described measures to reduce the risk of
                suicidal thoughts and highlights that reports were mainly with
                1mg tablets used for androgenic alopecia.
              </p>
              <p className="text-brown/70 text-sm mt-2">
                NHS guidance similarly notes low mood and advises stopping right
                away if taking it for hair loss and you feel depressed, and
                telling close people so they can notice mood changes.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <AlertCircle className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                Do side effects ever persist?
              </h3>
              <p className="text-brown/70 text-sm">
                The UK drug safety update warns that sexual side effects may
                persist after stopping in some cases and recommends monitoring.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <Droplet className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-georgia text-lg text-brown mb-2">
                Breast changes
              </h3>
              <p className="text-brown/70 text-sm">
                Seek medical advice if you notice breast lumps, pain, swelling,
                or nipple discharge. NHS lists these as warning signs.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-wine/10 rounded-xl p-6 border border-wine/20 max-w-4xl mx-auto"
          >
            <p className="text-brown/80">
              If you have a history of depression, anxiety, or sexual health
              concerns, mention it at your consult. The safest plan is a
              tailored one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Oral vs Topical Finasteride - Page 4 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Oral vs topical finasteride{" "}
              <span className="text-wine">(what to know in 2026)</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              Oral finasteride is the standard, well studied option for male
              pattern hair loss.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              Topical finasteride exists, but many products are compounded. The
              FDA issued an alert about potential risks with compounded topical
              finasteride and noted that these are not FDA approved.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-brown/80 text-lg">
              If you are considering topical versions, ask exactly what
              formulation it is, how it is made, and what safety counselling is
              provided.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Finasteride vs Minoxidil - Page 4 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Finasteride vs minoxidil{" "}
              <span className="text-wine">(and why many men combine both)</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              A simple way to think about it:
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              Finasteride helps protect hair by reducing DHT driven
              miniaturisation. Minoxidil helps stimulate growth and can improve
              thickness.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-brown/80 text-lg">
              The American Academy of Dermatology lists finasteride as FDA
              approved for male pattern hair loss and explains it can slow hair
              loss and stimulate new growth when taken as directed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Finasteride vs Dutasteride - Pages 4-5 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Finasteride vs dutasteride{" "}
              <span className="text-wine">(quick comparison)</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              Both reduce DHT, but dutasteride targets a broader set of enzymes
              and is often discussed as stronger. It is not always the first
              choice for hair loss.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              The EMA review on suicidal thoughts covered both finasteride and
              dutasteride, but the confirmed link to suicidal ideation was for
              finasteride, with risk warnings strengthened.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-brown/80 text-lg">
              If you are hearing about dutasteride online, do not switch on your
              own. Talk to a doctor first.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Areas Finasteride Can Help - Page 5 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Areas finasteride can help most
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              Finasteride tends to be most helpful for the crown and mid scalp.
              Clinical trial data also shows benefit in the anterior or mid
              scalp area in men taking 1 mg daily.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-brown/80 text-lg">
              Hairline regrowth can happen, but results vary. The earlier you
              start, the better the odds of keeping what you have.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Competitor Insights - Pages 5-6 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="font-georgia text-3xl text-brown mb-8 text-center"
          >
            What top clinics in Kuala Lumpur are doing{" "}
            <span className="text-wine">(competitor insights)</span>
          </motion.h2>

          <div className="space-y-4 max-w-4xl mx-auto mb-8">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-brown/80"
            >
              When we review high ranking hair loss providers in KL, a few
              patterns show up:
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <p className="text-brown/80">
                1. Combination plans are common. Clinic Cleo highlights
                finasteride as a first line option and often pairs it with
                topical minoxidil, oral minoxidil, and add ons like mesotherapy.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <p className="text-brown/80">
                2. Pricing is shown as per box or per month. Premier Clinic
                lists finasteride at around RM240 per box and also promotes
                bundled hair loss solutions starting from a lower entry price
                point.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <p className="text-brown/80">
                3. Authority signals matter. GLOJAS positions itself around
                evidence based care and specialist credibility, and it
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <p className="text-brown/80">
                4. People want cost ranges before they book. Clique Clinic gives
                a helpful benchmark and notes finasteride can be roughly RM100
                to RM300 per month depending on plan and provider.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="bg-wine/10 rounded-xl p-6 border border-wine/20 max-w-4xl mx-auto"
          >
            <p className="text-brown font-semibold mb-2">
              How Nexus Clinic KL responds:
            </p>
            <p className="text-brown/80">
              focus on proper diagnosis first, then match you to the simplest
              plan that can actually be followed. Medication is often part of a
              wider hair strategy, not a one off pill.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cost Section - Page 6 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Finasteride cost in Malaysia{" "}
              <span className="text-wine">(what affects the price)</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-brown/80 text-lg mb-4"
            >
              Prices vary by brand, supply, and whether it is bundled with
              consults.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 border border-taupe/20 mb-6"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                Here are real local reference points:
              </h3>
              <ul className="space-y-2 text-brown/80">
                <li>
                  • DoctorOnCall lists a generic finasteride 1 mg product
                  (Finapecia 30 tablets) around RM94.12.
                </li>
                <li>
                  • Some branded options are higher, for example Propecia
                  listings can be around RM206 for a box size shown online.
                </li>
                <li>
                  • Some KL clinics state finasteride around RM240 per box.
                </li>
                <li>
                  • A practical estimate used by a KL provider is about RM100 to
                  RM300 per month.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-3">
                What changes the cost for you:
              </h3>
              <ul className="space-y-2 text-brown/80">
                <li>• Brand vs generic</li>
                <li>• Monthly vs multi month supply</li>
                <li>
                  • Whether you add minoxidil, PRP, or other in clinic therapies
                </li>
                <li>• Whether follow ups and monitoring are included</li>
              </ul>
              <p className="mt-4 text-brown/80">
                At Nexus Clinic Kuala Lumpur, you can ask for a clear plan with
                expected monthly costs before you commit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect at Nexus - Pages 6-7 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="bg-light rounded-2xl p-8 border border-taupe/20"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              What to expect at{" "}
              <span className="text-wine">Nexus Clinic KL</span>
            </motion.h2>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  A short chat about your hair history and goals
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  Scalp and hair assessment to confirm the cause
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  A treatment plan that fits your routine, budget, and risk
                  comfort
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                <span className="text-brown/80">
                  Guidance on what to track for results over 3 to 12 months
                </span>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="mt-6 text-brown/80">
              Location note: Nexus Clinic is at Wisma UOA II, Jalan Pinang,
              Kuala Lumpur.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Important Medical Notes - Page 7 */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl text-brown mb-6"
            >
              Important medical notes{" "}
              <span className="text-wine">(small section, big value)</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 border border-taupe/20 mb-4"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Tell your doctor about PSA testing
              </h3>
              <p className="text-brown/80">
                Finasteride can lower PSA levels. If you do PSA tests, tell your
                healthcare provider you are taking it so results are interpreted
                correctly.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Blood donation
              </h3>
              <p className="text-brown/80">
                Some blood services defer donors who have taken finasteride
                recently, due to pregnancy related risk if blood is given to a
                pregnant recipient.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Pages 7-9 */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="font-georgia text-3xl text-brown mb-12 text-center"
          >
            PAA style FAQs about finasteride for hair loss{" "}
            <span className="text-wine">(Malaysia)</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Does finasteride regrow hair or just stop hair loss?
              </h3>
              <p className="text-brown/70 text-sm">
                It can do both. Many men see slower hair loss. Some see new
                growth. Results vary by stage and consistency.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How long does finasteride take to work for hair loss?
              </h3>
              <p className="text-brown/70 text-sm">
                Most people need 3 to 6 months to notice improvement. A full
                assessment often needs closer to 12 months.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                What happens if I stop taking finasteride?
              </h3>
              <p className="text-brown/70 text-sm">
                The benefit does not last forever. Hair loss usually returns
                over time after stopping.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Is finasteride safe to take long term?
              </h3>
              <p className="text-brown/70 text-sm">
                Many people use it for months or years. Long term use should
                still include monitoring for side effects.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Can finasteride cause erectile dysfunction?
              </h3>
              <p className="text-brown/70 text-sm">
                It can in some users. The FDA label lists erectile dysfunction
                among common adverse reactions. If it happens, speak to your
                doctor.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Can finasteride cause depression or anxiety?
              </h3>
              <p className="text-brown/70 text-sm">
                Mood changes have been reported. Regulators advise vigilance and
                to stop finasteride 1 mg for hair loss if depression or suicidal
                thoughts occur.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Is finasteride better than minoxidil?
              </h3>
              <p className="text-brown/70 text-sm">
                They work differently. Finasteride targets DHT. Minoxidil
                stimulates growth and thickness. Many men use both for better
                coverage.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Can women take finasteride for hair loss?
              </h3>
              <p className="text-brown/70 text-sm">
                Finasteride is not indicated for women and has important
                pregnancy related risks. A doctor should guide any alternative
                options for female hair loss.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Should I choose oral or topical finasteride?
              </h3>
              <p className="text-brown/70 text-sm">
                Oral finasteride is the best studied option. Be cautious with
                compounded topical versions, as the FDA has raised safety
                concerns and they are not FDA approved.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                Does finasteride affect fertility?
              </h3>
              <p className="text-brown/70 text-sm">
                Some studies report changes in semen parameters in certain men,
                often improving after stopping. If you are trying to conceive,
                discuss it before starting.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                What age should you start finasteride?
              </h3>
              <p className="text-brown/70 text-sm">
                There is no single best age. It is usually considered for adult
                men once male pattern hair loss is clear. Earlier treatment
                often helps you keep more hair. A doctor can confirm your
                diagnosis first.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className="bg-light rounded-xl p-6 border border-taupe/20"
            >
              <h3 className="font-georgia text-lg text-wine mb-2">
                How much does finasteride cost in Malaysia?
              </h3>
              <p className="text-brown/70 text-sm">
                It varies. Local references show about RM94 for some generics,
                while branded options and clinic supplied boxes can be higher.
                Many clinics quote roughly RM100 to RM300 per month depending on
                plan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Page 9 */}
      <section className="py-20 bg-linear-to-r from-wine to-rose text-light">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl mb-6"
          >
            Ready to treat hair loss with a plan that fits real life?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 max-w-2xl mx-auto opacity-90"
          >
            If you are seeing thinning in the crown or mid scalp, do not wait
            until it is obvious in photos. A short medical consult can tell you
            what type of hair loss you have, and whether finasteride makes sense
            for you.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-2">
            <p className="text-xl font-semibold">Nexus Clinic Kuala Lumpur</p>
            <p className="opacity-90">Wisma UOA II, Jalan Pinang, KLCC area</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default FinasterideLanding;

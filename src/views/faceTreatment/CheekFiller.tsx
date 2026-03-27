"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, Award } from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "../../lib/animations";
interface cheekFillerProps {
  locale: string;
}

export default function CheekFiller({ locale }: cheekFillerProps) {
  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-linear-to-br from-cream/50 via-light to-rose/10" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-5xl lg:text-5xl text-brown leading-tight"
              >
                Want higher cheekbones, softer smile lines, and a lifted
                mid-face that still looks like you?
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-taupe font-inter leading-relaxed"
              >
                Cheek filler is one of the quickest ways to restore shape and
                balance in Kuala Lumpur, with minimal downtime.
              </motion.p>

              {/* Trust at a glance */}
              <motion.div
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl border border-taupe/20"
              >
                <h2 className="font-georgia text-2xl text-brown mb-4">
                  Trust at a glance (Nexus Clinic Kuala Lumpur)
                </h2>
                <ul className="space-y-2 font-inter text-brown">
                  <li className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-wine" />
                    <span>Founded in 2001</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-wine" />
                    <span>
                      Located at LG 10, Lower Ground Floor, Wisma UOA II, Jalan
                      Pinang, 50450 Kuala Lumpur
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-wine" />
                    <span>
                      Open Monday to Saturday (9.00am to 6.00pm), closed Sundays
                      and public holidays
                    </span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Nexus Clinic Kuala Lumpur - Premier Aesthetic Clinic"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Quick reality check section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Quick reality check: what ranks on Google, and what most pages
              miss
            </h2>

            <p className="text-brown font-inter">
              When people search "cheek filler Kuala Lumpur" or "cheek
              augmentation KL", they often land on:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-brown font-inter">
              <li>
                Directory-style pages listing clinics and reviews (for example,
                Erufu Care lists "Cheek Augmentation" clinics across KL areas
                like KLCC, Bukit Bintang, Mont Kiara, Bangsar, Mid Valley, and
                more).
              </li>
              <li>
                Clinic service pages with benefits, before-after photos, and
                short FAQs (example: Dr Jane Clinic explains suitability, "12-24
                months" longevity, and basic side effects).
              </li>
              <li>
                Price guide articles giving ballpark costs per syringe and
                estimated totals in Malaysia.
              </li>
            </ul>

            <p className="text-brown font-inter font-bold">
              What's often missing is the stuff you actually worry about:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-brown font-inter">
                <span className="text-wine font-bold text-xl">"</span>
                How many syringes will I need for my face, not someone else's?
                <span className="text-wine font-bold text-xl">"</span>
              </li>
              <li className="flex items-start gap-3 text-brown font-inter">
                <span className="text-wine font-bold text-xl">"</span>
                Will I look puffy or overfilled?
                <span className="text-wine font-bold text-xl">"</span>
              </li>
              <li className="flex items-start gap-3 text-brown font-inter">
                <span className="text-wine font-bold text-xl">"</span>
                What's normal in week one, and when do I stop worrying?
                <span className="text-wine font-bold text-xl">"</span>
              </li>
              <li className="flex items-start gap-3 text-brown font-inter">
                <span className="text-wine font-bold text-xl">"</span>
                What's the safety plan if something feels off?
                <span className="text-wine font-bold text-xl">"</span>
              </li>
            </ul>

            <p className="text-brown font-inter">
              This page is written to answer those questions clearly, in plain
              English, for Kuala Lumpur and Malaysia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What is cheek filler section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                What is cheek filler, really?
              </h2>

              <p className="text-brown font-inter">
                Cheek filler is an injectable treatment used to add structure
                and volume to the mid-face. It can:
              </p>

              <ul className="space-y-2 text-brown font-inter">
                <li>• Lift and shape the cheekbones</li>
                <li>• Improve mid-face flatness</li>
                <li>
                  • Create better balance between cheeks, under-eyes, and smile
                  lines
                </li>
                <li>• Support a softer, less tired look</li>
              </ul>

              <p className="text-brown font-inter">
                Most clinics describe cheek fillers as a way to restore volume
                lost with age or enhance naturally flatter cheeks.
              </p>

              <p className="text-brown font-georgia italic">
                At Nexus Clinic Kuala Lumpur, the goal is not a "new face." It's
                a refreshed version of your own features, with cheek support
                that looks natural in real life and real lighting.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <img
                src="/images/skin/acne-treatment.webp"
                alt="Facial anatomy showing cheek structure and filler placement"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why cheeks change your whole face */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Why cheeks change your whole face (and why people notice)
            </h2>

            <p className="text-brown font-inter">
              Your cheeks are like the "frame" of your face. When the mid-face
              loses support, you may notice:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>A flatter side profile</li>
              <li>Shadowing under the eyes</li>
              <li>Smile lines looking deeper</li>
              <li>A heavier look around the lower face</li>
            </ul>

            <p className="text-brown font-inter">
              Adding support to the cheek area can visually lift the face, even
              if you do not touch other areas.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cheek filler can help if */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Cheek filler can help if you want any of these results
            </h2>

            <p className="text-brown font-inter">
              You might be a good match for cheek filler in KL if you have:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Flat or less defined cheekbones</li>
              <li>A tired look from mid-face volume loss</li>
              <li>Mild sagging in the mid-face</li>
              <li>Under-eye hollowing that looks worse when you smile</li>
              <li>A goal to look fresher without surgery</li>
            </ul>

            <p className="text-brown font-inter">
              Many patients also combine cheek filler with under-eye filler or
              jawline filler for overall balance, depending on facial structure.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Who should avoid */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Who should avoid cheek filler (or delay it)
            </h2>

            <p className="text-brown font-inter">
              You should usually postpone treatment if you are:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Pregnant or breastfeeding</li>
              <li>
                Actively unwell, with skin infection, fever, or inflammation
                near the area
              </li>
              <li>
                Recovering from dental infection or major dental work (timing
                matters, ask your doctor)
              </li>
            </ul>

            <p className="text-brown font-inter">
              A proper consultation matters because cheeks are not a "one-size"
              area. Face shape, skin thickness, and bone support change the
              plan.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cheek filler areas */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Cheek filler areas that can be treated
            </h2>

            <p className="text-brown font-inter">
              Cheek filler is not just one spot. Your doctor may treat:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Cheekbone highlight (upper cheek) for definition</li>
              <li>Mid-cheek support for lift</li>
              <li>
                Anterior cheek (front of the cheek) for soft contour and balance
              </li>
            </ul>

            <p className="text-brown font-inter">
              A good plan avoids placing filler where it will make the face look
              heavy.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How many syringes */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              How many syringes do you need for cheek filler?
            </h2>

            <p className="text-brown font-inter">
              This is one of the biggest questions in Malaysia.
            </p>

            <p className="text-brown font-inter">
              A common pricing guide in Malaysia estimates cheek filler often
              needs 2 to 4 syringes, depending on your goal and your starting
              point.
            </p>

            <p className="text-brown font-inter">
              That does not mean everyone needs 4. Some people look great with a
              subtle amount. Others need more structure for real lifting
              support.
            </p>

            <h3 className="font-georgia text-2xl text-brown">
              A simple way to think about it
            </h3>

            <ul className="space-y-2 text-brown font-inter">
              <li>1-2 syringes total: subtle contour, gentle refresh</li>
              <li>
                2-4 syringes total: more visible lift and structure (common for
                cheeks)
              </li>
            </ul>

            <p className="text-brown font-inter">
              Your best number comes from an in-person assessment, not a chart.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What does cheek filler feel like */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="font-georgia text-4xl text-brown">
              What does cheek filler feel like?
            </h2>
            <p className="text-brown font-inter">
              Most people describe it as pressure and small pinches. Many
              fillers also include lidocaine, and numbing cream is often used to
              keep you comfortable.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Cheek filler procedure: what happens at Nexus Clinic KL
            </h2>

            <ol className="space-y-4 list-decimal pl-6 text-brown font-inter">
              <li>
                Consultation and face assessment - You share what you want. Your
                doctor checks symmetry, structure, and where volume is missing.
              </li>
              <li>
                Mapping and planning - The doctor marks key support points for
                safe, balanced placement.
              </li>
              <li>
                Cleansing and numbing - Comfort first. The plan is to keep
                bruising and swelling low.
              </li>
              <li>
                Injection - The filler is placed carefully to build shape. This
                part is usually quick.
              </li>
              <li>
                Review and aftercare - You see the result right away, then get a
                clear aftercare plan.
              </li>
            </ol>

            <p className="text-brown font-inter">
              Many clinics describe cheek filler results as immediate, with
              final results clearer once swelling settles in a few days.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Downtime and healing */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Downtime and healing: what's normal in the first 14 days
            </h2>

            <p className="text-brown font-inter">
              Most people can return to normal life quickly, but your face may
              go through stages.
            </p>

            <h3 className="font-georgia text-2xl text-brown">Day 1 to Day 3</h3>
            <ul className="space-y-2 text-brown font-inter">
              <li>Mild swelling</li>
              <li>Tenderness when you touch the area</li>
              <li>Possible small bruises</li>
            </ul>

            <h3 className="font-georgia text-2xl text-brown">Day 4 to Day 7</h3>
            <ul className="space-y-2 text-brown font-inter">
              <li>Swelling reduces</li>
              <li>Shape looks more "you"</li>
              <li>Makeup usually sits better again</li>
            </ul>

            <h3 className="font-georgia text-2xl text-brown">Week 2</h3>
            <ul className="space-y-2 text-brown font-inter">
              <li>Most minor swelling and bruising settles</li>
              <li>You can judge the result more accurately</li>
            </ul>

            <p className="text-brown font-inter">
              Directory-style medical pages often describe recovery for cheek
              augmentation as around 1 to 2 weeks.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Aftercare tips */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Aftercare tips (easy and practical)
            </h2>

            <p className="text-brown font-inter">
              For the first 24 to 48 hours:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Avoid heavy workouts</li>
              <li>Avoid alcohol if you bruise easily</li>
              <li>
                Do not press or massage the cheeks unless your doctor tells you
                to
              </li>
              <li>Sleep on your back if possible</li>
              <li>Keep skin clean and gentle</li>
            </ul>

            <p className="text-brown font-inter">
              If you have an important event, book your cheek filler at least 2
              weeks before.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How long does cheek filler last */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h2 className="font-georgia text-4xl text-brown">
              How long does cheek filler last?
            </h2>

            <p className="text-brown font-inter">
              Many clinics state cheek filler commonly lasts 12 to 24 months,
              depending on product choice and your metabolism.
            </p>

            <p className="text-brown font-inter">
              Some people break it down faster, especially if they exercise
              intensely or have a very fast metabolism.
            </p>

            <p className="text-brown font-inter">
              A good approach is maintenance, not overfilling. You can top up
              lightly instead of adding too much at once.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pros and cons */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="font-georgia text-4xl text-brown">
              Pros and cons of cheek filler
            </h2>

            <div>
              <h3 className="font-georgia text-2xl text-brown mb-4">Pros</h3>
              <ul className="space-y-2 text-brown font-inter">
                <li>Immediate improvement in mid-face shape</li>
                <li>Minimal downtime for many people</li>
                <li>Can improve facial balance without surgery</li>
                <li>
                  Can support under-eye and smile line appearance (depending on
                  your anatomy)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-georgia text-2xl text-brown mb-4">Cons</h3>
              <ul className="space-y-2 text-brown font-inter">
                <li>Swelling or bruising can happen</li>
                <li>Results depend heavily on injector skill</li>
                <li>Overfilling is possible if the plan is not conservative</li>
                <li>It is not permanent, so maintenance may be needed</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Side effects and safety */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Side effects and safety: what you should know (without fear)
            </h2>

            <p className="text-brown font-inter">
              Most side effects are mild and short-term.
            </p>

            <p className="text-brown font-inter">
              The FDA lists common risks like bruising, redness, swelling, pain,
              tenderness, itching, and rash.
            </p>

            <p className="text-brown font-inter">
              An evidence-based safety paper also notes that common
              injection-site reactions usually resolve within 1 to 2 weeks.
            </p>

            <h3 className="font-georgia text-2xl text-brown">
              Rare but serious risks (important to understand)
            </h3>

            <p className="text-brown font-inter">
              A major safety review notes rare but more serious events can
              include vascular occlusion, which in severe cases can lead to skin
              injury or even blindness.
            </p>

            <p className="text-brown font-inter">
              These are uncommon, but this is exactly why you should choose a
              medical clinic with trained doctors and clear emergency protocols.
            </p>

            <h3 className="font-georgia text-2xl text-brown">
              When to contact the clinic urgently
            </h3>

            <p className="text-brown font-inter">
              Contact your clinic immediately if you notice:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Severe or worsening pain</li>
              <li>Skin turning very pale, grey, or blotchy</li>
              <li>Rapid swelling that feels wrong</li>
              <li>Changes in vision</li>
            </ul>

            <p className="text-brown font-inter font-bold">
              Do not "wait it out" if something feels seriously off.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cost */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              How much does cheek filler cost in Kuala Lumpur and Malaysia?
            </h2>

            <p className="text-brown font-inter">Cost depends on:</p>

            <ul className="space-y-2 text-brown font-inter">
              <li>The filler type and brand</li>
              <li>How many syringes you need</li>
              <li>The clinic's expertise and location</li>
            </ul>

            <p className="text-brown font-inter">
              A Malaysia-based pricing guide estimates:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Cheek filler per 1ml syringe: RM1,800 to RM3,500</li>
              <li>Typical cheek filler total: 2 to 4 syringes</li>
              <li>Estimated total: RM3,600 to RM14,000</li>
            </ul>

            <p className="text-brown font-inter">
              Use this as a planning range, not a promise. Your face plan
              decides your final cost.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Cheek filler vs other options */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="font-georgia text-4xl text-brown">
              Cheek filler vs other options (how to choose)
            </h2>

            <p className="text-brown font-inter">
              If you are comparing treatments in Kuala Lumpur, here is a clear
              guide:
            </p>

            <div>
              <h3 className="font-georgia text-2xl text-brown">
                Cheek filler vs thread lift
              </h3>
              <p className="text-brown font-inter">
                Filler: adds volume and structure
                <br />
                Thread lift: focuses more on lifting and tightening
                <br />
                Some clinics position thread lift, devices, and fillers as
                options depending on your goal and skin laxity.
              </p>
            </div>

            <div>
              <h3 className="font-georgia text-2xl text-brown">
                Cheek filler vs collagen stimulators (like Sculptra or Radiesse)
              </h3>
              <p className="text-brown font-inter">
                Filler: immediate result
                <br />
                Biostimulators: gradual improvement over weeks, more collagen
                support
                <br />
                Some clinics offer biostimulators as part of facial sculpting
                for longer-term volume improvement.
              </p>
            </div>

            <div>
              <h3 className="font-georgia text-2xl text-brown">
                Cheek filler vs energy-based tightening (Ultherapy, Thermage)
              </h3>
              <p className="text-brown font-inter">
                Filler: replaces volume
                <br />
                Energy devices: tighten skin and stimulate collagen
                <br />
                If your main issue is loose skin rather than volume loss,
                tightening might matter more.
              </p>
            </div>

            <p className="text-brown font-inter">
              Often, the best results come from combining the right tools, not
              forcing one treatment for every concern.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How we keep cheek filler looking natural */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              How we keep cheek filler looking natural (the "no puffy face"
              plan)
            </h2>

            <p className="text-brown font-inter">
              A natural cheek result usually comes from:
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>
                Building support in the right plane, not just adding front
                volume
              </li>
              <li>Matching cheek shape to your jawline and chin</li>
              <li>
                Respecting your natural facial width (important for many Asian
                face shapes)
              </li>
              <li>Using a conservative approach, then reviewing</li>
            </ul>

            <p className="text-brown font-georgia text-2xl">
              The best compliment is: "You look well rested." Not: "You got
              fillers."
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why choose Nexus Clinic */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-brown">
              Why choose Nexus Clinic Kuala Lumpur for cheek filler?
            </h2>

            <p className="text-brown font-inter">
              If you want cheek filler in KL, you want three things: safety,
              balance, and honesty.
            </p>

            <ul className="space-y-2 text-brown font-inter">
              <li>Established clinic: Founded in 2001</li>
              <li>
                Central Kuala Lumpur location: Wisma UOA II, Jalan Pinang, in
                KL's Golden Triangle area
              </li>
              <li>
                Doctor-led care: You are guided through options clearly, so you
                can choose what suits your face and comfort level
              </li>
              <li>
                Personalised planning: Treatment is mapped to your facial
                structure, not a template
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="space-y-8">
            <h2 className="font-georgia text-4xl text-brown">
              Frequently Asked Questions (PAA-style)
            </h2>

            <p className="text-brown font-inter">
              These are the questions people most commonly ask before booking
              cheek filler in Malaysia and Kuala Lumpur.
            </p>

            <div className="space-y-6">
              {[
                {
                  q: "1) How long does cheek filler last?",
                  a: "Many clinics state cheek fillers typically last 12 to 24 months, depending on product and metabolism.",
                },
                {
                  q: "2) How much is cheek filler in Kuala Lumpur?",
                  a: "A common Malaysia price guide estimates RM1,800 to RM3,500 per 1ml, and cheeks often need 2 to 4 syringes.",
                },
                {
                  q: "3) How many syringes do I need for cheek filler?",
                  a: "Cheeks commonly need 2 to 4 syringes, but your face structure and goals decide the real number.",
                },
                {
                  q: "4) Is cheek filler painful?",
                  a: "Most people feel mild discomfort. Numbing cream is commonly used, and many fillers contain lidocaine.",
                },
                {
                  q: "5) When will I see results?",
                  a: "Results are usually immediate, and look more natural once swelling settles over the next few days.",
                },
                {
                  q: "6) What downtime should I expect?",
                  a: "Mild swelling or bruising may occur and usually improves over days. Many sources describe recovery around 1 to 2 weeks for cheek augmentation-type treatments.",
                },
                {
                  q: "7) What are the common side effects?",
                  a: "Common risks include bruising, redness, swelling, pain, tenderness, itching, and rash.",
                },
                {
                  q: "8) Are serious complications possible?",
                  a: "They are rare, but medical safety reviews note serious events can include vascular occlusion and severe outcomes. Choosing trained doctors and a medical clinic matters.",
                },
                {
                  q: "9) Will cheek filler make my face look wider?",
                  a: "It can if filler is placed too far outward or too much is used. A good plan focuses on lift and structure, not sideways bulk.",
                },
                {
                  q: "10) Can cheek filler help my under-eye hollows?",
                  a: "Sometimes, yes. Mid-face support can reduce under-eye shadowing, and some people combine cheek and under-eye filler depending on anatomy.",
                },
                {
                  q: "11) Can cheek filler reduce smile lines?",
                  a: "It can soften them for some people by supporting the mid-face. If lines are deep, you may need a combined plan.",
                },
                {
                  q: "12) Can men do cheek filler?",
                  a: "Yes. The technique usually aims for stronger structure and a more angular contour, not a rounded look.",
                },
                {
                  q: "13) What age is best for cheek filler?",
                  a: "There is no perfect age. Some people start in their 20s for contour, others in their 30s to 50s for volume support.",
                },
                {
                  q: "14) Can cheek fillers be reversed?",
                  a: "Hyaluronic acid fillers can be dissolved with hyaluronidase, which is why many first-time patients feel more comfortable starting with HA.",
                },
                {
                  q: "15) What should I avoid after cheek filler?",
                  a: "Avoid heavy exercise, alcohol (if you bruise easily), and pressing on the area for the first 24 to 48 hours unless advised.",
                },
                {
                  q: "16) Can I fly after cheek filler?",
                  a: "Many people can. If you swell easily, it may be smarter to avoid flying within the first couple of days.",
                },
                {
                  q: "17) How do I avoid looking overfilled?",
                  a: "Choose a clinic that plans conservatively, uses facial mapping, and prefers staged results over 'all at once.'",
                },
                {
                  q: "18) What's better for cheeks: filler, thread lift, or Ultherapy?",
                  a: "It depends. Filler restores volume. Threads lift. Ultherapy tightens. Some clinics offer all as options based on your goals.",
                },
                {
                  q: "19) How soon can I wear makeup?",
                  a: "Often the next day, if injection points are closed and your skin is calm. Follow your doctor's advice.",
                },
                {
                  q: "20) What should I ask during my consultation?",
                  a: "Ask about product type, syringe estimate, safety plan, expected swelling timeline, and what 'natural' means for your face.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border-b border-taupe/20 pb-4"
                >
                  <p className="font-georgia text-brown mb-2">{faq.q}</p>
                  <p className="text-taupe font-inter">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Ready to explore */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-4xl text-light">
              Ready to explore cheek filler in Kuala Lumpur?
            </h2>

            <p className="text-xl text-cream font-inter">
              If you want a cheek filler result that looks fresh, balanced, and
              not obvious, book a consultation at Nexus Clinic Kuala Lumpur.
            </p>

            <p className="text-cream font-inter">
              We are located at Wisma UOA II, Jalan Pinang, and we have been
              caring for aesthetic patients since 2001.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-light text-wine px-12 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-colors mt-8"
            >
              Book Your Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

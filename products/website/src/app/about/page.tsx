import { siteConfig } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">About</h1>

      <div className="space-y-6 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
        <p>
          I am Dr. Julia Hasty, a materials scientist and serial entrepreneur
          with 15+ years turning research into deployed energy and water systems
          worldwide.
        </p>

        <p>
          I earned my PhD in Materials Science and Engineering from Stony Brook
          University, publishing peer-reviewed work on catalytic syngas
          conversion. Early career roles included lead chemist at a 1M
          gallon/year biodiesel plant and FDA-regulated nucleic acid testing at
          the American Red Cross National Testing Lab.
        </p>

        <p>
          As Director of Engineering at ALL Power Labs, I led 15 engineers and
          scaled 150 kW biomass gasification systems to 1,000+ deployments across
          35+ countries. I was Principal Investigator on an NSF grant and led a
          USAID project powering 250 homes in Liberia during the Ebola
          outbreak. I hold three patents on compact gasifier-genset architecture.
        </p>

        <p>
          I won the 2018 Water Abundance XPrize with SkySource, engineering a
          biomass-powered atmospheric water system. Through Corvidae and Resilient
          Markets, I have advised 15+ clean-tech companies, developed microgrids
          in Puerto Rico, co-founded the ACEPR electric cooperatives accelerator,
          and led policy research for the Puerto Rico Energy Bureau. With
          10Power, I published the 2024 Energy Plan for the Alaska Native
          Village of Eklutna.
        </p>

        <p>
          I am targeting roles where rigorous science, domain depth, and
          responsible deployment of powerful technology matter — including AI
          safety and life sciences.
        </p>
      </div>

      <dl className="mt-12 grid gap-4 border-t border-zinc-200 pt-8 text-sm dark:border-zinc-800 sm:grid-cols-2">
        <div>
          <dt className="font-medium text-zinc-500">Location</dt>
          <dd>{siteConfig.location}</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-500">Email</dt>
          <dd>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:underline"
            >
              {siteConfig.email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-500">Education</dt>
          <dd>Ph.D., Materials Science & Engineering, Stony Brook</dd>
        </div>
        <div>
          <dt className="font-medium text-zinc-500">B.S.</dt>
          <dd>Chemistry, Radford University</dd>
        </div>
      </dl>
    </div>
  );
}

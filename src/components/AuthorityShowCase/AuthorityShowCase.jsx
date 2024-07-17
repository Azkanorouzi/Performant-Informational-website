import { useState } from "preact/hooks";

export default function AuthorityShowCase() {
  const [textIndex, setTextIndex] = useState(0);
  return (
    <article class="flex justify-center items-center gap-16 lg:gap-24 flex-col md:flex-row z-50 h-[45rem]  lg:h-[20rem]">
      <div class="flex gap-3 flex-col text-forth border-l-primary font-TekoLight">
        <strong
          class={`text-5xl lg:text-7xl  text-nowrap hover:text-primary  border-l-4 border-transparent lg:pl-5 pl-5 ${
            textIndex === 0
              ? "border-l-primary text-primary lg:-translate-x-10 "
              : ""
          }`}
          style={{ transition: ".3s" }}
          role="button"
          onClick={() => setTextIndex(0)}
        >
          01 COMMITMENT
        </strong>
        <strong
          class={`text-5xl lg:text-7xl text-nowrap  hover:text-primary border-l-4 border-transparent pl-5 ${
            textIndex === 1
              ? "border-l-primary text-primary lg:-translate-x-10"
              : ""
          }`}
          style={{ transition: ".3s" }}
          role="button"
          onClick={() => setTextIndex(1)}
        >
          02 EXPERIENCE
        </strong>
        <strong
          class={`text-5xl lg:text-7xl  hover:text-primary  text-nowrap border-l-4 border-transparent pl-5 ${
            textIndex === 2
              ? "border-l-primary text-primary lg:-translate-x-10"
              : ""
          }`}
          style={{ transition: ".3s" }}
          role="button"
          onClick={() => setTextIndex(2)}
        >
          03 PROBLEM SOLVING
        </strong>
        <strong
          class={`text-5xl lg:text-7xl  text-nowrap  hover:text-primary border-l-4 border-transparent pl-5 ${
            textIndex === 3
              ? "border-l-primary text-primary lg:-translate-x-10"
              : ""
          }`}
          style={{ transition: ".3s" }}
          role="button"
          onClick={() => setTextIndex(3)}
        >
          04 SUPPORT
        </strong>
        <strong
          class={`text-5xl lg:text-7xl  text-nowrap hover:text-primary  border-l-4 border-transparent pl-5 ${
            textIndex === 4
              ? "border-l-primary text-primary lg:-translate-x-10"
              : ""
          }`}
          style={{ transition: ".3s" }}
          role="button"
          onClick={() => setTextIndex(4)}
        >
          05 TRADE PARTNERSHIP
        </strong>
      </div>
      <div class={`  lg:w-96 lg:h-96  flex flex-col gap-4 justify-center `}>
        {textIndex === 0 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl uppercase">Convenant and ensure</strong>
            <p class="mb-2 text-lg font-oswaldLight">
              Commitment consists of two words, covenant and ensure. Our
              professional team is always a guarantor of your quality, capital,
              and reliability with our ethical covenant. We're unwaveringly
              dedicated to honoring our promise to you
            </p>
            <h3 class="text-3xl font-bold uppercase">
              Your Success is Our Priority
            </h3>
            <p class="text-lg mb-2 font-oswaldLight">
              We believe in transparency, open communication, and a
              collaborative approach. Our commitment is not just a word; it's a
              fundamental principle that guides every decision we make.
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 1 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl uppercase">
              {" "}
              Expeirnce is the portrayal of life
            </strong>
            <p class="text-lg font-oswaldLight">
              Fair one sees at it'll deliver you more understanding and growth.
              We believe in fostering an environment where knowledge flourishes,
              and where everyone has the opportunity to learn and grow. Our
              professional team, with a combined 15 years of team experience and
              40 years of individual experience, brings a wealth of knowledge
              and expertise to every project. This depth of experience ensures
              that we can effectively analyze your needs, provide insightful
              solutions, and navigate challenges with confidence.
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 2 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl uppercase">We're Professionals</strong>
            <p class="text-lg font-oswaldLight">
              Our proficient team, drawing on a deep well of scientific and
              practical experience, is dedicated to delivering comprehensive
              solutions tailored to your specific needs. We have a proven track
              record of success across diverse projects spanning the entire
              country, from north to south. Our expertise extends beyond mere
              problem identification. We are committed to working alongside you,
              providing a clear diagnosis of the root causes, exploring a range
              of solution options, and ultimately guiding the implementation
              process for lasting results. Our collaborative approach ensures
              that you are involved every step of the way, building trust and
              confidence in our shared journey towards success.
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 3 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl">The next step of trust is support</strong>
            <p class="text-lg font-oswaldLight">
              We earn your trust not only by providing exceptional services and
              cutting-edge technical solutions but also by offering a
              comprehensive range of parts, machines, and supplies. Our
              commitment extends beyond solving technical challenges to ensuring
              you have access to the highest quality components and equipment.
              Whether you need specific machine parts, complete machinery, or
              essential supplies, we are dedicated to meeting all your needs
              with reliability and excellence.
            </p>
          </div>
        )}
        {/* --------------- */}
        {textIndex === 4 && (
          <div class="flex gap-2 flex-col unBlur text-forth">
            <strong class="text-3xl">We're open for corporation</strong>
            <p class="text-lg font-oswaldLight">
              {" "}
              We believe that true business success hinges on anticipating and
              managing risk. By working together, we can identify potential
              threats, implement preventative measures, and develop
              comprehensive plans for swift and effective mitigation. Our
              commitment to proactive risk management empowers you to focus on
              growth and opportunity, knowing that you have a trusted partner by
              your side.{" "}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

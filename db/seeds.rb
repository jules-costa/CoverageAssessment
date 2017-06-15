# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

category1 = Category.create!(title: "Brokers & Agents")
category2 = Category.create!(title: "Business Leaders")
category3 = Category.create!(title: "Consumers")

Post.create!(
  title: "The End",
  body: "I often think about bringing the end to so many outdated and ludicrous things in our society. Someday my compilation of all things that must end will be complete and published. Toll plazas, NY City yellow cabs, the US postal service, casinos, even the brick and mortar office workplace. All of these and many more must end. But for now, let’s bring the end to the Certificate of Insurance.\n\nThe Certificate of Insurance (cert) has plagued the insurance industry for decades. It’s not worth the paper it’s written on and says so at the top of the cert:\n\nTHIS CERTIFICATE IS ISSUED AS A MATTER OF INFORMATION ONLY AND CONFERS NO RIGHTS UPON THE CERTIFICATE HOLDER. THIS CERTIFICATE DOES NOT AFFIRMATIVELY OR NEGATIVELY AMEND, EXTEND OR ALTER THE COVERAGE AFFORDED BY THE POLICIES BELOW. THIS CERTIFICATE OF INSURANCE DOES NOT CONSTITUTE A CONTRACT BETWEEN THE ISSUING INSURER(S), AUTHORIZED REPRESENTATIVE OR PRODUCER, AND THE CERTIFICATE HOLDER.\n\nIMPORTANT: If the certificate holder is an ADDITIONAL INSURED, the policy(ies) must be endorsed. If SUBROGATION IS WAIVED, subject to the terms and conditions of the policy, certain policies may require an endorsement. A statement on this certificate does not confer rights to the certificate holder in lieu of such endorsement(s).\n\nOriginally intended to be a quick snapshot of commercial insurance coverage, the certificate of insurance (cert) has evolved into an unintended extension of coverage and the root cause of many an error and omissions claim in the insurance industry. Attorneys and risk mangers love certs, giving them more ammunition and targets in the event of a loss and claim. The target is the broker issuing the cert and the broker’s E&O carrier.\n\nInsurance brokers and their strong associations have laid down and acquiesced to the demands of the customer.\n\nBig client or big client’s customer: \“Give me a cert! Include extra language like ‘additional insured’, ‘Waiver of Subrogation’, ‘primary and non-contributory’, and whatever else I want it to say!\”\n\nBroker: \“You’re asking for so much, how about we just give you the policy?\”\n\nBig client: \“No, no, no. I just want the cert and nothing else. Formatted exactly, to the punctuation mark, as my customer has specified. I need the cert to get paid/make deal, etc.\”\n\nWhat is going on here? The cert specifically states that it is NOT the policy and that the certificate holder should not rely on the information contained therein. Worthless. Really. So why do brokers bend over backwards to issue them immediately, why do clients fire brokers if their cert performance falls short, and why does ACORD keep making money off of a document that has no positive value?\n\nThe end of the cert.\n\nMy position is simple: flip the switch today. No more certs. Period. If a party to a contract wants evidence of risk transfer (insurance) and additional insured status, get that endorsed onto the applicable policies. Waiver of Subrogation – same process. Anything else? Same process.\n\nThe client’s attorney or risk manager isn’t sure about how an insurance policy would respond to a claim? Let them earn their keep. Give them a copy of the policy, with the client’s written permission, and let them read it. And when they come to the broker with hypotheticals, here’s the answer every time: \“the policy will respond based on the particular circumstances of the incident in relation to the provisions of the insurance contract\”.\n\nBut what if?????\n\nSorry, no hypotheticals. Lawyers and risk mangers are advised to read and understand the policy language, counsel their clients accordingly, and live with the consequences.\n\nThe criticism insurance brokers will come under based on The End of the cert is what value do they bring to the table? Clients rely on a broker’s expertise in the interpretation of exposures and coverage, market prowess and counsel. Brokers seek the optimal policy terms, conditions and pricing to serve their clients well. In fact, insurance brokers, lawyers and risk managers are on the same side: looking out for the best interest of their client.\n\nAs a broker, I am committed to advocating for my client. Where I can transfer risk to another party contractually, that’s the right move. Where I can help my client waive or limit their Liability, I have served them well. After the claim, we’ll all find out how well my client and I and opposing counsel and the risk manager have done. Most cases are difficult to reconcile. Let’s bring an end to the Certificate of insurance and get that meaningless piece of paper out of the way. Focus on the bottom line: the insurance contract.\n\nSorry ACORD, but The End of the cert is near.",
  date: "August 2014",
  category_id: category1.id
)

Post.create!(
  title: "The Basics",
  body: "Many brokers have never experienced the opportunities and the challenges that a hard market presents.  Temptations to take shortcuts and to take advantage of clients and carriers will become evident.  How brokers respond to these temptations will not only differentiate them from the competition, but will also contribute to the longevity they have in the insurance industry.

This article is about making choices:  long-term, strategic, ethical choices.  Brokers will lose business to the opportunists that take shortcuts and take the middle or lower road.  I encourage you to take the high road.  Every transaction, every placement, every renewal, every proposal, every conversation.  Every one.  No exceptions.

Books have been written about best practices in the insurance industry.  Part of most State continuing education requirements now include 2 hours of Ethics.  Doing the right thing, always, with clients as our sole focus, is easier said than done.  Here are 3 key principles that brokers can choose to follow:

Transparency (aka the truth, the whole truth, and nothing but the truth

As brokers compete for business, coverage and price are variables that determine who wins and who loses.  Coverage must be detailed and must address the client’s exposures and expectations.  “Comparable” coverage needs to be just that – equal to or better than.  As professional brokers, we are responsible for negotiating the optimal terms and condition with carries, and clearly explaining the coverage and how it attends to the client’s exposures.  Take the time to walk through the proposal and explain the applicability of the coverage.  Highlight the exclusions, limitations, deductibles and retentions.  This explanation needs to be thorough at proposal and the client needs to sign off an acknowledgment.  For their benefit and yours. Transparency regarding coverage at the onset eliminates issues at the time of claim.

Cost transparency is equally important.  Reveal to the client the results of your due diligence in the market.  Summarize offers of coverage by line of insurance from each carrier approached.  Explain declinations clearly.  And, yes, reveal commissions.  Brokers are entitled to compensation for the work in placing and administering the insurance program.  If the client insists on a Fee Based structure, be fair to yourself.  Assess the resources required to properly administer the client’s program and price your services accordingly.  Competing brokers may underestimate the cost of service and underprice you.  So be it.  Win business on price, lose it on price.

 Excel at the Basics

Insurance professionals offer a specialized knowledge in risk management and risk transfer.  The objectives are to provide clients with comparatively intangible benefits:  a sense of security, a safety net when accidents happen, asset protection, lifestyle protection, and perpetuation.  The ultimate insurance deliverable is at the time of claim.  How good the insurance product is can only be evaluated on claim performance:  How much did I get?  How fast and painless was the process?

Without the claims process, clients have little tangible evidence of value.  It is therefore essential that brokers excel at the basics:

Responsive – every client inquiry needs very prompt response.  Clients reach out with requests for coverage clarifications, changes in exposures, billing questions.  When a client emails or calls the broker, the matter is important to them.  Rapid responses demonstrate a sincere concern for the client.  “If it’s important to you, it’s important to me.”  Pretty basic.
Relationship – Communicating with clients solidifies the Trusted Advisor relationship.  Connect with clients proactively throughout the year, not just at the 11th hour before renewal.  Add value by providing the client with current information about their business, the insurance market, strategies to reduce risk, interesting claims examples.  For larger clients, deliver Stewardship Reports mid-term.  As with any relationship, work at staying connected.  Very basic.
Deliverables – Clients get lots of information from insurance brokers.  Proposals, binders, policies, ID cards, Certificates of Insurance, Schedules of Insurance, Statements of Value, invoices, endorsements and audits.  Every deliverable reinforces the client perception of the broker, positive or negative.  Deliverables that are always accurate, well-formatted, professionally constructed, and on time or early are the basic keys to client retention.  Instill pride in the Agency personnel at every level to always deliver the highest quality to the client.
Superior Work Product

The “customer service” measure has been diluted in most industries and clients have their own unique criteria to define “good service”.  When brokers establish a service model and processing standards, it’s a great start.  (If your agency doesn’t have written service standards, stop reading this blog and start developing them.  Meeting client service expectations cannot be measured or controlled without standards).

The norms you establish may satisfy you, but may not meet the client’s expectations.  If brokers try to squeeze clients into the agency service model, retention is jeopardized.  When a client has specific service needs, or has been frustrated by the lack of “service” from the incumbent broker, this is an opportunity to earn and retain a long-term client.  Listen to the client.  Not just the CEO/CFO/Controller, but to the client representatives that interact with Agency personnel.  Where has service fallen short in the past?  What’s most important to them?  How can we work together to make the process smoother, better, more efficient, more productive, less stressful?  When you gain this valuable information, customize the Agency service standards to properly address the client’s expectations.

A healthy dialogue will leave you in partnership with the client.  Some clients may try to go overboard and dictate service expectations that cannot be realistically met.  “I want every Certificate of Insurance issued in 5 minutes” is unrealistic.  “We will commit to all Certificates of Insurance issued within 24 hours of request and can accommodate urgent requests within 1 hour” should be an acceptable, agreed upon standard that broker and client can live with.

Once client expectations that define “good service” are established and agreed upon, brokers must work toward exceeding those expectations.  Surprise the client with outward signs that you are their trusted advisor, not just an insurance vendor.

2012 will present new challenges for brokers and clients.  Some will ride the wave of change and make 2012 a strong 12 months of growth and retention.  Your results will be in large part determined by how solid a foundation you operate from.  Transparency, excelling at the basics and providing a superior work product to clients will position you for a great 2012 and beyond.  Happy New Year.

",
  date: "January 2012",
  category_id: category1.id
)

Post.create!(
  title: "Case Study – Hired/Non-Owned Liability",
  body: "We are so focused on the cost of auto insurance, a little endorsement tends to be overlooked.  Here’s a coverage you MUST include on every Commercial Auto policy you place – Hired & Non-Owned Auto Liability.

A critical byproduct of the Coverage Assessment is identifying and correcting or accepting coverage gaps.  While every potential claim scenario can never be evaluated, glaring coverage gaps are easily detected.  The gaps may occur within a particular policy through contract exclusions, limitations and definitions.  The gaps may result from believing that coverage is afforded by one or more policies in the portfolio and learning that none of the policies adequately address the exposure.

A simple example is Automobile Liability, more specifically, a bodily injury that results from an auto accident.  John Driver is an Outside Salesperson and operates his owned personal vehicle to visit client locations.  John Driver is an employee of The Metal Store, Inc., and a metal goods wholesale distributor.

Metal Store has a General Liability policy and Commercial Auto policy in force.  The General Liability includes Premises Liability for their location and Products Liability.  The Commercial auto policy has a fleet of 10 trucks schedules (listed or included).  Neither policy includes a provision for “Hired/Non-Owned Auto liability”.

Hired auto liability extends bodily injury and property damage coverage to vehicles that are rented or leased in the conduct of business.  Non-owned auto liability extends coverage to vehicles that are non-owned by the Named Insured but are used in the conduct of business.  John’s car qualifies under this section of coverage when his personally owned vehicle is being used to visit clients of The Metal Store.

John hits a pedestrian in the parking lot of one of his clients.  What insurance policy responds to the bodily injury claim?

Primary coverage is under John’s Personal Auto policy.  A few concerns:  what limit of coverage does John have?  In New Jersey, statutory coverage is comparatively low at $15,000 per person/$30,000 per accident/$5,000 property damage.  How does John’s insurance company think John uses the car?  If the car is rated as “pleasure use” and John has been paying lower premiums based on this classification, there might be a coverage problem.

A little perspective:  if you have a small fender bender and the total claim is comparatively insignificant, most carriers will just process it through and settle the claim.  A severe claim?  Not so fast.  When an auto incident results in a significant bodily injury (BI) claim, a pedestrian death for extreme example, you can be sure that the insurance carrier will filter though the insurance contract, initial and renewal applications, and virtually every other piece of information and documentation relevant to the coverage, policy and claim.

Back to John’s accident.  It’s a bad one.  John operated the car while talking on a cell and this distraction contributed to the accident.  The bodily injuries to the pedestrian mother and small child are significant and permanent.

John’s personal auto carrier learns that John put 15,000 miles on his car last year and claims a tax deduction on his tax return as a business expense.  John uses his vehicle 80% of the time for business as a salesperson for The Metal Store.  John’s personal insurance carrier denies covered based on a material misrepresentation at the time of application.  John was paying a lower “pleasure use” premium for several years when he should have been paying a much higher premium based on the “business use” of his car.  This is deemed an increased exposure.  The Personal Auto policy result:  no coverage.  The insurance company rescinds coverage back to inception, returns all premiums to John and walks away.  A rescission is like the policy never existed.

John has a personal umbrella for $1,000,000.  Sorry.  By definition the umbrella only kicks in after the underlying coverage limit is exhausted.  No underlying coverage, no umbrella.

Next stop on the claim, John’s client.  The incident occurred in their parking lot and notice is given to the General Liability (Premises) carrier.  The GL result:  no coverage.  Auto liability is specifically excluded.  There may be an argument that the client’s parking lot was not maintained or in some way contributed to the accident, but it’s a long shot.

On to The Metal Store.  John was there on business at The Metal Store’s direction.  Based on this sample case – no coverage.  Non-owned auto liability would have been the key coverage to respond to this claim.

What now?  Desperate for coverage and fed up with insurance companies, John sues his Personal Insurance Broker.  How dare they rescind coverage.   John doesn’t understand insurance and admittedly told his broker “get me the lowest price”.  The broker never asked about the car’s usage.

The Metal Store CEO and CFO don’t understand insurance coverage, that’s why they engage a broker.  They bought a Commercial Auto policy.  John’s car was being used on a client business call.  The broker never recommended or discussed Hired/Non-Owned auto liability. The Metal Store Inc sues the Commercial insurance broker for not offering the right coverage. Time to put your E&O carrier on notice.



Hired/Non-owned auto liability – always include it in your quotes and get a documented sign-off if the client for some ridiculous reason rejects the coverage.",
  date: "December 2011",
  category_id: category1.id
)


Post.create!(
  title: "Broker Ploys - Part I",
  body: "Who do you want on your side?  Choosing your insurance representative is an important step.  Your objective is to find a Trusted Advisor in the same manner you would engage an attorney or CPA.  Your business depends on professional, timely and intelligent counsel.  If you are working through an internal Risk Manager or paid Consultant, broker ploys may be minimized, mostly because a third party is paying close attention.  Even with an insurance consultant engaged, however, shenanigans can still take place, perhaps even orchestrated by the independent consultant.  Here are the first 3 Broker Ploys to be on the lookout for:

Timing.  The CFO does not want to continually focus on insurance. It’s an expense that simply needs to be controlled and reduced.   The ultimate importance and value of insurance is only evident at the time of claim.  Brokers understand this mindset.  As a result, expect “Concurrent Policies” as a strategy.  This is convenient for the broker and, in truth, for the client.  It re-organizes all of the effective and expiration dates to a common date.  While aiding the client administratively, this also locks in the broker to one focus date instead of multiple dates when the competition could infiltrate the relationship.
Ex-Date.  Also known as the expiration date of the policy, ex-dates are gold nuggets gathered by prospecting brokers.  By knowing the ex-date, brokers can time their approach to a prospect more confidently.  The truth is that the ex-date is comparatively meaningless.  Yes, it’s the policy anniversary when coverage must be renewed, but brokers organize their lives around the ex-date.  Clients feel the love and attention more feverishly beginning 60-90 days prior to the ex-date.  Brokers are traditionally absent the other 9-10 months.
Last minute.  More timing issues.  Clients consistently tell me they detest the “last-minute, no-notice, shove it down my throat, no options and force me to renew because I can’t afford a lapse in coverage and I have no time to look for options” approach.  Yet, brokers know that a few delays and bumps in the road can be positioned and conveyed to the client to make the last-minute renewal seem justified.  You might hear “My underwriter had questions, you didn’t get the updated information to me quickly enough, my assistant was on vacation…”  For lazy brokers, this is the “close”.  Last minute, no choices, I’m sorry about the stress, won’t happen again.  And next renewal, same story.  Eventually, and typically when a premium increase is part of the renewal, this strategy explodes and the client goes on a personal mission to replace the broker.  But, brokers can buy a few years worth of renewals with this tactic.
Look for more broker ploys in 2012.  Email me your broker ploy experiences and I might feature it in an upcoming article.

",
  date: "November 2011",
  category_id: category2.id
)

Post.create!(
  title: "2015 Resolutions",
  body: "Are your 2015 resolutions a distant memory?  New Year’s resolutions foster the temptation to find new ways of being more productive, healthier, improving relationships and quality of life advancement.  For years, I succumbed to the temptation of making resolutions and experienced some slight, short-lived improvements. Those little accomplishments convinced me that the big “aha” moment was attainable.  Just keep on searching. Taking my career to all-time heights has been a constant theme. How can I reach new levels of earnings, record numbers in new business and client retention, 100% employee loyalty and productivity?
     I was convinced 25 years ago that the insurance business was a unique career that offered the opportunity to accomplish so much. I still believe that’s true. An insurance career is still one of the best kept career secrets for limitless financial earnings, constant learning, innovation, and most importantly, fulfilling promises to clients in their time of need.  After 25 years, I still get personal satisfaction from speaking to clients and educating them on risk management decisions and insurance choices. I still get fulfillment from contributing to the success, growth and perpetuation of my commercial clients.  I still feel the impact of helping a non-profit focus their energies on their mission by supporting their insurance programs.

     Insurance brokers work hard for the money. Often earnings are commission-only based. It takes time, persistence and discipline to build and retain a profitable book of business. At 55, with a solid clientele, it takes even more discipline to continue balancing client service and retention with new client acquisition. Exceptional insurance brokers draw from their experiences, continue refining their interpersonal and organization skills, and never stop learning. Here are three “aha” moments that have stared me in the face repeatedly and have made a huge long-term impact on my career:

 Walk, don’t run

      Long-term growth and success at anything requires persistent and consistent action. Constant learning, attention to detail, clear, concise and thorough communications. You’re running if you skim through an insurance policy rather than read and understand all of its provisions. Reading a policy is a tedious process that the vast majority of insureds do not perform at all – until after the loss.  The insurance policy is a contract and clients should expect and demand that insurance professionals earn their keep by understanding the provisions and explaining them. We always tell clients to Read the Policy. For insurance brokers, walk, don’t run. No short cuts. Read, understand and explain the policy you are selling.

     You’re also running if your employee, underwriter and client communications are text-message style only. The only result from a quick-kill communication approach is surface level relationships. For employees, don’t be shocked when they move on for better opportunities if you haven’t detailed their career path and set the example for the work ethic and productivity necessary to succeed. For underwriters, don’t be resentful when you get turned down for that accommodation for a new client or premium relief on a renewal. If your submissions haven’t been complete and you haven’t developed the working rapport to earn the relationship, you don’t deserve the exception. For clients, don’t be surprised when they non-renew if you haven’t provided value-added counsel, frequent, meaningful contact, and a trusted advisor relationship. If the only time the client hears from you is right before renewal, the insurance program has been commoditized and you have coverted the client to a price buyer. Don’t run to the next prospect until you have walked to the existing client’s office, asked the right questions, provided sound counsel, and showed them you are an important part of their business. When the client decides to leave you, don’t ask “what did I do wrong?” Consider what you didn’t do right enough.

Walk the walk

    It’s easy to be critical about someone else’s style, approach, appearance and decisions. Sharing criticisms about others with co-workers or family and friends fuels the process. Ultimately, we tend to spend more time focused on others than on ourselves. Who did what and how or to whom is easy to share and an interesting social dynamic. Reality TV like Survivor and the Bachelorette help us keep the attention focused on others. For those who wish to set the standard, lead by example and take risk:  walk the walk. If you find yourself spending more time and energy on self-improvement, productivity, personal and professional relationships and self-awareness, you are walking the walk and leaving the talk to others.

     Walking the walk also means setting the bar high for productivity, attention to detail, organization, and time management. Set the bar high, clearly communicate expectations of yourself and others, and align yourself with like-minded people who also walk the walk.

 Walk with your head held high

     Do what you say you will do, when you say you will do it. No exceptions and no surprises. Amazingly, doing what’s right for clients and employees requires an annual 5-hour refresher in Business Ethics each year to maintain your Insurance license. In any profession, expect to stand out from the crowd and thrive long-term by simply conducting business and personal relationships professionally and ethically every time and all of the time – even when no one is looking.

     Please share your “aha” moments on www.coverageassessment.com so others can benefit from your experience. ",
  date: "March 2015",
  category_id: category2.id
)

Post.create!(
  title: "Broker Ploys - Part II",
  body: "Blocking the Market

Brokers will deny this ploy.  It’s real and it happens constantly. Carriers hate it.  Brokers use “blocking the market” as a time-consuming and effective way to frustrate the competition and force the client into submission.  Of all of the ploys, clients understand this one the very least.  Clients sometimes believe that by putting brokers in competition, the result will be the most favorable and profitable possible. Sometimes clients talk about comparable coverage and apples-to-apples.  But we are not fooled.  Most times, when a client places a broker in competition, it’s about price.  “But, Mr. Client, I can’t do the best job for you if I can’t work with my carrier/underwriter/market.  And my competitor has “blocked” the market.”  What does the client say?  “I want you to give me your best proposal.  There are hundreds of insurance companies.  Go find one that my current broker hasn’t approached.”  “But, Mr. Client,  do you realize that the terms, conditions and pricing can be different from Carrier XYZ based on my submission versus my competitor’s?”  The debate can go on forever.  Bottom line:  either decide the broker is right for your company for value-added reasons, or move on.  If you allow the incumbent broker to block the market, there’s really no competition at all.

The BOR game

Naming the broker the Broker of Record effectively awards them your business.  Many times, granting a BOR authorization is justified and the right move.  When the client fairly compares broker capabilities, service expectations and results, and valued-added offerings, there might be solid justification to simply “BOR” the policies to another broker and give them the opportunity to perform to their promises.  Especially if there is dissatisfaction or a loss confidence in the incumbent broker.  This is the client’s right and prerogative.  But beware.  Too many times I have heard the client say “this other broker says he can save me money, give me a better deal, slash my costs, do great things and that the only way he can work on my account is with this letter I had to sign.”  Shame on the broker for misleading the client and shame on the client being so naïve.  (And if this were my client, shame on me for believing that he would never even consider another broker based on our relationship and the exceptional service I have delivered for so many years).

“I have the juice”

This one kills me.  This is the ambulance chasing broker who is also lazy.  Rather than taking the time to dig deep, identify and understand the client’s exposures, perform a complete coverage and risk assessment and propose a strategy to reduce the client’s Total Cost of Risk, what does this broker do?  “Oh, your insurance is with Carrier XYZ?  Our agency is the largest/most profitable broker for them.  I know the President personally, and I just went to the Yankee game with the lead underwriter, yada yada yada.  Give me a BOR and I’ll make a call for you.  I have the juice that your current broker doesn’t.”  Don’t believe it.  Focus on coverage, and terms and rate, not on the supposed juice.

",
  date: "December 2011",
  category_id: category2.id
)

Post.create!(
  title: "Vital Statistics",
  body: "Keeping your vital information safe has become more important than ever in this age of data security and privacy infringement. Some vital info is automatic for people to remember: date of birth, social security number, height and weight. For businesses, a vital statistic that all too few principals and CFOs know is the Experience Rating Modification Factor, more commonly referred to as the EMR or the “mod”.

  For most businesses, the cost of employees is the largest continuing expense. In addition to salaries, benefits, payroll taxes, and the cost of hiring, firing and training, employee expense includes Worker’s Compensation coverage. Workers Comp is statutory/mandatory insurance in most States. Rates and benefits vary by State and by classification of job duties. The mod adjusts the overall cost of worker’s Comp based on each company’s claims experience.

  The basics about the mod

  Very simply, new businesses begin fresh with a 1.0 mod. Each year, the mod is calculated by comparing the Workers Comp premiums paid by the business against the incurred losses paid by the insurance company for injured employees. The “incurred losses” includes medical payments, indemnity payments to the employee for lost wages, insurance carrier expenses for adjusting and investigating the claims, and loss reserves.

  Reserves are established by the insurance carrier for open claims and reflect the best projected estimate of the total loss for an injury.

  This comparison is captured on a rolling 3-year basis. Essentially, when premiums paid exceed incurred losses, the mod goes down below 1.0. If losses are higher than premium paid, the mod goes up above 1.0.

  The mod therefore separates one company’s profitability from another, rewarding good experience and penalizing poor experience. Beyond the mod, insurance carriers have some flexibility (based on their policy filings in each State) to apply additional premium debits, credits, and discounts. The mod often impacts customers, making the attractive ones eligible for credits or dividends. A high mod can add insult to injury by piling on debits.

  The mod can also impact the balance of your business insurance portfolio. Got a .75 mod? Carriers will tend to compete for your complete portfolio. Got a 1.5 mod? The insurance road ahead is long and expensive.

  What’s your mod?

  What’s your company’s mod? How has the mod trended over the past 5 years? If you don’t have the answer on the tip of your tongue, you are missing a vital statistic. The mod is an indicator that will drive several decisions including risk management practices, insurance carrier selection, HR policies and procedures, employee training and retention, insurance broker selection and expense budgeting.

  If you want your company’s current Experience Rating Modification Factor, email me at fcosta@coverageassessment.com and I’ll send it to you at no cost.",
  date: "August 2014",
  category_id: category2.id
)

Post.create!(
  title: "What's Your House Worth?",
  body: "Your dwelling is often the largest investment and ongoing expense.  Protecting your investment in the home is a primary objective and requires Coverage Assessment.

Let’s start with a quick quiz:  The correct insurance limit for your dwelling is:

A)     whatever my bank/lender requires

B)    the cost to replace the structure with like kind and quality materials

C)     the amount I want to receive if I have a total loss

D)    as little as possible to keep my premium low

While all of the choices have some merit, the key to proper valuation and coverage on your property is answer B.

Clients commonly misunderstand property valuation.  Here are some very typical client misconceptions and their clarifications:

“You want me to pay for $500,000 of insurance coverage on my dwelling but I couldn’t sell it for $250,000″

This is the most common debate because homeowners translate “what’s my house worth?” with market value.  Insurance contracts are only interested in the cost of construction to repair/restore/rebuild.

We can insure the building in a variety of ways.  The most common, Replacement Cost, will repair or replace damage from a covered loss with like kind and quality materials, up to the limit of insurance.  The calculation of the coverage limit is based on the building’s:

—     Construction (Frame, Masonry, Non-Combustible, Fire Resistive)

—     Occupancy (apartment, condo, single-family, multi-family)

—     Protection (protection class is established based on distance to a fire station/hydrant)

—     Exposure (square footage)

—     Location/territory

—     Age, amenities, special features

Insurance carriers use Replacement Cost Estimators that calculate the limit of insurance based on these parameters and amenities in the home.  It is essential that you take time to work through a detailed estimator to arrive at the most accurate Replacement Cost for your home.

“I don’t want to pay for $500,000 in coverage for my building. I’ll never have a total loss. This is a brick/stone/steel building and won’t burn to the ground.”

Property policies can include a Co-Insurance Clause.  80% or 90% co-insurance are typical.  Here’s the deal:  you insure the building to value – we’ll cover the loss at replacement cost.  You insure less than the value (and pay premium based on the lower limit of insurance) – we’ll impose a co-insurance penalty and only pay 80% or 90% of the actual loss.

Underinsuring the dwelling is the most common cause of homeowner dissatisfaction after a loss.  I have repeatedly seen underinsured dwellings in assessing property policies, simply because the coverage limit renews as expiring year after year.  Take a look a your current policy and you might be shocked at how low the Dwelling limit really is.

“I don’t want to pay for $500,000 in coverage for my building.  If this thing burns down, I wouldn’t replace it.”

Alternative coverage is available, though much less common.  Discuss a Functional Replacement Cost option or Actual Cash Value (ACV) option with your broker.  ACV is considered a “last resort” coverage as it only pays based on the depreciated value of the building.

“What’s the most I can insure my building for?”

While rare, this customer question is a bit scary.  It usually indicates that the home has some special features or is highly leveraged with a lender.  Time to have a deeper conversation with your broker.



Assess your homeowner’s insurance annually, especially if there have been major changes or renovations.  Having the proper limit of insurance is your first and most important decision on any property policy.  Look for my next blog when we’ll go inside the home and figure out how much your stuff is worth.

",
  date: "December 2011",
  category_id: category3.id
)
Post.create!(
  title: "Misconceptions About Insurance",
  body: "Historically, the insurance industry has done a comparatively poor job in promoting the benefits and value of insurance policies and the professionals that broker coverage.  Consumers understandably treat the insurance purchase with the same mindset and process as other more traditional expenses.  Many consumers fall into the trap of viewing insurance from a biased perspective before the transaction begins.  Here are some reasons why:

1 – No return on investment – consumers, especially those that have never experienced a significant claim, wonder why they pay and pay and pay insurance premiums and never get a return on their investments.  Ironically, should an objective to paying high monthly health insurance premiums to get sick enough and rack up hospital, doctor and prescription bills?  The fact is that insurance is an expense, not an investment.  Sometimes universal or whole life insurance may have the dual objective of investment and returns, but this type of policy is the exception.  All other insurance policies are designed to transfer risk to the insurance carrier for a premium.  Consumers will hopefully never need the carrier to step in because that means they had a loss.

2 – Price – when you shop for most commodities, price comparison is natural.  The best deal on a new car, lease, refrigerator, airline ticket, hotel…everything.  We brag about how adeptly we found the best deal.  Cheaper is better and to be celebrated.  With all commodities, we make decisions on features and style and manufacturer.  Perhaps we compromise and forego the alloy wheels, sunroof and heated seats.  But the savings might be worth the compromise.  Insurance coverage is not a commodity.  Decisions on insurance company, coverage limits, deductibles and “features” are still required, but the value of these compromises is not measurable until it’s too late – after the claim.  Look for the best terms and conditions to address your exposures.  Be honest about your risk tolerance (if a claim were to occur, what deductible could you handle?) and work with your broker to obtain the appropriate rate.

3 – All insurance is the same – not so.  Insurance carriers file policy forms in the States where they are authorized to do business.  There are many industry standards (ISO), but each insurance policy can be and should be tailored to your particular exposures and insurance requirements.  Insurance companies use limitations, exclusions and endorsements to customize the standard policy form.

4 – I’ll never have a claim.  Insurance coverage provides a transfer of risk to an insurance company in the event of a “sudden and accidental” loss.  While you can and should take steps to avoid a loss or mitigate a loss, we are all at risk.  Accidents do happen despite our diligence.  Underwriters review Loss History (typically for the past 5 years) as one consideration in rating coverage.  Of course, a client with frequent losses is generally considered a higher risk.  The frequency of claims points to potential shortcomings in loss prevention.  The best example of “I’ll never have a claim” is the invincible 20-25 year-old, in good health, exercising, feeling great, who does not need Health Insurance.

As you assess your next policy, balance the cost of coverage against the benefits provided if you sustain a loss.  You’ll see the value of the coverage in a different light.

",
  date: "December 2011",
  category_id: category3.id
)

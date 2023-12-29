import { BannersIcon, CarouselIcon, EmailsIcon, InboxIcon, KioskIcon, LandingPages, WidgetIcon } from "@/svg";

export const LETS_TALK = "let's talk";
export const ENGAGE_YOUR_CUSTOMERS = 'Engage your customers & boost sales with face-to-face video consultations. Offer demos, customer support, generate leads and close deals — all in the moment or conveniently scheduled by your users.'
export const DISCOVER_TEXT = 'Discover the most customizable Live Video Sales Solution on the planet.'

export const siteTabAnimateVariants = {
  initial: { x: 150, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -150, opacity: 0 }
};

export const HEADER_LINKS = [
  {
    id: 2,
    title: "how it works",
    dat: "hero",
    hasSection: true
  },
  {
    id: 3,
    title: "solutions",
    dat: "siteSolutions",
    hasSection: true
  },
  // {
  //   id: 4,
  //   title: "pricing",
  //   dat: "pricePlan",
  //   hasSection: true
  // }
];

export const VIDEO_ESSENTIALS = [
  {
    id: 21,
    value: '20X',
    textFirst: 'increase',
    textSecond: 'in ROI',
    gradient: 'circle-one'
  },

  {
    id: 22,
    value: '302%',
    textFirst: 'conversion',
    textSecond: 'increase',
    gradient: 'circle-two'
  },

  {
    id: 23,
    value: '4X',
    textFirst: 'increase in user',
    textSecond: 'session duration',
    gradient: 'circle-three'
  }
];

export const PRICE_PLANS = [
  {
    planId: 31,
    planTitle: 'Starter.',
    planPrice: '$10/mo',
    planService: '3 Operator seats',
    planAnimate: 'fade-right'
  },

  {
    planId: 32,
    planTitle: 'Pro.',
    planPrice: '$20/mo',
    planService: '10 Operator seats',
    planAnimate: 'fade-up'
  },

  {
    planId: 33,
    planTitle: 'Enterprise.',
    planPrice: '$40/mo',
    planService: '20 Operator seats',
    planAnimate: 'fade-left'
  },
];

export const STEPS_APPROACH_LIST = [
  {
    id: 'engage',
    title: 'Engage.',
    description: "Operator’s content management system seamlessly integrates engaging video experiences throughout the customer journey, captivating and engaging customers at every stage in the funnel.",
    videoUrl: 'https://res.cloudinary.com/dseydpdua/video/upload/v1695301941/operator-landing/videos/operator_site_v1_vid_01_engage_v2_zdq9cw.mp4'
  },

  {
    id: 'clientTelling',
    title: 'Clienteling.',
    description: 'When presented the option to speak with a real person, customers are more than 2x likely to provide their email and phone number over other generic sales / marketing forms.',
    videoUrl: 'https://res.cloudinary.com/dseydpdua/video/upload/v1695301965/operator-landing/videos/operator_site_v1_vid_02_clienteling_v3_dazwjz.mp4'
  },

  {
    id: 'liveStreamSales',
    title: 'Live Stream Sales.',
    description: 'Operator seamlessly guides users towards personalized live calls with knowledgeable sales members, fostering deeper connections and enhancing the customer experience.',
    videoUrl: 'https://res.cloudinary.com/dseydpdua/video/upload/v1695301965/operator-landing/videos/operator_site_v1_vid_02_clienteling_v3_dazwjz.mp4'
  },

  {
    id: 'callAnalytics',
    title: 'Call Analytics.',
    description: 'Our Call History features real-time conversation insights to improve customer experience and agent productivity. Leveraging advanced AI, valuable intelligence such as customer and agent sentiment, interruptions, and talk time provide deep insight into your sales.',
    videoUrl: 'https://res.cloudinary.com/dseydpdua/video/upload/v1695301985/operator-landing/videos/operator_site_v1_vid_04_analytics_v3_lzbnzf.mp4'
  }
];

export const TABS_ONSITE_LIST = [
  {
    id: 'widgets', status: 'onsite', title: 'Widgets.', Icon: <WidgetIcon />, 
    imageUrlDesktop: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301787/operator-landing/large/widgets_tw0tnm.png', 
    imageUrl: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301689/operator-landing/small/widgets_qztwt1.png', tabIndex: 0,
    textFirst: 'Offer customers the opportunity to schedule an appointment across your entire site using the site widget.',
    textSecond: 'Leverage "hook videos" to engage your customers with a preview of what to expect when contacting a salesperson.'
  },

  {
    id: 'carousels', status: 'onsite', title: 'Carousels.', Icon: <CarouselIcon />, imageUrlDesktop: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301785/operator-landing/large/carousels_hw4e6j.png', 
    imageUrl: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301688/operator-landing/small/carousels_xah4si.png', tabIndex: 1,
    textFirst: 'Select from a variety of carousel formats supporting both landscape and 9:16 video to seamlessly embed on your store.',
    textSecond: 'Configure custom rules to determine how often a customer is presented call scheduling options when watching video content.'
  },

  {
    id: 'banners', status: 'onsite', title: 'Banners.', Icon: <BannersIcon />, imageUrlDesktop: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301785/operator-landing/large/banners_w8cqwz.png', 
    imageUrl: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301689/operator-landing/small/banners_wawbs6.png', 
    tabIndex: 2,
    textFirst: "When larger format video content isn't necessary, select from a variety of banners, buttons or pop-ups to engage your customers",
    textSecond: 'Each banner can be configured independently to ensure your pitch matches the subject of your content.'
  },

  {
    id: 'landingPages', status: 'onsite', title: 'Landing Pages.', Icon: <LandingPages />, imageUrlDesktop: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301785/operator-landing/large/landingPages_yzlffi.png', 
    imageUrl: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301689/operator-landing/small/landingPages_sc9cp8.png', tabIndex: 3,
    textFirst: 'Leverage concise APIs within Operator to email/SMS your customers based on their actions and guide them to specific landing pages with customized video content.',
    textSecond: 'Whether pre-sale or post, reach out to your customers by name with a personalized message and as always, another chance to speak with a representative of your business.',
  },

  {
    id: 'inbox', status: 'offsite', title: 'SMS + Email', Icon: <InboxIcon />, imageUrlDesktop: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301786/operator-landing/large/sms_z7ogfa.png', 
    imageUrl: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301689/operator-landing/small/inbox_j9vmjx.png',
    textFirst: "Operator isn't done once a customer has browsed away from your site. Integrate with events from your other tools such as marketing and fulfillment to trigger personalized reach-outs.", tabIndex: 4,
    textSecond: 'Re-engage customers via these offsite channels to reconnect them with knowledgeable representatives of your brand.',
  },

  // {
  //   id: 'emails', title: 'Email.', Icon: <EmailsIcon />, imageUrlDesktop: '/onsite/email-image.png', imageUrl: '/small/email.png',
  //   textFirst: 'Engage visitors with an interactive video experience that sits on the side of your site.', tabIndex: 5,
  //   textSecond: 'Prompt users to schedule a call at any time during user interaction to encourage conversation.',
  // },

  {
    id: 'retailKiosk', status: 'offsite', title: 'Retail Kiosk.',
    Icon: <KioskIcon />,
    imageUrlDesktop: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301785/operator-landing/large/kiosk-image_rq6efx.png',
    imageUrl: 'https://res.cloudinary.com/dseydpdua/image/upload/v1695301688/operator-landing/small/kiosk_cqbh3p.png',
    tabIndex: 6,
    textFirst: 'Scale your physical retail business geographically without the need for more sales representatives. Operator Kiosks can be used to build physical touchpoints seamlessly integrated into existing retail environments.',
    textSecond: 'Leveraging just a TV and a webcam, customers can browse your video content and interact with your sales representatives real-time from across the world.',
  }
]

export const FOOTER_LINKS = [
  {
    title: "Privacy Policy",
    url: 'https://www.cabadesign.co/privacy-policy',
    target: "_blank"
  },
  {
    title: "Terms of Service",
    url: 'https://www.cabadesign.co/terms-of-service',
    target: "_blank"
  },
  // {
  //   title: "ADA Accessibility",
  //   url: ''
  // },
  // {
  //   title: "Do Not Sell My Personal Information",
  //   url: ''
  // },
]

export const SOLUTIONS_LIST = [
  {
    title: "Video Commerce",
    url: ''
  },
  {
    title: "Video Lead Generation",
    url: ''
  },
  {
    title: "Video Clienteling",
    url: ''
  },
  {
    title: "Video Brand Experiences",
    url: ''
  },
  {
    title: "Video Retail Kiosk",
    url: ''
  },
]
export const RESOURCE_LIST = [
  {
    title: "How it Works",
    url: 'hero',
    hasSection: true
  },
  {
    title: 'Integrations',
    url: ''
  },
  {
    title: "FAQ",
    url: ''
  },
  {
    title: "Help Center",
    url: ''
  },
  // {
  //   title: "Pricing",
  //   url: 'pricePlan',
  //   hasSection: true
  // },
]

export const SUCCESS_STORIES_LIST = [
  {
    title: "Chicory",
    url: 'http://chicoryhome.com/',
    target: "_blank"
  },
  {
    title: "Inside Weather",
    url: 'https://insideweather.com/',
    target: "_blank"
  },
  {
    title: "Diorama",
    url: 'https://dioramaliving.com/',
    target: "_blank"
  },
]

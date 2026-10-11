import { asset } from '../utils/assetHelper';

// Complete 3-Piece Invitation Suite Catalog
// Each product consists of:
// 1. Big Invitation Card Cover (Outer Jacket / Envelope)
// 2. Information Paper Sheet (Inside Cover - Wedding Details & Itinerary)
// 3. Plantable Seed Paper Sheet (Inside Card - Embedded with 1-2 living seeds)

const rawCatalog = [
  {
    id: "lotus-monogram",
    title: "Royal Lotus & Gold Monogram 3-Piece Suite",
    occasion: "Royal Indian Wedding Celebration",
    names: "Aarav weds Diya",
    symbols: "Pink Lotus Blooms, Gold Baroque Crest & Monogram",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Sacred Golden Marigold & Wildflower",
    basePrice: 51, // 40% reduced from ₹85
    image: "/cards/lotus_wedding.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "A regal outer cover featuring hand-painted pink lotus water lilies, gold baroque monogram crest, and deckle-torn natural edges.",
        closure: "Hand-tied raw silk ribbon with botanical wax seal",
        image: "/cards/lotus_wedding.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "Resting inside the big cover card, this sheet carries the royal calligraphy with couple names, ceremony timings, venue, and family blessings.",
        ceremony: "Vivaha Samskara & Grand Royal Banquet",
        date: "Saturday, 21st December 2026 • 5:00 PM Onwards",
        venue: "Umaid Bhawan Palace, Jodhpur, Rajasthan",
        itinerary: "Baraat Welcome: 5:00 PM | Varmala: 6:30 PM | Pheras & Dinner: 8:00 PM",
        note: "Together with their families, invite you to witness the holy union of love and lifetime companionship."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "The sacred living keepsake embedded with precisely 1 to 2 viable Non-GMO seeds. Guests plant this paper to grow blossoms in honor of the wedding.",
        seedVariety: "Sacred Marigold & Wild Poppy (1–2 Seeds Embedded)",
        instructions: [
          "Tear into small pieces or place whole flat under 1/8 inch of moist fertile soil",
          "Water gently every morning with a spray mist under warm sunshine",
          "Golden auspicious marigolds sprout in 7 to 10 days as a living blessing"
        ]
      }
    }
  },
  {
    id: "nothing-fancy-love",
    title: "Nothing Fancy Just Love 3-Piece Ribbon Suite",
    occasion: "Marriage & Love Celebration",
    names: "Rohan & Meera",
    symbols: "Crimson Wavy Ribbon Border & Champagne Tower",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Sweet Alyssum & Wild Poppy",
    basePrice: 39, // 40% reduced from ₹65
    image: "/cards/nothing_fancy_love.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Warm minimalist deckle jacket with continuous hand-drawn crimson ribbon doodles, corner bows, and champagne tower illustration.",
        closure: "Matching crimson cotton twill ribbon tie",
        image: "/cards/nothing_fancy_love.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The heartfelt celebration sheet inside the jacket with modern typography, reception dinner details, toasts, and dancing schedule.",
        ceremony: "Intimate Vows & Candlelit Celebration Dinner",
        date: "Saturday, 14th November 2026 • 6:30 PM",
        venue: "The Heritage Olive Grove & Glasshouse, Pune",
        itinerary: "Sunset Vows: 6:30 PM | Champagne Toast: 7:30 PM | Dinner & Dancing: 8:30 PM",
        note: "No grand fuss, just genuine love and celebration with our dearest circle of family and friends."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Sweet alyssum and wild poppy seed paper with 1–2 living seeds embedded. Sprouted flowers become a garden of enduring love.",
        seedVariety: "Sweet Alyssum & Red Poppy (1–2 Seeds Embedded)",
        instructions: [
          "Soak the paper in clean water for 12 hours until thoroughly soft",
          "Lay flat on moist potting soil in a sunny planter pot",
          "Mist with water daily; vibrant crimson poppies bloom within 7 days"
        ]
      }
    }
  },
  {
    id: "hot-air-balloons",
    title: "Golden Balloons Save The Date 3-Piece Suite",
    occasion: "Save The Date Announcement",
    names: "Kabir & Tara",
    symbols: "Dual Golden Hot Air Balloons & Classic Navy Border",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Pollinator Wildflower Blend",
    basePrice: 33, // 40% reduced from ₹55
    image: "/cards/hot_air_balloons.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Classic deckle jacket adorned with twin golden foil hot air balloons soaring over gentle clouds with a formal navy border.",
        closure: "Navy twine wrap with gold seal",
        image: "/cards/hot_air_balloons.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The announcement insert paper detailing the celebration weekend, accommodation blocks, flight recommendations, and RSVP portal link.",
        ceremony: "Destination Wedding Weekend Save-The-Date",
        date: "24th - 26th October 2026",
        venue: "Taj Lake Palace, Udaipur, Rajasthan",
        itinerary: "Formal invitation and multi-day itinerary to follow shortly.",
        note: "Please save this date to celebrate love, laughter, and high-altitude adventures with us."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Seed paper embedded with 1–2 butterfly and honeybee wildflower seeds that blossom into colourful meadow flowers.",
        seedVariety: "Pollinator Wildflower Meadow (1–2 Seeds Embedded)",
        instructions: [
          "Place whole card flat on fresh garden soil in a medium flowerpot",
          "Lightly cover with 1/8 inch of fine potting mix",
          "Keep warm and damp; bright pollinator wildflowers sprout in 7 to 10 days"
        ]
      }
    }
  },
  {
    id: "couple-photo-heart",
    title: "Personalized Photo & Gold Heart 3-Piece Suite",
    occasion: "Bespoke Couple Photo Suite",
    names: "Arjun & Mira",
    symbols: "Couple Photograph, Gold Foil Heart & Botanical Vines",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Living Wildflowers & Herbs",
    basePrice: 54, // 40% reduced from ₹90
    image: "/cards/couple_photo.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Personalized archival photo print of the couple inside a hand-gilded oval frame with a shimmering gold heart medallion and deckle edges.",
        closure: "Terracotta satin ribbon with pressed botanical sprig",
        image: "/cards/couple_photo.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The inner wedding details sheet carrying the couple's personal love letter, ceremony vows, dinner menu, and QR code for photo sharing.",
        ceremony: "Bespoke Couple Wedding & Sunset Feast",
        date: "Sunday, 18th January 2026 • 4:30 PM",
        venue: "The Royal Palace Gardens, Udaipur, Rajasthan",
        itinerary: "Garden Vows: 4:30 PM | Sunset Cocktails: 6:00 PM | Grand Dinner: 7:30 PM",
        note: "Two souls, one destiny. Join us as we exchange our vows and begin our forever."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "A living photo memory embedded with 1–2 viable seeds. Planting this paper transforms the wedding photo moment into a garden of blooming flowers.",
        seedVariety: "Fragrant Chamomile & Wildflower (1–2 Seeds Embedded)",
        instructions: [
          "Moisten the paper with water and lay flat in garden compost",
          "Ensure bright indirect sunlight beside a warm window",
          "Watch flowers burst into life as a living tribute to everlasting love"
        ]
      }
    }
  },
  {
    id: "peacock-wedding",
    title: "Royal Peacock Indian Wedding 3-Piece Suite",
    occasion: "Traditional Royal Ceremony",
    names: "Dev & Radhika",
    symbols: "Ornate Royal Peacock, Paisley Mandalas & Gold Foil",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Auspicious Marigold & Calendula",
    basePrice: 48, // 40% reduced from ₹80
    image: "/cards/peacock_wedding.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "An ornate Indian royal cover featuring the auspicious Mayura (peacock) with crowned gold plumes, paisley mandalas, and deckle margins.",
        closure: "Golden cord wrap with peacock feather emblem",
        image: "/cards/peacock_wedding.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "Traditional Sanskrit shlokas, auspicious lagna time, Gauri puja, Sangeet & Mehendi schedules, and dress code for all celebrations.",
        ceremony: "Shubh Vivah & Traditional Pheras",
        date: "Thursday, 10th December 2026 • Subha Muhurtham",
        venue: "The Leela Palace, Jaipur, Rajasthan",
        itinerary: "Ganesh Puja: 9:00 AM | Mehendi & Sangeet: 4:00 PM | Vivaha: 7:00 PM",
        note: "Seeking the divine blessings of elders and Lord Ganesha on our wedding day."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Infused with auspicious golden marigold seeds. In Indian traditions, the marigold represents sunlight, divinity, and enduring prosperity.",
        seedVariety: "Auspicious Royal Marigold (1–2 Seeds Embedded)",
        instructions: [
          "Plant whole under 1/8 inch of soft garden soil",
          "Water with sacred intent and keep moist under sunlight",
          "Golden marigolds blossom in 10 to 14 days bringing blessings to your home"
        ]
      }
    }
  },
  {
    id: "peacock-wishes",
    title: "Peacock Blessings Celebration 3-Piece Suite",
    occasion: "Traditional Blessings & Wedding",
    names: "Singh Rai & Kaur Rai",
    symbols: "Ornate Peacock Plumes, Radiant Amber Glow & Blessings",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Golden Marigold & Wild Zinnia",
    basePrice: 39, // 40% reduced from ₹65
    image: "/cards/peacock_wishes.png",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Luminous amber & gold artwork depicting the majestic dancing peacock with intricate jewel-toned mandala plumage.",
        closure: "Hand-embossed wax seal with golden tassel",
        image: "/cards/peacock_wishes.png"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The Anand Karaj ceremony schedule, Gurdwara details, Langar feast timings, and sincere heartfelt blessings from the Rai family.",
        ceremony: "Anand Karaj & Grand Reception",
        date: "Sunday, 8th November 2026 • 10:00 AM",
        venue: "Sri Guru Singh Sabha Gurdwara & Heritage Gardens, Chandigarh",
        itinerary: "Milni: 10:00 AM | Anand Karaj: 11:30 AM | Guru Ka Langar & Reception: 1:00 PM",
        note: "Best wishes and divine blessings from Singh Rai and Kaur Rai."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Pure cotton seed card with 1–2 seeds that grow into radiant marigolds and zinnias in honor of the family's celebrations.",
        seedVariety: "Golden Marigold & Wild Zinnia (1–2 Seeds Embedded)",
        instructions: [
          "Lay flat in a garden pot and cover with fine potting compost",
          "Water gently every morning with a spray bottle",
          "Sprouts burst through soil within 8 to 12 days into golden flora"
        ]
      }
    }
  },
  {
    id: "marriage-love-symbols",
    title: "Together in Love Marriage 3-Piece Suite",
    occasion: "Wedding Love Union",
    names: "Rohan & Meera",
    symbols: "Interlocking Gold Hearts, Wedding Rings & Rose Vines",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Poppy & Daisy Wildflowers",
    basePrice: 42, // 40% reduced from ₹70
    image: "/cards/marriage_love.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Subtle blind-embossed botanical vines framing interlocking gold foil wedding rings and deckled margins.",
        closure: "Blush pink silk ribbon with wax emblem",
        image: "/cards/marriage_love.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The inner celebration sheet containing the couple's vow exchange, banquet menu, musical performances, and RSVP details.",
        ceremony: "Holy Matrimony & Sunset Reception",
        date: "Saturday, 5th December 2026 • 5:00 PM",
        venue: "The Royal Orchid Gardens, Bengaluru, Karnataka",
        itinerary: "Ring Ceremony: 5:00 PM | Vows: 6:00 PM | Gala Dinner: 7:30 PM",
        note: "Two lives joined in love, forever walking together with joy and mutual honor."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Living memory card embedded with 1–2 wildflower seeds that blossom into white daisies and red poppies.",
        seedVariety: "Poppy & Daisy Wildflowers (1–2 Seeds Embedded)",
        instructions: [
          "Place whole card in rich garden compost in a sunny spot",
          "Keep continuously moist with morning spray misting",
          "Watch flowers bloom continuously to celebrate the couple's new journey"
        ]
      }
    }
  },
  {
    id: "baby-birthday-balloons",
    title: "Baby Anvi's 1st Birthday 3-Piece Suite",
    occasion: "1st Birthday Celebration",
    names: "Baby Anvi",
    symbols: "Pastel Balloons, Gold Stars & Sweet Baby Flora",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Calming Chamomile & Baby's Breath",
    basePrice: 27, // 40% reduced from ₹45
    image: "/cards/baby_birthday.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Playful watercolor pastel balloons ('belones'), sparkling gold stars, and delicate deckle edges celebrating baby's milestone.",
        closure: "Sky blue and butter yellow pastel ribbon wrap",
        image: "/cards/baby_birthday.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "Baby Anvi's milestone story, party games, cake smash timeline, family gathering schedule, and theme dress guide.",
        ceremony: "Baby Anvi's 1st Birthday Fiesta & Cake Smash",
        date: "Sunday, 15th March 2026 • 4:00 PM",
        venue: "The Sunshine Lawn & Play Pavilion, Delhi NCR",
        itinerary: "Welcome Treats: 4:00 PM | Cake Smash & Magic Show: 5:30 PM | Dinner: 7:00 PM",
        note: "Our little blossom is turning one! Join us to celebrate growing with love."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Children and families plant this card together to watch sweet chamomile and baby's breath sprout alongside the growing baby.",
        seedVariety: "Calming Chamomile & Baby's Breath (1–2 Seeds Embedded)",
        instructions: [
          "Plant in a cute baby pot with your child",
          "Sprinkle water gently every morning with a spray bottle",
          "Sweet white baby's breath flowers emerge in 7 days as baby's first garden"
        ]
      }
    }
  },
  {
    id: "monaco-balloons",
    title: "Golden Sky Balloons 3-Piece Suite",
    occasion: "Classic Save The Date",
    names: "Aaditya & Sanjana",
    symbols: "Twin Golden Hot Air Balloons, Classic Navy Border & Pure Cotton",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Delicate Forget-Me-Nots & Alyssum",
    basePrice: 33, // 40% reduced from ₹55
    image: "/cards/monaco_balloons.png",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Minimalist navy border enclosing hand-illustrated golden balloons on heavy textured cotton stock.",
        closure: "Navy & gold striped twine with deckle seal",
        image: "/cards/monaco_balloons.png"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The travel schedule, palace reception details, dress code (black tie optional), and RSVP registry.",
        ceremony: "Palace Wedding Ceremony & Reception",
        date: "January 18th, 2026",
        venue: "The Oberoi Udaivilas, Lake Pichola, Udaipur",
        itinerary: "Ceremony: 4:00 PM | Sunset Cocktails: 5:30 PM | Dinner & Ball: 7:00 PM",
        note: "Aaditya & Sanjana are getting married. Invitation to follow."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Infused with forget-me-nots that bloom into soft blue flowers that keep the memories alive forever.",
        seedVariety: "Forget-Me-Not & Alyssum (1–2 Seeds Embedded)",
        instructions: [
          "Rest flat on fertile potting soil in a sunny planter",
          "Cover with whisper-thin layer of earth and water daily",
          "Soft blue forget-me-nots sprout in 7 to 10 days"
        ]
      }
    }
  },
  {
    id: "amanda-jacob-ribbon",
    title: "Crimson Bow & Champagne Tower 3-Piece Suite",
    occasion: "Intimate Celebration",
    names: "Armaan & Jhanvi",
    symbols: "Hand-drawn Red Ribbon Border, Corner Bows & Champagne Tower",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Sweet Alyssum & Red Poppies",
    basePrice: 39, // 40% reduced from ₹65
    image: "/cards/amanda_jacob_ribbon.png",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "The beloved crimson continuous doodle ribbon cover featuring champagne glasses tower and vintage corner bows.",
        closure: "Double-tied crimson cotton cord",
        image: "/cards/amanda_jacob_ribbon.png"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "Detailed reception itinerary, toast schedules, intimate dinner courses, and music playlist.",
        ceremony: "Intimate Marriage Celebration",
        date: "Saturday, 28th November 2026",
        venue: "Taj Falaknuma Palace, Hyderabad",
        itinerary: "Reception & Merriment to follow.",
        note: "Please join us for an intimate wedding celebration honoring Armaan & Jhanvi."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Sweet alyssum and red poppy seed paper embedded with 1–2 seeds that transform into fragrant blooms.",
        seedVariety: "Sweet Alyssum & Red Poppies (1–2 Seeds Embedded)",
        instructions: [
          "Soak paper in cool water for 6 to 12 hours",
          "Press gently into moist soil and keep under sunlight",
          "Vibrant flowers bloom in celebration of enduring love"
        ]
      }
    }
  },
  {
    id: "floating-gold-suite",
    title: "Floating Golden Mandala 3-Piece Suite",
    occasion: "Luxury Wedding Celebration",
    names: "Rhea & Rohan",
    symbols: "Intricate Gold Mandala Foil, Lotus Border & Deckle Edge",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Marigold, Basil & Calendula",
    basePrice: 51, // 40% reduced from ₹85
    image: "/cards/card_floating_gold.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Heavyweight cotton deckle jacket embellished with 24k gold leaf mandala foil patterns and ornate borders.",
        closure: "Handmade paper sash with gold medallion",
        image: "/cards/card_floating_gold.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The sacred ceremony sheet outlining the multi-day celebrations, religious ceremonies, and grand feast.",
        ceremony: "Grand Royal Wedding Celebrations",
        date: "Friday, 18th December 2026",
        venue: "City Palace & Lake Pichola Pavilion, Udaipur",
        itinerary: "Mehendi: 2:00 PM | Sangeet: 7:00 PM | Royal Wedding: 6:00 PM Next Day",
        note: "Rhea & Rohan invite you to celebrate their sacred matrimonial union."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Rich marigold, holy basil, and calendula seeds embedded in organic cotton rag paper.",
        seedVariety: "Marigold, Holy Basil & Calendula (1–2 Seeds Embedded)",
        instructions: [
          "Soak the paper overnight in water",
          "Plant in garden pot under bright sunlight",
          "Fragrant holy basil and golden marigolds emerge in 5 to 7 days"
        ]
      }
    }
  },
  {
    id: "sunlit-heritage-suite",
    title: "Sunlit Window Heritage 3-Piece Suite",
    occasion: "Artisanal Celebration Suite",
    names: "Isha & Siddharth",
    symbols: "Couple Portrait, Natural Cotton Texture & Living Blossoms",
    seedsCount: "1–2 Viable Seeds Embedded",
    seedType: "Wildflower Pollinator Blend",
    basePrice: 45, // 40% reduced from ₹75
    image: "/cards/card_sunlit_blooms.jpg",
    pieces: {
      cover: {
        name: "1. Big Invitation Cover Card (Outer Jacket)",
        dimensions: "5.5\" × 7.5\" (350 GSM Cotton Rag)",
        desc: "Artisanal textured cotton deckle jacket with couple portrait, warm sepia letterpress, and raw deckle margins.",
        closure: "Natural jute twine with dried wildflower sprig",
        image: "/cards/card_sunlit_blooms.jpg"
      },
      infoPaper: {
        name: "2. Information Paper Sheet (Inside the Cover)",
        dimensions: "5.2\" × 7.2\" (180 GSM Archival Parchment)",
        desc: "The celebration insert card featuring handcrafted vows, farm-to-table banquet menu, and evening bonfire timetable.",
        ceremony: "Sunlit Meadow Vows & Heritage Dinner",
        date: "Saturday, 12th September 2026 • 3:30 PM",
        venue: "Neemrana Fort Palace, Rajasthan",
        itinerary: "Fort Vows: 3:30 PM | Terrace Cocktails: 5:00 PM | Royal Banquet: 7:00 PM",
        note: "Isha & Siddharth invite you to celebrate their sacred union surrounded by nature and love."
      },
      seedPaper: {
        name: "3. Plantable Living Seed Paper Sheet (Inside the Card)",
        dimensions: "4.8\" × 6.8\" (250 GSM Handmade Cotton)",
        desc: "Infused with 1–2 living wildflower seeds that germinate in home gardens into continuous summer blooms.",
        seedVariety: "Wildflower Meadow Pollinator Blend (1–2 Seeds Embedded)",
        instructions: [
          "Place flat on moist garden soil by a sunlit windowsill",
          "Cover with whisper-thin layer of earth and water daily",
          "Flowers bloom continuously to honor your special celebration"
        ]
      }
    }
  }
];

export const suiteCatalog = rawCatalog.map(suite => ({
  ...suite,
  image: asset(suite.image),
  pieces: {
    ...suite.pieces,
    cover: {
      ...suite.pieces.cover,
      image: asset(suite.pieces.cover.image)
    }
  }
}));

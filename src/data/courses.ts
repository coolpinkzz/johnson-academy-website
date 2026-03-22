export type Course = {
  slug: string;
  title: string;
  image: string;
  metaDescription: string;
  heroDescription: string;
  about: string[];
  learnItems: string[];
  whoCanJoin: string[];
};

export const courses: Course[] = [
  {
    slug: "guitar-classes-bangalore",
    title: "Guitar Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&w=2070&auto=format&fit=crop",
    metaDescription:
      "Join the best guitar classes in Bangalore at Johnson's Academy. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Master acoustic and electric guitar with structured lessons from certified trainers. Whether you're a beginner or advancing your skills, our guitar classes in Bangalore cater to all levels.",
    about: [
      "Our guitar classes in Bangalore are designed to take you from basic chords to advanced techniques. Our experienced instructors bring years of performance and teaching experience to every session.",
      "We cover both acoustic and electric guitar, including fingerstyle, strumming patterns, music theory, and performance skills. Our curriculum progresses from beginner to advanced levels.",
      "Flexible batch timings and personalized attention ensure you learn at your own pace. Join hundreds of students who have discovered their musical passion at Johnson's Academy.",
    ],
    learnItems: [
      "Basic chords, scales, and finger positioning",
      "Strumming patterns and rhythm techniques",
      "Acoustic and electric guitar fundamentals",
      "Music theory and reading notation",
      "Fingerstyle and advanced playing techniques",
      "Performance skills and stage confidence",
    ],
    whoCanJoin: ["Kids (6+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "drum-classes-bangalore",
    title: "Drum Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1569634311433-afb9edb8a3f4?q=80&w=1711&auto=format&fit=crop",
    metaDescription:
      "Join the best drum classes in Bangalore at Johnson's Academy. Learn rhythm and percussion from expert trainers. Book a free demo today.",
    heroDescription:
      "Build solid rhythm foundations with our drum classes in Bangalore. From basic beats to complex patterns, our certified instructors help you develop timing, coordination, and musical expression.",
    about: [
      "Our drum classes in Bangalore focus on developing strong rhythm fundamentals and technique. Students learn on quality drum kits in a supportive, encouraging environment.",
      "The curriculum progresses from basic stick control and simple beats to complex fills, grooves, and time signatures. We cover various genres including rock, pop, and fusion.",
      "Suitable for all age groups, our drum classes help improve coordination, concentration, and creativity. Book a free demo to experience our teaching approach firsthand.",
    ],
    learnItems: [
      "Stick control and grip techniques",
      "Basic beats and rhythm patterns",
      "Drum kit coordination (hands and feet)",
      "Fills, rolls, and advanced patterns",
      "Music theory for drummers",
      "Playing along with tracks and live performance",
    ],
    whoCanJoin: ["Kids (6+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "piano-classes-bangalore",
    title: "Piano Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
    metaDescription:
      "Join the best piano classes in Bangalore at Johnson's Academy. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Learn piano the right way with our structured piano classes in Bangalore. From reading sheet music to playing your favorite songs, we guide you from beginner to advanced levels.",
    about: [
      "Our piano classes in Bangalore offer a balanced mix of classical foundations and contemporary music. Students develop proper technique, finger dexterity, and musical understanding.",
      "We teach music theory alongside practical skills, so you understand what you're playing. The curriculum is designed for gradual progression from basic notes to complex pieces.",
      "Individual attention and flexible timings make our piano classes ideal for busy schedules. Join Johnson's Academy and start your musical journey on the keys.",
    ],
    learnItems: [
      "Piano basics: keys, posture, and hand position",
      "Reading sheet music and notation",
      "Scales, chords, and arpeggios",
      "Classical and contemporary repertoire",
      "Music theory and harmony",
      "Sight-reading and improvisation basics",
    ],
    whoCanJoin: ["Kids (5+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "keyboard-classes-bangalore",
    title: "Keyboard Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1771209195708-f547e3649ae8?q=80&w=2070&auto=format&fit=crop",
    metaDescription:
      "Join the best keyboard classes in Bangalore at Johnson's Academy. Western and Indo-Western styles. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Master both Western and Indo-Western keyboard at Johnson's Academy. Our keyboard classes in Bangalore cover varied styles—from classical to Bollywood—for learners at every level.",
    about: [
      "Our keyboard classes in Bangalore combine Western keyboard techniques with Indian music sensibilities. Students learn chords, melody, and accompaniment patterns used in contemporary and traditional music.",
      "We offer flexible learning paths: Western keyboard for those interested in pop, rock, and jazz; Indo-Western for Bollywood, devotional, and fusion styles. Many students explore both.",
      "From basic finger exercises to playing full songs, our structured curriculum builds confidence. Beginners to advanced learners find the right pace at Johnson's Academy.",
    ],
    learnItems: [
      "Western keyboard: chords, scales, and progressions",
      "Indo-Western styles and Bollywood keyboard",
      "Both-hand coordination and accompaniment",
      "Music theory (Western and Indian)",
      "Rhythm patterns and style variations",
      "Performance and song arrangement",
    ],
    whoCanJoin: ["Kids (5+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "hindustani-vocal-classes-bangalore",
    title: "Hindustani Vocal Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1738658024539-a8d1527fa8e8?q=80&w=1674&auto=format&fit=crop",
    metaDescription:
      "Join the best Hindustani vocal classes in Bangalore at Johnson's Academy. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Discover the beauty of Hindustani classical vocals at Johnson's Academy. Our Hindustani vocal classes in Bangalore teach proper technique, ragas, and expression for all levels.",
    about: [
      "Our Hindustani vocal classes in Bangalore are rooted in traditional training while remaining accessible to modern learners. Students learn voice culture, pitch control, and the fundamentals of raga and taal.",
      "The curriculum includes alankars, sargam, light classical, bhajans, and semi-classical forms. We emphasize proper breath control, pronunciation, and emotional expression.",
      "Whether you're new to Indian classical music or wish to deepen your practice, our experienced instructors guide you from basics to advanced improvisation.",
    ],
    learnItems: [
      "Voice culture and breath control",
      "Alankars and sargam practice",
      "Introduction to ragas and taals",
      "Light classical and bhajan repertoire",
      "Semi-classical and thumri basics",
      "Improvisation and stage performance",
    ],
    whoCanJoin: ["Kids (6+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "indian-vocal-classes-bangalore",
    title: "Indian Vocal Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1738658024539-a8d1527fa8e8?q=80&w=1674&auto=format&fit=crop",
    metaDescription:
      "Join the best Indian vocal classes in Bangalore at Johnson's Academy. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Explore the richness of Indian vocal music at Johnson's Academy. Our Indian vocal classes in Bangalore cover traditional and contemporary styles for singers of all levels.",
    about: [
      "Our Indian vocal classes in Bangalore encompass a wide range of styles—from classical and devotional to film songs and folk. Students develop a strong foundation in pitch, rhythm, and expression.",
      "We focus on voice development, ear training, and understanding Indian musical concepts. The curriculum is tailored to individual goals, whether you want to perform or sing for pleasure.",
      "Join a community of vocalists who have grown under our expert guidance. Book a free demo to start your Indian vocal journey.",
    ],
    learnItems: [
      "Voice training and pitch accuracy",
      "Indian music theory and notation",
      "Classical and devotional repertoire",
      "Film song and contemporary styles",
      "Microphone technique and recording basics",
      "Performance and stage confidence",
    ],
    whoCanJoin: ["Kids (6+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "western-vocal-classes-bangalore",
    title: "Western Vocal Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1738658024539-a8d1527fa8e8?q=80&w=1674&auto=format&fit=crop",
    metaDescription:
      "Join the best Western vocal classes in Bangalore at Johnson's Academy. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Develop your singing voice with our Western vocal classes in Bangalore. From pop to rock and jazz, learn proper technique, breath control, and performance skills.",
    about: [
      "Our Western vocal classes in Bangalore teach contemporary singing techniques used in pop, rock, R&B, and jazz. Students learn healthy vocal habits, range expansion, and stage presence.",
      "We cover breathing exercises, vocal warm-ups, pitch training, and repertoire building. The curriculum adapts to your musical preferences and skill level.",
      "Whether you dream of performing or singing for fun, our structured approach helps you reach your goals. Book a free demo to experience our teaching style.",
    ],
    learnItems: [
      "Breath control and vocal support",
      "Vocal range expansion and flexibility",
      "Pitch accuracy and ear training",
      "Pop, rock, and contemporary repertoire",
      "Microphone and recording techniques",
      "Stage presence and performance skills",
    ],
    whoCanJoin: ["Kids (6+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "violin-classes-bangalore",
    title: "Violin Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1725673853787-aae551326d9f?q=80&w=1548&auto=format&fit=crop",
    metaDescription:
      "Join the best violin classes in Bangalore at Johnson's Academy. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Learn the violin with precision and passion at Johnson's Academy. Our violin classes in Bangalore offer classical training and contemporary techniques for all levels.",
    about: [
      "Our violin classes in Bangalore focus on proper posture, bowing technique, and intonation. Students progress from simple melodies to complex pieces across classical and contemporary genres.",
      "We emphasize disciplined practice and musical expression. The curriculum includes scales, études, and performance pieces suited to each student's level.",
      "From beginners holding the violin for the first time to advanced players refining their craft, Johnson's Academy provides the guidance you need.",
    ],
    learnItems: [
      "Correct posture, hold, and bowing technique",
      "Scales, arpeggios, and intonation",
      "Reading notation and sight-reading",
      "Classical and contemporary repertoire",
      "Vibrato and expression techniques",
      "Solo and ensemble performance",
    ],
    whoCanJoin: ["Kids (6+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "dance-classes-bangalore",
    title: "Dance Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1537365587684-f490102e1225?q=80&w=2071&auto=format&fit=crop",
    metaDescription:
      "Join the best dance classes in Bangalore at Johnson's Academy. Western and contemporary dance. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Express yourself through movement at Johnson's Academy. Our dance classes in Bangalore cover Western and contemporary styles for kids and adults of all skill levels.",
    about: [
      "Our dance classes in Bangalore blend Western dance forms with contemporary choreography. Students develop rhythm, coordination, flexibility, and performance confidence.",
      "We offer a fun, energetic environment where dancers of all ages can learn and grow. From basic steps to choreographed routines, our curriculum keeps you engaged.",
      "Perfect for fitness, creativity, and stage performance. Book a free demo to experience the energy of our dance studio.",
    ],
    learnItems: [
      "Basic dance steps and footwork",
      "Rhythm and musicality",
      "Western and contemporary techniques",
      "Choreography and routine building",
      "Flexibility and body conditioning",
      "Stage performance and confidence",
    ],
    whoCanJoin: ["Kids (5+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "art-classes-bangalore",
    title: "Art Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    metaDescription:
      "Join the best art classes in Bangalore at Johnson's Academy. Visual art and creative expression. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Unlock your creativity with our art classes in Bangalore. From drawing fundamentals to painting and mixed media, we nurture artistic expression for all ages.",
    about: [
      "Our art classes in Bangalore cover drawing, painting, and various creative techniques. Students learn composition, color theory, and different mediums in a supportive studio environment.",
      "The curriculum progresses from basic shapes and lines to more complex works. We encourage individual style while building strong foundational skills.",
      "Whether you're a child exploring art or an adult rediscovering creativity, our classes are designed to inspire and develop your artistic voice.",
    ],
    learnItems: [
      "Drawing fundamentals and sketching",
      "Color theory and composition",
      "Painting techniques (watercolor, acrylic)",
      "Shading, perspective, and proportions",
      "Mixed media and creative expression",
      "Portfolio development and display",
    ],
    whoCanJoin: ["Kids (5+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
  {
    slug: "karate-classes-bangalore",
    title: "Karate Classes in Bangalore",
    image:
      "https://images.unsplash.com/photo-1515025617920-e1e674b5033c?q=80&w=2144&auto=format&fit=crop",
    metaDescription:
      "Join the best karate classes in Bangalore at Johnson's Academy. Martial arts for discipline and fitness. Learn from expert trainers. Book a free demo today.",
    heroDescription:
      "Build strength, discipline, and confidence with our karate classes in Bangalore. Our certified instructors teach traditional martial arts in a safe, structured environment.",
    about: [
      "Our karate classes in Bangalore focus on discipline, respect, and physical fitness. Students learn basic stances, strikes, blocks, and katas in a progressive, age-appropriate curriculum.",
      "Karate improves focus, coordination, and self-confidence. We welcome both kids and adults, from complete beginners to those advancing through belt levels.",
      "Join Johnson's Academy for a balanced approach to martial arts training. Book a free demo to experience our dojo.",
    ],
    learnItems: [
      "Basic stances, blocks, and strikes",
      "Kata (forms) and sequences",
      "Self-defense fundamentals",
      "Discipline and focus building",
      "Physical fitness and conditioning",
      "Belt progression and grading",
    ],
    whoCanJoin: ["Kids (5+ years)", "Adults", "Beginners", "Intermediate learners"],
  },
];

const courseMap = new Map(courses.map((c) => [c.slug, c]));

export function getCourseBySlug(slug: string): Course | undefined {
  return courseMap.get(slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((c) => c.slug);
}

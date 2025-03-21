<<<<<<< HEAD
export const quizData = [
=======
/**
 * Quiz data for the application
 * This file contains all the quiz content that would normally be stored in a database
 */
import type { Quiz } from "@/types/app-types"

export const quizData: Quiz[] = [
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
  {
    id: "nigerian-culture",
    title: "Nigerian Culture",
    description: "Test your knowledge about Nigerian traditions, festivals, and cultural practices.",
<<<<<<< HEAD
=======
    category: "Culture",
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
    timeLimit: 300, // 5 minutes in seconds
    questions: [
      {
        question: "Which Nigerian festival is celebrated to mark the beginning of the yam harvest season?",
        options: ["Durbar Festival", "Eyo Festival", "New Yam Festival", "Osun-Osogbo Festival"],
        correctAnswer: "New Yam Festival",
<<<<<<< HEAD
=======
        translations: {
          pidgin: {
            question: "Which Nigerian festival dem dey celebrate to mark when yam harvest season start?",
            options: ["Durbar Festival", "Eyo Festival", "New Yam Festival", "Osun-Osogbo Festival"],
          },
          yoruba: {
            question: "Ewo ninu awọn àjọyọ̀ Nàìjíríà ni wọ́n ṣe láti fi ṣàmì ìbẹ̀rẹ̀ àkókò ìkórè isu?",
            options: ["Àjọyọ̀ Durbar", "Àjọyọ̀ Eyo", "Àjọyọ̀ Isu Titun", "Àjọyọ̀ Osun-Osogbo"],
          },
        },
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
      },
      {
        question: "What is the traditional attire for Yoruba men?",
        options: ["Agbada", "Isiagu", "Dashiki", "Babanriga"],
        correctAnswer: "Agbada",
<<<<<<< HEAD
=======
        translations: {
          pidgin: {
            question: "Wetin be the traditional cloth wey Yoruba men dey wear?",
            options: ["Agbada", "Isiagu", "Dashiki", "Babanriga"],
          },
        },
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
      },
      {
        question: "Which of these is NOT one of Nigeria's major ethnic groups?",
        options: ["Hausa", "Yoruba", "Igbo", "Zulu"],
        correctAnswer: "Zulu",
      },
      {
        question: "What is the name of the traditional Igbo marriage ceremony?",
        options: ["Nikkai", "Igba Nkwu", "Baba Nla", "Owambe"],
        correctAnswer: "Igba Nkwu",
      },
      {
        question: "Which Nigerian city is known for its bronze casting tradition?",
        options: ["Lagos", "Kano", "Benin", "Calabar"],
        correctAnswer: "Benin",
      },
      {
        question: "What is the name of the traditional Hausa musical instrument made from a calabash?",
        options: ["Talking drum", "Goje", "Kakaki", "Kora"],
        correctAnswer: "Goje",
      },
      {
        question: "Which traditional title is given to the king of the Yoruba people?",
        options: ["Emir", "Oba", "Obi", "Igwe"],
        correctAnswer: "Oba",
      },
      {
        question: "What does the term 'Owambe' refer to in Nigerian culture?",
        options: ["A traditional dance", "A lavish party", "A religious ceremony", "A cooking method"],
        correctAnswer: "A lavish party",
      },
      {
        question: "Which Nigerian state is known for the Argungu Fishing Festival?",
        options: ["Kebbi", "Kano", "Kaduna", "Kogi"],
        correctAnswer: "Kebbi",
      },
      {
        question: "What is the significance of kola nut in Igbo traditional ceremonies?",
        options: [
          "It's just a snack",
          "It symbolizes hospitality and peace",
          "It's used for medicinal purposes only",
          "It's offered to ancestors only",
        ],
        correctAnswer: "It symbolizes hospitality and peace",
      },
    ],
<<<<<<< HEAD
=======
    availableLanguages: ["english", "pidgin", "yoruba", "igbo", "hausa"],
    relatedQuizzes: [
      {
        id: "nigerian-history",
        title: "Nigerian History",
      },
      {
        id: "nigerian-food",
        title: "Nigerian Cuisine",
      },
    ],
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
  },
  {
    id: "nigerian-food",
    title: "Nigerian Cuisine",
    description: "From jollof rice to egusi soup, test your knowledge of Nigerian delicacies.",
<<<<<<< HEAD
=======
    category: "Food",
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
    timeLimit: 240, // 4 minutes in seconds
    questions: [
      {
        question: "Which Nigerian dish is made from cassava and is often eaten with soup?",
        options: ["Amala", "Eba", "Tuwo", "Semovita"],
        correctAnswer: "Eba",
      },
      {
        question: "What is the main ingredient in Egusi soup?",
        options: ["Melon seeds", "Okra", "Spinach", "Peanuts"],
        correctAnswer: "Melon seeds",
      },
      {
        question: "Which of these is NOT a traditional Nigerian soup?",
        options: ["Efo Riro", "Ogbono", "Borscht", "Afang"],
        correctAnswer: "Borscht",
      },
      {
        question: "What is Suya?",
        options: ["A type of bread", "Spicy grilled meat", "A sweet dessert", "A vegetable stew"],
        correctAnswer: "Spicy grilled meat",
      },
      {
        question: "Which Nigerian snack is made from bean flour?",
        options: ["Puff Puff", "Akara", "Chin Chin", "Boli"],
        correctAnswer: "Akara",
      },
      {
        question: "What is the main ingredient in Pounded Yam?",
        options: ["Cassava", "Plantain", "Yam", "Cocoyam"],
        correctAnswer: "Yam",
      },
      {
        question: "Which Nigerian dish is similar to Spanish Paella?",
        options: ["Jollof Rice", "Fried Rice", "Coconut Rice", "Tuwo"],
        correctAnswer: "Jollof Rice",
      },
      {
        question: "What is 'Ewedu' soup made from?",
        options: ["Spinach", "Jute leaves", "Bitter leaf", "Pumpkin leaves"],
        correctAnswer: "Jute leaves",
      },
    ],
<<<<<<< HEAD
=======
    availableLanguages: ["english", "pidgin", "yoruba"],
    relatedQuizzes: [
      {
        id: "nigerian-culture",
        title: "Nigerian Culture",
      },
      {
        id: "nigerian-slang",
        title: "Nigerian Slang",
      },
    ],
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
  },
  {
    id: "nigerian-slang",
    title: "Nigerian Slang",
    description: "Test your knowledge of popular Nigerian slang and expressions.",
<<<<<<< HEAD
=======
    category: "Language",
>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964
    timeLimit: 300, // 5 minutes in seconds
    questions: [
      {
        question: "What does 'Wahala' mean in Nigerian slang?",
        options: ["Money", "Trouble", "Food", "Friend"],
        correctAnswer: "Trouble",
      },
      {
        question: "If someone says 'Shine your eye', what are they telling you to do?",
        options: ["Clean your eyes", "Be alert/careful", "Look beautiful", "Go to sleep"],
        correctAnswer: "Be alert/careful",
      },
      {
        question: "What does the slang term 'Gbedu' refer to?",
        options: ["A type of food", "Good music", "A traditional ceremony", "A type of clothing"],
        correctAnswer: "Good music",
      },
      {
        question: "If someone is described as 'Forming', what are they doing?",
        options: ["Exercising", "Pretending/showing off", "Studying", "Cooking"],
        correctAnswer: "Pretending/showing off",
      },
      {
        question: "What does 'Abeg' mean?",
        options: ["Please", "Thank you", "Sorry", "Goodbye"],
        correctAnswer: "Please",
      },
      {
        question: "What does it mean when someone says 'I dey'?",
        options: ["I'm coming", "I'm here/I'm fine", "I'm leaving", "I'm hungry"],
        correctAnswer: "I'm here/I'm fine",
      },
      {
        question: "What does 'Japa' mean in Nigerian slang?",
        options: ["To eat quickly", "To run away/escape", "To dance", "To sleep"],
        correctAnswer: "To run away/escape",
      },
      {
        question: "If someone says 'No wahala', what do they mean?",
        options: ["No money", "No problem", "No food", "No time"],
        correctAnswer: "No problem",
      },
      {
        question: "What does 'Chop life' mean?",
        options: ["Eat food", "Enjoy life", "Cut trees", "Work hard"],
        correctAnswer: "Enjoy life",
      },
      {
        question: "What does 'Wetin dey happen' mean?",
        options: ["What's happening?", "What did you eat?", "Where are you going?", "Who are you?"],
        correctAnswer: "What's happening?",
      },
    ],
<<<<<<< HEAD
  },
]

=======
    availableLanguages: ["english", "pidgin"],
    relatedQuizzes: [
      {
        id: "nigerian-culture",
        title: "Nigerian Culture",
      },
      {
        id: "nigerian-music",
        title: "Nigerian Music",
      },
    ],
  },
  {
    id: "nigerian-history",
    title: "Nigerian History",
    description: "How well do you know the rich history of Nigeria from pre-colonial times to present?",
    category: "History",
    timeLimit: 480, // 8 minutes in seconds
    questions: [
      {
        question: "In what year did Nigeria gain independence from Britain?",
        options: ["1957", "1960", "1963", "1966"],
        correctAnswer: "1960",
      },
      {
        question: "Who was Nigeria's first president?",
        options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Tafawa Balewa", "Yakubu Gowon"],
        correctAnswer: "Nnamdi Azikiwe",
      },
      {
        question: "What was the name of the ancient kingdom that existed in what is now southwestern Nigeria?",
        options: ["Benin Kingdom", "Oyo Empire", "Sokoto Caliphate", "Kanem-Bornu Empire"],
        correctAnswer: "Oyo Empire",
      },
      {
        question: "Which Nigerian civil war took place between 1967 and 1970?",
        options: ["The Sokoto War", "The Biafran War", "The Lagos Conflict", "The Kano Rebellion"],
        correctAnswer: "The Biafran War",
      },
      {
        question: "Which colonial power controlled the area that is now Nigeria before British rule?",
        options: ["France", "Portugal", "Germany", "None of the above"],
        correctAnswer: "None of the above",
      },
      {
        question: "In what year were the northern and southern protectorates amalgamated to form Nigeria?",
        options: ["1900", "1914", "1922", "1945"],
        correctAnswer: "1914",
      },
      {
        question: "Who was the military head of state who was assassinated in a coup in 1976?",
        options: ["Yakubu Gowon", "Murtala Mohammed", "Olusegun Obasanjo", "Sani Abacha"],
        correctAnswer: "Murtala Mohammed",
      },
      {
        question: "What was the capital of Nigeria before Abuja?",
        options: ["Lagos", "Ibadan", "Kaduna", "Enugu"],
        correctAnswer: "Lagos",
      },
      {
        question: "When did Nigeria become a republic?",
        options: ["1960", "1963", "1966", "1979"],
        correctAnswer: "1963",
      },
      {
        question: "Which Nigerian leader introduced the Structural Adjustment Program (SAP) in the 1980s?",
        options: ["Shehu Shagari", "Muhammadu Buhari", "Ibrahim Babangida", "Sani Abacha"],
        correctAnswer: "Ibrahim Babangida",
      },
    ],
    availableLanguages: ["english", "yoruba", "hausa", "igbo"],
    relatedQuizzes: [
      {
        id: "nigerian-culture",
        title: "Nigerian Culture",
      },
      {
        id: "nigerian-geography",
        title: "Nigerian Geography",
      },
    ],
  },
  {
    id: "nigerian-music",
    title: "Nigerian Music",
    description: "How well do you know Nigerian artists, songs, and musical traditions?",
    category: "Music",
    timeLimit: 360, // 6 minutes in seconds
    questions: [
      {
        question: "Who is known as the pioneer of Afrobeat music?",
        options: ["King Sunny Ade", "Fela Kuti", "Ebenezer Obey", "Lagbaja"],
        correctAnswer: "Fela Kuti",
      },
      {
        question: "Which Nigerian artist released the hit song 'African Queen'?",
        options: ["D'banj", "2Face Idibia", "P-Square", "Wizkid"],
        correctAnswer: "2Face Idibia",
      },
      {
        question: "What is the name of the traditional Yoruba talking drum?",
        options: ["Dundun", "Gangan", "Bata", "Sekere"],
        correctAnswer: "Dundun",
      },
      {
        question: "Which Nigerian artist won a Grammy Award for the album 'Twice As Tall'?",
        options: ["Wizkid", "Davido", "Burna Boy", "Tiwa Savage"],
        correctAnswer: "Burna Boy",
      },
      {
        question: "What genre of music is King Sunny Ade known for?",
        options: ["Highlife", "Juju", "Fuji", "Apala"],
        correctAnswer: "Juju",
      },
      {
        question: "Which Nigerian artist collaborated with Drake on the song 'One Dance'?",
        options: ["Wizkid", "Davido", "Burna Boy", "Mr Eazi"],
        correctAnswer: "Wizkid",
      },
      {
        question: "What is the name of Fela Kuti's famous club in Lagos?",
        options: ["The Shrine", "Afrika Shrine", "Kalakuta Republic", "Afrobeat Club"],
        correctAnswer: "Afrika Shrine",
      },
      {
        question: "Which traditional music style originated from the Hausa people?",
        options: ["Apala", "Fuji", "Waka", "Kalangu"],
        correctAnswer: "Kalangu",
      },
      {
        question: "Who is known as the 'Kokomaster' in Nigerian music?",
        options: ["D'banj", "Don Jazzy", "Wande Coal", "Dr. Sid"],
        correctAnswer: "D'banj",
      },
      {
        question: "Which Nigerian artist released the album 'Superstar' in 2011?",
        options: ["Wizkid", "Davido", "Burna Boy", "Olamide"],
        correctAnswer: "Wizkid",
      },
    ],
    availableLanguages: ["english", "pidgin"],
    relatedQuizzes: [
      {
        id: "nigerian-culture",
        title: "Nigerian Culture",
      },
      {
        id: "nigerian-slang",
        title: "Nigerian Slang",
      },
    ],
  },
  {
    id: "nigerian-geography",
    title: "Nigerian Geography",
    description: "Test your knowledge of Nigerian states, landmarks, and geographical features.",
    category: "Geography",
    timeLimit: 480, // 8 minutes in seconds
    questions: [
      {
        question: "How many states are there in Nigeria?",
        options: ["30", "36", "42", "48"],
        correctAnswer: "36",
      },
      {
        question: "Which river is the longest in Nigeria?",
        options: ["Niger River", "Benue River", "Osun River", "Cross River"],
        correctAnswer: "Niger River",
      },
      {
        question: "Which Nigerian state is known as the 'Gateway State'?",
        options: ["Lagos", "Ogun", "Oyo", "Ondo"],
        correctAnswer: "Ogun",
      },
      {
        question: "What is the highest mountain in Nigeria?",
        options: ["Mount Patti", "Chappal Waddi", "Olumo Rock", "Mount Dimlang"],
        correctAnswer: "Chappal Waddi",
      },
      {
        question: "Which Nigerian state shares borders with the most number of other states?",
        options: ["Kogi", "Niger", "Kaduna", "Nasarawa"],
        correctAnswer: "Kogi",
      },
      {
        question: "Which of these is NOT a coastal state in Nigeria?",
        options: ["Lagos", "Bayelsa", "Delta", "Kano"],
        correctAnswer: "Kano",
      },
      {
        question: "What is the capital of Plateau State?",
        options: ["Makurdi", "Jos", "Lafia", "Jalingo"],
        correctAnswer: "Jos",
      },
      {
        question: "Which Nigerian state is known for the Yankari Game Reserve?",
        options: ["Bauchi", "Gombe", "Adamawa", "Taraba"],
        correctAnswer: "Bauchi",
      },
      {
        question: "Which body of water borders Nigeria to the south?",
        options: ["Mediterranean Sea", "Red Sea", "Gulf of Guinea", "Indian Ocean"],
        correctAnswer: "Gulf of Guinea",
      },
      {
        question: "Which country does NOT share a border with Nigeria?",
        options: ["Cameroon", "Niger", "Benin", "Ghana"],
        correctAnswer: "Ghana",
      },
    ],
    availableLanguages: ["english", "hausa", "yoruba", "igbo"],
    relatedQuizzes: [
      {
        id: "nigerian-history",
        title: "Nigerian History",
      },
      {
        id: "nigerian-culture",
        title: "Nigerian Culture",
      },
    ],
  },
]

/**
 * Helper function to get quiz categories from quiz data
 * This extracts category information for the category grid display
 */
export function getQuizCategories() {
  return quizData.map((quiz) => ({
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    questionCount: quiz.questions.length,
    timeLimit: quiz.timeLimit,
  }))
}

/**
 * Helper function to get featured quizzes
 * In a real app, this would be determined by popularity or editorial choice
 */
export function getFeaturedQuizzes() {
  return [
    {
      id: "nigerian-culture",
      title: "Nigerian Culture",
      description: "Explore the rich cultural heritage of Nigeria through this comprehensive quiz.",
      category: "Culture",
      completions: 1245,
      avgRating: 4.8,
    },
    {
      id: "nigerian-food",
      title: "Nigerian Cuisine",
      description: "Test your knowledge of Nigerian dishes, ingredients, and cooking traditions.",
      category: "Food",
      completions: 987,
      avgRating: 4.7,
    },
    {
      id: "nigerian-music",
      title: "Nigerian Music",
      description: "From Afrobeat to Highlife, test your knowledge of Nigerian music.",
      category: "Music",
      completions: 756,
      avgRating: 4.5,
    },
    {
      id: "nigerian-slang",
      title: "Nigerian Slang",
      description: "How well do you know Nigerian street language and expressions?",
      category: "Language",
      completions: 1102,
      avgRating: 4.9,
    },
  ]
}

/**
 * Helper function to get mock community discussions
 */
export function getCommunityDiscussions() {
  return [
    {
      id: "disc1",
      title: "What's your favorite Nigerian dish?",
      content:
        "I'm curious to know what everyone's favorite Nigerian dish is. Mine is definitely Jollof Rice with plantain!",
      likes: 24,
      comments: 15,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      userId: "user1",
      userName: "Chioma Okafor",
      userImage: "/placeholder.svg?height=40&width=40",
      userBadge: "Naija Pro",
    },
    {
      id: "disc2",
      title: "Nigerian Pidgin expressions that confuse foreigners",
      content:
        "Let's share some Nigerian Pidgin expressions that often confuse foreigners. I'll start: 'How far?' meaning 'How are you?'",
      likes: 32,
      comments: 21,
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      userId: "user3",
      userName: "Amina Ibrahim",
      userImage: "/placeholder.svg?height=40&width=40",
      userBadge: "Naija Expert",
    },
    {
      id: "disc3",
      title: "Best Nigerian musicians of all time",
      content: "Who do you think are the best Nigerian musicians of all time? Let's create a top 5 list!",
      likes: 45,
      comments: 30,
      date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      userId: "user5",
      userName: "Ngozi Okonkwo",
      userImage: "/placeholder.svg?height=40&width=40",
      userBadge: "Naija Pro",
    },
  ]
}

/**
 * Helper function to get quiz recommendations
 * In a real app, this would be based on user history and preferences
 */
export function getQuizRecommendations() {
  return [
    {
      id: "nigerian-music",
      title: "Nigerian Music",
      description: "Test your knowledge of Nigerian artists, songs, and musical traditions.",
      category: "Music",
      matchPercentage: 95,
      reason: "Based on your interest in Nigerian culture",
    },
    {
      id: "nigerian-geography",
      title: "Nigerian Geography",
      description: "How well do you know Nigerian states, landmarks, and geographical features?",
      category: "Geography",
      matchPercentage: 88,
      reason: "You've enjoyed history quizzes",
    },
    {
      id: "nigerian-slang",
      title: "Nigerian Slang",
      description: "Test your knowledge of popular Nigerian slang and expressions.",
      category: "Language",
      matchPercentage: 82,
      reason: "Available in your preferred language (English)",
    },
    {
      id: "nigerian-food",
      title: "Nigerian Cuisine",
      description: "From jollof rice to egusi soup, test your knowledge of Nigerian delicacies.",
      category: "Food",
      matchPercentage: 78,
      reason: "Popular among users with similar interests",
    },
  ]
}

>>>>>>> b170bc7d497abd5c9ab75a10fe29d94abd36d964

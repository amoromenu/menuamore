// =============================================
// Amore Cioccolato - Menu Data & Storage Manager
// =============================================

const DEFAULT_MENU_DATA = {
  restaurant: {
    name: "Amore Cioccolato",
    nameAr: "أموري شوكولاتو",
    slogan: "DRINK WITH LOVE",
    sloganAr: "الطعم الأصلي",
    logo: null,
    branches: "دريم ستي مول زيونة / القاهرة مول النداء / دايموند مول الكرادة / الحارث مول كربلاء / مول العراق بغداد",
    instagram: "amore.cioccolato",
    facebook: "amore.cioccolato"
  },
  categories: [
    {
      id: "cat-1",
      name: "Boba Smoothie",
      nameAr: "سموذي البوبا",
      icon: "🧋",
      items: [
        { id: "item-1", name: "بطيخ مانجو", nameEn: "Watermelon Mango", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "مزيج منعش من البطيخ البارد والمانجو الغنية مع كرات البوبا اللذيذة." },
        { id: "item-2", name: "أفوكادو موز", nameEn: "Avocado Banana", price: 6000, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", description: "سموذي غني ومغذي من الأفوكادو الطازج والموز المحلى مع كرات البوبا." },
        { id: "item-3", name: "بلوبيري فراولة", nameEn: "Blueberry Strawberry", price: 6000, image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&w=400&q=80", description: "توت بري أزرق مع الفراولة المنعشة في سموذي بوبا استثنائي." },
        { id: "item-4", name: "هيلتي", nameEn: "Healthy", price: 6000, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80", description: "مزيج صحي متوازن ومنعش غني بالفيتامينات مع حبوب البوبا." },
        { id: "item-5", name: "موز و فراولة", nameEn: "Banana Strawberry", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "السموذي الكلاسيكي المفضل من الموز والفراولة مع البوبا اللذيذة." },
        { id: "item-6", name: "لافندر", nameEn: "Lavender", price: 6000, image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=400&q=80", description: "مشروب لافندر مميز بلون بنفسجي ساحر ونكهة عطرية هادئة مع البوبا." },
        { id: "item-7", name: "باشن فروت", nameEn: "Passion Fruit", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "فاكهة الباشن الاستوائية الحامضة والحلوة في مشروب منعش للغاية." },
        { id: "item-8", name: "ماتشا فراولة", nameEn: "Matcha Strawberry", price: 6000, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80", description: "مزيج ياباني عصري من شاي الماتشا الأخضر الفاخر وشراب الفراولة مع البوبا." },
        { id: "item-9", name: "أناناس", nameEn: "Pineapple", price: 6000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "سموذي الأناناس الاستوائي البارد بنكهته المنعشة واللذيذة." },
        { id: "item-10", name: "موز و جوز هند", nameEn: "Banana Coconut", price: 6000, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80", description: "مزيج كريمي ناعم من الموز الاستوائي وحليب جوز الهند مع كرات البوبا." },
        { id: "item-11", name: "استوائي", nameEn: "Tropical", price: 6000, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80", description: "مشروب كوكتيل استوائي يجمع أفضل الفواكه الصيفية مع كرات البوبا." },
        { id: "item-12", name: "علب", nameEn: "Bottled Boba", price: 6000, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=400&q=80", description: "سموذي البوبا المجهز في علب مغلقة فاخرة لتستمتع بها في أي مكان." }
      ]
    },
    {
      id: "cat-2",
      name: "Iced Tea",
      nameAr: "الشاي المثلج",
      icon: "🍵",
      items: [
        { id: "item-13", name: "آيس تي خوخ", nameEn: "Peach Iced Tea", price: 6000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80", description: "شاي أسود مثلج بنكهة الخوخ الطبيعية اللذيذة." },
        { id: "item-14", name: "آيس تي مكس بيري", nameEn: "Mix Berry Iced Tea", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج منعش من نكهات التوت المشكل مع الشاي البارد والثلج." },
        { id: "item-15", name: "آيس تي ليمون نعناع", nameEn: "Lemon Mint Iced Tea", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "شاي منعش محضر من عصير الليمون الحامض وأوراق النعناع الطازجة." },
        { id: "item-16", name: "آيس تي مكس فروت", nameEn: "Mix Fruit Iced Tea", price: 6000, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80", description: "مشروب الشاي البارد الممزوج بقطع ونكهات الفواكه الطبيعية المتنوعة." }
      ]
    },
    {
      id: "cat-3",
      name: "Boba Bubble",
      nameAr: "البوبا ببلز",
      icon: "⚪",
      items: [
        { id: "item-17", name: "بوبا بندق", nameEn: "Hazelnut Boba", price: 6500, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=400&q=80", description: "كرات البوبا اللذيذة بنكهة البندق الغنية والكريمة." },
        { id: "item-18", name: "بوبا مانجو بيرلز", nameEn: "Mango Pearls Boba", price: 6500, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", description: "حبيبات بوبا مانجو تنفجر بالنكهة الاستوائية اللذيذة." },
        { id: "item-19", name: "بوبا بستاشيو", nameEn: "Pistachio Boba", price: 6500, image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&w=400&q=80", description: "مزيج كريمي فاخر بنكهة الفستق الحلبي الأصلي مع كرات البوبا." },
        { id: "item-20", name: "بوبا علكة", nameEn: "Gum Boba", price: 6500, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80", description: "بوبا طفولية منعشة بنكهة العلكة الوردية المميزة والفريدة." },
        { id: "item-21", name: "بوبا تايلاندي", nameEn: "Thai Boba", price: 6500, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "الشاي التايلاندي البرتقالي التقليدي الممزوج بالحليب المكثف والبوبا." },
        { id: "item-22", name: "بوبا الماتشا", nameEn: "Matcha Boba", price: 6500, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80", description: "مزيج غني من شاي الماتشا الأخضر الفاخر وكرات البوبا الغنية بالألياف." },
        { id: "item-23", name: "بوبا فانيلا اكسترا", nameEn: "Vanilla Extra Boba", price: 6500, image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=400&q=80", description: "نكهة الفانيلا الفرنسية المركزة مع الحليب البارد وحبوب البوبا اللذيذة." },
        { id: "item-24", name: "بوبا فراولة", nameEn: "Strawberry Boba", price: 6500, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "حليب الفراولة الطازجة الغني بالنكهة والصوص الحلو مع كرات البوبا." },
        { id: "item-25", name: "بوبا تايكر", nameEn: "Tiger Boba", price: 6500, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "الشاي الكلاسيكي بصوص السكر البني (تايكر) والحليب الطازج والبوبا." },
        { id: "item-26", name: "بوبا بلاك بيري", nameEn: "Blackberry Boba", price: 6500, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80", description: "مزيج توت العليق الأسود المنعش بنكهة لا تقاوم وحبوب البوبا اللذيذة." },
        { id: "item-27", name: "بوبا جيز كيك فراولة", nameEn: "Strawberry Cheesecake Boba", price: 6500, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80", description: "نكهة التشيزكيك الكريمية الغنية مع الفراولة وحبات البوبا الفاخرة." },
        { id: "item-28", name: "بوبا كوفي", nameEn: "Coffee Boba", price: 6500, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=400&q=80", description: "عشاق القهوة! مزيج قهوة أموري الغنية بالحليب وحبوب البوبا الشهية." },
        { id: "item-29", name: "كراميل وبندق", nameEn: "Caramel & Hazelnut", price: 6500, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=400&q=80", description: "تناغم مثالي بين حلاوة الكراميل ونكهة البندق المحمص مع البوبا." },
        { id: "item-30", name: "اوريو", nameEn: "Oreo Boba", price: 6500, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "قطع بسكويت الأوريو الشهيرة المطحونة مع الكريمة الطازجة والبوبا." },
        { id: "item-31", name: "بوبا القلقاس", nameEn: "Taro Boba", price: 6500, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "التارو الآسيوي البنفسجي الشهير بطعمه البندق القشدي المميز وحبوب البوبا." },
        { id: "item-32", name: "بوبا كراميل", nameEn: "Caramel Boba", price: 6500, image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=400&q=80", description: "صلصة الكراميل الفاخرة المنسكبة مع الحليب والثلج وكرات البوبا المطاطية." },
        { id: "item-33", name: "بوبا شوكولا", nameEn: "Chocolate Boba", price: 6500, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=400&q=80", description: "مزيج غني من الشوكولاتة البلجيكية الداكنة والحليب الطازج والبوبا." },
        { id: "item-34", name: "بوبا كوكوانت", nameEn: "Coconut Boba", price: 6500, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", description: "نكهة جوز الهند الاستوائي المنعش الممزوج بالكريمة الناعمة والبوبا." }
      ]
    },
    {
      id: "cat-4",
      name: "Coffee & Latte",
      nameAr: "القهوة واللاتيه الساخن",
      icon: "☕",
      items: [
        { id: "item-35", name: "كورتادو", nameEn: "Cortado", price: 4000, image: "https://images.unsplash.com/photo-1510970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80", description: "كميات متساوية من إسبريسو أموري الغني والحليب المبخر الدافئ." },
        { id: "item-36", name: "كابتشينو", nameEn: "Cappuccino", price: 4000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "إسبريسو غني مع حليب ساخن مغطى بطبقة سميكة من الرغوة الحريرية." },
        { id: "item-37", name: "فلات وايت", nameEn: "Flat White", price: 4000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "إسبريسو دبل شوت مع طبقة ناعمة من رغوة الحليب المبخر الصغيرة." },
        { id: "item-38", name: "هوت شوكلت", nameEn: "Hot Chocolate", price: 4000, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80", description: "الشوكولاتة الساخنة الغنية والكريمة والمزينة برشة كاكاو." },
        { id: "item-39", name: "اسبريسو دبل", nameEn: "Espresso Double", price: 4000, image: "https://images.unsplash.com/photo-1510970881699-44a5587cabec?auto=format&fit=crop&w=400&q=80", description: "جرعتين مركزتين من قهوة إسبريسو أموري الفاخرة بطبقة كريمة ذهبية." },
        { id: "item-40", name: "امريكانو", nameEn: "Americano", price: 4000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "إسبريسو غني مخفف بالماء الساخن بنكهة عميقة ورائعة." },
        { id: "item-41", name: "نسكافيه حليب", nameEn: "Nescafe Milk", price: 4000, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80", description: "النسكافيه الكلاسيكي الممزوج مع الحليب المبخر الساخن." },
        { id: "item-42", name: "قهوة تركية", nameEn: "Turkish Coffee", price: 2000, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80", description: "القهوة التركية التقليدية المعدة ببطء وتقدم مع رغوتها الغنية." },
        { id: "item-43", name: "قهوة بندق", nameEn: "Hazelnut Coffee", price: 2000, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=400&q=80", description: "القهوة التركية الدافئة الممزوجة بنكهة البندق المحمص الشهية." },
        { id: "item-44", name: "افكادو", nameEn: "Avocado Latte", price: 4000, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", description: "مزيج دافئ ومبتكر يجمع نعومة الأفوكادو والقهوة الساخنة." },
        { id: "item-45", name: "لاتيه موكا", nameEn: "Latte Mocha", price: 5000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "مزيج متناغم من إسبريسو أموري، الشوكولاتة الغنية، والحليب المبخر." },
        { id: "item-46", name: "وايت موكا", nameEn: "White Mocha", price: 5000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "القهوة الساخنة الممزوجة بصلصة الشوكولاتة البيضاء الفاخرة والحليب الدافئ." },
        { id: "item-47", name: "ماتشا", nameEn: "Matcha Latte", price: 5000, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80", description: "شاي الماتشا الأخضر الياباني الفاخر المحضر مع رغوة الحليب الدافئ." },
        { id: "item-48", name: "كراميل ميكاتو", nameEn: "Caramel Macchiato", price: 5000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "إسبريسو منسكب فوق الفانيلا والحليب الساخن ومزين بخطوط الكراميل." },
        { id: "item-49", name: "سبانش لاتيه", nameEn: "Spanish Latte", price: 5000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80", description: "القهوة الساخنة المحلاة بالحليب المكثف الغني لجرعة حلوة ممتعة." }
      ]
    },
    {
      id: "cat-5",
      name: "Iced Coffee",
      nameAr: "الآيس كوفي",
      icon: "🧊",
      items: [
        { id: "item-50", name: "وايت موكا آيس", nameEn: "Iced White Mocha", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "القهوة الباردة الممزوجة بالشوكولاتة البيضاء والحليب والثلج." },
        { id: "item-51", name: "موكا آيس", nameEn: "Iced Mocha", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "القهوة المثلجة اللذيذة الممزوجة بصلصة الشوكولاتة البلجيكية الغنية." },
        { id: "item-52", name: "ماتشا آيس", nameEn: "Iced Matcha", price: 5000, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80", description: "شاي الماتشا الأخضر الياباني المثلج مع الحليب وقطع الثلج المنعشة." },
        { id: "item-53", name: "هائيلا آيس", nameEn: "Iced Vanilla", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "قهوة إسبريسو مثلجة محلاة بنكهة الفانيلا العطرة الهادئة." },
        { id: "item-54", name: "تيراميسو آيس", nameEn: "Iced Tiramisu", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "مزيج القهوة الباردة المبتكر بنكهة حلى التيراميسو الإيطالي الفاخر." },
        { id: "item-55", name: "كراميل آيس", nameEn: "Iced Caramel", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "القهوة المثلجة الغنية بصوص الكراميل المحلى لمذاق رائع ومنعش." },
        { id: "item-56", name: "سبانيش آيس", nameEn: "Iced Spanish", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "قهوة مثلجة ممتازة محلاة بالحليب المكثف الغني والثلج." },
        { id: "item-57", name: "بلو بيري آيس", nameEn: "Iced Blueberry Coffee", price: 5000, image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80", description: "مزيج استثنائي وفريد يجمع نكهة التوت الأزرق المنعش والقهوة الباردة." }
      ]
    },
    {
      id: "cat-6",
      name: "Frappe",
      nameAr: "فرابيتشينو",
      icon: "🥤",
      items: [
        { id: "item-58", name: "كراميل فرابيتشينو", nameEn: "Caramel Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "مزيج القهوة والحليب والثلج المخفوق مع الكراميل والمغطى بالكريمة." },
        { id: "item-59", name: "موكا فرابيتشينو", nameEn: "Mocha Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "الشوكولاتة الغنية والقهوة والثلج المخفوقة بالكريمة المخفوقة." },
        { id: "item-60", name: "وايت موكا فرابيتشينو", nameEn: "White Mocha Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "الشوكولاتة البيضاء اللذيذة المخفوقة مع القهوة والحليب والثلج." },
        { id: "item-61", name: "فراولة فرابيتشينو", nameEn: "Strawberry Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "فرابيتشينو الفراولة المنعشة الخالية من القهوة والمغطاة بالكريمة." },
        { id: "item-62", name: "بستاشيو فرابيتشينو", nameEn: "Pistachio Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "مذاق الفستق الحلبي الأصلي الفاخر مخفوقاً مع الكريمة والثلج." },
        { id: "item-63", name: "ماتشا فرابيتشينو", nameEn: "Matcha Frappe", price: 6000, image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=400&q=80", description: "الماتشا اليابانية المركزة مع الكريمة الطازجة المخفوقة بالثلج." },
        { id: "item-64", name: "لوتس فرابيتشينو", nameEn: "Lotus Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "بسكويت اللوتس المقرمش وزبدة اللوتس اللذيذة مخفوقة مع الكريمة." },
        { id: "item-65", name: "تيراميسو فرابيتشينو", nameEn: "Tiramisu Frappe", price: 6000, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80", description: "الفرابيتشينو الفاخر بنكهة حلى التيراميسو الإيطالي مع رشة شوكولاتة." }
      ]
    },
    {
      id: "cat-7",
      name: "Milkshake",
      nameAr: "الملك شيك",
      icon: "🍦",
      items: [
        { id: "item-66", name: "لوتس شيك", nameEn: "Lotus Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "حليب مثلج وآيس كريم مخفوق مع بسكويت وزبدة اللوتس البلجيكية." },
        { id: "item-67", name: "اوريو شيك", nameEn: "Oreo Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "الميلك شيك الكلاسيكي المفضل المليء بقطع الأوريو المكسرة الكثيفة." },
        { id: "item-68", name: "فول سوداني شيك", nameEn: "Peanut Butter Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "مزيج كريمي كثيف وممتاز من زبدة الفول السوداني الغنية والآيس كريم." },
        { id: "item-69", name: "مارشميلو شيك", nameEn: "Marshmallow Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك وردي لطيف وحلو المذاق مخفوق مع قطع المارشميلو الناعمة." },
        { id: "item-70", name: "كراميل شيك", nameEn: "Caramel Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "آيس كريم الفانيلا الفاخر المخفوق مع صلصة الكراميل والتايرميسو." },
        { id: "item-71", name: "بلو بيري شيك", nameEn: "Blueberry Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك منعش غني بنكهة التوت الأزرق الطبيعية والآيس كريم." },
        { id: "item-72", name: "فراولة شيك", nameEn: "Strawberry Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "عصير الفراولة الطازجة مع آيس كريم الفانيلا الكريمي المخفوق بدقة." },
        { id: "item-73", name: "نوتيلا شيك", nameEn: "Nutella Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك الشوكولاتة الفاخر المخفوق بصوص النوتيلا الأصلي." },
        { id: "item-74", name: "مكس بيري شيك", nameEn: "Mix Berry Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "مزيج غني من الفواكه الغابية والتوت الأحمر والأزرق والآيس كريم." },
        { id: "item-75", name: "براوني شيك", nameEn: "Brownie Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك كثيف محضر بقطع كعكة البراوني بالشوكولاتة الطازجة." },
        { id: "item-76", name: "بستاشيو شيك", nameEn: "Pistachio Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "مزيج رائع من نكهة الفستق الحلبي وصوص البستاشيو والآيس كريم اللذيذ." },
        { id: "item-77", name: "كندر شيك", nameEn: "Kinder Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك غني ولذيذ للغاية بنكهة شوكولاتة كندر بوينو الشهيرة." },
        { id: "item-78", name: "كوفي شيك", nameEn: "Coffee Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "مزيج رائع لعشاق القهوة يجمع بين نكهة الإسبريسو والآيس كريم البارد." },
        { id: "item-79", name: "مكس شيك", nameEn: "Mix Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك الكوكتيل المميز يجمع نكهات المطعم الشهيرة المخفوقة." },
        { id: "item-80", name: "مكس فروت شيك", nameEn: "Mix Fruit Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "قطع الفواكه الطبيعية المتنوعة ممزوجة مع آيس كريم الفانيلا." },
        { id: "item-81", name: "تارو شيك", nameEn: "Taro Shake", price: 6000, image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80", description: "ميلك شيك التارو البنفسجي الآسيوي المميز بلونه الفريد ومذاقه الرائع." }
      ]
    },
    {
      id: "cat-8",
      name: "Mojito",
      nameAr: "الموهيتو",
      icon: "🍹",
      items: [
        { id: "item-82", name: "بلو هاوي", nameEn: "Blue Hawaii Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مشروب منعش للغاية بنكهة الكوراساو الأزرق والنعناع والليمون مع الصودا." },
        { id: "item-83", name: "فراولة موهيتو", nameEn: "Strawberry Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "حبات الفراولة الطازجة المهروسة مع النعناع والليمون والمياه الفوارة والثلج." },
        { id: "item-84", name: "اناناس موهيتو", nameEn: "Pineapple Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "الأناناس الاستوائي البارد الممزوج بأوراق النعناع والليمون الفوار المنعش." },
        { id: "item-85", name: "مانجو برتقال موهيتو", nameEn: "Mango Orange Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج صيفي رائع يجمع عصير المانجو الغني والبرتقال الحامض والنعناع." },
        { id: "item-86", name: "ليمون نعناع موهيتو", nameEn: "Lemon Mint Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "الموهيتو الكلاسيكي الأصلي من عصير الليمون المنعش وأوراق النعناع الطازجة." },
        { id: "item-87", name: "تفاح كيوي موهيتو", nameEn: "Apple Kiwi Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج منعش وفوق العادة يجمع نكهة التفاح الأخضر والكيوي الطازج الحامض." },
        { id: "item-88", name: "بلاك بيري موهيتو", nameEn: "Blackberry Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "قطع التوت الأسود المهروسة مع الليمون الحامض والنعناع المنعش الفوار." },
        { id: "item-89", name: "مكس بيري موهيتو", nameEn: "Mix Berry Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج عائلي منعش من التوت الأحمر والأسود والأزرق مع أوراق النعناع." },
        { id: "item-90", name: "مكس فروت موهيتو", nameEn: "Mix Fruit Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "قطع الفواكه الطبيعية المتنوعة المغمورة في الصودا الباردة وأوراق النعناع." },
        { id: "item-91", name: "مكس بول موهيتو", nameEn: "Red Bull Mix Mojito", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "جرعة طاقة ممتعة تجمع مشروب الريد بول مع الليمون والنعناع والثلج." }
      ]
    },
    {
      id: "cat-9",
      name: "Natural Juices",
      nameAr: "العصائر الطبيعية",
      icon: "🍊",
      items: [
        { id: "item-92", name: "ليمون نعناع", nameEn: "Lemon Mint Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير الليمون الطازج المعصور مع أوراق النعناع الخضراء المنعشة." },
        { id: "item-93", name: "برتقال نعناع", nameEn: "Orange Mint Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير البرتقال الطازج المحضر يومياً والممزوج بنكهة النعناع الباردة." },
        { id: "item-94", name: "موز حليب", nameEn: "Banana Milk", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "العصير الكلاسيكي المغذي من الموز الطازج والحليب البارد والمحلى." },
        { id: "item-95", name: "موز فراولة", nameEn: "Banana Strawberry Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "المزيج المثالي المفضل من الموز الناعم وحبات الفراولة الحمراء الطازجة." },
        { id: "item-96", name: "برتقال اناناس", nameEn: "Orange Pineapple", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير استوائي منعش يجمع حموضة البرتقال وحلاوة الأناناس الطازج." },
        { id: "item-97", name: "برتقال موز", nameEn: "Orange Banana", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير طاقة ومناعة غني بالألياف من البرتقال المعصور والموز الطازج." },
        { id: "item-98", name: "خوخ طبيعي", nameEn: "Peach Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير الخوخ الصيفي الطازج الغني بنكهته الطبيعية المنعشة والباردة." },
        { id: "item-99", name: "ليمون برتقال", nameEn: "Lemon Orange Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "مزيج حمضيات رائع غني بفيتامين C يجمع الليمون الحامض والبرتقال الحلو." },
        { id: "item-100", name: "ليمون كيوي", nameEn: "Lemon Kiwi Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "مزيج أخضر حامض ومنعش للغاية يجمع الكيوي الطازج وعصير الليمون البارد." },
        { id: "item-101", name: "مانجو طبيعي", nameEn: "Mango Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير المانجو الكثيف والغني بنكهته الاستوائية الأصلية والباردة." },
        { id: "item-102", name: "اناناس طبيعي", nameEn: "Pineapple Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "الأناناس الاستوائي الحلو المعصور والمزين بقطع الثلج المنعشة." },
        { id: "item-103", name: "فراولة طبيعي", nameEn: "Strawberry Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير الفراولة الحمراء الطازجة المعصورة يومياً لتذوق طعم الانتعاش الأصلي." },
        { id: "item-104", name: "بطيخ طبيعي", nameEn: "Watermelon Juice", price: 5000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "عصير البطيخ الصيفي البارد المنعش والمقاوم للحرارة والمصنوع بكل حب." }
      ]
    },
    {
      id: "cat-10",
      name: "Crepe",
      nameAr: "الكريب",
      icon: "🥞",
      items: [
        { id: "item-105", name: "جيلاتو كريب", nameEn: "Gelato Crepe", price: 7000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "الكريب الفرنسي الرقيق والمحشو بكرة آيس كريم الجيلاتو الفاخرة والشوكولاتة." },
        { id: "item-106", name: "مكس كريب", nameEn: "Mix Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "كريب مميز محشو بتشكيلة غنية من صلصات الشوكولاتة المتنوعة واللوتس." },
        { id: "item-107", name: "كريب دبي", nameEn: "Dubai Crepe", price: 7000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "كريب دبي المبتكر المحشو بقطع الكنافة المقرمشة وزبدة الفستق والشوكولاتة." },
        { id: "item-108", name: "نوتيلا كريب", nameEn: "Nutella Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "الكريب الرقيق الكلاسيكي المغطى والمحشو بجرعة سخية من شوكولاتة نوتيلا." },
        { id: "item-109", name: "لوتس كريب", nameEn: "Lotus Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "كريب محشو بزبدة البسكويت البلجيكية اللذيذة ومزين بقطع بسكويت اللوتس." },
        { id: "item-110", name: "فروت كريب", nameEn: "Fruit Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "شرائح الكريب الرقيقة المحشوة بقطع الفواكه الطازجة كالموز والفراولة والكيوي." },
        { id: "item-111", name: "كندر كريب", nameEn: "Kinder Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "كريب غني بصلصة شوكولاتة الكندر وقطع الكندر بوينو الهشة والمقرمشة." },
        { id: "item-112", name: "اوريو كريب", nameEn: "Oreo Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "الكريب المحشو بكريمة الأوريو وفتات البسكويت المقرمش بصلصة الشوكولاتة." },
        { id: "item-113", name: "فوتشيني كريب", nameEn: "Fettuccine Crepe", price: 5000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "كريب مقطع كشرائح الفوتشيني الإيطالية مغطى بصلصات الشوكولاتة والآيس كريم." },
        { id: "item-114", name: "بستاشيو كريب", nameEn: "Pistachio Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "الكريب الفرنسي الرقيق المغطى بزبدة الفستق الحلبي الأصلي الفاخرة ورشة فستق." },
        { id: "item-115", name: "سوشي كريب", nameEn: "Sushi Crepe", price: 6000, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=400&q=80", description: "لفائف الكريب الرائعة المقطعة مثل قطع السوشي والمحشوة بالكريمة والفاكهة." }
      ]
    },
    {
      id: "cat-11",
      name: "Pancake",
      nameAr: "البانكيك",
      icon: "🥞",
      items: [
        { id: "item-116", name: "بانكيك مكس", nameEn: "Mix Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "طبقات البانكيك الهشة المحشوة والمغطاة بصلصات الشوكولاتة المتنوعة." },
        { id: "item-117", name: "دبي بان كيك", nameEn: "Dubai Pancake", price: 7500, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "طبقات البانكيك الفاخرة المحشوة بالكنافة المقرمشة وزبدة الفستق الحلبي اللذيذة." },
        { id: "item-118", name: "نوتيلا بانكيك", nameEn: "Nutella Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "قطع البانكيك الدائرية الهشة المغطاة بشوكولاتة نوتيلا الغنية وحبات الفراولة." },
        { id: "item-119", name: "لوتس بانكيك", nameEn: "Lotus Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "طبقات البانكيك الهشة المغطاة بكريمة وزبدة بسكويت اللوتس وحبات البسكويت." },
        { id: "item-120", name: "كندر بانكيك", nameEn: "Kinder Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "البانكيك الهش المغطى بالكامل بصلصة شوكولاتة الكندر وقطع البوينو الهشة." },
        { id: "item-121", name: "بستاشيو بانكيك", nameEn: "Pistachio Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "قطع البانكيك اللذيذة والمحشوة بصلصة الفستق الحلبي الأصلي الفاخر ورشة مكسرات." },
        { id: "item-122", name: "جيلاتو بانكيك", nameEn: "Gelato Pancake", price: 7000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "طبقات البانكيك الساخنة تعلوها كرة باردة من آيس كريم الجيلاتو الفخم والصوص." },
        { id: "item-123", name: "اوريو بانكيك", nameEn: "Oreo Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "بانكيك مغطى بصلصة الشوكولاتة البيضاء والداكنة الكثيفة مع فتات الأوريو اللذيذ." }
      ]
    },
    {
      id: "cat-12",
      name: "Bubble Waffle",
      nameAr: "الببلي وافل",
      icon: "🧇",
      items: [
        { id: "item-124", name: "وافل مكس", nameEn: "Mix Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الفقاعات الهش والساخن المغطى بتشكيلة من صلصات الشوكولاتة المميزة." },
        { id: "item-125", name: "جيلاتو وافل", nameEn: "Gelato Waffle", price: 7000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الفقاعات المقرمش يقدم مع كرة من آيس كريم جيلاتو أموري الغني." },
        { id: "item-126", name: "وافل فواكه", nameEn: "Fruit Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الببلي الفاخر المزين بقطع الفواكه الاستوائية الطازجة والعسل والصوص." },
        { id: "item-127", name: "وافل لوتس", nameEn: "Lotus Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الببلي المقرمش المغطى بزبدة وبسكويت اللوتس البلجيكية اللذيذة." },
        { id: "item-128", name: "وافل نوتيلا", nameEn: "Nutella Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الفقاعات الكلاسيكي المحضر بالطلب والمزين بصوص النوتيلا الغنية." },
        { id: "item-129", name: "وافل بستاشيو", nameEn: "Pistachio Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الببلي الساخن بصلصة الفستق الحلبي الأصلي الفاخرة ورشة مكسرات." },
        { id: "item-130", name: "وافل كندر", nameEn: "Kinder Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الببلي الهش المغطى بصوص شوكولاتة الكندر الناعمة وقطع البوينو." },
        { id: "item-131", name: "وافل اوريو", nameEn: "Oreo Waffle", price: 6000, image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80", description: "وافل الببلي الشهير المغطى بالشوكولاتة وكريمة الأوريو وبسكويت الأوريو المطحون." }
      ]
    },
    {
      id: "cat-13",
      name: "Sweet Ice Cream",
      nameAr: "سويت ايسكريم",
      icon: "🍨",
      items: [
        { id: "item-132", name: "دبي بوكس", nameEn: "Dubai Box", price: 7500, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "بوكس السويت الممتاز المليء بقطع الجبن، الكنافة المقرمشة، الفستق، والآيس كريم." },
        { id: "item-133", name: "بينوفي", nameEn: "Banoffee", price: 7500, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "حلى الموز والكراميل الإنجليزي التقليدي مع الآيس كريم والبسكويت الناعم." },
        { id: "item-134", name: "فروست ايس كريم", nameEn: "Frost Ice Cream", price: 7000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "آيس كريم الفانيلا الغني الممزوج بقطع الكيك الطازجة وصوص الكرز الحامض." },
        { id: "item-135", name: "فروت سلطة ايس كريم", nameEn: "Fruit Salad Ice Cream", price: 7000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "قطع فواكه الموسم الطازجة والمتنوعة مع بولات آيس كريم الجيلاتو الغنية." },
        { id: "item-136", name: "تيراميسو كيك", nameEn: "Tiramisu Cake", price: 7000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "كيك التيراميسو الإيطالي بآيس كريم القهوة والكرانشي وبودرة الكاكاو الفاخرة." },
        { id: "item-137", name: "ستروبري اوفرلود", nameEn: "Strawberry Overload", price: 7000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "عشاق الفراولة! كعكة مع الآيس كريم مغطاة بالكامل بقطع وصوص الفراولة الطازجة." },
        { id: "item-138", name: "ميلانو", nameEn: "Milano Dessert", price: 7500, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "قطع كعكة البراوني الساخنة مع بولات الآيس كريم وصوص الشوكولاتة البلجيكية." }
      ]
    },
    {
      id: "cat-14",
      name: "Amore Cup",
      nameAr: "اموري كب",
      icon: "🧁",
      items: [
        { id: "item-139", name: "اموري كب براون", nameEn: "Amore Cup Brown", price: 5000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "أكواب أموري المميزة بقطع كيك البراوني الداكنة والآيس كريم الغني." },
        { id: "item-140", name: "اموري كب وايت", nameEn: "Amore Cup White", price: 5000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "كوب أموري الخاص بقطع الكيك الأبيض اللذيذة والآيس كريم والشوكولاتة البيضاء." },
        { id: "item-141", name: "بودينج دبي", nameEn: "Dubai Pudding", price: 5000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "البودينج الكريمي اللذيذ الممزوج بالكنافة المقرمشة وصوص الفستق الذهبي." },
        { id: "item-142", name: "بروكيز كب", nameEn: "Brookie's Cup", price: 5000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "مزيج غني يجمع بين البراوني والكوكيز (بروكيز) اللذيذ في كوب مع الآيس كريم." },
        { id: "item-143", name: "فروت ايس كب", nameEn: "Fruit Ice Cup", price: 5000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "قطع الفواكه المنعشة والباردة مع الآيس كريم الخفيف وصوص الفراولة اللذيذ." },
        { id: "item-144", name: "تيراميسو كب", nameEn: "Tiramisu Cup", price: 5000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "حلى التيراميسو الغني بنكهة إسبريسو أموري الفاخر في كوب كريمي مميز." }
      ]
    },
    {
      id: "cat-15",
      name: "Sweets",
      nameAr: "الحلويات اللذيذة",
      icon: "🍰",
      items: [
        { id: "item-145", name: "سان سيباستيان", nameEn: "San Sebastian", price: 6000, image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=400&q=80", description: "كيكة الجبن الباسكية الكريمية الغنية المخبوزة بعناية وتقدم مع صوص الشوكولاتة الساخنة." },
        { id: "item-146", name: "جيز كيك", nameEn: "Cheesecake", price: 6000, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80", description: "كيكة الجبن الباردة الغنية بنكهات من اختيارك (فراولة، أوريو، لوتس، أو فستق)." },
        { id: "item-147", name: "مولتن كيك", nameEn: "Molten Lava Cake", price: 6000, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80", description: "كيكة الشوكولاتة الساخنة المحشوة بالشوكولاتة الذائبة وتقدم مع كرة آيس كريم فانيليا باردة." },
        { id: "item-148", name: "فرنش توست", nameEn: "French Toast", price: 6000, image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80", description: "توست فرنسي مقرمش ودافئ محمص بالزبدة ويقدم مع الآيس كريم والشراب وصوص الشوكولاتة." },
        { id: "item-149", name: "براوني ديسيرت", nameEn: "Brownie Dessert", price: 6000, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80", description: "قطعة من كعكة البراوني الغنية بالشوكولاتة مع الجوز المقرمش والآيس كريم البارد." },
        { id: "item-150", name: "ديسباسيتو", nameEn: "Despacito", price: 6000, image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=400&q=80", description: "كيكة الشوكولاتة البرازيلية الشهيرة المشربة بالحليب بنكهات من اختيارك (نوتيلا، كندر، فستق، لوتس، أوريو)." },
        { id: "item-151", name: "كوكيز أموري", nameEn: "Amore Cookies", price: 3000, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80", description: "بسكويت الكوكيز المحضر منزلياً بنكهات لذيذة (مونستر، نيويورك، كندر، كوكيز دبي، ريد فيلفيت)." },
        { id: "item-152", name: "ميني دونات مكس", nameEn: "Mini Donuts Mix", price: 5000, image: "https://images.unsplash.com/photo-1533089860860-af0b48d82b0a?auto=format&fit=crop&w=400&q=80", description: "أربع قطع من الدونات الصغيرة اللذيذة مغطاة بصلصات ونكهات متنوعة." }
      ]
    },
    {
      id: "cat-16",
      name: "Cocktails",
      nameAr: "الكوكتيل",
      icon: "🍹",
      items: [
        { id: "item-153", name: "اموري VIP", nameEn: "Amore VIP", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج الملوك من الفواكه المشكلة، المانجو، الآيس كريم الفاخر، وعسل النحل الطبيعي." },
        { id: "item-153b", name: "حايت", nameEn: "Hayte", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "كوكتيل منعش وخفيف من عصائر الفواكه الطازجة مع الليمون والمانجو البارد." },
        { id: "item-154", name: "فانو كوكتيل", nameEn: "Fano Cocktail", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "الأناناس الاستوائي البارد الممزوج بقطع الفواكه وعسل النحل الأصلي." },
        { id: "item-155", name: "فيكتوريا", nameEn: "Victoria", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج رائع وذو نكهة مخملية يجمع الفستق الحلبي، جوز الهند، وشوكولاتة كندر." },
        { id: "item-156", name: "روما", nameEn: "Roma", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "رحلة من الانتعاش تجمع عصير البرتقال، الموز، المانجو، والفراولة الطازجة." },
        { id: "item-157", name: "سبيشل فور", nameEn: "Special Four", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج استثنائي من الكيوي المنعش، المكس فروت، زبدة اللوتس، وبسكويت اللوتس مع الآيس كريم." },
        { id: "item-158", name: "كوكتيل دايت", nameEn: "Diet Cocktail", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج خفيف وصحي من الليمون الحامض والتوت المشكل الخالي من السكر الزائد." },
        { id: "item-159", name: "اركولانو", nameEn: "Ercolano", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "كوكتيل كلاسيكي غني بقطع الجوز المحمص، الكراميل، العصير الطازج، وعسل النحل." },
        { id: "item-160", name: "ايمولا", nameEn: "Imola", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج المكسرات الفاخر من الجوز والفستق مع تدرج النكهات المركزة والسيرب." },
        { id: "item-161", name: "اموري كوكتيل", nameEn: "Amore Cocktail", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "كوكتيل المطعم المميز من المانجو والموز والفراولة والآيس كريم والكريمة الكثيفة." },
        { id: "item-162", name: "لاتينا", nameEn: "Latina", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "نكهات لاتينية منعشة تضم المانجو الغني، الرمان، جوز الهند، ورذاذ الكاكاو." },
        { id: "item-163", name: "استي", nameEn: "Asti", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "توازن حمضي وحلو يجمع عصير المانجو والرمان المركز والمكس فروت." },
        { id: "item-164", name: "فورلي", nameEn: "Forli", price: 6000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج غني بقطع الجوز والزبيب مع الفواكه الطازجة كالمانجو والفراولة." },
        { id: "item-165", name: "ايلندس", nameEn: "Islands", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مذاق جزر استوائية يجمع حلاوة المانجو ونعومة الفستق وانتعاش الليمون." },
        { id: "item-166", name: "التامور", nameEn: "Altamur", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مشروب مبتكر يجمع الموز، الجوز، العسل الطبيعي، والنكهة الغازية المنعشة." },
        { id: "item-167", name: "سينا", nameEn: "Siena", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "نكهة سريعة ومميزة تجمع الجوز المحمص مع الحليب والكريمة واللمسة الإيطالية." },
        { id: "item-168", name: "فيتامين C كوكتيل", nameEn: "Vitamin C Cocktail", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "قنبلة الفيتامينات والحمضيات المنعشة من البرتقال، المانجو، الليمون، والكيوي." },
        { id: "item-169", name: "ريدجو", nameEn: "Reggio", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "كوكتيل غني وحلو المذاق من شوكولاتة نوتيلا، الجوز، وصوص الشوكولاتة." },
        { id: "item-170", name: "استوائي كوكتيل", nameEn: "Tropical Cocktail", price: 5000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80", description: "مزيج منعش من الفواكه الاستوائية الطازجة المانجو والكيوي والأناناس البارد." }
      ]
    },
    {
      id: "cat-17",
      name: "Smoothies",
      nameAr: "السموذي",
      icon: "🥤",
      items: [
        { id: "item-171", name: "سموذي شوكولا", nameEn: "Chocolate Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "سموذي كثيف ولذيذ من الموز، زبدة الفستق، الحليب، وبودرة الكاكاو الفاخرة." },
        { id: "item-172", name: "سموذي موز وفراولة", nameEn: "Banana Strawberry Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "مزيج كلاسيكي محبب من الفراولة الطازجة والموز والحليب البارد." },
        { id: "item-173", name: "سموذي تمر وموز", nameEn: "Date Banana Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "مشروب طاقة وصحي يجمع الموز الطازج والتمر وحبات الجوز ورشة القرفة." },
        { id: "item-174", name: "سموذي أناناس", nameEn: "Pineapple Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "سموذي الأناناس الاستوائي البارد الممزوج بالتفاح الأخضر الحامض والبرتقال." },
        { id: "item-175", name: "سموذي خوخ وفراولة", nameEn: "Peach Strawberry Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "مزيج صيفي منعش وحلو يجمع نكهات الخوخ والفراولة المهروسة مع الثلج." },
        { id: "item-176", name: "سموذي مانجو وخوخ", nameEn: "Mango Peach Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "المانجو الغنية مع الخوخ والموز الطازج مخفوقين في سموذي كريمي بارد." },
        { id: "item-177", name: "سموذي بلوبيري وموز", nameEn: "Blueberry Banana Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?auto=format&fit=crop&w=400&q=80", description: "التوت البري الأزرق، الموز، الفراولة، والحليب البارد محلى بعسل النحل." },
        { id: "item-178", name: "سموذي أفوكادو وتمر", nameEn: "Avocado Date Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80", description: "سموذي كريمي مغذٍ وصحي للغاية من الأفوكادو، التمر، وحليب اللوز." },
        { id: "item-179", name: "سموذي فراولة وأناناس", nameEn: "Strawberry Pineapple Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "المانجو الاستوائية والأناناس الحامض مع الفراولة المنعشة المحلاة بالعسل." },
        { id: "item-180", name: "سموذي ليمون وتفاح", nameEn: "Lemon Apple Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "انتعاش مطلق يجمع عصير الليمون، التفاح الأخضر، والكيوي مع الثلج المبشور." },
        { id: "item-180b", name: "سموذي لوتس", nameEn: "Lotus Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "سموذي كريمي غني بنكهة بسكويت اللوتس البلجيكي المميز مع الحليب البارد." },
        { id: "item-180c", name: "سموذي فراولة كيوي", nameEn: "Strawberry Kiwi Smoothie", price: 6000, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=400&q=80", description: "مزيج حامض وحلو منعش يجمع الفراولة الطازجة والكيوي الأخضر مع العسل الطبيعي." }
      ]
    },
    {
      id: "cat-18",
      name: "Mini Pancake",
      nameAr: "المني بانكيك",
      icon: "🥞",
      items: [
        { id: "item-181", name: "ميني بستاشيو", nameEn: "Mini Pistachio Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "16 قطعة من الميني بانكيك الهشة المغطاة بالكامل بصوص الفستق الحلبي الفاخر." },
        { id: "item-182", name: "ميني فواكه", nameEn: "Mini Fruits Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "قطع البانكيك الصغيرة تقدم ساخنة مع تشكيلة من قطع الفواكه الموسمية والصوص." },
        { id: "item-183", name: "ميني نوتيلا", nameEn: "Mini Nutella Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "الميني بانكيك الفرنسي الصغير والمغطى بصلصة شوكولاتة نوتيلا الغنية." },
        { id: "item-184", name: "ميني اوريو", nameEn: "Mini Oreo Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "بانكيك صغير ساخن مغطى بالشوكولاتة البيضاء والداكنة وبسكويت أوريو المطحون." },
        { id: "item-185", name: "ميني مكس بانكيك", nameEn: "Mini Mix Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "أكواب البانكيك الصغيرة مع تشكيلة رائعة ومزينة بالصلصات البيضاء والداكنة والكراميل." },
        { id: "item-186", name: "ميني لوتس", nameEn: "Mini Lotus Pancake", price: 6000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "قطع الميني بانكيك الدائرية المقرمشة المغطاة بصلصة وزبدة وبسكويت اللوتس." }
      ]
    },
    {
      id: "cat-19",
      name: "Magic Cake",
      nameAr: "الماجك كيك",
      icon: "🧁",
      items: [
        { id: "item-187", name: "ماجك كيك لوتس", nameEn: "Magic Cake Lotus", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "كيكة ماجك السحرية الدافئة والغنية بزبدة وبسكويت اللوتس اللذيذ والآيس كريم." },
        { id: "item-188", name: "ماجك كيك مكسرات", nameEn: "Magic Cake Nuts", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "كعكة الشوكولاتة السحرية المحشوة والمغطاة بالمكسرات المحمصة والجوز واللوز." },
        { id: "item-189", name: "ماجك كيك شوكولا", nameEn: "Magic Cake Chocolate", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "الكيكة السحرية الدافئة الغنية بالشوكولاتة البلجيكية الذائبة الكثيفة والآيس كريم." },
        { id: "item-190", name: "ماجك كيك مكس", nameEn: "Magic Cake Mix", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "مزيج سحري من الكيك المحشو بصلصات الشوكولاتة البيضاء والداكنة والكراميل." },
        { id: "item-191", name: "ماجك كيك اوريو", nameEn: "Magic Cake Oreo", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "كعكة الأوريو السحرية المحشوة بكريمة الأوريو وقطع البسكويت مع الآيس كريم." },
        { id: "item-192", name: "ماجك كيك كراميل", nameEn: "Magic Cake Caramel", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "الكيكة السحرية اللذيذة بصوص الكراميل المحلى والمزين بالمكسرات الخفيفة والآيس كريم." },
        { id: "item-193", name: "ماجك كيك فراولة", nameEn: "Magic Cake Strawberry", price: 6000, image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80", description: "كيكة ماجك السحرية الدافئة المحشوة بقطع الفراولة ومغطاة بصلصة الفراولة الحلوة." }
      ]
    },
    {
      id: "cat-20",
      name: "Ice Cream",
      nameAr: "الآيسكريم والجيلاتو",
      icon: "🍨",
      items: [
        { id: "item-194", name: "جيلاتو أموري (صغير)", nameEn: "Gelato (Small)", price: 3000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "كوب صغير من آيس كريم الجيلاتو الإيطالي الطبيعي الفاخر بنكهاتك المفضلة." },
        { id: "item-195", name: "جيلاتو أموري (وسط)", nameEn: "Gelato (Medium)", price: 4000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "كوب متوسط الحجم من آيس كريم الجيلاتو الإيطالي الغني بالنكهة الطبيعية." },
        { id: "item-196", name: "جيلاتو أموري (كبير)", nameEn: "Gelato (Large)", price: 5000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "كوب كبير الحجم وممتع لتذوق أفضل نكهات الجيلاتو الطبيعية المنعشة." },
        { id: "item-197", name: "مكس جيلاتو ايسكريم", nameEn: "Mix Gelato Ice Cream", price: 5000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "آيس كريم الجيلاتو الممتاز المزين بقطع الفواكه وصوص الشوكولاتة الفخم." },
        { id: "item-198", name: "آيس كريم سوفت (صغير)", nameEn: "Soft Ice Cream (Small)", price: 3000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "آيس كريم سوفت الكريمي الناعم والبارد بالحجم الصغير اللذيذ." },
        { id: "item-199", name: "آيس كريم سوفت (وسط)", nameEn: "Soft Ice Cream (Medium)", price: 4000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "كوب متوسط من آيس كريم السوفت الناعم والمزين بصلصة الشوكولاتة." },
        { id: "item-200", name: "آيس كريم سوفت (كبير)", nameEn: "Soft Ice Cream (Large)", price: 5000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "كوب كبير ومشبع من آيس كريم السوفت الناعم مع رذاذ من صوص الفواكه." },
        { id: "item-201", name: "كوكيز سوفت", nameEn: "Cookies Soft Ice Cream", price: 5000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "مزيج رائع يجمع بسكويت الكوكيز المقرمش المفتت مع آيس كريم السوفت الناعم." },
        { id: "item-202", name: "ببلز ايسكريم", nameEn: "Bubbles Ice Cream", price: 5000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "آيس كريم السوفت الكريمي المزين بكرات بوبا الفواكه الشهية التي تنفجر بالنكهة." }
      ]
    },
    {
      id: "cat-21",
      name: "Amore Boxes",
      nameAr: "بوكسات اموري",
      icon: "🎁",
      items: [
        { id: "item-203", name: "اموري بوكس", nameEn: "Amore Box", price: 15000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "البوكس الفاخر يجمع كوكيز، وافل، نوتيلا، ميني بانكيك، كب شوكولاتة استوائية، وفواكه طازجة." },
        { id: "item-204", name: "هابي فاميلي بوكس", nameEn: "Happy Family Box", price: 20000, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80", description: "البوكس العائلي الكبير يحتوي على بستاشيو كب، كوكوانت، فراولة، كريب، كروب، وصوصات شوكولاتة وفواكه." },
        { id: "item-205", name: "ميني بانكيك بوكس", nameEn: "Mini Pancake Box", price: 20000, image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80", description: "بوكس المشاركة المذهل يحتوي على 36 قطعة ميني بانكيك بنكهات وصوصات مختلفة." },
        { id: "item-206", name: "بوكس العصائر", nameEn: "Juices Box", price: 30000, image: "https://images.unsplash.com/photo-1621263764227-df79ab4e9f78?auto=format&fit=crop&w=400&q=80", description: "الحل الأمثل للحفلات! تشكيلة بوكس العصائر الطبيعية المكونة من 8 زجاجات عصائر متنوعة طازجة." }
      ]
    }
  ]
};

// =============================================
// Firebase Setup
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC108vaFLRZZwHXQImHKed2dH2fdfR3YSo",
  authDomain: "amoremenu.firebaseapp.com",
  databaseURL: "https://amoremenu-default-rtdb.firebaseio.com",
  projectId: "amoremenu",
  storageBucket: "amoremenu.firebasestorage.app",
  messagingSenderId: "321391336869",
  appId: "1:321391336869:web:14a8ef976ccb0578049c4c",
  measurementId: "G-E555PV8MHJ",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

// =============================================
// Storage Manager (Firebase Realtime Database)
// =============================================

const Storage = {
  AUTH_KEY: 'amore_auth',
  SESSION_KEY: 'amore_session',

  // --- حفظ واسترجاع المنيو من Firebase ---

  async saveMenu(data) {
    try {
      await set(ref(db, 'menu'), data);
      window.dispatchEvent(new Event('storage-menu-updated'));
    } catch(e) {
      console.error("Firebase saveMenu error:", e);
    }
  },

  async getMenuAsync() {
    try {
      const snapshot = await get(ref(db, 'menu'));
      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch(e) {
      console.error("Firebase getMenu error:", e);
    }
    // لو ما في بيانات بالـ Firebase، ارفع البيانات الافتراضية
    await this.saveMenu(DEFAULT_MENU_DATA);
    return DEFAULT_MENU_DATA;
  },

  // نسخة متزامنة (تقرأ من cache محلي مؤقت)
  _menuCache: null,

  getMenu() {
    return this._menuCache || DEFAULT_MENU_DATA;
  },

  // استمع للتغييرات الفورية من Firebase
  listenToMenu(callback) {
    onValue(ref(db, 'menu'), (snapshot) => {
      if (snapshot.exists()) {
        this._menuCache = snapshot.val();
      } else {
        this._menuCache = DEFAULT_MENU_DATA;
      }
      if (callback) callback(this._menuCache);
    });
  },

  async resetMenu() {
    await this.saveMenu(DEFAULT_MENU_DATA);
    return DEFAULT_MENU_DATA;
  },

  // --- Auth (تبقى محلية بالمتصفح) ---

  getAuth() {
    const stored = localStorage.getItem(this.AUTH_KEY);
    if (stored) {
      try { return JSON.parse(stored); }
      catch(e) {}
    }
    const defaultAuth = { username: 'admin', password: 'amore2024' };
    this.saveAuth(defaultAuth);
    return defaultAuth;
  },

  saveAuth(auth) {
    localStorage.setItem(this.AUTH_KEY, JSON.stringify(auth));
  },

  setSession(val) {
    if (val) {
      sessionStorage.setItem(this.SESSION_KEY, 'true');
      localStorage.setItem(this.SESSION_KEY + '_persist', 'true');
    } else {
      sessionStorage.removeItem(this.SESSION_KEY);
      localStorage.removeItem(this.SESSION_KEY + '_persist');
    }
  },

  isLoggedIn() {
    return sessionStorage.getItem(this.SESSION_KEY) === 'true' ||
           localStorage.getItem(this.SESSION_KEY + '_persist') === 'true';
  },

  logout() {
    this.setSession(false);
  },

  generateId() {
    return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  },

  // --- CRUD الأقسام ---

  async addCategory(name, nameAr, icon) {
    const menu = this.getMenu();
    const newCat = {
      id: 'cat-' + this.generateId(),
      name: name || 'New Category',
      nameAr: nameAr || 'قسم جديد',
      icon: icon || '🍔',
      items: []
    };
    menu.categories.push(newCat);
    await this.saveMenu(menu);
    return newCat;
  },

  async updateCategory(catId, updatedData) {
    const menu = this.getMenu();
    const cat = menu.categories.find(c => c.id === catId);
    if (cat) {
      cat.name = updatedData.name !== undefined ? updatedData.name : cat.name;
      cat.nameAr = updatedData.nameAr !== undefined ? updatedData.nameAr : cat.nameAr;
      cat.icon = updatedData.icon !== undefined ? updatedData.icon : cat.icon;
      await this.saveMenu(menu);
      return true;
    }
    return false;
  },

  async deleteCategory(catId) {
    const menu = this.getMenu();
    const index = menu.categories.findIndex(c => c.id === catId);
    if (index !== -1) {
      menu.categories.splice(index, 1);
      await this.saveMenu(menu);
      return true;
    }
    return false;
  },

  // --- CRUD المنتجات ---

  async addItem(catId, itemData) {
    const menu = this.getMenu();
    const cat = menu.categories.find(c => c.id === catId);
    if (cat) {
      const newItem = {
        id: 'item-' + this.generateId(),
        name: itemData.nameAr || itemData.name || 'صنف جديد',
        nameEn: itemData.nameEn || itemData.name || 'New Item',
        price: Number(itemData.price) || 0,
        image: itemData.image || null,
        description: itemData.description || ''
      };
      if (!cat.items) cat.items = [];
      cat.items.push(newItem);
      await this.saveMenu(menu);
      return newItem;
    }
    return null;
  },

  async updateItem(itemId, updatedData) {
    const menu = this.getMenu();
    for (let cat of menu.categories) {
      if (!cat.items) continue;
      const item = cat.items.find(i => i.id === itemId);
      if (item) {
        item.name = updatedData.name !== undefined ? updatedData.name : item.name;
        item.nameEn = updatedData.nameEn !== undefined ? updatedData.nameEn : item.nameEn;
        item.price = updatedData.price !== undefined ? Number(updatedData.price) : item.price;
        item.image = updatedData.image !== undefined ? updatedData.image : item.image;
        item.description = updatedData.description !== undefined ? updatedData.description : item.description;

        if (updatedData.catId && updatedData.catId !== cat.id) {
          const targetCat = menu.categories.find(c => c.id === updatedData.catId);
          if (targetCat) {
            cat.items = cat.items.filter(i => i.id !== itemId);
            if (!targetCat.items) targetCat.items = [];
            targetCat.items.push(item);
          }
        }

        await this.saveMenu(menu);
        return true;
      }
    }
    return false;
  },

  async deleteItem(itemId) {
    const menu = this.getMenu();
    for (let cat of menu.categories) {
      if (!cat.items) continue;
      const index = cat.items.findIndex(i => i.id === itemId);
      if (index !== -1) {
        cat.items.splice(index, 1);
        await this.saveMenu(menu);
        return true;
      }
    }
    return false;
  },

  // --- إعدادات المطعم ---

  async updateRestaurantSettings(settingsData) {
    const menu = this.getMenu();
    menu.restaurant.name = settingsData.name || menu.restaurant.name;
    menu.restaurant.nameAr = settingsData.nameAr || menu.restaurant.nameAr;
    menu.restaurant.slogan = settingsData.slogan || menu.restaurant.slogan;
    menu.restaurant.sloganAr = settingsData.sloganAr || menu.restaurant.sloganAr;
    menu.restaurant.branches = settingsData.branches !== undefined ? settingsData.branches : menu.restaurant.branches;
    menu.restaurant.instagram = settingsData.instagram !== undefined ? settingsData.instagram : menu.restaurant.instagram;
    menu.restaurant.facebook = settingsData.facebook !== undefined ? settingsData.facebook : menu.restaurant.facebook;
    await this.saveMenu(menu);
    return menu.restaurant;
  }
};

/**
 * MOCHA CAFE – Menu Data & Interactions
 * Real prices from Mocha Cafe menu | Images via free CDN
 */

'use strict';

/* ─────────────────────────────────────────────────────────
   MENU DATA  (items include: name, desc, ingredients, price, badge, img)
   All prices in EGP – taken from the real Mocha Cafe menu
───────────────────────────────────────────────────────── */
const menuData = {

    /* ════════════════════ HOT DRINKS ════════════════════ */
    'hot-drinks': {
        label: 'Hot Drinks',
        labelAr: 'المشروبات الساخنة',
        icon: 'fa-mug-hot',
        heroImg: 'images/hot_drinks.png',
        items: [
            {
                name: 'شاى ',
                price: '20',
                badge: 'popular',
                img: 'images/3.png'
            },
            {
                name: 'شاى احمد تى فليفر',

                price: '30',
                badge: 'popular',
                img: 'images/3.png'
            },
            {
                name: 'شاى احمد تي',

                price: '20',
                badge: 'popular',
                img: 'images/3.png'
            },
            {
                name: 'شاى اخضر',
                price: '20',
                badge: 'popular',
                img: 'images/4.png'
            },
            {
                name: 'شاى بلبن',
                price: '35',
                badge: 'popular',
                img: 'images/5.png'
            },
            {
                name: 'شاى كرك',
                price: '35',
                badge: 'popular',
                img: 'images/6.png'
            },
            {
                name: 'كركريه',
                price: '20',
                badge: 'popular',
                img: 'images/7.png'
            },
            {
                name: 'ليمون',
                price: '20',
                badge: 'popular',
                img: 'images/8.png'
            },
            {
                name: 'نعناع',
                price: '20',
                badge: 'popular',
                img: 'images/9.png'
            },
            {
                name: 'ينسون',
                price: '20',
                badge: 'popular',
                img: 'images/56.jpg'
            },
            {
                name: 'زنجبيل',
                price: '20',
                badge: 'popular',
                img: 'images/55.jpg'
            },
            {
                name: 'حلبه ',
                price: '25',
                badge: 'popular',
                img: 'images/54.jpg'
            },
            {
                name: 'قرفه ',
                price: '25',
                badge: 'popular',
                img: 'images/53.jpg'
            },
            {
                name: 'قرفه حليب ',
                price: '30',
                badge: 'popular',
                img: 'images/52.jpg'
            },
            {
                name: 'قرفه زنجبيل',
                price: '30',
                badge: 'popular',
                img: 'images/51.jpg'
            },
            {
                name: 'فولو كوكتيل ',
                price: '50',
                badge: 'popular',
                img: 'images/50.jpg'
            },

            {
                name: 'كوكتيل اعشاب',
                price: '40',
                badge: 'popular',
                img: 'images/49.jpg'
            },
            {
                name: 'هوت سيدر',
                price: '45',
                badge: 'popular',
                img: 'images/12.png'
            },
            {
                name: 'سحلب ساده',
                price: '40',
                badge: 'popular',
                img: 'images/13.png'
            },
            {
                name: 'سحلب شوكليت',
                price: '50',
                badge: 'popular',
                img: 'images/14.png'
            },
            {
                name: 'سحلب فواكه',
                price: '60',
                badge: 'popular',
                img: 'images/15.png'
            },
            {
                name: 'سحلب موكا',
                price: '70',
                badge: 'popular',
                img: 'images/16.png'
            },
             {
                name: 'سحلب شوكليت وايت مكس ',
                price: '75',
                badge: 'popular',
                img: 'images/16.png'
            },
            {
                name: 'سحلب مكس فوكه',
                price: '85',
                badge: 'popular',
                img: 'images/16.png'
            },
            {
                name: 'سحلب شوكليت وايت مكس ',
                price: '75',
                badge: 'popular',
                img: 'images/16.png'
            },
            {
                name: 'شاي براد ',
                price: '45',
                badge: 'popular',
                img: 'images/48.jpg'
            },
            {
                name: 'براد شاي زرده ',
                price: '45',
                badge: 'popular',
                img: 'images/47.jpg'
            },
            {
                name: 'فولو كوكتيل ',
                price: '45',
                badge: 'popular',
                img: 'images/00.1.jpg'
            },

        ]
    },
    'coffe': {
        label: 'coffe',
        labelAr: 'قهوى',
        icon: 'fa-mug-hot',
        heroImg: 'images/hero2.png',
        items: [
            {
                name: 'قهوى تركى',
                price: '25',
                badge: 'popular',
                img: 'images/17.jpg'
            },
            {
                name: 'قهوه اسبيشال',
                price: '30',
                badge: 'popular',
                img: 'images/18.jpg'
            },
            {
                name: 'قهوه تركى دبل',
                price: '40',
                badge: 'popular',
                img: 'images/19.jpg'
            },
            {
                name: 'قهوه تركى اسبيشال دبل',
                price: '50',
                badge: 'popular',
                img: 'images/19.jpg'
            },

            {
                name: 'قهوه الترا موكا',
                price: '40',
                badge: 'popular',
                img: 'images/20.jpg'
            },
            {
                name: 'قهوه فرنساوى',
                price: '50',
                badge: 'popular',
                img: 'images/21.jpg'
            },
            {
                name: 'قهوى بندق',
                price: '50',
                badge: 'popular',
                img: 'images/22.jpg'
            },
            {
                name: 'قهوه بندق دبل',
                price: '20',
                badge: 'popular',
                img: 'images/23.jpg'
            },
            {
                name: 'قهوى نوتيلا',
                price: '50',
                badge: 'popular',
                img: 'images/24.jpg'
            },
            {
                name: 'تركى نوتيلا دبل',
                price: '75',
                badge: 'popular',
                img: 'images/25.jpg'
            },
            {
                name: 'تركى نوتيلا سنجل',
                price: '40',
                badge: 'popular',
                img: 'images/26.jpg'
            },
            {
                name: 'قهوه فرنساوى سنجل',
                price: '35',
                badge: 'popular',
                img: 'images/27.jpg'
            },


        ]
    },
    'ESPRESSO': {
        label: 'ESPRESSO',
        labelAr: 'قهوى',
        icon: 'fa-mug-hot',
        heroImg: 'images/hero2.png',
        items: [
            {
                name: 'اسبرسو سنجل',
                price: '30',
                badge: 'popular',
                img: 'images/28.jpg'
            },
            {
                name: 'اسبرسو دبل',
                price: '45',
                badge: 'popular',
                img: 'images/29.jpg'
            },
            {
                name: 'ميكاتو سنجل',
                price: '40',
                badge: 'popular',
                img: 'images/30.jpg'
            },
            {
                name: 'ميكاتو دبل',
                price: '55',
                badge: 'popular',
                img: 'images/31.jpg'
            },
            {
                name: 'امريكان كوفى',
                price: '40',
                badge: 'popular',
                img: 'images/32.jpg'
            },

            {
                name: 'دارك موكا',
                price: '65',
                badge: 'popular',
                img: 'images/34.jpg'
            },
            {
                name: 'وايت موكا',
                price: '65',
                badge: 'popular',
                img: 'images/35.jpg'
            },
            {
                name: 'نسكافيه كلاسيك',
                price: '30',
                badge: 'popular',
                img: 'images/36.jpg'
            },
            {
                name: 'نسكافيه حليب',
                price: '55',
                badge: 'popular',
                img: 'images/37.jpg'
            },
            {
                name: 'لاتيه كلاسيك',
                price: '60',
                badge: 'popular',
                img: 'images/38.jpg'
            },
            {
                name: 'كابتشينو',
                price: '65',
                badge: 'popular',
                img: 'images/39.jpg'
            },
            {
                name: 'فلات وايت',
                price: '65',
                badge: 'popular',
                img: 'images/40.jpg'
            },
            {
                name: 'اسبانش لاتيه',
                price: '65',
                badge: 'popular',
                img: 'images/41.jpg'
            },
            {
                name: 'كورتادو',
                price: '50',
                badge: 'popular',
                img: 'images/42.jpg'
            },

            {
                name: 'كرميل ميكاتو سنجل',
                price: '55',
                badge: 'popular',
                img: 'images/44.jpg'
            },
            {
                name: 'كرميل ميكاتو دبل',
                price: '70',
                badge: 'popular',
                img: 'images/45.jpg'
            },
            {
                name: 'همر هيد ',
                price: '100',
                badge: 'popular',
                img: 'images/45.jpg'
            },


        ]

    },
    /* ════════════════════ FRESH JUICES ════════════════════ */
    'cold-drinks': {
        label: 'Fresh Juices',
        labelAr: 'عصائر فريش',
        icon: 'fa-blender',
        heroImg: 'images/cold_drinks.png',
        items: [
            {
                name: 'أفوكادو ساده',

                price: '80',
                badge: 'popular',
                img: 'images/1.1.jpg'
            },

            {
                name: 'برتقال',

                price: '55',
                badge: '',
                img: 'images/1.2.jpg'
            },
            {
                name: 'بطيخ',

                price: '55',
                badge: '',
                img: 'images/1.3.jpg'
            },
            {
                name: 'جوافه',

                price: '55',
                badge: '',
                img: 'images/1.4.jpg'
            },
            {
                name: 'جوافه نعناع',

                price: '55',
                badge: 'new',
                img: 'images/1.5.jpg'
            },
            {
                name: 'فراوله',

                price: '55',
                badge: 'popular',
                img: 'images/1.6.jpg'
            },
            {
                name: 'كنتالوب',

                price: '55',
                badge: '',
                img: 'images/1.7.jpg'
            },
            {
                name: 'كيوي',

                price: '65',
                badge: '',
                img: 'images/1.8.jpg'
            },
            {
                name: 'مانجو',

                price: '60',
                badge: 'popular',
                img: 'images/1.9.jpg'
            },
            {
                name: 'موز بالبن',

                price: '50',
                badge: '',
                img: 'images/1.10.jpg'
            },

            {
                name: 'ليمون',

                price: '35',
                badge: '',
                img: 'images/1.11.jpg'
            },
            {
                name: 'ليمون نعناع',

                price: '40',
                badge: 'popular',
                img: 'images/1.12.jpg'
            },
            {
                name: 'بطيخ نعناع ',

                price: '65',
                badge: 'popular',
                img: 'images/22.1.jpg'
            },
            {
                name: 'موز شوكلت ',

                price: '70',
                badge: 'popular',
                img: 'images/22.2.jpg'
            },
            {
                name: 'موهيتو مانجو ',

                price: '75',
                badge: 'popular',
                img: 'images/22.3.jpg'
            },
            {
                name: 'موهيتو كيوي ',

                price: '75',
                badge: 'popular',
                img: 'images/22.4.jpg'
            },
            {
                name: 'موهيتو اناناس ',

                price: '75',
                badge: 'popular',
                img: 'images/22.5.jpg'
            },


        ]
    },

    /* ════════════════════ SHISHA ════════════════════ */
    'shisha': {
        label: 'Shisha',
        labelAr: 'الشيشة',
        icon: 'fa-fire-flame-curved',
        heroImg: 'images/hero3.png',
        items: [
            {
                name: 'شيشه قص',
                price: '15',
                badge: 'popular',
                img: 'images/1..1.jpg'
            },
            {
                name: 'شيشه سلوم',
                price: '15',
                badge: 'popular',
                img: 'images/1..1.jpg'
            },

            {
                name: 'شيشه فاخر',
                price: '80',
                badge: 'popular',
                img: 'images/1..2.jpg'
            },
            {
                name: 'شيشه ايمى جولد',
                price: '100',
                badge: 'popular',
                img: 'images/1..3.jpg'
            },
        ]
    },

    /* ════════════════════ DESSERTS ════════════════════ */
    'desserts': {
        label: 'Desserts',
        labelAr: 'الحلويات',
        icon: 'fa-cake-candles',
        heroImg: 'images/desserts.png',
        items: [
            {
                name: 'مولتن كيك',
                price: '80',
                badge: 'popular',
                img: 'images/2.1.jpg'
            },
            {
                name: 'هنى كيك',
                price: '80',
                badge: 'popular',
                img: 'images/2.2.jpg'
            },
            {
                name: 'اتشيز كيك',
                price: '70',
                badge: 'popular',
                img: 'images/2.3.jpg'
            },
            {
                name: 'ريد فيلفت',
                price: '80',
                badge: 'popular',
                img: 'images/2.4.jpg'
            },
            {
                name: 'شوكليت كيك',
                price: '90',
                badge: 'popular',
                img: 'images/2.5.jpg'
            },
            {
                name: 'برونيز',
                price: '50',
                badge: 'popular',
                img: 'images/2.6.jpg'
            },
            {
                name: 'تشيز كيك بستاشيو ',
                price: '90',
                badge: 'popular',
                img: 'images/2.7.jpg'
            },
            {
                name: 'تشيز كيك مكس بري  ',
                price: '90',
                badge: 'popular',
                img: 'images/2.8.jpg'
            },
            {
                name: 'شوكلت فادج ',
                price: '80',
                badge: 'popular',
                img: 'images/2.9.jpg'
            },
            {
                name: 'ميلتون كيك لوتس  ',
                price: '100',
                badge: 'popular',
                img: 'images/2.10.jpg'
            },
            {
                name: 'بنانا شوكليت  ',
                price: '50',
                badge: 'popular',
                img: 'images/2.10.jpg'
            },
            {
                name: 'براونيز ايس فانيلا ',
                price: '60',
                badge: 'popular',
                img: 'images/2.10.jpg'
            },
            {
                name: 'شوكليت فادج  ',
                price: '80',
                badge: 'popular',
                img: 'images/2.10.jpg'
            },
        ]
    },
    'COCKTAIL': {
        label: 'COCKTAIL',
        labelAr: 'كوكتيل',
        icon: 'fa-mug-hot',
        heroImg: 'images/2.png',
        items: [
            {
                name: 'بينا كولاد1',
                price: '75',
                badge: 'popular',
                img: 'images/3.1.jpg'
            },
            {
                name: 'فروت سالاط',
                price: '80',
                badge: 'popular',
                img: 'images/3.2.jpg'
            },
            {
                name: 'فلوريدا',
                price: '70',
                badge: 'popular',
                img: 'images/3.3.jpg'
            },
            {
                name: 'كوكتيل فواكه قطع',
                price: '80',
                badge: 'popular',
                img: 'images/3.4.jpg'
            },
            {
                name: 'كوكتيل موكا',
                price: '100',
                badge: 'popular',
                img: 'images/3.5.jpg'
            },
            {
                name: 'افريكانو كوكتيل ',
                price: '90',
                badge: 'popular',
                img: 'images/33.1.jpg'
            },
            {
                name: 'سوبر باور كوكتيل ',
                price: '100',
                badge: 'popular',
                img: 'images/33.2.jpg'
            },
            {
                name: 'انيرجي كوكتيل ',
                price: '80',
                badge: 'popular',
                img: 'images/33.3.jpg'
            },
            {
                name: 'فياجرا كوكتيل ',
                price: '100',
                badge: 'popular',
                img: 'images/33.4.jpg'
            },
        ]
    },

    /* ════════════════════ EVENTS ════════════════════ */
    'events': {
        label: 'Birthdays & Events',
        labelAr: 'أعياد الميلاد والمناسبات',
        icon: 'fa-champagne-glasses',
        heroImg: 'images/Gemini_Generated_Image_ben7eyben7eyben7.png',
        items: [
            {
                name: 'باقة عيد ميلاد ستاندرد',
                nameEn: 'Birthday Package – Standard',
                desc: 'باقة مميزة لعيد ميلاد لا يُنسى',
                ingredients: 'ديكور بالونات، كيكة مخصصة، مشروبين لكل شخص، بانر مخصص',
                price: '350',
                badge: 'popular',
                img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80'
            },
            {
                name: 'باقة عيد ميلاد بريميوم',
                nameEn: 'Birthday Package – Premium',
                desc: 'كل شيء مدهش لاحتفالك',
                ingredients: 'ديكور كامل، بانر، كيكة، نادل خاص، 3 مشروبات للشخص',
                price: '550',
                badge: 'popular',
                img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&q=80'
            },
            {
                name: 'باقة عيد ميلاد VIP',
                nameEn: 'Birthday Package – VIP',
                desc: 'تجربة فاخرة متكاملة لأجمل لحظات حياتك',
                ingredients: 'باقة شاملة فاخرة لـ 10 أشخاص — كل شيء مشمول',
                price: '950',
                badge: 'new',
                img: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=400&q=80'
            },
            {
                name: 'لقاء أعمال',
                nameEn: 'Corporate Meeting',
                desc: 'باقات مرنة للاجتماعات والمناسبات',
                ingredients: 'مشروبات، وجبات خفيفة، خدمة خاصة، قاعة مخصصة',
                price: '500',
                badge: '',
                img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80'
            },
            {
                name: 'احتفالية خطوبة',
                nameEn: 'Engagement Celebration',
                desc: 'احتفالية خطوبة رومانسية بلمسات خاصة',
                ingredients: 'ديكور رومانسي، ورود، كيكة، مشروبات، تصوير',
                price: '700',
                badge: 'new',
                img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&q=80'
            },
            {
                name: 'حجز صالة خاصة',
                nameEn: 'Private Lounge',
                desc: 'حجز حصري للصالة من 2 إلى 4 ساعات',
                ingredients: 'صالة مخصصة، خدمة خاصة، ديكور أساسي',
                price: '400',
                badge: 'popular',
                img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80'
            },
            {
                name: 'ترقية الديكور المخصص',
                nameEn: 'Custom Decoration Upgrade',
                desc: 'بالونات إضافية، ورود، بانر مخصص',
                ingredients: 'بالونات مميزة، ورود طازجة، بانر مطبوع، أضواء ديكورية',
                price: '150',
                badge: 'new',
                img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=80'
            },
            {
                name: 'كيكة احتفالية مخصصة',
                nameEn: 'Custom Celebration Cake',
                desc: 'كيكة بتصميمك المفضل (طلب مسبق 48 ساعة)',
                ingredients: 'كيكة مخصصة بكريمة فاخرة، تصميم حسب الطلب، ديكور خاص',
                price: '200',
                badge: '',
                img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80'
            },
        ]
    },

    /* ════════════════════ ICE ════════════════════ */
    'ice': {
        label: 'Ice ',
        labelAr: 'آيس ',
        icon: 'fa-snowflake',
        heroImg: 'images/1.png',
        items: [

            {
                name: 'شوكولاتة ايس',

                price: '70',
                badge: 'popular',
                img: 'images/4.1.jpg'
            },

            {
                name: 'لوتس ',

                price: '45',
                badge: 'new',
                img: 'images/4.2.jpg'
            },
            {
                name: 'لاتيه',
                price: '60',
                badge: 'popular',
                img: 'images/4.3.jpg'
            },
            {
                name: 'اسبانش لاتيه',
                price: '70',
                badge: 'popular',
                img: 'images/4.4.jpg'
            },

            {
                name: 'موكا دارك',
                price: '80',
                badge: 'popular',
                img: 'images/4.5.jpg'
            },
            {
                name: 'وايت موكا',
                price: '80',
                badge: 'popular',
                img: 'images/4.6.jpg'
            },
            {
                name: 'ايس كابتشينو',
                price: '80',
                badge: 'popular',
                img: 'images/4.7.jpg'
            },
            {
                name: 'ايس ماتشا',
                price: '70',
                badge: 'popular',
                img: 'images/4.8.jpg'
            },
            {
                name: 'ايس ميكاتو كاراميل',
                price: '80',
                badge: 'popular',
                img: 'images/4.9.jpg'
            },

            {
                name: 'ايس كريم 2 بولا',
                price: '30',
                badge: 'popular',
                img: 'images/4.10.jpg'
            },
            {
                name: 'ايس كريم 3 بولا',
                price: '45',
                badge: 'popular',
                img: 'images/4.11.jpg'
            },
            {
                name: 'ايس كريم موكا',
                price: '60',
                badge: 'popular',
                img: 'images/4.12.jpg'
            },
        ]
    },

    /* ════════════════════ MOJITO ════════════════════ */
    /* 'mojito': {
         label: 'Mojito',
         labelAr: 'موهيتو',
         icon: 'fa-martini-glass-citrus',
         heroImg: 'images/2.png',
         items: [
             {
                 name: 'صن شاين',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك فراوله',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك خوخ',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك بلوبيرى',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك ميكس بلوبيرى',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك باشون فروت',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'كلاسيك ريدبول',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'ريدبول باشن',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'ريدبول بلوبيرى',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'ريدبول ميكس بيرى',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
             {
                 name: 'ريدبول خوخ',
                 price: '20',
                 badge: 'popular',
                 img: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80'
             },
 
 
         ]
     },
 
     /* ════════════════════ CHEESE MILK ════════════════════ */
    'cheese-milk': {
        label: 'Cheese Milk',
        labelAr: 'تشيز ميلك',
        icon: 'fa-cheese',
        heroImg: 'images/1.png',
        items: [
            {
                name: 'تشيز ميلك ساده',

                price: '100', badge: 'popular',
                img: 'images/5.1.jpg'
            },
            {
                name: 'تشيز مليك اوريو ',

                price: '85', badge: 'popular',
                img: 'images/5.2.jpg'
            },


            {
                name: 'تشيز ميلك لوتس',

                price: '80', badge: 'popular',
                img: 'images/5.3.jpg'
            },
            {
                name: 'تشيز  مليك نوتيلا',

                price: '95', badge: 'popular',
                img: 'images/5.4.jpg'
            },
            {
                name: 'تشيز ميلك اسنكرز ',

                price: '100', badge: 'popular',
                img: 'images/5.5.jpg'
            },
            {
                name: 'تشيز كيك كيت كات ',

                price: '100', badge: 'popular',
                img: 'images/5.6.jpg'
            },
            {
                name: 'تشيز ميلك مكس بري ',

                price: '85', badge: 'popular',
                img: 'images/5.7.jpg'
            },
            {
                name: 'تشيز ميلك  ميلوت لوتس ',

                price: '110', badge: 'popular',
                img: 'images/5.8.jpg'
            },
            {
                name: 'تشيز ميلك كراميل',

                price: '70', badge: 'popular',
                img: 'images/5.9.jpg'
            },
            {
                name: 'تشيز ميلك فراوله ',

                price: '75', badge: 'popular',
                img: 'images/5.10.jpg'
            },
            {
                name: 'تشيز ملك مانجو ',

                price: '75', badge: 'popular',
                img: 'images/5.11.jpg'
            },
            {
                name: 'تشيز ميلك شوكولاتة',

                price: '75', badge: '',
                img: 'images/5.12.jpg'
            },
            {
                name: 'تشيز ميلك ريد',
                price: '100',
                badge: 'popular',
                img: 'images/5.13.jpg'
            },
            {
                name: 'تشيز ميلك فادج',
                price: '110',
                badge: 'popular',
                img: 'images/5.14.jpg'
            },
            {
                name: 'تشيز ميلك بيستاشيو',
                price: '100',
                badge: 'popular',
                img: 'images/5.15.jpg'
            },
            {
                name: 'تشيز ميلك مولتن كيك',
                price: '100',
                badge: 'popular',
                img: 'images/5.16.jpg'
            },
        ]
    },

    /* ════════════════════ SODA ════════════════════ */
    'soda': {
        label: 'Soda',
        labelAr: 'مشروبات',
        icon: 'fa-bottle-water',
        heroImg: 'images/cold_drinks.png',
        items: [
            {
                name: 'بيبسي',

                price: '30', badge: '',
                img: 'images/6.1.jpg'
            },

            {
                name: 'سبرايت',

                price: '30', badge: '',
                img: 'images/6.2.jpg'
            },
            {
                name: 'فانتا برتقال ',

                price: '30', badge: '',
                img: 'images/6.3.jpg'
            },
            {
                name: 'فانتا تفاح',

                price: '30', badge: '',
                img: 'images/6.4.jpg'
            },
            {
                name: 'ريد بول',

                price: '70', badge: 'popular',
                img: 'images/6.5.jpg'
            },
            {
                name: 'ريد بول توت',

                price: '70', badge: 'popular',
                img: 'images/6.6.jpg'
            },
            {
                name: 'تويست',
                price: '30',
                badge: 'popular',
                img: 'images/6.7.jpg'
            },
            {
                name: 'بريل ',
                price: '35',
                badge: 'popular',
                img: 'images/6.8.jpg'
            },
            {
                name: 'فيروز',
                price: '35',
                badge: 'popular',
                img: 'images/6.9.jpg'
            },
            {
                name: 'مياه معدنية',

                price: '10', badge: '',
                img: 'images/6.10.jpg'
            },
        ]
    },

    /* ════════════════════ FRAPPE ════════════════════ */
    'frappe': {
        label: 'Frappe',
        labelAr: 'فرابيه',
        icon: 'fa-blender',
        heroImg: 'images/cold_drinks.png',
        items: [


            {
                name: 'فرابيه كراميل',

                price: '90', badge: 'popular',
                img: 'images/7.1.jpg'
            },
            {
                name: 'فرابيه لوتس',

                price: '90', badge: 'popular',
                img: 'images/7.2.jpg'
            },
            {
                name: 'فرابيه دارك شوكليت',
                price: '90',
                badge: 'popular',
                img: 'images/7.3.jpg'
            },

            {
                name: 'فرابيه شوكولاتة بيضاء',

                price: '90', badge: '',
                img: 'images/7.4.jpg'
            },

            {
                name: 'فرابيه اسبانش لاتيه',
                price: '90',
                badge: 'popular',
                img: 'images/7.5.jpg'
            },


            {
                name: 'فرابيه فرابتشينو',
                price: '70',
                badge: 'popular',
                img: 'images/7.7.jpg'
            },

            {
                name: 'فرابيه لاتيه',
                price: '80',
                badge: 'popular',
                img: 'images/7.6.jpg'
            },
        ]
    },

    /* ════════════════════ MILKSHAKE ════════════════════ */
    'milkshake': {
        label: 'Milkshake',
        labelAr: 'ميلك شيك',
        icon: 'fa-glass-water',
        heroImg: 'images/cold_drinks.png',
        items: [
            {
                name: 'ميلك شيك فانيليا',

                price: '75', badge: 'popular',
                img: 'images/8.1.jpg'
            },
            {
                name: 'ميلك شيك شوكولاتة',

                price: '75', badge: 'popular',
                img: 'images/8.2.jpg'
            },
            {
                name: 'ميلك شيك فراولة',

                price: '75', badge: '',
                img: 'images/8.3.jpg'
            },

            {
                name: 'ميلك شيك مانجو',

                price: '75', badge: '',
                img: 'images/8.4.jpg'
            },
            {
                name: 'ميلك شيك لوتس',

                price: '80', badge: 'popular',
                img: 'images/8.5.jpg'
            },
            {
                name: 'ميلك شيك أوريو',

                price: '85', badge: 'popular',
                img: 'images/8.6.jpg'
            },

            {
                name: 'ميلك شيك كيت كات',

                price: '100', badge: 'new',
                img: 'images/8.7.jpg'
            },
            {
                name: 'ميلك شيك نوتيلا',
                price: '95',
                badge: 'popular',
                img: 'images/8.8.jpg'
            },

            {
                name: 'ميلك شيك سنيكرز',
                price: '100',
                badge: 'popular',
                img: 'images/8.9.jpg'
            },

            {
                name: 'مليك شيك بلوبيرى',
                price: '85',
                badge: 'popular',
                img: 'images/8.10.jpg'
            },
            {
                name: 'مليك شيك بيستاشيو',
                price: '100',
                badge: 'popular',
                img: 'images/8.11.jpg'
            },
            {
                name: 'مليك شيك  مكس بري فراوله ',
                price: '80',
                badge: 'popular',
                img: 'images/11.1.jpg'
            },
            {
                name: 'مليك شيك اناناس ',
                price: '75',
                badge: 'popular',
                img: 'images/11.2.jpg'
            },
            {
                name: 'مليك شيك  فراوله كوفي ',
                price: '85',
                badge: 'popular',
                img: 'images/11.3.jpg'
            },
            {
                name: 'مليك شيك مانجو كوفي ',
                price: '85',
                badge: 'popular',
                img: 'images/11.4.jpg'
            },
            {
                name: 'مليك شيك موكا',
                price: '110',
                badge: 'popular',
                img: 'images/11.5.jpg'
            },
        ]
    },

    /* ════════════════════ SMOOTHIE ════════════════════ */
    'smoothie': {
        label: 'Smoothie',
        labelAr: 'اسموزي',
        icon: 'fa-droplet',
        heroImg: 'images/2.png',
        items: [

            {
                name: 'اسموزي فراولة',
                nameEn: 'Strawberry Smoothie',
                desc: 'فراولة طازجة مع زبادي',
                ingredients: 'فراولة طازجة، زبادي، حليب، عسل، ثلج',
                price: '50', badge: 'popular',
                img: 'images/9.1.jpg'
            },
            {
                name: 'اسموزي مانجو',
                nameEn: 'Mango Smoothie',
                desc: 'مانجو استوائي ناعم ومنعش',
                ingredients: 'مانجو طازج، زبادي، حليب، عسل، ثلج',
                price: '50', badge: '',
                img: 'images/9.2.jpg'
            },
            {
                name: 'اسموزي توت',
                nameEn: 'Blueberry Smoothie',
                desc: 'توت أزرق وأحمر بزبادي',
                ingredients: 'توت طازج، زبادي، حليب، عسل، ثلج',
                price: '50', badge: 'new',
                img: 'images/9.3.jpg'
            },
            {
                name: 'اسموزي خوخ',
                nameEn: 'Peach Smoothie',
                desc: 'خوخ حلو مع زبادي وعسل',
                ingredients: 'خوخ طازج، زبادي، حليب، عسل، ثلج',
                price: '50', badge: '',
                img: 'images/9.4.jpg'
            },
            {
                name: 'بطيخ',
                price: '50',
                badge: 'popular',
                img: 'images/9.5.jpg'
            },
            {
                name: 'مانجو خوخ',
                price: '65',
                badge: 'popular',
                img: 'images/9.6.jpg'
            },
            {
                name: 'مانجو كيوى',
                price: '65',
                badge: 'popular',
                img: 'images/9.7.jpg'
            },
            {
                name: 'كانتلوب',
                price: '50',
                badge: 'popular',
                img: 'images/9.8.jpg'
            },
            {
                name: 'ليمون نعناع',
                price: '50',
                badge: 'popular',
                img: 'images/9.9.jpg'
            },
             {
                name: 'فراوله كوفي',
                price: '75',
                badge: 'popular',
                img: 'images/00.2.jpg'
            },
             {
                name: 'مانجو كوفي ',
                price: '75',
                badge: 'popular',
                img: 'images/00.3.jpg'
            },
             {
                name: 'بينك ليمون ',
                price: '75',
                badge: 'popular',
                img: 'images/00.4.jpg'
            },
             {
                name: 'بلو ليمون',
                price: '75',
                badge: 'popular',
                img: 'images/00.5.jpg'
            },
             {
                name: 'زبادي كلاسيك  ',
                price: '40',
                badge: 'popular',
                img: 'images/00.6.jpg'
            },
            {
                name: 'زبادي مانجو  ',
                price: '55',
                badge: 'popular',
                img: 'images/00.7.jpg'
            },
            {
                name: 'زبادي فراوله  ',
                price: '55',
                badge: 'popular',
                img: 'images/00.8.jpg'
            },
            {
                name: 'زبادي بلو بري ',
                price: '55',
                badge: 'popular',
                img: 'images/00.9.jpg'
            },
            {
                name: 'زبادي مكس  ',
                price: '60',
                badge: 'popular',
                img: 'images/00.10.jpg'
            },
            {
                name: 'زبادي موز  ',
                price: '60',
                badge: 'popular',
                img: 'images/00.11.jpg'
            },
            {
                name: 'زبادي عسل  ',
                price: '45',
                badge: 'popular',
                img: 'images/00.12.jpg'
            },
            {
                name: 'زبادي عسل مكسرات  ',
                price: '55',
                badge: 'popular',
                img: 'images/00.13.jpg'
            },
            {
                name: 'زبادي باشون  ',
                price: '55',
                badge: 'popular',
                img: 'images/00.14.jpg'
            },



        ]
    },

    /* ════════════════════ EXTRA (إضافات) ════════════════════ */
    'extras': {
        label: 'Extras',
        labelAr: 'إضافات',
        icon: 'fa-plus-circle',
        heroImg: 'images/hot_drinks.png',
        items: [
            {
                name: 'فراولة',

                price: '10', badge: '',
                img: 'images/0.1.jpg'
            },

            {
                name: 'خوخ',

                price: '10', badge: '',
                img: 'images/0.2.jpg'
            },
            {
                name: 'مانجو',

                price: '10', badge: '',
                img: 'images/0.3.jpg'
            },



            {
                name: 'صوص كراميل',

                price: '10', badge: '',
                img: 'images/0.4.jpg'
            },
            {
                name: 'صوص شوكولاتة',

                price: '10', badge: '',
                img: 'images/0.5.jpg'
            },
            {
                name: 'عسل',

                price: '10', badge: '',
                img: 'images/0.6.jpg'
            },
            {
                name: 'مكسرات مشكلة',

                price: '15', badge: '',
                img: 'images/0.7.jpg'
            },
            {
                name: 'آيس كريم إضافي',

                price: '15', badge: '',
                img: 'images/0.8.jpg'
            },
            {
                name: 'لبن',
                price: '15',
                badge: 'popular',
                img: 'images/0.9.jpg'
            },
            {
                name: 'بلوبيرى',
                price: '10',
                badge: 'popular',
                img: 'images/0.10.jpg'
            },
            {
                name: 'كيوى',
                price: '10',
                badge: 'popular',
                img: 'images/0.11.jpg'
            },
            {
                name: 'فانيليا',
                price: '10',
                badge: 'popular',
                img: 'images/0.12.jpg'
            },
            {
                name: 'بندق',
                price: '10',
                badge: 'popular',
                img: 'images/0.13.jpg'
            },
            {
                name: 'نوتيلا',
                price: '15',
                badge: 'popular',
                img: 'images/0.14.jpg'
            },
            {
                name: 'باشن فروت',
                price: '10',
                badge: 'popular',
                img: 'images/0.15.jpg'
            },
            {
                name: 'شوت اسبريسو',
                price: '20',
                badge: 'popular',
                img: 'images/0.16.jpg'
            },
        ]
    }
};

/* ─────────────────────────────────────────────────────────
   INIT MENU PAGE
───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('cat') || 'hot-drinks';
    let activeCat = menuData[requested] ? requested : 'hot-drinks';

    /* ── Build Tabs ── */
    const tabsEl = document.getElementById('cat-tabs');
    Object.keys(menuData).forEach(key => {
        const cat = menuData[key];
        const btn = document.createElement('button');
        btn.className = `cat-tab${key === activeCat ? ' active' : ''}`;
        btn.dataset.cat = key;
        btn.setAttribute('aria-label', cat.label);
        btn.innerHTML = `<i class="fa-solid ${cat.icon}"></i> ${cat.label}`;
        btn.addEventListener('click', () => {
            switchCategory(key);
            const url = new URL(window.location);
            url.searchParams.set('cat', key);
            window.history.pushState({}, '', url);
        });
        tabsEl.appendChild(btn);
    });

    /* Fire initial render */
    renderCategory(activeCat);
    updateHeroText(activeCat);

    /* ── Switch Category ── */
    function switchCategory(key) {
        activeCat = key;
        document.querySelectorAll('.cat-tab').forEach(t =>
            t.classList.toggle('active', t.dataset.cat === key));
        renderCategory(key);
        updateHeroText(key);
        // scroll to top of grid smoothly
        const grid = document.getElementById('menu-grid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /* ── Update Hero/Breadcrumb ── */
    function updateHeroText(key) {
        const cat = menuData[key];
        const heroSection = document.getElementById('menu-hero');
        const titleEl = document.getElementById('menu-hero-title');
        const subtitleEl = document.getElementById('menu-hero-subtitle');
        const iconEl = document.getElementById('menu-hero-icon');
        const breadEl = document.getElementById('breadcrumb-cat');

        if (heroSection && cat.heroImg) {
            const bgContainer = heroSection.querySelector('.menu-hero-bg');
            if (bgContainer) {
                bgContainer.style.transition = 'opacity 0.5s ease-in-out';
                bgContainer.style.opacity = '0.3';
                setTimeout(() => {
                    bgContainer.style.backgroundImage = `url('${cat.heroImg}')`;
                    bgContainer.style.opacity = '1';
                }, 300);
            }
        }

        if (titleEl) {
            titleEl.style.opacity = '0';
            titleEl.style.transform = 'translateY(10px)';
            setTimeout(() => {
                titleEl.textContent = cat.label;
                titleEl.style.transition = 'opacity 0.4s, transform 0.4s';
                titleEl.style.opacity = '1';
                titleEl.style.transform = 'translateY(0)';
            }, 200);
        }
        if (subtitleEl && cat.labelAr) subtitleEl.textContent = cat.labelAr;
        if (iconEl) iconEl.className = `fa-solid ${cat.icon} text-4xl text-mocha-golden mb-3`;
        if (breadEl) breadEl.textContent = cat.label;
    }

    /* ── Render Items ── */
    function renderCategory(key) {
        const grid = document.getElementById('menu-grid');
        const cat = menuData[key];
        if (!cat || !grid) return;

        grid.innerHTML = '';

        const countEl = document.getElementById('item-count');
        if (countEl) countEl.textContent = `${cat.items.length} items`;

        cat.items.forEach((item, i) => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.style.animationDelay = `${i * 0.05}s`;

            /* Badge */
            const badgeMap = {
                popular: { cls: 'badge-popular', lbl: '★ الأكثر طلباً' },
                new: { cls: 'badge-new', lbl: '✦ جديد' },
                hot: { cls: 'badge-hot', lbl: '🔥 ساخن' },
                cold: { cls: 'badge-cold', lbl: '❄ بارد' },
            };
            const b = item.badge && badgeMap[item.badge];
            const badgeHTML = b ? `<span class="item-badge ${b.cls}">${b.lbl}</span>` : '';

            /* Ingredients */
            const ingHTML = item.ingredients
                ? `<div class="item-ingredients"><i class="fa-solid fa-list-ul text-mocha-gold text-xs mr-1"></i>${item.ingredients}</div>`
                : '';

            card.innerHTML = `
        <div class="item-img-wrap">
          <img
            src="${item.img}"
            alt="${item.name}"
            class="item-thumb"
            loading="lazy"
            onerror="this.parentElement.innerHTML='<div class=\\'item-thumb-placeholder\\'>${item.emoji || '🍹'}</div>'"
          />
          ${b ? `<span class="item-img-badge ${b.cls}">${b.lbl}</span>` : ''}
        </div>
        <div class="item-body">
          <h3 class="item-name">${item.name}</h3>
          ${item.nameEn ? `<p class="item-name-en">${item.nameEn}</p>` : ''}
          <p class="item-desc">${item.desc}</p>
          ${ingHTML}
          <div class="item-footer">
            <div class="item-price">
              <span class="item-price-currency">EGP</span>${item.price}
            </div>
            ${badgeHTML}
          </div>
        </div>`;

            grid.appendChild(card);
        });
    }
});

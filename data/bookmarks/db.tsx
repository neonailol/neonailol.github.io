import { Bookmark, CategoryType } from "./types";

export const db: Array<Bookmark> = [
    {
        category: CategoryType.Book,
        added_at: '2023-01-05',
        title: 'Five Lines of Code: How and when to refactor',
        link: 'https://www.manning.com/books/five-lines-of-code',
        published_at: '2021-10-26',
        tags: ['OOP', 'Refactoring'],
        isbn: 9781617298318
    },
    {
        category: CategoryType.Book,
        added_at: '2023-01-09',
        title: 'Rust in Action: Systems programming concepts and techniques',
        link: 'https://www.manning.com/books/rust-in-action',
        published_at: '2021-08-10',
        tags: ['Rust', 'Systems Programming'],
        isbn: 9781617294556
    },
    {
        category: CategoryType.Book,
        added_at: '2023-01-13',
        title: 'Programming Rust',
        link: 'https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/',
        published_at: '2021-07-20',
        tags: ['Rust', 'Systems Programming'],
        isbn: 9781492052548
    },
    {
        category: CategoryType.Book,
        added_at: '2023-01-19',
        title: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
        link: 'https://dataintensive.net/',
        published_at: '2017-05-02',
        tags: ['Software Architecture', 'Big Data'],
        isbn: 9781449373320
    },
    {
        category: CategoryType.Book,
        added_at: '2023-01-24',
        title: 'The Tipping Point: How Little Things Can Make a Big Difference',
        link: 'https://www.amazon.com/Tipping-Point-Little-Things-Difference/dp/0316346624',
        published_at: '2002-01-07',
        tags: ['Psychology'],
        isbn: 9780316346627
    },
    {
        category: CategoryType.Video,
        added_at: '2023-01-24',
        title: 'A Firehose of Rust, for busy people who know some C++',
        link: 'https://youtu.be/IPmRDS0OSxM',
        published_at: '2021-06-01',
        tags: ['Programming', 'Rust', 'CPP'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-01-24',
        title: 'Herbert Wolverson - Procedural Map Generation Techniques',
        link: 'https://youtu.be/TlLIOgWYVpI',
        published_at: '2020-10-15',
        tags: ['Programming', 'GameDev', 'Procedural Generation'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-01-25',
        title: 'Cellular Automata | Procedural Generation | Game Development Tutorial',
        link: 'https://youtu.be/slTEz6555Ts',
        published_at: '2020-09-19',
        tags: ['Programming', 'GameDev', 'Procedural Generation', 'Cellular Automata'],
    },
    {
        category: CategoryType.Book,
        added_at: '2023-01-27',
        title: '지구 끝 의 온실: 김 초엽 장편 소설',
        alternative: 'The Greenhouse at the End of the Earth',
        link: 'http://www.yes24.com/Product/Goods/103026125',
        published_at: '2021-08-18',
        tags: ['Fiction', 'Science Fiction', 'Post Apocalyptic'],
        isbn: 9791191824001,
    },
    {
        category: CategoryType.Book,
        added_at: '2023-01-31',
        title: 'Hands-on Rust: Effective Learning through 2D Game Development and Play',
        link: 'https://hands-on-rust.com/',
        published_at: '2021-08-03',
        tags: ['Rust', 'GameDev'],
        isbn: 9781680508161,
    },
    {
        category: CategoryType.Book,
        added_at: '2023-02-03',
        title: 'Weniger schlecht programmieren',
        link: 'https://oreilly.de/produkt/weniger-schlecht-programmieren/',
        published_at: '2013-12-28',
        tags: ['Programming'],
        isbn: 9783897215672,
    },
    {
        category: CategoryType.Book,
        added_at: '2023-02-11',
        title: 'Kafka: The Definitive Guide',
        link: 'https://www.oreilly.com/library/view/kafka-the-definitive/9781491936153/',
        published_at: '2017-10-10',
        tags: ['Kafka', 'Streaming', 'Java'],
        isbn: 9781491936153,
    },
    {
        category: CategoryType.Book,
        added_at: '2023-02-25',
        title: 'Serious Cryptography: A Practical Introduction to Modern Encryption',
        link: 'https://nostarch.com/seriouscrypto',
        published_at: '2017-11-06',
        tags: ['Cryptography', 'Security'],
        isbn: 9781593278267,
    },
    {
        category: CategoryType.Book,
        added_at: '2023-02-18',
        title: 'Practical Process Automation: Orchestration and Integration in Microservices and Cloud Native Architectures',
        link: 'https://processautomationbook.com/',
        published_at: '2021-03-16',
        tags: ['Software Architecture', 'Cloud Native', 'Microservices', 'BPMN'],
        isbn: 9781492061458,
    },
    {
        category: CategoryType.Book,
        added_at: '2023-03-11',
        title: 'System Design Interview - An insider\'s guide',
        link: 'https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF',
        published_at: '2020-06-12',
        tags: ['Software Architecture', 'System Design'],
        isbn: 9798664653403,
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-13',
        title: 'Diffusion models from scratch in PyTorch',
        link: 'https://youtu.be/a4Yfz2FxXiY',
        published_at: '2022-07-18',
        tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Diffusion'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-13',
        title: 'Diffusion Models | Paper Explanation | Math Explained',
        link: 'https://youtu.be/HoKDTa5jHvg',
        published_at: '2022-06-06',
        tags: ['Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Diffusion'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-13',
        title: 'Diffusion Models | PyTorch Implementation',
        link: 'https://youtu.be/TBCRlnwJtZU',
        published_at: '2022-09-21',
        tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Diffusion'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-13',
        title: 'VQ-GAN | Paper Explanation',
        link: 'https://youtu.be/wcqLFDXaDO8',
        published_at: '2022-02-16',
        tags: ['Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Vector Quantized'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-13',
        title: 'VQ-GAN | PyTorch Implementation',
        link: 'https://youtu.be/_Br5WRwUz_U',
        published_at: '2022-02-16',
        tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Vector Quantized'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-14',
        title: 'VQ-VAEs: Neural Discrete Representation Learning | Paper + PyTorch Code Explained',
        link: 'https://youtu.be/VZFVUrYcig0',
        published_at: '2021-06-30',
        tags: ['PyTorch', 'Machine Learning', 'Deep Learning', 'Generative Adversarial Network', 'Vector Quantized', 'Variational Autoencoder'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-17',
        title: 'Diamond Square | Procedural Generation | Game Development Tutorial',
        link: 'https://youtu.be/4GuAV1PnurU',
        published_at: '2021-01-12',
        tags: ['Programming', 'GameDev', 'Procedural Generation', 'Diamond Square'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-17',
        title: 'Lazy Flood Fill | Procedural Generation | Game Development Tutorial',
        link: 'https://youtu.be/YS0MTrjxGbM',
        published_at: '2021-02-13',
        tags: ['Programming', 'GameDev', 'Procedural Generation', 'Lazy Flood Fill'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-17',
        title: 'Fractal Noise | Procedural Generation | Game Development Tutorial',
        link: 'https://youtu.be/Z6m7tFztEvw',
        published_at: '2021-05-01',
        tags: ['Programming', 'GameDev', 'Procedural Generation', 'Fractal Noise'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-22',
        title: 'The Diabolical Developer\'s Guide to JVM Ergonomics in Containers (Martijn Verburg)',
        link: 'https://youtu.be/r6UAn3DnaXU',
        published_at: '2022-12-30',
        tags: ['Java', 'Containers', 'Kubernetes'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-22',
        title: 'Refactoring Is Not Just Clickbait - Kevlin Henney - NDC Oslo 2022',
        link: 'https://youtu.be/piUesxuZkIQ',
        published_at: '2022-12-22',
        tags: ['Refactoring', 'Programming', 'Philosophy'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-22',
        title: 'Experimenting with Faster Elliptic Curves in Rust (Diego F. Aranha)',
        link: 'https://youtu.be/flJcuR0Kvxw',
        published_at: '2022-12-23',
        tags: ['Rust', 'Cryptography', 'Elliptic Curves'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-31',
        title: 'Expert Talk: Managing Complexity in Software • Hadi Hariri',
        link: 'https://youtu.be/P7CfWtR-ECk',
        published_at: '2022-05-31',
        tags: ['Software Development', 'Software Architecture', 'Philosophy', 'Complexity'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-31',
        title: 'Fibonacci Heaps or "How to invent an extremely clever data structure"',
        link: 'https://youtu.be/6JxvKfSV9Ns',
        published_at: '2022-07-28',
        tags: ['Algorithms', 'Data Structures'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-31',
        title: 'Faster than Rust and C++: the PERFECT hash table',
        link: 'https://youtu.be/DMQ_HcNSOAI',
        published_at: '2023-03-11',
        tags: ['Algorithms', 'Data Structures', 'Performance', 'Optimisation', 'Assembler'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-03-31',
        title: 'Researchers Use Group Theory to Speed Up Algorithms — Introduction to Groups',
        link: 'https://youtu.be/KufsL2VgELo',
        published_at: '2022-09-06',
        tags: ['Algorithms', 'Abstract Algebra', 'Group Theory'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-04-08',
        title: 'How Discord Stores Trillions of Messages | Deep Dive',
        link: 'https://youtu.be/xynXjChKkJc',
        published_at: '2023-03-11',
        tags: ['Databases', 'Performance', 'Cassandra', 'ScyllaDB'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-04-08',
        title: 'All Postgres Locks Explained | A Deep Dive',
        link: 'https://youtu.be/URwmzTeuHdk',
        published_at: '2023-03-19',
        tags: ['Databases', 'Locks', 'Postgres'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-04-08',
        title: 'Postgres Architecture Explained',
        link: 'https://youtu.be/Q56kljmIN14',
        published_at: '2023-02-16',
        tags: ['Databases', 'Software Architecture', 'Postgres'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-04-08',
        title: 'The Silver Bullet Syndrome - Hadi Hariri',
        link: 'https://youtu.be/qamzvLfX-Zo',
        published_at: '2016-09-07',
        tags: ['Software Development', 'Philosophy'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-04-08',
        title: 'The Silver Bullet Syndrome Part 2 - Complexity Strikes Back! - Hadi Hariri - NDC London 2022',
        link: 'https://youtu.be/WN3CSOai_ZU',
        published_at: '2022-08-01',
        tags: ['Software Development', 'Philosophy'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-04-08',
        title: 'Non-Functional Coding - Kevlin Henney, Curbralan | Craft Conference 2022',
        link: 'https://youtu.be/kX2nxAFY-8k',
        published_at: '2022-08-16',
        tags: ['Software Development', 'Philosophy'],
    },
    {
        category: CategoryType.Book,
        added_at: '2023-06-28',
        title: 'Deep Learning Illustrated',
        link: 'https://www.deeplearningillustrated.com/',
        published_at: '2019-09-18',
        tags: ['Machine Learning', 'Deep Learning'],
        isbn: 9780135116692,
    },
    {
        category: CategoryType.Video,
        added_at: '2023-07-15',
        title: 'The Pragmatic Programmer 20 Years Later • Pragmatic Dave Thomas • GOTO 2020',
        link: 'https://youtu.be/0AzkH8SYyOc',
        published_at: '2020-10-26',
        tags: ['Software Development', 'Philosophy'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-07-16',
        title: 'Large-Scale Architecture: The Unreasonable Effectiveness of Simplicity • Randy Shoup • YOW! 2022',
        link: 'https://youtu.be/oejXFgvAwTA',
        published_at: '2023-07-08',
        tags: ['Software Development', 'Software Architecture'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-07-23',
        title: 'Minimum Viable Architecture • Randy Shoup • YOW! 2022',
        link: 'https://youtu.be/9Q7GANXn02k',
        published_at: '2023-07-18',
        tags: ['Software Development', 'Software Architecture'],
    },
    {
        category: CategoryType.Article,
        added_at: '2023-07-29',
        title: 'You Want Modules, Not Microservices',
        link: 'https://blogs.newardassociates.com/blog/2023/you-want-modules-not-microservices.html',
        published_at: '2023-01-12',
        tags: ['Software Architecture', 'Microservices'],
    },
    {
        category: CategoryType.Article,
        added_at: '2023-10-15',
        title: 'The State of Async Rust: Runtimes',
        link: 'https://corrode.dev/blog/async/',
        published_at: '2023-09-13',
        tags: ['Rust', 'Async'],
    },
    {
        category: CategoryType.Article,
        added_at: '2023-10-15',
        title: 'Why HTTP/3 is eating the world',
        link: 'https://blog.apnic.net/2023/09/25/why-http-3-is-eating-the-world/',
        published_at: '2023-09-25',
        tags: ['Protocols', 'HTTP'],
    },
    {
        category: CategoryType.Article,
        added_at: '2023-10-17',
        title: 'From $erverless to Elixir',
        link: 'https://medium.com/coryodaniel/from-erverless-to-elixir-48752db4d7bc',
        published_at: '2018-08-17',
        tags: ['Elixir', 'Performance', 'System Design'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-10-24',
        title: '*(char*)0 = 0; - What Does the C++ Programmer Intend With This Code? - JF Bastien - C++ on Sea 2023',
        link: 'https://youtu.be/dFIqNZ8VbRY',
        published_at: '2023-10-06',
        tags: ['CPP', 'Low Level', 'Memory'],
    },
    {
        category: CategoryType.Article,
        added_at: '2014-10-27',
        title: 'What ORMs have taught me: just learn SQL',
        link: 'https://wozniak.ca/blog/2014/08/03/1/index.html',
        published_at: '2023-10-06',
        tags: ['Programming', 'ORM', 'SQL'],
    },
    {
        category: CategoryType.Video,
        added_at: '2023-10-29',
        title: 'An Engineering Approach to Optimising C++ - Dave Rowland - C++ on Sea 2023',
        link: 'https://youtu.be/TEeBcjKZhfg',
        published_at: '2023-10-10',
        tags: ['CPP', 'Performance', 'Algorithms'],
    },
]
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl:
          "https://utfs.io/f/857ace02-31c2-43ae-a6f3-7d97b0cb279a-e7tkok.png",
      },
    });

    const mouses = [
      {
        name: "Logitech MX Master 3s",
        slug: "logitech-mx-master-3s",
        description:
          "O Logitech MX Master 3S é o mouse definitivo para quem busca precisão, conforto e desempenho em suas atividades diárias. Projetado para profissionais de criação, programadores e usuários avançados, ele traz um sensor óptico de 8000 DPI, que garante extrema precisão até mesmo em superfícies de vidro. Seu design ergonômico proporciona conforto durante o uso prolongado, enquanto o scroll MagSpeed oferece um deslizamento ultrarrápido e silencioso. Além disso, o MX Master 3S permite a personalização de botões e a fácil conexão a até três dispositivos via Bluetooth ou receptor USB. É a combinação perfeita de elegância e funcionalidade para quem exige o máximo de sua produtividade.",
        imageUrls: [
          "https://utfs.io/f/baccd841-5118-4a43-b7d9-557effb39e03-otetkp.png",
          "https://utfs.io/f/74ce5572-0cd2-4e90-a4b2-b982fb968e93-x6ep3u.png",
          "https://utfs.io/f/0a79c814-eb1b-49cf-a8cf-073b69f2bfb4-thphc5.png",
          "https://utfs.io/f/8453c879-dd66-41ff-b686-f564af33f324-l4plt0.png",
        ],
        basePrice: 650,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X Superlight",
        slug: "logitech-pro-x-superlight",
        description:
          "A Logitech Pro X Superlight é um mouse sem fio de alto desempenho projetado para gamers profissionais que exigem velocidade, precisão e leveza. Pesando menos de 63 gramas, o Pro X Superlight oferece uma experiência de jogo ultraleve sem comprometer a durabilidade ou a performance. Equipado com o sensor HERO 25K, o mais preciso da Logitech, ele garante rastreamento preciso e rápido em qualquer superfície. A tecnologia sem fio LIGHTSPEED proporciona uma conexão estável e de baixa latência, permitindo respostas rápidas em jogos competitivos. Com um design minimalista e ergonômico, o Pro X Superlight oferece conforto durante longas sessões de jogo e é o companheiro ideal para quem busca um desempenho profissional em eSports.",
        imageUrls: [
          "https://utfs.io/f/ffb6d4e3-acce-476d-ac30-52d76071a089-idaumz.png",
          "https://utfs.io/f/dee9af33-6c1b-4ec4-b239-31065984a254-40f9t2.png",
          "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
          "https://utfs.io/f/a366c05e-27ec-4e1c-8d2f-7e3cc740ce78-m98ja0.png",
        ],
        basePrice: 750,
        categoryId: mousesCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Logitech G305 Lightspeed",
        slug: "logitech-g305-lightspeed",
        description:
          "A Logitech G305 Lightspeed é uma mouse sem fio projetada para gamers que buscam precisão e desempenho. Com tecnologia Lightspeed, ela oferece uma conexão rápida e confiável, enquanto o sensor HERO garante rastreamento de alta precisão. Seu design leve e compacto proporciona conforto durante longas sessões de jogo, e a bateria de longa duração garante que você jogue sem interrupções. Com botões personalizáveis e iluminação RGB, o G305 combina estilo e funcionalidade, tornando-se uma escolha ideal para jogadores que querem se destacar no competitivo mundo dos games.",
        imageUrls: [
          "https://utfs.io/f/3e2a7283-683f-43b5-a2c0-c64b5890a084-6pfvtn.png",
          "https://utfs.io/f/05c62fd7-1aa9-46c0-9f81-29a92e330309-t3609o.png",
          "https://utfs.io/f/b38e5709-6583-4c48-8f24-5762b18e76d7-jk7x9f.png",
          "https://utfs.io/f/409af6e8-8c08-4afd-9615-a79c7f5f69cd-2ti76m.png",
        ],
        basePrice: 300,
        categoryId: mousesCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Hyperx Pulsefire Dart",
        slug: "hyperx-pulsefire-dart",
        description:
          "A HyperX Pulsefire Dart é um mouse sem fio projetado para gamers que buscam precisão e conforto. Com um sensor óptico de alta precisão, você terá movimentos ágeis e respostas rápidas durante suas partidas. Seu design ergonômico se adapta perfeitamente à sua mão, oferecendo suporte durante longas sessões de jogo. Além disso, a iluminação RGB personalizável permite que você ajuste o visual do mouse ao seu estilo. Com a tecnologia de carregamento sem fio, você se livra de cabos, garantindo liberdade de movimento e um setup mais limpo. É a escolha ideal para quem deseja performance e estilo em um único produto!",
        imageUrls: [
          "https://utfs.io/f/c5200bd8-10b5-49bd-be72-deca34b2335a-1xd5uq.png",
          "https://utfs.io/f/78bbbd0e-70ff-4970-b733-c34ef56abde0-2xbhct.png",
          "https://utfs.io/f/9d12ba27-9dd0-48e9-84c1-a6297eeab4ff-7s04kc.png",
          "https://utfs.io/f/322954c1-5ced-4296-8e87-a6ea266904ae-cmorrv.png",
        ],
        basePrice: 600,
        categoryId: mousesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Razer Deathadder V2 Pro",
        slug: "razer-deathadder-v2-pro",
        description:
          "O Razer DeathAdder V2 Pro é um mouse gamer sem fio que combina desempenho de alto nível com conforto excepcional. Com um design ergonômico que se adapta perfeitamente à sua mão, ele oferece uma precisão impressionante com seu sensor de 20.000 DPI, ideal para gamers que buscam agilidade e precisão em cada movimento. A bateria de longa duração garante horas de jogo ininterruptas, enquanto os switches mecânicos Razer proporcionam cliques rápidos e responsivos. Experimente a liberdade do jogo sem fio sem abrir mão da performance.",
        imageUrls: [
          "https://utfs.io/f/182f9c0c-ba17-4b30-bf29-e086817ead3f-5jk68j.png",
          "https://utfs.io/f/7b3840df-3dac-4237-a244-d5d5d9c18594-m16w6s.png",
          "https://utfs.io/f/e6746f09-4afa-45e5-b7f0-fc9a0eae3e79-wiafu3.png",
          "https://utfs.io/f/4276b0c3-6ee7-47bc-8c51-04259992f4a4-g0npvu.png",
        ],
        basePrice: 350,
        categoryId: mousesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl:
          "https://utfs.io/f/f9f5bf3e-ebdd-49ea-b983-92f930f9afab-7zu99x.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech MX Keys Mini",
        slug: "logitech-mx-keys-mini",
        description:
          "A Logitech MX Keys Mini é um teclado compacto e elegante, projetado para oferecer conforto e eficiência na digitação. Com teclas retroiluminadas que se ajustam automaticamente à luz ambiente, ele garante uma experiência de uso noturna sem esforço. Seu design minimalista se encaixa perfeitamente em qualquer espaço de trabalho, enquanto a conectividade Bluetooth permite fácil emparelhamento com diversos dispositivos. Ideal para quem busca um teclado de alta performance, o MX Keys Mini combina estilo e funcionalidade para melhorar sua produtividade.",
        imageUrls: [
          "https://utfs.io/f/80787132-a9cb-41ce-ae4d-5c38b359723d-33zg48.png",
          "https://utfs.io/f/10b3a1b3-f3f2-4fba-a009-af9e2ccc4ed7-ausijr.png",
          "https://utfs.io/f/030c927c-3341-48b0-839d-65fa2fcb2be9-otkh7q.png",
          "https://utfs.io/f/1e030d68-5443-4d33-b408-b772b319b9ab-w8rm3f.png",
        ],
        basePrice: 650,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech MX Keys S",
        slug: "logitech-mx-keys-s",
        description:
          "A Logitech MX Keys S é um teclado premium projetado para oferecer conforto e precisão em cada digitação. Com teclas retroiluminadas que se ajustam automaticamente à luz do ambiente, você pode trabalhar em qualquer condição de iluminação. Seu design elegante e compacto proporciona uma experiência de digitação ergonômica, enquanto a conexão sem fio via Bluetooth e o USB Unifying facilitam a conectividade com múltiplos dispositivos. Além disso, a bateria de longa duração garante que você fique produtivo por muito mais tempo sem interrupções. Ideal para quem busca eficiência e estilo no trabalho.",
        imageUrls: [
          "https://utfs.io/f/834b0e30-45bc-47dd-b2c1-bfe65ef62eb2-m9yl8y.png",
          "https://utfs.io/f/e651e1be-734a-4847-976e-b54979290830-du02k1.png",
          "https://utfs.io/f/2c3788e1-8a8c-4672-af73-d2d3d5878d16-5e1jv4.png",
          "https://utfs.io/f/90822af7-89cf-4f82-9f8d-cede02239072-31wytt.png",
        ],
        basePrice: 750,
        categoryId: keyboardsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pop Keys",
        slug: "logitech-pop-keys",
        description:
          "O Logitech Pop Keys é um teclado mecânico compacto e divertido, projetado para trazer um toque de cor e estilo ao seu setup. Com teclas personalizáveis e um design retrô, ele oferece uma experiência de digitação confortável e ágil. Ideal para quem trabalha ou joga por longas horas, sua conectividade Bluetooth permite fácil emparelhamento com múltiplos dispositivos, tornando-o perfeito para o dia a dia. Além disso, é leve e portátil, perfeito para quem está sempre em movimento. Dê vida ao seu espaço de trabalho com o Logitech Pop Keys!",
        imageUrls: [
          "https://utfs.io/f/9e89c3ab-334b-4e4f-bc9a-6aa2baeeb9c3-u67teu.png",
          "https://utfs.io/f/46081918-deac-4a8b-a082-caba99ff7b57-58nqzp.png",
          "https://utfs.io/f/ce638b00-b423-476c-a631-2a5977aa9816-jowbfg.png",
          "https://utfs.io/f/f7af860a-64d3-4221-acde-51ad510b898b-qeno4j.png",
        ],
        basePrice: 440,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech MX Mechanical",
        slug: "logitech-mx-mechanical",
        description:
          "O Logitech MX Mechanical é um teclado mecânico projetado para oferecer conforto e produtividade excepcionais. Com retroiluminação inteligente, ele se adapta automaticamente às condições de luz, garantindo que você possa trabalhar em qualquer ambiente. As teclas são silenciosas e responsivas, proporcionando uma experiência de digitação suave e precisa. Com conectividade versátil, você pode emparelhar até três dispositivos e alternar facilmente entre eles, tornando-o ideal para multitarefas. Seu design elegante e minimalista se encaixa perfeitamente em qualquer setup, elevando seu espaço de trabalho com estilo e eficiência.",
        imageUrls: [
          "https://utfs.io/f/1c84b35c-a523-4ec5-afab-07717bfb3bc0-tbfuuf.png",
          "https://utfs.io/f/125ccdc0-9845-43cc-ade4-31dab27d8815-fsmt9h.png",
          "https://utfs.io/f/125ccdc0-9845-43cc-ade4-31dab27d8815-fsmt9h.png",
          "https://utfs.io/f/2646c695-127e-43c7-b9e6-8785ae04d775-918ah0.png",
        ],
        basePrice: 700,
        categoryId: keyboardsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Epomaker TH80",
        slug: "epomaker-th80",
        description:
          "A Epomaker TH80 é um teclado mecânico compacto e personalizável, projetado para gamers e profissionais que buscam performance e estilo. Com switches de alta qualidade e retroiluminação RGB, ele oferece uma experiência de digitação incrível e responsiva. Seu design ergonômico garante conforto durante longas horas de uso, enquanto a conectividade sem fio e com fio proporciona flexibilidade para qualquer ambiente. Ideal para quem valoriza eficiência e estética, o TH80 é a escolha perfeita para elevar seu setup.",
        imageUrls: [
          "https://utfs.io/f/a9a8150a-0fd8-4fa8-a30f-f11aaf90e07d-t8tglh.png",
          "https://utfs.io/f/cb2f3dac-63b3-4bad-baf5-316094d3f10c-4b9e6c.png",
          "https://utfs.io/f/697f9e83-d983-4e17-b75c-057f16b57b6c-kmao8t.png",
          "https://utfs.io/f/cba48ecb-4f08-48c6-9a18-574cd3cd9271-ph9bb6.png",
        ],
        basePrice: 500,
        categoryId: keyboardsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Redragon Gamer Ashe",
        slug: "redragon-gamer-ashe",
        description:
          "A Redragon Gamer Ashe é a escolha perfeita para gamers que buscam desempenho e estilo. Com um design ergonômico e teclas personalizáveis, ela garante conforto em longas sessões de jogo. Seu RGB vibrante e iluminação ajustável não só embeleza seu setup, mas também permite uma experiência imersiva. Com recursos de resposta rápida e durabilidade, a Ashe é ideal para vencer em qualquer partida. Leve seu jogo para o próximo nível com essa incrível placa de vídeo!",
        imageUrls: [
          "https://utfs.io/f/51bbaaa2-b3d8-49e8-b2e3-46f833218186-b14pyz.png",
          "https://utfs.io/f/82a02e42-e7fe-437b-b534-d86404bdb006-7jaqka.png",
          "https://utfs.io/f/57225d52-9e6a-4144-8337-c5dd20cbdca6-41gr5l.png",
          "https://utfs.io/f/0f8ebb24-7818-4243-95b6-c7948688c074-jmrqw.png",
        ],
        basePrice: 400,
        categoryId: keyboardsCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl:
          "https://utfs.io/f/42bb73b3-4a24-4542-aee4-12fa68014dc3-e7tkon.png",
      },
    });

    const headphones = [
      {
        name: "Logitech Zone Vibe 100",
        slug: "logitech-zone-vibe-100",
        description:
          "A Logitech Zone Vibe 100 é uma headset sem fio projetada para oferecer conforto e qualidade de som excepcionais durante suas chamadas e reuniões. Com um design leve e acolchoado, ela proporciona um ajuste confortável para uso prolongado. Os drivers de áudio premium garantem um som claro e nítido, enquanto o microfone com cancelamento de ruído garante que sua voz seja ouvida com clareza, mesmo em ambientes movimentados. Com uma bateria de longa duração, você pode se conectar facilmente ao seu dispositivo e aproveitar a liberdade de movimentos sem fio, tornando-a a escolha ideal para quem busca produtividade e conforto no dia a dia.",
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
          "https://utfs.io/f/c925ee13-366e-4623-8395-1e85592a5ffc-guymjj.png",
          "https://utfs.io/f/59c43701-1214-48c9-8a6b-7c7c60aa93de-ogaiw2.png",
          "https://utfs.io/f/5191ae2c-283b-4562-9165-45bcfe12f88a-59kdnh.png",
        ],
        basePrice: 750,
        categoryId: headphonesCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Pro X 2 Lightspeed",
        slug: "logitech-pro-x-2-lightspeed",
        description:
          "O Logitech Pro X 2 Lightspeed é um headset gamer de alto desempenho que oferece áudio imersivo e comunicação cristalina. Com sua tecnologia Lightspeed, você desfruta de uma conexão sem fio rápida e estável, ideal para longas sessões de jogo. Os drivers de alta qualidade garantem graves profundos e agudos nítidos, enquanto o design ergonômico e leve proporciona conforto durante horas. Além disso, o microfone destacável com cancelamento de ruído permite que você se comunique claramente com sua equipe, tornando este headset a escolha perfeita para gamers exigentes.",
        imageUrls: [
          "https://utfs.io/f/f86c9598-6782-4f91-8161-c3d9d746147a-cnu60s.png",
          "https://utfs.io/f/e2d2840f-de45-45a5-89ba-724d4cb416f6-x8xsfx.png",
          "https://utfs.io/f/13ce6f4b-bbdd-459e-a77d-f8b1cf9248c4-h72n42.png",
          "https://utfs.io/f/c6b472fb-2f40-4794-a2c3-acb159a3acc3-3e0zb3.png",
        ],
        basePrice: 1200,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Astro A30",
        slug: "logitech-astro-a30",
        description:
          "O Logitech Astro A30 é um fone de ouvido sem fio projetado para gamers que buscam conforto e qualidade de som excepcionais. Com um design leve e ajustável, ele oferece um ajuste perfeito para longas sessões de jogo. Os drivers de alta fidelidade garantem áudio imersivo, enquanto a conectividade sem fio permite liberdade de movimento. Além disso, com microfone removível e controles intuitivos, você pode se comunicar com clareza e personalizar sua experiência de jogo. Este fone é a escolha ideal para quem deseja elevar seu desempenho e aproveitar cada momento do jogo!",
        imageUrls: [
          "https://utfs.io/f/4242f20f-a15e-498f-9039-44f183847e0d-3us24m.png",
          "https://utfs.io/f/82c74203-cf79-466e-9510-8ff5efe5d197-4l6gkb.png",
          "https://utfs.io/f/c93832d7-adcd-419c-8030-591a444a3e3d-d14z98.png",
          "https://utfs.io/f/cc70de0f-a415-4876-8777-54c195a315f9-lh3hy5.png",
        ],
        basePrice: 1500,
        categoryId: headphonesCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Logitech Zone Wired Earbuds",
        slug: "logitech-zone-wired-earbuds",
        description:
          "Os Logitech Zone Wired Earbuds são fones de ouvido projetados para proporcionar conforto e qualidade de som excepcionais, ideais para quem trabalha em ambientes dinâmicos. Com um design leve e elegante, eles se ajustam perfeitamente aos ouvidos, oferecendo isolamento acústico que ajuda a bloquear distrações. Os controles intuitivos permitem gerenciar chamadas e músicas com facilidade, tornando-os perfeitos para chamadas de conferência e multitarefas. Além disso, sua conexão com fio garante uma experiência confiável e sem interrupções. Transforme sua produtividade e desfrute de um som cristalino com os Logitech Zone Wired Earbuds!",
        imageUrls: [
          "https://utfs.io/f/7b44e130-1bb2-4838-85ac-e8d78a402559-l6h1vy.png",
          "https://utfs.io/f/8e30cca7-1c73-4408-93b0-47f848036c75-cth6ct.png",
          "https://utfs.io/f/add1fe25-4246-49b6-bc38-bb361d81435f-4ghato.png",
          "https://utfs.io/f/be26c88e-abc5-4579-b04e-31d9102f44a2-3wikph.png",
        ],
        basePrice: 550,
        categoryId: headphonesCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Hyperx Cloud Stinger 2",
        slug: "hyperx-cloud-stinger-2",
        description:
          "O HyperX Cloud Stinger 2 é um headset leve e confortável, ideal para longas sessões de jogos. Com drivers de 50 mm, oferece som de alta qualidade e um excelente isolamento acústico. Seu design ajustável e almofadas macias garantem um encaixe perfeito, enquanto o microfone com cancelamento de ruído proporciona comunicação clara com os amigos. Além disso, é compatível com várias plataformas, incluindo PC, PS4 e Xbox, tornando-o uma escolha versátil para qualquer gamer. Desfrute de uma experiência de jogo imersiva com conforto e qualidade sonora excepcionais!",
        imageUrls: [
          "https://utfs.io/f/0b8199d2-2cd8-4927-86e3-d10ffc364403-oxvmyz.png",
          "https://utfs.io/f/0c95dce8-39d5-46cf-9132-f4a5c5466db7-ghx4a2.png",
          "https://utfs.io/f/1fffc6b5-66e7-4e1e-bfb3-d7e138d60dd6-81yll5.png",
          "https://utfs.io/f/2bec72be-a9cb-4627-b90a-7c8a55107152-dzx3s.png",
        ],
        basePrice: 250,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Razer Kraken X",
        slug: "razer-kraken-x",
        description:
          "O Razer Kraken X é um headset leve e confortável, projetado para gamers que buscam qualidade de som imersiva e comunicação clara. Com drivers de 40 mm, oferece graves profundos e áudio nítido, ideal para jogos e streams. Seu design ajustável e almofadas macias garantem longas sessões de uso sem desconforto. Além disso, conta com um microfone flexível e com cancelamento de ruído, permitindo que você se comunique com seus amigos de forma eficaz. O Kraken X é a escolha perfeita para elevar sua experiência de jogo!",
        imageUrls: [
          "https://utfs.io/f/6c91e18d-4148-4495-955b-46281aaaaed0-pbckc3.png",
          "https://utfs.io/f/7ee6e7f5-9fe7-4226-9116-4eab3da7c5c6-xocfv8.png",
          "https://utfs.io/f/b7593a80-238b-4d59-b996-5186dac3aa88-szrqkr.png",
          "https://utfs.io/f/89677788-43d8-48ed-ba32-b10ed8d93415-kmrv1m.png",
        ],
        basePrice: 200,
        categoryId: headphonesCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl:
          "https://utfs.io/f/5f889f93-7446-4da7-bc6b-4926c85997f9-e7tkom.png",
      },
    });

    const mousepads = [
      {
        name: "Logitech Powerplay",
        slug: "logitech-powerplay",
        description:
          "O Logitech Powerplay é um revolucionário sistema de carregamento sem fio para mouse gamers, que mantém seu dispositivo sempre carregado enquanto você joga. Com um mousepad especial que combina superfície de jogo e tecnologia de carregamento, você não precisa se preocupar com baterias ou interrupções. Ele oferece uma experiência de jogo contínua e sem fios, ideal para jogadores que buscam desempenho e conveniência. Com um design elegante e compatibilidade com diversos modelos de mouses Logitech, o Powerplay é a solução perfeita para gamers que desejam maximizar seu tempo de jogo.",
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
          "https://utfs.io/f/6a1b20e2-00bf-4805-acff-e51977ea131c-x3442a.png",
          "https://utfs.io/f/0dfc4a23-6ca9-43e2-b240-d7d7d937f544-ti1f7x.png",
          "https://utfs.io/f/041bfa51-af8d-4af8-9ec6-ca3536786ad3-l22wj0.png",
        ],
        basePrice: 950,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Logitech Desk Mat",
        slug: "logitech-desk-mat",
        description:
          "O Logitech Desk Mat é a solução perfeita para quem busca um espaço de trabalho organizado e estiloso. Com um design elegante e amplo, ele oferece uma superfície suave para o seu mouse e teclado, melhorando a precisão e o conforto durante o uso. Feito de materiais de alta qualidade, é fácil de limpar e proporciona durabilidade, tornando-se um complemento ideal para qualquer mesa. Mantenha seu espaço de trabalho livre de arranhões e sujeira, enquanto adiciona um toque moderno ao seu ambiente!",
        imageUrls: [
          "https://utfs.io/f/3b387596-f854-438d-85e1-faab21e83d36-n9raei.png",
          "https://utfs.io/f/65e9ebe8-09a7-4c61-9797-08633719c1dc-1nss0n.png",
          "https://utfs.io/f/18b56460-98b2-4676-adf3-2e772b685f6e-qlcufs.png",
          "https://utfs.io/f/aad65548-3410-4844-8474-ba5c94643d53-ji7547.png",
        ],
        basePrice: 150,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Logitech G740",
        slug: "logitech-g740",
        description:
          "O Logitech G740 é um mouse pad de alto desempenho projetado para gamers e criadores de conteúdo. Com uma superfície suave e durável, ele garante movimentos precisos e consistentes, ideal para qualquer estilo de jogo. Seu design otimizado proporciona conforto durante longas sessões, enquanto a base antiderrapante mantém o pad firme em qualquer superfície. Leve seu jogo para o próximo nível com o Logitech G740 e experimente um controle superior!",
        imageUrls: [
          "https://utfs.io/f/dd74b5ce-8fc4-4a59-8924-35039db43a09-culmza.png",
          "https://utfs.io/f/5f6d9368-d639-4bca-b12c-85251d15f529-gv99k9.png",
          "https://utfs.io/f/34529fd8-1ac4-4911-b6fb-054626051825-ofzvvc.png",
          "https://utfs.io/f/588de6a4-d739-4502-a494-0f4f47ca3fbd-59v0o7.png",
        ],
        basePrice: 200,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Mousepad Studio Series",
        slug: "logitech-mousepad-studio-series",
        description:
          "O Mousepad Studio Series da Logitech é a escolha perfeita para quem busca precisão e conforto em cada movimento. Com uma superfície suave e antiderrapante, ele proporciona controle ideal para jogos e trabalho, garantindo que o mouse deslize com facilidade. Seu design elegante e minimalista se adapta a qualquer ambiente, enquanto a durabilidade garante uso prolongado. Melhore sua experiência de uso com este mousepad que combina estilo e funcionalidade!",
        imageUrls: [
          "https://utfs.io/f/36f714be-bd91-4786-a883-1ca459df92ea-k45quc.png",
          "https://utfs.io/f/62df3fba-54f0-4b73-a6e3-8ce80febcf72-dcr81v.png",
          "https://utfs.io/f/a095e6e3-e08c-42a4-a07a-0d3719d1a3d7-6lcp9e.png",
          "https://utfs.io/f/1ff38054-13eb-408d-81e9-4bb64e467e03-61tj3.png",
        ],
        basePrice: 250,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Force One Skyhawk Dark",
        slug: "force-one-skyhawk-dark",
        description:
          "O mousepad Force One Skyhawk Snow combina estilo e funcionalidade, proporcionando uma superfície suave e responsiva para um controle preciso do mouse. Com um design elegante e moderno, ele se destaca em qualquer configuração de trabalho ou jogo. Seu material antiderrapante garante estabilidade durante o uso, enquanto o tamanho ideal oferece espaço suficiente para movimentos amplos. Ideal para gamers e profissionais, esse mousepad é a escolha perfeita para quem busca desempenho e estética.",
        imageUrls: [
          "https://utfs.io/f/72221936-9db3-4f7b-989e-68f47742b8da-x7k2s6.png",
          "https://utfs.io/f/fa414332-d06e-4294-8cdb-0f4545d4649d-zcern9.png",
          "https://utfs.io/f/ca56bb07-bfb9-481a-af57-3814b8e6e432-xjulgs.png",
          "https://utfs.io/f/a2ea409c-5bea-45e9-b35e-e529ec7a8fa2-vezwlp.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Force One Skyhawk Snow",
        slug: "force-one-skyhawk-snow",
        description:
          "O mousepad Force One Skyhawk Snow combina estilo e funcionalidade, proporcionando uma superfície suave e responsiva para um controle preciso do mouse. Com um design elegante e moderno, ele se destaca em qualquer configuração de trabalho ou jogo. Seu material antiderrapante garante estabilidade durante o uso, enquanto o tamanho ideal oferece espaço suficiente para movimentos amplos. Ideal para gamers e profissionais, esse mousepad é a escolha perfeita para quem busca desempenho e estética.",
        imageUrls: [
          "https://utfs.io/f/c076401e-8850-48bd-86f1-ed183473f03b-x7tx5v.png",
          "https://utfs.io/f/c4291b68-6aea-44b1-b813-d6000d07c445-zcom0y.png",
          "https://utfs.io/f/ffae5803-44bd-4a61-ba7e-6d2bca6749f0-xjkr33.png",
          "https://utfs.io/f/b842e2d0-cc20-4c8e-851e-4493670841a5-veq280.png",
        ],
        basePrice: 300,
        categoryId: mousepadsCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const videoCardCategory = await prisma.category.create({
      data: {
        name: "Placas de Vídeo",
        slug: "videocards",
        imageUrl:
          "https://utfs.io/f/X0YtGqwFqxR4EfbtkEUVuAykTxdHh7Mw9rEsOgZcQmqz4iK8",
      },
    });

    const videocards = [
      {
        name: "AMD Radeon RX 6650 XT SWFT 210, 8GB, GDDR6, FSR, Ray Tracing",
        slug: "amd-rx-6650-xt-swft-210",
        description:
          "A AMD Radeon RX 6650 XT SWFT 210 é uma placa de vídeo ideal para quem busca desempenho avançado em jogos e aplicações gráficas. Com 8GB de memória GDDR6, ela oferece potência de sobra para rodar os jogos mais recentes com gráficos impressionantes e alta taxa de quadros, proporcionando uma experiência fluida e envolvente. Equipada com Ray Tracing, a RX 6650 XT permite gráficos realistas com iluminação e sombras que simulam o comportamento da luz no mundo real, tornando os ambientes dos jogos ainda mais imersivos. Além disso, a tecnologia FSR (FidelityFX Super Resolution) otimiza o desempenho, aumentando a taxa de quadros sem sacrificar a qualidade visual, perfeita para jogadores e criadores de conteúdo que querem aproveitar o máximo de seus jogos e projetos. Seja para jogos exigentes, edição de vídeo ou design gráfico, essa placa de vídeo entrega alta performance e ótima relação custo-benefício.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4wtw4wdMRf4Nr0K5vPD1QYmI6onpFjcLAzxlJ",
          "https://utfs.io/f/X0YtGqwFqxR4opaHyTAsG0eTXHSDwkp6Ic5h2anlb1OyNqZm",
          "https://utfs.io/f/X0YtGqwFqxR4LEYVyDPlx5PFnqLrVvMQf4RHW02a38I9Gh7g",
          "https://utfs.io/f/X0YtGqwFqxR4ECRT9XVuAykTxdHh7Mw9rEsOgZcQmqz4iK86",
        ],
        basePrice: 1200,
        categoryId: videoCardCategory.id,
        discountPercentage: 17, // 10% discount
      },
      {
        name: "Placa de Vídeo ASRock Radeon RX 6600 Challenger D, 8GB, GDDR6, FSR, Ray Tracing",
        slug: "amd-rx-6600-asrock-challenger",
        description:
          "A Placa de Vídeo ASRock Radeon RX 6600 Challenger D é uma excelente opção para quem deseja elevar a experiência nos jogos e nas tarefas gráficas. Com 8GB de memória GDDR6, ela oferece o desempenho necessário para rodar jogos modernos com gráficos de alta qualidade, além de suportar Ray Tracing, que traz efeitos de luz e sombra incrivelmente realistas, tornando os gráficos ainda mais imersivos. Além disso, essa placa conta com a tecnologia FSR (FidelityFX Super Resolution), que melhora a taxa de quadros por segundo (FPS) sem comprometer a qualidade visual, garantindo um desempenho suave, ideal tanto para entusiastas quanto para quem busca uma ótima performance por um preço acessível. Seja para jogos, design gráfico ou edição de vídeos, a RX 6600 oferece um ótimo equilíbrio entre potência e custo-benefício.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4xIjKkufhIxm5c4bXgPaTZLWUwCHuF6MqSYR8",
          "https://utfs.io/f/X0YtGqwFqxR4rrfu6Z1NHE0Fd2pYh74atDgKWjCUvXMyTbuA",
          "https://utfs.io/f/X0YtGqwFqxR44qV6tOURG6oFbgNI9OiHTpLyaJnQhwKDUert",
          "https://utfs.io/f/X0YtGqwFqxR43yCCZ7sbX2q4867UMyPxZGd91urLVgmNtWhQ",
        ],
        basePrice: 1599,
        categoryId: videoCardCategory.id,
        discountPercentage: 40, // 40% discount
      },
      {
        name: "Placa de Vídeo Radeon RX 580 White, 8GB, GDDR5, Edição Limitada",
        slug: "amd-rx-580-white",
        description:
          "A Placa de Vídeo Radeon RX 580 White Edition é uma edição especial para gamers que buscam alta performance e um visual diferenciado. Com 8GB de memória GDDR5, ela entrega potência suficiente para rodar os jogos mais populares em alta resolução, além de oferecer ótimo desempenho em aplicações gráficas e de edição de vídeo. A RX 580 suporta tecnologias modernas como DirectX 12 e Vulkan, proporcionando uma experiência imersiva com gráficos realistas. Seu design em branco combina elegância e desempenho, sendo perfeita para setups personalizados que exigem estilo e eficiência.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4bJMUh256mL29KDjep8MVw4UXY57NZxfqRi0s",
          "https://utfs.io/f/X0YtGqwFqxR4R8vFZLGt1UgVieTXAuN8WmskdlawEh3PZM5G",
          "https://utfs.io/f/X0YtGqwFqxR4fjEk0as1GnUvxoB0I7NWJl4CwrsTHq3i2PhY",
          "https://utfs.io/f/X0YtGqwFqxR44HoIlXRG6oFbgNI9OiHTpLyaJnQhwKDUertX",
        ],
        basePrice: 999,
        categoryId: videoCardCategory.id,
        discountPercentage: 25,
      },
      {
        name: "Placa de Vídeo Radeon RX 580 Black, 8GB, GDDR5, Edição Limitada",
        slug: "amd-rx-580",
        description:
          "A Placa de Vídeo Radeon RX 580 é uma placa para gamers que buscam alta performance e um visual diferenciado. Com 8GB de memória GDDR5, ela entrega potência suficiente para rodar os jogos mais populares em alta resolução, além de oferecer ótimo desempenho em aplicações gráficas e de edição de vídeo. A RX 580 suporta tecnologias modernas como DirectX 12 e Vulkan, proporcionando uma experiência imersiva com gráficos realistas. Seu design em branco combina elegância e desempenho, sendo perfeita para setups personalizados que exigem estilo e eficiência.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4CMgXyjEtnMeQxjzJ7Uquo3mbAcW8riS0ptB6",
          "https://utfs.io/f/X0YtGqwFqxR4wtXV4GMRf4Nr0K5vPD1QYmI6onpFjcLAzxlJ",
          "https://utfs.io/f/X0YtGqwFqxR44HoIlXRG6oFbgNI9OiHTpLyaJnQhwKDUertX",
        ],
        basePrice: 899,
        categoryId: videoCardCategory.id,
        discountPercentage: 25,
      },
      {
        name: "Placa de Vídeo RTX 4090, 24GB, GDDR6X",
        slug: "nvidia-rtx-4090",
        description:
          "A Placa de Vídeo RTX 4090 é a mais poderosa da linha NVIDIA, com 24GB de memória GDDR6X, oferecendo desempenho excepcional para jogos em 4K e aplicações profissionais como renderização e IA. Com suporte ao Ray Tracing e DLSS 3.0, a RTX 4090 garante gráficos ultrarrealistas e desempenho de ponta.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4fEqXe2s1GnUvxoB0I7NWJl4CwrsTHq3i2PhY",
          "https://utfs.io/f/X0YtGqwFqxR4GQA2PPFqV2ERBWwvSAxprg7YyIkaPM0feuNJ",
          "https://utfs.io/f/X0YtGqwFqxR4RTYOHMGt1UgVieTXAuN8WmskdlawEh3PZM5G",
          "https://utfs.io/f/X0YtGqwFqxR49ZTYmfwkewnpzJxRMsgQo2bS1VlchiIUyOLm",
        ],
        basePrice: 8999,
        categoryId: videoCardCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Placa de Vídeo RTX 4070 Dual, MSI, 12GB, GDDR6",
        slug: "msi-rtx-4070-dual",
        description:
          "A RTX 4070 Dual MSI com 12GB de memória GDDR6 oferece um equilíbrio perfeito entre desempenho e eficiência energética. Ideal para jogos de alta qualidade e aplicativos exigentes de design gráfico, essa placa suporta Ray Tracing e DLSS 3.0, proporcionando excelente custo-benefício.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4ZO0rR3TvzqYQFNEdZ9uKLM3wOCsVG01Xcf4D",
          "https://utfs.io/f/X0YtGqwFqxR45qtcHVycCFb2wup5Zj7ND1BHisYg8OeAMrhz",
          "https://utfs.io/f/X0YtGqwFqxR4PmTlb9J5Bl4RUmesZ3YdX9wvPixEMQbqV86p",
          "https://utfs.io/f/X0YtGqwFqxR4ABMHP7mOiqpYTmnJLjBHGPRgutAUyQ4v89Ko",
        ],
        basePrice: 3799,
        categoryId: videoCardCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Placa de Vídeo RTX 4070 MSI, 12GB, GDDR6X",
        slug: "msi-rtx-4070",
        description:
          "A RTX 4070 MSI com 12GB de memória GDDR6X é perfeita para quem busca alto desempenho com eficiência térmica e energética. Ideal para games AAA em 1440p e 4K, e aplicações de criação de conteúdo como edição de vídeo e modelagem 3D.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4lp6OYuZx1i7HmXZtc4WuqPTaYl86zp02FAE9",
          "https://utfs.io/f/X0YtGqwFqxR47MnErv4LBsvOwxPU3ClQAKiukdX17DNZ2ESH",
          "https://utfs.io/f/X0YtGqwFqxR4RcQDBpoGt1UgVieTXAuN8WmskdlawEh3PZM5",
          "https://utfs.io/f/X0YtGqwFqxR4GQA2PPFqV2ERBWwvSAxprg7YyIkaPM0feuNJ",
        ],
        basePrice: 4599,
        categoryId: videoCardCategory.id,
        discountPercentage: 12,
      },
    ];

    await prisma.product.createMany({
      data: videocards,
    });

    const motherboardCategory = await prisma.category.create({
      data: {
        name: "Placas Mãe",
        slug: "motherboards",
        imageUrl:
          "https://utfs.io/f/X0YtGqwFqxR4PGuOeGJ5Bl4RUmesZ3YdX9wvPixEMQbqV86p",
      },
    });

    const motherboards = [
      {
        name: "Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550",
        slug: "gigabyte-b550m-aorus-elite",
        description:
          "A Placa Mãe Gigabyte B550M AORUS Elite é uma excelente escolha para entusiastas de PC que procuram desempenho e confiabilidade em uma placa compacta. Equipada com o chipset B550, ela suporta processadores AMD Ryzen de 3ª geração e posteriores, incluindo overclock, oferecendo recursos de ponta como PCIe 4.0 para placas de vídeo e SSDs ultrarrápidos. Com suporte para até 128GB de memória DDR4, essa placa proporciona flexibilidade e potência para rodar jogos, edição de vídeo, ou outras tarefas intensivas com facilidade. O design robusto e dissipadores eficientes garantem temperaturas controladas, enquanto as diversas portas e conectores, incluindo USB 3.2 Gen 2 e slots M.2, trazem excelente conectividade para o seu setup. Ideal para quem busca um sistema de alto desempenho sem comprometer o espaço.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4GF31heqV2ERBWwvSAxprg7YyIkaPM0feuNJl",
          "https://utfs.io/f/X0YtGqwFqxR4pgYsGT8dMvSHTarsgXIfztJEB15VQw8Y9hxU",
          "https://utfs.io/f/X0YtGqwFqxR4Ovo2GAegKGj4qSxcVE9H01ZXiDa72sywJ8OU",
          "https://utfs.io/f/X0YtGqwFqxR4PGuOeGJ5Bl4RUmesZ3YdX9wvPixEMQbqV86p",
        ],
        basePrice: 700,
        categoryId: motherboardCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Placa Mãe Gigabyte B550M K, Chipset B550, AMD AM4, mATX, DDR4",
        slug: "gigabyte-b550m-k",
        description:
          "A Placa Mãe Gigabyte B550M K é uma excelente escolha para quem procura montar um PC com o processador AMD AM4. Com o chipset B550, ela oferece suporte a processadores Ryzen de última geração e compatibilidade com memórias DDR4, permitindo desempenho otimizado em jogos e multitarefas. O formato mATX é ideal para builds compactos, sem comprometer a conectividade ou a capacidade de expansão, oferecendo portas PCIe 4.0, USB 3.2 e suporte a armazenamento NVMe M.2 ultrarrápido. Se você busca uma placa mãe confiável, com ótimo custo-benefício, pronta para acompanhar processadores poderosos, a Gigabyte B550M K é uma escolha sólida para jogadores, criadores de conteúdo e usuários exigentes.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4gXE26TLZJ9ktbSRyaWeoHVUAn6C1jqY38GPT",
          "https://utfs.io/f/X0YtGqwFqxR4ckgs2mQmQtfwUqKgn04F8eANlWJ61rDYE7Tk",
          "https://utfs.io/f/X0YtGqwFqxR4KJbvUJnK3hGHrwmFenPUo9xlOSkRtpf8aIJD",
          "https://utfs.io/f/X0YtGqwFqxR4Baz4eDlpctbu7jTQr1RiZodUmvA6YxFBzlsa",
        ],
        basePrice: 700,
        categoryId: motherboardCategory.id,
        discountPercentage: 25,
      },
      {
        name: "Placa Mãe Gigabyte H610, Chipset H610, Intel LGA 1700, mATX, DDR4",
        slug: "gigabyte-h610",
        description:
          "A Placa Mãe Gigabyte H610 é ideal para quem busca uma plataforma estável e eficiente para os processadores Intel de 12ª geração com soquete LGA 1700. Com o chipset H610, oferece suporte a memórias DDR4, proporcionando uma excelente relação entre custo e desempenho. O formato mATX é perfeito para computadores compactos, sem comprometer a conectividade ou a expansão, contando com slots PCIe, portas USB e suporte para armazenamento M.2 NVMe de alta velocidade. Se você precisa de uma placa mãe acessível e funcional para aplicações do dia a dia, a Gigabyte H610 é uma ótima escolha.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4RMCjSzGt1UgVieTXAuN8WmskdlawEh3PZM5G",
          "https://utfs.io/f/X0YtGqwFqxR4rS9WIa1NHE0Fd2pYh74atDgKWjCUvXMyTbuA",
          "https://utfs.io/f/X0YtGqwFqxR4Ntah09O7kM83WidwCvHQxInSyKcFjEXmNePt",
          "https://utfs.io/f/X0YtGqwFqxR4L5dEMkPlx5PFnqLrVvMQf4RHW02a38I9Gh7g",
        ],
        basePrice: 600,
        categoryId: motherboardCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Placa Mãe Gigabyte X670 Aorus Elite AX, Chipset X670, AMD AM5, ATX, DDR5",
        slug: "gigabyte-x670-aorus-elite-ax",
        description:
          "A Placa Mãe Gigabyte X670 Aorus Elite AX é uma solução premium para quem busca o máximo desempenho em processadores AMD AM5. Com o chipset X670, esta placa oferece suporte a memórias DDR5 de última geração, aumentando significativamente a largura de banda e a eficiência energética. O formato ATX garante ampla conectividade e expansão, incluindo PCIe 5.0, portas USB 3.2, e suporte a armazenamento M.2 NVMe ultrarrápido. Além disso, conta com conectividade Wi-Fi 6E e tecnologia avançada de refrigeração, ideal para gamers e criadores de conteúdo que precisam de uma plataforma robusta e pronta para o futuro.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4SPD3kp9gBcKG4NkOlXJFpgZi8f0LMswC3UvW",
          "https://utfs.io/f/X0YtGqwFqxR4NXjd8y2O7kM83WidwCvHQxInSyKcFjEXmNeP",
          "https://utfs.io/f/X0YtGqwFqxR4xmqUUvfhIxm5c4bXgPaTZLWUwCHuF6MqSYR8",
          "https://utfs.io/f/X0YtGqwFqxR4xYnLq1fhIxm5c4bXgPaTZLWUwCHuF6MqSYR8",
        ],
        basePrice: 1500,
        categoryId: motherboardCategory.id,
        discountPercentage: 18,
      },
      {
        name: "Placa Mãe Asus TUF Gaming B550M-Plus WIFI II, Chipset B550, AMD AM4, mATX, DDR4",
        slug: "asus-tuf-gaming-b550m-plus-wifi-ii",
        description:
          "A Placa Mãe Asus TUF Gaming B550M-Plus WIFI II é projetada para gamers e entusiastas que buscam alto desempenho e durabilidade. Com o chipset B550, ela oferece suporte a processadores AMD AM4 de última geração, memórias DDR4, PCIe 4.0, e conectividade Wi-Fi 6 integrada. Seu formato mATX permite criar sistemas compactos sem comprometer a expansão e conectividade. Além disso, a placa possui soluções térmicas avançadas, capacitores de alta durabilidade e proteção contra surtos, garantindo desempenho estável e prolongado para jogos intensos e multitarefas.",
        imageUrls: [
          "https://utfs.io/f/X0YtGqwFqxR4bVr7ee56mL29KDjep8MVw4UXY57NZxfqRi0s",
          "https://utfs.io/f/X0YtGqwFqxR4zjk4nIU5MoOstAHvrBkz8iuwPmIZfN3UbhTJ",
          "https://utfs.io/f/X0YtGqwFqxR4gX4oA6LZJ9ktbSRyaWeoHVUAn6C1jqY38GPT",
          "https://utfs.io/f/X0YtGqwFqxR4zbmWXiTU5MoOstAHvrBkz8iuwPmIZfN3UbhT",
        ],
        basePrice: 1399,
        categoryId: motherboardCategory.id,
        discountPercentage: 10,
      },
    ];

    await prisma.product.createMany({
      data: motherboards,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl:
          "https://utfs.io/f/7cbf0652-7cdc-468f-9d83-f80a9b0c2c73-11uae7.png",
      },
    });

    const monitors = [
      {
        name: "Dell S2421HN",
        slug: "dell-s2421hn",
        description:
          "O monitor Dell S2421HN é a escolha perfeita para quem busca uma experiência visual envolvente e de alta qualidade. Com uma tela Full HD de 24 polegadas, ele oferece cores vibrantes e detalhes nítidos, ideal para trabalho, jogos e entretenimento. Seu design elegante e bordas finas garantem que ele se encaixe perfeitamente em qualquer ambiente, enquanto a tecnologia IPS proporciona ângulos de visão amplos e consistentes. Com opções de conectividade versáteis, incluindo HDMI e VGA, o S2421HN é fácil de integrar ao seu setup. Experimente um desempenho visual excepcional com o Dell S2421HN!",
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
          "https://utfs.io/f/d97cf538-043d-4cb1-814d-3d79d76ff7e2-te7tat.png",
          "https://utfs.io/f/f6172b7c-f0b3-4f52-8d62-8cc1656bc114-x9wd56.png",
          "https://utfs.io/f/b080961c-872e-4fb1-aaae-6b363493ead3-owwhm1.png",
        ],
        basePrice: 1500,
        categoryId: monitorsCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Dell P2422H",
        slug: "dell-p2422h",
        description:
          "O monitor Dell P2422H é a escolha perfeita para quem busca produtividade e conforto visual. Com tela de 24 polegadas e resolução Full HD, oferece imagens nítidas e cores vibrantes. Seu design elegante e sem bordas facilita a montagem em configurações de múltiplos monitores. O ajuste de altura, inclinação e rotação garante uma ergonomia ideal, reduzindo a fadiga ocular durante longas horas de trabalho. Além disso, conta com várias portas de conexão, como HDMI e DisplayPort, tornando-o compatível com diversos dispositivos. Experimente uma experiência visual aprimorada com o Dell P2422H!",
        imageUrls: [
          "https://utfs.io/f/b61bd487-0e18-4f87-9153-fb8c09faab66-rax9q4.png",
          "https://utfs.io/f/2a01b145-b299-48ae-923f-d784e1471ff6-w5lwxn.png",
          "https://utfs.io/f/e3d6f6a4-7d88-482f-b74c-9eb1f0902571-y0thty.png",
          "https://utfs.io/f/2667bb2f-f8ec-4126-bc22-9892f0f599ef-t64umf.png",
        ],
        basePrice: 2000,
        categoryId: monitorsCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Dell P2723QE",
        slug: "dell-p2723qe",
        description:
          "O monitor Dell P2723QE é uma excelente escolha para quem busca qualidade de imagem e produtividade. Com uma tela de 27 polegadas em resolução 4K, ele oferece cores vibrantes e detalhes impressionantes, tornando-o ideal para trabalhos criativos, jogos e streaming. Seu design moderno e elegante, com bordas finas, proporciona uma experiência visual imersiva, enquanto as opções de conectividade, como USB-C e HDMI, facilitam a conexão com diversos dispositivos. Com recursos ergonômicos que permitem ajustes de altura, inclinação e rotação, o P2723QE garante conforto durante longas horas de uso. Ideal para home office ou ambientes profissionais!",
        imageUrls: [
          "https://utfs.io/f/dde7ea20-ad12-45bb-9310-008dc46897d4-60cp0c.png",
          "https://utfs.io/f/ae7beb12-ac74-4294-9aa6-66fc702d97ab-2cn6it.png",
          "https://utfs.io/f/0d6c9922-bdec-4369-bbf8-9f9a6368bd97-apn21y.png",
          "https://utfs.io/f/14d925f4-b203-4063-adc1-be14f2d029c1-j2mxl3.png",
        ],
        basePrice: 2500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3422DWG",
        slug: "dell-s3422dwg",
        description:
          "O Dell S3422DWG é um monitor curvo de 34 polegadas que oferece uma experiência imersiva e envolvente, ideal para gamers e profissionais criativos. Com uma resolução QHD (3440 x 1440) e tecnologia VA, proporciona cores vibrantes e pretos profundos, garantindo imagens nítidas e realistas. A taxa de atualização de 144 Hz e o tempo de resposta de 1 ms permitem jogabilidade suave e sem borrões, enquanto os recursos de suporte a HDR melhoram ainda mais a qualidade visual. Seu design elegante com bordas finas e ajuste de altura proporciona conforto e estilo para qualquer setup.",
        imageUrls: [
          "https://utfs.io/f/c36e0bab-e635-4213-8f93-c48761871e80-1wl9gu.png",
          "https://utfs.io/f/42454c14-ccec-4e7f-a8e6-cf5f67d73e26-qu5bvz.png",
          "https://utfs.io/f/a1b5e99b-72fd-4472-887e-c563fee2e469-j9eno0.png",
          "https://utfs.io/f/68f08f60-df7f-48a0-929c-27356559782f-5o5er5.png",
        ],
        basePrice: 3200,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell S3222DGM",
        slug: "dell-s3222dgm",
        description:
          " O Dell S3222DGM é um monitor curvo de 32 polegadas, ideal para gamers e profissionais que buscam uma experiência imersiva. Com uma resolução QHD de 2560x1440 e taxa de atualização de 165Hz, ele proporciona imagens nítidas e suaves, perfeitas para jogos e multitarefas. O design elegante com bordas finas e suporte ajustável garante conforto visual e um visual moderno na sua mesa. Além disso, a tecnologia FreeSync oferece um desempenho fluido, eliminando problemas de desfoque e tearing. Aproveite cores vibrantes e um amplo ângulo de visão com o Dell S3222DGM, o monitor que transforma sua experiência visual.",
        imageUrls: [
          "https://utfs.io/f/dee01030-d114-4a76-8d85-8ad6d11d5304-yi0au.png",
          "https://utfs.io/f/2c9c9a7a-f81c-4eb7-882e-80e45cd69044-pw22pz.png",
          "https://utfs.io/f/87cd76a7-b385-4b68-a654-d1199ee61c5e-k7hwu0.png",
          "https://utfs.io/f/b0d742e2-28ed-49bc-977f-b20b2de9a0bd-4q25l5.png",
        ],
        basePrice: 3500,
        categoryId: monitorsCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Dell AW2524HF",
        slug: "dell-aw2524hf",
        description:
          "O monitor Dell AW2524HF é a escolha perfeita para gamers que buscam desempenho e qualidade de imagem excepcionais. Com uma tela de 24,5 polegadas e tecnologia IPS, ele oferece cores vibrantes e ângulos de visão amplos. Com uma taxa de atualização de 240 Hz e um tempo de resposta de 1 ms, você experimenta jogabilidade fluida e sem borrões, ideal para jogos rápidos. Além disso, sua compatibilidade com NVIDIA G-SYNC proporciona uma experiência livre de rasgos. O design elegante e as opções de ajuste ergonômico garantem conforto durante longas sessões de jogo. Transforme sua experiência de jogo com o Dell AW2524HF!",
        imageUrls: [
          "https://utfs.io/f/faaed1da-1d16-4839-8373-7eb813e46dc8-al6r5z.png",
          "https://utfs.io/f/8de1bedc-06a0-47a2-9441-f49a217612ff-zid8e0.png",
          "https://utfs.io/f/15e1f730-ed3a-4bbf-93cb-2cd9992ecfcd-akt5yv.png",
          "https://utfs.io/f/d631cbaf-471e-40cc-be9e-7dd62a1c88bc-ecqwga.png",
        ],
        basePrice: 4200,
        categoryId: monitorsCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl:
          "https://utfs.io/f/b73c526a-9e78-444e-8822-7cda6e857b9f-e7tkoj.png",
      },
    });

    const speakers = [
      {
        name: "Logitech Surround Sound Z607",
        slug: "logitech-surround-sound-z607",
        description:
          "Experimente um som envolvente com o Logitech Surround Sound Z607. Este sistema de alto-falantes 5.1 transforma sua sala em um cinema, oferecendo áudio claro e poderoso para filmes, músicas e jogos. Conecte-se facilmente via Bluetooth, USB ou entrada auxiliar e desfrute de um controle remoto prático para ajustar o volume e as configurações de som. Compacto e elegante, o Z607 se integra perfeitamente a qualquer ambiente, proporcionando uma experiência sonora imersiva sem complicações.",
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
          "https://utfs.io/f/b49c22f5-4df5-4997-a4ff-09fb5486010b-4e4pk7.png",
          "https://utfs.io/f/2faf574c-edc9-4814-b539-e031c20eb5b5-2d9t8a.png",
          "https://utfs.io/f/943d92d3-8bfb-4963-8ec6-7841ac29ed96-94oc0r.png",
        ],
        basePrice: 1200,
        categoryId: speakersCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Logitech Dock",
        slug: "logitech-dock",
        description:
          "O Logitech Dock é a solução ideal para manter sua estação de trabalho organizada e produtiva. Compacto e elegante, ele permite conectar facilmente seu laptop a múltiplos dispositivos com apenas um cabo, simplificando o gerenciamento de cabos. Com portas USB, HDMI e uma entrada de áudio, você pode conectar monitores, teclado, mouse e outros periféricos rapidamente. Além disso, o design moderno combina perfeitamente com qualquer ambiente de trabalho, proporcionando uma experiência de uso fluida e eficiente. Torne seu setup mais prático e estiloso com o Logitech Dock!",
        imageUrls: [
          "https://utfs.io/f/fff82151-82d7-4618-9d0d-1fc96b5f8efb-cukwpp.png",
          "https://utfs.io/f/2f52ea57-35f9-43f0-92e7-09fc97c008e2-gv9ztu.png",
          "https://utfs.io/f/f03d7f00-5595-4fe2-b336-f9952d96fe24-ofz5lr.png",
          "https://utfs.io/f/22d1ff6e-9689-439a-a8b5-a9477f80169a-59vqxs.png",
        ],
        basePrice: 4500,
        categoryId: speakersCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Sony SA-Z9R Speakers",
        slug: "sony-sa-z9r-speakers",
        description:
          "Os Sony SA-Z9R Speakers oferecem uma experiência de áudio imersiva, perfeita para quem busca qualidade e potência. Com um design elegante e compacto, esses alto-falantes proporcionam graves profundos e som cristalino, ideal para música, filmes e jogos. A instalação é fácil, e a compatibilidade com diversos dispositivos torna-os uma excelente escolha para transformar qualquer ambiente em uma verdadeira sala de entretenimento. Sinta a diferença com os Sony SA-Z9R!",
        imageUrls: [
          "https://utfs.io/f/a4d4d15c-da43-4f54-a3b9-9487c11ed4b5-o2pxdo.png",
          "https://utfs.io/f/431b923f-b23c-4022-9881-f965407ab41b-j81a65.png",
          "https://utfs.io/f/ffb002da-22f2-49c4-a4a1-8c7e57bc329a-edcmym.png",
          "https://utfs.io/f/00370513-6b55-443b-b45a-fa8f95f6e29f-9inzr3.png",
        ],
        basePrice: 4000,
        categoryId: speakersCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Sony XB43 Extra Bass",
        slug: "sony-xb43-extra-bass",
        description:
          "O Sony XB43 Extra Bass é o alto-falante perfeito para quem ama música com profundidade e potência. Com um design robusto e à prova d'água, ele traz graves impressionantes que elevam suas playlists a um novo nível. Conecte-se facilmente via Bluetooth, desfrute de até 24 horas de reprodução e leve a festa para onde você for. Além disso, sua iluminação LED cria uma atmosfera vibrante, transformando qualquer ambiente em uma verdadeira experiência musical. Ideal para festas, praia ou momentos de descontração!",
        imageUrls: [
          "https://utfs.io/f/78383361-cc0b-4356-bbf3-043f21d5171d-gxgbj0.png",
          "https://utfs.io/f/c4ab1d24-97a6-48a6-9bfb-74b6215711be-5g9sx1.png",
          "https://utfs.io/f/204b5c37-8023-4633-99be-a95b24c34db7-rtzxd2.png",
          "https://utfs.io/f/b5372e93-9dff-4cd5-a112-ab9d258b2856-kte061.png",
        ],
        basePrice: 3200,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony XB23 Extra Bass",
        slug: "sony-xb23-extra-bass",
        description:
          "O Sony XB43 Extra Bass é o alto-falante perfeito para quem ama música com profundidade e potência. Com um design robusto e à prova d'água, ele traz graves impressionantes que elevam suas playlists a um novo nível. Conecte-se facilmente via Bluetooth, desfrute de até 24 horas de reprodução e leve a festa para onde você for. Além disso, sua iluminação LED cria uma atmosfera vibrante, transformando qualquer ambiente em uma verdadeira experiência musical. Ideal para festas, praia ou momentos de descontração!",
        imageUrls: [
          "https://utfs.io/f/2576317e-a26b-4586-b7ad-7477031684be-f1tve5.png",
          "https://utfs.io/f/5332ae8f-aec7-4768-9b44-7e0d8b2118a9-q9fa1g.png",
          "https://utfs.io/f/008ea186-9d2e-4996-969e-5621d4d4016b-3gfmi3.png",
          "https://utfs.io/f/8422af22-693c-44cb-992f-13e1f8b81cdd-x6aj1m.png",
        ],
        basePrice: 3500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Sony HT-S200F Soundbar",
        slug: "sony-ht-s200f-soundbar",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://utfs.io/f/5e134cd7-e4ec-40aa-ac97-cf63d1eade52-uk14e7.png",
          "https://utfs.io/f/3cc3ce89-2fa5-45bf-931c-818d97371287-wovt9a.png",
          "https://utfs.io/f/a29db5cd-e7c3-44f2-938d-f90a21d993a7-ytqi4d.png",
          "https://utfs.io/f/f3282c27-c987-4420-92cb-ce0673c154f3-y2iuzo.png",
        ],
        basePrice: 2500,
        categoryId: speakersCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const catalogData = {
    experimentos: {
        title: "Experimentos ExP®",
        categories: ["Física", "Química", "Biologia", "Matemática", "Astronomia"],
        products: [
            {
                id: "exp-f01",
                name: "ExP F.01 - LEIS DE NEWTON",
                category: "Física",
                description: "Observação da Lei de Hooke e Aplicação das Leis de Newton. Estudo experimental da associação de Dinamômetros.",
                image: "src/img/prod/fisica/f.01_fisica.jpg",
                features: [
                    "Estudo da Lei de Hooke",
                    "Aplicação das Leis de Newton",
                    "Associação de dinamômetros",
                    "Material portátil completo"
                ],
                includes: [
                    "Dinamômetros calibrados",
                    "Massas aferidas",
                    "Manual de instruções",
                    "Roteiro experimental"
                ],
                videos: [
                    {
                        title: "Demonstração do Experimento",
                        url: "https://fractal.ind.br/videos/Newton.mp4"
                    }
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F01_Leis_de_Newton.pdf"
            },
            {
                id: "exp-f02",
                name: "ExP F.02 - COLISÕES",
                category: "Física",
                description: "Estudos das Colisões. Estudo experimental qualitativo e quantitativo de colisões mecânicas com sistema de pêndulos e massas.",
                image: "src/img/prod/fisica/f.02_fisica.jpg",
                features: [
                    "Colisões elásticas e inelásticas",
                    "Sistema de pêndulos",
                    "Análise quantitativa",
                    "Conservação de energia e momento"
                ],
                includes: [
                    "Pêndulos calibrados",
                    "Esferas de diferentes massas",
                    "Suporte ajustável",
                    "Manual experimental"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F02_Colisoes_01_de_02.pdf"
            },
            {
                id: "exp-f05",
                name: "ExP F.05 - LEIS DA TERMODINÂMICA",
                category: "Física",
                description: "Temperatura, termômetro e troca de calor. Estudo experimental com placas Peltier semicondutoras.",
                image: "src/img/prod/fisica/f.05_fisica.jpg",
                features: [
                    "Placas Peltier semicondutoras",
                    "Medição de temperatura",
                    "Troca de calor",
                    "Efeito termoelétrico"
                ],
                includes: [
                    "Placa Peltier",
                    "Termômetros digitais",
                    "Fonte de alimentação",
                    "Materiais para testes"
                ],
                videos: [
                    {
                        title: "Termodinâmica na Prática",
                        url: "https://fractal.ind.br/videos/Termodinamica.mp4"
                    }
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F05_Leis_da_Termodinamica.pdf"
            },
            {
                id: "exp-f08",
                name: "ExP F.08 - MARAVILHOSO VÁCUO",
                category: "Física",
                description: "Estudo experimental qualitativo e quantitativo sobre vácuo com minibomba de vácuo portátil.",
                image: "src/img/prod/fisica/f.08_fisica.jpg",
                features: [
                    "Minibomba de vácuo portátil",
                    "Estudo do vácuo",
                    "Pressão atmosférica",
                    "Experimentos com gases"
                ],
                includes: [
                    "Bomba de vácuo",
                    "Recipientes de teste",
                    "Manômetro",
                    "Materiais diversos"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F08_Maravilhoso_Vacuo-final.pdf"
            },
            {
                id: "exp-f09",
                name: "ExP F.09 - LEIS DA ELETRÔNICA",
                category: "Física",
                description: "Observação da Lei de Ohm e aplicação das Leis de Kirchhoff. Estudo experimental da associação de resistores.",
                image: "src/img/prod/fisica/f.09_fisica.jpg",
                features: [
                    "Lei de Ohm experimental",
                    "Associação de resistores",
                    "Leis de Kirchhoff",
                    "Circuitos série e paralelo"
                ],
                includes: [
                    "Multímetros",
                    "Resistores diversos",
                    "Fonte de alimentação",
                    "Placa de ligações"
                ],
                videos: [
                    {
                        title: "Eletrônica Básica",
                        url: "https://fractal.ind.br/videos/Eletronica.mp4"
                    }
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F09_Leis_da_Eletronica_R01.pdf"
            },
            {
                id: "exp-f10",
                name: "ExP F.10 - MAGNETISMO BÁSICO",
                category: "Física",
                description: "Fenômeno do Magnetismo natural e artificial. Estudo experimental qualitativo do magnetismo.",
                image: "src/img/prod/fisica/f.10_fisica.jpg",
                features: [
                    "Magnetismo natural e artificial",
                    "Bússola e magnetita",
                    "Visualizador magnético",
                    "Levitação magnética"
                ],
                includes: [
                    "Bússola precision",
                    "Rocha de magnetita",
                    "Cartão visualizador magnético",
                    "Bobina-Oersted"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F10_Magnetismo_Basico.pdf"
            },
            {
                id: "exp-f12",
                name: "ExP F.12 - INDUÇÃO ELETROMAGNÉTICA",
                category: "Física",
                description: "Motores e geradores eletromagnéticos. Estudo experimental dos princípios físicos do funcionamento.",
                image: "src/img/prod/fisica/f.12_fisica.jpg",
                features: [
                    "Princípios de motores",
                    "Geradores eletromagnéticos",
                    "Indução eletromagnética",
                    "Transformação de energia"
                ],
                includes: [
                    "Motor demonstrativo",
                    "Gerador manual",
                    "Bobinas",
                    "Ímãs permanentes"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F12_Inducao_Eletromagnetica.pdf"
            },
            {
                id: "exp-f13",
                name: "ExP F.13 - LEIS DA ÓPTICA GEOMÉTRICA",
                category: "Física",
                description: "Verificação das Leis da Óptica Geométrica. Estudo experimental com lentes esféricas, prisma e espelhos.",
                image: "src/img/prod/fisica/f.13_fisica.jpg",
                features: [
                    "Lentes esféricas",
                    "Prismas ópticos",
                    "Espelhos côncavo e convexo",
                    "Formação de imagens"
                ],
                includes: [
                    "Lentes convergentes e divergentes",
                    "Prisma triangular",
                    "Espelhos curvos",
                    "Fonte de luz"
                ],
                videos: [
                    {
                        title: "Óptica Geométrica",
                        url: "https://fractal.ind.br/videos/Opticag.mp4"
                    }
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F13_Leis_da_Optica_Geometrica.pdf"
            },
            {
                id: "exp-f14",
                name: "ExP F.14 - ÓPTICA FÍSICA",
                category: "Física",
                description: "Estudo da Difração e Polarização da Luz Laser. Estudo experimental qualitativo e quantitativo.",
                image: "src/img/prod/fisica/f.14_fisica.jpg",
                features: [
                    "Difração da luz",
                    "Polarização",
                    "Lei de Malus",
                    "Grades de difração"
                ],
                includes: [
                    "Laser pointer",
                    "Grades de difração (CD/DVD)",
                    "Polarizadores",
                    "Anteparo"
                ],
                videos: [
                    {
                        title: "Óptica Física",
                        url: "https://fractal.ind.br/videos/videop.mp4"
                    }
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F14_Optica_Fisica_R01.pdf"
            },
            {
                id: "exp-f15",
                name: "ExP F.15 - ESTUDO DAS CORES",
                category: "Física",
                description: "Estudo das cores primárias e secundárias no RGB. Lanterna com 3 leds emite as cores primárias.",
                image: "src/img/prod/fisica/f.15_fisica.jpg",
                features: [
                    "Cores primárias RGB",
                    "Combinação de cores",
                    "LEDs coloridos",
                    "Projeção luminosa"
                ],
                includes: [
                    "Lanterna RGB",
                    "LEDs vermelho, verde e azul",
                    "Anteparo branco",
                    "Filtros coloridos"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F15_Estudos_das_Cores.pdf"
            },
            {
                id: "exp-f17",
                name: "ExP F.17 - ESTRUTURAS CRISTALINAS",
                category: "Física",
                description: "Montagem de modelos de estruturas cristalinas. Com esferas e bastões monta-se as 14 estruturas das redes de Bravais.",
                image: "src/img/prod/fisica/f.17_fisica.jpg",
                features: [
                    "Redes de Bravais",
                    "Estruturas cristalinas",
                    "Modelos tridimensionais",
                    "Cristalografia"
                ],
                includes: [
                    "Esferas com 26 furos",
                    "Bastões de 8 tamanhos",
                    "Manual de montagem",
                    "Guia das estruturas"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_F17_Estruturas_Cristalinas.pdf"
            },
            {
                id: "exp-f18",
                name: "ExP F.18 - ESTRUTURAS DO CARBONO",
                category: "Física",
                description: "Formas alotrópicas do carbono. Montagem de modelos das estruturas de Grafeno, Grafite, Diamante, Nanotubo e Fulerenos.",
                image: "src/img/prod/fisica/f.18_fisica.jpg",
                features: [
                    "Formas alotrópicas",
                    "Grafeno e grafite",
                    "Diamante",
                    "Fulerenos C60"
                ],
                includes: [
                    "Esferas de carbono",
                    "Conectores",
                    "Modelos de referência",
                    "Manual detalhado"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP F18 Estruturas do Carbono.pdf"
            },
            {
                id: "exp-a01",
                name: "ExP A.01 - MINITELESCÓPIO",
                category: "Astronomia",
                description: "Minitelescópio formado por lentes e prismas para observações terrestres e celestes.",
                image: "src/img/prod/astro/a.01_astronomia.jpg",
                features: [
                    "Observação terrestre e celeste",
                    "Sistema de lentes",
                    "Montagem portátil",
                    "Ajuste de foco"
                ],
                includes: [
                    "Telescópio desmontável",
                    "Lentes objetiva e ocular",
                    "Tripé básico",
                    "Manual de uso"
                ],
                pdf: "https://fractal.ind.br/pdfs/MiniTelescopio Fractal.pdf"
            },
            {
                id: "exp-a02",
                name: "ExP A.02 - TELESCÓPIO",
                category: "Astronomia",
                description: "Telescópio formado por lentes e prismas, princípio de funcionamento e uso em observações terrestres e celestes.",
                image: "src/img/prod/astro/a.02_astronomia.jpg",
                features: [
                    "Telescópio completo",
                    "Observações astronômicas",
                    "Sistema óptico avançado",
                    "Montagem robusta"
                ],
                includes: [
                    "Telescópio astronômico",
                    "Oculares intercambiáveis",
                    "Tripé ajustável",
                    "Manual astronômico"
                ],
                pdf: "https://fractal.ind.br/pdfs/Telescopio Astronomico Fractal.pdf"
            },
            {
                id: "exp-q01",
                name: "ExP Q.01 - ESTRUTURAS QUÍMICAS",
                category: "Química",
                description: "Montagem de modelos de estruturas moleculares de química orgânica. Modelos de moléculas simples como Hidrogênio, Água, Álcool e Metano.",
                image: "src/img/prod/quim/Q.01_quimica.jpg",
                features: [
                    "Modelos moleculares 3D",
                    "Estruturas orgânicas",
                    "Ligações químicas",
                    "Representação espacial"
                ],
                includes: [
                    "Esferas atômicas coloridas",
                    "Bastões de ligação",
                    "Manual de montagem",
                    "Guia de estruturas"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_Q01_Estruturas_Organicas.pdf"
            },
            {
                id: "exp-q05",
                name: "ExP Q.05 - ESTRUTURAS CRISTALINAS",
                category: "Química",
                description: "Montagem de modelos de estruturas cristalinas. Com esferas e bastões monta-se qualquer uma das estruturas de redes de Bravais.",
                image: "src/img/prod/quim/Q.05_quimica.jpg",
                features: [
                    "Estruturas cristalinas",
                    "Redes de Bravais",
                    "Cristalografia química",
                    "Modelos tridimensionais"
                ],
                includes: [
                    "Esferas cristalinas",
                    "Bastões conectores",
                    "Guia de montagem",
                    "Tabela de estruturas"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_Q05_Estruturas_Cristalinas.pdf"
            },
            {
                id: "exp-q09",
                name: "ExP Q.09 - MINI-REFRIGERADOR PELTIER",
                category: "Química",
                description: "Estudo experimental qualitativo e quantitativo com o mini-refrigerador Peltier que refrigera líquidos e sólidos.",
                image: "src/img/prod/quim/Q.09_quimica.jpg",
                features: [
                    "Refrigeração Peltier",
                    "Efeito termoelétrico",
                    "Refrigeração de líquidos",
                    "Análise térmica"
                ],
                includes: [
                    "Mini-refrigerador Peltier",
                    "Termômetros",
                    "Recipientes de teste",
                    "Fonte de alimentação"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_Q09_Mini_refrigerador_Peltier.pdf"
            },
            {
                id: "exp-q10",
                name: "ExP Q.10 - MINIUSINA DE ÁLCOOL",
                category: "Química",
                description: "Produção de álcool por destilação e fermentação do açúcar com aquecedor e serpentina primária.",
                image: "src/img/prod/quim/Q.10_quimica.jpg",
                features: [
                    "Destilação de álcool",
                    "Processo de fermentação",
                    "Aquecimento controlado",
                    "Separação por destilação"
                ],
                includes: [
                    "Sistema de destilação",
                    "Aquecedor",
                    "Serpentina",
                    "Recipientes graduados"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP_Q10_MiniUsina_de_Alcool-final.pdf"
            },
            {
                id: "exp-q11",
                name: "ExP Q.11 - MINIFÁBRICA DE SABÃO",
                category: "Química",
                description: "Produção de sabão líquido com utensílios portáteis.",
                image: "src/img/prod/quim/Q.11_quimica.jpg",
                features: [
                    "Produção de sabão",
                    "Reação de saponificação",
                    "Química orgânica aplicada",
                    "Processo industrial"
                ],
                includes: [
                    "Reagentes básicos",
                    "Utensílios de mistura",
                    "Recipientes graduados",
                    "Manual de segurança"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP Q.11 MiniFábrica de Sabão .pdf"
            },
            {
                id: "exp-q12",
                name: "ExP Q.12 - ÁCIDOS E BASES I",
                category: "Química",
                description: "Mistura com ácidos e bases. Experimentos interessantes entre esses tipos de substâncias.",
                image: "src/img/prod/quim/Q.12_quimica.jpg",
                features: [
                    "Conceitos de pH",
                    "Ácidos e bases",
                    "Indicadores naturais",
                    "Neutralização"
                ],
                includes: [
                    "Soluções ácidas e básicas",
                    "Indicadores",
                    "Papel tornassol",
                    "Recipientes de teste"
                ]
            },
            {
                id: "exp-b01",
                name: "ExP B.01 - MICROSCÓPIO PRINCÍPIO E USO",
                category: "Biologia",
                description: "Princípio de funcionamento e uso de microscópios. Observações ópticas com lupa e microscópio.",
                image: "src/img/prod/bio/B.01_biologia.jpg",
                features: [
                    "Princípios da microscopia",
                    "Lentes objetivas e oculares",
                    "Preparação de amostras",
                    "Observação científica"
                ],
                includes: [
                    "Microscópio portátil",
                    "Lâminas preparadas",
                    "Lâminas em branco",
                    "Corantes básicos"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP B01 Microscópio, princípio e uso R1.pdf"
            },
            {
                id: "exp-b02",
                name: "ExP B.02 - CORPO HUMANO",
                category: "Biologia",
                description: "Conhecendo o corpo humano e esqueleto. Estudo experimental do corpo e esqueleto.",
                image: "src/img/prod/bio/B.02_biologia.jpg",
                features: [
                    "Anatomia humana",
                    "Sistema esquelético",
                    "Órgãos e sistemas",
                    "Estrutura corporal"
                ],
                includes: [
                    "Modelo do esqueleto",
                    "Órgãos em miniatura",
                    "Cartões informativos",
                    "Manual anatômico"
                ]
            },
            {
                id: "exp-b03",
                name: "ExP B.03 - CÉLULAS",
                category: "Biologia",
                description: "Observando as células. Organização básica das células animal e vegetal como unidade estrutural dos seres vivos.",
                image: "src/img/prod/bio/B.03_biologia.jpg",
                features: [
                    "Células animal e vegetal",
                    "Organelas celulares",
                    "Estrutura celular",
                    "Microscopia celular"
                ],
                includes: [
                    "Modelos celulares",
                    "Lâminas de células",
                    "Lupa de aumento",
                    "Guia celular"
                ]
            },
            {
                id: "exp-m01",
                name: "ExP M.01 - FORMAS GEOMÉTRICAS",
                category: "Matemática",
                description: "Montagem prática de formas geométricas. Estudo das formas geométricas básicas da geometria plana.",
                image: "src/img/prod/mat/M.01_mat.jpg",
                features: [
                    "Geometria plana",
                    "Formas básicas",
                    "Geometria euclidiana",
                    "Construção prática"
                ],
                includes: [
                    "Peças geométricas",
                    "Régua e compasso",
                    "Transferidor",
                    "Manual geométrico"
                ]
            },
            {
                id: "exp-m02",
                name: "ExP M.02 - BALANÇA MATEMÁTICA",
                category: "Matemática",
                description: "Uso prático de uma balança e massas para estudar aritmética. Investigação das 4 operações básicas.",
                image: "src/img/prod/mat/M.02_mat.jpg",
                features: [
                    "Operações básicas",
                    "Equações práticas",
                    "Balança de precisão",
                    "Matemática visual"
                ],
                includes: [
                    "Balança matemática",
                    "Massas numeradas",
                    "Suporte graduado",
                    "Manual de exercícios"
                ],
                pdf: "https://fractal.ind.br/pdfs/ExP M.02_Balança Matemática.pdf"
            },
            {
                id: "exp-m09",
                name: "ExP M.09 - ÓPTICA GEOMÉTRICA",
                category: "Matemática",
                description: "Observação de feixe de laser refletindo e refratando. Estudo prático de feixes retilíneos em espelhos, lentes e prisma.",
                image: "src/img/prod/mat/M.09_mat.jpg",
                features: [
                    "Geometria óptica",
                    "Feixes retilíneos",
                    "Reflexão e refração",
                    "Triângulos ópticos"
                ],
                includes: [
                    "Laser geométrico",
                    "Espelhos planos",
                    "Lentes",
                    "Prisma equilátero"
                ]
            },
            {
                id: "exp-m10",
                name: "ExP M.10 - FIGURAS CRISTALINAS",
                category: "Matemática",
                description: "Montagem prática de figuras cristalinas. A montagem das redes de Bravais com medição de tamanhos e diagonais.",
                image: "src/img/prod/mat/M.10_mat.jpg",
                features: [
                    "Figuras cristalinas",
                    "Medições geométricas",
                    "Cálculo de diagonais",
                    "Geometria espacial"
                ],
                includes: [
                    "Peças cristalinas",
                    "Régua de medição",
                    "Esquadros",
                    "Tabela de medidas"
                ]
            }
        ]
    },
    miniexps: {
        title: "MiniExPs",
        categories: ["Física", "Química", "Biologia", "Matemática"],
        products: [
            {
                id: "miniexp-telescopio",
                name: "MINITELESCÓPIO",
                category: "Física",
                description: "Telescópio portátil para observações terrestres e celestes. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/minitelescopio.webp",
                features: [
                    "Distância focal de uma lupa",
                    "Princípio do telescópio refrator",
                    "Conceito de aberrações cromáticas",
                    "Observações de objetos distantes"
                ],
                includes: [
                    "Corpo principal do telescópio",
                    "Ajuste focal",
                    "Borrachas de proteção",
                    "Suporte para celular",
                    "MiniLupa (M = 2x)",
                    "Pano de limpeza",
                    "Suporte em MDF"
                ],
                videos: [
                    {
                        title: "Materiais do MiniTelescópio",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minitelescopio1.mp4"
                    },
                    {
                        title: "Como usar o MiniTelescópio",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minitelescopio2.mp4"
                    }
                ]
            },
            {
                id: "miniexp-balanca",
                name: "MINIBALANÇA MATEMÁTICA",
                category: "Matemática",
                description: "Balança para estudo prático de aritmética e equações. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/minibalanca.webp",
                features: [
                    "Princípios de soma e subtração",
                    "Multiplicação e divisão práticas",
                    "Resolução de equações",
                    "Fundamentos matemáticos visuais"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Minibraço numerado com 10 pinos",
                    "10 minimassas com maçã",
                    "10 minimassas com abacaxi",
                    "12 moedinhas plásticas",
                    "Parafusos e porcas"
                ],
                videos: [
                    {
                        title: "Materiais da MiniBalança",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minibalanca_matematica.mp4"
                    },
                    {
                        title: "Como usar a MiniBalança",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minibalanca_matematica2.mp4"
                    }
                ]
            },
            {
                id: "miniexp-microscopio",
                name: "MINIMICROSCÓPIO",
                category: "Biologia",
                description: "Microscópio portátil com lentes esféricas para observações microscópicas. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/minimicroscopio.webp",
                features: [
                    "Princípios da ciência óptica",
                    "Observação microscópica histórica",
                    "Visualização de estruturas",
                    "Análises biológicas básicas"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "MiniLupa M = 10x",
                    "MiniLupa M = 30x",
                    "MiniLupa M = 60x",
                    "MiniEsferas sobressalentes",
                    "Palhetas com amostras",
                    "Palhetas limpas"
                ],
                videos: [
                    {
                        title: "Materiais do MiniMicroscópio",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minimicroscopio.mp4"
                    },
                    {
                        title: "Como usar o MiniMicroscópio",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minimicroscopio2.mp4"
                    }
                ]
            },
            {
                id: "miniexp-forcamov",
                name: "FORÇA E MOVIMENTO",
                category: "Física",
                description: "Estudo da Lei de Hooke e Leis de Newton com dinamômetros portáteis. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/forcaemovimento.webp",
                features: [
                    "Lei de Hooke experimental",
                    "Leis de Newton práticas",
                    "Elasticidade de materiais",
                    "Dinâmica de sistemas"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Placa quadriculada de fixação",
                    "2 molas-dinamômetros",
                    "3 chumbadas-massas de 50g",
                    "Régua acrílica 10cm",
                    "Parafusos e porcas",
                    "Ganchinhos"
                ],
                videos: [
                    {
                        title: "Materiais Força e Movimento",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/MiniExperimento_Portátil_Força_e_Mov.mp4"
                    },
                    {
                        title: "Como usar Força e Movimento",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/forca_e_movimento2.mp4"
                    }
                ]
            },
            {
                id: "miniexp-eletronica",
                name: "LEIS DA ELETRÔNICA",
                category: "Física",
                description: "Circuitos eletrônicos, Lei de Ohm e Leis de Kirchhoff com multímetro. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/leisdaeletronica.webp",
                features: [
                    "Lei de Ohm experimental",
                    "Associação de resistores",
                    "Leis de Kirchhoff",
                    "Circuitos série e paralelo"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Multímetro digital",
                    "Garras jacarés",
                    "Resistores diversos",
                    "LEDs brancos",
                    "Suportes para pilhas AAA",
                    "Cabinhos coloridos"
                ],
                videos: [
                    {
                        title: "Materiais Leis da Eletrônica",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/MiniExperimento_Portátil_Leis_da_Elet.mp4"
                    },
                    {
                        title: "Como usar Leis da Eletrônica",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/MiniExperimento_Portátil_Leis_da_Eletrônica.mp4"
                    }
                ]
            },
            {
                id: "miniexp-luz",
                name: "CONTROLANDO A LUZ",
                category: "Física",
                description: "Óptica geométrica com laser, lentes e espelhos para estudo da luz. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/controlandoaluz.webp",
                features: [
                    "Desvio da luz com lentes",
                    "Lei da reflexão",
                    "Lei da refração",
                    "Lei de Descartes prática"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Fonte de luz laser USB",
                    "4 perfis de lentes",
                    "2 perfis de espelhos",
                    "Perfil prisma equilátero",
                    "Régua acrílica 10cm",
                    "Transferidor 360 graus"
                ],
                videos: [
                    {
                        title: "Materiais Controlando a Luz",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/controlando_a_luz.mp4"
                    },
                    {
                        title: "Como usar Controlando a Luz",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/controlando_a_luz2.mp4"
                    }
                ]
            },
            {
                id: "miniexp-vidrarias",
                name: "MINIVIDRARIAS",
                category: "Química",
                description: "Vidrarias de laboratório em miniatura para estudo de equipamentos químicos. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/minividrarias.webp",
                features: [
                    "5 tipos de vidrarias",
                    "Balão de destilação",
                    "Béquer e erlenmeyer",
                    "Retorta e proveta"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Maquete das vidrarias",
                    "Balão de destilação",
                    "Béquer, retorta, erlenmeyer, proveta"
                ],
                videos: [
                    {
                        title: "Materiais e uso das MiniVidrarias",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minividrarias-materiais.mp4"
                    }
                ]
            },
            {
                id: "miniexp-vidrarias2",
                name: "MINIVIDRARIAS II",
                category: "Química",
                description: "Segunda versão das vidrarias com foco em análises clínicas. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/minividrariasii.webp",
                features: [
                    "3 tipos de vidrarias",
                    "Foco em análises clínicas",
                    "Proveta graduada",
                    "Béquer e retorta"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Proveta graduada",
                    "Retorta",
                    "Béquer"
                ],
                videos: [
                    {
                        title: "Materiais MiniVidrarias II",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minividrariasii-materiais.mp4"
                    }
                ]
            },
            {
                id: "miniexp-alambique",
                name: "MINIALAMBIQUE",
                category: "Química",
                description: "Alambique em miniatura para estudo de destilação. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/minialambique.webp",
                features: [
                    "Processo de destilação",
                    "Alambique funcional",
                    "Fermentação",
                    "Trocador de calor"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Maquete de alambique de vidro"
                ],
                videos: [
                    {
                        title: "Materiais e uso do MiniAlambique",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/minialambique-materiais.mp4"
                    }
                ]
            },
            {
                id: "miniexp-torque",
                name: "BALANÇA DE TORQUE",
                category: "Física",
                description: "Estudo do conceito de torque e equilíbrio rotacional. Dimensões: 15x10x5cm",
                price: "R$ 75,00",
                image: "https://fractal.ind.br/miniexp/assets/img/portfolio/balancadetorque.webp",
                features: [
                    "Conceito de torque",
                    "Equilíbrio rotacional",
                    "Alavancas de Arquimedes",
                    "Momento de força"
                ],
                includes: [
                    "Mini caixote em madeira",
                    "Minibraço numerado com 10 pinos",
                    "10 minimassas com maçã",
                    "10 minimassas com abacaxi",
                    "Parafusos e porcas"
                ],
                videos: [
                    {
                        title: "Materiais Balança de Torque",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/balancadetorquemateriais.mp4"
                    },
                    {
                        title: "Como usar Balança de Torque",
                        url: "https://www.fractal.ind.br/miniexp/assets/videos/balancadetorqueuso.mp4"
                    }
                ]
            }
        ]
    },
    souvenirs: {
        title: "Souvenirs Científicos",
        categories: ["Óptica", "Eletrônica", "Mecânica", "Magnetismo"],
        products: [
            {
                id: "souv-lente-div",
                name: "Lente Divergente",
                category: "Óptica",
                description: "Lente divergente de alta qualidade para demonstrações ópticas",
                price: "R$ 20,00",
                image: "src/img/suv/suv_lente_divergente.jpg",
                features: ["Vidro óptico", "Demonstrações práticas", "Tamanho ideal para aulas"]
            },
            {
                id: "souv-prisma",
                name: "Prisma de Acrílico",
                category: "Óptica",
                description: "Prisma triangular para decomposição da luz",
                price: "R$ 20,00",
                image: "src/img/suv/suv_prisma_acrílico.jpg",
                features: ["Acrílico transparente", "Decomposição da luz", "Efeitos ópticos"]
            },
            {
                id: "souv-lente-conv",
                name: "Lente Convergente",
                category: "Óptica",
                description: "Lente convergente para experimentos de foco",
                price: "R$ 20,00",
                image: "src/img/suv/suv_lente_convergente.jpg",
                features: ["Foco ajustável", "Qualidade óptica", "Demonstrações de imagem"]
            },
            {
                id: "souv-espectroscopio",
                name: "Espectroscópio",
                category: "Óptica",
                description: "Espectroscópio portátil para análise de luz",
                price: "R$ 20,00",
                image: "src/img/suv/suv_espectroscopio.jpg",
                features: ["Análise espectral", "Portátil", "Fácil manuseio"]
            },
            {
                id: "souv-resistores",
                name: "Resistores Ôhmicos",
                category: "Eletrônica",
                description: "Kit de resistores para experimentos eletrônicos",
                price: "R$ 20,00",
                image: "src/img/suv/suv_resistores_ohmicos.jpg",
                features: ["Valores calibrados", "Código de cores", "Uso didático"]
            },
            {
                id: "souv-massa-mola",
                name: "Sistema Massa-Mola",
                category: "Mecânica",
                description: "Demonstração de oscilações harmônicas",
                price: "R$ 20,00",
                image: "src/img/suv/suv_sistema_massa-mola.jpg",
                features: ["Oscilações regulares", "Estudo de frequência", "Lei de Hooke"]
            },
            {
                id: "souv-magnetita",
                name: "Magnetita e Bússola",
                category: "Magnetismo",
                description: "Magnetita natural com bússola para magnetismo",
                price: "R$ 20,00",
                image: "src/img/suv/suv_magnetita.jpg",
                features: ["Magnetita natural", "Bússola precision", "Campos magnéticos"]
            },
            {
                id: "souv-geek",
                name: "Souvenir Geek",
                category: "Eletrônica",
                description: "Souvenir científico para entusiastas da ciência",
                price: "R$ 20,00",
                image: "src/img/suv/suv_geek.jpg",
                features: ["Design único", "Tema científico", "Colecionável"]
            },
            {
                id: "souv-visor-mag",
                name: "Visor Magnético",
                category: "Magnetismo",
                description: "Visualizador de campos magnéticos",
                price: "R$ 40,00",
                image: "src/img/suv/suv_visor_magnetico.jpg",
                features: ["Visualização de campos", "Ferramenta didática", "Alta sensibilidade"]
            }
        ]
    },
    sequencias: {
        title: "Sequências Didáticas",
        categories: ["Física Básica", "Química Geral", "Biologia", "Matemática Aplicada"],
        products: [
            {
                id: "seq-teste",
                name: "EM BREVE",
                category: "Física Básica",
                description: "Novidade em breve, fique atento!",
                experiments: [""],
                duration: "",
                level: "",
                features: [
                    ""
                ]
            },
        ]
    }
};
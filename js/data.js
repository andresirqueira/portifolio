/**
 * Dados do portfólio — edite este arquivo para adicionar ou refinar informações.
 * Estrutura pensada para expansão gradual sem mexer no HTML.
 */
const PORTFOLIO_DATA = {
  profile: {
    name: "André Luiz Cardoso Sirqueira",
    role: "Técnico Services Field II Áudio e Vídeo",
    company: "Convergint Technologies",
    companyLogo: "assets/images/companies/convergint.png",
      // Coloque sua foto em assets/images/profile/ e informe o caminho abaixo
    photo: "assets/images/profile/andre.jpg",
    contact: {
      phone: "11 994072342",
      email: "andresirqueira@gmail.com",
      linkedin: "https://www.linkedin.com/in/andre-sirqueira-05ba6a254", // Ex.: https://www.linkedin.com/in/seu-perfil
      
    },
  },

  currentExperience: {
    badge: "Experiência profissional atual",
    banner:
      "As realizações e projetos a seguir foram desenvolvidos na experiência profissional atual como técnico residente prestando serviços para a empresa Whirlpool.",
    achievementsSubtitle:
      "Impacto técnico em automação, infraestrutura e suporte AV nesta posição.",
    projectsSubtitle:
      "Ferramentas e aplicações desenvolvidas durante o cargo atual — clique para detalhes.",
    generalProjectsSubtitle:
      "Projetos pessoais e de aprendizado — clique para detalhes.",
  },

  // Experiências profissionais anteriores — name, logo opcional e description (breve texto)
  previousExperience: [
    { name: "Nexcode Systems", logo: "assets/images/companies/nexcode.jpg", description: "Implantação e manutenção em sistema de controle de acesso" }, 
    { name: "ADT Security", logo: "assets/images/companies/adt.png", description: "Implantação e manutenção em sistema de segurança" },
    { name: "Claro", logo: "assets/images/companies/claro.png", description: "Manutenção em sistema de telecomunicações e áudio e vídeo." },
    { name: "Rádio Imprensa", logo: "assets/images/companies/radio-imprensa.png", description: "Manutenção em sistema de telecomunicações, áudio e vídeo" },
    
  ],

  education: [
    {
      course: "Técncio em Eletrônica",
      institution: "ETE Júlio de Mesquita",
      logo: "assets/images/institutions/etec.jpg",
      period: "1995 – 1998",
      description: "Quatro anos de graduação técnica com ensino médio integrado.",
    },
    {
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Metodista de São Paulo",
      logo: "assets/images/institutions/metodista.png",
      period: "2017 – 2020",
      description: "Graduação tecnológica em análise e desenvolvimento de sistemas.",
    }
  ],

  technicalNote:
    "Todo o ecossistema de scripts de soluções profissionais foi desenvolvido para execução em ambiente local inicialmente.",

  locations: [
    { code: "SP", label: "São Paulo" },
    { code: "JOI", label: "Joinville" },
    { code: "RCL", label: "Rio Claro" },
    { code: "MAN", label: "Manaus" },
    { code: "CA", label: "Controle de Acesso" },
  ],

  achievements: {
  development: {
    icon: "code",
    title: "Realizações e Automações",
    subtitle: "Desenvolvimento Full-Stack / AV",
    items: [
      {
        icon: "chart",
        title: "Automação de Relatórios e Renovação de Contrato",
        description:
          "Ecossistema em HTML, CSS e JavaScript para compilação de dados de manutenções preventivas/corretivas via Google Forms. A visibilidade gerada por relatórios e timelines foi peça-chave para a renovação do contrato de serviços (2024) com o cliente.",
        tags: ["HTML", "CSS", "JavaScript", "Google Forms"],
      },
      {
        icon: "database",
        title: "Gestão de Inventário e Ciclo de Vida",
        description:
          "Sistema com HTML, JavaScript, CSS, Python e SQL para centralização do inventário AV multilocalidades, incluindo cálculo preditivo de ciclo de vida e estimativa de custos para futuras aquisições.",
        tags: ["Python", "SQL", "HTML", "CSS", "JavaScript"],
      },
      {
        icon: "zap",
        title: "Eficiência Energética e Sustentabilidade",
        description:
          "Scripts (Python/JS) integrados a sistemas de UPS para monitoramento de consumo (kW). Timers automatizados de telas (seg–sex, 07h–21h), com redução comprovada de custos energéticos mensais e anuais.",
        tags: ["Python", "JavaScript", "UPS"],
      },
      {
        icon: "network",
        title: "Monitoramento e Diagnóstico de Rede",
        description:
          "Ferramentas em Python e JavaScript para monitoramento ativo (ping) de dispositivos AV na rede com histórico, além de telemetria para parâmetros de qualidade de áudio.",
        tags: ["Python", "JavaScript", "Rede"],
      },
      {
        icon: "map",
        title: "Inovação em Treinamento e UX",
        description:
          "Mapa interativo das salas AV (SP) e simulador de Google Meet para capacitação técnica e suporte ao usuário — ainda em desenvolvimento.",
        tags: ["HTML", "CSS", "JavaScript", "UX"],
      },
    ],
  },
  operations: {
    icon: "settings",
    title: "Gestão Operacional e Suporte Avançado",
    subtitle: "Infraestrutura, contingência e liderança técnica",
    items: [
      {
        icon: "shield",
        title: "Continuidade de Negócios e Contingência",
        description:
          "Soluções técnicas de contorno para manter salas AV ativas durante manutenções críticas, mitigando impactos pela ausência temporária do QSC CORE.",
        tags: ["AV", "Contingência"],
      },
      {
        icon: "server",
        title: "Infraestrutura Digital",
        description:
          "Mitigação de impactos por falha externa (Cloudflare) no servidor Horus Player, com plataforma web de contingência e parametrização manual de Smart TVs LG para restabelecimento imediato dos serviços.",
        tags: ["Infraestrutura", "Web"],
      },
      {
        icon: "wrench",
        title: "Resolução de Problemas Complexos",
        description:
          "Diagnóstico e resolução de falhas críticas de áudio no Auditório (Town Hall SP), com reconfiguração de redes AV para otimização do tráfego de dados.",
        tags: ["Troubleshooting", "Áudio"],
      },
      {
        icon: "mic",
        title: "Melhoria Contínua de Infraestrutura",
        description:
          "Projetos de melhoria acústica e de captação, incluindo especificação e substituição de microfones e sistemas de sonorização.",
        tags: ["Acústica", "Sonorização"],
      },
      {
        icon: "clipboard",
        title: "Rotina Técnica e Governança",
        description:
          "Manutenção preventiva diária (testes matinais), atualização contínua de firmware e consolidação de relatórios mensais de performance para SP, JOI e CA.",
        tags: ["Governança", "Preventiva"],
      },
      {
        icon: "users",
        title: "Suporte de Alto Impacto e Liderança",
        description:
          "Liderança no suporte a eventos corporativos de alta visibilidade e referência técnica para equipes AV de outras unidades.",
        tags: ["Liderança", "Eventos"],
      },
    ],
  },
  },

  professionalProjects: [
    {
      id: "relatorios",
      icon: "chart",
      title: "Relatórios",
      tech: ["JavaScript", "HTML", "CSS"],
      description:
        "Compila dados do Google Forms de manutenções preventivas e corretivas, dando visibilidade e transparência ao cliente. Extração fácil de relatório mensal para compartilhamento.",
      image: "assets/images/projetos/relatorios.png",
      status: "ativo",
    },
    {
      id: "mapa-interativo",
      icon: "map",
      title: "Mapa Interativo",
      tech: ["JavaScript", "HTML", "CSS"],
      description:
        "Facilita a localização e mobilidade no prédio: encontre a sala desejada com ponto de referência e destino, com trajeto por escadas ou elevadores indicando a rota mais rápida.",
      image: "assets/images/projetos/mapa-interativo.png",
      status: "ativo",
    },
    {
      id: "controle-inventario",
      icon: "database",
      title: "Controle de Inventário",
      tech: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
      description:
        "Gerenciamento completo do inventário AV: ambientes, equipamentos, conexões e mapeamento de toda a rede utilizada pelos recursos.",
      image: "assets/images/projetos/controle-inventario.png",
      status: "ativo",
    },
    {
      id: "simulador-meet",
      icon: "monitor",
      title: "Simulador Meet",
      tech: ["JavaScript", "HTML", "CSS"],
      description:
        "Simula sala de reunião com Google Meet e Logitech Meetup. Permite testar comportamento ao alterar conexões ou desligar equipamentos — fonte de aprendizado e simulação.",
      link: {
        url: "https://andresirqueira.github.io/simulador/",
        label: "Acessar o projeto",
      },
      image: "assets/images/projetos/simulador-meet.png",
      status: "ativo",
    },
    {
      id: "economia-energia",
      icon: "zap",
      title: "Economia de Energia",
      tech: ["Python", "JavaScript", "HTML", "CSS"],
      description:
        "Obtém dados online do UPS e compara consumo pleno com horários de timer e finais de semana. Estima economia de energia e financeira mensal e anual com programação de timers nas telas.",
      image: "assets/images/projetos/economia-energia.png",
      status: "ativo",
    },
    {
      id: "ciclo-vida",
      icon: "refresh",
      title: "Ciclo de Vida AV",
      tech: ["JavaScript", "HTML", "CSS"],
      description:
        "Estima tempo de vida e obsolescência dos equipamentos, ordenados por criticidade, com preços médios para planejamento de substituições e custos futuros.",
      image: "assets/images/projetos/ciclo-vida.png",
      status: "em-desenvolvimento",
    },
    {
      id: "qualidade-audio",
      icon: "mic",
      title: "Qualidade de Áudio",
      tech: ["Python"],
      description:
        "Monitoramento de reuniões, detecção de problemas técnicos, análise de participação, troubleshooting automático e logs para suporte técnico.",
      image: "assets/images/projetos/diagnostico-rede.png",
      status: "em-teste",
      features: [
        "Monitoramento de reuniões",
        "Detecção de problemas técnicos",
        "Relatórios de qualidade",
        "Controle de presença e estatísticas",
      ],
    },
    {
      id: "diagnostico-rede",
      icon: "network",
      title: "Diagnóstico de Rede",
      tech: ["JavaScript", "HTML", "CSS", "Python"],
      description:
        "Suite completa de diagnóstico de rede: ping, traceroute, DNS, scan de portas, MAC address, monitor contínuo, teste de velocidade e análise via CSV.",
      image: "assets/images/projetos/qualidade-audio.png",
      status: "ativo",
      features: [
        "Teste rápido — Ping, DNS e portas",
        "Análise completa e detalhada",
        "Análise CSV com múltiplos IPs",
        "Monitor de ping contínuo",
      ],
    },
    {
      id: "monitor-rede-av",
      icon: "server",
      title: "Monitor Rede AV",
      tech: ["JavaScript", "HTML", "CSS", "Python"],
      description:
        "Monitoramento de conectividade dos equipamentos AV com testes de ping e registro de histórico para acompanhamento e troubleshooting.",
      image: "assets/images/projetos/monitor-rede-av.png",
      status: "ativo",
      features: [
        "Teste de ping nos equipamentos da rede AV",
        "Histórico de resultados gravado para consulta",
        "Acompanhamento contínuo da disponibilidade",
        "Suporte à identificação de falhas de conectividade",
      ],
    },
    {
      id: "calculadora-av",
      icon: "calculator",
      title: "Calculadora AV",
      tech: ["JavaScript", "HTML", "CSS", "Python"],
      description:
        "Calcula mês e ano de fabricação do equipamento pela marca, tipo, modelo e serial number. Obtém idade atual e em relação ao tempo de vida estimado.",
      image: "assets/images/projetos/calculadora-av.png",
      status: "em-desenvolvimento",
    },
  ],

  generalProjects: [
    {
      id: "projeto-game",
      icon: "gamepad",
      title: "Projeto Game",
      tech: ["JavaScript", "HTML", "CSS"],
      description:
        "Jogo desenvolvido em JavaScript como projeto de aprendizado em programação e lógica.",
      image: "assets/images/projetos/projeto-game.png",
      status: "ativo",
      link: {
        url: "https://andresirqueira.github.io/projeto-game/",
        label: "Acessar o projeto",
      },
    },
  ],

  // Marcas AV com as quais você tem contato — logos em assets/images/marcas/
  avBrands: [
    { name: "Shure", logo: "assets/images/marcas/shure.png" },
    { name: "Logitech", logo: "assets/images/marcas/logitech.png" },
    { name: "QSC", logo: "assets/images/marcas/qsc.png" },
    { name: "Jabra", logo: "assets/images/marcas/jabra.png" },
    { name: "Audinate", logo: "assets/images/marcas/audinate.png" },
    { name: "LG", logo: "assets/images/marcas/lg.png" },
    { name: "Crestron", logo: "assets/images/marcas/crestron.png" },
    { name: "Huddly", logo: "assets/images/marcas/huddly.png" },
    { name: "Sony", logo: "assets/images/marcas/sony.png" },
    { name: "Epson", logo: "assets/images/marcas/epson.png" },
    { name: "Leyard", logo: "assets/images/marcas/leyard.png" }
  ],

  avTools: [
    { name: "Dante Controller", image: "assets/images/ferramentas/dante-controller.png" },
    { name: "QSYS Designer", image: "assets/images/ferramentas/qsys-designer.png" },
    { name: "Shure Update Utility", image: "assets/images/ferramentas/shure.png" },
    { name: "Wireless Workbench", image: "assets/images/ferramentas/wireless-workbench.png" },
    { name: "Logitech Sync", image: "assets/images/ferramentas/logitech-sync.png" },
    { name: "Shure Device Discovery", image: "assets/images/ferramentas/shure-discovery.png" },
    { name: "Jabra Direct", image: "assets/images/ferramentas/jabra-direct.png" },
  ],

  generalTools: [
    { name: "Microsoft Excel", image: "assets/images/ferramentas/excel.png" },
    { name: "Microsoft Word", image: "assets/images/ferramentas/word.png" },
    { name: "Microsoft PowerPoint", image: "assets/images/ferramentas/powerpoint.png" },
    { name: "Google Sheets", image: "assets/images/ferramentas/sheets.png" },
    { name: "Google Slides", image: "assets/images/ferramentas/slides.png" },
    { name: "Google Documents", image: "assets/images/ferramentas/docs.png" },
    { name: "Google Meet", image: "assets/images/ferramentas/google-meet.png" },
  ],

  programming: [
    { name: "JavaScript", image: "assets/images/ferramentas/javascript.png" },
    { name: "Visual Studio Code", image: "assets/images/ferramentas/vscode.png" },
    { name: "CSS", image: "assets/images/ferramentas/css.png" },
    { name: "HTML", image: "assets/images/ferramentas/html.png" },
    { name: "Python", image: "assets/images/ferramentas/python.png" },
    { name: "SQL", image: "assets/images/ferramentas/sql.png" },
    { name: "GitHub", image: "assets/images/ferramentas/github.png" },
  ],

  certifications: [
    { name: "QSC Q-SYS Certified Level 1", image: "assets/images/ferramentas/cert-qsc.png" },
    { name: "Dante Certified Level 3", image: "assets/images/ferramentas/cert-dante-l3.png" },
    { name: "Dante Certified Level 2", image: "assets/images/ferramentas/cert-dante-l2.png" },
    { name: "Dante Certified Level 1", image: "assets/images/ferramentas/cert-dante-l1.png" },
    { name: "Q-SYS Training Level Zero", image: "assets/images/ferramentas/cert-qsys-zero.png" },
  ],

  aiTools: [
    { name: "Google Gemini", image: "assets/images/ferramentas/gemini.png" },
    { name: "Microsoft Copilot", image: "assets/images/ferramentas/copilot.png" },
    { name: "NotebookLM", image: "assets/images/ferramentas/notebooklm.png" },
    { name: "Cursor", image: "assets/images/ferramentas/cursor.png" },
  ],
};

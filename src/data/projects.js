// Ajoutez vos projets ici : la section "Projets" et le lien correspondant
// dans le menu apparaissent automatiquement dès que ce tableau contient
// au moins un élément (voir components/Projects.js et components/NavBar.js).
//
// Forme attendue pour chaque projet :
// {
//   name: 'Nom du projet',
//   description: 'Une courte description du projet et de son objectif.',
//   image: 'assets/images/projects/mon-projet.png',
//   tags: ['Next.js', 'Node.js'],
//   repoUrl: 'https://github.com/...',
//   demoUrl: 'https://...'
// }

const projects = [
  {
    name: 'SynapNCore',
    description:
      "Plateforme modulaire orchestrée autour d'un Kernel capable de découvrir, valider, charger et activer des modules indépendants (Core Services, Platform Services, Automation, Business Modules). Architecture documentée par des contrats, une gestion du cycle de vie et des ADR (Architecture Decision Records), pensée pour évoluer vers l'orchestration de services IA et d'automatisation.",
    tags: ['Architecture modulaire', 'TypeScript', 'Node.js', 'ADR']
  },
  {
    name: 'GestFinFam',
    description:
      "Application de gestion financière familiale multiplateforme (Flutter, Firebase). A notamment nécessité l'analyse d'un bug spécifique à l'exécution de la PWA sur iOS après fermeture et réouverture de l'application : reproduction, instrumentation, analyse de la cause, correction et validation sur appareil réel.",
    tags: ['Flutter', 'Firebase', 'PWA', 'Cross-platform']
  },
  {
    name: 'EditLetter',
    description:
      "Application mobile permettant de créer des lettres et documents PDF avec l'aide de l'IA.",
    tags: ['Flutter', 'IA', 'Mobile']
  }
];

export default projects;

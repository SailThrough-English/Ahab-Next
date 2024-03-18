interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'SailThrough English',
    description: `Where English is a Breeze ⛵`,
    imgSrc: '/static/images/st_logo.png',
    href: 'https://sailthrough.com.br',
  },
  {
    title: 'Ahab',
    description: `Nosso blog(esse aqui), rodando em Next.js♾️, TypeScript🟦 e Docker🐳, nomeado em homenagem ao capitão Ahab`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/',
  },
]

export default projectsData

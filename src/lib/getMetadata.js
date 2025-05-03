export function getMetadata() {
  const title = `NewStudio - Better YouTube Analytics`;

  return {
    title,
    description: 'Customize your YouTube Studio, with creator-first tools.',
    keywords: ['NewStudio', 'New Studio'],
    author: 'New Studio',
    openGraph: {
      title,
      description: 'Customize your YouTube Studio, with creator-first tools.',
      type: 'website',
      url: 'https://newstudio.app',
      images: [
        {
          url: 'https://newstudio.app/newstudio.png',
          width: 300,
          height: 300,
          alt: 'NewStudio'
        }
      ]
    }
  };
}
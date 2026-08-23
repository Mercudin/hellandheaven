import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts'))
    .filter((post) => post.data.date)
    .sort((a, b) => (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0));

  return rss({
    title: 'Hell and Heaven',
    description: 'Writing.',
    site: context.site ?? 'https://hellandheaven.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date!,
      description: post.data.description,
      link: `/writing/${post.slug}/`,
    })),
  });
}

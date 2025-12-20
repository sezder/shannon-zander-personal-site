export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://your-site.vercel.app'

export default async function sitemap() {
  let routes = ['', '/work', '/working-with-me'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}

import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'dist')
const port = Number(process.env.PORT || 3000)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.mp4': 'video/mp4', '.woff2': 'font/woff2' }

const safePath = (requestPath) => {
  const pathname = decodeURIComponent(requestPath.split('?')[0])
  const candidate = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`)
  return candidate.startsWith(root) ? candidate : null
}

const server = createServer(async (req, res) => {
  try {
    const requested = safePath(req.url || '/')
    if (!requested) return res.writeHead(400).end('Bad request')
    let file = requested
    try { await stat(file) } catch { file = path.join(root, 'index.html') }
    const body = await readFile(file)
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': file.includes('/assets/') ? 'public, max-age=31536000, immutable' : 'no-cache' })
    res.end(body)
  } catch {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Wandor is warming up')
  }
})

server.listen(port, '0.0.0.0', () => console.log(`Wandor listening on ${port}`))

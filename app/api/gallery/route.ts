import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public/gallery')
  const files = fs.readdirSync(galleryDir)
  const images = files.filter(file =>
    ['.jpg', '.jpeg', '.png', '.webp'].includes(path.extname(file).toLowerCase())
  )
  return NextResponse.json({ images })
}
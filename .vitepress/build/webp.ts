import * as fs from 'fs'
import * as path from 'path'
import { glob }from 'glob'

import sharp from 'sharp'

glob('src/images/**/*.png').then((files) => {
  console.log(files)
  files.forEach((file) => {
    const info = path.parse(file)
    const webpFile = path.join(info.dir, `${info.name}.webp`)

    if (fs.existsSync(webpFile)) {
      fs.unlinkSync(webpFile)
    }

    sharp(file).toFile(webpFile, (err, info) => {
      if (err) {
        console.error(err)
      }
      console.log(`${file} converted to webp`)
     });
  })
}).catch((error) => {
  console.error(error)
})

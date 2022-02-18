import sharp from 'sharp';

async function imageSharp(fileName: string, targetFile: string, width: number, height: number): Promise<object> {

    const fullPath = `images/full/${fileName}.jpeg`;

    const resize = await sharp(fullPath)
        .resize(width, height)
        .jpeg()
        .toFile(targetFile);

    return resize;
}

export default imageSharp;
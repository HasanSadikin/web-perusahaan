import { portableTextToHtml, useSanityClient, createImageBuilder } from 'astro-sanity';

const imageBuilder = createImageBuilder(useSanityClient())

const urlForImage = (source) => {
    return imageBuilder.image(source)
} 

export function sanityPortableText(portabletext, customComponents) {
  return portableTextToHtml(portabletext, customComponents);
}